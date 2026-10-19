import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { navItems } from './navItems.js';
import { ProfilePhoto } from '../profile/ProfileIdentity.jsx';
import { CvButton, ProfileLinks } from '../profile/ProfileLinks.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Transparent over the navy cover, solid once the page scrolls.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Escape and outside clicks close the menu.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!panelRef.current?.contains(e.target) && !toggleRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <header className={`site-header ${solid || open ? 'is-solid' : ''}`}>
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label={`${profile.name}, home`}>
          <ProfilePhoto size="xs" priority />
          <span className="brand__name">{profile.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="site-nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <CvButton compact className="site-nav__cv" />
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div id={menuId} ref={panelRef} className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Main (mobile)">
          <ul className="mobile-menu__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="mobile-menu__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <CvButton />
          <ProfileLinks className="profile-links--dark" />
        </div>
      </div>
    </header>
  );
}
