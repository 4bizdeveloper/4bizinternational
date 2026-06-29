import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (Preserved perfectly)
export const metadata: Metadata = {
  title: 'Web, Mobile & Commerce Solutions | 4Biz International',
  description: 'Build scalable websites, mobile apps & eCommerce platforms designed for performance and growth. UI/UX design, web & mobile app development, CMS, PWAs & payment gateway integration.',
    alternates: {
    canonical: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
  },
  openGraph: {
    title: 'Web, Mobile & Commerce Solutions | 4Biz International',
    description: 'Build scalable websites, mobile apps & eCommerce platforms designed for performance and growth. UI/UX design, web & mobile app development, CMS, PWAs & payment gateway integration.',
    url: 'https://www.4bizinternational.com/services/web-mobile-commerce-solutions/',
    type: 'website',
  },
};

export default function WebMobileCommercePage() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      
      {/* ================= GLOBAL ULTRA-MODERN DYNAMIC BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Radial Glow Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
        
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
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="splineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-attachment-scroll bg-[linear-gradient(to_bottom,rgba(4,10,33,0)_0%,rgba(4,10,33,0.4)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION WITH BALANCED 2-COLUMN LAYOUT ================= */}
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20">
                03 — Digital Products
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
                Web, Mobile &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Commerce Solutions</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal transparent-content">
                Create powerful digital experiences with scalable websites, mobile applications, and eCommerce platforms designed for performance and growth. We design, build, and integrate the products your customers actually use to find you, buy from you, and come back.
              </p>
            </div>

            {/* Right Media Column - Borderless, Containerless Seamless Merged Layout */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/web-mobile-commerce-solutions.png"
                  alt="High performance UI monitoring and clean workflow automation platforms layout preview"
                  fill
                  priority
                  sizes="(max-w-768px) 100vw, 450px"
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
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">Why this matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One product strategy, across every screen your customer uses
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                A website that loads slowly, a checkout that loses customers at the payment step, an app that nobody downloads twice — most digital products lose people in small moments, not big failures. The fix is rarely "more features." It's a faster, clearer experience built around how people actually browse, decide, and buy.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start with how your customers move today — what they search for, where they drop off, what they expect at checkout. From that, we design and build the site, app, or store that fits, then connect it to your payment provider, CMS, and internal systems so updates and orders flow without manual work.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The outcome is a digital presence that loads fast, converts visitors, and is easy for your own team to update without calling a developer every time.
              </p>
            </div>

            {/* Performance Statistics Grid */}
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

        {/* ================= OPTIMIZED CORE CAPABILITIES (GLASSY BOXES & DISTINCT ICONS) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">What's included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Products and integrations we design and build
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From a single corporate site to a full storefront with native apps, we scope the build to what your customers need next.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: UI/UX Design */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><circle cx="7" cy="6" r="0.6" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">UI/UX Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Research-led design that maps how people actually navigate, decide, and buy — then a visual system that makes that path obvious.
                </p>
              </div>

              {/* Card 2: Corporate Website Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Corporate Website Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A fast, on-brand site built to load quickly, rank well, and give visitors a clear next step instead of a wall of pages.
                </p>
              </div>

              {/* Card 3: Web Application Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M8 13h3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Web Application Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Custom dashboards, booking systems, or internal tools built around specific business logic that off-the-shelf software can't handle.
                </p>
              </div>

              {/* Card 4: Mobile App Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Mobile App Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Native and cross-platform apps for iOS and Android, built for the offline moments and notifications a mobile site can't deliver.
                </p>
              </div>

              {/* Card 5: E-commerce Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">E-commerce Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Online stores with product catalogs, cart, and checkout built to convert — and inventory that stays in sync with what you actually have in stock.
                </p>
              </div>

              {/* Card 6: CMS Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M9.5 13.5l1.5 1.5 3-3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">CMS Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A content system your own team can update — new pages, products, or blog posts — without filing a request to a developer.
                </p>
              </div>

              {/* Card 7: Progressive Web Apps (PWA) */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M7 17h10M11 19.5h2"/><circle cx="12" cy="5" r="1.2" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Progressive Web Apps (PWA)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  An app-like, installable experience that works in the browser — with offline access and push notifications, no app store required.
                </p>
              </div>

              {/* Card 8: Payment Gateway Integration */}
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

        {/* ================= STRATEGIC PILLARS (SEAMLESS INTEGRATION WITH ZERO BORDERS) ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Built for how people actually browse, decide, and buy
                </h2>
              </div>
            </div>

            {/* Premium glass-morphism panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Performance-first</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Every build is measured against load time and conversion, not just how it looks in a design file.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Built to scale</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Architecture that handles traffic spikes and new features without a rebuild a year later.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Secure by design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Payment data, logins, and customer information protected from the first line of code.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Ongoing support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your stack — not a ticket queue starting from zero each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to build your next digital product?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you're trying to launch — a site, an app, or a store — and we'll scope the right build and timeline.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}