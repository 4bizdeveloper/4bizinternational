import { withNextVideo } from "next-video/process";
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
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