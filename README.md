# Md. Ataur Rahman Sikdar · Academic Portfolio

A three-page academic portfolio for a Biotechnology & Genetic Engineering student, built with **React 19 + Vite 7 + React Router 7**. It has an animated DNA double-helix cover, a shared identity panel on every page, research and publication records, and a photo gallery with a lightbox.

| Page | Route | Contents |
| --- | --- | --- |
| Home | `/` | Animated cover with profile, education, research positions, volunteering & leadership, core skills, fields of interest, honours, training |
| Research & Laboratory | `/research` | Laboratory works, research projects, journal articles, conference papers, presentations, manuscripts in progress, academic profiles |
| Gallery | `/gallery` | 10 photos with category filters and a full-screen lightbox |

All content comes from the CV, the Google Docs in the `Personal_Website_Rayhan` Drive folder, the two published PDFs, and the MDPI/Sciforum abstract page. Nothing is invented: fields with no supplied information are left out of the page rather than filled in.

---

## Run it locally

Requires **Node.js 20.19+** (or 22.12+).

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build into `dist/` (also writes `dist/404.html` for GitHub Pages) |
| `npm run preview` | Serves the production build locally at http://localhost:4173 |
| `npm run images` | Re-generates web-sized photos from `images-src/` into `public/images/` |

---

## Where things live

```
├── index.html                  Default <title>, meta description, fonts
├── public/
│   ├── cv/CV_Md_Ataur_Rahman_Sikdar.pdf      ← the "Download CV" file
│   ├── papers/*.pdf                          ← "Read paper" PDFs
│   ├── images/profile/profile.jpg            ← circular profile photo (generated)
│   ├── images/gallery/<name>.jpg, <name>-sm.jpg   (generated)
│   ├── images/logos/*.png                    ← institution logos on the education cards (generated)
│   ├── favicon.svg
│   └── _redirects                            ← Netlify SPA rule
├── images-src/                 Original photos (input to `npm run images`)
│   ├── gallery/
│   ├── logos/                  Islamic University and Dhaka College logos (SVG, from Wikipedia)
│   └── profile/
├── scripts/
│   ├── optimize-images.mjs     Resizes, rotates and strips EXIF/GPS from photos
│   └── spa-fallback.mjs        Copies index.html → 404.html after build
├── src/
│   ├── data/                   ← ALL CONTENT. Edit these files, not the components.
│   │   ├── profile.js          Name, bio, photo, CV path, email, academic links, labs
│   │   ├── academic.js         Education, experience, volunteering, skills, interests, awards, training
│   │   ├── research.js         Lab works, projects, publications, presentations, manuscripts
│   │   └── gallery.js          Gallery photos, captions, categories
│   ├── components/
│   │   ├── hero/               DnaHelix (canvas animation), HomeHero, PageHero
│   │   ├── profile/            ProfilePhoto, ProfileCard, ProfileLinks, CvButton
│   │   ├── layout/             Header (with mobile menu), Footer, Layout
│   │   ├── home/               Education, Timeline, Volunteering, Skills, Interests, Honors
│   │   ├── research/           LabWorkCard, ProjectCard, PublicationCard, Presentations, ProfileLinkGrid
│   │   ├── gallery/            GalleryGrid, Lightbox
│   │   └── common/             Section, tags, status badges, filters, SmartImage, SmartLink, icons
│   ├── pages/                  HomePage, ResearchPage, GalleryPage, NotFoundPage
│   ├── hooks/                  usePageMeta, usePrefersReducedMotion
│   └── styles/                 tokens.css (colours, fonts) + one stylesheet per area
└── vercel.json                 Vercel SPA rule
```

---

## Updating content

### Text, publications, projects

Edit the objects in `src/data/`. Each file has comments describing its fields. A few conventions:

- **Optional fields** (`null`, or an empty array) are simply not rendered. For example, a project with `findings: null` shows no "Main findings" row.
- **Status** values: `ongoing`, `review`, `accepted`, `preprint`, `presented`, `completed`, `published`, `preparation`. The badge colour follows automatically.
- **Your name in author lists** is matched against `SELF` in `research.js` and shown in bold.
- **DOIs**: neither journal article has a DOI yet. When one is issued, set `doi: '10.xxxx/…'` and a "View DOI" button appears.
- **Lab work types**: `research`, `professional`, `independent`, `academic` (see `labWorkTypes`).

### CV

