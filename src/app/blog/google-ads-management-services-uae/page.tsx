import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management Services in UAE | 4Biz International",
  description:
    "Thinking about Google Ads in UAE? 4Biz International explains how it works, what management includes, how much to budget, and how long it takes to get leads.",
  alternates: {
    canonical:
      "https://www.4bizinternational.com/blog/google-ads-management-services-uae/",
  },
  openGraph: {
    title: "Google Ads Management Services in UAE | 4Biz International",
    description:
      "Thinking about Google Ads in UAE? 4Biz International explains how it works, what management includes, how much to budget, and how long it takes to get leads.",
    url: "https://www.4bizinternational.com/blog/google-ads-management-services-uae/",
    siteName: "4Biz International",
    type: "article",
    images: [
      {
        url: "https://www.4bizinternational.com/blog/google-ad-1.webp",
        width: 1200,
        height: 630,
        alt: "Google Ads Management Services in UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management Services in UAE | 4Biz International",
    description:
      "Thinking about Google Ads in UAE? 4Biz International explains how it works, what management includes, how much to budget, and how long it takes to get leads.",
    images: ["https://www.4bizinternational.com/blog/google-ad-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "1. How much does Google Ads cost in UAE?",
    answer:
      "There's no fixed price. Cost per click depends on your industry and keywords, and total spend is whatever budget you set. Management fees, such as those charged by 4Biz International, are separate from what you pay Google.",
  },
  {
    question:
      "2. Is Google Ads management worth paying for, or can I run it myself?",
    answer:
      "You can run it yourself, but the platform has many settings that affect cost and results. Many businesses find that professional management pays for itself by reducing wasted spend.",
  },
  {
    question: "3. How quickly can Google Ads bring in leads?",
    answer:
      "Ads can start generating clicks within days of launching. Stable, predictable lead costs typically take a few weeks of optimization.",
  },
  {
    question:
      "4. What's the difference between Google Ads and performance marketing?",
    answer:
      "Google Ads is one platform. Performance marketing is the wider approach of paying for measurable outcomes (leads, sales) across Google, Meta, and other channels, which 4Biz International can run alongside your Google Ads campaigns.",
  },
  {
    question: "5. Do I own my Google Ads account if an agency manages it?",
    answer:
      "You should. Ask for the account to be created under your own business so you keep your data and history if you change providers.",
  },
  {
    question: "6. How do I get started with 4Biz International?",
    answer:
      "Contact us by phone or through the form on our website. We'll review your goals, current website, and any existing ad accounts, then recommend a campaign structure and budget range.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.4bizinternational.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.4bizinternational.com/blog/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Ads Management Services in UAE",
      item: "https://www.4bizinternational.com/blog/google-ads-management-services-uae/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How Do Google Ads Work, and What Does Google Ads Management Include?",
  description:
    "Thinking about Google Ads in UAE? 4Biz International explains how it works, what management includes, how much to budget, and how long it takes to get leads.",
  image: "https://www.4bizinternational.com/blog/google-ad-1.webp",
  author: {
    "@type": "Organization",
    name: "4Biz International LLC",
    url: "https://www.4bizinternational.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "4Biz International LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.4bizinternational.com/logo.png",
    },
  },
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.4bizinternational.com/blog/google-ads-management-services-uae/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GoogleAdsPage() {
  return (
    <div
      className="min-h-screen text-slate-100 font-sans antialiased"
      style={{
        background:
          "linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)",
      }}
    >
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 border-b border-slate-800/80">
        <Image
          src="/blog/google-ad-1.webp"
          alt="Google Ads Management Services in UAE"
          fill
          priority
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06112c]/80 via-[#0c1b40]/70 to-[#06112c]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-cyan-300 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-300 truncate max-w-xs sm:max-w-md">
                Google Ads Management Services in UAE
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            How Do Google Ads Work, and What Does Google Ads Management Include?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 pt-4 border-t border-slate-700/60">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <Link
                href="https://www.4bizinternational.com/"
                className="text-cyan-300 hover:text-cyan-200 underline font-semibold transition-colors"
              >
                4Biz International LLC
              </Link>
            </span>
            <span>•</span>
            <span>
              Published:{" "}
              <span className="text-white font-medium">October 9, 2026</span>
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 md:space-y-16">
        {/* Intro */}
        <section className="space-y-6 text-base md:text-lg text-slate-200 leading-relaxed">
          <p>
            Google Ads is a paid advertising platform that places a
            business&apos;s ads at the top of search results, on YouTube, and
            across partner websites, charging the advertiser when someone clicks
            (or views). Google Ads management is the ongoing work of setting up,
            monitoring, and improving those campaigns so the budget produces
            enquiries and sales instead of wasted clicks. It&apos;s used when a
            business wants customers to find it immediately, rather than waiting
            months for organic rankings to build.
          </p>
          <p>
            Most people searching this topic aren&apos;t looking for an agency
            yet. They want to know how it works, what it costs, and whether
            it&apos;s worth it for their business. At{" "}
            <Link
              href="https://www.4bizinternational.com/services/"
              className="text-cyan-300 font-semibold underline hover:text-cyan-200 transition-colors"
            >
              4Biz International
            </Link>
            , these are the first questions we answer with businesses across UAE,
            so this guide covers them directly.
          </p>
        </section>

        {/* How Do Google Ads Work? */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            How Do Google Ads Work?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Google runs an auction every time someone searches. Advertisers bid
            on keywords, and Google decides which ads show based on bid amount
            and ad quality.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 text-slate-200 leading-relaxed">
              <h3 className="text-xl font-semibold text-cyan-300">
                Keywords and Search Intent
              </h3>
              <p>
                You choose the searches you want to appear for, such as
                &quot;office fit-out services&quot; or &quot;buy laptops
                online.&quot; Matching intent matters more than matching volume.
                A small number of high-intent keywords usually outperforms a
                long list of broad ones, which is why 4Biz International starts
                campaign planning with what customers actually search, not with
                the biggest keyword list.
              </p>
            </div>
            <div className="w-full md:w-1/2 min-h-[280px] md:min-h-full relative rounded-xl overflow-hidden shadow-xl border border-slate-700/50">
              <Image
                src="/blog/google-ad-2.webp"
                alt="Keyword research and search intent analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-300">
            Quality Score and Ad Relevance
          </h3>
          <p className="text-slate-200 leading-relaxed">
            Google rates how relevant your ad, keyword, and landing page are to
            each other. Higher relevance lowers your cost per click and improves
            your ad position.
          </p>

          <h3 className="text-xl font-semibold text-cyan-300">
            Cost Per Click (CPC) Model
          </h3>
          <p className="text-slate-200 leading-relaxed">
            You pay when someone clicks, not when your ad is shown. This is why
            campaign structure and keyword selection directly affect how far
            your budget goes.
          </p>
        </section>

        {/* Campaign Types */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            What Types of Google Ads Campaigns Exist?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Search Ads",
                desc: "Text ads that appear when someone searches a specific term. Best for capturing customers who are already looking for what you offer.",
              },
              {
                title: "Display Ads",
                desc: "Image-based ads shown across websites and apps. Best for awareness and retargeting people who already visited your site.",
              },
              {
                title: "YouTube / Video Ads",
                desc: "Video placements before or alongside content. Best for brand visibility and showing a product in action.",
              },
              {
                title: "Shopping Ads",
                desc: "Product listings with image and price shown in search results. Best for e-commerce businesses.",
              },
              {
                title: "Performance Max",
                desc: "An automated campaign type that distributes ads across all Google channels using your goals and creative assets. Best used once conversion tracking is reliable.",
              },
            ].map((campaign) => (
              <div
                key={campaign.title}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/80 rounded-xl p-5 hover:border-cyan-400/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {campaign.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {campaign.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Does Management Include */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            What Does Google Ads Management Actually Include?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            A proper management service, including the one 4Biz International
            provides, typically covers:
          </p>

          <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 text-slate-200 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  Account and campaign setup: structure, keyword research, ad
                  copy, and targeting
                </li>
                <li>
                  Conversion tracking: measuring calls, form submissions, and
                  purchases, not just clicks
                </li>
                <li>
                  Bid and budget management: shifting spend toward what performs
                </li>
                <li>
                  Negative keyword control: blocking irrelevant searches that
                  drain budget
                </li>
                <li>
                  Landing page recommendations: since a good ad sent to a weak
                  page still loses the customer
                </li>
                <li>
                  Reporting: cost per lead, cost per sale, and return on ad spend
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 min-h-[280px] md:min-h-full relative rounded-xl overflow-hidden shadow-xl border border-slate-700/50">
              <Image
                src="/blog/google-ad-3.webp"
                alt="Google Ads management dashboard and analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            How Much Should You Budget for Google Ads in UAE?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Costs have two parts: what you pay Google for clicks (ad spend) and
            what you pay for management.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80 text-cyan-300 font-semibold text-sm sm:text-base">
                  <th className="p-4 w-1/4">Cost Component</th>
                  <th className="p-4 w-2/5">What It Covers</th>
                  <th className="p-4 w-1/3">Key Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200 text-sm sm:text-base">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-medium text-white">Ad spend</td>
                  <td className="p-4">Paid directly to Google for clicks</td>
                  <td className="p-4">
                    Varies by industry competitiveness and keywords
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-medium text-white">
                    Management fee
                  </td>
                  <td className="p-4">Setup, optimization, and reporting</td>
                  <td className="p-4">
                    Charged as a flat fee or a share of ad spend
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-medium text-white">
                    Creative and landing pages
                  </td>
                  <td className="p-4">Ad copy, visuals, page improvements</td>
                  <td className="p-4">
                    Sometimes included, sometimes billed separately
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-300 text-sm md:text-base bg-slate-800/40 p-4 rounded-lg border border-slate-700/60 leading-relaxed">
            Competitive industries such as real estate, healthcare, and legal
            services generally cost more per click than niche B2B categories.
            Whichever provider you choose, including{" "}
            <Link
              href="https://www.4bizinternational.com/services/"
              className="text-cyan-300 font-semibold underline hover:text-cyan-200 transition-colors"
            >
              4Biz International
            </Link>
            , ask for written confirmation that ad spend is billed to your own
            Google Ads account, not hidden inside a bundled fee.
          </p>
        </section>

        {/* How Long Does It Take */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            How Long Does It Take to See Results?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Google Ads is faster than SEO, but it isn&apos;t instant.
          </p>

          <ul className="space-y-3 text-slate-200 leading-relaxed list-none">
            {[
              {
                period: "First days to 2 weeks",
                desc: "Ads go live and start generating clicks and early data",
              },
              {
                period: "Weeks 2 to 6",
                desc: "The campaign is refined using real search and conversion data",
              },
              {
                period: "Month 2 onward",
                desc: "Performance stabilizes, and cost per lead becomes predictable",
              },
            ].map((phase) => (
              <li
                key={phase.period}
                className="flex items-start gap-3 bg-slate-900/60 border border-slate-700/80 rounded-xl p-5"
              >
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                <span>
                  <strong className="text-cyan-300">{phase.period}:</strong>{" "}
                  {phase.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-slate-200 leading-relaxed">
            Early weeks are a learning period. Judging a campaign after a few
            days usually leads to cutting something that hasn&apos;t had time to
            work. 4Biz International sets this expectation upfront so clients
            know what to look for at each stage.
          </p>
        </section>

        {/* Google Ads vs SEO */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            Google Ads vs SEO: Which One Does Your Business Need?
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="overflow-x-auto rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-sm">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700 bg-slate-800/80 text-cyan-300 font-semibold text-sm sm:text-base">
                      <th className="p-4">Factor</th>
                      <th className="p-4">Google Ads</th>
                      <th className="p-4">SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200 text-sm sm:text-base">
                    {[
                      [
                        "Speed of results",
                        "Fast, days to weeks",
                        "Gradual, months",
                      ],
                      [
                        "Cost model",
                        "Pay per click",
                        "Pay for work, traffic is unpaid",
                      ],
                      [
                        "After spending stops",
                        "Traffic stops",
                        "Traffic continues",
                      ],
                      [
                        "Best for",
                        "Launches, offers, immediate demand",
                        "Long-term, compounding visibility",
                      ],
                      [
                        "Control over targeting",
                        "High, by keyword, location, and time",
                        "Moderate",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="p-4 font-medium text-white">
                          {row[0]}
                        </td>
                        <td className="p-4">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[280px] md:min-h-full relative rounded-xl overflow-hidden shadow-xl border border-slate-700/50">
              <Image
                src="/blog/google-ad-4.webp"
                alt="Google Ads versus SEO comparison"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-slate-200 leading-relaxed">
            Most businesses benefit from both: ads for immediate leads while SEO
            builds a lasting base. Because 4Biz International runs both under one
            digital marketing service, the two channels can share keyword data
            and landing pages instead of working separately.
          </p>
        </section>

        {/* What Gets Missed */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            What Gets Missed in Google Ads Campaigns
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-slate-200 leading-relaxed">
            {[
              "Conversion tracking never set up, so the account optimizes for clicks instead of enquiries",
              "Broad keywords left unchecked, bringing in irrelevant searches that waste budget",
              "Ads sent to the homepage instead of a page built around that specific offer",
              "Campaigns judged after a few days, before enough data exists to optimize",
              "Ad account created under the agency's name, leaving the business without ownership of its own history and data",
              "Location and language settings ignored, so ads show to audiences outside the real service area",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Is It Worth It */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            Is Google Ads Worth It for Your Business?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            It tends to work well when:
          </p>

          <ul className="list-disc pl-5 space-y-3 text-slate-200 leading-relaxed">
            <li>Customers actively search for what you sell</li>
            <li>
              You have a clear offer and a landing page that supports it
            </li>
            <li>You can track and follow up on leads quickly</li>
          </ul>

          <p className="text-slate-200 leading-relaxed">
            It tends to underperform when there&apos;s no tracking, the website
            is slow or unclear, or the budget is too small to gather meaningful
            data. If you&apos;re unsure which side your business falls on, the
            team at 4Biz International can review your current setup before you
            commit any budget.
          </p>
        </section>

        {/* How 4Biz Approaches */}
        <section className="bg-slate-900/70 rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-4 backdrop-blur-md">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            How 4Biz International Approaches Google Ads
          </h2>
          <p className="text-slate-200 leading-relaxed text-base md:text-lg">
            4Biz International manages Google Ads as part of its digital
            marketing and growth services, connecting campaign setup, tracking,
            and reporting with website and SEO work so paid traffic lands on
            pages built to convert. We work with businesses across Dubai, Abu
            Dhabi, and the wider UAE, from our offices in Dubai and Kerala.
          </p>
          <p className="text-cyan-200 font-medium italic border-l-4 border-cyan-400 pl-4 py-1 text-base md:text-lg">
            Paying for clicks without tracking what happens after them is the
            most common way ad budgets disappear without anyone being able to
            say why.
          </p>
        </section>

        {/* FAQ Section (native details/summary) */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-cyan-500/30 pb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-700/80 bg-slate-900/50 overflow-hidden transition-all duration-200"
              >
                <summary className="p-5 sm:p-6 font-semibold text-base sm:text-lg text-white flex justify-between items-center cursor-pointer list-none hover:bg-slate-800/50 transition-colors focus:outline-none">
                  <span>{faq.question}</span>
                  <span className="text-cyan-400 text-xl font-bold shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-900/80 via-slate-900 to-indigo-900/80 p-8 md:p-10 text-center border border-cyan-500/30 shadow-2xl space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Talk to 4Biz International About Google Ads for Your Business
          </h2>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto">
            Turn ad spend into trackable enquiries, not just clicks.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-200 font-medium">
            <a
              href="tel:+971527925100"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              Phone: +971 52 792 5100
            </a>
            <Link
              href="https://www.4bizinternational.com/services/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="text-slate-300 text-sm">
            <span className="font-semibold text-white">Coverage:</span> Dubai,
            Abu Dhabi, and all UAE Emirates, plus India (Kerala)
          </p>
        </section>
      </main>
    </div>
  );
}