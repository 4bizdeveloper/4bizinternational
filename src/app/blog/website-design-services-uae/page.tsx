import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Design Services in UAE: What's Included & Cost | 4Biz International",
  description: "Planning a new website? 4Biz International explains what website design services in UAE include, how much they cost, how long they take, and what makes a site convert.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.4bizinternational.com/blog/website-design-services-uae/",
  },
};

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Website Design Services in UAE: What's Included & Cost",
    "description": "Planning a new website? 4Biz International explains what website design services in UAE include, how much they cost, how long they take, and what makes a site convert.",
    "author": {
      "@type": "Organization",
      "name": "4Biz International LLC",
      "url": "https://www.4bizinternational.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "4Biz International LLC",
      "url": "https://www.4bizinternational.com/"
    },
    "datePublished": "2026-10-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.4bizinternational.com/blog/website-design-services-uae/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does website design cost in UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost depends on the type of site, number of pages, custom design, and features such as e-commerce or booking. A simple business website costs far less than a custom e-commerce platform, so compare what is included, not only the price."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to design and build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A small business website usually takes a few weeks, while larger corporate or e-commerce projects take one to several months. Timelines depend heavily on how quickly content and feedback are provided."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between website design and web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Design covers layout, visuals, and user experience. Development builds the working site with code, features, and integrations. 4Biz International handles both so the two stay aligned."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly and SEO-ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It should be. A responsive build and basic SEO setup, including clean structure, page titles, and speed optimization, are part of a properly scoped website project."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update the website myself after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the site is built on a content management system and your team is trained at handover. Confirm this before the project starts."
        }
      },
      {
        "@type": "Question",
        "name": "Do I own the website once it's built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should. Confirm in writing that the design files, code, and domain are transferred to you after final payment."
        }
      }
    ]
  },
  {
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
        "name": "Website Design Services in UAE",
        "item": "https://www.4bizinternational.com/blog/website-design-services-uae/"
      }
    ]
  }
];

const faqs = [
  {
    q: "1. How much does website design cost in UAE?",
    a: "Cost depends on the type of site, number of pages, custom design, and features such as e-commerce or booking. A simple business website costs far less than a custom e-commerce platform, so compare what is included, not only the price."
  },
  {
    q: "2. How long does it take to design and build a website?",
    a: "A small business website usually takes a few weeks, while larger corporate or e-commerce projects take one to several months. Timelines depend heavily on how quickly content and feedback are provided."
  },
  {
    q: "3. What's the difference between website design and web development?",
    a: "Design covers layout, visuals, and user experience. Development builds the working site with code, features, and integrations. 4Biz International handles both so the two stay aligned."
  },
  {
    q: "4. Will my website be mobile-friendly and SEO-ready?",
    a: "It should be. A responsive build and basic SEO setup, including clean structure, page titles, and speed optimization, are part of a properly scoped website project."
  },
  {
    q: "5. Can I update the website myself after launch?",
    a: "Yes, if the site is built on a content management system and your team is trained at handover. Confirm this before the project starts."
  },
  {
    q: "6. Do I own the website once it's built?",
    a: "You should. Confirm in writing that the design files, code, and domain are transferred to you after final payment."
  }
];

