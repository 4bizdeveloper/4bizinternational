"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  author: {
    "@type": "Organization",
    name: "4Biz International LLC",
    url: "https://www.4bizinternational.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "4Biz International",
    logo: {
      "@type": "ImageObject",
      url: "https://www.4bizinternational.com/logo.png",
    },
  },
  datePublished: new Date().toISOString().split("T")[0],
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.4bizinternational.com/blog/google-ads-management-services-uae/",
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

export default function GoogleAdsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)",
      }}
    >
      {/* JSON-LD Schemas */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <Image
          src="/blog/google-ad-1.webp"
          alt="Google Ads Management Services in UAE"
          fill
          priority
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06112c]/70 via-[#0c1b40]/60 to-[#08306b]/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <li>
                <Link
                  href="https://www.4bizinternational.com/"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li>
                <Link
                  href="https://www.4bizinternational.com/blog/"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li className="text-cyan-300 font-medium" aria-current="page">
                Google Ads Management Services in UAE
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Do Google Ads Work, and What Does Google Ads Management Include?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
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
                className="hover:text-cyan-300 transition-colors font-medium"
              >
                4Biz International LLC
              </Link>
            </span>
            <span className="text-slate-500">|</span>
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {today}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-20">
        {/* Intro */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            Google Ads is a paid advertising platform that places a
            business&apos;s ads at the top of search results, on YouTube, and
            across partner websites, charging the advertiser when someone clicks
            (or views). Google Ads management is the ongoing work of setting up,
            monitoring, and improving those campaigns so the budget produces
            enquiries and sales instead of wasted clicks. It&apos;s used when a
            business wants customers to find it immediately, rather than waiting
            months for organic rankings to build.
          </p>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            Most people searching this topic aren&apos;t looking for an agency
            yet. They want to know how it works, what it costs, and whether
            it&apos;s worth it for their business. At{" "}
            <Link
              href="https://www.4bizinternational.com/services/"
              className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 transition-colors"
            >
              4Biz International
            </Link>
            , these are the first questions we answer with businesses across UAE,
            so this guide covers them directly.
          </p>
        </div>

        {/* Section: How Do Google Ads Work? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            How Do Google Ads Work?
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-8">
            Google runs an auction every time someone searches. Advertisers bid
            on keywords, and Google decides which ads show based on bid amount
            and ad quality.
          </p>

          {/* Row 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Keywords and Search Intent
              </h3>
              <p className="text-slate-100 leading-relaxed">
                You choose the searches you want to appear for, such as
                &quot;office fit-out services&quot; or &quot;buy laptops
                online.&quot; Matching intent matters more than matching volume.
                A small number of high-intent keywords usually outperforms a
                long list of broad ones, which is why 4Biz International starts
                campaign planning with what customers actually search, not with
                the biggest keyword list.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full rounded-xl overflow-hidden">
              <Image
                src="/blog/google-ad-2.webp"
                alt="Keyword research and search intent analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-300 mb-3">
            Quality Score and Ad Relevance
          </h3>
          <p className="text-slate-100 leading-relaxed mb-6">
            Google rates how relevant your ad, keyword, and landing page are to
            each other. Higher relevance lowers your cost per click and improves
            your ad position.
          </p>

          <h3 className="text-xl font-semibold text-cyan-300 mb-3">
            Cost Per Click (CPC) Model
          </h3>
          <p className="text-slate-100 leading-relaxed mb-6">
            You pay when someone clicks, not when your ad is shown. This is why
            campaign structure and keyword selection directly affect how far
            your budget goes.
          </p>
        </section>

        {/* Section: Campaign Types */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            What Types of Google Ads Campaigns Exist?
          </h2>

          {/*
            On lg screens: first 3 cards in row 1 (3 cols), last 2 cards centered in row 2.
            On sm screens: 2 cards per row; last 1 centered via justify-center.
            On mobile: single column, all stacked.
          */}
          <div className="space-y-4 mb-8">
            {/* First row: 3 cards (Search, Display, YouTube) */}
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
              ].map((campaign) => (
                <div
                  key={campaign.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {campaign.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row: 2 cards centered on desktop */}
            <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-4">
              {[
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-colors lg:w-1/3"
                >
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {campaign.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: What Does Management Include */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            What Does Google Ads Management Actually Include?
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            A proper management service, including the one 4Biz International
            provides, typically covers:
          </p>

          {/* Row 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-8 mb-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <ul className="space-y-4">
                {[
                  "Account and campaign setup: structure, keyword research, ad copy, and targeting",
                  "Conversion tracking: measuring calls, form submissions, and purchases, not just clicks",
                  "Bid and budget management: shifting spend toward what performs",
                  "Negative keyword control: blocking irrelevant searches that drain budget",
                  "Landing page recommendations: since a good ad sent to a weak page still loses the customer",
                  "Reporting: cost per lead, cost per sale, and return on ad spend",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-100 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full rounded-xl overflow-hidden">
              <Image
                src="/blog/google-ad-3.webp"
                alt="Google Ads management dashboard and analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section: Budget */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            How Much Should You Budget for Google Ads in UAE?
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            Costs have two parts: what you pay Google for clicks (ad spend) and
            what you pay for management.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                    Cost Component
                  </th>
                  <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                    What It Covers
                  </th>
                  <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                    Key Point
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 text-white font-medium">
                    Ad spend
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Paid directly to Google for clicks
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Varies by industry competitiveness and keywords
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 text-white font-medium">
                    Management fee
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Setup, optimization, and reporting
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Charged as a flat fee or a share of ad spend
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 text-white font-medium">
                    Creative and landing pages
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Ad copy, visuals, page improvements
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    Sometimes included, sometimes billed separately
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-100 leading-relaxed mb-6">
            Competitive industries such as real estate, healthcare, and legal
            services generally cost more per click than niche B2B categories.
            Whichever provider you choose, including{" "}
            <Link
              href="https://www.4bizinternational.com/services/"
              className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 transition-colors"
            >
              4Biz International
            </Link>
            , ask for written confirmation that ad spend is billed to your own
            Google Ads account, not hidden inside a bundled fee.
          </p>
        </section>

        {/* Section: How Long Does It Take */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            How Long Does It Take to See Results?
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            Google Ads is faster than SEO, but it isn&apos;t instant.
          </p>

          <div className="space-y-4 mb-6">
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
              <div
                key={phase.period}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cyan-300 font-semibold mb-1">
                    {phase.period}
                  </h3>
                  <p className="text-slate-200">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-100 leading-relaxed">
            Early weeks are a learning period. Judging a campaign after a few
            days usually leads to cutting something that hasn&apos;t had time to
            work. 4Biz International sets this expectation upfront so clients
            know what to look for at each stage.
          </p>
        </section>

        {/* Section: Google Ads vs SEO */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Google Ads vs SEO: Which One Does Your Business Need?
          </h2>

          {/* Row 3: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                        Factor
                      </th>
                      <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                        Google Ads
                      </th>
                      <th className="px-5 py-4 text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                        SEO
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
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
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-5 py-4 text-white font-medium">
                          {row[0]}
                        </td>
                        <td className="px-5 py-4 text-slate-200">{row[1]}</td>
                        <td className="px-5 py-4 text-slate-200">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full rounded-xl overflow-hidden">
              <Image
                src="/blog/google-ad-4.webp"
                alt="Google Ads versus SEO comparison"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-slate-100 leading-relaxed mb-6">
            Most businesses benefit from both: ads for immediate leads while SEO
            builds a lasting base. Because 4Biz International runs both under one
            digital marketing service, the two channels can share keyword data
            and landing pages instead of working separately.
          </p>
        </section>

        {/* Section: What Gets Missed */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            What Gets Missed in Google Ads Campaigns
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Conversion tracking never set up, so the account optimizes for clicks instead of enquiries",
              "Broad keywords left unchecked, bringing in irrelevant searches that waste budget",
              "Ads sent to the homepage instead of a page built around that specific offer",
              "Campaigns judged after a few days, before enough data exists to optimize",
              "Ad account created under the agency's name, leaving the business without ownership of its own history and data",
              "Location and language settings ignored, so ads show to audiences outside the real service area",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-red-500/10 border border-red-400/20 rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-slate-100 text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Is It Worth It */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Is Google Ads Worth It for Your Business?
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            It tends to work well when:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-6">
              <h3 className="text-green-300 font-semibold text-lg mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Works Well When
              </h3>
              <ul className="space-y-3">
                {[
                  "Customers actively search for what you sell",
                  "You have a clear offer and a landing page that supports it",
                  "You can track and follow up on leads quickly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6">
              <h3 className="text-red-300 font-semibold text-lg mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Underperforms When
              </h3>
              <ul className="space-y-3">
                {[
                  "There's no tracking",
                  "The website is slow or unclear",
                  "The budget is too small to gather meaningful data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-slate-100 leading-relaxed">
            If you&apos;re unsure which side your business falls on, the team at
            4Biz International can review your current setup before you commit
            any budget.
          </p>
        </section>

        {/* Section: How 4Biz Approaches */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            How 4Biz International Approaches Google Ads
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            4Biz International manages Google Ads as part of its digital
            marketing and growth services, connecting campaign setup, tracking,
            and reporting with website and SEO work so paid traffic lands on
            pages built to convert. We work with businesses across Dubai, Abu
            Dhabi, and the wider UAE, from our offices in Dubai and Kerala.
          </p>
          <blockquote className="border-l-4 border-cyan-400 bg-white/5 rounded-r-xl p-6 italic text-slate-100 text-lg">
            Paying for clicks without tracking what happens after them is the
            most common way ad budgets disappear without anyone being able to
            say why.
          </blockquote>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-cyan-400/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-white font-semibold text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-cyan-300 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-200 leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Talk to 4Biz International About Google Ads for Your Business
          </h2>
          <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto">
            Turn ad spend into trackable enquiries, not just clicks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971527925100"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#06112c] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +971 52 792 5100
            </a>
            <Link
              href="https://www.4bizinternational.com/services/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors"
            >
              Explore Our Services
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <p className="text-slate-300 text-sm mt-6">
            Coverage: Dubai, Abu Dhabi, and all UAE Emirates, plus India (Kerala)
          </p>
        </section>
      </article>
    </div>
  );
}