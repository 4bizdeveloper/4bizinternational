import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (Updated with Cybersecurity requested meta)
export const metadata: Metadata = {
  title: 'Cybersecurity & Digital Protection Services | 4Biz International',
  description: "Protect your organisation from evolving cyber threats with 4Biz International's cybersecurity services — penetration testing, vulnerability assessments, 24/7 security monitoring, endpoint protection, and compliance readiness for GDPR, ISO 27001, and more.",
    alternates: {
    canonical: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
  },
  openGraph: {
    title: 'Cybersecurity & Digital Protection Services | 4Biz International',
    description: "Protect your organisation from evolving cyber threats with 4Biz International's cybersecurity services — penetration testing, vulnerability assessments, 24/7 security monitoring, endpoint protection, and compliance readiness for GDPR, ISO 27001, and more.",
    url: 'https://www.4bizinternational.com/services/digital-transformation-emerging-technologies/',
    type: 'website',
  },
};

export default function CybersecurityPage() {
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
                08 — Digital Transformation
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
                Digital Transformation &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Emerging Technologies</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal transparent-content">
                Transform traditional operations into intelligent, data-driven digital enterprises through AI, automation, cloud technologies, and innovation-led strategies tailored to your business goals.
              </p>
            </div>

            {/* Right Media Column - Single Image Layout Preview */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/digital-transformation-emerging-technologies.png"
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
                Transformation that sticks — built around how your business actually operates
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Most digital transformation initiatives stall not because the technology fails, but because the change isn't grounded in real operational needs. New tools get deployed without adoption plans. AI pilots run without a path to production. Automation projects solve the wrong bottlenecks.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by understanding where your organisation spends time, where decisions get delayed, and where manual processes create risk or cost. From that review, we design a phased roadmap — integrating AI, automation, cloud platforms, and modern software — sequenced so that each step delivers measurable value before the next begins.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The outcome is a business that runs on current technology, can adapt quickly, and has the internal capability to keep evolving without starting over every few years.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">3×</div>
                <div className="text-sm text-slate-400 mt-1">Average productivity gain reported after business process automation</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Phased</div>
                <div className="text-sm text-slate-400 mt-1">Roadmaps designed for value at every stage, not just at the end</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">End-to-End</div>
                <div className="text-sm text-slate-400 mt-1">Strategy, implementation, licensing, and ongoing optimisation</div>
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
                Transformation services we design, build, and deliver
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From an AI proof-of-concept to a full enterprise modernisation programme, we scope each engagement to what your organisation is ready to adopt and sustain.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Artificial Intelligence Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Artificial Intelligence Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Custom AI models and integrations built for your specific business problems — from predictive analytics to intelligent document processing.
                </p>
              </div>

              {/* Card 2: Generative AI Integration */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Generative AI Integration</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Embedding large language models and generative tools into your products and workflows — content generation, summarisation, and intelligent assistants.
                </p>
              </div>

              {/* Card 3: AI Chatbots & Assistants */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">AI Chatbots &amp; Assistants</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Conversational AI for customer support, internal knowledge bases, and guided workflows — deployed on web, WhatsApp, or your existing platforms.
                </p>
              </div>

              {/* Card 4: Business Process Automation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Business Process Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Identifying and automating repetitive manual processes using RPA, workflow engines, and API integrations — reducing cost and error rates.
                </p>
              </div>

              {/* Card 5: Data Analytics & BI */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Data Analytics &amp; BI</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Turning raw operational data into decision-ready dashboards and reports — using Power BI, Tableau, or custom analytics stacks built for your data.
                </p>
              </div>

              {/* Card 6: Digital Transformation Consulting */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Digital Transformation Consulting</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Strategy-first advisory engagements that map your current state, define the target operating model, and produce a costed, sequenced roadmap.
                </p>
              </div>

              {/* Card 7: IT Infrastructure Modernisation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.6M11 6.5h.6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">IT Infrastructure Modernisation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Replacing legacy systems, consolidating on-premise infrastructure, and migrating to modern platforms without disrupting day-to-day operations.
                </p>
              </div>

              {/* Card 8: Cloud Transformation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 17a5 5 0 0 1-1-9.9 6 6 0 0 1 11.6-1.8A4.5 4.5 0 0 1 17 17z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Cloud Transformation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Moving workloads, applications, and data to the cloud — on AWS, Azure, or GCP — with architecture designed for cost efficiency and resilience.
                </p>
              </div>

              {/* Card 9: Enterprise Automation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Enterprise Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  End-to-end automation of enterprise workflows across HR, finance, procurement, and operations — reducing manual handoffs and approval bottlenecks.
                </p>
              </div>

              {/* Card 10: Industry 4.0 Enablement */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Industry 4.0 Enablement</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Connecting physical operations with digital systems through IoT, smart sensors, and real-time data pipelines for manufacturing and logistics.
                </p>
              </div>

              {/* Card 11: Process Re-engineering */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Process Re-engineering</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Redesigning broken or inefficient processes from first principles — not just automating what's already there, but rethinking how work flows.
                </p>
              </div>

              {/* Card 12: Technology Consulting */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Technology Consulting</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Vendor-neutral advisory on technology selection, architecture decisions, and build-versus-buy trade-offs for your digital initiatives.
                </p>
              </div>

              {/* Card 13: Software Licensing & Trading */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8h6M9 12h4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Software Licensing &amp; Trading</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Procurement, management, and optimisation of software licences across your organisation — reducing spend and ensuring compliance.
                </p>
              </div>

              {/* Card 14: Adobe Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Adobe Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Licensing, deployment, and support for Adobe Creative Cloud, Experience Cloud, and Document Cloud across your teams and workflows.
                </p>
              </div>

              {/* Card 15: Microsoft Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Microsoft 365, Azure, Dynamics 365, and Teams deployment — licenced, configured, and integrated with your existing IT environment.</p>
              </div>

              {/* Card 16: SaaS Licensing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 16V8l8-5 8 5v8l-8 5z"/><path d="M4 8l8 5 8-5M12 13v8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SaaS Licensing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Centralised management of SaaS subscriptions across your organisation — tracking usage, eliminating waste, and negotiating better terms.
                </p>
              </div>

              {/* Card 17: Online & On-Premise Licensing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Online &amp; On-Premise Licensing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Managing the full spectrum of deployment models — cloud subscriptions alongside perpetual on-premise licences, keeping renewals and compliance in order.
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
                  Transformation that delivers before it's finished
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Strategy before technology</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We define the business outcome first. The technology choice follows from what's needed, not the other way around.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Phased, not big-bang</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Each phase delivers working capability and measurable ROI — so value accumulates as the programme progresses, not only at the end.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Adoption built in</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Change management, training, and internal documentation are part of every delivery — not an afterthought when adoption stalls.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Vendor-neutral advice</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We recommend the right tool for your situation — not the platform we happen to resell or the one we know best from other clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY (BORDERS AND OVERLAYS CLEARED) ================= */}
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
  );
}