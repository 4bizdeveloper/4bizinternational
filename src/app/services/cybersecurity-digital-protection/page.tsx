import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Ultra-optimized SEO Meta Tags updated for Cybersecurity Services
export const metadata: Metadata = {
  title: 'Cybersecurity & Digital Protection Services | 4Biz International',
  description: 'Protect your organisation from evolving cyber threats with 4Biz International\'s cybersecurity services — penetration testing, vulnerability assessments, 24/7 security monitoring, endpoint protection, and compliance readiness for GDPR, ISO 27001, and more.',
  openGraph: {
    title: 'Cybersecurity & Digital Protection Services | 4Biz International',
    description: 'Protect your organisation from evolving cyber threats with proactive security assessments, continuous monitoring, and advanced protection solutions.',
    url: 'https://4bizinternational.vercel.app/services/cybersecurity',
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
        
        {/* ================= HERO SECTION WITH REPEATED TOP IMAGES ================= */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-400 uppercase mb-4 block backdrop-blur-sm bg-teal-950/20 px-4 py-1.5 rounded-full border border-teal-500/20">
              07 — Cybersecurity
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] pb-6 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
              Cybersecurity &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Digital Protection</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal transparent-content">
              Protect your organization from evolving cyber threats with proactive security assessments, continuous monitoring, and advanced protection solutions — so the people trying to get in, don't.
            </p>
          </div>

          {/* Top Level Repeated Transparent Images Panel / Blueprint Preview Reference */}
          <div className="w-full max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/ai-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms layout preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden">
              <Image
                src="/services/ai-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms system preview"
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                className="object-contain mix-blend-screen transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden sm:col-span-2 lg:col-span-1">
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
                Most breaches aren't dramatic — they're quiet, and they've already happened
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                The majority of cyberattacks don't arrive with a warning. A phishing email lands in the right inbox, an unpatched server is probed overnight, or a third-party tool introduces a vulnerability nobody audited. By the time it's visible, the damage — data loss, downtime, reputational harm — is already done.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                We start by understanding what your organisation actually has exposed: your network perimeter, your applications, your user access patterns, and the compliance obligations your industry carries. From that review, we design and implement a layered security programme — covering prevention, detection, and response — scaled to your size and budget.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                The goal isn't a one-time audit. It's a posture you maintain: monitored, tested, and updated as threats evolve.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">99.9%</div>
                <div className="text-sm text-slate-400 mt-1">Threat detection rate across monitored environments</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">&lt; 2 min</div>
                <div className="text-sm text-slate-400 mt-1">Average SOC incident response and containment time</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/50 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Continuous security monitoring — no gaps, no blind spots</div>
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
                Security services we assess, implement, and manage
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                From a first penetration test to a fully managed security programme, we scope each engagement to what your organisation actually needs to stay protected.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            {/* Optimized Glassmorphism Box Layout with Individual Svg Node Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Penetration Testing */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v3l2 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Penetration Testing</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Simulated attacks on your systems, networks, and applications to uncover exploitable vulnerabilities before real adversaries do.
                </p>
              </div>

              {/* Card 2: Vulnerability Assessment */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Vulnerability Assessment</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Systematic scanning and prioritised reporting of security weaknesses across your network, servers, and application stack.
                </p>
              </div>

              {/* Card 3: Malware Analysis */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Malware Analysis</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Forensic examination of malicious code to understand how it works, what it touched, and how to prevent a repeat incident.
                </p>
              </div>

              {/* Card 4: Threat Intelligence */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Threat Intelligence</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Continuous feeds of attacker tactics, techniques, and indicators of compromise — applied to your environment in real time.
                </p>
              </div>

              {/* Card 5: Security Audits */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Security Audits</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Review of your security policies, access controls, and configurations against recognised frameworks and your industry's requirements.
                </p>
              </div>

              {/* Card 6: SSL Certificates */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SSL Certificates</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Full lifecycle management of SSL/TLS certificates — provisioned, renewed, and monitored so your encryption never silently expires.
                </p>
              </div>

              {/* Card 7: Website Security */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Website Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Protection against DDoS, SQL injection, cross-site scripting, and other web application attacks via WAF and continuous scanning.
                </p>
              </div>

              {/* Card 8: SiteLock Protection */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SiteLock Protection</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Automated daily malware scanning and removal for websites, with trust seal verification to maintain visitor confidence.
                </p>
              </div>

              {/* Card 9: Endpoint Security */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Endpoint Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Next-generation protection for laptops, desktops, and mobile devices — covering detection, response, and device management.
                </p>
              </div>

              {/* Card 10: Email Security */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Email Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Layered filtering to block phishing, business email compromise, and spoofing before they reach your team's inbox.
                </p>
              </div>

              {/* Card 11: Security Monitoring */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Security Monitoring</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Round-the-clock SIEM-powered surveillance of your environment with real-time alerting and automated containment playbooks.
                </p>
              </div>

              {/* Card 12: Compliance Readiness */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/60 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Compliance Readiness</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Guided preparation for GDPR, ISO 27001, SOC 2, HIPAA, and PCI-DSS — from gap analysis through to evidence collection and audit support.
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
                  Security that's tested before you need it
                </h2>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Assess before you protect</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Every engagement starts with understanding your actual attack surface — not a generic checklist applied to every client the same way.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Layered by design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">No single control stops every threat. We build defence in depth: prevention, detection, and response working together.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Alerts that mean something</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Tuned detection rules reduce noise so your team responds to real incidents — not a wall of low-confidence notifications.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.015] border border-slate-800/40 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h4 className="text-white font-bold text-base mb-2">Ongoing, not one-off</h4>
                <p className="text-xs text-slate-400 leading-relaxed">A security posture decays without maintenance. We re-test, re-tune, and update controls as your environment and the threat landscape change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY (BORDERS AND OVERLAYS CLEARED) ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(45,217,184,0.07),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to know where your gaps actually are?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you're running today — and what's keeping you up at night — and we'll scope the right security programme for your organisation.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}