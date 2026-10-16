// Downloads the original photos from the WordPress media library of
// himalayanbabajiretreats.com, resizes them for the web and writes
// public/images/*.jpg plus lib/images.json (width/height manifest).
//
//   node scripts/fetch-assets.mjs
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SITE = "https://himalayanbabajiretreats.com";
const ROOT = path.resolve(import.meta.dirname, "..");
const CACHE = path.join(ROOT, ".cache", "originals");
const OUT = path.join(ROOT, "public", "images");
const MANIFEST = path.join(ROOT, "lib", "images.json");
const MAX_EDGE = 1800;

// Skip files that are not photos of the retreat.
const SKIP = [/^cropped-/, /^ChatGPT-Image/, /^woocommerce-placeholder/];

const exists = (p) => access(p).then(() => true, () => false);

function slug(file) {
  return file
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/-scaled$/, "")
    .replace(/^WhatsApp-Image-/, "wa-")
    .toLowerCase();
}

async function listMedia() {
  const items = [];
  for (let page = 1; ; page++) {
    const res = await fetch(
      `${SITE}/wp-json/wp/v2/media?per_page=100&page=${page}&_fields=source_url,mime_type`,
    );
    if (!res.ok) break;
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    items.push(...batch);
    if (batch.length < 100) break;
  }
  return items.filter((m) => m.mime_type.startsWith("image/"));
}

async function main() {
  await mkdir(CACHE, { recursive: true });
  await mkdir(OUT, { recursive: true });

  const media = await listMedia();
  const manifest = {};
  console.log(`Found ${media.length} images`);

  for (const { source_url } of media) {
    const rel = source_url.split("/wp-content/uploads/")[1];
    const file = path.basename(rel);
    if (SKIP.some((re) => re.test(file))) continue;

    const name = slug(file);
    if (manifest[name]) continue;

    const cached = path.join(CACHE, rel.replaceAll("/", "_"));
    if (!(await exists(cached))) {
      const res = await fetch(source_url);
      if (!res.ok) {
        console.warn(`skip ${rel}: ${res.status}`);
        continue;
      }
      await writeFile(cached, Buffer.from(await res.arrayBuffer()));
    }

    const out = path.join(OUT, `${name}.jpg`);
    const info = await sharp(await readFile(cached))
      .rotate()
      .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(out);

    manifest[name] = { src: `/images/${name}.jpg`, width: info.width, height: info.height };
    console.log(`${name}  ${info.width}x${info.height}`);
  }

  await mkdir(path.dirname(MANIFEST), { recursive: true });
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Wrote ${Object.keys(manifest).length} images`);
}

main();
