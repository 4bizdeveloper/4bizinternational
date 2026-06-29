import { withNextVideo } from "next-video/process";
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  
  // --- SEO & STATIC EXPORT ROUTING OPTIMIZATION ---
  // Forces Next.js to export paths as `/about/index.html` instead of `/about.html`.
  // This matches your canonical URLs and prevents search engines from seeing non-canonical mismatches.
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  devIndicators: false,
  turbopack: {
    // This creates an absolute path to your project folder
    root: path.resolve(__dirname),
  },
};

export default withNextVideo(nextConfig);