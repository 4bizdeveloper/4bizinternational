import type { MetadataRoute } from 'next'

// Required for 'output: export' static HTML builds
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.4bizinternational.com'

  // 1. Core Pages (Explicit trailing slash for ALL pages)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`, // Home page (https://www.4bizinternational.com/)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`, // About (Updated to trailing slash)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`, // Services (With trailing slash)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // High priority to push indexing
    },
    {
      url: `${baseUrl}/blog/`, // Blog listing
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients/`, // Clients page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`, // Contact page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy/`, // Privacy policy page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions/`, // Terms and conditions page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // 2. Service Sub-Pages (Deep links to push crawler discovery)
  const serviceSubPagesList = [
    'digital-workplace-productivity-solutions',
    'enterprise-business-applications-erp-crm',
    'web-mobile-commerce-solutions',
    'digital-growth-marketing-brand-experience',
    'communication-customer-engagement-solutions',
    'cloud-hosting-infrastructure-services',
    'cybersecurity-digital-protection',
    'digital-transformation-emerging-technologies',
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSubPagesList.map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75, // Giving these deep service links a strong weight
  }))

  // 3. Blog Articles (Ordered from Oldest to Newest)
  // Note: Dates are approximate based on the screenshots provided.
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/4biz-international-who-we-are/`,
      lastModified: new Date('2026-07-07'), // Oldest
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/digital-marketing-agency-uae/`,
      lastModified: new Date('2026-09-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/seo-services-uae/`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/google-ads-management-services-uae/`,
      lastModified: new Date('2026-10-09'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/what-is-aeo/`,
      lastModified: new Date(), // Newest (Created "Today")
      changeFrequency: 'monthly',
      priority: 0.7, // Slightly higher priority for fresh content
    },
  ]

  // Combine all routes into one clean sitemap array
  return [...corePages, ...servicePages, ...blogPages]
}