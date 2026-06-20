import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (Updated perfectly)
export const metadata: Metadata = {
  title: 'Enterprise Business Applications (ERP & CRM) | 4Biz International',
  description: 'Streamline operations and boost customer engagement with integrated ERP & CRM platforms — Microsoft Dynamics 365, Odoo, ERPNext, custom development & sales automation tailored to your business.',
  openGraph: {
    title: 'Enterprise Business Applications (ERP & CRM) | 4Biz International',
    description: 'Streamline operations and boost customer engagement with integrated ERP & CRM platforms — Microsoft Dynamics 365, Odoo, ERPNext, custom development & sales automation tailored to your business.',
    url: 'https://4bizinternational.vercel.app/services/enterprise-applications',
    type: 'website',
  },
};

export default function EnterpriseApplicationsPage() {
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
        
        {/* ================= HERO SECTION WITH REPEATED TOP IMAGES ================= */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20 inline-flex items-center gap-2">
              <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
              02 — Enterprise Applications
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] pb-6 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
              Enterprise Business Applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">(ERP &amp; CRM)</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal transparent-content">
              Streamline operations, improve customer engagement, and gain real-time business insights through integrated ERP and CRM platforms tailored to your business needs. We design, deploy, and customize the systems that run your sales pipeline, inventory, finance, and HR — all from one connected platform.
            </p>
          </div>

          {/* Top Level Repeated Transparent Images Panel / Blueprint Preview Reference (image_bf076a.jpg visual integration) */}
          <div className="w-full max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="relative w-full aspect-[16/16] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/enterprise-business-applications-erp-crm-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms layout preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/16] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/enterprise-business-applications-erp-crm-2.png"
                alt="High performance UI monitoring and clean workflow automation platforms system preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/16] flex items-center justify-center overflow-hidden sm:col-span-2 lg:col-span-1">
              <Image
                src="/services/ai-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms analytics preview"
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
                One system of record, instead of five disconnected ones
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Most growing businesses run sales in a CRM, stock in a spreadsheet, payroll in another tool, and finance in a fourth — none of which talk to each other. Numbers get re-typed between systems, reports go stale the moment they're exported, and nobody has a single answer to "what's actually happening in the business right now."
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by mapping your sales pipeline, inventory flow, and back-office processes as they really happen — not as a textbook diagram. From that, we deploy and configure an ERP and CRM platform — Microsoft Dynamics 365, Odoo, ERPNext, or our own 4Biz ERP Solutions — connected to your existing tools, with your data migrated across cleanly.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The outcome is one shared source of truth: a deal stage updates inventory, a sale updates finance, and a leave request updates payroll — automatically.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">1 system</div>
                <div className="text-sm text-slate-400 mt-1">Sales, inventory, finance, and HR connected in one platform</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Real-time</div>
                <div className="text-sm text-slate-400 mt-1">Reporting that reflects what's happening today, not last month</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support from a team that already knows your configuration</div>
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
                Platforms and solutions we build and manage
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From off-the-shelf platforms to fully custom builds, we scope the right fit for your team size, budget, and the processes you already run.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Custom ERP Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 13h6M9 17h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Custom ERP Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  An ERP built around your actual procurement, production, and finance workflows — not a generic template you have to bend your business to fit.
                </p>
              </div>

              {/* Card 2: Custom CRM Development */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="8" r="3"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M19 8l1.5 1.5L23 7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Custom CRM Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A CRM that matches your actual sales process and pipeline stages, instead of forcing your team to adapt to someone else's workflow.
                </p>
              </div>

              {/* Card 3: Microsoft Dynamics 365 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft Dynamics 365</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The full enterprise suite for finance, sales, and operations. We handle licensing, module setup, and integration with your existing Microsoft 365 tenant.
                </p>
              </div>

              {/* Card 4: Odoo ERP */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Odoo ERP</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A modular, cost-effective ERP covering sales, inventory, accounting, and HR. We configure only the modules you need today and scale up as you grow.
                </p>
              </div>

              {/* Card 5: ERPNext */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">ERPNext</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Open-source ERP for businesses that want full ownership of their system and data. We handle hosting, customization, and ongoing maintenance.
                </p>
              </div>

              {/* Card 6: 4Biz ERP Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">4Biz ERP Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our own lightweight ERP framework for businesses that don't need a full enterprise suite — fast to deploy and simple for teams to adopt.
                </p>
              </div>

              {/* Card 7: Sales Automation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 17l5-5 4 4 7-8"/><path d="M14 8h5v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Sales Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Automated lead capture, follow-ups, quote generation, and deal-stage updates, so your sales team spends time selling, not on data entry.
                </p>
              </div>

              {/* Card 8: Customer Relationship Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><circle cx="18" cy="9" r="2.4"/><path d="M16.2 13.2c2.2.4 4 1.9 4 3.8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Customer Relationship Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A single record of every customer interaction — calls, emails, deals, and support tickets — visible to every team that needs it.
                </p>
              </div>

              {/* Card 9: Inventory & Finance Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group md:col-span-2 lg:col-span-2">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 9.5 12 4l9 5.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 20v-7h6v7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Inventory &amp; Finance Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Real-time stock levels, purchase orders, and financial reporting connected to the same system, so numbers match across every department.
                </p>
              </div>

              {/* Card 10: HR & Payroll Solutions */}
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

        {/* ================= STRATEGIC PILLARS (SEAMLESS INTEGRATION WITH ZERO BORDERS) ================= */}
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

            {/* Increased transparency of boxes by moving from bg-slate-950/40 to clear ultra-glassy bg-white/[0.015] */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Mapped to your workflow</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We configure modules around how your sales, inventory, and finance teams actually operate today.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Real-time visibility</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Dashboards and reports pull from live data, so every department is working from the same numbers.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Right-sized for you</h4>
                <p className="text-xs text-slate-400 leading-relaxed">From a lightweight 4Biz setup to a full Dynamics 365 rollout, we scope the platform to your size and budget.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Ongoing support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your configuration — not a ticket queue starting from zero each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY (BORDERS AND OVERLAYS CLEARED) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to connect your sales, finance, and operations?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you're using today and where the gaps are. We'll recommend the right ERP or CRM platform and handle the setup end to end.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}