import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

/*
 * Canvas-rendered, depth-sorted B-DNA double helix with drifting molecules.
 *
 * Geometry follows B-DNA loosely: 10.5 base pairs per turn, and the two
 * backbones sit ~135° apart around the axis rather than 180°, which is what
 * produces the visible major and minor grooves.
 *
 * Cost control: device-pixel-ratio capped at 2, fewer particles on small
 * screens, rendering pauses when the canvas is off-screen or the tab is
 * hidden, and a single static frame is drawn under prefers-reduced-motion.
 */

const STRAND_A = '#2BBFB9';
const STRAND_B = '#7FE3F0';
const BASE_COLOR = { A: '#35C6BF', T: '#A9EFE9', G: '#5C9DEB', C: '#B7D4F8' };
const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
const SEQUENCE = 'ATGGCGTACCTAGGCATTCGATCGGACTTAGCCGATAGCTTAGGCATCGTTACGGA';

const BP_PER_TURN = 10.5;
const GROOVE = 2.36; // radians between the backbones at each base pair
const SUBDIV = 5; // backbone samples per base pair, for smooth curves
const TAU = Math.PI * 2;

const VARIANTS = {
  hero(w, h) {
    const wide = w >= 900;
    const R = Math.max(46, Math.min(116, Math.min(w, h) * (wide ? 0.135 : 0.17)));
    return {
      cx: wide ? w * 0.765 : w * 0.86,
      cy: h * 0.5,
      tilt: wide ? 0.38 : 0.22,
      R,
      rise: R * 0.33,
      length: Math.hypot(w, h) * 1.15,
      speed: 0.00034,
      alpha: wide ? 1 : 0.55,
      particles: wide ? 30 : 12,
      glow: true,
    };
  },
  band(w, h) {
    const wide = w >= 900;
    const R = wide ? 28 : 20;
    return {
      cx: w * 0.6,
      // A level strip along the bottom edge, below the title and the identity card.
      cy: h - R - 14,
      tilt: Math.PI / 2,
      R,
      rise: R * 0.36,
      length: w * 1.5,
      speed: 0.00024,
      alpha: wide ? 0.72 : 0.36,
      particles: wide ? 16 : 6,
      glow: false,
    };
  },
};

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function makeParticles(count, w, h) {
  const rand = seeded(42);
  return Array.from({ length: count }, () => ({
    x0: rand() * w,
    y0: rand() * h,
    r: 0.9 + rand() * 1.9,
    vy: 0.005 + rand() * 0.012, // px per ms, drifting upward
    phase: rand() * TAU,
    hex: rand() < 0.2,
    size: 5 + rand() * 6,
    spin: (rand() - 0.5) * 0.0003,
  }));
}

