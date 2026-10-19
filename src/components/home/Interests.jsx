import Reveal from '../common/Reveal.jsx';
import { TopicIcon } from '../common/icons.jsx';

export default function Interests({ items }) {
  return (
    <ul className="grid grid--3 interests">
      {items.map((it, i) => (
        <Reveal as="li" key={it.title} delay={(i % 3) * 60} className="interest">
          <span className="interest__icon" aria-hidden="true">
            <TopicIcon name={it.icon} size={22} />
          </span>
          <h3 className="interest__title">{it.title}</h3>
          {it.text && <p className="interest__text">{it.text}</p>}
        </Reveal>
      ))}
    </ul>
  );
}
