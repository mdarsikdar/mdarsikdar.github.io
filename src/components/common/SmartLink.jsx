import { asset, isExternal } from '../../utils/asset.js';

/**
 * Anchor that resolves /public paths and opens external pages and PDFs in a
 * new tab with rel="noopener noreferrer". Email links stay in the same tab.
 */
export default function SmartLink({ href, children, download, newTab, ...rest }) {
  const resolved = asset(href);
  const isMail = /^mailto:/i.test(href);
  const isPdf = /\.pdf($|[?#])/i.test(href);
  const openNew = newTab ?? (!isMail && !download && (isExternal(href) || isPdf));

  return (
    <a
      href={resolved}
      download={download}
      {...(openNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {openNew && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
