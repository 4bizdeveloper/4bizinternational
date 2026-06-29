import type { MetadataRoute } from 'next'

// Required for 'output: export' static HTML builds
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/', // Crucial: Allows Googlebot to fetch the CSS/JS chunks required to render and index your pages
      ],
      disallow: [
        '/api/',          // Blocks internal serverless API functions to preserve crawl budget
        '/_next/',        // Prevents crawlers from wasting time scanning internal build systems
      ],
    },
    sitemap: 'https://www.4bizinternational.com/sitemap.xml',
  }
}