// Recompresses source images in public/images in place: caps width at 1600px,
// strips metadata and re-encodes with mozjpeg. Safe to re-run; files that would
// not shrink are left untouched.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1600;

let before = 0;
let after = 0;

for (const file of await readdir(DIR)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const fullPath = path.join(DIR, file);
  const input = await readFile(fullPath);
  const pipeline = sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const output =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();

  before += input.length;
  if (output.length < input.length) {
    await writeFile(fullPath, output);
    after += output.length;
  } else {
    after += input.length;
  }
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`public/images: ${kb(before)} -> ${kb(after)}`);
