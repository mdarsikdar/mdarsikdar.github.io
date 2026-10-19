import { ArrowUpRight, MapPin, UserRound } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SmartLink from '../common/SmartLink.jsx';
import { TagList } from '../common/ui.jsx';

/** Reverse-chronological experience timeline. */
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((job) => (
        <Reveal as="li" key={`${job.role}-${job.organization}`} className="timeline__item">
          <span className={`timeline__node ${job.current ? 'is-current' : ''}`} aria-hidden="true" />
          <article className="card timeline__card">
            <header className="timeline__head">
              <div>
                <h3 className="card__title">{job.role}</h3>
                <p className="timeline__org">
                  {job.organization}
                  {job.host && <span className="timeline__host">, {job.host}</span>}
                </p>
              </div>
              <p className="chip-period">
                {job.current && <span className="live-dot" aria-hidden="true" />}
                {job.period}
              </p>
            </header>

            <div className="meta-row">
              <span className="meta meta--icon">
                <MapPin size={14} aria-hidden="true" />
                {job.location}
              </span>
              {job.supervisor && (
                <span className="meta meta--icon">
                  <UserRound size={14} aria-hidden="true" />
                  {job.supervisor}
                </span>
              )}
            </div>

            {job.summary && <p className="timeline__summary">{job.summary}</p>}

            <ul className="bullets">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <TagList items={job.skills} tone="teal" label="Skills used" />

            {job.links?.length > 0 && (
              <p className="link-row">
                {job.links.map((l) => (
                  <SmartLink key={l.href} href={l.href} className="text-link">
                    {l.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </SmartLink>
                ))}
              </p>
            )}
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
