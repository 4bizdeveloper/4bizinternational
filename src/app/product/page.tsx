import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileSpreadsheet,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.4bizinternational.com";
const PAGE_URL = `${SITE_URL}/product`;

export const metadata: Metadata = {
  title: "Enterprise Software Products & Business Solutions | 4Biz International",
  description:
    "Explore enterprise software products engineered by 4Biz International. Discover 4Biz Invoicing—our cloud billing, automated tax compliance, and multi-currency invoicing platform built for growing businesses in the UAE and globally.",
  keywords: [
    "4Biz International products",
    "4Biz Invoicing",
    "cloud invoicing software UAE",
    "enterprise billing software Dubai",
    "VAT compliant invoicing software",
    "automated billing and accounting software",
    "B2B SaaS products UAE",
  ],
  alternates: {
    canonical: PAGE_URL,
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
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "4Biz International",
    title: "Enterprise Software Products & Cloud Solutions | 4Biz International",
    description:
      "Purpose-built business software by 4Biz International. Streamline billing, tax compliance, and financial operations with 4Biz Invoicing.",
    images: [
      {
        url: `${SITE_URL}/products/4biz-invoicing-1.webp`,
        width: 2160,
        height: 2700,
        alt: "4Biz Invoicing Cloud Billing and Tax Compliance Software Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Products | 4Biz International",
    description:
      "Purpose-built business software by 4Biz International. Explore 4Biz Invoicing for automated cloud billing and VAT compliance.",
    images: [`${SITE_URL}/products/4biz-invoicing-1.webp`],
  },
};

interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  summary: string;
  image: string;
  imageAlt: string;
  aspectRatioClass: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  href: string;
}

/**
 * Scalable Product Catalog
 * Add future 4Biz International products to this array to automatically
 * populate the responsive catalog grid and JSON-LD ItemList schema.
 */
const PRODUCTS: ProductItem[] = [
  {
    id: "4biz-invoicing",
    slug: "invoicing",
    name: "4Biz Invoicing",
    tagline: "Automated Cloud Billing, Tax Compliance & Cash-Flow Intelligence",
    category: "Finance & Billing SaaS",
    status: "Flagship Release",
    summary:
      "4Biz Invoicing replaces manual spreadsheets and fragmented billing tools with a unified cloud invoicing engine. Generate VAT-ready invoices in seconds, automate recurring billing schedules, track real-time receivables, and accelerate client collections across desktop and mobile devices.",
    image: "/products/4biz-invoicing-1.webp",
    imageAlt:
      "4Biz Invoicing cloud billing dashboard displaying automated tax invoices, payment tracking, and financial analytics",
    aspectRatioClass: "aspect-[4/5]",
    highlights: [
      "Instant VAT & multi-currency invoice generation with branded templates",
      "Automated recurring billing cycles & smart payment reminder workflows",
      "Real-time aging reports, cash-flow tracking & export-ready ledgers",
      "Role-based team access with enterprise cloud encryption & audit trails",
    ],
    metrics: [
      { label: "Setup Time", value: "< 5 Mins" },
      { label: "Tax Compliance", value: "UAE & Global VAT" },
      { label: "Availability", value: "99.9% Cloud SLA" },
    ],
    href: "/product/invoicing",
  },
];

const FAQS = [
  {
    question: "What software products does 4Biz International offer?",
    answer:
      "4Biz International develops cloud-native business software engineered for operational efficiency. Our flagship release is 4Biz Invoicing—a comprehensive cloud billing, automated tax compliance, and receivables management platform—with additional ERP, CRM, and workflow automation modules scheduled for upcoming releases.",
  },
  {
    question: "Is 4Biz Invoicing compliant with UAE VAT and international tax standards?",
    answer:
      "Yes. 4Biz Invoicing natively supports UAE Federal Tax Authority (FTA) VAT formatting, TRN validation, automated tax calculations, credit notes, and multi-currency billing for organizations operating across the GCC and international markets.",
  },
  {
    question: "Can 4Biz products integrate with our existing ERP or accounting tools?",
    answer:
      "Yes. All 4Biz software products are architected with clean REST APIs and structured data exports (CSV, Excel, and PDF), allowing seamless synchronization with existing accounting systems, payment gateways, and enterprise resource planning platforms.",
  },
  {
    question: "How can businesses request a personalized demo or custom deployment?",
    answer:
      "You can explore full specifications on the 4Biz Invoicing product page or connect directly with our solutions engineering team via the Contact page for a tailored walkthrough, volume licensing, or custom enterprise onboarding.",
  },
];

export default function ProductsListingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Enterprise Software Products & Business Solutions | 4Biz International",
        description:
          "Official product catalog of 4Biz International featuring cloud-native business software including 4Biz Invoicing.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#itemlist`,
        name: "4Biz International Software Products",
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}${product.href}`,
          name: product.name,
          item: {
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Cloud, iOS, Android",
            description: product.summary,
            url: `${SITE_URL}${product.href}`,
            image: `${SITE_URL}${product.image}`,
            publisher: {
              "@type": "Organization",
              name: "4Biz International LLC",
              url: SITE_URL,
            },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main
      id="main-content"
      className="relative min-h-screen w-full overflow-x-clip text-white antialiased selection:bg-[#00D2F1] selection:text-[#04091a]"
      style={{
        background:
          "linear-gradient(135deg, #0b1e54 0%, #0d2769 48%, #0a3473 100%)",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Structured Data for Search Engines, Answer Engines (AEO), and Generative AI (GEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle architectural grid lines matching the site's visual language */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 44px, rgba(255,255,255,0.03) 44px, rgba(255,255,255,0.03) 45px), repeating-linear-gradient(35deg, transparent, transparent 64px, rgba(0,210,241,0.025) 64px, rgba(0,210,241,0.025) 65px)",
        }}
      />

      {/* Balanced Ambient Glow across the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[380px] w-[min(92vw,960px)] rounded-full bg-[#1d4ed8]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-40 -translate-x-1/2 h-[360px] w-[min(92vw,960px)] rounded-full bg-[#0e3a8a]/25 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 md:px-8 lg:px-12 lg:pt-36 lg:pb-28">
        {/* Centered Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex w-full items-center justify-center"
        >
          <ol className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs sm:text-sm text-slate-100 backdrop-blur-md">
            <li>
              <Link
                href="/"
                className="font-medium text-slate-100 transition-colors hover:text-[#00D2F1] focus:outline-none focus-visible:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-300">
              /
            </li>
            <li aria-current="page" className="font-semibold text-[#00D2F1]">
              Products
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00D2F1]/40 bg-[#00D2F1]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7ceeff]">
            <Sparkles className="h-3.5 w-3.5 text-[#00D2F1]" aria-hidden="true" />
            <span>4Biz Software Suite</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.12]">
            Purpose-Built Software for{" "}
            <span className="bg-gradient-to-r from-[#00D2F1] via-[#7ceeff] to-white bg-clip-text text-transparent">
              Modern Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg md:text-xl font-normal">
            Explore cloud-native applications engineered by 4Biz International to
            eliminate operational bottlenecks, automate compliance, and give
            leadership real-time financial clarity.
          </p>

          {/* Key Platform Pillars */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-[#00D2F1]" aria-hidden="true" />
              <span>Instant Cloud Deployment</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#00D2F1]" aria-hidden="true" />
              <span>Enterprise-Grade Security</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <Globe className="h-4 w-4 text-[#00D2F1]" aria-hidden="true" />
              <span>UAE & Global Tax Ready</span>
            </span>
          </div>
        </header>

        {/* Product Listing Showcase Section */}
        <section
          aria-labelledby="product-catalog-heading"
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/15 pb-5">
            <div>
              <h2
                id="product-catalog-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Available Products
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-100">
                Production-ready business applications built and supported by our
                engineering team.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-[#00D2F1]/40 bg-[#00D2F1]/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#7ceeff]">
              <Layers className="h-4 w-4 text-[#00D2F1]" aria-hidden="true" />
              <span>
                Showing {PRODUCTS.length}{" "}
                {PRODUCTS.length === 1 ? "Product" : "Products"}
              </span>
            </div>
          </div>

          {/* Responsive Product Grid — Scales cleanly from 1 featured flagship card to multi-column catalogs */}
          <div
            className={
              PRODUCTS.length === 1
                ? "grid grid-cols-1 gap-8"
                : "grid grid-cols-1 gap-8 lg:grid-cols-2"
            }
          >
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-white text-slate-900 shadow-[0_24px_60px_rgba(6,17,44,0.45)] ring-1 ring-white/90 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                {/* Top subtle cyan accent bar */}
                <div
                  aria-hidden="true"
                  className="h-1.5 w-full bg-gradient-to-r from-[#09153d] via-[#0284c7] to-[#00D2F1]"
                />

                <div
                  className={
                    PRODUCTS.length === 1
                      ? "grid grid-cols-1 lg:grid-cols-12 items-stretch"
                      : "flex flex-col h-full"
                  }
                >
                  {/* Visual Preview Column */}
                  <div
                    className={
                      PRODUCTS.length === 1
                        ? "relative lg:col-span-6 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200/80 p-5 sm:p-8 flex flex-col justify-between"
                        : "relative bg-slate-50 border-b border-slate-200/80 p-5 sm:p-6"
                    }
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-900 ring-1 ring-sky-200">
                        <FileSpreadsheet
                          className="h-3.5 w-3.5 text-sky-700"
                          aria-hidden="true"
                        />
                        {product.category}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900 ring-1 ring-emerald-200">
                        {product.status}
                      </span>
                    </div>

                    <Link
                      href={product.href}
                      aria-label={`Explore ${product.name}`}
                      className={`relative mx-auto block w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ${product.aspectRatioClass}`}
                    >
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </Link>

                    {/* Quick Specification Strip */}
                    <dl className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-slate-200/80">
                      {product.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl bg-white p-2.5 sm:p-3 text-center ring-1 ring-slate-200/80"
                        >
                          <dt className="text-[11px] sm:text-xs font-medium text-slate-600">
                            {metric.label}
                          </dt>
                          <dd className="mt-0.5 text-xs sm:text-sm font-extrabold text-[#09153d]">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Product Details Column — High Contrast Typography for Effortless Readability */}
                  <div
                    className={
                      PRODUCTS.length === 1
                        ? "lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white"
                        : "p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white"
                    }
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09153d]">
                        <Link
                          href={product.href}
                          className="text-[#09153d] transition-colors hover:text-[#0c2769] focus:outline-none focus-visible:underline"
                        >
                          {product.name}
                        </Link>
                      </h3>

                      <p className="mt-1.5 text-sm sm:text-base font-semibold text-sky-800">
                        {product.tagline}
                      </p>

                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                        {product.summary}
                      </p>

                      <ul
                        aria-label={`${product.name} key capabilities`}
                        className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5"
                      >
                        {product.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-snug text-slate-800 font-medium"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-sky-700"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#09153d] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-slate-900/15 transition-colors duration-200 hover:bg-[#0e2a80] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                      >
                        <span>Explore {product.name}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-bold text-[#09153d] transition-colors duration-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                      >
                        Request a Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Future Roadmap Banner (Sets clear expectations without cluttering the catalog) */}
        <section
          aria-labelledby="roadmap-heading"
          className="mt-14 sm:mt-16 rounded-[1.75rem] border border-[#00D2F1]/35 bg-white/[0.06] p-6 sm:p-8 md:p-10 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00D2F1]">
                Expanding Product Ecosystem
              </p>
              <h2
                id="roadmap-heading"
                className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white"
              >
                More Enterprise Modules in Active Development
              </h2>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-100">
                4Biz International is continuously expanding its cloud suite
                across ERP operations, customer relationship management, and
                AI-powered business workflows. Need a tailored enterprise
                solution right now? Our engineering team builds custom platforms
                to fit your exact workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Explore Custom Services</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D2F1] px-6 py-3 text-sm sm:text-base font-bold text-[#04091a] transition-colors hover:bg-[#5ce5fa]"
              >
                <span>Talk to Solutions Team</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* AEO & GEO Optimized FAQ Section using Native Zero-JS HTML Accordions */}
        <section
          aria-labelledby="products-faq-heading"
          className="mt-16 sm:mt-20 mx-auto max-w-4xl"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="products-faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-100">
              Direct answers about 4Biz International software products,
              compliance, and deployment.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm transition-colors hover:border-[#00D2F1]/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base sm:text-lg font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-[#00D2F1] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3.5 border-t border-white/15 pt-3.5 text-sm sm:text-base leading-relaxed text-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}