import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Keep Vercel image optimization lean: one format, one quality, fewer widths
  // and a long cache so each source image produces only a handful of variants.
  images: {
    formats: ["image/webp"],
    qualities: [75],
    deviceSizes: [640, 828, 1080, 1600],
    imageSizes: [128, 256, 384],
    minimumCacheTTL: 2678400, // 31 days
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
