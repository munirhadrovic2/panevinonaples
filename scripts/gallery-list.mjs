// Writes the gallery's photo list (src/data/galleryImages.json) from public/images/gallery when
// the site is built (npm "prebuild"). On Cloudflare Workers the page can't read that folder while
// it runs, so the list is made here instead. Add or remove photos in the folder, then build.
import { readdirSync, writeFileSync } from 'fs';
import path from 'path';

const IMAGE_FILE = /\.(jpe?g|png|webp|avif)$/i;
const folder = path.join(process.cwd(), 'public', 'images', 'gallery');
const images = readdirSync(folder).filter((file) => IMAGE_FILE.test(file)).sort();
writeFileSync(path.join(process.cwd(), 'src', 'data', 'galleryImages.json'), JSON.stringify(images, null, 2) + '\n');
console.log(`gallery: ${images.length} photos`);
