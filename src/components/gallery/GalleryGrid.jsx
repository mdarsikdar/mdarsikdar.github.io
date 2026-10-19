import { Camera, Maximize2 } from 'lucide-react';
import SmartImage from '../common/SmartImage.jsx';

export default function GalleryGrid({ items, onOpen }) {
  return (
    <ul className="gallery">
      {items.map((item, i) => (
        <li key={item.id} className="gallery__item">
          {item.src ? (
            <button type="button" className="gallery__btn" onClick={(e) => onOpen(i, e.currentTarget)}>
              <span className="sr-only">Enlarge photo: </span>
              <SmartImage
                src={item.thumb ?? item.src}
                alt={item.alt}
                className="gallery__img"
                style={{ '--focus': item.focus ?? 'center' }}
                width="720"
                height="540"
              />
              <span className="gallery__zoom" aria-hidden="true">
                <Maximize2 size={18} />
              </span>
            </button>
          ) : (
            <div className="gallery__placeholder">
              <Camera size={24} aria-hidden="true" />
              <span>Photo slot: {item.category}</span>
            </div>
          )}
          <div className="gallery__caption">
            <p className="gallery__cat">{item.category}</p>
            <p className="gallery__title">{item.caption}</p>
            {(item.date || item.place) && (
              <p className="gallery__date">{[item.date, item.place].filter(Boolean).join(' · ')}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
