import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '@/components/Contact';

export const metadata = {
  title: "Who We Are & What We Do | Dubai IT Solutions Company",
  description: "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company offering ERP/CRM, web & mobile development, cloud, cybersecurity, and digital marketing services.",
  alternates: {
    canonical: "https://www.4bizinternational.com/blog/4biz-international-who-we-are",
  },
  openGraph: {
    title: "Who We Are & What We Do",
    description: "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company offering ERP/CRM, web & mobile development, cloud, cybersecurity, and digital marketing services.",
    url: "https://www.4bizinternational.com/blog/4biz-international-who-we-are",
    type: "article",
    publishedTime: "2026-07-07T00:00:00.000Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "4Biz International Digital Transformation Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are & What We Do",
    description: "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company.",
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
        "name": "Blogs",
        "item": "https://www.4bizinternational.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Who We Are and What We Do",
        "item": "https://www.4bizinternational.com/blog/4biz-international-who-we-are"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Who We Are and What We Do",
    "description": "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company offering ERP/CRM, web & mobile development, cloud, cybersecurity, and digital marketing services.",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-07-07T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "4Biz International",
      "url": "https://www.4bizinternational.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.4bizinternational.com/blog/4biz-international-who-we-are"
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
          "text": "4Biz International is a Dubai-based IT solutions company offering software development, ERP and CRM systems, web and mobile app development, cloud hosting, cybersecurity, and digital marketing services for businesses across the UAE and beyond."
        }
      },
      {
        "@type": "Question",
        "name": "Where is 4Biz International located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International is headquartered in Dubai, UAE, with additional offices at HiLite Business Park and Nadakkave in Kozhikode, Kerala, India."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does 4Biz International serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International works with clients across retail, real estate, hospitality, manufacturing, and enterprise sectors, including brands like Theyyampattil Furniture, Opus Building Materials, Apparel Group, Ramada, 6thStreet, and Al Rostamani Group."
        }
      },
      {
        "@type": "Question",
        "name": "Does 4Biz International offer ERP and CRM development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. 4Biz International builds and implements custom ERP and CRM systems, including Microsoft Dynamics 365, Odoo ERP, and ERPNext, to streamline operations and improve customer engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Does 4Biz International provide cybersecurity services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Services include penetration testing, vulnerability assessments, SSL certificates, SiteLock protection, and continuous security monitoring to protect business systems from evolving threats."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the CEO of 4Biz International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ibrahim V serves as the Chief Executive Officer of 4Biz International."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact 4Biz International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach 4Biz International through their Dubai office, their India offices in Kozhikode, or via the contact form on their official website."
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

      {/* Enhanced Luxury Bright Navy Gradient Background */}
      <div className="min-h-screen bg-gradient-to-b from-[#0A163A] via-[#0E225C] to-[#061130] text-gray-100 font-sans antialiased scroll-smooth selection:bg-amber-500 selection:text-black">
        
        {/* HERO SECTION - Safely clears sticky/fixed layouts without page overlaps */}
        <header className="relative w-full max-w-7xl mx-auto pt-28 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
          
          {/* Centered Breadcrumb Component with Spacing & High Usability */}
          <nav aria-label="Breadcrumb" className="w-full flex justify-center mb-8 sm:mb-12">
            <ol className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium shadow-lg transition-all duration-300 hover:border-amber-500/30">
              <li className="inline-flex items-center">
                <Link 
                  href="https://www.4bizinternational.com/" 
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-slate-500 flex items-center">
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </li>
              <li className="inline-flex items-center">
                <Link 
                  href="https://www.4bizinternational.com/blog/" 
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-slate-500 flex items-center">
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </li>
              <li aria-current="page" className="text-amber-400 font-semibold truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                Who We Are and What We Do
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                4Biz International LLC
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300">
                Who We Are and What We Do
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">
                If you've been searching for a reliable IT solutions and digital transformation partner in Dubai, you've probably come across the name 4Biz International. But who exactly are we, and what makes us different from the dozens of other tech companies in the UAE? This post breaks it all down—our story, our services, and why businesses across the Middle East and beyond trust us with their digital growth.
              </p>
            </div>

            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500 hover:border-amber-500/30">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="4Biz International Digital Transformation Hub" 
                fill 
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A163A] via-transparent to-transparent opacity-40"></div>
            </div>

          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">

          {/* SECTION 1: Who Is 4Biz International? */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group order-last lg:order-first">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Operations and Enterprise Management" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Who Is 4Biz International?
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base">
                <p>
                  4Biz International LLC is a Dubai-headquartered IT solutions and software development company specializing in end-to-end digital transformation for businesses of all sizes. From custom ERP and CRM systems to web development, cloud infrastructure, cybersecurity, and digital marketing, we help organizations modernize their operations and scale with confidence.
                </p>
                <blockquote className="border-l-2 border-amber-400/50 pl-4 py-1 italic bg-white/5 rounded-r-lg text-amber-300">
                  Our tagline, "Impacting Infinite," reflects our core belief: technology should create limitless opportunities for growth, not add complexity. We combine deep technical expertise with a client-first approach, delivering solutions that are scalable, secure, and built to last.
                </blockquote>
                <p>
                  With a growing footprint across the UAE and India, our team operates from a corporate hub in Dubai and delivery centers in Kozhikode, Kerala—giving clients the advantage of Gulf-based strategy paired with strong technical execution.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Our Story So Far */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Our Story So Far
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base">
                <p>
                  4Biz International was built on a simple idea: businesses shouldn't have to juggle multiple vendors for software, hosting, marketing, and IT support. Over the years, we've grown into a full-stack technology partner, having delivered hundreds of projects for clients across retail, real estate, hospitality, manufacturing, and enterprise sectors—including recognizable names like Theyyampattil Furniture, Opus Building Materials, Apparel Group, Ramada, 6thStreet, and Al Rostamani Group.
                </p>
                <p>
                  Under the leadership of CEO Ibrahim V, the company has expanded from a software development shop into a comprehensive digital transformation partner, with dedicated teams for ERP/CRM, web and mobile development, cloud infrastructure, cybersecurity, and performance marketing.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Agile Collaborative Tech Development Team" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </section>

          {/* SECTION 3: What We Do: Our Core Services */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                What We Do: Our Core Services
              </h2>
              <p className="text-slate-300">
                We organize our expertise into a few key pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "1. Enterprise Business Applications (ERP & CRM)", desc: "Custom ERP and CRM development, including Microsoft Dynamics 365, Odoo ERP, and ERPNext implementations, sales automation, and HR & payroll solutions." },
                { title: "2. Web, Mobile & Commerce Solutions", desc: "UI/UX design, corporate website development, web and mobile app development, eCommerce platforms, progressive web apps (PWAs), and API integrations." },
                { title: "3. Digital Growth, Marketing & Brand Experience", desc: "SEO and Answer Engine Optimization (AEO), social media management, performance marketing, content and brand strategy, and online reputation management." },
                { title: "4. Cloud, Hosting & Infrastructure", desc: "Domain registration, shared/VPS/dedicated hosting, AWS and Microsoft Azure solutions, server management, and disaster recovery." },
                { title: "5. Cybersecurity & Digital Protection", desc: "Penetration testing, vulnerability assessments, SSL certificates, SiteLock protection, and 24/7 security monitoring." },
                { title: "6. Digital Workplace & Productivity Solutions", desc: "Microsoft 365, Google Workspace, and Zoho Workplace setup, business email solutions, and workflow automation." },
                { title: "7. Digital Transformation & Emerging Technologies", desc: "AI chatbots and assistants, business process automation, and enterprise-wide digital transformation consulting." }
              ].map((service, index) => (
                <div key={index} className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-amber-500/30 hover:bg-white/[0.06] flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-amber-400">{service.title}</h3>
                    <p className="text-sm text-slate-200 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Where We Operate */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
                Where We Operate
              </h2>
              <p className="text-slate-200 leading-relaxed">
                4Biz International runs from three key locations:
              </p>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Dubai Corporate Hub</strong> – Crystal Building, Al Karama, Dubai, UAE
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">India</strong> – HiLite Business Park - Kozhikode, Kerala
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <div>
                    <strong className="text-white">India</strong> – Nadakkave Office - Kozhikode, Kerala
                  </div>
                </li>
              </ul>
              <p className="text-sm text-slate-300 italic">
                This dual-region setup allows us to serve clients across the UAE, India, and beyond with round-the-clock support and cost-effective delivery.
              </p>
            </div>

            <div className="relative w-full h-[300px] sm:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="4Biz Global Headquarters and Operations" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </section>

          {/* SECTION 5: Why Businesses Choose 4Biz International */}
          <section className="p-8 lg:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-lg space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why Businesses Choose 4Biz International
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                <span className="text-amber-400 text-xl font-bold mt-0.5">•</span>
                <span className="text-sm sm:text-base"><strong className="text-white">Full-stack expertise</strong> — one partner for software, hosting, security, and marketing</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                <span className="text-amber-400 text-xl font-bold mt-0.5">•</span>
                <span className="text-sm sm:text-base"><strong className="text-white">Proven track record</strong> — hundreds of completed projects across multiple industries</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                <span className="text-amber-400 text-xl font-bold mt-0.5">•</span>
                <span className="text-sm sm:text-base"><strong className="text-white">Client-focused delivery</strong> — scalable, secure, future-ready solutions tailored to real business needs</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                <span className="text-amber-400 text-xl font-bold mt-0.5">•</span>
                <span className="text-sm sm:text-base"><strong className="text-white">Regional + global reach</strong> — serving clients across multiple countries from Dubai and India</span>
              </li>
            </ul>
          </section>

          {/* SECTION 6: Frequently Asked Questions */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white border-l-4 border-amber-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "What does 4Biz International do?", a: "4Biz International is a Dubai-based IT solutions company offering software development, ERP and CRM systems, web and mobile app development, cloud hosting, cybersecurity, and digital marketing services for businesses across the UAE and beyond." },
                { q: "Where is 4Biz International located?", a: "4Biz International is headquartered in Dubai, UAE, with additional offices at HiLite Business Park and Nadakkave in Kozhikode, Kerala, India." },
                { q: "What industries does 4Biz International serve?", a: "4Biz International works with clients across retail, real estate, hospitality, manufacturing, and enterprise sectors, including brands like Theyyampattil Furniture, Opus Building Materials, Apparel Group, Ramada, 6thStreet, and Al Rostamani Group." },
                { q: "Does 4Biz International offer ERP and CRM development?", a: "Yes. 4Biz International builds and implements custom ERP and CRM systems, including Microsoft Dynamics 365, Odoo ERP, and ERPNext, to streamline operations and improve customer engagement." },
                { q: "Does 4Biz International provide cybersecurity services?", a: "Yes. Services include penetration testing, vulnerability assessments, SSL certificates, SiteLock protection, and continuous security monitoring to protect business systems from evolving threats." },
                { q: "Who is the CEO of 4Biz International?", a: "Ibrahim V serves as the Chief Executive Officer of 4Biz International." },
                { q: "How can I contact 4Biz International?", a: "You can reach 4Biz International through their Dubai office, their India offices in Kozhikode, or via the contact form on their official website." }
              ].map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                  <details className="group transition-all duration-300">
                    <summary className="flex justify-between items-center p-5 font-semibold text-white cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-white/[0.04]">
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
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

        {/* Global Client Contact Module integration */}
        <Contact />
      </div>
    </>
  );
}