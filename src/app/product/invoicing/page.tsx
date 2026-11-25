import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
  Server,
  FileCode2,
  Lock,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Building2,
  Check,
  ExternalLink,
} from "lucide-react";

/**
 * SERVER-LEVEL SEO, AEO & GEO METADATA
 * Engineered for Google Search, Bing, Perplexity, ChatGPT Search, and AI Crawlers.
 */
export const metadata: Metadata = {
  title:
    "4Biz e-Invoicing for Microsoft Dynamics 365 Business Central | UAE PINT AE & Peppol",
  description:
    "UAE-compliant e-Invoicing built natively inside Microsoft Dynamics 365 Business Central. Automated PINT AE XML generation, Peppol network transmission, and real-time FTA reporting by 4Biz International Dubai.",
  keywords: [
    "4Biz e-Invoicing",
    "UAE e-Invoicing Business Central",
    "Microsoft Dynamics 365 Business Central UAE",
    "PINT AE XML",
    "Peppol e-Invoicing UAE",
    "FTA e-Invoicing compliance Dubai",
    "4Biz International",
    "ERP e-Invoicing UAE",
  ],
  alternates: {
    canonical: "https://www.4bizinternational.com/product/invoicing",
  },
  openGraph: {
    title: "4Biz e-Invoicing — Built for Microsoft Dynamics 365 Business Central",
    description:
      "It's never just an invoice. It's everything working behind it. Native UAE PINT AE, Peppol & FTA e-invoicing inside Business Central.",
    url: "https://www.4bizinternational.com/products/invoicing",
    siteName: "4Biz International",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://www.4bizinternational.com/products/4biz-invoicing-1.webp",
        width: 2160,
        height: 2700,
        alt: "4Biz e-Invoicing for Microsoft Dynamics 365 Business Central",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Biz e-Invoicing for Microsoft Dynamics 365 Business Central",
    description:
      "Native UAE PINT AE & Peppol-compliant e-Invoicing inside Microsoft Dynamics 365 Business Central.",
    images: ["https://www.4bizinternational.com/products/4biz-invoicing-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const FAQ_ITEMS = [
  {
    question: "How does 4Biz e-Invoicing integrate with Microsoft Dynamics 365 Business Central?",
    answer:
      "4Biz e-Invoicing is built natively as an extension inside Microsoft Dynamics 365 Business Central. Finance teams generate, validate, sign, and transmit compliant invoices directly from their standard Sales Invoice and Service Invoice screens without exporting data or switching to external portals.",
  },
  {
    question: "Is 4Biz e-Invoicing compliant with UAE FTA and PINT AE standards?",
    answer:
      "Yes. Every invoice is automatically structured into the UAE PINT AE XML schema, validated against Federal Tax Authority (FTA) mandatory data fields, cryptographically sealed, and transmitted via Accredited Service Providers (ASP) across the Peppol 5-corner model.",
  },
  {
    question: "Do we need third-party middleware to connect to the Peppol network?",
    answer:
      "No separate middleware is required. 4Biz International handles end-to-end Peppol ASP onboarding, Participant ID registration, certificate provisioning, and direct API connectivity straight from your Business Central tenant.",
  },
  {
    question: "How long does implementation and go-live take in the UAE?",
    answer:
      "For standard Microsoft Dynamics 365 Business Central environments, deployment, PINT AE field mapping, sandbox testing, and user training typically complete within 5 to 10 business days.",
  },
  {
    question: "Does it support B2B, B2G, credit notes, and multi-currency UAE VAT transactions?",
    answer:
      "Yes. 4Biz e-Invoicing supports B2B and B2G workflows, standard tax invoices, simplified tax invoices, credit and debit notes, reverse-charge mechanisms, and AED/multi-currency reporting with real-time status tracking inside Business Central.",
  },
];

/**
 * Tailed star configuration type.
 */
type TailedStar = {
  top: string;
  left: string;
  length: string;
  delay: string;
  duration: string;
  angle: string;
  headSize: string;
};

const HERO_STARS: TailedStar[] = [
  { top: "9%", left: "12%", length: "150px", delay: "0s", duration: "3.4s", angle: "-32deg", headSize: "6px" },
  { top: "18%", left: "54%", length: "190px", delay: "-1.1s", duration: "3.8s", angle: "-32deg", headSize: "7px" },
  { top: "27%", left: "28%", length: "125px", delay: "-2.2s", duration: "3.1s", angle: "-32deg", headSize: "5px" },
  { top: "14%", left: "78%", length: "165px", delay: "-0.7s", duration: "3.6s", angle: "-32deg", headSize: "6px" },
  { top: "38%", left: "64%", length: "140px", delay: "-1.8s", duration: "3.5s", angle: "-32deg", headSize: "5px" },
  { top: "44%", left: "18%", length: "175px", delay: "-2.7s", duration: "4.0s", angle: "-32deg", headSize: "6px" },
];

const OVERVIEW_STARS: TailedStar[] = [
  { top: "12%", left: "8%", length: "160px", delay: "-0.4s", duration: "3.6s", angle: "-32deg", headSize: "6px" },
  { top: "22%", left: "68%", length: "200px", delay: "-1.6s", duration: "4.0s", angle: "-32deg", headSize: "7px" },
  { top: "48%", left: "36%", length: "135px", delay: "-2.4s", duration: "3.2s", angle: "-32deg", headSize: "5px" },
  { top: "63%", left: "82%", length: "170px", delay: "-0.9s", duration: "3.7s", angle: "-32deg", headSize: "6px" },
  { top: "78%", left: "22%", length: "150px", delay: "-2.9s", duration: "3.9s", angle: "-32deg", headSize: "5px" },
];

const ARCHITECTURE_STARS: TailedStar[] = [
  { top: "10%", left: "42%", length: "185px", delay: "-1.3s", duration: "3.8s", angle: "-32deg", headSize: "7px" },
  { top: "26%", left: "10%", length: "140px", delay: "-0.6s", duration: "3.3s", angle: "-32deg", headSize: "5px" },
  { top: "40%", left: "74%", length: "175px", delay: "-2.1s", duration: "4.1s", angle: "-32deg", headSize: "6px" },
  { top: "60%", left: "30%", length: "155px", delay: "-2.8s", duration: "3.5s", angle: "-32deg", headSize: "6px" },
  { top: "82%", left: "58%", length: "190px", delay: "-1.0s", duration: "3.9s", angle: "-32deg", headSize: "7px" },
];

const CAPABILITIES_STARS: TailedStar[] = [
  { top: "8%", left: "22%", length: "145px", delay: "-0.8s", duration: "3.4s", angle: "-32deg", headSize: "5px" },
  { top: "20%", left: "62%", length: "195px", delay: "-1.9s", duration: "4.0s", angle: "-32deg", headSize: "7px" },
  { top: "35%", left: "88%", length: "130px", delay: "-2.5s", duration: "3.2s", angle: "-32deg", headSize: "5px" },
  { top: "55%", left: "14%", length: "170px", delay: "-0.3s", duration: "3.7s", angle: "-32deg", headSize: "6px" },
  { top: "72%", left: "46%", length: "160px", delay: "-1.4s", duration: "3.6s", angle: "-32deg", headSize: "6px" },
  { top: "88%", left: "70%", length: "140px", delay: "-2.7s", duration: "3.9s", angle: "-32deg", headSize: "5px" },
];

const DEMO_STARS: TailedStar[] = [
  { top: "14%", left: "16%", length: "180px", delay: "-1.2s", duration: "3.7s", angle: "-32deg", headSize: "6px" },
  { top: "30%", left: "56%", length: "150px", delay: "-0.5s", duration: "3.4s", angle: "-32deg", headSize: "5px" },
  { top: "50%", left: "82%", length: "195px", delay: "-2.3s", duration: "4.0s", angle: "-32deg", headSize: "7px" },
  { top: "70%", left: "28%", length: "135px", delay: "-2.9s", duration: "3.2s", angle: "-32deg", headSize: "5px" },
  { top: "86%", left: "64%", length: "165px", delay: "-1.7s", duration: "3.8s", angle: "-32deg", headSize: "6px" },
];

const FAQ_STARS: TailedStar[] = [
  { top: "10%", left: "36%", length: "160px", delay: "-0.9s", duration: "3.5s", angle: "-32deg", headSize: "6px" },
  { top: "28%", left: "78%", length: "175px", delay: "-2.0s", duration: "3.9s", angle: "-32deg", headSize: "6px" },
  { top: "46%", left: "12%", length: "145px", delay: "-1.5s", duration: "3.3s", angle: "-32deg", headSize: "5px" },
  { top: "64%", left: "52%", length: "185px", delay: "-2.6s", duration: "4.0s", angle: "-32deg", headSize: "7px" },
  { top: "84%", left: "26%", length: "150px", delay: "-0.4s", duration: "3.6s", angle: "-32deg", headSize: "5px" },
];

function TailedStars({ stars, showGrid = false }: { stars: TailedStar[]; showGrid?: boolean }) {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Optional grid background for the hero section */}
      {showGrid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_15%,#000_65%,transparent_100%)]" />
      )}

      {stars.map((star, idx) => (
        <span
          key={idx}
          style={
            {
              top: star.top,
              left: star.left,
              width: star.length,
              height: "2px",
              animationDelay: star.delay,
              animationDuration: star.duration,
              rotate: star.angle,
              "--star-head": star.headSize,
              background:
                "linear-gradient(90deg, rgba(0, 217, 255, 0) 0%, rgba(14, 165, 233, 0.35) 45%, rgba(56, 189, 248, 0.88) 85%, #e0f7ff 100%)",
            } as React.CSSProperties
          }
          className="nylon-tailed-star block"
        />
      ))}
    </div>
  );
}

