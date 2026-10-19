const EXTERNAL = /^(?:[a-z]+:|\/\/|#)/i;

/** True for links that leave the site (http, mailto, …). */
export const isExternal = (href) => EXTERNAL.test(href ?? '');

/**
 * Resolve a /public path ("images/x.jpg") against Vite's base URL so the
 * site works at the domain root and in a sub-folder. External URLs pass through.
 */
export function asset(path) {
  if (!path) return path;
  if (isExternal(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
