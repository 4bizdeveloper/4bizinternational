import { withNextVideo } from "next-video/process";
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // --- SEO & ROUTING OPTIMIZATION ---
  trailingSlash: true,

  images: {
    // CHANGED TO FALSE: This enables automatic image resizing and WebP/AVIF generation on Vercel
    unoptimized: false, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default withNextVideo(nextConfig);