Replace `public/cv/CV_Md_Ataur_Rahman_Sikdar.pdf`. If you change the filename, update `profile.cv.href` and `profile.cv.fileName` in `src/data/profile.js`.

### Profile photo

Put a square-ish portrait in `images-src/profile/` (only one file there), then run `npm run images`. It is cropped to 400 × 400 and shown as a circle. The current file, `images-src/profile/profile.jpg`, is a square head-and-shoulders crop of the grey-background portrait.

### Gallery photos

1. Copy the original into `images-src/gallery/`, named e.g. `poster-2027.jpg` (JPEG/PNG/WebP; convert HEIC first).
2. Run `npm run images`. This writes `public/images/gallery/poster-2027.jpg` (1600 px, for the lightbox) and `poster-2027-sm.jpg` (720 px, for the grid).
3. Add an entry to `src/data/gallery.js`, using an existing one as a template. Set `focus` (CSS `object-position`, e.g. `'center 30%'`) if heads get cropped in the grid tile.

To **remove** a photo, delete its entry from `gallery.js`. To reserve a slot before a photo exists, add an entry with `src: null`; it renders as a labelled placeholder.

### Logos

**Education cards**: the Islamic University and Dhaka College logos come from their Wikipedia articles and are stored as SVGs in `images-src/logos/`. `npm run images` turns each file there into a small transparent PNG in `public/images/logos/`. To add one (for example an SSC school), drop the file into `images-src/logos/`, run `npm run images`, and set `logo: { src: 'images/logos/<name>.png', alt: '…' }` on the entry in `academic.js`.

**Volunteering cards** use the organisation logos in `images-src/logos/` (CAP, IAAS IU, ASM IU, NYBB, Dawn of Bioinformatics, IUSC). Raster logos have their white margins trimmed automatically. For a new one, add the file there, run `npm run images`, and set `logo: 'images/logos/<name>.png'` on the entry in `academic.js`. An entry with `logo: null` shows its `monogram` instead.

---

## Build and deploy

```bash
npm run build
```

The site is fully static: upload the `dist/` folder to any static host. Because it uses clean URLs (`/research`, `/gallery`), the host must serve `index.html` for unknown paths. That is already configured for the common hosts:

**Netlify**: drag `dist/` onto app.netlify.com/drop, or connect the repo with build command `npm run build` and publish directory `dist`. `public/_redirects` handles routing.

**Vercel**: import the repo; the Vite preset is detected automatically. `vercel.json` handles routing.

**GitHub Pages**: for a user site (`username.github.io`), deploy `dist/` as is. For a project site (`username.github.io/repo-name/`), build with the sub-path:

```bash
BASE_PATH=/repo-name/ npm run build
```

(On Windows PowerShell: `$env:BASE_PATH='/repo-name/'; npm run build`.) Then publish `dist/`, for example with the `actions/deploy-pages` workflow. `dist/404.html` makes deep links work.

After deploying, set the absolute site URL in the `og:image` tag in `index.html` (e.g. `https://your-domain/images/profile/profile.jpg`) so link previews show the photo.

---

## Design and technical notes

- **Palette**: deep navy structure, teal/cyan biotech accents, warm off-white background (`src/styles/tokens.css`). Body text and badges meet WCAG AA contrast.
- **Type**: Newsreader (headings), IBM Plex Sans (body), IBM Plex Mono (labels and dates), loaded from Google Fonts.
- **DNA animation** (`src/components/hero/DnaHelix.jsx`): a 2D canvas, no animation library. B-DNA proportions (10.5 bp per turn, offset backbones forming major and minor grooves), depth-sorted so strands pass in front of and behind each other, with colour-coded base pairs. Pixel ratio is capped at 2; rendering pauses when the cover is off-screen or the tab is hidden; mobile uses fewer particles and a fainter helix; `prefers-reduced-motion` draws a single still frame and disables all transitions.
- **Accessibility**: skip link; semantic landmarks; one `h1` per page; focus moves to `<main>` on navigation; visible focus rings; the mobile menu closes on Escape or an outside click; the lightbox traps focus, supports ←/→/Esc and swipe, makes the page behind it inert, and returns focus to the photo that opened it. Every photo has descriptive alt text.
- **Performance**: ~112 KB gzipped JS, ~9 KB gzipped CSS. Photos are resized (15 MB of originals down to 2.2 MB), lazy-loaded, with a shimmer while loading and a labelled fallback if a file is missing.
- **External links** open in a new tab with `rel="noopener noreferrer"`; email links open the mail app.
