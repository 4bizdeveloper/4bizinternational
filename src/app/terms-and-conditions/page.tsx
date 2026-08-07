import React from 'react';
import type { Metadata } from 'next';
import { Scale, FileCheck, ShieldAlert, Cpu, Award, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | 4Biz International',
  description: 'Read the Terms and Conditions for utilizing services, cloud solutions, enterprise software, and web applications provided by 4Biz International.',
  keywords: ['Terms and Conditions', 'Terms of Service', '4Biz International Legal', 'Enterprise IT Service Agreement'],
  openGraph: {
    title: 'Terms & Conditions | 4Biz International',
    description: 'Master service agreement and legal framework for 4Biz International digital platforms, software engineering, and consulting services.',
    url: 'https://www.4bizinternational.com/terms-and-conditions',
    siteName: '4Biz International',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.4bizinternational.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms and Conditions',
    url: 'https://www.4bizinternational.com/terms-and-conditions',
    description: 'Master service agreement and governing terms for 4Biz International digital services.',
    publisher: {
      '@type': 'Organization',
      name: '4Biz International',
      url: 'https://www.4bizinternational.com',
    },
  };

  const sections = [
    {
      id: 'acceptance-terms',
      icon: <FileCheck className="w-6 h-6 text-[#00D2F1]" />,
      title: '1. Acceptance of Terms',
      content: `By accessing or using any digital platforms, custom applications, software products, cloud hosting, or enterprise services provided by 4Biz International ("Company", "We", "Us"), you agree to be bound by these Terms and Conditions.`,
      bullets: [
        'Agreement applies to all visitors, registered clients, corporate entities, and service subscribers.',
        'If you do not agree to these terms, you must discontinue platform usage immediately.',
      ],
    },
    {
      id: 'scope-services',
      icon: <Cpu className="w-6 h-6 text-[#00D2F1]" />,
      title: '2. Provision of IT Services & Solutions',
      content: `4Biz International provides enterprise-grade technology services, including Digital Workplace setup, ERP/CRM development, Cloud Hosting, Cybersecurity audits, and Digital Marketing:`,
      bullets: [
        'All client deliverables are provided in according with signed Master Services Agreements (MSA) or Statements of Work (SOW).',
        'Service level guarantees (SLA) for hosted solutions are governed by specific client contract agreements.',
        'We reserve the right to perform scheduled security maintenance to keep systems updated and safe.',
      ],
    },
    {
      id: 'intellectual-property',
      icon: <Award className="w-6 h-6 text-[#00D2F1]" />,
      title: '3. Intellectual Property Rights',
      content: `All proprietary software source code, visual design elements, platform graphics, trademarks, and documentation published on this website remain the exclusive property of 4Biz International or its licensors:`,
      bullets: [
        'Clients retain complete ownership over their proprietary business data and client-supplied content.',
        'Custom code delivered under paid project terms transfers according to signed SOW clauses upon full payment.',
        'Unauthorized cloning, scraping, reverse-engineering, or redistribution of site content is strictly prohibited.',
      ],
    },
    {
      id: 'user-obligations',
      icon: <ShieldAlert className="w-6 h-6 text-[#00D2F1]" />,
      title: '4. Acceptable Use & Account Security',
      content: `Users and client administrators are responsible for maintaining account confidentiality and using platforms lawfully:`,
      bullets: [
        'No engagement in unauthorized network probing, DDoS attacks, or malware distribution.',
        'No utilization of enterprise communication tools for illegal, deceptive, or spam communications.',
        'Immediate notification required upon discovery of security credential breaches.',
      ],
    },
    {
      id: 'limitation-liability',
      icon: <Scale className="w-6 h-6 text-[#00D2F1]" />,
      title: '5. Limitation of Liability & Warranties',
      content: `To the maximum extent permitted by applicable law, 4Biz International provides services "as is" and shall not be held liable for indirect, incidental, or consequential damages resulting from platform downtime or third-party telecommunication interruptions beyond reasonable operational control.`,
      bullets: [
        'Continuous uptime is targeted but subject to third-party cloud vendor availability.',
        'Force Majeure conditions excuse operational delays resulting from environmental or regional disruptions.',
      ],
    },
    {
      id: 'governing-law',
      icon: <Scale className="w-6 h-6 text-[#00D2F1]" />,
      title: '6. Governing Law & Dispute Resolution',
      content: `These terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any legal disputes or claims arising hereunder shall be subject to the exclusive jurisdiction of local courts.`,
      bullets: [
        'Parties agree to seek amicable resolution through executive mediation prior to formal legal action.',
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-[#04091a] text-white bg-[radial-gradient(circle_at_50%_20%,_#0e2a80_0%,_#09153d_50%,_#0a122c_100%)] font-sans antialiased pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 selection:bg-[#00D2F1] selection:text-black">

        {/* Hero Section Banner */}
        <header className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D2F1]/10 border border-[#00D2F1]/30 text-[#00D2F1] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,210,241,0.2)]">
            <Scale className="w-4 h-4" /> Legal Governance Framework
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Standard service agreement governing platform use, software licensing, and digital transformation engagements with 4Biz International.
          </p>
          <div className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            Effective Date: <span className="text-white font-semibold">August 7, 2026</span>
          </div>
        </header>

        {/* Terms Content Cards */}
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
                Legal & Contractual Questions?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Get in touch with our legal team regarding enterprise agreements, licensing terms, or contract inquiries.
              </p>
            </div>
            <a
              href="mailto:info@4bizinternational.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#00D2F1] hover:bg-[#00E5FF] text-black font-extrabold text-sm lowercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,210,241,0.4)] hover:scale-105 active:scale-95 shrink-0"
            >
              <Mail className="w-4 h-4" /> info@4bizinternational.com
            </a>
          </article>
        </section>
      </main>
    </>
  );
}