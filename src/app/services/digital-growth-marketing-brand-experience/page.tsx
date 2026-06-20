import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (Preserved perfectly & updated)
export const metadata: Metadata = {
  title: 'Digital Growth, Marketing & Brand Experience | 4Biz International',
  description: 'Drive traffic, increase conversions, and build a memorable brand with data-driven marketing — SEO, AEO, social media, performance marketing, content, branding & video.',
  openGraph: {
    title: 'Digital Growth, Marketing & Brand Experience | 4Biz International',
    description: 'Drive traffic, increase conversions, and build a memorable brand with data-driven marketing.',
    url: 'https://4bizinternational.vercel.app/services/digital-growth-marketing-brand',
    type: 'website',
  },
};

export default function DigitalGrowthMarketingBrandPage() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-teal-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#060a1c]">
      
      {/* ================= GLOBAL ULTRA-MODERN DYNAMIC BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Radial Glow Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0b1130_0%,#060a1c_45%,#02040d_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(45,217,184,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.14)_0%,transparent_50%)]" />
        
        {/* 3D Splines Matrix */}
        <svg 
          className="absolute inset-0 w-full h-[200vh] opacity-55 mix-blend-screen will-change-transform transform motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
          style={{
            transform: 'translateY(calc(var(--scroll-y, 0px) * -0.15))',
            perspective: '1000px'
          }}
          viewBox="0 0 1440 1800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-100 200C300 400 500 -50 900 350C1300 750 800 1200 1600 1100" 
            stroke="url(#splineGradient1)" 
            strokeWidth="2.5" 
            strokeDasharray="8 4"
          />
          <path 
            d="M-50 450C450 150 200 800 850 650C1500 500 1100 1400 1550 1500" 
            stroke="url(#splineGradient2)" 
            strokeWidth="1.5" 
          />
          <path 
            d="M150 100C250 500 800 300 700 900C600 1500 1300 1200 1350 1750" 
            stroke="url(#splineGradient1)" 
            strokeWidth="1" 
            opacity="0.8"
          />
          
          <defs>
            <linearGradient id="splineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd9b8" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#16a892" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="splineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#16a892" stopOpacity="0" />
              <stop offset="50%" stopColor="#2dd9b8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0b1130" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-attachment-scroll bg-[linear-gradient(to_bottom,rgba(6,10,28,0)_0%,rgba(6,10,28,0.4)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION WITH REPEATED TOP IMAGES ================= */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20">
              04 — Growth &amp; Brand
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] pb-6 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
              Digital Growth, Marketing &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Brand Experience</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal transparent-content">
              Drive traffic, increase conversions, and build a memorable brand presence through data-driven marketing and modern digital engagement strategies. We plan, run, and report on the channels that bring people to you and the brand that makes them stay.
            </p>
          </div>

          {/* Top Level Repeated Transparent Images Panel / Blueprint Preview Reference */}
          <div className="w-full max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/ai-1.png"
                alt="Digital Marketing Campaign Strategy & Analytics Dashboard Preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/ai-1.png"
                alt="Brand Strategy Matrix and Creative Performance Optimization Preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden sm:col-span-2 lg:col-span-1">
              <Image
                src="/services/ai-1.png"
                alt="SEO, AEO, and Multi-channel Acquisition Framework Visual Identity Preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ================= MISSION & STATS NARRATIVE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Fluid Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">Why this matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One growth strategy, instead of disconnected campaigns
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Most businesses run marketing in pieces — a boosted post here, a one-off ad campaign there, a logo that doesn't match the website. Each piece might look fine on its own, but nothing compounds, and there's no clear answer to which efforts actually bring in customers.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by mapping where your customers actually find you — search, social, referrals, or word of mouth — and what happens after they land on your page. From that, we build a connected plan across SEO, paid media, content, and brand identity, with every channel reporting back to the same set of numbers.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The outcome is a brand that looks and sounds the same everywhere your customer meets it, and a marketing budget you can actually trace back to results.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Data-driven</div>
                <div className="text-sm text-slate-400 mt-1">Every channel measured against traffic, leads, and conversions — not just likes</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Multi-channel</div>
                <div className="text-sm text-slate-400 mt-1">SEO, social, paid, and content working from one shared plan</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Monitoring of mentions, reviews, and campaign performance</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPTIMIZED CORE CAPABILITIES (GLASSY BOXES & DISTINCT ICONS) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">What's included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Services we plan, create, and manage
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From search visibility to brand identity, we scope the channels that match where your customers actually spend their attention.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: SEO */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SEO (Search Engine Optimization)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Technical and content optimization that helps search engines find, crawl, and rank your pages for the terms your customers actually search.
                </p>
              </div>

              {/* Card 2: AEO */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M8 9h8M8 13h5"/><path d="M21 12a9 9 0 1 1-4.2-7.6"/><path d="M16 3l4 1-1 4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">AEO (Answer Engine Optimization)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Structuring your content so AI answer engines and voice assistants surface your business directly in their responses, not just a search results page.
                </p>
              </div>

              {/* Card 3: Social Media Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 8h8M8 12h5M8 16h3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Social Media Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Consistent posting, community replies, and content calendars across your platforms, so your brand shows up reliably without taking over your week.
                </p>
              </div>

              {/* Card 4: Social Media Advertising */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 11l18-7-7 18-3-7-8-4z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Social Media Advertising</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Paid campaigns targeted to the audiences most likely to convert, with budget tracked against actual return rather than impressions alone.
                </p>
              </div>

              {/* Card 5: Performance Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 17l5-5 4 4 7-8"/><path d="M14 8h5v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Performance Marketing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Paid search, display, and retargeting managed against cost-per-acquisition targets, with spend shifted toward what's actually converting.
                </p>
              </div>

              {/* Card 6: Content Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M5 4h14v13l-7 4-7-4z"/><path d="M9 9h6M9 12h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Content Marketing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Blog posts, guides, and resources built around what your customers are searching for at each stage of their decision.
                </p>
              </div>

              {/* Card 7: Brand Strategy */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Brand Strategy</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Positioning, messaging, and voice defined clearly enough that every piece of marketing sounds like it came from the same business.
                </p>
              </div>

              {/* Card 8: Corporate Branding */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L17.5 20 12 17l-5.5 3 1-6.5L3 9l6-1z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Corporate Branding</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Logo, visual identity, and brand guidelines built to hold up across your website, packaging, and every customer touchpoint.
                </p>
              </div>

              {/* Card 9: Creative Design */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 16l4-7 4 4 4-9 6 12"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Creative Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Graphics, ad creative, and visual assets produced to one consistent standard across every channel you publish on.
                </p>
              </div>

              {/* Card 10: Video Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-3v10l-4-3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Video Marketing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Short-form and long-form video built for the platforms your audience actually watches, from concept through to final cut.
                </p>
              </div>

              {/* Card 11: Campaign Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 14l2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Campaign Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  End-to-end planning, scheduling, and reporting across channels, so every campaign has one owner and one set of numbers.
                </p>
              </div>

              {/* Card 12: Influencer Marketing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><path d="M19 8l-2 2 2 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Influencer Marketing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Creator partnerships sourced, briefed, and tracked against real engagement and conversion, not just follower counts.
                </p>
              </div>

              {/* Card 13: Online Reputation Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group md:col-span-2 lg:col-span-4 max-w-md mx-auto w-full">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 21c-4-3-7-6.5-7-10a7 7 0 0 1 14 0c0 3.5-3 7-7 10z"/><path d="M9.5 11l1.7 1.7L14.5 9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Online Reputation Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Monitoring and responding to reviews and mentions, so one bad week doesn't define how customers see you online.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= STRATEGIC PILLARS (SEAMLESS INTEGRATION WITH ZERO BORDERS) ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Marketing tied to revenue, not just reach
                </h2>
              </div>
            </div>

            {/* Pillar Grid Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Mapped to your funnel</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Every channel is planned around how your customers actually discover and choose you.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Tracked to real ROI</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Spend is reported against leads and sales, not vanity metrics like reach or likes.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Consistent across channels</h4>
                <p className="text-xs text-slate-400 leading-relaxed">One brand voice and visual identity, whether someone meets you on search, social, or your site.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Ongoing optimization</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Campaigns are reviewed and adjusted continuously, not set once and left to run.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY (BORDERS AND OVERLAYS CLEARED) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to grow your audience and your revenue?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us where your customers are coming from today, and we'll build the channel mix and brand presence to bring in more of them.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}