import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (30-65 chars title, 110-165 chars description)
export const metadata: Metadata = {
  title: 'Enterprise Business Applications (ERP & CRM) | 4Biz',
  description: 'Streamline operations with custom ERP & CRM solutions, Microsoft Dynamics 365, Odoo, and ERPNext tailored to your enterprise needs.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/enterprise-business-applications-erp-crm/',
  },
  openGraph: {
    title: 'Enterprise Business Applications (ERP & CRM) | 4Biz',
    description: 'Streamline operations and boost customer engagement with integrated ERP & CRM platforms tailored to your enterprise.',
    url: 'https://www.4bizinternational.com/services/enterprise-business-applications-erp-crm/',
    type: 'website',
    images: [
      {
        url: 'https://www.4bizinternational.com/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International LLC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Business Applications (ERP & CRM) | 4Biz',
    description: 'Streamline operations and boost customer engagement with integrated ERP & CRM platforms tailored to your enterprise.',
    images: ['https://www.4bizinternational.com/4biz_logo-1.png'],
  },
};

export default function EnterpriseApplicationsPage() {
  // Canonical & Schema Definitions
  const canonicalUrl = 'https://www.4bizinternational.com/services/enterprise-business-applications-erp-crm/';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.4bizinternational.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.4bizinternational.com/services/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Enterprise Business Applications (ERP & CRM)',
        item: canonicalUrl,
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Enterprise Business Applications (ERP & CRM) | 4Biz',
        datePublished: '2026-01-01T08:00:00+00:00',
        dateModified: '2026-08-21T00:00:00+00:00',
        publisher: {
          '@type': 'Organization',
          name: '4Biz International LLC',
          url: 'https://www.4bizinternational.com/',
          logo: 'https://www.4bizinternational.com/4biz_logo-1.png',
          sameAs: [
            'https://www.linkedin.com/company/4biz-international',
            'https://twitter.com/4bizintl'
          ]
        },
      },
      {
        '@type': 'Service',
        name: 'Enterprise Business Applications Development & Integration',
        provider: {
          '@type': 'Organization',
          name: '4Biz International LLC',
        },
        serviceType: 'ERP & CRM System Integration',
        areaServed: 'Worldwide',
        description: 'Comprehensive ERP and CRM custom development, implementation, and migration services including Microsoft Dynamics 365, Odoo, and ERPNext.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are Enterprise Business Applications (ERP & CRM)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enterprise Business Applications are integrated software platforms—such as Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM)—that centralize business processes including sales, inventory, finance, and human resources into a single source of truth.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which ERP/CRM platforms does 4Biz International support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '4Biz International designs, deploys, and manages Microsoft Dynamics 365, Odoo ERP, ERPNext, custom ERP/CRM solutions, and proprietary 4Biz lightweight ERP platforms.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do ERP and CRM systems integrate with existing tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Modern ERP and CRM systems integrate with existing tools through REST APIs, webhooks, and pre-built software connectors to enable continuous real-time data synchronization across departments.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      {/* Explicit Canonical Tag for SEO */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-attachment-scroll bg-[linear-gradient(to_bottom,rgba(4,10,33,0)_0%,rgba(4,10,33,0.4)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20 inline-flex items-center gap-2">
                <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
                02 — Enterprise Applications
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
                Enterprise Business Applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">(ERP &amp; CRM)</span>
              </h1>

              {/* AEO Top Summary & Definition Support Box */}
              <div className="mb-6 p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 text-teal-200 text-sm leading-relaxed">
                <p className="mb-2">
                  <strong className="text-white">Definition:</strong> Enterprise Business Applications (ERP &amp; CRM) are operational software platforms designed to integrate core business functions—including supply chain, sales, finance, human resources, and customer care—into a centralized data ecosystem.
                </p>
                <p>
                  <strong className="text-white">Key Takeaway:</strong> 4Biz International delivers end-to-end Enterprise Business Application services—integrating ERP and CRM systems into a unified platform to remove data silos across enterprise workflows.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal transparent-content mb-6">
                Streamline operations, improve customer engagement, and gain real-time business insights through integrated ERP and CRM platforms tailored to your business needs. We design, deploy, and customize the systems that run your sales pipeline, inventory, finance, and HR—all from one connected platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition-colors">
                  Schedule Consultation
                </Link>
                <Link href="/services" className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
                  Explore All Services
                </Link>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/enterprise-business-applications-erp-crm-1.png"
                  alt="High performance UI monitoring and clean workflow automation platforms layout preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain mix-blend-screen transition-all duration-700 ease-out transform scale-105 hover:scale-110"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= MISSION & STATS NARRATIVE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">Why this matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One system of record, instead of five disconnected ones
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Most growing businesses run sales in a CRM, stock in a spreadsheet, payroll in another tool, and finance in a fourth—none of which talk to each other. Numbers get re-typed between systems, reports go stale the moment they are exported, and nobody has a single answer to &quot;what is actually happening in the business right now.&quot;
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by mapping your sales pipeline, inventory flow, and back-office processes as they really happen. From that, we deploy and configure an ERP and CRM platform—<a href="https://dynamics.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">Microsoft Dynamics 365</a>, <a href="https://www.odoo.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">Odoo</a>, ERPNext, or our own 4Biz ERP Solutions—connected to your existing tools with clean data migration.
              </p>
              
              {/* AEO Step List Structural Feature */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Implementation Steps &amp; Benefits:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                  <li><strong className="text-teal-400">Process Mapping:</strong> Audit current sales, procurement, and accounting workflows.</li>
                  <li><strong className="text-teal-400">Platform Deployment:</strong> Configure Microsoft Dynamics 365, Odoo, or ERPNext for your environment.</li>
                  <li><strong className="text-teal-400">Data Migration:</strong> Import legacy customer and transaction history cleanly.</li>
                  <li><strong className="text-teal-400">Automated Sync:</strong> Sales updates trigger inventory adjustments and financial entries automatically.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">1 system</div>
                <div className="text-sm text-slate-400 mt-1">Sales, inventory, finance, and HR connected in one platform</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Real-time</div>
                <div className="text-sm text-slate-400 mt-1">Reporting that reflects what is happening today, not last month</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support from a team that already knows your configuration</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPTIMIZED CORE CAPABILITIES ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">What is included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Platforms and solutions we build and manage
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From off-the-shelf platforms to fully custom builds, we scope the right fit for your team size, budget, and the processes you already run.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 13h6M9 17h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Custom ERP Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  An ERP built around your actual procurement, production, and finance workflows—not a generic template you have to bend your business to fit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="8" r="3"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M19 8l1.5 1.5L23 7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Custom CRM Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A CRM that matches your actual sales process and pipeline stages, instead of forcing your team to adapt to someone else&apos;s workflow.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft Dynamics 365</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The full enterprise suite for finance, sales, and operations. We handle licensing, module setup, and integration with your existing Microsoft 365 tenant.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Odoo ERP</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A modular, cost-effective ERP covering sales, inventory, accounting, and HR. We configure only the modules you need today and scale up as you grow.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">ERPNext</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Open-source ERP for businesses that want full ownership of their system and data. We handle hosting, customization, and ongoing maintenance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">4Biz ERP Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our own lightweight ERP framework for businesses that do not need a full enterprise suite—fast to deploy and simple for teams to adopt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 17l5-5 4 4 7-8"/><path d="M14 8h5v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Sales Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Automated lead capture, follow-ups, quote generation, and deal-stage updates, so your sales team spends time selling, not on data entry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><circle cx="18" cy="9" r="2.4"/><path d="M16.2 13.2c2.2.4 4 1.9 4 3.8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Customer Relationship Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A single record of every customer interaction—calls, emails, deals, and support tickets—visible to every team that needs it.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group md:col-span-2 lg:col-span-2">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 9.5 12 4l9 5.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 20v-7h6v7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Inventory &amp; Finance Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Real-time stock levels, purchase orders, and financial reporting connected to the same system, so numbers match across every department.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group md:col-span-2 lg:col-span-2">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/><circle cx="9" cy="14" r="1.6"/><path d="M13 13.5h5M13 16h5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">HR &amp; Payroll Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Employee records, leave tracking, and payroll processing integrated with your ERP, removing duplicate data entry between HR and finance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AEO/GEO COMPARISON MATRIX ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              ERP &amp; CRM Platform Comparison Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300 border border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-teal-400 uppercase text-xs font-semibold">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Platform</th>
                    <th className="p-4 border-b border-slate-800">Best For</th>
                    <th className="p-4 border-b border-slate-800">Key Features</th>
                    <th className="p-4 border-b border-slate-800">Deployment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-white/[0.01]">
                  <tr>
                    <td className="p-4 font-bold text-white">Microsoft Dynamics 365</td>
                    <td className="p-4">Mid to Large Enterprises</td>
                    <td className="p-4">Full suite integration, M365 connectivity, AI analytics</td>
                    <td className="p-4">Cloud / Hybrid</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Odoo ERP</td>
                    <td className="p-4">Growing SMBs</td>
                    <td className="p-4">Modular apps, sales, accounting, inventory</td>
                    <td className="p-4">Cloud / On-Premise</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">ERPNext</td>
                    <td className="p-4">Open-Source Seekers</td>
                    <td className="p-4">Full data ownership, customizable, cost-effective</td>
                    <td className="p-4">Self-Hosted / Cloud</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">4Biz Custom ERP</td>
                    <td className="p-4">Specialized Workflows</td>
                    <td className="p-4">Tailored to exact processes, lightweight, zero bloat</td>
                    <td className="p-4">Dedicated Cloud</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION FOR AEO ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60">
                <h3 className="text-lg font-bold text-white mb-2">What are Enterprise Business Applications (ERP &amp; CRM)?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Enterprise Business Applications are centralized software solutions like ERP and CRM systems that unify core business functions—finance, sales, procurement, and human resources—into a connected database.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60">
                <h3 className="text-lg font-bold text-white mb-2">How do ERP and CRM systems integrate with existing tools?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Modern ERP/CRM platforms use secure REST APIs and native connectors to sync data continuously between legacy software, e-commerce stores, and financial channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STRATEGIC PILLARS ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Built around your process, not the other way around
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Mapped to your workflow</h3>
                <p className="text-xs text-slate-400 leading-relaxed">We configure modules around how your sales, inventory, and finance teams actually operate today.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Real-time visibility</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Dashboards and reports pull from live data, so every department is working from the same numbers.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Right-sized for you</h3>
                <p className="text-xs text-slate-400 leading-relaxed">From a lightweight 4Biz setup to a full Dynamics 365 rollout, we scope the platform to your size and budget.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Ongoing support</h3>
                <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your configuration—not a ticket queue starting from zero each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSING SUMMARY ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to connect your sales, finance, and operations?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you are using today and where the gaps are. We will recommend the right ERP or CRM platform and handle the setup end to end.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition-colors inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}