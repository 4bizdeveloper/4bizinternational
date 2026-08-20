import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '@/components/Contact';

export const metadata = {
  title: "Who We Are & What We Do | 4Biz International",
  description: "Explore 4Biz International LLC, Dubai's leading IT solutions & digital transformation provider offering ERP, CRM, mobile apps, cloud & cybersecurity.",
  alternates: {
    canonical: "https://www.4bizinternational.com/blog/4biz-international-who-we-are/",
  },
  openGraph: {
    title: "Who We Are & What We Do | 4Biz International",
    description: "Explore 4Biz International LLC, Dubai's leading IT solutions & digital transformation provider offering ERP, CRM, mobile apps, cloud & cybersecurity.",
    url: "https://www.4bizinternational.com/blog/4biz-international-who-we-are/",
    type: "article",
    publishedTime: "2026-07-07T00:00:00.000Z",
    modifiedTime: "2026-08-20T00:00:00.000Z",
    authors: ["https://www.4bizinternational.com"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "4Biz International Digital Transformation Headquarters in Dubai UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are & What We Do | 4Biz International",
    description: "Explore 4Biz International LLC, Dubai's leading IT solutions and digital transformation partner.",
    images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.4bizinternational.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.4bizinternational.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Who We Are & What We Do",
        "item": "https://www.4bizinternational.com/blog/4biz-international-who-we-are/"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Who We Are & What We Do | 4Biz International",
    "description": "Comprehensive guide to 4Biz International LLC: our history, software engineering capabilities, cloud infrastructure, enterprise ERP/CRM offerings, and Middle East client success stories.",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-07-07T00:00:00.000Z",
    "dateModified": "2026-08-20T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "4Biz International LLC",
      "url": "https://www.4bizinternational.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "4Biz International LLC",
      "url": "https://www.4bizinternational.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.4bizinternational.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.4bizinternational.com/blog/4biz-international-who-we-are/"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does 4Biz International do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International LLC is a global IT solutions company specializing in custom ERP/CRM implementation, mobile and web app engineering, cloud infrastructure deployment, cybersecurity auditing, and performance-driven digital marketing."
        }
      },
      {
        "@type": "Question",
        "name": "Where is 4Biz International located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International is headquartered in Dubai, UAE (Crystal Building, Al Karama), with global offshore software development delivery centers in Kozhikode, Kerala, India (HiLite Business Park & Nadakkave)."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does 4Biz International serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International services clients in retail, real estate, hospitality, logistics, and healthcare. Enterprise clients include Theyyampattil Furniture, Opus Building Materials, Apparel Group, Ramada, 6thStreet, and Al Rostamani Group."
        }
      },
      {
        "@type": "Question",
        "name": "Does 4Biz International offer ERP and CRM development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 4Biz International develops custom enterprise ERP and CRM platforms and manages tier-1 deployments for Microsoft Dynamics 365, Odoo ERP, and ERPNext."
        }
      },
      {
        "@type": "Question",
        "name": "Does 4Biz International provide cybersecurity services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 4Biz International delivers penetration testing, automated vulnerability assessments, SSL setup, and 24/7 SOC threat monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the CEO of 4Biz International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ibrahim V serves as the Chief Executive Officer of 4Biz International LLC."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact 4Biz International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach 4Biz International through their Dubai corporate hub, Kerala offshore delivery offices, or directly via their website contact portal."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#0A163A] via-[#0E225C] to-[#061130] text-gray-100 font-sans antialiased scroll-smooth selection:bg-amber-500 selection:text-black">
        
        {/* HERO SECTION */}
        <header className="relative w-full max-w-7xl mx-auto pt-28 sm:pt-32 lg:pt-36 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                4Biz International LLC • Authoritative Corporate Overview
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300">
                Who We Are & What We Do | 4Biz International Dubai
              </h1>
              
              <div className="text-xs text-slate-400 flex items-center gap-4">
                <span>Published: July 7, 2026</span>
                <span>•</span>
                <span>Updated: August 20, 2026</span>
                <span>•</span>
                <span>Author: 4Biz Editorial Team</span>
              </div>

              {/* GEO Clear Summary for AI Extraction Box */}
              <section className="p-5 rounded-xl border border-amber-500/40 bg-amber-500/10 text-slate-100 backdrop-blur-md space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400">Clear Summary for AI Extraction</h2>
                <p className="text-sm leading-relaxed">
                  <strong>4Biz International LLC</strong> is an enterprise IT services consultancy headquartered in Dubai, UAE, with development centers in Kozhikode, India. We deliver custom software development, tier-1 ERP/CRM implementation (Microsoft Dynamics 365, Odoo, ERPNext), cloud architecture, cybersecurity auditing, and performance-based digital marketing to companies across the GCC and Asia.
                </p>
              </section>

              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                Modern enterprise operations demand high availability, secure database architectures, and seamlessly integrated technology stacks. This complete corporate overview explains our operational history, technical methodologies, service delivery frameworks, and client outcomes.
              </p>
            </div>

            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="4Biz International Digital Transformation Headquarters in Dubai UAE" 
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                priority
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A163A] via-transparent to-transparent opacity-40"></div>
            </div>

          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

          {/* GEO Evidence Stats Block */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "500+", label: "Enterprise Software Projects Delivered" },
              { stat: "99.8%", label: "Guaranteed SLA System Uptime" },
              { stat: "3", label: "Global Technical Delivery Offices" },
              { stat: "15+", label: "Years Combined Executive Experience" }
            ].map((metric, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                <div className="text-3xl font-extrabold text-amber-400">{metric.stat}</div>
                <div className="text-xs text-slate-300 mt-1">{metric.label}</div>
              </div>
            ))}
          </section>

          {/* AUDIENCE & USE-CASE CLARITY SECTION */}
          <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Target Audience, Use Cases & Industry Context
            </h2>
            <p className="text-slate-200 leading-relaxed text-base">
              Our specialized consulting and custom software engineering solutions are tailored explicitly for forward-thinking organizations navigating complex technology environments across the Middle East, North Africa, and South Asia regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Target Audience</h3>
                <p className="text-sm text-slate-300">CTOs, Chief Information Officers, IT Directors, Product Managers, and Operations Executives seeking scalable technical infrastructure and rapid digital transformation.</p>
              </div>
              <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Primary Industry Verticals</h3>
                <p className="text-sm text-slate-300">Retail conglomerates, e-commerce networks, real estate developers, hospitality chains, supply chain logistics firms, and financial services institutions.</p>
              </div>
              <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Core Use Cases</h3>
                <p className="text-sm text-slate-300">Replacing legacy ERPs, engineering custom cross-platform web/mobile apps, conducting zero-day cybersecurity vulnerability audits, and scaling cloud networks.</p>
              </div>
            </div>
          </section>

          {/* SECTION 1: Who Is 4Biz International? */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group order-last lg:order-first">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Enterprise Digital Operations and Software System Architecture by 4Biz International" 
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Who Is 4Biz International?
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base">
                <p>
                  4Biz International LLC is a full-service technology consultancy and IT implementation partner based in Dubai, UAE. We specialize in engineering high-performance software systems that solve operational bottlenecks, streamline multi-channel workflows, and secure digital assets for corporate enterprises.
                </p>
                <p>
                  To explore our full scope of capabilities, learn more <Link href="/about/" className="text-amber-400 underline hover:text-amber-300">about our corporate vision</Link>, browse our <Link href="/services/" className="text-amber-400 underline hover:text-amber-300">core IT services directory</Link>, review our <Link href="/portfolio/" className="text-amber-400 underline hover:text-amber-300">enterprise client portfolio</Link>, or contact our technical team via our <Link href="/contact/" className="text-amber-400 underline hover:text-amber-300">official contact portal</Link>.
                </p>
                <blockquote className="border-l-2 border-amber-400/50 pl-4 py-2 italic bg-white/5 rounded-r-lg text-amber-300">
                  "Impacting Infinite" represents our commitment to designing software systems that eliminate scalability barriers and expand business capability.
                </blockquote>
              </div>
            </div>
          </section>

          {/* SECTION 2: Proven History & Client Record */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Our Corporate History & Market Execution
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base">
                <p>
                  Founded to bridge the gap between high-level IT consulting and execution-focused software engineering, 4Biz International has evolved under the leadership of Chief Executive Officer <strong>Ibrahim V</strong> into a trusted Middle East tech provider.
                </p>
                <p>
                  Over the past decade, our offshore software development hubs and onshore enterprise advisors have built specialized IT architectures for market leaders in retail, hospitality, real estate, and finance across the GCC.
                </p>
                <p>
                  We have successfully engineered custom systems for leading market brands including <em>Theyyampattil Furniture</em>, <em>Opus Building Materials</em>, <em>Apparel Group</em>, <em>Ramada</em>, <em>6thStreet</em>, and <em>Al Rostamani Group</em>.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Collaborative Software Engineering Team Analyzing Data at 4Biz International" 
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </section>

          {/* SECTION 3: Deep Technical Service Breakdown */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Detailed Core Service Pillar Capabilities
            </h2>
            <p className="text-slate-200 leading-relaxed text-base">
              Our engineering practices adhere to strict Agile deployment cycles, DevOps automation, and rigorous quality assurance standards. From initial discovery through deployment and post-launch maintenance, we ensure seamless scalability for growing organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">1. Enterprise ERP & CRM Implementations</h3>
                <p className="text-sm text-slate-200 leading-relaxed">Custom configuration, database migration, and system architecture for Microsoft Dynamics 365, Odoo ERP, and ERPNext to optimize supply chain, finance, HR, and client relationship management.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">2. Full-Stack Web & Mobile Engineering</h3>
                <p className="text-sm text-slate-200 leading-relaxed">High-performance Progressive Web Apps (PWAs), Next.js microservices, and native mobile applications (React Native, iOS, Android) built for low latency and high concurrency.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">3. Cloud Architecture & Infrastructure</h3>
                <p className="text-sm text-slate-200 leading-relaxed">End-to-end cloud migration, automated Kubernetes deployments, and 24/7 proactive monitoring across AWS, Microsoft Azure, and dedicated high-availability clusters.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">4. Cybersecurity & Vulnerability Audit</h3>
                <p className="text-sm text-slate-200 leading-relaxed">Comprehensive static and dynamic penetration testing, vulnerability assessments, automated SSL management, SiteLock defenses, and round-the-clock Security Operations Center (SOC) monitoring.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">5. Digital Workplace Optimization</h3>
                <p className="text-sm text-slate-200 leading-relaxed">Seamless integration and enterprise deployment of Google Workspace, Microsoft 365, and Zoho suites to unify internal team communication and cloud storage security.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] space-y-3">
                <h3 className="text-lg font-semibold text-amber-400">6. Growth Marketing & Search Optimization</h3>
                <p className="text-sm text-slate-200 leading-relaxed">Data-driven Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), conversion tracking, and multi-platform PPC campaigns.</p>
              </div>
            </div>
          </section>

          {/* SECTION 4: Engineering Methodologies & Workflow Process */}
          <section className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Engineering Workflow & Implementation Methodology
            </h2>
            <p className="text-slate-200 leading-relaxed text-base">
              To guarantee predictability, performance, and security across all enterprise deliverables, 4Biz International follows a structured 5-phase software development lifecycle (SDLC):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Phase 1: Architecture Planning & Technical Discovery</h3>
                <p className="text-sm text-slate-300">Defining system requirements, database schema designs, cloud topology, API mapping, and security threat modeling before code execution.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Phase 2: Agile Sprint Engineering & Iterative Builds</h3>
                <p className="text-sm text-slate-300">Bi-weekly sprint iterations utilizing React, Next.js, Node.js, and Python frameworks alongside continuous integration (CI/CD) pipelines.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Phase 3: Automated Testing & Vulnerability Auditing</h3>
                <p className="text-sm text-slate-300">Rigorous load testing, unit testing, cross-browser responsiveness checks, dynamic vulnerability scanning, and OWASP Top 10 compliance audits.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">Phase 4: Cloud Deployment & Data Migration</h3>
                <p className="text-sm text-slate-300">Zero-downtime deployment executions on AWS or Azure high-availability environments, complete with encrypted legacy data migration.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5: Service Comparison Matrix */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Enterprise Service Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-white/10">
                <thead>
                  <tr className="bg-white/10 text-amber-400">
                    <th className="p-3 border border-white/10">Service Category</th>
                    <th className="p-3 border border-white/10">Core Technologies / Frameworks</th>
                    <th className="p-3 border border-white/10">Primary Business Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200">
                  <tr>
                    <td className="p-3 border border-white/10 font-semibold">ERP & CRM Systems</td>
                    <td className="p-3 border border-white/10">Microsoft Dynamics 365, Odoo, ERPNext</td>
                    <td className="p-3 border border-white/10">Operational automation & central data flow</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-white/10 font-semibold">Web & Mobile Engineering</td>
                    <td className="p-3 border border-white/10">Next.js, React Native, Node.js, REST APIs</td>
                    <td className="p-3 border border-white/10">High-conversion UX and scalable apps</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-white/10 font-semibold">Cloud Infrastructure</td>
                    <td className="p-3 border border-white/10">AWS, Azure, Kubernetes, Managed VPS</td>
                    <td className="p-3 border border-white/10">99.8% uptime & instant capacity scaling</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-white/10 font-semibold">Cybersecurity & Audit</td>
                    <td className="p-3 border border-white/10">Penetration Testing, SSL, SiteLock, SOC</td>
                    <td className="p-3 border border-white/10">Risk reduction and compliance assurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6: Where We Operate */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Where Is 4Biz International Located?
              </h2>
              <p className="text-slate-200 leading-relaxed">
                4Biz International operates through a hybrid corporate-delivery model ensuring local accessibility and cost-effective software execution:
              </p>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Dubai Corporate Hub:</strong> Crystal Building, Al Karama, Dubai, UAE.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">India Offshore Delivery Center 1:</strong> HiLite Business Park, Kozhikode, Kerala, India.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">India Offshore Delivery Center 2:</strong> Nadakkave, Kozhikode, Kerala, India.
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative w-full h-[300px] sm:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="4Biz Global Headquarters and Enterprise IT Operations Hub" 
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </section>

          {/* SECTION 7: FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "What does 4Biz International do?", a: "4Biz International LLC is a global IT solutions company specializing in custom ERP/CRM implementation, mobile and web app engineering, cloud infrastructure deployment, cybersecurity auditing, and performance-driven digital marketing." },
                { q: "Where is 4Biz International located?", a: "4Biz International is headquartered in Dubai, UAE (Crystal Building, Al Karama), with global offshore software development delivery centers in Kozhikode, Kerala, India (HiLite Business Park & Nadakkave)." },
                { q: "What industries does 4Biz International serve?", a: "4Biz International services clients in retail, real estate, hospitality, logistics, and healthcare. Enterprise clients include Theyyampattil Furniture, Opus Building Materials, Apparel Group, Ramada, 6thStreet, and Al Rostamani Group." },
                { q: "Does 4Biz International offer ERP and CRM development?", a: "Yes, 4Biz International develops custom enterprise ERP and CRM platforms and manages tier-1 deployments for Microsoft Dynamics 365, Odoo ERP, and ERPNext." },
                { q: "Does 4Biz International provide cybersecurity services?", a: "Yes, 4Biz International delivers penetration testing, automated vulnerability assessments, SSL setup, and 24/7 SOC threat monitoring." },
                { q: "Who is the CEO of 4Biz International?", a: "Ibrahim V serves as the Chief Executive Officer of 4Biz International LLC." },
                { q: "How can I contact 4Biz International?", a: "You can reach 4Biz International through their Dubai corporate hub, Kerala offshore delivery offices, or directly via their website contact portal." }
              ].map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                  <details className="group transition-all duration-300">
                    <summary className="flex justify-between items-center p-5 font-semibold text-white cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-white/[0.04]">
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-amber-400" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 pt-0 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-white/5 bg-black/10">
                      {faq.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>

        </main>

        <Contact />
      </div>
    </>
  );
}