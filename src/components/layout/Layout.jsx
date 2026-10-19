import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/** Scroll to top (or to #hash) on navigation and move focus to <main> for screen readers. */
function useRouteFocus(mainRef) {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash, mainRef]);
}

export default function Layout() {
  const mainRef = useRef(null);
  useRouteFocus(mainRef);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
