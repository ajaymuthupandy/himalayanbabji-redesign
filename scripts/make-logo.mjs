// Builds a transparent logo mark from the original square logo.
//   node scripts/make-logo.mjs
import sharp from "sharp";

const SRC = "public/images/logo.jpg";
// Emblem only (sage, mountains, sun) without the lettering underneath.
const CROP = { left: 90, top: 150, width: 1100, height: 610 };

async function build(out) {
  const { data, info } = await sharp(SRC).extract(CROP).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    // Colour-to-alpha against the white background.
    const a = (255 - Math.min(r, g, b)) / 255;
    if (a < 0.06) {
      data[i + 3] = 0;
      continue;
    }
    const un = (c) => Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a)));
    data[i] = un(r);
    data[i + 1] = un(g);
    data[i + 2] = un(b);
    data[i + 3] = Math.round(Math.min(1, a * 1.15) * 255);
  }
  await sharp(data, { raw: info }).trim().resize({ height: 240 }).png({ compressionLevel: 9 }).toFile(out);
  const m = await sharp(out).metadata();
  console.log(out, m.width, m.height);
}

await build("public/images/logo-mark.png");
