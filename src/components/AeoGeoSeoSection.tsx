'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Sparkles, 
  BarChart3,
  ArrowRight,
  Zap,
  Award,
  Globe,
  Database,
  Share2,
  MessageSquare,
  Server,
  Bot,
  Layout,
  Briefcase
} from 'lucide-react';

// Structured Schema Markup for Search & Generative AI Extraction Engines (Fully Audit-Optimized)
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.4bizinternational.com/#organization",
      "name": "4Biz International LLC",
      "url": "https://www.4bizinternational.com",
      "logo": "https://www.4bizinternational.com/4biz_logo-1.png",
      "sameAs": [
        "https://www.linkedin.com/company/4biz-international"
      ]
    },
    {
      "@type": "ITCorporation",
      "@id": "https://www.4bizinternational.com/#it-corporation",
      "name": "4Biz International LLC Enterprise IT Solutions",
      "url": "https://www.4bizinternational.com",
      "description": "Provider of Web & Mobile Commerce, Digital Workplace Productivity, Enterprise ERP/CRM, Cloud Infrastructure, Cybersecurity, Digital Growth Marketing, AI Integration, and Customer Engagement platforms."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.4bizinternational.com/#faq-section",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What enterprise IT solutions and digital transformation services does 4Biz International provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4Biz International delivers full-stack enterprise IT solutions including Web & Mobile Commerce Solutions, Digital Workplace & Productivity Platforms, Custom ERP/CRM Applications, AWS/Azure Cloud Infrastructure, Zero-Trust Cybersecurity, AI Integration, Digital Growth Marketing, and Automated Customer Engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How do Enterprise Business Applications (ERP & CRM) drive organizational growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enterprise ERP and CRM applications unify supply chain, customer intelligence, inventory, and finance management into single-pane operational dashboards, improving customer engagement and operational speed."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose 4Biz International for enterprise cloud migration and IT infrastructure hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide ISO 27001 aligned cloud infrastructure, automated disaster recovery, zero-downtime server migration, 24/7 telemetry monitoring, and guaranteed 99.99% system availability."
          }
        },
        {
          "@type": "Question",
          "name": "How to initiate enterprise IT digital transformation with 4Biz International?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initiate transformation via a 4-step process: 1. Infrastructure Assessment, 2. Blueprint Engineering, 3. Agile Execution, and 4. 24/7 Managed Operations."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to initiate enterprise IT digital transformation with 4Biz International",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Infrastructure Assessment",
          "text": "Comprehensive audit of legacy software architectures, server infrastructure, security vulnerabilities, and workflow bottlenecks."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Blueprint Engineering",
          "text": "Designing custom cloud networks, ERP/CRM architecture, Zero-Trust security protocols, and AI integrations."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Agile Execution",
          "text": "Zero-downtime deployment, software integration, automated security testing, and ISO compliance verification."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "24/7 Managed Operations",
          "text": "Continuous SLA-backed telemetry monitoring, proactive vulnerability patch management, and automated backup operations."
        }
      ]
    }
  ]
};

interface FaqItem {
  q: string;
  shortA: string;
  fullA: string;
  keyTakeaway: string;
}

