import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import usePageMeta from '../hooks/usePageMeta.js';
import { gallery, galleryCategories } from '../data/gallery.js';
import PageHero from '../components/hero/PageHero.jsx';
import { FilterTabs } from '../components/common/ui.jsx';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import Lightbox from '../components/gallery/Lightbox.jsx';

export default function GalleryPage() {
  usePageMeta({
    title: 'Gallery',
    description:
      'Photographs from the laboratory, conferences, poster sessions, awards and student leadership events of Md. Ataur Rahman Sikdar.',
  });

  const [filter, setFilter] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);
  const triggerRef = useRef(null);

  const options = useMemo(
    () =>
      [
        { value: 'all', label: 'All', count: gallery.length },
        ...galleryCategories.map((c) => ({
          value: c,
          label: c,
          count: gallery.filter((g) => g.category === c).length,
        })),
      ].filter((o) => o.count > 0),
    [],
  );

  const shown = filter === 'all' ? gallery : gallery.filter((g) => g.category === filter);
  // The lightbox only steps through photos that exist.
  const viewable = shown.filter((g) => g.src);

  const open = (i, trigger) => {
    triggerRef.current = trigger;
    setOpenIndex(viewable.indexOf(shown[i]));
  };

  const close = useCallback(() => setOpenIndex(null), []);

  // Return focus to the photo that opened the viewer. This runs after the
  // lightbox's cleanup has removed `inert` from the page, so focus can land.
  useEffect(() => {
    if (openIndex != null || !triggerRef.current) return;
    if (document.contains(triggerRef.current)) triggerRef.current.focus();
    triggerRef.current = null;
  }, [openIndex]);

  const step = useCallback(
    (d) => setOpenIndex((i) => (i + d + viewable.length) % viewable.length),
    [viewable.length],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the lab and beyond"
        intro="Laboratory work, poster sessions, conferences, awards and student leadership. Select a photo to view it full size."
      />

      <div className="container gallery-page">
        <h2 className="sr-only">Photographs</h2>
        <div className="toolbar">
          <FilterTabs
            label="Filter photos by category"
            options={options}
            value={filter}
            onChange={(v) => {
              setFilter(v);
              setOpenIndex(null);
            }}
          />
        </div>
        <GalleryGrid items={shown} onOpen={open} />
      </div>

      {openIndex != null && openIndex >= 0 && (
        <Lightbox items={viewable} index={openIndex} onClose={close} onStep={step} />
      )}
    </>
  );
}
