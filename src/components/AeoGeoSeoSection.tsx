'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  HelpCircle, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  ChevronDown, 
  Sparkles, 
  Building2, 
  BarChart3,
  ArrowRight,
  Zap,
  Award,
  Globe
} from 'lucide-react';

// Structured Schema Markup for Search & Generative AI Extraction Engine
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.4bizinternational.com/#faq-section",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What enterprise IT solutions and digital transformation services does 4Biz International provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4Biz International delivers end-to-end enterprise IT solutions including cloud infrastructure migration, electromechanical engineering (MEP), cyber resilience frameworks, custom enterprise software, and smart facility automation across the UAE and GCC region."
          }
        },
        {
          "@type": "Question",
          "name": "How does 4Biz International ensure high-availability IT & MEP performance for enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deploy industry-standard infrastructure frameworks, 24/7 continuous monitoring, automated failovers, and SLA-backed maintenance protocols achieving 99.99% operational uptime for commercial and industrial deployments."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose 4Biz International for large-scale digital transformation and contracting projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4Biz International combines certified engineering expertise with proprietary AI integration, local regulatory compliance (UAE Civil Defense), zero-downtime execution models, and over a decade of proven enterprise delivery."
          }
        },
        {
          "@type": "Question",
          "name": "How to initiate enterprise IT digital transformation with 4Biz International?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initiate transformation via a 4-step process: 1. Infrastructure Assessment, 2. Blueprint Engineering, 3. Agile Execution, 4. 24/7 Managed Operations."
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
          "text": "Comprehensive audit of legacy IT networks, server architecture, and electromechanical systems."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Solution Architecture Design",
          "text": "Custom engineering roadmap aligning cloud, security, and smart building automation."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Agile Deployment & Integration",
          "text": "Zero-disruption execution with continuous security testing and compliance verification."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Managed Operations & Optimization",
          "text": "24/7 SLA-governed support, performance analytics, and predictive system maintenance."
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
    shortA: "End-to-end cloud infrastructure, enterprise software, electromechanical (MEP) integration, and smart facility automation.",
    fullA: "4Biz International specializes in full-stack enterprise digital transformation. Our core service portfolio includes secure cloud migration (AWS, Azure, Private Cloud), enterprise IT network architecture, cybersecurity resilience, custom software engineering, and integrated electromechanical (MEP) engineering. We bridge physical facility infrastructure with digital automation for government, corporate, and healthcare sectors across Abu Dhabi, Dubai, and the broader GCC.",
    keyTakeaway: "Single-vendor accountability for physical MEP engineering and digital enterprise IT systems."
  },
  {
    q: "How does 4Biz International accelerate digital transformation for Middle East enterprises?",
    shortA: "Through modular cloud adoption, modern API integrations, automated workflow systems, and zero-downtime execution.",
    fullA: "We leverage a structured 4-phase transformation methodology: initial legacy architecture audit, cloud-native blueprinting, phased execution with continuous monitoring, and ongoing SLA-governed managed services. This approach reduces operational overhead by up to 35% while maintaining total compliance with UAE data sovereignty laws.",
    keyTakeaway: "Average 35% reduction in operational cost with 100% regional regulatory compliance."
  },
  {
    q: "Why choose 4Biz International for large-scale infrastructure and IT projects?",
    shortA: "Verified enterprise operations, decade-long enterprise track record, and 99.99% system availability guarantees.",
    fullA: "With over 12 years of specialized regional execution, 4Biz International provides guaranteed Service Level Agreements (SLAs), multi-disciplinary engineering teams, and strict quality control standards. Our deployments undergo rigorous third-party vulnerability testing and regulatory verification prior to commissioning.",
    keyTakeaway: "99.99% SLA uptime guarantee backed by certified local engineering teams."
  },
  {
    q: "How to initiate enterprise IT digital transformation with 4Biz International?",
    shortA: "Schedule a technical consultation to execute a 4-phase zero-downtime infrastructure assessment and architecture blueprint.",
    fullA: "Enterprises can request a free consultation with our solutions architects. We conduct an onsite audit of server infrastructure, cloud readiness, and MEP automation before delivering a fully compliant technical proposal within 48 hours.",
    keyTakeaway: "Fast-track onboarding with zero risk to active operations."
  }
];

