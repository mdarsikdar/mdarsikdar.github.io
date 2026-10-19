import { useEffect } from 'react';
import { profile } from '../data/profile.js';

/**
 * Sets the document title and meta description for the current page.
 * The site name (profile.name) always leads; pages without a title use it alone.
 */
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${profile.name} | ${title}` : profile.name;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}
