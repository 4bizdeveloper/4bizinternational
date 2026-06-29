import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Blocks, 
  CloudSun, 
  Briefcase, 
  ServerCrash, 
  MailCheck, 
  Users2, 
  FolderGit, 
  Workflow 
} from 'lucide-react';

// Ultra-optimized SEO Meta Tags (Preserved perfectly with added canonical URL)
export const metadata: Metadata = {
  title: 'Digital Workplace & Productivity Solutions | 4Biz International',
  description: 'Set up Microsoft 365, Google Workspace, Zoho, business email & workflow automation — secure, cloud-based digital workplace solutions with zero-downtime migration and 24/7 support.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/digital-workplace-productivity-solutions/',
  },
  openGraph: {
    title: 'Digital Workplace & Productivity Solutions | 4Biz International',
    description: 'Empower hybrid teams with seamless cloud environments and high-performance workflow automation.',
    url: 'https://www.4bizinternational.com/services/digital-workplace-productivity-solutions/',
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
        
        {/* 3D Splines Matrix - Optimized with parallel, non-crossing balance curves on the right */}
        <svg 
          className="absolute inset-0 w-full h-[200vh] opacity-55 mix-blend-screen will-change-transform transform"
          style={{
            transform: 'translateY(calc(var(--scroll-y, 0px) * -0.05))',
            perspective: '1000px'
          }}
          viewBox="0 0 1440 1800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left / Center Splines */}
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
          
          {/* Balanced Right portion curves - Beautifully filling empty spaces without intersecting */}
          <path 
            d="M950 100C1100 250 1200 150 1400 300C1550 420 1500 700 1600 950" 
            stroke="url(#splineGradient3)" 
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.6"
          />
          <path 
            d="M1020 50C1180 220 1290 90 1480 220C1610 310 1590 640 1680 880" 
            stroke="url(#splineGradient4)" 
            strokeWidth="2"
            opacity="0.4"
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
            <linearGradient id="splineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="splineGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
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
                  className="object-contain mix-blend-screen transition-all duration-700 ease-out transform scale-105"
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

        {/* ================= OPTIMIZED CORE CAPABILITIES (GLASSY BOXES & DISTINCT BRAND ICONS) ================= */}
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
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded mt-6" />
            </div>

            {/* Seamless Grid System - Optimized Colors per platform layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Microsoft 365 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors">
                  <Blocks className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-blue-300">Microsoft 365</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Outlook, Word, Excel, and Teams configured as one suite. We set up tenant security baselines, conditional access, and multi‑factor authentication so your team is productive and protected from day one.
                </p>
              </div>

              {/* Card 2: Google Workspace */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-colors">
                  <CloudSun className="w-8 h-8 text-red-400 group-hover:text-amber-400 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-red-300">Google Workspace</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Gmail, Drive, Meet, and Docs set up for real‑time, co‑authored work. We configure shared drives, calendar resource booking, and admin policies that keep your domain secure across distributed teams.
                </p>
              </div>

              {/* Card 3: Identity Workspace */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                  <Briefcase className="w-8 h-8 text-amber-400 group-hover:text-emerald-400 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-amber-300">Identity Workspace</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Zoho Mail, WorkDrive, and Cliq bundled into one console — a cost‑effective option for growing teams. We configure custom domains, storage tiers, and roles without enterprise pricing.
                </p>
              </div>

              {/* Card 4: Exchange Email Solutions */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                  <ServerCrash className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-violet-300">Exchange Email Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Hosted or on‑premise Exchange Server for organizations that need full control over mail flow, retention, and compliance archiving. We manage mailbox databases and disaster recovery.
                </p>
              </div>

              {/* Card 5: Business Email Setup */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                  <MailCheck className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-emerald-300">Business Email Setup</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Professional email on your own domain, set up correctly the first time. We handle DNS, MX records, and SPF/DKIM/DMARC authentication so messages land in inboxes, not spam.
                </p>
              </div>

              {/* Card 6: Team Collaboration Tools */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                  <Users2 className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-cyan-300">Team Collaboration Tools</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Chat, video, and shared workspaces that replace scattered email threads. We deploy Teams, Slack, or Google Chat with channels mapped to how your departments actually communicate.
                </p>
              </div>

              {/* Card 7: Document Management */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-fuchsia-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/40 transition-colors">
                  <FolderGit className="w-8 h-8 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-fuchsia-300">Document Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
                  Centralized, version‑controlled storage with permission tiers, e‑signature workflows, and audit trails — so the right files are easy to find and the wrong people can't see them.
                </p>
              </div>

              {/* Card 8: Workflow Automation */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5 group-hover:bg-rose-500/20 group-hover:border-rose-500/40 transition-colors">
                  <Workflow className="w-8 h-8 text-rose-400 group-hover:text-rose-300 transition-colors animate-[pulse_4s_ease-in-out_infinite]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-rose-300">Workflow Automation</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left">
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