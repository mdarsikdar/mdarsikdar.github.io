import { FileCheck, Trophy } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SmartLink from '../common/SmartLink.jsx';

function Certificate({ href }) {
  if (!href) return null;
  return (
    <SmartLink href={href} className="text-link text-link--sm">
      <FileCheck size={14} aria-hidden="true" />
      Certificate
    </SmartLink>
  );
}

export function Awards({ items }) {
  return (
    <ol className="ledger">
      {items.map((a) => (
        <Reveal as="li" key={`${a.title}-${a.date}`} className="ledger__row">
          <p className="ledger__date">{a.date}</p>
          <div className="ledger__body">
            <h3 className="ledger__title">
              <Trophy size={16} aria-hidden="true" />
              {a.title}
            </h3>
            <p className="ledger__event">{a.event}</p>
            {a.work && <p className="ledger__work">“{a.work}”</p>}
            <p className="meta">{a.organizer}</p>
            <Certificate href={a.certificate} />
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function Training({ items }) {
  return (
    <ul className="grid grid--2">
      {items.map((t, i) => (
        <Reveal as="li" key={t.title} delay={(i % 2) * 70} className="card training">
          <p className="training__when">
            <span>{t.date}</span>
            <span aria-hidden="true">·</span>
            <span>{t.duration}</span>
          </p>
          <h3 className="training__title">{t.title}</h3>
          <p className="meta">{t.organizer}</p>
          <Certificate href={t.certificate} />
        </Reveal>
      ))}
    </ul>
  );
}