export default function EInvoicingProductPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.4bizinternational.com" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://www.4bizinternational.com/product" },
          { "@type": "ListItem", position: 3, name: "4Biz e-Invoicing", item: "https://www.4bizinternational.com/product/invoicing" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "4Biz e-Invoicing for Microsoft Dynamics 365 Business Central",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "ERP e-Invoicing & Tax Compliance Software",
        operatingSystem: "Cloud / Microsoft Dynamics 365 Business Central",
        description:
          "Native UAE e-Invoicing solution built inside Microsoft Dynamics 365 Business Central supporting PINT AE XML, Peppol network transmission, and real-time FTA compliance.",
        image: "https://www.4bizinternational.com/products/4biz-invoicing-1.webp",
        url: "https://www.4bizinternational.com/products/invoicing",
        author: {
          "@type": "Organization",
          name: "4Biz International",
          url: "https://www.4bizinternational.com",
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "AED",
          seller: { "@type": "Organization", name: "4Biz International" },
        },
        featureList: [
          "Native Microsoft Dynamics 365 Business Central Integration",
          "Automated UAE PINT AE XML Generation",
          "Peppol Network 5-Corner Transmission",
          "Real-time FTA Tax Reporting & Validation",
          "Cryptographic Digital Signatures & Audit Trail",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)",
      }}
      className="min-h-screen text-white selection:bg-cyan-400/30 selection:text-cyan-100 overflow-x-clip relative scroll-smooth"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -14px, 0); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, 12px, 0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: scale3d(1, 1, 1); }
          50% { opacity: 0.8; transform: scale3d(1.06, 1.06, 1); }
        }
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translate3d(0, 22px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes nylonStarStreak {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scaleX(0.35);
          }
          18% {
            opacity: 1;
            transform: translate3d(42px, 26px, 0) scaleX(1);
          }
          78% {
            opacity: 0.92;
            transform: translate3d(175px, 108px, 0) scaleX(1.05);
          }
          100% {
            opacity: 0;
            transform: translate3d(240px, 148px, 0) scaleX(0.6);
          }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-reverse {
          animation: floatReverse 8s ease-in-out infinite;
          will-change: transform;
        }
        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .animate-hero-enter {
          animation: fadeUpIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-hero-enter-delay-1 {
          animation: fadeUpIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .animate-hero-enter-delay-2 {
          animation: fadeUpIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
        }
        .nylon-tailed-star {
          position: relative;
          transform-origin: right center;
          animation-name: nylonStarStreak;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        .nylon-tailed-star::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 50%;
          width: var(--star-head, 6px);
          height: var(--star-head, 6px);
          transform: translateY(-50%);
          border-radius: 9999px;
          background: #e0f7ff;
          box-shadow:
            0 0 10px 2px #00d9ff,
            0 0 22px 6px rgba(0, 184, 255, 0.85),
            0 0 38px 10px rgba(14, 165, 233, 0.45);
        }
        .cv-auto {
          content-visibility: auto;
          contain-intrinsic-size: 1px 900px;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          .animate-float-slow,
          .animate-float-reverse,
          .animate-pulse-glow,
          .animate-hero-enter,
          .animate-hero-enter-delay-1,
          .animate-hero-enter-delay-2,
          .nylon-tailed-star {
            animation: none !important;
          }
        }
      `}</style>

      {/* Global Ambient Lighting (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] rounded-full bg-sky-500/15 blur-[130px] animate-pulse-glow" />
        <div className="absolute top-[38%] -right-32 w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full bg-cyan-400/15 blur-[130px] animate-pulse-glow" />
      </div>

      <main className="relative z-10">
        {/* =====================================================================
            SECTION 1: HERO — CINEMATIC SPLIT SHOWCASE (Adjusted top padding for mobile headers)
        ====================================================================== */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32"
        >
          <TailedStars stars={HERO_STARS} showGrid={true} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Top Breadcrumb Inside Hero Section */}
            <nav
              aria-label="Breadcrumb"
              className="animate-hero-enter mb-8 sm:mb-10"
            >
              <ol className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-center text-xs sm:text-sm text-slate-300/90">
                <li>
                  <Link
                    href="/"
                    className="hover:text-cyan-300 transition-colors rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-500">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-cyan-300 transition-colors rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Products
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-500">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </li>
                <li aria-current="page" className="font-semibold text-cyan-300 px-1 py-0.5">
                  4Biz e-Invoicing
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: High-Impact Product Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left min-w-0">
                <div className="animate-hero-enter inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs sm:text-sm font-semibold w-fit shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  </span>
                  <span>Microsoft Dynamics 365 Business Central</span>
                </div>

                <h1
                  id="hero-heading"
                  className="animate-hero-enter-delay-1 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.06] text-white"
                >
                  It&apos;s never just{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200">
                    an invoice.
                  </span>
                </h1>

                <p className="animate-hero-enter-delay-1 text-xl sm:text-2xl md:text-3xl text-slate-200 font-light tracking-tight max-w-2xl">
                  It&apos;s <strong className="font-extrabold text-white">everything</strong>{" "}
                  working behind it.
                </p>

                <p className="animate-hero-enter-delay-2 text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-xl">
                  <strong className="text-white font-semibold">4Biz e-Invoicing</strong> embeds
                  natively inside Microsoft Dynamics 365 Business Central—automating UAE PINT AE
                  XML generation, Peppol transmission, and real-time FTA compliance with zero
                  third-party friction.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="animate-hero-enter-delay-2 flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#demo"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 shadow-[0_10px_35px_rgba(6,182,212,0.38)] hover:shadow-[0_14px_45px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all duration-300 touch-manipulation"
                  >
                    <span>Book Your Live Demo</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#architecture"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all duration-300 touch-manipulation"
                  >
                    <span>Explore UAE Architecture</span>
                  </a>
                </div>

                {/* Compliance Trust Strip */}
                <div className="animate-hero-enter-delay-2 grid grid-cols-3 gap-3 sm:gap-6 pt-6 mt-2 border-t border-white/10 max-w-xl">
                  <div className="min-w-0">
                    <div className="text-cyan-300 font-extrabold text-lg sm:text-2xl truncate">PINT AE</div>
                    <div className="text-xs sm:text-sm text-slate-400">UAE XML Schema</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-cyan-300 font-extrabold text-lg sm:text-2xl truncate">Peppol</div>
                    <div className="text-xs sm:text-sm text-slate-400">5-Corner Network</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-cyan-300 font-extrabold text-lg sm:text-2xl truncate">100% Native</div>
                    <div className="text-xs sm:text-sm text-slate-400">Business Central</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image 1 */}
              <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] animate-float-slow">
                  <div
                    className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-blue-600/30 via-cyan-400/20 to-indigo-500/30 blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative aspect-[4/5] w-full rounded-[1.75rem] p-2 bg-gradient-to-b from-white/20 via-white/5 to-cyan-500/20 shadow-[0_25px_70px_rgba(0,150,255,0.28)] backdrop-blur-sm">
                    <div className="relative w-full h-full overflow-hidden rounded-[1.35rem] bg-[#040b1e]">
                      <Image
                        src="/products/4biz-invoicing-1.webp"
                        alt="4Biz e-Invoicing — It's never just an invoice, it's everything working behind it"
                        width={2160}
                        height={2700}
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 440px, 480px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: PRODUCT INTRODUCTION
        ====================================================================== */}
        <section
          id="overview"
          aria-labelledby="overview-heading"
          className="cv-auto scroll-mt-24 relative overflow-hidden py-20 sm:py-28 border-t border-white/[0.06]"
        >
          <TailedStars stars={OVERVIEW_STARS} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] animate-float-reverse">
                  <div
                    className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-bl from-cyan-500/25 via-blue-600/20 to-transparent blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] w-full rounded-[1.75rem] p-2 bg-gradient-to-b from-cyan-400/25 via-white/10 to-blue-600/20 shadow-[0_25px_70px_rgba(6,182,212,0.22)]">
                    <div className="relative w-full h-full overflow-hidden rounded-[1.35rem] bg-[#040b1e]">
                      <Image
                        src="/products/4biz-invoicing-2.webp"
                        alt="Introducing 4Biz e-Invoicing — UAE e-invoicing built for Microsoft Dynamics 365 Business Central"
                        width={2160}
                        height={2700}
                        loading="lazy"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 440px, 480px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 min-w-0">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-cyan-400" />
                  <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase">
                    Introducing 4Biz e-Invoicing
                  </span>
                </div>

                <h2
                  id="overview-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]"
                >
                  UAE e-invoicing, built natively for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Microsoft Dynamics 365 Business Central.
                  </span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Eliminate disconnected middleware, manual XML exports, and compliance bottlenecks.
                  4Biz e-Invoicing lives directly inside your Business Central workspace—turning
                  every posted sales invoice or credit memo into a validated, signed, and
                  FTA-compliant UAE e-invoice in seconds.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "Zero-Friction ERP Extension",
                      desc: "Post invoices from your existing Business Central screens with one-click automated dispatch.",
                    },
                    {
                      title: "Real-Time Schema Validation",
                      desc: "Pre-validates mandatory UAE VAT, TRN, and PINT AE fields before transmission to prevent rejections.",
                    },
                    {
                      title: "Automated Peppol Exchange",
                      desc: "Direct 5-corner Peppol network routing to buyers and Accredited Service Providers.",
                    },
                    {
                      title: "Live Audit & Clearance Status",
                      desc: "Instant UUID, cryptographic hash, QR code, and FTA reporting status logged on every document.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: THE ARCHITECTURE
        ====================================================================== */}
        <section
          id="architecture"
          aria-labelledby="architecture-heading"
          className="cv-auto scroll-mt-24 relative overflow-hidden py-20 sm:py-28 border-t border-white/[0.06] bg-gradient-to-b from-blue-950/20 via-transparent to-blue-950/20"
        >
          <TailedStars stars={ARCHITECTURE_STARS} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-cyan-400" />
                <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase">
                  What Works Behind It
                </span>
                <span className="h-px w-8 bg-cyan-400" />
              </div>

              <h2
                id="architecture-heading"
                className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-5"
              >
                Built to the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  UAE standard.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A resilient, multi-layered compliance engine orchestrated seamlessly behind your
                Microsoft Dynamics 365 Business Central interface.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4 min-w-0">
                {[
                  {
                    step: "01",
                    title: "Microsoft Dynamics 365 Business Central",
                    tag: "ERP Core",
                    desc: "Captures customer TRN, line-item tax codes, discounts, and multi-currency totals directly from posted sales and credit documents.",
                    icon: Layers,
                  },
                  {
                    step: "02",
                    title: "PINT AE XML Transformation Engine",
                    tag: "UAE Data Standard",
                    desc: "Maps ERP records into structured UBL 2.1 / PINT AE compliant XML with automated business-rule validation.",
                    icon: FileCode2,
                  },
                  {
                    step: "03",
                    title: "Peppol Accredited Access Point",
                    tag: "5-Corner Network",
                    desc: "Encrypts, signs, and routes e-invoices securely across the Peppol network to the buyer's Access Point.",
                    icon: Globe2,
                  },
                  {
                    step: "04",
                    title: "UAE FTA Continuous Transaction Controls",
                    tag: "Regulatory Reporting",
                    desc: "Transmits tax data to the Federal Tax Authority in real time and archives signed XML/PDF-A3 records for audit readiness.",
                    icon: ShieldCheck,
                  },
                ].map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.step}
                      className="group p-5 sm:p-6 rounded-2xl bg-[#060d24]/85 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono font-bold text-cyan-400">
                              LAYER {layer.step} • {layer.tag}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
                            {layer.title}
                          </h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{layer.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-6 flex justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px]">
                  <div
                    className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/25 via-cyan-400/20 to-indigo-500/25 blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] w-full rounded-[1.75rem] p-2 bg-gradient-to-b from-white/20 via-cyan-400/15 to-blue-600/25 shadow-[0_25px_80px_rgba(0,150,255,0.28)]">
                    <div className="relative w-full h-full overflow-hidden rounded-[1.35rem] bg-[#040b1e]">
                      <Image
                        src="/products/4biz-invoicing-3.webp"
                        alt="What works behind it — Built to the UAE standard: PINT AE XML, FTA Reporting, Peppol Network, Business Central"
                        width={2160}
                        height={2700}
                        loading="lazy"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 500px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: ENTERPRISE CAPABILITIES
        ====================================================================== */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="cv-auto scroll-mt-24 relative overflow-hidden py-20 sm:py-28 border-t border-white/[0.06]"
        >
          <TailedStars stars={CAPABILITIES_STARS} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2.5 mb-3">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase">
                    Enterprise Capabilities
                  </span>
                </div>
                <h2
                  id="capabilities-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
                >
                  Engineered for high-volume{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    UAE finance teams.
                  </span>
                </h2>
              </div>
              <p className="text-slate-400 text-sm sm:text-base max-w-md">
                Complete lifecycle visibility from invoice creation to Peppol acknowledgment and
                FTA audit archiving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Instant Bulk & Automated Dispatch",
                  desc: "Transmit single invoices or schedule batch runs for thousands of daily transactions without slowing down Business Central.",
                },
                {
                  icon: Lock,
                  title: "Tamper-Proof Digital Signatures",
                  desc: "Cryptographic hashing, UUID stamping, and compliant QR generation embedded automatically into human-readable PDF/A-3 files.",
                },
                {
                  icon: Server,
                  title: "Inbound Supplier e-Invoice Capture",
                  desc: "Receive vendor Peppol e-invoices straight into Business Central Purchase Invoices with automated 3-way PO matching.",
                },
                {
                  icon: ShieldCheck,
                  title: "Pre-Submission Validation Guard",
                  desc: "Catches missing buyer TRNs, invalid tax categories, or rounding mismatches inside ERP before hitting the Peppol gateway.",
                },
                {
                  icon: Building2,
                  title: "Multi-Entity & Multi-Branch Ready",
                  desc: "Manage multiple UAE legal entities, TRNs, and Peppol Participant IDs from a unified Business Central environment.",
                },
                {
                  icon: CheckCircle2,
                  title: "Full Credit Note & Adjustment Flows",
                  desc: "Native handling of partial/full credit notes, debit memos, advance payments, and UAE VAT reverse-charge scenarios.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-7 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-cyan-400/45 transition-all duration-300 hover:-translate-y-1 min-w-0"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-5 group-hover:bg-cyan-500/25 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2.5">{feature.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: BROUGHT TO YOU BY 4BIZ INTERNATIONAL
        ====================================================================== */}
        <section
          id="demo"
          aria-labelledby="demo-heading"
          className="cv-auto scroll-mt-24 relative overflow-hidden py-20 sm:py-28 border-t border-white/[0.06]"
        >
          <TailedStars stars={DEMO_STARS} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <div className="lg:col-span-7 flex flex-col gap-7 min-w-0">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-cyan-400" />
                  <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase">
                    End-to-End UAE Delivery
                  </span>
                </div>

                <h2
                  id="demo-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]"
                >
                  Brought to you by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    4Biz International.
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  IT solutions and digital transformation company, Dubai. We handle everything
                  from Business Central deployment to Peppol onboarding and ongoing UAE regulatory
                  support.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Implementation",
                    "Peppol Integration",
                    "Compliance",
                    "Training",
                    "Support",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-cyan-400/25 text-cyan-200 text-xs sm:text-sm font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-blue-900/45 via-[#071330]/90 to-cyan-900/35 border border-cyan-400/30 shadow-[0_20px_60px_rgba(6,182,212,0.18)] overflow-hidden">
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                      Live Walkthrough
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      Book your demo
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl">
                      See 4Biz e-Invoicing running live inside Microsoft Dynamics 365 Business
                      Central with real UAE PINT AE &amp; Peppol workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                      <a
                        href="tel:+971527925100"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all touch-manipulation"
                      >
                        <Phone className="w-4 h-4 text-cyan-300" />
                        <span>+971 52 792 5100</span>
                      </a>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-cyan-300 hover:text-white border border-cyan-400/35 hover:bg-cyan-500/15 transition-all touch-manipulation"
                      >
                        <span>Request Online Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] group">
                  <div
                    className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-500/25 blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] w-full rounded-[1.75rem] p-2 bg-gradient-to-b from-white/20 via-white/5 to-cyan-500/25 shadow-[0_25px_70px_rgba(0,150,255,0.25)]">
                    <div className="relative w-full h-full overflow-hidden rounded-[1.35rem] bg-[#040b1e]">
                      <Image
                        src="/products/4biz-invoicing-4.webp"
                        alt="Brought to you by 4Biz International — IT solutions and digital transformation company, Dubai"
                        width={2160}
                        height={2700}
                        loading="lazy"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 440px, 480px"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: FAQ ACCORDION
        ====================================================================== */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="cv-auto scroll-mt-24 relative overflow-hidden py-20 sm:py-28 border-t border-white/[0.06]"
        >
          <TailedStars stars={FAQ_STARS} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase block mb-3">
                Frequently Asked Questions
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                UAE e-Invoicing &amp; Business Central{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Explained.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl bg-white/[0.03] border border-white/10 open:border-cyan-400/40 open:bg-white/[0.05] transition-all duration-300"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none font-bold text-base sm:text-lg text-white select-none touch-manipulation">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}