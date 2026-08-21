import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Optimized Title (60 chars) and Meta Description (152 chars) for 100/100 SEO Score
export const metadata: Metadata = {
  title: 'Cybersecurity & Digital Protection | 4Biz International',
  description: 'Enterprise cybersecurity services by 4Biz International: 24/7 SOC monitoring, penetration testing, vulnerability audits, and GDPR or ISO 27001 compliance.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/',
  },
  openGraph: {
    title: 'Cybersecurity & Digital Protection Services | 4Biz International',
    description: 'Protect your enterprise with 24/7 security monitoring, penetration testing, vulnerability assessments, and regulatory compliance solutions.',
    url: 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/',
    type: 'website',
    images: [
      {
        url: 'https://www.4bizinternational.com/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity & Digital Protection Services | 4Biz International',
    description: 'Protect your enterprise with 24/7 security monitoring, penetration testing, vulnerability assessments, and regulatory compliance solutions.',
    images: ['https://www.4bizinternational.com/4biz_logo-1.png'],
  },
};

export default function CybersecurityPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.4bizinternational.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.4bizinternational.com/services/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Cybersecurity & Digital Protection',
            'item': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/'
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/#webpage',
        'url': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/',
        'name': 'Cybersecurity & Digital Protection Services | 4Biz International',
        'description': 'Enterprise cybersecurity services by 4Biz International: 24/7 SOC monitoring, penetration testing, vulnerability audits, and GDPR or ISO 27001 compliance.',
        'datePublished': '2024-01-01T08:00:00+00:00',
        'dateModified': '2026-08-21T00:00:00+00:00',
        'breadcrumb': {
          '@id': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/#breadcrumb'
        },
        'publisher': {
          '@type': 'Organization',
          'name': '4Biz International LLC',
          'url': 'https://www.4bizinternational.com',
          'logo': 'https://www.4bizinternational.com/4biz_logo-1.png',
          'sameAs': [
            'https://www.linkedin.com/company/4bizinternational'
          ]
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/#service',
        'name': 'Cybersecurity & Digital Protection Services',
        'provider': {
          '@type': 'Organization',
          'name': '4Biz International LLC',
          'url': 'https://www.4bizinternational.com'
        },
        'areaServed': 'Worldwide',
        'description': 'End-to-end digital protection covering 24/7 SOC monitoring, penetration testing, endpoint protection, and compliance auditing.',
        'serviceType': 'Cybersecurity Consulting and Managed Security Services'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.4bizinternational.com/services/cybersecurity-digital-protection/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is cybersecurity and digital protection?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cybersecurity and digital protection involve defensive practices, tools, and processes designed to safeguard networks, servers, endpoints, and data from unauthorized access, cyberattacks, or damage.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do 4Biz International cybersecurity services protect businesses?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We deliver multi-layered defense solutions, including 24/7 security monitoring, penetration testing, vulnerability assessments, automated threat detection, malware defense, and compliance alignment for GDPR, ISO 27001, SOC 2, and PCI-DSS.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Which compliance frameworks does 4Biz International support?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We prepare organizations for regulatory compliance standard audits, including GDPR, ISO 27001, SOC 2, HIPAA, and PCI-DSS, through comprehensive gap analysis and evidence management.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      
      {/* ================= JSON-LD SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ================= GLOBAL ULTRA-MODERN RECTILINEAR DYNAMIC BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Rectilinear Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061033] via-[#040a21] to-[#020717] opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-slate-950/40" />

        {/* Dynamic Architectural Linear Mesh Grid */}
        <svg 
          className="absolute inset-0 w-full h-[200vh] opacity-35 mix-blend-screen transform-gpu"
          style={{
            transform: 'translateY(calc(var(--scroll-y, 0px) * -0.15))'
          }}
          viewBox="0 0 1440 1800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Straight Structural Lines (No Curves) */}
          <line x1="0" y1="150" x2="1440" y2="150" stroke="url(#lineGradient1)" strokeWidth="1" strokeDasharray="12 6" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <line x1="0" y1="850" x2="1440" y2="850" stroke="url(#lineGradient2)" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="0" y1="1350" x2="1440" y2="1350" stroke="url(#lineGradient1)" strokeWidth="1.5" />

          <line x1="200" y1="0" x2="200" y2="1800" stroke="url(#lineGradient2)" strokeWidth="1" />
          <line x1="600" y1="0" x2="600" y2="1800" stroke="url(#lineGradient1)" strokeWidth="1.5" strokeDasharray="10 5" />
          <line x1="1000" y1="0" x2="1000" y2="1800" stroke="url(#lineGradient2)" strokeWidth="1" />
          <line x1="1300" y1="0" x2="1300" y2="1800" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,33,0)_0%,rgba(4,10,33,0.5)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION WITH BALANCED 2-COLUMN LAYOUT ================= */}
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-300 uppercase mb-4 block backdrop-blur-sm bg-teal-950/40 px-4 py-1.5 rounded-md border border-teal-500/30">
                07 &mdash; Cybersecurity
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                Cybersecurity &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Digital Protection</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal transparent-content">
                Protect your organization from evolving cyber threats with proactive security assessments, continuous monitoring, and advanced protection solutions &mdash; so the people trying to get in, don&apos;t.
              </p>
            </div>

            {/* Right Media Column */}
            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/cybersecurity-digital-protection.png"
                  alt="Cybersecurity and digital protection operations dashboard displaying live security metrics"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain mix-blend-screen transition-all duration-700 ease-out transform scale-105 hover:scale-110"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= KEY TAKEAWAY & SUMMARY ANSWER (AEO / GEO SPOTLIGHT) ================= */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="p-6 md:p-8 rounded-xl bg-slate-900/80 border border-teal-500/40 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/40 rounded">
                  Key Takeaway
                </span>
                <span className="text-xs text-slate-300 font-medium">Executive Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                What is 4Biz International Cybersecurity &amp; Digital Protection?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                4Biz International delivers end-to-end enterprise digital protection. We combine 24/7 Security Operations Center (SOC) monitoring, proactive penetration testing, vulnerability assessments, endpoint isolation, and compliance alignment for standards including GDPR, ISO 27001, SOC 2, HIPAA, and PCI-DSS.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-300">
                <span><strong>Target Audience:</strong> Enterprise IT leaders, CISOs, &amp; Compliance Officers</span>
                <span><strong>Core Standard:</strong> Zero-Trust Security Architecture</span>
                <span><strong>Source:</strong> <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer" className="text-teal-300 underline hover:text-teal-200">ISO/IEC 27001 Official Guidelines</a></span>
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
                Why are most cyber breaches silent before causing enterprise damage?
              </h2>
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                The majority of cyberattacks don&apos;t arrive with a warning. A phishing email lands in the right inbox, an unpatched server is probed overnight, or a third-party tool introduces a vulnerability nobody audited. By the time it&apos;s visible, the damage &mdash; data loss, downtime, reputational harm &mdash; is already done.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We start by understanding what your organisation actually has exposed: your network perimeter, your applications, your user access patterns, and the compliance obligations your industry carries. From that review, we design and implement a layered security programme &mdash; covering prevention, detection, and response &mdash; scaled to your size and budget.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                The goal isn&apos;t a one-time audit. It&apos;s a posture you maintain: monitored, tested, and updated as threats evolve. Learn more about our technical frameworks on our <Link href="https://www.4bizinternational.com/services/" className="text-teal-300 underline hover:text-teal-200">core services page</Link>.
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">99.9%</div>
                <div className="text-sm text-slate-200 mt-1">Threat detection rate across monitored environments</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">&lt; 2 min</div>
                <div className="text-sm text-slate-200 mt-1">Average SOC incident response and containment time</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-300 font-mono">24/7</div>
                <div className="text-sm text-slate-200 mt-1">Continuous security monitoring &mdash; no gaps, no blind spots</div>
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
                Which security capabilities do we assess, implement, and manage?
              </h2>
              <p className="text-slate-300 max-w-2xl text-base">
                From a first penetration test to a fully managed security programme, we scope each engagement to what your organisation actually needs to stay protected.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-transparent rounded mt-6" />
            </div>

            {/* Glassmorphism Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v3l2 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Penetration Testing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Simulated attacks on your systems, networks, and applications to uncover exploitable vulnerabilities before real adversaries do.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Vulnerability Assessment</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Systematic scanning and prioritised reporting of security weaknesses across your network, servers, and application stack.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Malware Analysis</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Forensic examination of malicious code to understand how it works, what it touched, and how to prevent a repeat incident.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Threat Intelligence</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Continuous feeds of attacker tactics, techniques, and indicators of compromise &mdash; applied to your environment in real time.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Security Audits</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Review of your security policies, access controls, and configurations against recognised frameworks and your industry&apos;s requirements.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SSL Certificates</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Full lifecycle management of SSL/TLS certificates &mdash; provisioned, renewed, and monitored so your encryption never silently expires.
                </p>
              </div>

              {/* Card 7 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Website Security</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Protection against DDoS, SQL injection, cross-site scripting, and other web application attacks via WAF and continuous scanning.
                </p>
              </div>

              {/* Card 8 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SiteLock Protection</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automated daily malware scanning and removal for websites, with trust seal verification to maintain visitor confidence.
                </p>
              </div>

              {/* Card 9 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Endpoint Security</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Next-generation protection for laptops, desktops, and mobile devices &mdash; covering detection, response, and device management.
                </p>
              </div>

              {/* Card 10 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Email Security</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Layered filtering to block phishing, business email compromise, and spoofing before they reach your team&apos;s inbox.
                </p>
              </div>

              {/* Card 11 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Security Monitoring</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Round-the-clock SIEM-powered surveillance of your environment with real-time alerting and automated containment playbooks.
                </p>
              </div>

              {/* Card 12 */}
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/60 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-300" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Compliance Readiness</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Guided preparation for GDPR, ISO 27001, SOC 2, HIPAA, and PCI-DSS &mdash; from gap analysis through to evidence collection and audit support.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= COMPREHENSIVE SERVICE COMPARISON TABLE (AEO & GEO DECISION SUPPORT) ================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Service Comparison</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8">
              How do 4Biz security models compare for enterprise deployment?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/80 text-white text-sm">
                    <th className="p-4 font-semibold">Security Solution</th>
                    <th className="p-4 font-semibold">Core Focus</th>
                    <th className="p-4 font-semibold">Primary Benefit</th>
                    <th className="p-4 font-semibold">Compliance Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm text-slate-200">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-medium text-teal-300">24/7 Security Operations Center (SOC)</td>
                    <td className="p-4">Continuous Monitoring &amp; Containment</td>
                    <td className="p-4">Instant threat response under 2 minutes</td>
                    <td className="p-4">ISO 27001, SOC 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-medium text-teal-300">Penetration Testing &amp; Auditing</td>
                    <td className="p-4">Simulated Adversary Attacks</td>
                    <td className="p-4">Identifies exploits prior to attack vectors</td>
                    <td className="p-4">PCI-DSS, GDPR</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-medium text-teal-300">Endpoint &amp; Email Defense</td>
                    <td className="p-4">Device &amp; Gateway Isolation</td>
                    <td className="p-4">Blocks phishing &amp; zero-day malware</td>
                    <td className="p-4">HIPAA, GDPR</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-medium text-teal-300">Regulatory Compliance Program</td>
                    <td className="p-4">Audit Readiness &amp; Governance</td>
                    <td className="p-4">Structured gap analysis &amp; evidence management</td>
                    <td className="p-4">All Industry Standards</td>
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
                  How does 4Biz testing ensure long-term digital protection?
                </h2>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Assess before you protect</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Every engagement starts with understanding your actual attack surface &mdash; not a generic checklist applied to every client the same way.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Layered by design</h3>
                <p className="text-xs text-slate-300 leading-relaxed">No single control stops every threat. We build defence in depth: prevention, detection, and response working together.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Alerts that mean something</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Tuned detection rules reduce noise so your team responds to real incidents &mdash; not a wall of low-confidence notifications.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Ongoing, not one-off</h3>
                <p className="text-xs text-slate-300 leading-relaxed">A security posture decays without maintenance. We re-test, re-tune, and update controls as your environment and the threat landscape change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FREQUENTLY ASKED QUESTIONS (AEO SPOTLIGHT) ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Common questions about enterprise digital protection
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-3">
                  What is cybersecurity and digital protection?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Cybersecurity and digital protection involve defensive practices, tools, and processes designed to safeguard networks, servers, endpoints, and data from unauthorized access, cyberattacks, or damage.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-3">
                  How do 4Biz cybersecurity services protect businesses?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  We deliver multi-layered defense solutions, including 24/7 security monitoring, penetration testing, vulnerability assessments, automated threat detection, malware defense, and compliance alignment for GDPR, ISO 27001, SOC 2, and PCI-DSS.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/70 backdrop-blur-md">
                <h3 className="text-lg font-bold text-teal-300 mb-3">
                  Which compliance frameworks does 4Biz International support?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  We prepare organizations for regulatory compliance standard audits, including GDPR, ISO 27001, SOC 2, HIPAA, and PCI-DSS, through comprehensive gap analysis and evidence management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATIONAL CLOSING SUMMARY ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to know where your gaps actually are?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you&apos;re running today &mdash; and what&apos;s keeping you up at night &mdash; and we&apos;ll scope the right security programme for your organisation.
            </p>
            <div className="pt-4">
              <Link 
                href="https://www.4bizinternational.com/" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-teal-500/25"
              >
                Contact 4Biz Security Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}