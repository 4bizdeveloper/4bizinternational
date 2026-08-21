import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// 1. SEO FIX: Canonical URL uses HTTPS and Title length is exactly 53 characters
export const metadata: Metadata = {
  title: 'Web, Mobile & Commerce Solutions | 4Biz International',
  description: 'Build scalable websites, mobile apps, and eCommerce platforms for business growth. UI/UX, web development, CMS, and payment integrations.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
  },
  openGraph: {
    title: 'Web, Mobile & Commerce Solutions | 4Biz International',
    description: 'Build scalable websites, mobile apps, and eCommerce platforms for business growth. UI/UX, web development, CMS, and payment integrations.',
    url: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
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
    title: 'Web, Mobile & Commerce Solutions | 4Biz International',
    description: 'Build scalable websites, mobile apps, and eCommerce platforms for business growth. UI/UX, web development, CMS, and payment integrations.',
    images: ['https://www.4bizinternational.com/4biz_logo-1.png'],
  },
};

export default function WebMobileCommercePage() {
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
        name: 'Web, Mobile & Commerce Solutions',
        item: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web, Mobile & Commerce Solutions',
    serviceType: 'Software & Web Development Solutions',
    provider: {
      '@type': 'Organization',
      name: '4Biz International LLC',
      url: 'https://www.4bizinternational.com/',
      logo: 'https://www.4bizinternational.com/4biz_logo-1.png',
    },
    areaServed: 'Global',
    description: 'Custom UI/UX design, corporate websites, mobile app development, eCommerce platforms, CMS solutions, PWAs, and payment gateway integrations.',
    url: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Web, Mobile & Commerce Solutions',
    url: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
    description: 'Custom UI/UX design, corporate websites, mobile app development, eCommerce platforms, CMS solutions, PWAs, and payment gateway integrations.',
    datePublished: '2024-01-01',
    dateModified: '2026-08-21',
    publisher: {
      '@type': 'Organization',
      name: '4Biz International LLC',
      url: 'https://www.4bizinternational.com/',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is web, mobile, and commerce solutions development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Web, mobile, and commerce solutions refer to the full-stack engineering process of building user interface designs, custom web applications, mobile apps, and online shopping architectures integrated with payment processing software.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to choose between a native mobile app and a Progressive Web App (PWA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose native mobile apps for deep hardware integration, offline storage, and app store presence. Choose PWAs for instant web access, cross-device compatibility, lower development cost, and simple maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I invest in custom eCommerce development over standard templates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, investing in custom eCommerce architectures yields faster page load speeds, seamless multi-channel ERP integration, higher checkout conversions, and total control over user data and checkout workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'What web and mobile solutions does 4Biz International offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4Biz International provides end-to-end digital engineering including UI/UX design, corporate web development, web application development, native and cross-platform mobile app development, eCommerce store builds, headless CMS development, PWAs, and custom payment gateway integrations.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      {/* Invisible JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-attachment-scroll bg-[linear-gradient(to_bottom,rgba(4,10,33,0)_0%,rgba(4,10,33,0.4)_100%)] mix-blend-multiply" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="text-left flex flex-col items-start lg:col-span-6 order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20">
                03 — Digital Products
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
                Web, Mobile &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Commerce Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal transparent-content">
                Create powerful digital experiences with scalable websites, mobile applications, and eCommerce platforms designed for performance and growth. We design, build, and integrate the products your customers actually use to find you, buy from you, and come back.
              </p>
            </div>

            {/* Right Media Column - REDUCED IMAGE SIZE */}
            <div className="w-full flex items-center justify-center lg:col-span-6 order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[460px] lg:max-w-[500px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/web-mobile-commerce-solutions.png"
                  alt="High performance UI monitoring and web mobile commerce platform visual representation"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-contain mix-blend-screen transition-all duration-700 ease-out transform scale-95 sm:scale-100 lg:scale-105 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AEO DEFINITION SUPPORT BOX */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-teal-900/20 border border-teal-500/40 backdrop-blur-xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-2">Definition Signal</h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                <strong>What is Web, Mobile, and Commerce Solutions?</strong> Web, Mobile, and Commerce Solutions encompass digital engineering services that combine custom UI/UX design, web app development, native mobile applications, content management systems (CMS), and online checkout systems to provide scalable digital experiences for enterprise growth.
              </p>
            </div>
          </div>
        </section>

        {/* TOP KEY TAKEAWAY SUMMARY */}
        <section className="relative py-6 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                Key Takeaway Summary
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                4Biz International delivers high-speed, conversion-focused digital platforms designed for enterprise efficiency and customer growth. Our service suite spans UI/UX design, custom web and mobile app development, scalable eCommerce architectures, CMS setups, Progressive Web Apps (PWAs), and seamless payment gateway integrations.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & STATS NARRATIVE */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">
                Why this matters
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One product strategy, across every screen your customer uses
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                A website that loads slowly, a checkout that loses customers at the payment step, an app that nobody downloads twice — most digital products lose people in small moments, not big failures. The fix is rarely &quot;more features.&quot; It&apos;s a faster, clearer experience built around how people actually browse, decide, and buy.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start with how your customers move today — what they search for, where they drop off, what they expect at checkout. From that, we design and build the site, app, or store that fits, then connect it to your payment provider, CMS, and internal systems so updates and orders flow without manual work.
              </p>

              {/* Target Audience & Use Case Section */}
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-slate-800">
                <h3 className="text-sm font-semibold text-teal-300 mb-2">Target Audience &amp; Ideal Use Cases</h3>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                  <li><strong>Target Audience:</strong> Global enterprises, mid-market brands, retail chains, and tech startups.</li>
                  <li><strong>Primary Use Cases:</strong> Legacy platform refactoring, cross-platform app deployment, checkout optimization, and automated CMS workflows.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">&lt;2.5s</div>
                <div className="text-sm text-slate-400 mt-1">Target load time we design and build toward, on real connections</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Mobile-first</div>
                <div className="text-sm text-slate-400 mt-1">Every build designed for the device most of your customers actually use</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support and monitoring once your product is live</div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">What&apos;s included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Products and integrations we design and build
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From a single corporate site to a full storefront with native apps, we scope the build to what your customers need next.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><circle cx="7" cy="6" r="0.6" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">UI/UX Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Research-led design that maps how people actually navigate, decide, and buy — then a visual system that makes that path obvious.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Corporate Website Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A fast, on-brand site built to load quickly, rank well, and give visitors a clear next step instead of a wall of pages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M8 13h3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Web Application Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Custom dashboards, booking systems, or internal tools built around specific business logic that off-the-shelf software can&apos;t handle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Mobile App Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Native and cross-platform apps for iOS and Android, built for the offline moments and notifications a mobile site can&apos;t deliver.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">E-commerce Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Online stores with product catalogs, cart, and checkout built to convert — and inventory that stays in sync with what you actually have in stock.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M9.5 13.5l1.5 1.5 3-3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">CMS Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A content system your own team can update — new pages, products, or blog posts — without filing a request to a developer.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M7 17h10M11 19.5h2"/><circle cx="12" cy="5" r="1.2" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Progressive Web Apps (PWA)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  An app-like, installable experience that works in the browser — with offline access and push notifications, no app store required.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Payment Gateway Integration</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Secure checkout connected to providers like Stripe, PayPal, or Razorpay, so payments settle correctly without manual reconciliation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AEO COMPARISON & STRUCTURED ANSWER TABLE SUPPORT */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Solution Comparison Matrix</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-800/80 text-teal-300 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Solution Type</th>
                    <th className="p-4">Primary Advantage</th>
                    <th className="p-4">Delivery Timeline</th>
                    <th className="p-4">Ideal Business Goal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-white/[0.01]">
                    <td className="p-4 font-semibold text-white">Corporate Web Platform</td>
                    <td className="p-4">High speed and Core Web Vitals score</td>
                    <td className="p-4">3 - 5 Weeks</td>
                    <td className="p-4">Brand authority &amp; lead generation</td>
                  </tr>
                  <tr className="hover:bg-white/[0.01]">
                    <td className="p-4 font-semibold text-white">Native Mobile App</td>
                    <td className="p-4">Deep device features &amp; push channels</td>
                    <td className="p-4">8 - 12 Weeks</td>
                    <td className="p-4">High-retention customer portal</td>
                  </tr>
                  <tr className="hover:bg-white/[0.01]">
                    <td className="p-4 font-semibold text-white">Headless eCommerce</td>
                    <td className="p-4">Flexible API-driven checkout pipelines</td>
                    <td className="p-4">6 - 10 Weeks</td>
                    <td className="p-4">Multi-channel sales scaling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* STRATEGIC PILLARS & PROCESS STEPS */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Built for how people actually browse, decide, and buy
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Performance-first</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Every build is measured against load time and conversion, not just how it looks in a design file.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Built to scale</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Architecture that handles traffic spikes and new features without a rebuild a year later.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Secure by design</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Payment data, logins, and customer information protected from the first line of code.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Ongoing support</h3>
                <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your stack — not a ticket queue starting from zero each time.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-slate-800/60">
              <h2 className="text-xl font-bold text-white mb-4">Our 4-Step Engineering Process</h2>
              <ol className="list-decimal list-inside space-y-3 text-sm text-slate-300">
                <li><strong className="text-white">Discovery &amp; User Mapping:</strong> Analyzing user journeys, traffic drop-offs, and architecture goals.</li>
                <li><strong className="text-white">UI/UX Prototyping:</strong> Creating high-fidelity, interactive prototypes tuned for mobile conversion.</li>
                <li><strong className="text-white">Agile Development &amp; Integration:</strong> Writing clean, optimized code with secure API and payment connectivity.</li>
                <li><strong className="text-white">Deployment &amp; 24/7 Monitoring:</strong> Launching on reliable cloud servers with continuous performance tracking.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CONVERSATIONAL FAQ SECTION */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-teal-400 uppercase block mb-2">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Questions about our Web, Mobile &amp; Commerce Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">What is web, mobile, and commerce solutions development?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  It refers to full-stack engineering that builds responsive websites, mobile apps, and online purchasing portals integrated with custom backend software and payment gateways.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">How to choose between a mobile app and a PWA?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Choose a native app for hardware integrations and offline performance. Choose a Progressive Web App (PWA) for fast, store-free deployment through browsers.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">Should I upgrade to custom eCommerce architecture?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Yes, custom architecture improves website load speeds, scales inventory management, and increases checkout conversion rates compared to standard templates.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">What web and mobile solutions does 4Biz International offer?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We provide end-to-end digital engineering including UI/UX design, web development, web apps, iOS/Android apps, eCommerce stores, CMS, PWAs, and payment integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2 INTERNAL + 2 EXTERNAL LINKS FOR 100/100 SEO CITATIONS */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between items-center text-xs text-slate-400 border-t border-slate-800/80 pt-6">
            <div>
              <span>Explore related services: </span>
              <Link href="/services/" className="text-teal-400 hover:underline ml-1">All Digital Services</Link>
              <span className="mx-2">•</span>
              <Link href="/about-us/" className="text-teal-400 hover:underline">About 4Biz International</Link>
              <span className="mx-2">•</span>
              <Link href="https://www.4bizinternational.com/" className="text-teal-400 hover:underline">4Biz Home</Link>
            </div>
            <div>
              <span>Industry benchmarks referenced via </span>
              <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline ml-1">Google Web Vitals Documentation</a>
            </div>
          </div>
        </section>

        {/* INFORMATIONAL CLOSING SUMMARY */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to build your next digital product?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you&apos;re trying to launch — a site, an app, or a store — and we&apos;ll scope the right build and timeline.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}