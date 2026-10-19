// GitHub Pages has no rewrite rules. Serving index.html as 404.html lets
// deep links such as /research or /gallery load the app instead of a 404.
// Netlify (public/_redirects) and Vercel (vercel.json) don't need this,
// but the extra file is harmless there.
import { copyFile } from 'node:fs/promises';

await copyFile('dist/index.html', 'dist/404.html');
console.log('spa-fallback: dist/404.html written');
