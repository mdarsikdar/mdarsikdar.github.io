import { ArrowUpRight } from 'lucide-react';
import { academicLinks } from '../../data/profile.js';
import { linkIcons } from '../common/icons.jsx';
import Reveal from '../common/Reveal.jsx';
import SmartLink from '../common/SmartLink.jsx';

/** Labelled cards for ORCID, Google Scholar, ResearchGate, GitHub, LinkedIn and email. */
export default function ProfileLinkGrid() {
  return (
    <ul className="grid grid--3 link-grid">
      {academicLinks.map((link, i) => {
        const Icon = linkIcons[link.id];
        return (
          <Reveal as="li" key={link.id} delay={(i % 3) * 60}>
            <SmartLink href={link.href} className={`link-card link-card--${link.id}`}>
              <span className="link-card__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <span className="link-card__text">
                <span className="link-card__label">{link.label}</span>
                <span className="link-card__detail">{link.detail}</span>
              </span>
              <ArrowUpRight size={16} className="link-card__arrow" aria-hidden="true" />
            </SmartLink>
          </Reveal>
        );
      })}
    </ul>
  );
}
