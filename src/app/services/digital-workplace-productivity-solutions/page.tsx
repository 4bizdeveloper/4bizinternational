import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

// Ultra-optimized SEO Meta Tags (Preserved perfectly)
export const metadata: Metadata = {
  title: 'Digital Workplace & Productivity Solutions | 4Biz International',
  description: 'Transform your business with modern digital workplace architecture, cloud productivity infrastructure, and automated workflows designed for global operations.',
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
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-36 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4 block backdrop-blur-sm bg-blue-950/30 px-4 py-1.5 rounded-full border border-blue-500/10">
              01 — Digital Workplace
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] pb-6 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
              Digital Workplace &amp; Productivity Solutions
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal transparent-content">
              Empower your workforce with secure, cloud‑based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization. We design, deploy, and manage the email, document, and workflow tools your team relies on every single day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-slate-900 uppercase bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 hover:from-sky-300 hover:via-cyan-300 hover:to-teal-300 active:scale-95 transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(56,189,248,0.25)] font-sans"
              >
                Talk to an Advisor
              </Link>
              <a 
                href="tel:+10000000000" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-white uppercase border border-slate-700 hover:border-blue-500 rounded-full bg-slate-950/40 backdrop-blur-sm transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ================= MISSION & STATS NARRATIVE ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-950/20 backdrop-blur-[2px]">
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
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">48hrs</div>
                <div className="text-sm text-slate-400 mt-1">Typical migration window, planned around your business hours</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">99.9%</div>
                <div className="text-sm text-slate-400 mt-1">Uptime SLA across hosted mail and collaboration platforms</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Support from a team that already knows your setup</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE CAPABILITIES (ALL 8 PLATFORMS) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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

            {/* Expanded 8-Card Pure Typography Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">01 // Microsoft 365</span>
                <p className="text-slate-400 leading-relaxed">
                  Outlook, Word, Excel, and Teams configured as one suite. We set up tenant security baselines, conditional access, and multi‑factor authentication so your team is productive and protected from day one.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">02 // Google Workspace</span>
                <p className="text-slate-400 leading-relaxed">
                  Gmail, Drive, Meet, and Docs set up for real‑time, co‑authored work. We configure shared drives, calendar resource booking, and admin policies that keep your domain secure across distributed teams.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">03 // Zoho Workplace</span>
                <p className="text-slate-400 leading-relaxed">
                  Zoho Mail, WorkDrive, and Cliq bundled into one console — a cost‑effective option for growing teams. We configure custom domains, storage tiers, and roles without enterprise pricing.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">04 // Exchange Email Solutions</span>
                <p className="text-slate-400 leading-relaxed">
                  Hosted or on‑premise Exchange Server for organizations that need full control over mail flow, retention, and compliance archiving. We manage mailbox databases and disaster recovery.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">05 // Business Email Setup</span>
                <p className="text-slate-400 leading-relaxed">
                  Professional email on your own domain, set up correctly the first time. We handle DNS, MX records, and SPF/DKIM/DMARC authentication so messages land in inboxes, not spam.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">06 // Team Collaboration Tools</span>
                <p className="text-slate-400 leading-relaxed">
                  Chat, video, and shared workspaces that replace scattered email threads. We deploy Teams, Slack, or Google Chat with channels mapped to how your departments actually communicate.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">07 // Document Management</span>
                <p className="text-slate-400 leading-relaxed">
                  Centralized, version‑controlled storage with permission tiers, e‑signature workflows, and audit trails — so the right files are easy to find and the wrong people can't see them.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">08 // Workflow Automation</span>
                <p className="text-slate-400 leading-relaxed">
                  We map repetitive manual work — approvals, onboarding, data entry — into automated flows using Power Automate, Zapier, or native platform tools, removing busywork from routine processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STRATEGIC PILLARS (HOW WE WORK) ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-800/60 bg-slate-950/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Graphic Side */}
            <div className="lg:col-span-6 relative w-full aspect-[16/10] flex items-center justify-center">
              <div className="absolute w-[80%] h-[80%] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />
              <Image
                src="/services/ai-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms"
                fill
                sizes="(max-w-1024px) 100vw, 700px"
                className="object-contain mix-blend-screen transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Right Structural Side */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Built to be set up once, supported always
                </h2>
                <p className="text-slate-400 mt-2 text-sm sm:text-base">
                  The outcome isn't just "new software." It's fewer dropped handoffs, faster approvals, and a workplace your team can navigate without a manual.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Security first</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">MFA, conditional access, and encryption are configured into every deployment by default, not added later.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Zero‑downtime migration</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Cutovers are scheduled and validated before go‑live, so mail and files move without interrupting your workday.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Right‑sized for you</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">We scope the platform and license tier to your team's size and budget, never a one‑size‑fits‑all package.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Ongoing support</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">A regional team that already knows your environment — not a ticket queue starting from zero each time.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CLOSING ACTION ================= */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to modernize how your team works?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you're using today and where it's breaking down. We'll recommend the right platform and handle the setup end to end.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-slate-900 uppercase bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 hover:from-sky-300 hover:via-cyan-300 hover:to-teal-300 active:scale-95 transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(56,189,248,0.25)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] font-sans"
              >
                Get a Free Consultation
              </Link>
            </div>
            <div className="text-xs text-slate-500 mt-4">
              Prefer chat? Message us on <span className="text-teal-400 cursor-pointer hover:underline">WhatsApp</span> or call the number in the bottom corner.
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-8 text-xs text-slate-600 border-t border-slate-900">
          © 2026 4Biz International — Digital Workplace &amp; Productivity Solutions
        </footer>

      </div>
    </div>
  );
}