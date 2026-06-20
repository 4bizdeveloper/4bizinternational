import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags (Preserved perfectly)
export const metadata: Metadata = {
  title: 'Digital Workplace & Productivity Solutions | 4Biz International',
  description: 'Set up Microsoft 365, Google Workspace, Zoho, business email & workflow automation — secure, cloud-based digital workplace solutions with zero-downtime migration and 24/7 support.',
  openGraph: {
    title: 'Digital Workplace & Productivity Solutions | 4Biz International',
    description: 'Empower hybrid teams with seamless cloud environments and high-performance workflow automation.',
    url: 'https://4bizinternational.vercel.app/services/digital-workplace',
    type: 'website',
  },
};

export default function DigitalWorkplacePage() {
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
                01 — Digital Workplace
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
                Digital Workplace &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Productivity Solutions</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal transparent-content">
                Empower your workforce with secure, cloud‑based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization. We design, deploy, and manage the email, document, and workflow tools your team relies on every single day.
              </p>
            </div>

            {/* Right Media Column - Borderless, Containerless Seamless Merged Layout */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/digital-workplace-productivity-solutions-1.png"
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
                One workplace, built around how your team actually works
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Most businesses run on a patchwork of tools that were added one at a time — a free email account here, a shared drive there, a chat app nobody fully adopted. The result is scattered files, missed messages, and no single place to see how work is actually moving.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by mapping how your people communicate, share files, and hand off tasks today. From that, we configure a single connected platform — Microsoft 365, Google Workspace, or Zoho — and migrate your existing mail and documents across with a planned cutover, so nothing is lost and nobody loses access mid‑workday.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The outcome isn't just "new software." It's fewer dropped handoffs, faster approvals, and a workplace your team can navigate without a manual.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">48hrs</div>
                <div className="text-sm text-slate-400 mt-1">Typical migration window, planned around your business hours</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">99.9%</div>
                <div className="text-sm text-slate-400 mt-1">Uptime SLA across hosted mail and collaboration platforms</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support from a team that already knows your setup</div>
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
                Platforms and tools we set up and manage
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                Pick a single platform or combine several — we configure, secure, and support each one to fit your team's size and budget.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Microsoft 365 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Microsoft 365</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Outlook, Word, Excel, and Teams configured as one suite. We set up tenant security baselines, conditional access, and multi‑factor authentication so your team is productive and protected from day one.
                </p>
              </div>

              {/* Card 2: Google Workspace */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 3v6l5 3-5 3v6"/><path d="M3 12h6m6 0h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Google Workspace</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Gmail, Drive, Meet, and Docs set up for real‑time, co‑authored work. We configure shared drives, calendar resource booking, and admin policies that keep your domain secure across distributed teams.
                </p>
              </div>

              {/* Card 3: Zoho Workplace */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Zoho Workplace</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Zoho Mail, WorkDrive, and Cliq bundled into one console — a cost‑effective option for growing teams. We configure custom domains, storage tiers, and roles without enterprise pricing.
                </p>
              </div>

              {/* Card 4: Exchange Email Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="4" y="4" width="16" height="5" rx="1"/><rect x="4" y="11" width="16" height="5" rx="1"/><circle cx="7.5" cy="6.5" r="0.6" fill="currentColor"/><circle cx="7.5" cy="13.5" r="0.6" fill="currentColor"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Exchange Email Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Hosted or on‑premise Exchange Server for organizations that need full control over mail flow, retention, and compliance archiving. We manage mailbox databases and disaster recovery.
                </p>
              </div>

              {/* Card 5: Business Email Setup */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 4h16v16H4z"/><path d="M9 4v16M4 9h16"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Business Email Setup</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Professional email on your own domain, set up correctly the first time. We handle DNS, MX records, and SPF/DKIM/DMARC authentication so messages land in inboxes, not spam.
                </p>
              </div>

              {/* Card 6: Team Collaboration Tools */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Team Collaboration Tools</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Chat, video, and shared workspaces that replace scattered email threads. We deploy Teams, Slack, or Google Chat with channels mapped to how your departments actually communicate.
                </p>
              </div>

              {/* Card 7: Document Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Document Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Centralized, version‑controlled storage with permission tiers, e‑signature workflows, and audit trails — so the right files are easy to find and the wrong people can't see them.
                </p>
              </div>

              {/* Card 8: Workflow Automation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Workflow Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We map repetitive manual work — approvals, onboarding, data entry — into automated flows using Power Automate, Zapier, or native platform tools, removing busywork from routine processes.
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
                  Built to be set up once, supported always
                </h2>
              </div>
            </div>

            {/* Increased transparency of boxes by moving from bg-slate-950/40 to clear ultra-glassy bg-white/[0.015] */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Security first</h4>
                <p className="text-xs text-slate-400 leading-relaxed">MFA, conditional access, and encryption are configured into every deployment by default, not added later.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Zero‑downtime migration</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Cutovers are scheduled and validated before go‑live, so mail and files move without interrupting your workday.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Right‑sized for you</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We scope the platform and license tier to your team's size and budget, never a one‑size‑fits‑all package.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Ongoing support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your environment — not a ticket queue starting from zero each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY (BORDERS AND OVERLAYS CLEARED) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Modernizing how your team works
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              We focus on assessing what you're using today, isolating structural breaking points, and transitioning components to the right platform setups seamlessly end to end.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}