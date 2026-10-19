import Reveal from '../common/Reveal.jsx';
import { TopicIcon } from '../common/icons.jsx';
import { TagList } from '../common/ui.jsx';

export default function Skills({ groups }) {
  return (
    <ul className="grid grid--2 skills">
      {groups.map((g, i) => (
        <Reveal as="li" key={g.title} delay={(i % 2) * 70} className="card skill">
          <header className="skill__head">
            <span className="icon-tile" aria-hidden="true">
              <TopicIcon name={g.icon} size={20} />
            </span>
            <div>
              <p className="skill__kind">{g.kind}</p>
              <h3 className="skill__title">{g.title}</h3>
            </div>
          </header>
          <TagList items={g.items} label={g.title} />
          {g.note && <p className="meta skill__note">{g.note}</p>}
        </Reveal>
      ))}
    </ul>
  );
}
