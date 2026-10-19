import { useEffect, useState } from 'react';

/**
 * In-page table of contents. Sticky sidebar on wide screens, a horizontally
 * scrolling chip row on narrow ones. Highlights the section in view.
 */
export default function OnThisPage({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const nodes = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!nodes.length || !('IntersectionObserver' in window)) return undefined;

    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const first = items.find((i) => visible.get(i.id));
        if (first) setActive(first.id);
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc__title">On this page</p>
      <ol className="toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="toc__link"
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
