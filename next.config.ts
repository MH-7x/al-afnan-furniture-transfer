import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP fallback; the browser's Accept header picks one.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