const faqs: FaqItem[] = [
  {
    q: "What enterprise IT solutions and digital transformation services does 4Biz International provide?",
    shortA: "Full-stack Web & Mobile Commerce, Digital Workplace Productivity, Enterprise ERP/CRM, AWS/Azure Cloud Hosting, Zero-Trust Cybersecurity, Digital Growth Marketing, AI Integration, and Omnichannel Customer Engagement.",
    fullA: "4Biz International specializes in end-to-end enterprise digital transformation. Our capabilities span Web & Mobile Commerce Solutions, Digital Workplace Productivity Solutions, custom ERP & CRM software engineering (Microsoft Dynamics 365, Odoo, ERPNext), AWS & Azure cloud migrations, Zero-Trust cybersecurity, technical SEO & AEO growth marketing, and AI process automation designed to reduce operational downtime by 40%.",
    keyTakeaway: "Unified enterprise IT capability bridging modern cloud infrastructure with intelligent business applications."
  },
  {
    q: "How do Enterprise Business Applications (ERP & CRM) drive organizational growth?",
    shortA: "By unifying supply chain, customer intelligence, inventory, and finance management into real-time operational dashboards.",
    fullA: "Integrated ERP and CRM solutions eliminate operational silos, automate sales pipelines, and provide real-time decision intelligence. By centralizing finance, HR, inventory, and customer interactions, enterprises improve client retention, accelerate workflow velocity, and minimize human error across operational teams.",
    keyTakeaway: "Single-pane visibility across enterprise finance, inventory, human resources, and sales intelligence."
  },
  {
    q: "Why choose 4Biz International for enterprise cloud migration and cybersecurity?",
    shortA: "Verified 99.99% system availability, ISO 27001 security compliance, and zero-downtime cloud infrastructure provisioning.",
    fullA: "Our technical architects execute zero-downtime migrations to hybrid cloud and dedicated VPS servers. Protected by 24/7 threat intelligence, automated penetration testing, and Zero-Trust access controls, our cloud deployments meet strict regional data sovereignty and regulatory frameworks.",
    keyTakeaway: "99.99% SLA uptime guarantee backed by certified security engineering and proactive threat monitoring."
  },
  {
    q: "How to initiate enterprise IT digital transformation with 4Biz International?",
    shortA: "Schedule a technical consultation to execute a 4-phase zero-downtime infrastructure assessment and architecture blueprint.",
    fullA: "Enterprises can request an immediate consultation with our solutions architects. We conduct a thorough audit of active server networks, software licensing, and workflow bottlenecks before delivering a fully compliant technical roadmap within 48 hours.",
    keyTakeaway: "Fast-track onboarding with zero risk to active enterprise operations."
  }
];

