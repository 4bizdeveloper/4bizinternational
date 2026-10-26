import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // Blocks your Next.js API route handlers from wasting crawl budget
        '/*?*',       // Highly Recommended: Prevents crawling messy URL parameters (e.g., tracking tags, filters) that create duplicate content
      ],
    },
    sitemap: 'https://www.4bizinternational.com/sitemap.xml',
  }
}