function drawHexagon(ctx, x, y, size, rot) {
  ctx.beginPath();
  for (let k = 0; k < 6; k += 1) {
    const a = rot + (k * Math.PI) / 3;
    const px = x + size * Math.cos(a);
    const py = y + size * Math.sin(a);
    if (k === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

export default function DnaHelix({ variant = 'hero', className = '' }) {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    let w = 0;
    let h = 0;
    let cfg = null;
    let particles = [];
    let raf = 0;
    let onScreen = true;
    const start = performance.now();

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cfg = VARIANTS[variant](w, h);
      particles = makeParticles(cfg.particles, w, h);
    }

    function drawParticles(t) {
      const span = h + 40;
      const pts = particles.map((p) => ({
        p,
        x: p.x0 + Math.sin(t * 0.00035 + p.phase) * 10,
        y: ((((p.y0 - p.vy * t) % span) + span) % span) - 20,
      }));

      // Faint bonds between nearby free molecules.
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i += 1) {
        for (let j = i + 1; j < pts.length; j += 1) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000) {
            ctx.globalAlpha = cfg.alpha * 0.14 * (1 - d2 / 9000);
            ctx.strokeStyle = STRAND_B;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      for (const { p, x, y } of pts) {
        if (p.hex) {
          ctx.globalAlpha = cfg.alpha * 0.22;
          ctx.strokeStyle = STRAND_B;
          ctx.lineWidth = 1;
          drawHexagon(ctx, x, y, p.size, p.phase + t * p.spin);
        } else {
          ctx.globalAlpha = cfg.alpha * 0.4;
          ctx.fillStyle = '#D9F6F8';
          ctx.beginPath();
          ctx.arc(x, y, p.r, 0, TAU);
          ctx.fill();
        }
      }
    }

    function drawHelix(t) {
      const { cx, cy, tilt, R, rise, length, speed, alpha, glow } = cfg;
      const cos = Math.cos(tilt);
      const sin = Math.sin(tilt);
      const twist = TAU / BP_PER_TURN;
      const rot = t * speed;
      const pairs = Math.ceil(length / rise);
      const y0 = -length / 2;

      const project = (angle, along) => {
        const x = R * Math.cos(angle);
        return { x: cx + x * cos - along * sin, y: cy + x * sin + along * cos, z: Math.sin(angle) };
      };

      if (glow) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 3.4);
        g.addColorStop(0, 'rgba(43, 191, 185, 0.16)');
        g.addColorStop(1, 'rgba(43, 191, 185, 0)');
        ctx.globalAlpha = 1;
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      const items = [];

      // Backbones, sampled finely so the curves stay smooth.
      for (const [offset, color] of [[0, STRAND_A], [GROOVE, STRAND_B]]) {
        let prev = null;
        for (let s = 0; s <= pairs * SUBDIV; s += 1) {
          const along = y0 + (s * rise) / SUBDIV;
          const pt = project((s * twist) / SUBDIV + rot + offset, along);
          if (prev) items.push({ kind: 'seg', z: (prev.z + pt.z) / 2, a: prev, b: pt, color });
          prev = pt;
        }
      }

      // Base pairs: two coloured halves meeting in the middle, plus nucleotide nodes.
      for (let i = 0; i <= pairs; i += 1) {
        const along = y0 + i * rise;
        const theta = i * twist + rot;
        const a = project(theta, along);
        const b = project(theta + GROOVE, along);
        const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 };
        const base = SEQUENCE[i % SEQUENCE.length];
        items.push({ kind: 'rung', z: (a.z + mid.z) / 2, a, b: mid, color: BASE_COLOR[base] });
        items.push({ kind: 'rung', z: (b.z + mid.z) / 2, a: mid, b, color: BASE_COLOR[PAIR[base]] });
        items.push({ kind: 'node', z: a.z, a, color: STRAND_A });
        items.push({ kind: 'node', z: b.z, a: b, color: STRAND_B });
      }

      items.sort((m, n) => m.z - n.z);
      ctx.lineCap = 'round';

      for (const it of items) {
        const depth = (it.z + 1) / 2; // 0 = back, 1 = front
        if (it.kind === 'seg') {
          ctx.globalAlpha = alpha * (0.22 + 0.78 * depth);
          ctx.strokeStyle = it.color;
          ctx.lineWidth = 1.2 + 2.8 * depth;
          ctx.beginPath();
          ctx.moveTo(it.a.x, it.a.y);
          ctx.lineTo(it.b.x, it.b.y);
          ctx.stroke();
        } else if (it.kind === 'rung') {
          ctx.globalAlpha = alpha * (0.14 + 0.6 * depth);
          ctx.strokeStyle = it.color;
          ctx.lineWidth = 1 + 2.2 * depth;
          ctx.beginPath();
          ctx.moveTo(it.a.x, it.a.y);
          ctx.lineTo(it.b.x, it.b.y);
          ctx.stroke();
        } else {
          ctx.globalAlpha = alpha * (0.28 + 0.72 * depth);
          ctx.fillStyle = it.color;
          ctx.beginPath();
          ctx.arc(it.a.x, it.a.y, 1.5 + 3.3 * depth, 0, TAU);
          ctx.fill();
          if (depth > 0.75) {
            ctx.globalAlpha = alpha * 0.55 * (depth - 0.75) * 4;
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(it.a.x - 1, it.a.y - 1, 1.1 + 0.8 * depth, 0, TAU);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function render(now) {
      const t = reduced ? 2400 : now - start;
      ctx.clearRect(0, 0, w, h);
      drawParticles(t);
      drawHelix(t);
      if (!canvas.dataset.ready) canvas.dataset.ready = 'true';
    }

    function loop(now) {
      render(now);
      raf = requestAnimationFrame(loop);
    }

    function play() {
      if (reduced || raf || !onScreen || document.hidden) return;
      raf = requestAnimationFrame(loop);
    }

    function pause() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    resize();
    render(performance.now());
    play();

    const ro = new ResizeObserver(() => {
      resize();
      render(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) play();
      else pause();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [variant, reduced]);

  return <canvas ref={canvasRef} className={`dna-canvas ${className}`.trim()} aria-hidden="true" />;
}
