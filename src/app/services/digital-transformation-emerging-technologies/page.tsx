import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// 1. FIXED SEO: Optimized Title length (49 chars, keyword-focused, under 60-char limit)
export const metadata: Metadata = {
  title: 'Digital Transformation & Emerging Tech | 4Biz Intl',
  description: 'Transform traditional operations into intelligent digital enterprises through AI, automation, cloud, and innovation strategies by 4Biz International.',
  // 2. FIXED SEO: Added Canonical Tag pointing to HTTPS URL
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
  },
  openGraph: {
    title: 'Digital Transformation & Emerging Tech | 4Biz Intl',
    description: 'Transform traditional operations into intelligent digital enterprises through AI, automation, cloud, and innovation strategies by 4Biz International.',
    url: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
    type: 'website',
    images: [
      {
        url: 'https://www.4bizinternational.com/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International LLC Dubai Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation & Emerging Tech | 4Biz Intl',
    description: 'Transform traditional operations into intelligent digital enterprises through AI, automation, cloud, and innovation strategies by 4Biz International.',
    images: ['https://www.4bizinternational.com/4biz_logo-1.png'],
  },
};

export default function DigitalTransformationPage() {
  const jsonLdBreadcrumb = {
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
        name: 'Digital Transformation & Emerging Technologies',
        item: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
      },
    ],
  };

  const jsonLdWebPageService = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/#webpage',
    url: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
    name: 'Digital Transformation & Emerging Technologies',
    datePublished: '2026-01-15',
    dateModified: '2026-08-21',
    publisher: {
      '@type': 'Organization',
      name: '4Biz International LLC',
      url: 'https://www.4bizinternational.com/',
      logo: 'https://www.4bizinternational.com/4biz_logo-1.png',
      sameAs: [
        'https://www.linkedin.com/company/4bizinternational',
        'https://twitter.com/4bizintl',
      ],
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Digital Transformation & Emerging Technologies Consulting',
      provider: {
        '@type': 'Organization',
        name: '4Biz International LLC',
      },
      areaServed: 'Worldwide',
      serviceType: 'IT Consulting & Enterprise Modernization',
      description: 'Phased digital transformation, AI implementation, business process automation, and cloud migration services.',
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is digital transformation with emerging technologies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Digital transformation is the strategic integration of modern technologies such as Artificial Intelligence, business process automation, cloud computing, and advanced analytics into core enterprise operations to improve efficiency, decision-making, and growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does 4Biz International ensure successful digital adoption?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4Biz International uses a phased delivery roadmap that prioritizes measurable operational value at every stage, combining strategy, technical integration, staff training, and vendor-neutral advisory.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is this digital transformation service designed for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This service is designed for enterprise executives, IT leaders, and business directors across industries like retail, logistics, finance, real estate, and manufacturing seeking to modernize legacy workflows.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPageService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              <div className="text-left flex flex-col items-start order-1">
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-300 uppercase mb-4 block backdrop-blur-sm bg-teal-950/40 px-4 py-1.5 rounded-full border border-teal-500/30">
                  08 — Digital Transformation
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                  Digital Transformation &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Emerging Technologies</span>
                </h1>
                
                {/* AEO Top Summary Signal */}
                <div className="mb-4 p-4 rounded-xl bg-slate-900/80 border border-teal-500/30 text-slate-200 text-sm leading-relaxed">
                  <strong className="text-teal-300 block mb-1 font-semibold">Key Takeaway Summary:</strong>
                  4Biz International converts legacy business operations into scalable, data-driven digital systems using AI solutions, cloud infrastructure, enterprise automation, and structured roadmaps designed for long-term ROI.
                </div>

                <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                  Transform traditional operations into intelligent, data-driven digital enterprises through AI, automation, cloud technologies, and innovation-led strategies tailored to your business goals.
                </p>
                
                {/* 3. FIXED SEO: Internal Contextual Links added (At least 2 unique internal links) */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-teal-300">
                  <Link href="https://www.4bizinternational.com/services/" className="hover:underline text-teal-400">
                    &larr; View All Services
                  </Link>
                  <span className="text-slate-500">|</span>
                  <Link href="https://www.4bizinternational.com/about/" className="hover:underline text-teal-400">
                    About 4Biz International
                  </Link>
                  <span className="text-slate-500">|</span>
                  <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300">
                    Microsoft Enterprise Cloud Solutions &rarr;
                  </a>
                </div>
              </div>

              <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none">
                <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                  <Image
                    src="/services/digital-transformation-emerging-technologies.png"
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

          {/* 4. FIXED AEO & GEO: Explicit Audience & Use-Case Clarity Section */}
          <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto p-6 rounded-2xl bg-teal-950/30 border border-teal-500/30 backdrop-blur-md">
              <h2 className="text-xl font-bold text-teal-300 mb-3">
                Target Audience &amp; Decision Use-Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
                <div>
                  <strong className="text-white block mb-1">Target Audience:</strong>
                  Designed for Enterprise CEOs, Chief Information Officers (CIOs), Operations Directors, and IT Transformation Leaders across growth-oriented mid-market to enterprise companies.
                </div>
                <div>
                  <strong className="text-white block mb-1">Industry Context:</strong>
                  Tailored for high-growth sectors including Retail, Logistics, Healthcare, Real Estate, Manufacturing, and Financial Services operating across GCC and global markets.
                </div>
                <div>
                  <strong className="text-white block mb-1">Decision Context:</strong>
                  Ideal when modernizing legacy infrastructure, transitioning from manual workflows to AI automation, eliminating ERP/CRM friction, or seeking vendor-neutral cloud advisory.
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Stats Narrative */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block">Why this matters</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Transformation that sticks — built around how your business actually operates
                </h2>
                <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                  Most digital transformation initiatives stall not because the technology fails, but because the change isn't grounded in real operational needs. New tools get deployed without adoption plans. AI pilots run without a path to production. Automation projects solve the wrong bottlenecks.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  We start by understanding where your organisation spends time, where decisions get delayed, and where manual processes create risk or cost. From that review, we design a phased roadmap — integrating AI, automation, cloud platforms, and modern software — sequenced so that each step delivers measurable value before the next begins.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  The outcome is a business that runs on current technology, can adapt quickly, and has the internal capability to keep evolving without starting over every few years.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4 w-full">
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                  <div className="text-3xl font-black text-teal-300 font-mono">3×</div>
                  <div className="text-sm text-slate-300 mt-1">Average productivity gain reported after business process automation</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                  <div className="text-3xl font-black text-teal-300 font-mono">Phased</div>
                  <div className="text-sm text-slate-300 mt-1">Roadmaps designed for value at every stage, not just at the end</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                  <div className="text-3xl font-black text-teal-300 font-mono">End-to-End</div>
                  <div className="text-sm text-slate-300 mt-1">Strategy, implementation, licensing, and ongoing optimisation</div>
                </div>
              </div>

            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">What's included</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                  Transformation services we design, build, and deliver
                </h2>
                <p className="text-slate-300 max-w-2xl text-base">
                  From an AI proof-of-concept to a full enterprise modernisation programme, we scope each engagement to what your organisation is ready to adopt and sustain.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Artificial Intelligence Solutions</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Custom AI models and integrations built for your specific business problems — from predictive analytics to intelligent document processing.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Generative AI Integration</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Embedding large language models and generative tools into your products and workflows — content generation, summarisation, and intelligent assistants.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">AI Chatbots &amp; Assistants</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Conversational AI for customer support, internal knowledge bases, and guided workflows — deployed on web, WhatsApp, or your existing platforms.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Business Process Automation</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Identifying and automating repetitive manual processes using RPA, workflow engines, and API integrations — reducing cost and error rates.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Data Analytics &amp; BI</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Turning raw operational data into decision-ready dashboards and reports — using Power BI, Tableau, or custom analytics stacks built for your data.
                  </p>
                </div>

                {/* Card 6 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Digital Transformation Consulting</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Strategy-first advisory engagements that map your current state, define the target operating model, and produce a costed, sequenced roadmap.
                  </p>
                </div>

                {/* Card 7 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.6M11 6.5h.6"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">IT Infrastructure Modernisation</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Replacing legacy systems, consolidating on-premise infrastructure, and migrating to modern platforms without disrupting day-to-day operations.
                  </p>
                </div>

                {/* Card 8 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 17a5 5 0 0 1-1-9.9 6 6 0 0 1 11.6-1.8A4.5 4.5 0 0 1 17 17z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Cloud Transformation</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Moving workloads, applications, and data to the cloud — on AWS, Azure, or GCP — with architecture designed for cost efficiency and resilience.
                  </p>
                </div>

                {/* Card 9 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Enterprise Automation</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    End-to-end automation of enterprise workflows across HR, finance, procurement, and operations — reducing manual handoffs and approval bottlenecks.
                  </p>
                </div>

                {/* Card 10 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Industry 4.0 Enablement</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Connecting physical operations with digital systems through IoT, smart sensors, and real-time data pipelines for manufacturing and logistics.
                  </p>
                </div>

                {/* Card 11 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Process Re-engineering</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Redesigning broken or inefficient processes from first principles — not just automating what's already there, but rethinking how work flows.
                  </p>
                </div>

                {/* Card 12 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Technology Consulting</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Vendor-neutral advisory on technology selection, architecture decisions, and build-versus-buy trade-offs for your digital initiatives.
                  </p>
                </div>

                {/* Card 13 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8h6M9 12h4"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Software Licensing &amp; Trading</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Procurement, management, and optimisation of software licences across your organisation — reducing spend and ensuring compliance.
                  </p>
                </div>

                {/* Card 14 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Adobe Solutions</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Licensing, deployment, and support for Adobe Creative Cloud, Experience Cloud, and Document Cloud across your teams and workflows.
                  </p>
                </div>

                {/* Card 15 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft Solutions</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Microsoft 365, Azure, Dynamics 365, and Teams deployment — licenced, configured, and integrated with your existing IT environment.
                  </p>
                </div>

                {/* Card 16 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 16V8l8-5 8 5v8l-8 5z"/><path d="M4 8l8 5 8-5M12 13v8"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SaaS Licensing</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Centralised management of SaaS subscriptions across your organisation — tracking usage, eliminating waste, and negotiating better terms.
                  </p>
                </div>

                {/* Card 17 */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Online &amp; On-Premise Licensing</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Managing the full spectrum of deployment models — cloud subscriptions alongside perpetual on-premise licences, keeping renewals and compliance in order.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Structured Comparative Table */}
          <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Transformation Framework &amp; Key Deliverables
              </h2>
              <div className="overflow-x-auto rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-800/80 text-teal-300 text-xs uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Pillar</th>
                      <th className="px-6 py-4">Focus Area</th>
                      <th className="px-6 py-4">Key Business Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/40">
                      <td className="px-6 py-4 font-semibold text-white">Strategy</td>
                      <td className="px-6 py-4">Process Re-engineering &amp; Roadmap</td>
                      <td className="px-6 py-4">Clear ROI sequencing before technology investment</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="px-6 py-4 font-semibold text-white">Execution</td>
                      <td className="px-6 py-4">AI, Automation &amp; Cloud Systems</td>
                      <td className="px-6 py-4">Elimination of manual bottlenecks and rapid data access</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="px-6 py-4 font-semibold text-white">Governance</td>
                      <td className="px-6 py-4">Licensing &amp; Vendor Optimization</td>
                      <td className="px-6 py-4">Centralized software compliance and reduced overhead</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Strategic Pillars */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl space-y-8 mb-12">
                <div>
                  <span className="text-xs font-bold tracking-widest text-purple-300 uppercase block mb-2">How we work</span>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    Transformation that delivers before it's finished
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                  <h3 className="text-white font-bold text-base mb-2">Strategy before technology</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">We define the business outcome first. The technology choice follows from what's needed, not the other way around.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                  <h3 className="text-white font-bold text-base mb-2">Phased, not big-bang</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Each phase delivers working capability and measurable ROI — so value accumulates as the programme progresses, not only at the end.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                  <h3 className="text-white font-bold text-base mb-2">Adoption built in</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Change management, training, and internal documentation are part of every delivery — not an afterthought when adoption stalls.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                  <h3 className="text-white font-bold text-base mb-2">Vendor-neutral advice</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">We recommend the right tool for your situation — not the platform we happen to resell or the one we know best from other clients.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Visible FAQ Section for AEO Question/Answer Extraction */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-8">
                Common questions on digital transformation
              </h2>
              
              <div className="space-y-6 max-w-4xl">
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What is digital transformation with emerging technologies?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Digital transformation is the strategic integration of modern technologies such as Artificial Intelligence, business process automation, cloud computing, and advanced analytics into core enterprise operations to improve efficiency, decision-making, and growth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How does 4Biz International ensure successful digital adoption?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    4Biz International uses a phased delivery roadmap that prioritizes measurable operational value at every stage, combining strategy, technical integration, staff training, and vendor-neutral advisory.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Who is this digital transformation service designed for?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    This service is designed for enterprise executives, IT leaders, and business directors across industries like retail, logistics, finance, real estate, and manufacturing seeking to modernize legacy workflows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Summary */}
          <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Ready to build a business that runs on current technology?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Tell us where your operations are stuck today — and we'll map a practical path forward with the right tools and a realistic timeline.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}