import { Download } from 'lucide-react';
import { academicLinks, profile } from '../../data/profile.js';
import { linkIcons } from '../common/icons.jsx';
import SmartLink from '../common/SmartLink.jsx';

/** Icon-only row of academic profile links (ORCID, Scholar, …). */
export function ProfileLinks({ className = '', size = 18, exclude = [] }) {
  return (
    <ul className={`profile-links ${className}`.trim()}>
      {academicLinks
        .filter((l) => !exclude.includes(l.id))
        .map((link) => {
          const Icon = linkIcons[link.id];
          return (
            <li key={link.id}>
              <SmartLink href={link.href} className="profile-links__a" title={link.label}>
                <Icon size={size} aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </SmartLink>
            </li>
          );
        })}
    </ul>
  );
}

/** The one "Download CV" button used everywhere. */
export function CvButton({ className = '', compact = false }) {
  return (
    <SmartLink
      href={profile.cv.href}
      download={profile.cv.fileName}
      className={`btn btn--primary ${compact ? 'btn--sm' : ''} ${className}`.trim()}
    >
      <Download size={compact ? 16 : 18} aria-hidden="true" />
      {profile.cv.label}
      <span className="sr-only"> (PDF)</span>
    </SmartLink>
  );
}
