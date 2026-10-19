/**
 * Image optimiser for the portfolio.
 *
 *   npm run images
 *
 * Reads original photos from images-src/<folder>/ and writes web-ready
 * copies to public/images/<folder>/:
 *
 *   gallery/  ->  <name>.jpg (max 1600px, for the lightbox)
 *                 <name>-sm.jpg (max 720px, for grid thumbnails and cards)
 *   profile/  ->  profile.jpg (square, 400px)
 *   logos/    ->  <name>.png (fits in 192px, transparent; SVGs are rasterised)
 *
 * EXIF orientation is applied and metadata (including GPS) is stripped.
 * Existing outputs are overwritten, so re-running is always safe.
 */
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = 'images-src';
const OUT = 'public/images';
const IMAGE_RE = /\.(jpe?g|png|webp|tiff?)$/i;
const LOGO_RE = /\.(svg|png|jpe?g|webp)$/i;

const jpeg = { quality: 78, mozjpeg: true, progressive: true };

async function listImages(dir, re = IMAGE_RE) {
  try {
    return (await readdir(dir)).filter((f) => re.test(f)).sort();
  } catch {
    return [];
  }
}

async function processGallery() {
  const srcDir = join(SRC, 'gallery');
  const outDir = join(OUT, 'gallery');
  await mkdir(outDir, { recursive: true });

  for (const file of await listImages(srcDir)) {
    const { name } = parse(file);
    const input = join(srcDir, file);
    const base = sharp(input).rotate();

    await base
      .clone()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .jpeg(jpeg)
      .toFile(join(outDir, `${name}.jpg`));

    await base
      .clone()
      .resize({ width: 720, height: 720, fit: 'inside', withoutEnlargement: true })
      .jpeg({ ...jpeg, quality: 74 })
      .toFile(join(outDir, `${name}-sm.jpg`));

    console.log(`gallery  ${file} -> ${name}.jpg, ${name}-sm.jpg`);
  }
}

async function processProfile() {
  const srcDir = join(SRC, 'profile');
  const outDir = join(OUT, 'profile');
  await mkdir(outDir, { recursive: true });

  const [file] = await listImages(srcDir);
  if (!file) return;

  await sharp(join(srcDir, file))
    .rotate()
    .resize(400, 400, { fit: 'cover', position: 'attention' })
    .jpeg({ ...jpeg, quality: 84 })
    .toFile(join(outDir, 'profile.jpg'));

  console.log(`profile  ${file} -> profile.jpg`);
}

async function processLogos() {
  const srcDir = join(SRC, 'logos');
  const outDir = join(OUT, 'logos');
  await mkdir(outDir, { recursive: true });

  for (const file of await listImages(srcDir, LOGO_RE)) {
    const { name } = parse(file);
    await sharp(join(srcDir, file), { density: 300 })
      .resize(192, 192, { fit: 'inside', withoutEnlargement: false })
      .png({ compressionLevel: 9, palette: true })
      .toFile(join(outDir, `${name}.png`));

    console.log(`logo     ${file} -> ${name}.png`);
  }
}

await processGallery();
await processProfile();
await processLogos();