export default function WebsiteDesignBlogPage() {
  return (
    <div className="min-h-screen text-slate-100" style={{ background: 'linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)' }}>
      {/* JSON-LD Schemas */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/website-design-1.webp"
            alt="Website Design Services in UAE background"
            fill
            priority
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06112c]/95 via-[#0c1b40]/90 to-[#08306b]/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-cyan-300 font-medium" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li><span>/</span></li>
              <li>
                <Link href="/blog/" className="hover:underline">Blog</Link>
              </li>
              <li><span>/</span></li>
              <li className="text-slate-300 truncate">Website Design Services in UAE</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Do Website Design Services Include, and What Makes a Website Actually Convert?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200 pt-2">
            <span>Published by <a href="https://www.4bizinternational.com/" className="text-cyan-300 underline font-medium" target="_blank" rel="noopener noreferrer">4Biz International LLC</a></span>
            <span>•</span>
            <time dateTime="2026-10-15">October 15, 2026</time>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro & Row 1 (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-slate-200 text-base leading-relaxed">
            <p>
              Website design services cover the planning, layout, visual design, and build of a business website so that visitors understand what the company offers and take action, whether that is calling, filling a form, or buying. They are used when a business is launching online, replacing an outdated site, or finding that its current site gets visits but few enquiries. A good website is not judged by how it looks in a presentation. It is judged by how many visitors become customers.
            </p>
            <p>
              Most people searching this topic are not comparing agencies yet. They want to know what is included, what it costs, how long it takes, and what separates a site that converts from one that just looks good. At <a href="https://www.4bizinternational.com/" className="text-cyan-300 underline font-medium" target="_blank" rel="noopener noreferrer">4Biz International</a>, these are the first questions we answer for businesses across UAE, so this guide covers them directly.
            </p>
            <h2 className="text-2xl font-bold text-white pt-2">What Is Website Design, and How Is It Different From Web Development?</h2>
            <p>
              Website design decides how a site looks and how visitors move through it. Web development builds the working site: the code, the database, the integrations, and the speed. Most projects need both, and the best results come when the same team handles them together.
            </p>
          </div>
          {/* Landscape adjusted container for desktop */}
          <div className="w-full md:w-1/2 relative h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-2xl border border-slate-700/60">
            <Image
              src="/blog/website-design-1.webp"
              alt="UI UX Design and Planning Session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Design Pillars List */}
        <div className="bg-[#0c1b40]/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-300">User Experience (UX) Design</h3>
            <p className="text-slate-200">How the site is structured and how easily a visitor finds what they need, from menus and page flow to calls to action.</p>
          </div>
          <hr className="border-slate-700/50" />
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-300">User Interface (UI) Design</h3>
            <p className="text-slate-200">The visual layer: layout, colors, typography, imagery, and buttons, kept consistent with the brand.</p>
          </div>
          <hr className="border-slate-700/50" />
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-300">Development and Build</h3>
            <p className="text-slate-200">Turning the design into a fast, secure, mobile-friendly site on the right platform, with the features the business needs.</p>
          </div>
        </div>

        {/* Row 2 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-slate-200 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">What Do Website Design Services Typically Include?</h2>
            <p>
              A full website design engagement, including the one 4Biz International delivers, generally covers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-200">
              <li><strong>Discovery and planning:</strong> goals, audience, competitors, and sitemap</li>
              <li><strong>Wireframes:</strong> simple page layouts agreed before any visual design begins</li>
              <li><strong>Visual design:</strong> the look of key pages, aligned to your brand</li>
              <li><strong>Responsive build:</strong> the site working properly on mobile, tablet, and desktop</li>
              <li><strong>Content setup:</strong> page copy, images, and structure, either supplied by you or written for you</li>
              <li><strong>SEO foundations:</strong> clean structure, page titles, speed, and indexing setup</li>
              <li><strong>Testing and launch:</strong> checks across devices and browsers, then go-live</li>
              <li><strong>Training and handover:</strong> so your team can update the site without developer help</li>
            </ul>
          </div>
          {/* Landscape adjusted container for desktop */}
          <div className="w-full md:w-1/2 relative h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-2xl border border-slate-700/60">
            <Image
              src="/blog/website-design-2.webp"
              alt="Responsive Web Build and Development Process"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How Does the Website Design Process Work, Step by Step?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">01</span>
              <h3 className="text-xl font-semibold text-white">Discovery and Goals</h3>
              <p className="text-slate-300 text-sm">The agency learns what the site must achieve: leads, sales, bookings, or credibility. Every later decision is checked against this goal.</p>
            </div>
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">02</span>
              <h3 className="text-xl font-semibold text-white">Sitemap and Wireframes</h3>
              <p className="text-slate-300 text-sm">The page structure and layouts are agreed first, which is far cheaper to change than a finished design.</p>
            </div>
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">03</span>
              <h3 className="text-xl font-semibold text-white">Visual Design</h3>
              <p className="text-slate-300 text-sm">Key pages are designed in your brand style and reviewed with you before anything is built.</p>
            </div>
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">04</span>
              <h3 className="text-xl font-semibold text-white">Development</h3>
              <p className="text-slate-300 text-sm">The approved design is built into a working site, with forms, integrations, and any e-commerce or booking features.</p>
            </div>
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">05</span>
              <h3 className="text-xl font-semibold text-white">Content, Testing, and SEO Setup</h3>
              <p className="text-slate-300 text-sm">Content is added, speed and mobile behavior are tested, and search engine basics are put in place.</p>
            </div>
            <div className="bg-[#0c1b40]/70 border border-slate-700/60 p-6 rounded-xl space-y-3">
              <span className="text-cyan-300 font-bold text-lg">06</span>
              <h3 className="text-xl font-semibold text-white">Launch and Support</h3>
              <p className="text-slate-300 text-sm">The site goes live, and a support period catches any issues that only appear with real visitors.</p>
            </div>
          </div>
        </div>

        {/* Cost Section & Table 1 */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How Much Do Website Design Services Cost in UAE?</h2>
          <p className="text-slate-200">
            Cost depends on size and complexity, not just the number of pages.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl">
            <table className="w-full text-left border-collapse text-slate-200">
              <thead>
                <tr className="bg-[#08306b] text-white">
                  <th className="p-4 border-b border-slate-600 font-semibold">Website Type</th>
                  <th className="p-4 border-b border-slate-600 font-semibold">What&apos;s Included</th>
                  <th className="p-4 border-b border-slate-600 font-semibold">Typical Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 bg-[#0c1b40]/40">
                <tr>
                  <td className="p-4 font-medium text-white">Brochure / business website</td>
                  <td className="p-4">A handful of pages, contact forms, mobile-friendly design</td>
                  <td className="p-4">Small and mid-size businesses establishing an online presence</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Corporate website</td>
                  <td className="p-4">Custom design, more pages, blog, integrations, SEO setup</td>
                  <td className="p-4">Established companies that need credibility and lead generation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">E-commerce website</td>
                  <td className="p-4">Product catalog, cart, payment gateway, order management</td>
                  <td className="p-4">Businesses selling products online</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Custom web application</td>
                  <td className="p-4">Bespoke features, user accounts, dashboards, integrations</td>
                  <td className="p-4">Businesses with unique processes or platforms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm italic">
            Ask each provider to list what is included: number of pages, design revisions, content writing, SEO setup, hosting, and post-launch support. Two quotes that look similar often cover very different work.
          </p>
        </div>

        {/* Row 3 (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-slate-200 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">How Long Does It Take to Build a Website?</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-200">
              <li><strong>Small business website:</strong> typically a few weeks</li>
              <li><strong>Corporate website with custom design:</strong> commonly one to two months</li>
              <li><strong>E-commerce or custom web application:</strong> often two to four months or more, depending on features</li>
            </ul>
            <p>
              The biggest cause of delay is not design or code. It is slow content and feedback. Having text, images, and one named approver ready at the start keeps the schedule intact.
            </p>
          </div>
          {/* Landscape adjusted container for desktop */}
          <div className="w-full md:w-1/2 relative h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-2xl border border-slate-700/60">
            <Image
              src="/blog/website-design-3.webp"
              alt="Analytics Dashboard and Growth Strategy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Conversion Factors */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What Makes a Website Convert Visitors Into Customers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">A Clear Message Above the Fold</h3>
              <p className="text-slate-300 text-sm">Within a few seconds, a visitor should know what you offer, who it is for, and what to do next.</p>
            </div>
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">Speed on Mobile</h3>
              <p className="text-slate-300 text-sm">Most UAE visitors browse on phones. A slow mobile site loses people before they read anything.</p>
            </div>
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">One Obvious Next Step</h3>
              <p className="text-slate-300 text-sm">Each page should lead to one primary action, such as call, request a quote, or buy, rather than competing options.</p>
            </div>
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">Trust Signals</h3>
              <p className="text-slate-300 text-sm">Client logos, reviews, case studies, certifications, and clear contact details reduce hesitation.</p>
            </div>
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">Simple Forms</h3>
              <p className="text-slate-300 text-sm">Every extra form field lowers completion. Ask only for what you need to follow up.</p>
            </div>
            <div className="bg-[#0c1b40]/60 border border-slate-700/60 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-cyan-300">Arabic and English Support</h3>
              <p className="text-slate-300 text-sm">If your audience includes Arabic speakers, a properly built bilingual site, including right-to-left layout, is part of the design, not an afterthought.</p>
            </div>
          </div>
        </div>

        {/* What Gets Missed */}
        <div className="bg-[#0c1b40]/50 border border-slate-700/60 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">What Gets Missed When Businesses Approach Website Design the Wrong Way</h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-200">
            <li>Choosing a template for looks without checking speed, structure, or SEO readiness</li>
            <li>Designing around what the owner likes instead of what the customer needs to see</li>
            <li>Launching with no analytics or conversion tracking, so results cannot be measured</li>
            <li>Leaving out Arabic or mobile testing until the end</li>
            <li>Ignoring hosting, security, and backups, then paying heavily when something breaks</li>
            <li>No plan for updating content after launch, so the site goes stale within months</li>
          </ul>
        </div>

        {/* Template vs Custom Table */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Template Website vs Custom Website Design: Which Is Better?</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl">
            <table className="w-full text-left border-collapse text-slate-200">
              <thead>
                <tr className="bg-[#08306b] text-white">
                  <th className="p-4 border-b border-slate-600 font-semibold">Factor</th>
                  <th className="p-4 border-b border-slate-600 font-semibold">Template-Based</th>
                  <th className="p-4 border-b border-slate-600 font-semibold">Custom Design</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 bg-[#0c1b40]/40">
                <tr>
                  <td className="p-4 font-medium text-white">Upfront cost</td>
                  <td className="p-4">Lower</td>
                  <td className="p-4">Higher</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Launch speed</td>
                  <td className="p-4">Faster</td>
                  <td className="p-4">Slower</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Brand fit</td>
                  <td className="p-4">Limited to template options</td>
                  <td className="p-4">Fully tailored to your brand</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Flexibility for new features</td>
                  <td className="p-4">Restricted</td>
                  <td className="p-4">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Best for</td>
                  <td className="p-4">Startups and simple goals</td>
                  <td className="p-4">Growing businesses with specific needs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm">
            A template can be a sound starting point. A custom design pays off when the website is a main source of leads or sales, or when the business needs features a template cannot support.
          </p>
        </div>

        {/* How 4Biz International Approaches */}
        <div className="space-y-4 text-slate-200 text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How 4Biz International Approaches Website Design</h2>
          <p>
            <a href="https://www.4bizinternational.com/" className="text-cyan-300 underline font-medium" target="_blank" rel="noopener noreferrer">4Biz International</a> delivers website design as part of its web, mobile, and commerce solutions, connecting design and development with SEO and digital marketing so the site is built to be found as well as to convert. We work with businesses across Dubai, Abu Dhabi, and the wider UAE, from our offices in Dubai and Kerala.
          </p>
          <p>
            A website that looks impressive but loads slowly, hides its contact details, or cannot be found on Google is a cost, not an asset. The goal at 4Biz International is a site that earns its place in your sales process.
          </p>
        </div>

        {/* FAQs — Using native <details>/<summary> for accordion (no client JS needed) */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#0c1b40]/70 border border-slate-700/60 rounded-xl overflow-hidden transition-all duration-200"
              >
                <summary className="w-full text-left p-5 font-semibold text-white flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none">
                  <span>{faq.q}</span>
                  <span className="text-cyan-300 text-xl font-bold ml-4 group-open:hidden">+</span>
                  <span className="text-cyan-300 text-xl font-bold ml-4 hidden group-open:inline">−</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/40 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Talk to 4Biz International CTA Callout */}
        <div className="bg-gradient-to-r from-[#08306b] to-[#0c1b40] border border-cyan-500/30 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Talk to 4Biz International About Your Website</h2>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Get a website built to bring in enquiries, not just to look good.
          </p>
          <div className="text-cyan-300 font-semibold text-base sm:text-lg">
            Phone: +971 52 792 5100 | Coverage: Dubai, Abu Dhabi, and all UAE Emirates, plus India (Kerala)
          </div>
          <div className="pt-2">
            <Link 
              href="/services/" 
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}