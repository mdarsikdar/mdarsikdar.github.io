import { ArrowUpRight, Building2, CalendarDays } from 'lucide-react';
import { labWorkTypes } from '../../data/research.js';
import SmartImage from '../common/SmartImage.jsx';
import SmartLink from '../common/SmartLink.jsx';
import { TagList } from '../common/ui.jsx';

const categoryKey = (c) => c.toLowerCase().replace(/[^a-z]+/g, '-');

export default function LabWorkCard({ work }) {
  return (
    <article className="card lab" data-category={categoryKey(work.category)}>
      <div className="lab__media">
        {work.image ? (
          <SmartImage src={work.image.src} alt={work.image.alt} />
        ) : (
          <div className="lab__pattern" aria-hidden="true" />
        )}
        <span className="lab__category">{work.category}</span>
      </div>

      <div className="lab__body">
        <p className={`type-badge type-badge--${work.type}`}>{labWorkTypes[work.type]}</p>
        <h3 className="card__title">{work.title}</h3>

        <div className="meta-row">
          {work.setting && (
            <span className="meta meta--icon">
              <Building2 size={14} aria-hidden="true" />
              {work.setting}
            </span>
          )}
          {work.period && (
            <span className="meta meta--icon">
              <CalendarDays size={14} aria-hidden="true" />
              {work.period}
            </span>
          )}
        </div>

        <p className="lab__objective">
          <span className="mini-heading">Objective</span>
          {work.objective}
        </p>

        <div className="lab__block">
          <h4 className="mini-heading">Methods &amp; techniques</h4>
          <TagList items={work.methods} tone="teal" label="Methods and techniques" />
        </div>

        {work.tools?.length > 0 && (
          <div className="lab__block">
            <h4 className="mini-heading">Software, databases &amp; instruments</h4>
            <TagList items={work.tools} label="Software, databases and instruments" />
          </div>
        )}

        {work.findings?.length > 0 && (
          <div className="lab__block">
            <h4 className="mini-heading">Key observations</h4>
            <ul className="bullets bullets--sm">
              {work.findings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {work.note && <p className="lab__note">{work.note}</p>}

        {work.related?.length > 0 && (
          <p className="link-row">
            {work.related.map((r) => (
              <SmartLink key={r.href} href={r.href} className="text-link text-link--sm">
                {r.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </SmartLink>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}
