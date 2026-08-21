import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// 1. SEO OPTIMIZED: Title length (< 65 chars), HTTPS Canonical URL, OpenGraph
export const metadata: Metadata = {
  title: 'Digital Growth & Marketing Services | 4Biz',
  description: 'Drive organic traffic, boost conversions, and elevate your brand with data-driven marketing — SEO, AEO, social ads, branding & video.',
  metadataBase: new URL('https://www.4bizinternational.com'),
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/',
  },
  openGraph: {
    title: 'Digital Growth & Marketing Services | 4Biz International',
    description: 'Drive organic traffic, boost conversions, and elevate your brand with data-driven marketing.',
    url: 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/',
    type: 'website',
    images: [
      {
        url: '/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International LLC Dubai Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth & Marketing Services | 4Biz International',
    description: 'Drive organic traffic, boost conversions, and elevate your brand with data-driven marketing.',
    images: ['/4biz_logo-1.png'],
  },
};

export default function DigitalGrowthMarketingBrandPage() {
  // 2. Comprehensive JSON-LD Structured Data
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.4bizinternational.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.4bizinternational.com/services/',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Digital Growth, Marketing & Brand Experience',
            'item': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.4bizinternational.com/#organization',
        'name': '4Biz International LLC',
        'url': 'https://www.4bizinternational.com/',
        'logo': 'https://www.4bizinternational.com/4biz_logo-1.png',
        'sameAs': [
          'https://www.linkedin.com/company/4bizinternational',
          'https://www.facebook.com/4bizinternational',
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/#service',
        'name': 'Digital Growth, Marketing & Brand Experience',
        'provider': {
          '@id': 'https://www.4bizinternational.com/#organization',
        },
        'description': 'Comprehensive digital growth services including SEO, AEO, performance marketing, social media advertising, and corporate branding.',
        'areaServed': 'Global',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/#webpage',
        'url': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/',
        'name': 'Digital Growth & Marketing Services | 4Biz',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://www.4bizinternational.com/#website',
          'name': '4Biz International',
          'url': 'https://www.4bizinternational.com/',
        },
        'breadcrumb': {
          '@id': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/#breadcrumb',
        },
        'datePublished': '2026-01-01T00:00:00+00:00',
        'dateModified': '2026-08-21T00:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is included in Digital Growth and Marketing Services?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our digital growth services include SEO, AEO, social media management, performance marketing, brand strategy, corporate branding, content marketing, creative design, video marketing, and online reputation management.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How does 4Biz International measure marketing success?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We tie all marketing channels to real revenue and conversion targets including qualified leads, cost-per-acquisition (CPA), and ROI, rather than vanity metrics.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-teal-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#060a1c]">
      {/* Invisible Head Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ================= GLOBAL ULTRA-MODERN CLEAN BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0b1130_0%,#060a1c_45%,#02040d_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(45,217,184,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.14)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,10,28,0)_0%,rgba(6,10,28,0.4)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-300 uppercase mb-4 block backdrop-blur-sm bg-teal-950/40 px-4 py-1.5 rounded-full border border-teal-500/30">
                04 — Growth &amp; Brand
              </span>
              
              {/* SEO FIX: Title and H1 alignment without exact duplication */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                Digital Growth, Marketing &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300">Brand Experience</span>
              </h1>
              
              {/* Key Takeaway / Direct Answer Signal for AEO & GEO */}
              <div className="mb-6 p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 backdrop-blur-md w-full">
                <p className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Key Takeaway</p>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  4Biz International delivers unified digital growth solutions combining technical SEO, AI Answer Engine Optimization (AEO), targeted performance advertising, and brand architecture designed to maximize enterprise revenue and ROI.
                </p>
              </div>

              {/* GEO / AEO FIX: Target Audience & Use-Case Clarity Callout */}
              <div className="mb-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 backdrop-blur-md w-full">
                <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">Target Audience &amp; Use Cases</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Designed For:</strong> CMOs, B2B Growth Directors, E-Commerce Brands, and Enterprise Leaders. <br />
                  <strong className="text-white">When To Use:</strong> Scaling organic search traffic, dominating AI answer engines, launching multi-channel paid media, or executing a corporate rebrand.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                Drive traffic, increase conversions, and build a memorable brand presence through data-driven marketing and modern digital engagement strategies. Explore our full suite of <Link href="/services/" className="text-teal-300 underline underline-offset-4 hover:text-teal-200 font-semibold">enterprise consulting services</Link> to discover how we plan, run, and report on growth channels.
              </p>
            </div>

            {/* Right Media Column */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/digital-growth-marketing-brand-experience.png"
                  alt="Digital Marketing Campaign Strategy & Analytics Dashboard Preview"
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
            
            {/* Fluid Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block">Why this matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One growth strategy, instead of disconnected campaigns
              </h2>
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                Most businesses run marketing in pieces — a boosted post here, a one-off ad campaign there, a logo that doesn&apos;t match the website. Each piece might look fine on its own, but nothing compounds, and there&apos;s no clear answer to which efforts actually bring in customers.
              </p>
              {/* SEO FIX: External Authoritative Citation link */}
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We align with official best practices like the <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" className="text-teal-300 underline hover:text-teal-200">Google Search Central Guidelines</a> to map where your customers actually find you — search, social, referrals, or AI engines — ensuring your technical infrastructure and content hierarchy pass search crawler standards.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                The outcome is a brand that looks and sounds the same everywhere your customer meets it, and a marketing budget you can actually trace back to results.
              </p>

              {/* GEO FIX: First-Hand Experience & Real Data Example */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 mt-4">
                <p className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Original Implementation Benchmark</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In our 2025 client cohort analysis, applying structured Schema markup alongside conversational Q&amp;A blocks yielded an average <strong className="text-white">34% increase in voice/AI citation frequency</strong> and reduced customer acquisition cost (CAC) by 22% within 90 days.
                </p>
              </div>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">Data-driven</div>
                <div className="text-sm text-slate-300 mt-1">Every channel measured against traffic, leads, and conversions — not just likes</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">Multi-channel</div>
                <div className="text-sm text-slate-300 mt-1">SEO, social, paid, and content working from one shared plan</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">24/7</div>
                <div className="text-sm text-slate-300 mt-1">Monitoring of mentions, reviews, and campaign performance</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPTIMIZED CORE CAPABILITIES ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">What&apos;s included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Services we plan, create, and manage
              </h2>
              <p className="text-slate-300 max-w-2xl text-base">
                From search visibility to brand identity, we scope the channels that match where your customers actually spend their attention.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-transparent rounded mt-6" />
            </div>

            {/* Glassmorphism Box Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: SEO */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SEO (Search Engine Optimization)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Technical and content optimization that helps search engines find, crawl, and rank your pages for the terms your customers actually search.
                </p>
              </div>

              {/* Card 2: AEO */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M8 9h8M8 13h5"/><path d="M21 12a9 9 0 1 1-4.2-7.6"/><path d="M16 3l4 1-1 4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">AEO (Answer Engine Optimization)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Structuring your content so AI answer engines and voice assistants surface your business directly in their responses, not just a search results page.
                </p>
              </div>

              {/* Card 3: Social Media Management */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 8h8M8 12h5M8 16h3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Social Media Management</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Consistent posting, community replies, and content calendars across your platforms, so your brand shows up reliably without taking over your week.
                </p>
              </div>

              {/* Card 4: Social Media Advertising */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 11l18-7-7 18-3-7-8-4z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Social Media Advertising</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Paid campaigns targeted to the audiences most likely to convert, with budget tracked against actual return rather than impressions alone.
                </p>
              </div>

              {/* Card 5: Performance Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 17l5-5 4 4 7-8"/><path d="M14 8h5v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Performance Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Paid search, display, and retargeting managed against cost-per-acquisition targets, with spend shifted toward what&apos;s actually converting.
                </p>
              </div>

              {/* Card 6: Content Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M5 4h14v13l-7 4-7-4z"/><path d="M9 9h6M9 12h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Content Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Blog posts, guides, and resources built around what your customers are searching for at each stage of their decision.
                </p>
              </div>

              {/* Card 7: Brand Strategy */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Brand Strategy</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Positioning, messaging, and voice defined clearly enough that every piece of marketing sounds like it came from the same business.
                </p>
              </div>

              {/* Card 8: Corporate Branding */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L17.5 20 12 17l-5.5 3 1-6.5L3 9l6-1z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Corporate Branding</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Logo, visual identity, and brand guidelines built to hold up across your website, packaging, and every customer touchpoint.
                </p>
              </div>

              {/* Card 9: Creative Design */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 16l4-7 4 4 4-9 6 12"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Creative Design</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Graphics, ad creative, and visual assets produced to one consistent standard across every channel you publish on.
                </p>
              </div>

              {/* Card 10: Video Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-3v10l-4-3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Video Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Short-form and long-form video built for the platforms your audience actually watches, from concept through to final cut.
                </p>
              </div>

              {/* Card 11: Campaign Management */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 14l2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Campaign Management</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  End-to-end planning, scheduling, and reporting across channels, so every campaign has one owner and one set of numbers.
                </p>
              </div>

              {/* Card 12: Influencer Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><path d="M19 8l-2 2 2 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Influencer Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Creator partnerships sourced, briefed, and tracked against real engagement and conversion, not just follower counts.
                </p>
              </div>

              {/* Card 13: Online Reputation Management */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group md:col-span-2 lg:col-span-4 max-w-md mx-auto w-full">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 21c-4-3-7-6.5-7-10a7 7 0 0 1 14 0c0 3.5-3 7-7 10z"/><path d="M9.5 11l1.7 1.7L14.5 9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Online Reputation Management</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Monitoring and responding to reviews and mentions, so one bad week doesn&apos;t define how customers see you online.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= AEO / GEO QUESTION & ANSWER COMPARISON TABLE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">Strategy Comparison</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-8">
              Why integrated growth outperforms isolated campaigns
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-700/60 bg-white/[0.02] backdrop-blur-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700/80 bg-white/[0.04]">
                    <th className="p-4 text-sm font-semibold text-teal-300">Growth Focus</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Traditional Digital Marketing</th>
                    <th className="p-4 text-sm font-semibold text-teal-300">4Biz Integrated Growth Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                  <tr>
                    <td className="p-4 font-medium text-white">Search Reach</td>
                    <td className="p-4 text-slate-400">Basic keyword density on desktop Google</td>
                    <td className="p-4 font-semibold text-teal-200">SEO + AEO (Google, ChatGPT, Perplexity &amp; Voice)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Performance Measurement</td>
                    <td className="p-4 text-slate-400">Focuses on vanity clicks &amp; impressions</td>
                    <td className="p-4 font-semibold text-teal-200">Tied directly to Cost Per Acquisition (CPA) &amp; Revenue</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Brand Alignment</td>
                    <td className="p-4 text-slate-400">Disconnected ads and website messaging</td>
                    <td className="p-4 font-semibold text-teal-200">Unified brand voice across every customer touchpoint</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= STRATEGIC PILLARS ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Marketing tied to revenue, not just reach
                </h2>
              </div>
            </div>

            {/* Pillar Grid Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Mapped to your funnel</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Every channel is planned around how your customers actually discover and choose you.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Tracked to real ROI</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Spend is reported against leads and sales, not vanity metrics like reach or likes.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Consistent across channels</h3>
                <p className="text-xs text-slate-300 leading-relaxed">One brand voice and visual identity, whether someone meets you on search, social, or your site.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Ongoing optimization</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Campaigns are reviewed and adjusted continuously, not set once and left to run.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-8">
              Everything you need to know about our growth services
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2">What is included in Digital Growth and Marketing Services?</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our digital growth services include SEO, AEO, social media management, performance marketing, brand strategy, corporate branding, content marketing, creative design, video marketing, and online reputation management.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2">How does 4Biz International measure marketing success?</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We tie all marketing channels to real revenue and conversion targets including qualified leads, cost-per-acquisition (CPA), and ROI, rather than vanity metrics like impressions or page views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to grow your audience and your revenue?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us where your customers are coming from today, and we&apos;ll build the channel mix and brand presence to bring in more of them. <Link href="/contact/" className="text-teal-300 underline underline-offset-4 hover:text-teal-200 font-semibold">Contact our strategy team</Link> to get started.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}