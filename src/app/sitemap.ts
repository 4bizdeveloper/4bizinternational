import type { MetadataRoute } from 'next'

// Required for 'output: export' static HTML builds
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.4bizinternational.com'

  // 1. Core Core Pages (Matching your exact trailing slash preferences)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`, // Home page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`, // About (No trailing slash)
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

  // 3. Blog Articles
  // Note: Once you scale your blog, you can replace this static array 
  // with a dynamic database fetch (e.g., await getBlogPosts())
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/business-setup-dubai-global-scaling/`,
      lastModified: new Date(), // Replace with actual article update date if known
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Combine all routes into one clean sitemap array
  return [...corePages, ...servicePages, ...blogPages]
}