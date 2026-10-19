import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { asset } from '../../utils/asset.js';

/**
 * <img> with a shimmer while loading and a labelled fallback if the file is
 * missing, so a broken path never shows the browser's broken-image icon.
 */
export default function SmartImage({ src, alt, className = '', style, loading = 'lazy', ...rest }) {
  const [state, setState] = useState(src ? 'loading' : 'error');

  return (
    <span className={`smart-img is-${state} ${className}`.trim()} style={style}>
      {state !== 'error' ? (
        <img
          src={asset(src)}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          ref={(node) => {
            // Cached images can finish before React attaches onLoad.
            if (node?.complete && node.naturalWidth > 0 && state === 'loading') setState('loaded');
          }}
          {...rest}
        />
      ) : (
        <span className="smart-img__fallback" role="img" aria-label={alt || 'Image unavailable'}>
          <ImageOff size={22} aria-hidden="true" />
          <span>Photo coming soon</span>
        </span>
      )}
    </span>
  );
}
