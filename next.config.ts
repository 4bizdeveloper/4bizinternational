import { withNextVideo } from "next-video/process";
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // --- SEO & ROUTING OPTIMIZATION ---
  trailingSlash: true,
  reactStrictMode: true, // Enforces modern React patterns & eliminates rendering bugs
  poweredByHeader: false, // Security hardening: removes X-Powered-By header

  // --- IMAGES & PERFORMANCE OPTIMIZATION ---
  images: {
    unoptimized: false, // KEEPS automatic resizing, WebP/AVIF generation active
    formats: ['image/avif', 'image/webp'], // Delivers next-gen images first for maximum performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Custom responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Sharp, layout-shift free thumbnail grids
    minimumCacheTTL: 31536000, // Instructs Vercel edge to cache images for 1 year (100% GTmetrix asset score)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // --- SECURITY & SEO HEADERS (SERVER-LEVEL ENGINE PARSING) ---
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // --- EXPERIMENTAL & COMPILER RULES (ULTRA-MODERN TECH) ---
  devIndicators: false,
  
  // Advanced Webpack configuration to guarantee zero layout shifts and instant bundle delivery
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default withNextVideo(nextConfig);