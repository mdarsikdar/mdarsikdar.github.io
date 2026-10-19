import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SmartImage from '../common/SmartImage.jsx';
import { asset } from '../../utils/asset.js';

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';

/**
 * Modal photo viewer. Escape closes, arrow keys and swipes step through,
 * focus is trapped inside and the rest of the page is made inert.
 */
export default function Lightbox({ items, index, onClose, onStep }) {
  const item = items[index];
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const many = items.length > 1;

  // Lock page scroll, make the app inert, focus the close button.
  useEffect(() => {
    const root = document.getElementById('root');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (root) root.inert = true;
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      if (root) root.inert = false;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && many) onStep(1);
      else if (e.key === 'ArrowLeft' && many) onStep(-1);
      else if (e.key === 'Tab') {
        const nodes = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, onStep, many]);

  // Preload the neighbours so stepping feels instant.
  useEffect(() => {
    [-1, 1].forEach((d) => {
      const next = items[(index + d + items.length) % items.length];
      if (next?.src) new Image().src = asset(next.src);
    });
  }, [index, items]);

  if (!item) return null;
  const meta = [item.date, item.place].filter(Boolean).join(' · ');

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${items.length}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose}>
        <X size={22} aria-hidden="true" />
        <span className="sr-only">Close photo viewer</span>
      </button>

      {many && (
        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => onStep(-1)}>
          <ChevronLeft size={26} aria-hidden="true" />
          <span className="sr-only">Previous photo</span>
        </button>
      )}

      <figure
        className="lightbox__figure"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null || !many) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <SmartImage
          key={item.id}
          src={item.src}
          alt={item.alt}
          loading="eager"
          className="lightbox__img"
          width={item.width}
          height={item.height}
        />
        <figcaption className="lightbox__caption">
          <span className="lightbox__count" aria-live="polite">
            {index + 1} / {items.length}
          </span>
          <span className="lightbox__title">{item.caption}</span>
          {meta && <span className="lightbox__meta">{meta}</span>}
        </figcaption>
      </figure>

      {many && (
        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => onStep(1)}>
          <ChevronRight size={26} aria-hidden="true" />
          <span className="sr-only">Next photo</span>
        </button>
      )}
    </div>,
    document.body,
  );
}
