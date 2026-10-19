import { FileCheck } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import SmartLink from '../common/SmartLink.jsx';

export default function Volunteering({ items }) {
  return (
    <ul className="grid grid--2">
      {items.map((v, i) => (
        <Reveal as="li" key={v.organization} delay={(i % 2) * 70} className="card org">
          <div className="org__logo" aria-hidden="true">
            {v.logo ? <SmartImage src={v.logo} alt="" /> : <span>{v.monogram}</span>}
          </div>
          <div className="org__body">
            <p className="org__role">{v.role}</p>
            <h3 className="org__name">{v.organization}</h3>
            {v.unit && <p className="meta">{v.unit}</p>}
            <p className="chip-period chip-period--sm">{v.period}</p>
            {v.contributions?.length > 0 && (
              <ul className="bullets bullets--sm">
                {v.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            {v.certificate && (
              <SmartLink href={v.certificate} className="text-link text-link--sm">
                <FileCheck size={14} aria-hidden="true" />
                Certificate
              </SmartLink>
            )}
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
