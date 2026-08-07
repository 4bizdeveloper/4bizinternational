import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Database, Bell, FileText, Mail, Globe, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | 4Biz International',
  description: 'Read the official Privacy Policy for 4Biz International. Learn how we handle client data, personal information, cybersecurity compliance, and enterprise digital solutions data handling.',
  keywords: ['Privacy Policy', '4Biz International Privacy', 'Data Protection', 'GDPR Compliance', 'Cybersecurity Privacy'],
  openGraph: {
    title: 'Privacy Policy | 4Biz International',
    description: 'Learn how 4Biz International collects, protects, and handles user and enterprise data in full compliance with modern global standards.',
    url: 'https://www.4bizinternational.com/privacy-policy',
    siteName: '4Biz International',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.4bizinternational.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: 'https://www.4bizinternational.com/privacy-policy',
    description: 'Official privacy policy document for 4Biz International detailing data governance, privacy compliance, and user rights.',
    publisher: {
      '@type': 'Organization',
      name: '4Biz International',
      url: 'https://www.4bizinternational.com',
    },
  };

  const sections = [
    {
      id: 'information-collection',
      icon: <Database className="w-6 h-6 text-[#00D2F1]" />,
      title: '1. Information We Collect',
      content: `We collect information necessary to deliver enterprise IT solutions, digital transformation services, and client communications. This includes:`,
      bullets: [
        'Personal Data: Name, email address, phone number, company name, and job title provided via inquiry forms or live support.',
        'Technical & Analytics Data: IP addresses, browser specifications, device OS, referring URLs, and interaction metrics to optimize performance.',
        'Service Infrastructure Data: Operational metrics, cloud configuration data, and system diagnostics collected during client engagements.',
      ],
    },
    {
      id: 'data-usage',
      icon: <Eye className="w-6 h-6 text-[#00D2F1]" />,
      title: '2. How We Use Your Data',
      content: `Your data is strictly used to fulfill contractual obligations, improve core infrastructure, and ensure system protection:`,
      bullets: [
        'Provisioning, maintaining, and scaling enterprise IT, cloud hosting, and custom software services.',
        'Optimizing system uptime, performing security audits, and defending against cyber threats.',
        'Communicating technical updates, service agreements, and direct client support inquiries.',
      ],
    },
    {
      id: 'security-governance',
      icon: <Lock className="w-6 h-6 text-[#00D2F1]" />,
      title: '3. Data Security & Governance',
      content: `We deploy bank-grade encryption and zero-trust security architecture to prevent unauthorized access, alteration, or disclosure of confidential business assets:`,
      bullets: [
        'End-to-End Encryption (TLS 1.3 / AES-256) for data both in transit and at rest.',
        'Routine penetration testing, vulnerability assessments, and automated threat monitoring.',
        'Strict role-based access control (RBAC) enforced across all internal operational environments.',
      ],
    },
    {
      id: 'cookies-tracking',
      icon: <ShieldCheck className="w-6 h-6 text-[#00D2F1]" />,
      title: '4. Cookies & Web Tracking',
      content: `Our website utilizes essential performance cookies to ensure instant page rendering, user session preservation, and core security functionality. We do not sell tracking profiles or client identities to third-party ad networks.`,
      bullets: [
        'Essential Cookies: Required for core system navigation and secure session authentication.',
        'Performance Cookies: Used solely to measure page speed, server load, and web core vitals.',
      ],
    },
    {
      id: 'third-party-sharing',
      icon: <Globe className="w-6 h-6 text-[#00D2F1]" />,
      title: '5. Third-Party Integrations',
      content: `We may engage verified cloud vendors (e.g., AWS, Microsoft Azure, Google Cloud) strictly to facilitate infrastructural hosting, enterprise productivity platforms, and automated workflow delivery. All third parties are contractually bound under strict Non-Disclosure Agreements (NDAs).`,
      bullets: [
        'Zero unauthorized monetization or commercial resale of client information.',
        'Compliance with global standard contractual clauses for cross-border data transfer.',
      ],
    },
    {
      id: 'user-rights',
      icon: <FileText className="w-6 h-6 text-[#00D2F1]" />,
      title: '6. Your Rights & Data Control',
      content: `Depending on your regional jurisdiction (such as GDPR, CCPA, or UAE Data Protection Laws), you maintain full ownership rights over your personal information:`,
      bullets: [
        'Right to Access: Request complete copies of your personal records stored within our systems.',
        'Right to Erasure: Request permanent deletion of non-essential profile data from our servers.',
        'Right to Rectification: Update or amend inaccurate organizational contact records.',
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-[#04091a] text-white bg-[radial-gradient(circle_at_50%_20%,_#0e2a80_0%,_#09153d_50%,_#0a122c_100%)] font-sans antialiased pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 selection:bg-[#00D2F1] selection:text-black">
        
        {/* Hero Section Banner */}
        <header className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D2F1]/10 border border-[#00D2F1]/30 text-[#00D2F1] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,210,241,0.2)]">
            <ShieldCheck className="w-4 h-4" /> Data Protection & Privacy Standard
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent data governance practices engineered for security, reliability, and enterprise compliance across global IT platforms.
          </p>
          <div className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            Effective Date: <span className="text-white font-semibold">August 7, 2026</span>
          </div>
        </header>

        {/* Policy Content Cards */}
        <section className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="bg-white/[0.02] border border-[#00D2F1]/40 hover:border-[#00D2F1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,210,241,0.15)] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#00D2F1]/10 border border-[#00D2F1]/30 group-hover:bg-[#00D2F1]/20 transition-colors">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {section.content}
              </p>
              {section.bullets && (
                <ul className="space-y-2.5">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base leading-snug">
                      <CheckCircle2 className="w-5 h-5 text-[#00D2F1] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          {/* Contact Details Card */}
          <article className="bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-[#00D2F1]/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,241,0.2)] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have Data & Privacy Questions?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Contact our Information Security & Privacy Governance Officers directly for inquiries or data removal requests.
              </p>
            </div>
            <a
              href="mailto:info@4bizinternational.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#00D2F1] hover:bg-[#00E5FF] text-black font-extrabold text-sm lowercase tracking-normal transition-all duration-300 shadow-[0_0_20px_rgba(0,210,241,0.4)] hover:scale-105 active:scale-95 shrink-0"
            >
              <Mail className="w-4 h-4" /> info@4bizinternational.com
            </a>
          </article>
        </section>
      </main>
    </>
  );
}