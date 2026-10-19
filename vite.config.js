import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH lets the site be served from a sub-folder, e.g. GitHub Pages
// project sites: BASE_PATH=/my-repo/ npm run build
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
