import { Award, GraduationCap, MapPin } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { TagList } from '../common/ui.jsx';

export default function Education({ items }) {
  return (
    <div className="stack">
      {items.map((ed) => (
        <Reveal as="article" key={ed.degree} className="card edu">
          <div className="edu__main">
            {ed.logo ? (
              <span className="edu__logo">
                <SmartImage src={ed.logo.src} alt={ed.logo.alt} width="192" height="192" />
              </span>
            ) : (
              <div className="edu__icon" aria-hidden="true">
                <GraduationCap size={22} />
              </div>
            )}
            <div>
              <h3 className="card__title">{ed.degree}</h3>
              <p className="edu__inst">{ed.institution}</p>
              {(ed.department || ed.faculty) && (
                <p className="meta">{[ed.department, ed.faculty].filter(Boolean).join(' · ')}</p>
              )}
              <p className="meta meta--icon">
                <MapPin size={14} aria-hidden="true" />
                {ed.location}
              </p>
              {ed.result && (
                <p className="edu__grade">
                  {ed.result.label}: {ed.result.value} / {ed.result.scale}
                  {ed.result.note && <span className="edu__grade-note"> ({ed.result.note})</span>}
                </p>
              )}
              <p className="chip-period">{ed.period}</p>
            </div>
          </div>

          {(ed.honors?.length > 0 || ed.coursework?.length > 0) && (
            <div className="edu__extra">
              {ed.honors?.length > 0 && (
                <div>
                  <h4 className="mini-heading">Honours</h4>
                  <ul className="plain-list">
                    {ed.honors.map((h) => (
                      <li key={h} className="meta--icon">
                        <Award size={15} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {ed.coursework?.length > 0 && (
                <div>
                  <h4 className="mini-heading">Relevant coursework</h4>
                  <TagList items={ed.coursework} label="Relevant coursework" />
                </div>
              )}
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
