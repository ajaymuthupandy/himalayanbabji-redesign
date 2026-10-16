# Himalayan Babaji Retreats

Next.js redesign of [himalayanbabajiretreats.com](https://himalayanbabajiretreats.com), using the original photos, fonts (Montserrat headings, Times serif body) and colour palette.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
```

## Where things live

- `lib/site.ts`: all editable content: contact/WhatsApp number, nav, programs, events, teachers, blog posts, testimonials, social links.
- `lib/images.json`: manifest of the photos in `public/images/` (generated).
- `components/blocks.tsx`: page sections (hero, cards, split, gallery, CTA band).
- `components/ui.tsx`: base pieces (Section, Title, Button, Photo, Chip).
- `app/*/page.tsx`: one file per page.

## Photos

`node scripts/fetch-assets.mjs` re-downloads every image from the WordPress media library, resizes it to 1800px and rewrites `lib/images.json`. Reference images by name, for example `<Photo name="1-48" alt="…" />`.
