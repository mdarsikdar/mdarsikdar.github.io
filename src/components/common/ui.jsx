import { statusLabels } from '../../data/research.js';
import Reveal from './Reveal.jsx';

/** Page section with numbered eyebrow, serif title and optional lede. */
export function Section({ id, index, eyebrow, title, lede, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <Reveal as="header" className="section__head">
        <p className="eyebrow">
          {index && <span className="eyebrow__num">{index}</span>}
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {lede && <p className="section__lede">{lede}</p>}
      </Reveal>
      {children}
    </section>
  );
}

export function Tag({ children, tone = 'default' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}

export function TagList({ items, tone, label }) {
  if (!items?.length) return null;
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}

export function StatusBadge({ status }) {
  return (
    <span className={`status status--${status}`}>
      <span className="status__dot" aria-hidden="true" />
      {statusLabels[status] ?? status}
    </span>
  );
}

/** Segmented filter buttons. `options` is [{ value, label, count }]. */
export function FilterTabs({ label, options, value, onChange }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className="filters__btn"
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
          {opt.count != null && <span className="filters__count">{opt.count}</span>}
        </button>
      ))}
    </div>
  );
}

/** Author list with the portfolio owner highlighted. */
export function AuthorList({ authors, self }) {
  if (!authors?.length) return null;
  return (
    <p className="authors">
      {authors.map((name, i) => (
        <span key={`${name}-${i}`}>
          {name === self ? <strong className="authors__self">{name}</strong> : name}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}
