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
    root: path.resolve(__dirname),
  },

  // ── UNIVERSAL HIGH-PERFORMANCE ROUTER HEADERS ──
  // This tells standard web server runtimes how to stream your video asset
  async headers() {
    return [
      {
        source: '/hero-video-1.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          }
        ],
      },
    ];
  },
};

export default nextConfig;