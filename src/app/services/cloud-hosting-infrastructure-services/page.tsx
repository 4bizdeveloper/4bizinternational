import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Ultra-optimized SEO, AEO & GEO Metadata (Title length: 50 chars)
export const metadata: Metadata = {
  title: 'Cloud & Infrastructure Services | 4Biz International',
  description: 'Enterprise-grade cloud hosting, AWS/Azure solutions, VPS, domain registration, and disaster recovery. Scalable IT infrastructure for business reliability.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/cloud-hosting-infrastructure-services/',
  },
  openGraph: {
    title: 'Cloud & Infrastructure Services | 4Biz International',
    description: 'Enterprise-grade cloud hosting, AWS/Azure solutions, VPS, domain registration, and disaster recovery.',
    url: 'https://www.4bizinternational.com/services/cloud-hosting-infrastructure-services/',
    type: 'website',
    images: [
      {
        url: 'https://www.4bizinternational.com/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International Enterprise Cloud & Infrastructure Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & Infrastructure Services | 4Biz International',
    description: 'Enterprise-grade cloud hosting, AWS/Azure solutions, VPS, domain registration, and disaster recovery.',
    images: ['https://www.4bizinternational.com/4biz_logo-1.png'],
  },
};

export default function InfrastructureServicesPage() {
  const currentDate = '2026-08-20';

  // Preserved & Connected Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.4bizinternational.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://www.4bizinternational.com/services/'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Cloud & Infrastructure Services',
        'item': 'https://www.4bizinternational.com/services/cloud-hosting-infrastructure-services/'
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.4bizinternational.com/services/cloud-hosting-infrastructure-services/#webpage',
    'url': 'https://www.4bizinternational.com/services/cloud-hosting-infrastructure-services/',
    'name': 'Cloud & Infrastructure Services',
    'description': 'Enterprise-grade cloud hosting, AWS/Azure architecture, VPS hosting, domain management, and disaster recovery solutions.',
    'datePublished': '2024-01-15',
    'dateModified': currentDate,
    'publisher': {
      '@type': 'Organization',
      '@id': 'https://www.4bizinternational.com/#organization',
      'name': '4Biz International LLC',
      'url': 'https://www.4bizinternational.com/',
      'logo': 'https://www.4bizinternational.com/4biz_logo-1.png',
      'sameAs': [
        'https://www.linkedin.com/company/4bizinternational',
        'https://twitter.com/4bizintl'
      ]
    },
    'mainEntity': {
      '@type': 'Service',
      'name': 'Cloud & Infrastructure Services',
      'provider': {
        '@type': 'Organization',
        'name': '4Biz International LLC'
      },
      'description': 'Build a secure, scalable digital foundation with enterprise-grade hosting, cloud infrastructure & managed IT services.',
      'areaServed': 'Global',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Infrastructure Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Domain Registration & Management' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Shared, VPS & Dedicated Hosting' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'AWS & Microsoft Azure Cloud Solutions' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cloud Migration & Disaster Recovery' } }
        ]
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What are cloud, hosting, and infrastructure services?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Cloud, hosting, and infrastructure services provide the foundational digital hardware, servers, cloud networking (such as AWS and Azure), domain controls, and database systems required to publish and run web applications with maximum uptime.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I choose between VPS hosting and AWS/Azure cloud solutions?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Choose VPS hosting if you need fixed computing resources for predictable workloads at a consistent cost. Choose AWS or Azure cloud solutions if your application demands auto-scaling, global multi-region redundancy, serverless functions, or complex multi-tier microservices architecture.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does 4Biz International handle zero-downtime cloud migration?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We perform cloud migrations through pre-migration audits, parallel staging deployments, real-time database synchronization, and low-TTL DNS failover cutovers to guarantee continuous availability without data loss during the transition.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What backup and disaster recovery protocols are implemented?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We deploy automated, encrypted, off-site snapshots stored in isolated secondary storage tiers, combined with routine disaster recovery dry-runs to ensure strict Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      
      {/* ================= JSON-LD SCHEMAS ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= BACKGROUND GRADIENT LAYERS ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[70vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-300 uppercase mb-4 block backdrop-blur-sm bg-teal-950/40 px-4 py-1.5 rounded-full border border-teal-500/30">
                06 — Infrastructure
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                Cloud &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Infrastructure Services</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                Build a secure, resilient, and high-performance digital foundation. 4Biz International provides enterprise-grade hosting, multi-cloud architectures, domain management, and proactive IT monitoring to deliver zero-downtime operations for global workloads.
              </p>

              {/* Direct AEO Definition & Summary Highlight Box */}
              <div className="mt-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                <p className="mb-2">
                  <strong className="text-teal-300 font-semibold">Definition:</strong> Cloud and infrastructure services encompass the digital hardware, server virtualization, domain mapping, and cloud architectures (AWS/Azure) used to host and scale digital applications reliably.
                </p>
                <p>
                  <strong className="text-teal-300 font-semibold">Key Takeaway:</strong> We deploy, optimize, and maintain end-to-end IT infrastructure with a 99.9% uptime SLA, automated encrypted backups, and 24/7 security monitoring.
                </p>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/cloud-hosting-infrastructure-services.png"
                  alt="High performance cloud servers, clusters, and secure networks visual platform layout architecture preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain mix-blend-screen transition-all duration-700 ease-out transform scale-105 hover:scale-110"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONCEPT DEFINITION & NARRATIVE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block">Why Infrastructure Reliability Matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                What are cloud, hosting, and infrastructure services?
              </h2>
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                <strong>Cloud, hosting, and infrastructure services</strong> are defined as the underlying hardware networks, virtual servers, domain name systems (DNS), and automated storage frameworks required to deploy, host, and maintain corporate applications online without interruption.
              </p>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                System outages are rarely isolated to software bugs; they stem from domain lapses, untested backup routines, or unmonitored hardware strain during high-traffic spikes. 4Biz International reviews your core architecture—domains, hosting environments, and database clusters—to eliminate single points of failure. Pair your hosting infrastructure with our optimized <Link href="https://www.4bizinternational.com/services/web-development/" className="text-teal-300 font-semibold underline hover:text-teal-200">web development solutions</Link> for maximum site execution speed.
              </p>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                According to industry benchmarks from <a href="https://www.gartner.com" target="_blank" rel="noopener noreferrer" className="text-teal-300 font-semibold underline hover:text-teal-200">Gartner Research</a>, managed cloud infrastructures aligned with <a href="https://aws.amazon.com/architecture/well-architected/" target="_blank" rel="noopener noreferrer" className="text-teal-300 font-semibold underline hover:text-teal-200">AWS Well-Architected Frameworks</a> reduce unscheduled downtime by up to 74%. Whether deploying shared servers, high-compute VPS environments, or distributed AWS and Microsoft Azure cloud networks, we tailor solutions to match your exact business requirements.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Verified Infrastructure Architecture — Updated August 2026 by <strong className="text-slate-200 font-semibold">4Biz International Engineering Team</strong>
              </div>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">99.9%</div>
                <div className="text-sm text-slate-200 mt-1 font-medium">Uptime SLA across hosting and cloud infrastructure</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">Encrypted</div>
                <div className="text-sm text-slate-200 mt-1 font-medium">Isolated backups stored off-site with zero-trust protection</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">24/7/365</div>
                <div className="text-sm text-slate-200 mt-1 font-medium">Proactive server monitoring and instant incident mitigation</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARCHITECTURE COMPARISON TABLE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Decision Guide</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                How to select the right hosting architecture?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Compare infrastructure options based on resource allocation, scalability, and target workload requirements.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-white/[0.02] backdrop-blur-md">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-slate-900/80 text-teal-300 font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-4">Hosting Model</th>
                    <th className="p-4">Resource Allocation</th>
                    <th className="p-4">Scalability</th>
                    <th className="p-4">Ideal Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">Shared Hosting</td>
                    <td className="p-4">Shared server resources</td>
                    <td className="p-4 text-slate-300">Basic / Standard</td>
                    <td className="p-4 text-slate-300">Small business sites, blogs, and low-traffic landing pages.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">VPS Hosting</td>
                    <td className="p-4">Isolated virtual CPU/RAM</td>
                    <td className="p-4 text-slate-300">Moderate / Upgradeable</td>
                    <td className="p-4 text-slate-300">E-commerce, growing SaaS apps, and high-traffic portals.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">Dedicated Servers</td>
                    <td className="p-4">100% Dedicated physical hardware</td>
                    <td className="p-4 text-slate-300">Fixed High Performance</td>
                    <td className="p-4 text-slate-300">Enterprise applications, heavy database computing, maximum security.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">AWS / Azure Cloud</td>
                    <td className="p-4">Elastic multi-region clusters</td>
                    <td className="p-4 text-teal-300 font-semibold">Infinite Auto-Scaling</td>
                    <td className="p-4 text-slate-300">Global platforms, microservices, high-availability web apps.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= CORE CAPABILITIES GRID ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">Capabilities</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Managed Infrastructure Services &amp; Solutions
              </h2>
              <p className="text-slate-300 max-w-2xl text-base">
                From domain provisioning to advanced disaster recovery, we engineer end-to-end cloud environments backed by our <Link href="https://www.4bizinternational.com/services/security-compliance/" className="text-teal-300 font-semibold underline hover:text-teal-200">security and compliance protocols</Link>.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-transparent rounded mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Domain Registration</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Register and manage global domain names with automatic renewal protections, DNSSEC security, and optimized DNS routing.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M9 7l3 9M15 7l-3 9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">International TLDs</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Secure localized country-code domain extensions (ccTLDs) to improve regional SEO rankings and brand authority worldwide.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="5" width="18" height="6" rx="1.5"/><rect x="3" y="13" width="18" height="6" rx="1.5"/><circle cx="7" cy="8" r="0.6" fill="currentColor"/><circle cx="7" cy="16" r="0.6" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Shared Hosting</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Fast, cost-efficient Web hosting for emerging businesses, optimized with SSD caching and server-side firewall isolation.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="8" height="8" rx="1.5"/><rect x="13" y="4" width="8" height="8" rx="1.5"/><rect x="3" y="14" width="8" height="6" rx="1.5"/><rect x="13" y="14" width="8" height="6" rx="1.5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Reseller Hosting</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  White-label multi-account hosting designed for agencies managing multiple client sites through WHM and cPanel control.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">VPS Hosting</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Dedicated virtual core allocation offering root-level control, guaranteed performance, and private networking capabilities.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h0.6M11 6.5h0.6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Dedicated Servers</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Bare-metal physical servers offering complete hardware isolation, customized RAID storage, and maximum compute power.
                </p>
              </div>

              {/* Card 7 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 17a5 5 0 0 1-1-9.9 6 6 0 0 1 11.6-1.8A4.5 4.5 0 0 1 17 17z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">AWS Cloud Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Architecture, EC2 auto-scaling, S3 storage buckets, and serverless deployments engineered on Amazon Web Services.
                </p>
              </div>

              {/* Card 8 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M6 18a4 4 0 0 1-1-7.9 5.5 5.5 0 0 1 10.6-1.7A4 4 0 0 1 16 18z"/><path d="M9 14l2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft Azure</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Enterprise Microsoft Azure cloud integrations linked directly with Microsoft 365, Active Directory, and hybrid databases.
                </p>
              </div>

              {/* Card 9 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 16V8l8-5 8 5v8l-8 5z"/><path d="M4 8l8 5 8-5M12 13v8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Cloud Migration</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Zero-downtime database and server migration strategies structured to transfer legacy applications to modern cloud platforms safely.
                </p>
              </div>

              {/* Card 10 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Server Management</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Comprehensive Linux and Windows server administration including OS patch management, kernel updates, and firewall tuning.
                </p>
              </div>

              {/* Card 11 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M21 12a9 9 0 1 1-2.6-6.3"/><path d="M21 4v5h-5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Backup Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automated hourly or daily off-site snapshots featuring point-in-time recovery and end-to-end AES-256 encryption.
                </p>
              </div>

              {/* Card 12 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Storage Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Scalable object and block storage configurations built for media distribution, long-term archival, and database clustering.
                </p>
              </div>

              {/* Card 13 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1 group flex-1 md:col-span-2 lg:col-span-4 max-w-none">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 21c-4-3-7-6.5-7-10a7 7 0 0 1 14 0c0 3.5-3 7-7 10z"/><path d="M9.5 11l1.7 1.7L14.5 9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Disaster Recovery</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automated failover clusters and standby infrastructure environments ensuring rapid recovery time objectives (RTO) during incidents.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP IMPLEMENTATION ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block">Execution Workflow</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                How do we deploy and manage your cloud infrastructure?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Our 4-step deployment methodology ensures seamless infrastructure performance without operational risk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <div className="text-teal-300 font-mono text-sm font-bold mb-1">STEP 01</div>
                <h3 className="text-white font-bold text-base mb-2">Audit &amp; Sizing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">We evaluate current server loads, traffic trends, and security bottlenecks to right-size your architecture.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <div className="text-teal-300 font-mono text-sm font-bold mb-1">STEP 02</div>
                <h3 className="text-white font-bold text-base mb-2">Staging &amp; Testing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">We build isolated cloud environments and perform rigorous load and security testing before going live.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <div className="text-teal-300 font-mono text-sm font-bold mb-1">STEP 03</div>
                <h3 className="text-white font-bold text-base mb-2">Zero-Downtime Cutover</h3>
                <p className="text-xs text-slate-300 leading-relaxed">We execute real-time database syncing and low-TTL DNS switching to prevent website downtime.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <div className="text-teal-300 font-mono text-sm font-bold mb-1">STEP 04</div>
                <h3 className="text-white font-bold text-base mb-2">24/7 Monitoring</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Automated telemetry tools track CPU, RAM, and network traffic, resolving anomalies proactively.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AEO / GEO FAQ SECTION ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Questions &amp; Answers</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-2">
                  What are cloud, hosting, and infrastructure services?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Cloud, hosting, and infrastructure services provide the foundational digital hardware, servers, cloud networking (such as AWS and Azure), domain controls, and database systems required to publish and run web applications with maximum uptime.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-2">
                  How do I choose between VPS hosting and AWS/Azure cloud solutions?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Choose VPS hosting if you need fixed computing resources for predictable workloads at a consistent cost. Choose AWS or Azure cloud solutions if your application demands auto-scaling, global multi-region redundancy, serverless functions, or complex multi-tier microservices architecture.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-2">
                  How does 4Biz International handle zero-downtime cloud migration?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We perform cloud migrations through pre-migration audits, parallel staging deployments, real-time database synchronization, and low-TTL DNS failover cutovers to guarantee continuous availability without data loss during the transition.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-2">
                  What backup and disaster recovery protocols are implemented?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We deploy automated, encrypted, off-site snapshots stored in isolated secondary storage tiers, combined with routine disaster recovery dry-runs to ensure strict Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSING CTA SECTION ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to build enterprise infrastructure you can rely on?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Consult with 4Biz International architecture experts to audit your current hosting and scope a high-performance cloud environment.
            </p>
            <div className="pt-4">
              <Link
                href="https://www.4bizinternational.com/contact/"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-slate-900 bg-teal-300 hover:bg-teal-200 rounded-full transition-all duration-200 shadow-lg shadow-teal-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}