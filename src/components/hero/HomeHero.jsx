import { ArrowDown, Mail, Target } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { conferencePapers, journalArticles, presentations, projects } from '../../data/research.js';
import DnaHelix from './DnaHelix.jsx';
import { ProfilePhoto } from '../profile/ProfileIdentity.jsx';
import { CvButton, ProfileLinks } from '../profile/ProfileLinks.jsx';
import SmartLink from '../common/SmartLink.jsx';
import { TagList } from '../common/ui.jsx';

const plural = (n, one, many) => `${n === 1 ? one : many}`;

export default function HomeHero() {
  const stats = [
    { value: journalArticles.length, label: plural(journalArticles.length, 'Journal article', 'Journal articles') },
    { value: conferencePapers.length, label: plural(conferencePapers.length, 'Proceedings paper', 'Proceedings papers') },
    { value: presentations.length, label: 'Conference presentations' },
    { value: projects.length, label: 'Research projects' },
  ];

  return (
    <section className="hero hero--home" aria-labelledby="hero-name">
      <DnaHelix variant="hero" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__identity enter" style={{ '--i': 0 }}>
            <ProfilePhoto size="xl" priority />
            <div>
              <h1 id="hero-name" className="hero__name">
                {profile.name}
              </h1>
              <p className="hero__role">{profile.role}</p>
            </div>
          </div>

          <p className="hero__bio enter" style={{ '--i': 2 }}>
            {profile.bio.join(' ')}
          </p>

          <div className="hero__focus enter" style={{ '--i': 3 }}>
            <p className="hero__label">Research focus</p>
            <TagList items={profile.researchFocus} tone="dark" label="Research focus" />
            {profile.careerGoal && (
              <p className="hero__goal">
                <Target size={16} aria-hidden="true" />
                <span>
                  <span className="hero__goal-label">Goal</span> {profile.careerGoal}
                </span>
              </p>
            )}
          </div>

          <div className="hero__actions enter" style={{ '--i': 4 }}>
            <CvButton />
            <SmartLink href={`mailto:${profile.email}`} className="btn btn--ghost">
              <Mail size={18} aria-hidden="true" />
              Contact me
            </SmartLink>
            <ProfileLinks className="profile-links--dark" exclude={['email']} />
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero__stats enter" style={{ '--i': 5 }}>
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#education" className="hero__scroll" aria-label="Scroll to education">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
