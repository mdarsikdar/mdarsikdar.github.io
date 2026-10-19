import DnaHelix from './DnaHelix.jsx';
import { ProfileCard } from '../profile/ProfileIdentity.jsx';

/** Shorter cover used by inner pages: page title on the left, identity card on the right. */
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="hero hero--band" aria-labelledby="page-title">
      <DnaHelix variant="band" />
      <div className="container band__inner">
        <div className="band__text">
          <p className="eyebrow eyebrow--dark enter" style={{ '--i': 0 }}>
            {eyebrow}
          </p>
          <h1 id="page-title" className="band__title enter" style={{ '--i': 1 }}>
            {title}
          </h1>
          {intro && (
            <p className="band__intro enter" style={{ '--i': 2 }}>
              {intro}
            </p>
          )}
          {children}
        </div>
        <div className="enter" style={{ '--i': 2 }}>
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
