import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { academicLinks, profile } from '../../data/profile.js';
import { navItems } from './navItems.js';
import { linkIcons } from '../common/icons.jsx';
import SmartLink from '../common/SmartLink.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const profiles = academicLinks.filter((l) => l.id !== 'email');

  return (
    <footer className="site-footer">
      <div className="site-footer__helix" aria-hidden="true" />
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p className="site-footer__affil">{profile.affiliation}</p>
          <SmartLink href={`mailto:${profile.email}`} className="site-footer__email">
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </SmartLink>
        </div>

        <nav aria-label="Footer">
          <p className="site-footer__heading">Pages</p>
          <ul className="site-footer__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <SmartLink href={profile.cv.href} download={profile.cv.fileName}>
                Curriculum Vitae (PDF)
              </SmartLink>
            </li>
          </ul>
        </nav>

        <div>
          <p className="site-footer__heading">Academic profiles</p>
          <ul className="site-footer__list">
            {profiles.map((link) => {
              const Icon = linkIcons[link.id];
              return (
                <li key={link.id}>
                  <SmartLink href={link.href} className="site-footer__profile">
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container site-footer__base">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