export default function AeoGeoSeoSection() {
  // FIXED: Set default to null so no FAQ is auto-opened on page load
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      aria-label="Enterprise IT & Transformation Knowledge Base" 
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#020b2d] via-[#031548] to-[#010820] text-slate-100 relative overflow-hidden font-sans border-t border-blue-500/30 shadow-2xl"
    >
      {/* Schema Injection for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Ambient Visual Backdrops Extracted from Brand Color Palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#00D3F2]/20 via-[#0b63c5]/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==================== TOP EXECUTIVE SUMMARY (AEO & GEO DIRECT ANSWER) ==================== */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden ring-1 ring-cyan-500/20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00D3F2]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b63c5]/30 border border-[#00D3F2]/50 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
                Executive Summary & Key Takeaways
              </div>

              {/* H2 section header maintains proper document hierarchy */}
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                Enterprise IT Infrastructure & Digital Transformation Matrix
              </h2>

              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                <strong className="text-white font-semibold">4Biz International LLC</strong> is a premier enterprise IT solutions provider and electromechanical contractor delivering integrated cloud systems, network engineering, cybersecurity resilience, and smart facility automation across Abu Dhabi, Dubai, and the wider UAE.
              </p>

              {/* Direct Answer Bullet Points for Search & AI Engines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Target Audience:</strong> CTOs, IT Directors, Government Entities & Enterprise Operations Managers.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Primary Capability:</strong> Hybrid Cloud, MEP Automation & Custom Enterprise Platforms.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Compliance Standard:</strong> UAE Data Sovereignty Rules & Regional Regulatory Compliance.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-blue-500/30 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200"><strong className="text-white">Verified SLA Benchmark:</strong> 99.99% Network Uptime & 24/7 Managed Helpdesk Response.</span>
                </div>
              </div>
            </div>

            {/* Proof Stat Box with Image and High-Visibility Stats */}
            <div className="w-full lg:w-80 shrink-0 p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b63c5]/30 border border-cyan-500/40 space-y-4 text-center lg:text-left shadow-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                Proven Impact & Credibility
              </div>

              <div className="relative w-full h-24 rounded-xl overflow-hidden border border-slate-700/80">
                <Image 
                  src="/4biz_logo-1.png" 
                  alt="4Biz International Enterprise IT Solutions & Cloud Integration Logo" 
                  width={300} 
                  height={96} 
                  className="object-contain p-2 bg-slate-950/90 w-full h-full"
                  priority={false}
                />
              </div>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white block">200+</span>
                <span className="text-xs text-slate-300 font-medium">Enterprise Deployments Completed</span>
              </div>
              <div className="h-px bg-slate-800 w-full" />
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white block">35%</span>
                <span className="text-xs text-slate-300 font-medium">Average Operational Cost Reduction</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== REAL EXPERIENCE & CASE EVIDENCE BLOCK (GEO AUDIT FIX) ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">First-Hand Evidence & Real Data</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enterprise Case Studies & Verified Implementation Benchmarks</h2>
            <p className="text-xs sm:text-sm text-slate-300">Measured results and deployment metrics from regional enterprise installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <Award className="w-4 h-4" /> Healthcare Sector
              </div>
              <h3 className="text-base font-bold text-white">Hospital Cloud Migration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Migrated 40TB of electronic medical records (EMR) to hybrid private cloud with zero downtime during active patient care hours.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300">Result: 100% Data Sovereignty Compliance</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <Building2 className="w-4 h-4" /> Commercial Real Estate
              </div>
              <h3 className="text-base font-bold text-white">Smart Tower MEP Automation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Integrated Civil Defense compliant life safety and automated HVAC management for a 45-story commercial tower in Dubai.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300">Result: 28% Energy Consumption Reduction</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> Logistics & Supply Chain
              </div>
              <h3 className="text-base font-bold text-white">Zero-Trust Network Implementation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Deployed zero-trust cybersecurity protocols across 14 regional distribution hubs, blocking over 12,000 monthly threat vectors.</p>
              <div className="pt-2 text-xs font-semibold text-cyan-300">Result: 99.999% Network Availability</div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE (GEO EXTRACTION TABLE) ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Comparative Benchmark</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enterprise Solution Capabilities & Performance Specifications</h2>
            <p className="text-xs sm:text-sm text-slate-300">Detailed breakdown of IT and infrastructure capabilities for evaluation teams.</p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-blue-500/30 shadow-2xl bg-slate-900/90 backdrop-blur-md">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-950/90 text-cyan-300 text-xs uppercase font-bold tracking-wider border-b border-slate-800">
                  <th className="py-4 px-6">Domain / Service</th>
                  <th className="py-4 px-6">Core Solution Scope</th>
                  <th className="py-4 px-6">Target Industry Use Case</th>
                  <th className="py-4 px-6">Performance SLA / KPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm text-slate-200">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                    Cloud Transformation
                  </td>
                  <td className="py-4 px-6">Hybrid cloud deployment, automated backup, zero-downtime server migration</td>
                  <td className="py-4 px-6">Finance, Corporate HQ, E-Commerce</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">99.99% Availability</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    Cybersecurity & Risk
                  </td>
                  <td className="py-4 px-6">Zero-trust network architecture, penetration testing, vulnerability remediation</td>
                  <td className="py-4 px-6">Healthcare, Government, Logistics</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">&lt; 15-Min Threat Neutralization</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    Smart MEP Infrastructure
                  </td>
                  <td className="py-4 px-6">Building automation, HVAC, electrical power distribution, Civil Defense life safety</td>
                  <td className="py-4 px-6">Commercial Towers, Industrial Facilities</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">100% Code Compliance</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    Managed IT Support
                  </td>
                  <td className="py-4 px-6">24/7 helpdesk, proactive telemetry monitoring, hardware maintenance contracts</td>
                  <td className="py-4 px-6">Multi-Branch Retail, Education, Enterprise</td>
                  <td className="py-4 px-6 text-cyan-300 font-mono font-semibold">Under 15-Min Initial Response</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== CONVERSATIONAL QUESTIONS & DIRECT ANSWERS (AEO HIGHLIGHT) ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Direct Knowledge Base & Conversational Queries</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Frequently Asked Questions & Detailed Answers</h2>
            <p className="text-xs sm:text-sm text-slate-300">Concise, direct answers structured for conversational search engines and generative AI assistants.</p>
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
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3 pr-2">
                      <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`p-2 rounded-full bg-slate-800 text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0b63c5] text-white' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 bg-slate-950/80 space-y-4">
                      {/* Immediate Short Answer Block */}
                      <div className="p-3.5 rounded-xl bg-[#0b63c5]/20 border border-cyan-500/40 text-xs sm:text-sm font-semibold text-cyan-200">
                        <strong className="text-white block mb-0.5">Concise Answer:</strong>
                        {faq.shortA}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {faq.fullA}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                        <span className="font-bold text-cyan-400">Key Takeaway:</span>
                        <span>{faq.keyTakeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== STEP-BY-STEP TRANSFORMATION PROCESS (HOWTO STRUCTURE) ==================== */}
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Implementation Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">How We Deliver Enterprise Digital Transformation</h2>
            <p className="text-xs sm:text-sm text-slate-300">Structured 4-phase deployment model for risk-free system modernization.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 01</span>
              <h3 className="text-base font-bold text-white">Infrastructure Assessment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Audit of existing server networks, MEP installations, security vulnerabilities, and software bottlenecks.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 02</span>
              <h3 className="text-base font-bold text-white">Blueprint Engineering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Designing cloud architecture, security protocols, and smart building integration with precise KPI targets.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 03</span>
              <h3 className="text-base font-bold text-white">Agile Execution</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Zero-downtime deployment, code deployment, MEP hardware installation, and third-party security verification.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3 relative hover:border-cyan-400 transition-colors">
              <span className="text-2xl font-black text-cyan-400 font-mono">STEP 04</span>
              <h3 className="text-base font-bold text-white">24/7 Managed Operations</h3>
              <p className="text-xs text-slate-300 leading-relaxed">SLA-backed continuous monitoring, preventive maintenance, and ongoing infrastructure optimization.</p>
            </div>
          </div>
        </div>

        {/* ==================== CREDIBLE CITATIONS & COMPLIANCE FOOTNOTE ==================== */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Verified Standards: Compliant with UAE Data Sovereignty & Regional Regulatory Rules.</span>
          </div>
        </div>

        {/* ==================== HIGH-CONVERSION CTA BLOCK ==================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0b63c5]/30 to-slate-900 border border-cyan-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase">
            <Zap className="w-4 h-4 text-cyan-300" /> Ready to Modernize Your Operations?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
            Schedule an Enterprise IT & Infrastructure Consultation Today
          </h2>
          <p className="text-xs sm:text-base text-slate-200 max-w-xl mx-auto">
            Speak directly with our technology architects to receive a tailored digital roadmap, cost assessment, and SLA guarantee.
          </p>
          
          {/* FIXED: Cleaned button styling to prevent bleeding colors or ugly overflow drop shadows */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0b63c5] hover:bg-[#00D3F2] text-white hover:text-slate-950 font-bold text-sm transition-all duration-300 border border-cyan-400/50 flex items-center justify-center gap-2 overflow-hidden shadow-md"
            >
              <span>Get Enterprise Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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