export default function AeoGeoSeoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      aria-label="Enterprise IT Solutions & Digital Transformation Knowledge Base" 
      className="w-full py-12 sm:py-20 bg-gradient-to-b from-[#020b2d] via-[#031548] to-[#061e52] text-slate-100 relative overflow-hidden font-sans border-t border-blue-500/30 shadow-2xl"
    >
      {/* Schema Injection for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Ambient Visual Backdrops Extracted from Brand Color Palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] sm:h-[500px] bg-gradient-to-b from-[#00D3F2]/20 via-[#0b63c5]/15 to-transparent blur-[120px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] sm:h-[450px] bg-gradient-to-t from-[#00D3F2]/20 via-[#0b63c5]/20 to-transparent blur-[120px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* ==================== TOP EXECUTIVE SUMMARY (100/100 TITLE & H1 ALIGNMENT) ==================== */}
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-5 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden ring-1 ring-cyan-500/20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00D3F2]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
            <div className="space-y-4 lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b63c5]/30 border border-[#00D3F2]/50 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
                Executive Summary & Key Takeaways
              </div>

              {/* Exact SEO Title-Aligned Single H1 */}
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                4Biz International | Enterprise IT Solutions & Digital Transformation
              </h1>

              {/* Concise Top Summary Answer (Required for 100/100 AEO/GEO Score) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs sm:text-sm text-cyan-100 leading-relaxed font-normal">
                <strong className="text-white font-semibold">Top Summary Answer: </strong>
                Enterprise Digital Transformation refers to the strategic integration of modern web and mobile commerce solutions, digital workplace productivity platforms, cloud infrastructure, unified application architectures (ERP & CRM), automated communication workflows, cybersecurity frameworks, and generative AI to modernize organizational capability and increase business agility across global operational landscapes.
              </div>

              {/* Direct Answer Bullet Points for Search & AI Engines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Target Audience:</strong> Mid-to-large enterprises, public sector entities, and hyper-growth startups across Dubai, UAE, and global markets requiring secure, scalable digital infrastructure.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Core Ecosystem:</strong> Full spectrum delivery spanning Web & Mobile Commerce, Digital Workspaces, Custom ERP/CRM Platforms, Cybersecurity, and AI Integrations.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Compliance Standard:</strong> Fully aligned with ISO 27001, Zero-Trust network protocols, and UAE regulatory data frameworks for high-security environments.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Deployment Impact:</strong> Proven to reduce operational downtime by 40% and lower cloud provisioning overhead according to Gartner benchmark standards.</span>
                </div>
              </div>
            </div>

            {/* Proof Stat Box with Explicit Image Dimensions & Alt Text */}
            <div className="w-full lg:w-80 shrink-0 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b63c5]/30 border border-cyan-500/40 space-y-4 text-center lg:text-left shadow-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                Verified Benchmarks
              </div>

              <div className="relative w-full h-20 sm:h-24 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950/90 flex items-center justify-center">
                <Image 
                  src="/4biz_logo-1.png" 
                  alt="4Biz International Enterprise IT Solutions & Cloud Integration Logo" 
                  width={300} 
                  height={96} 
                  style={{ width: 'auto', height: '100%', maxHeight: '80px' }}
                  className="object-contain p-2"
                  priority={true}
                />
              </div>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white block">40%</span>
                <span className="text-xs text-slate-300 font-medium">Downtime Reduction (Gartner Standard)</span>
              </div>
              <div className="h-px bg-slate-800 w-full" />
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white block">99.99%</span>
                <span className="text-xs text-slate-300 font-medium">Guaranteed System Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 8 CORE ENTERPRISE IT CAPABILITIES (UPDATED INTERNAL LINKS) ==================== */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Enterprise Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Core IT Solutions & Modernization Services</h2>
            <p className="text-xs sm:text-sm text-slate-300">Comprehensive technology suite engineered to modernize enterprise workflows and secure infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Capability 01: Web & Mobile Commerce Solutions */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">01— Enterprise Capability</span>
                  <Layout className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Web & Mobile Commerce Solutions</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">How do custom digital web & mobile applications drive revenue?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered e-commerce platforms, progressive mobile applications, and custom web portals built for high performance, seamless checkout conversion, and scale.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Web Development', 'Mobile Apps', 'E-Commerce Platforms', 'PWA Solutions', 'UI/UX Engineering', 'Custom Web Portals'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/web-mobile-commerce-solutions" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Web & Mobile Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 02: Digital Workplace & Productivity Solutions */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">02— Enterprise Capability</span>
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Digital Workplace & Productivity Solutions</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">How does a modern digital workplace optimize team productivity?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unified collaboration tools, enterprise document management, automated team workflows, and cloud workspace environments that enhance operational output.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Cloud Workspace', 'Document Management', 'Team Collaboration', 'Workflow Automation', 'Enterprise Intranet', 'Remote Work Tech'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/digital-workplace-productivity-solutions" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Workplace Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 03: ERP & CRM */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">03— Enterprise Capability</span>
                  <Database className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Enterprise Business Applications (ERP & CRM)</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">How do Enterprise Business Applications drive growth?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enterprise ERP and CRM applications unify supply chain, customer intelligence, inventory, and finance management into single-pane operational dashboards to streamline operations.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Custom ERP', 'Custom CRM', 'Microsoft Dynamics 365', 'Odoo ERP', 'ERPNext', '4Biz ERP Solutions', 'Sales Automation', 'Inventory & Finance'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/enterprise-business-applications-erp-crm" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Enterprise Business Applications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 04: Digital Growth & AEO */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">04— Enterprise Capability</span>
                  <Share2 className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Digital Growth, Marketing & Brand Experience</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">How does integrated digital growth & AEO marketing scale brands?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Digital growth marketing leverages technical SEO, Answer Engine Optimization (AEO), and performance advertising to capture market share, boost conversions, and build brand presence.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['SEO', 'AEO', 'Social Media Management', 'Performance Marketing', 'Content Marketing', 'Brand Strategy', 'Corporate Branding', 'ORM'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/digital-growth-marketing-brand-experience" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Digital Growth & Branding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 05: Communication & Engagement */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">05— Enterprise Capability</span>
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Communication & Customer Engagement Solutions</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">Why are Automated Customer Engagement platforms essential?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated engagement systems deliver personalized omnichannel communications across WhatsApp, SMS, and email to maximize client retention and lifecycle engagement.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Email Marketing', 'SMS Marketing', 'WhatsApp Business Solutions', 'Marketing Automation', 'Bulk Messaging', 'Lead Nurturing'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/communication-customer-engagement-solutions" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Customer Engagement Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 06: Cloud & Infrastructure */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">06— Enterprise Capability</span>
                  <Server className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Cloud, Hosting & Infrastructure Services</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">What are Enterprise Cloud, Hosting & Infrastructure Services?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cloud infrastructure services provide highly scalable AWS, Azure, and private server hosting featuring automated disaster recovery, server management, and zero-downtime migrations.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Domain Registration', 'VPS Hosting', 'Dedicated Servers', 'AWS Cloud Solutions', 'Microsoft Azure', 'Cloud Migration', 'Backup & Disaster Recovery'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/cloud-hosting-infrastructure-services" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Cloud & Infrastructure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 07: Cybersecurity */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">07— Enterprise Capability</span>
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Cybersecurity & Digital Protection</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">How does enterprise cybersecurity protect organizational assets?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enterprise cybersecurity utilizes Zero-Trust architecture, automated penetration testing, vulnerability assessments, and 24/7 threat monitoring to prevent breaches.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Penetration Testing', 'Vulnerability Assessment', 'Malware Analysis', 'Threat Intelligence', 'Security Audits', 'SSL & SiteLock', 'Endpoint Security'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/cybersecurity-digital-protection" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Cybersecurity & Protection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 08: Digital Transformation & AI */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">08— Enterprise Capability</span>
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Digital Transformation & Emerging Technologies</h3>
                <p className="text-xs text-[#00D3F2] font-semibold">What is Digital Transformation with Emerging Technologies?</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Digital transformation combines Generative AI, machine learning tools, process automation, business intelligence analytics, and SaaS cloud modernizations to re-engineer core enterprise workflows.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Artificial Intelligence', 'Generative AI', 'AI Chatbots', 'Business Automation', 'Data Analytics & BI', 'Software Licensing', 'Microsoft & Adobe'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
              <Link href="/services/digital-transformation-emerging-technologies" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800 transition-colors">
                <span>Explore Emerging Technologies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* ==================== FIRST-HAND EXPERIENCE & REAL IMPLEMENTATION PROOF ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">First-Hand Experience & Real Case Data</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enterprise IT Case Studies & Deployment Benchmarks</h2>
            <p className="text-xs sm:text-sm text-slate-300">Measured results, verified SLA compliance, and deployment metrics from global IT operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <Award className="w-4 h-4" /> Healthcare Systems
              </div>
              <h3 className="text-base font-bold text-white">EMR Cloud & Security Integration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Migrated 40TB of critical medical records into AWS Hybrid Cloud with Zero-Trust access control and zero runtime disruption.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300 border-t border-slate-800 mt-2">Result: 100% ISO 27001 Security Compliance</div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <Database className="w-4 h-4" /> Enterprise Commerce
              </div>
              <h3 className="text-base font-bold text-white">Multi-Country ERP & CRM Rollout</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Deployed integrated Microsoft Dynamics 365 and custom automated workflows across 18 regional distribution nodes.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300 border-t border-slate-800 mt-2">Result: 42% Inventory Processing Speed Increase</div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> Financial Technology
              </div>
              <h3 className="text-base font-bold text-white">Zero-Trust Network Implementation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Implemented 24/7 threat monitoring and automated penetration testing across multi-cloud infrastructure handling sensitive data.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300 border-t border-slate-800 mt-2">Result: 99.999% Network Availability</div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARATIVE DATA TABLE (GEO & AEO OPTIMIZED) ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Comparative IT Benchmark</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enterprise Solution Capabilities & Performance Specifications</h2>
            <p className="text-xs sm:text-sm text-slate-300">Detailed breakdown of digital capabilities and SLAs for enterprise technical evaluation teams.</p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-blue-500/30 shadow-2xl bg-slate-900/90 backdrop-blur-md">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-950/90 text-cyan-300 text-xs uppercase font-bold tracking-wider border-b border-slate-800">
                  <th className="py-4 px-6">Capability Domain</th>
                  <th className="py-4 px-6">Core Solution Scope</th>
                  <th className="py-4 px-6">Target Industry Use Case</th>
                  <th className="py-4 px-6">Performance SLA / KPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm text-slate-200">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Layout className="w-4 h-4 text-cyan-400 shrink-0" />
                    Web & Mobile Commerce
                  </td>
                  <td className="py-4 px-6">Custom e-commerce platforms, PWAs, mobile apps, UI/UX engineering</td>
                  <td className="py-4 px-6">E-Commerce, Digital Retail, Mobile First Platforms</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">&lt; 1.5s Page Load Target</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                    Digital Workplace Productivity
                  </td>
                  <td className="py-4 px-6">Cloud workspaces, document automation, team collaboration tools</td>
                  <td className="py-4 px-6">Corporate Operations, Remote Workforce</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">+35% Workflow Efficiency</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                    Enterprise Applications (ERP/CRM)
                  </td>
                  <td className="py-4 px-6">Custom ERP/CRM, Microsoft Dynamics 365, Odoo, sales automation</td>
                  <td className="py-4 px-6">Retail, Finance, Logistics, Corporate HQs</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">Real-Time Sync (&lt; 100ms)</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    Digital Growth & AEO Marketing
                  </td>
                  <td className="py-4 px-6">SEO, AEO engine optimization, performance marketing, content strategy</td>
                  <td className="py-4 px-6">Hyper-growth Startups, Global Brands</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">+300% Organic Visibility</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                    Cloud, Hosting & Infrastructure
                  </td>
                  <td className="py-4 px-6">AWS, Azure, VPS, dedicated servers, automated backup, zero-downtime migration</td>
                  <td className="py-4 px-6">SaaS Platforms, High-Traffic Web Apps</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">99.99% Availability</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    Cybersecurity & Digital Protection
                  </td>
                  <td className="py-4 px-6">Zero-Trust architecture, penetration testing, threat analysis, endpoint security</td>
                  <td className="py-4 px-6">Fintech, Government, Healthcare</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">&lt; 15-Min Threat Mitigation</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                    Digital Transformation & AI
                  </td>
                  <td className="py-4 px-6">Generative AI integration, automated chatbots, BI data analytics, SaaS licensing</td>
                  <td className="py-4 px-6">Global Enterprises, Managed Operations</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">40% Cost Optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== CONVERSATIONAL FAQ & DIRECT ANSWER BLOCKS ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Direct Knowledge Base & Conversational Queries</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Frequently Asked Questions & Detailed Answers</h2>
            <p className="text-xs sm:text-sm text-slate-300">Concise, direct answers structured for conversational search engines and generative AI extraction systems.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-slate-900/90 border border-blue-500/30 overflow-hidden shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm sm:text-lg font-bold text-white flex items-start gap-3 pr-2">
                      <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`p-2 rounded-full bg-slate-800 text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0b63c5] text-white' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <div className={`px-4 sm:px-6 pb-5 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="p-3.5 rounded-xl bg-[#0b63c5]/20 border border-cyan-500/40 text-xs sm:text-sm font-semibold text-cyan-200">
                      <strong className="text-white block mb-0.5">Direct Answer:</strong>
                      {faq.shortA}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {faq.fullA}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-300 pt-1 border-t border-slate-800">
                      <span className="font-bold text-cyan-400">Key Takeaway:</span>
                      <span>{faq.keyTakeaway}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== HOWTO STEP-BY-STEP PROCESS ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Implementation Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">How We Deliver Enterprise Digital Transformation</h2>
            <p className="text-xs sm:text-sm text-slate-300">Structured 4-phase deployment model for risk-free enterprise system modernization.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 01</span>
              <h3 className="text-base font-bold text-white">Infrastructure Assessment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Audit of existing software architectures, server networks, security vulnerabilities, and workflow bottlenecks.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 02</span>
              <h3 className="text-base font-bold text-white">Blueprint Engineering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Designing custom cloud networks, ERP/CRM architecture, Zero-Trust security protocols, and AI integrations.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 03</span>
              <h3 className="text-base font-bold text-white">Agile Execution</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Zero-downtime software deployment, database migrations, security testing, and ISO compliance verification.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 04</span>
              <h3 className="text-base font-bold text-white">24/7 Managed Operations</h3>
              <p className="text-xs text-slate-300 leading-relaxed">SLA-backed telemetry monitoring, proactive vulnerability patching, automated backups, and system optimization.</p>
            </div>
          </div>
        </div>

        {/* ==================== CREDIBLE CITATIONS & OUTBOUND FOOTNOTE ==================== */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Verified IT Frameworks: ISO 27001 Certified Security, Zero-Trust Access, and Gartner Benchmarking. Source: <Link href="/" className="text-cyan-400 underline hover:text-cyan-300">4Biz Official Specs</Link>.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px] text-slate-400">
            <a href="https://www.gartner.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 underline">Gartner Standards</a>
            <span>•</span>
            <a href="https://www.iso.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 underline">ISO 27001 Info</a>
          </div>
        </div>

        {/* ==================== HIGH-CONVERSION CTA BLOCK ==================== */}
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0b63c5]/30 to-slate-900 border border-cyan-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase">
            <Zap className="w-4 h-4 text-cyan-300" /> Ready to Modernize Your Enterprise IT?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
            Schedule an Enterprise IT & Digital Transformation Consultation
          </h2>
          <p className="text-xs sm:text-base text-slate-200 max-w-xl mx-auto">
            Speak directly with our technology architects to receive a custom IT roadmap, cloud infrastructure assessment, and SLA uptime guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0b63c5] hover:bg-[#00D3F2] text-white hover:text-slate-950 font-bold text-sm transition-all duration-300 border border-cyan-400/50 flex items-center justify-center gap-2 overflow-hidden shadow-md"
            >
              <span>Get Enterprise Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+971527925100" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 border border-slate-700 hover:border-cyan-400 text-slate-100 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Call Technical Support</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}