import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/hero/PageHero.jsx';

export default function NotFoundPage() {
  usePageMeta({ title: 'Page not found' });
  return (
    <PageHero eyebrow="404" title="This sequence didn't align" intro="The page you're looking for doesn't exist or has moved.">
      <p className="enter" style={{ '--i': 3 }}>
        <Link to="/" className="btn btn--ghost">
          Back to home
        </Link>
      </p>
    </PageHero>
  );
}
