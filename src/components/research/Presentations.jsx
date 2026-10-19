import { Award, FileCheck, MapPin, Mic, Presentation } from 'lucide-react';
import { SELF } from '../../data/research.js';
import Reveal from '../common/Reveal.jsx';
import SmartLink from '../common/SmartLink.jsx';
import { AuthorList, StatusBadge } from '../common/ui.jsx';

export function PresentationList({ items }) {
  return (
    <ol className="talks">
      {items.map((p) => {
        const Icon = p.format.startsWith('Oral') ? Mic : Presentation;
        return (
          <Reveal as="li" key={`${p.event}-${p.title}`} className="talk">
            <div className="talk__date">
              <span>{p.date}</span>
            </div>
            <div className="talk__body">
              <p className="talk__format">
                <Icon size={14} aria-hidden="true" />
                {p.format} · {p.role}
              </p>
              <h4 className="talk__title">{p.title}</h4>
              <AuthorList authors={p.authors} self={SELF} />
              <p className="talk__event">{p.event}</p>
              <p className="meta meta--icon">
                <MapPin size={14} aria-hidden="true" />
                <span>
                  {p.venue}
                  {p.organizer && ` · Organised by ${p.organizer}`}
                </span>
              </p>
              <p className="link-row">
                {p.award && (
                  <span className="award-pill">
                    <Award size={14} aria-hidden="true" />
                    {p.award}
                  </span>
                )}
                {p.certificate && (
                  <SmartLink href={p.certificate} className="text-link text-link--sm">
                    <FileCheck size={14} aria-hidden="true" />
                    Certificate
                  </SmartLink>
                )}
              </p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

export function ManuscriptList({ items }) {
  return (
    <ul className="grid grid--2">
      {items.map((m) => (
        <Reveal as="li" key={m.title} className="card manuscript">
          <StatusBadge status={m.status} />
          <h4 className="manuscript__title">{m.title}</h4>
          <AuthorList authors={m.authors} self={SELF} />
          <p className="meta">
            <em>{m.venue}</em>
            {m.reference && <span> · {m.reference}</span>}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
