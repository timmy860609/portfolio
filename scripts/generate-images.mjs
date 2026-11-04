import { readdir, readFile, mkdir, writeFile, access, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const output = 'public/Image/Responsive';
await mkdir(output, { recursive: true });
await mkdir('src/generated', { recursive: true });
async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    // Social crawlers use the original JPEGs, not responsive page images.
    if (path === output || path === 'public/Image/og-image') continue;
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (/\.(webp|png|jpe?g)$/i.test(path)) files.push(path);
  }
  return files.sort();
}
const manifest = {};
const generatedFiles = new Set();
for (const path of await walk('public/Image')) {
  const bytes = await readFile(path);
  const metadata = await sharp(bytes).metadata();
  if (!metadata.width || !metadata.height || metadata.pages > 1) continue;
  // Include encoder settings in the cache key; source edits get new immutable URLs.
  const hash = createHash('sha256').update(bytes).update('webp-q82-v1').digest('hex').slice(0,16);
  const widths = [...new Set([384, 768, 1280, 1920, 2880, metadata.width].filter(w => w <= metadata.width))].sort((a,b)=>a-b);
  const variants = [];
  for (const width of widths) {
    const name = `${hash}-${width}.webp`;
    generatedFiles.add(name);
    try { await access(`${output}/${name}`); }
    catch { await sharp(bytes).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${output}/${name}`); }
    variants.push({ width, src: `/Image/Responsive/${name}` });
  }
  const preview = await sharp(bytes).resize({ width: 32 }).blur(1).webp({ quality: 35 }).toBuffer();
  manifest[path.slice('public'.length)] = { width: metadata.width, height: metadata.height, variants, placeholder: `data:image/webp;base64,${preview.toString('base64')}` };
}
for (const entry of await readdir(output, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.webp') && !generatedFiles.has(entry.name)) {
    await unlink(`${output}/${entry.name}`);
  }
}
await writeFile('src/generated/images.json', JSON.stringify(manifest));
console.log(`Generated responsive image metadata for ${Object.keys(manifest).length} images.`);
