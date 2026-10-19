import { profile } from '../../data/profile.js';
import SmartImage from '../common/SmartImage.jsx';
import { CvButton, ProfileLinks } from './ProfileLinks.jsx';

/** Circular portrait with a fine ring and soft shadow. size: xs | sm | md | xl */
export function ProfilePhoto({ size = 'md', priority = false }) {
  return (
    <span className={`avatar avatar--${size}`}>
      <SmartImage
        src={profile.photo.src}
        alt={profile.photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        width="400"
        height="400"
      />
    </span>
  );
}

/**
 * Compact identity panel shown on the Research and Gallery pages:
 * photo, name, affiliation, one-line bio, CV button and profile links.
 */
export function ProfileCard({ className = '' }) {
  return (
    <aside className={`id-card ${className}`.trim()} aria-label="About the author">
      <div className="id-card__top">
        <ProfilePhoto size="md" priority />
        <div>
          <p className="id-card__name">{profile.name}</p>
          <p className="id-card__affil">{profile.affiliation}</p>
        </div>
      </div>
      <p className="id-card__bio">{profile.shortBio}</p>
      <div className="id-card__actions">
        <CvButton compact />
        <ProfileLinks className="profile-links--dark" size={17} />
      </div>
    </aside>
  );
}
