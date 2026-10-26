import type { MetadataRoute } from 'next'

// Required for 'output: export' static HTML builds
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.4bizinternational.com'

  // 1. Core Pages (Explicit trailing slash for ALL pages)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`, // Home page
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`, // About
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`, // Services
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`, // Blog listing
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients/`, // Clients page
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`, // Contact page
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy/`, // Privacy policy page
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions/`, // Terms and conditions page
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // 2. Service Sub-Pages
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
    lastModified: new Date('2026-10-15'),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  // 3. Blog Articles (Sorted from Oldest to Newest)
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/4biz-international-who-we-are/`,
      lastModified: new Date('2026-07-07'), // Jul 07, 2026
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/what-is-aeo/`,
      lastModified: new Date('2026-09-28'), // Sep 28, 2026
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/digital-marketing-agency-uae/`,
      lastModified: new Date('2026-09-29'), // Sep 29, 2026
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/seo-services-uae/`,
      lastModified: new Date('2026-10-01'), // Oct 01, 2026
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/google-ads-management-services-uae/`,
      lastModified: new Date('2026-10-09'), // Oct 09, 2026
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/website-design-services-uae/`,
      lastModified: new Date('2026-10-15'), // Oct 15, 2026 
      changeFrequency: 'monthly',
      priority: 0.7,
    },
      {
      url: `${baseUrl}/blog/microsoft-365-vs-google-workspace-uae/`,
      lastModified: new Date('2026-10-19'), // Oct 19, 2026 
      changeFrequency: 'monthly',
      priority: 0.7,
    },
      {
      url: `${baseUrl}/blog/server-management-services-uae/ `,
      lastModified: new Date('2026-10-22'), // Oct 22, 2026 
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Combine all routes into one clean sitemap array
  return [...corePages, ...servicePages, ...blogPages]
}