import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL =
  "https://www.4bizinternational.com/blog/website-design-seo-user-experience-uae/";
const PUBLISHED_DATE = "2026-11-12";
const HERO_IMAGE =
  "/blog/how-websitedesign-effect-seo-1.webp";

export const metadata: Metadata = {
  title: "Website Design and SEO: How Design Affects Rankings | 4Biz",
  description:
    "Does website design affect SEO? See how mobile layout, speed, structure, and navigation shape rankings and user experience. By 4Biz International.",
  robots: "index, follow",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Website Design and SEO: How Design Affects Rankings | 4Biz",
    description:
      "Does website design affect SEO? See how mobile layout, speed, structure, and navigation shape rankings and user experience. By 4Biz International.",
    url: PAGE_URL,
    siteName: "4Biz International LLC",
    type: "article",
    publishedTime: PUBLISHED_DATE,
    authors: ["https://www.4bizinternational.com/"],
    images: [
      {
        url: HERO_IMAGE,
        width: 1920,
        height: 1080,
        alt: "Website design and SEO analytics on a modern laptop screen",
      },
    ],
  },
};

export default function WebsiteDesignSeoUserExperiencePage() {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Does Website Design Affect SEO and User Experience?",
    description:
      "Does website design affect SEO? See how mobile layout, speed, structure, and navigation shape rankings and user experience. By 4Biz International.",
    image: HERO_IMAGE,
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: {
      "@type": "Organization",
      name: "4Biz International LLC",
      url: "https://www.4bizinternational.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "4Biz International LLC",
      url: "https://www.4bizinternational.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "1. Does website design affect SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design and development decide mobile usability, loading speed, site structure, and page layout, all of which search engines take into account when crawling and ranking a site.",
        },
      },
      {
        "@type": "Question",
        name: "2. What is the most important design factor for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single factor, but mobile-friendliness and loading speed are among the most important, because search engines index the mobile version first and slow pages frustrate visitors.",
        },
      },
      {
        "@type": "Question",
        name: "3. How fast should my website load?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As fast as reasonably possible. Use Google PageSpeed Insights and the Core Web Vitals report to see how your pages perform and what to improve.",
        },
      },
      {
        "@type": "Question",
        name: "4. Will redesigning my website hurt my rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can, if old pages are removed or URLs change without redirects. A careful redesign keeps important pages, redirects old URLs to new ones, and checks for errors after launch.",
        },
      },
      {
        "@type": "Question",
        name: "5. How does user experience affect SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search engines aim to send people to pages that satisfy them. Sites that are fast, clear, and easy to use tend to keep visitors engaged, which aligns with what search engines reward.",
        },
      },
      {
        "@type": "Question",
        name: "6. Is accessibility part of SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many accessibility practices, such as alt text, clear headings, and logical structure, also help search engines understand a page, so the two overlap.",
        },
      },
      {
        "@type": "Question",
        name: "7. Can 4Biz International review my current website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 4Biz International can review your site's speed, mobile experience, structure, and SEO foundations, and recommend what to fix first. Contact us to discuss your website.",
        },
      },
    ],
  };

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
        name: "How Does Website Design Affect SEO and User Experience?",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div
      className="min-h-screen text-slate-100 antialiased selection:bg-cyan-400 selection:text-slate-950"
      style={{
        background:
          "linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)",
      }}
    >
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Full-Width Hero Section */}
      <header className="relative w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-14 sm:pb-18 md:pb-20 border-b border-white/10">
        <Image
          src={HERO_IMAGE}
          alt="Website design and SEO analytics on a modern laptop screen"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06112c]/90 via-[#0c1b40]/80 to-[#08306b]/70 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 break-words leading-relaxed text-xs sm:text-sm text-slate-300">
              <li>
                <Link
                  href="https://www.4bizinternational.com/"
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li>
                <Link
                  href="https://www.4bizinternational.com/blog/"
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li
                aria-current="page"
                className="text-cyan-300 font-medium break-words"
              >
                How Does Website Design Affect SEO and User Experience?
              </li>
            </ol>
          </nav>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            How Does Website Design Affect SEO and User Experience?
          </h1>

          {/* Author & Publish Date Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-200 border-t border-white/15 pt-4">
            <div>
              <span className="text-slate-300">By </span>
              <a
                href="https://www.4bizinternational.com/"
                className="font-semibold text-cyan-300 hover:underline"
              >
                4Biz International LLC
              </a>
            </div>
            <span aria-hidden="true" className="text-slate-400">
              •
            </span>
            <time dateTime={PUBLISHED_DATE} className="text-slate-200">
              Published: November 12, 2026
            </time>
          </div>
        </div>
      </header>

      {/* Main Single-Column Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
        {/* Quick Answer & Intro */}
        <section className="space-y-6">
          <div className="rounded-2xl bg-white/[0.06] border border-cyan-400/30 p-6 sm:p-8 shadow-lg">
            <p className="text-base sm:text-lg leading-relaxed text-slate-100">
              <strong className="text-cyan-300 font-semibold">
                Quick answer:
              </strong>{" "}
              Website design affects SEO because search engines judge how easily
              a site can be crawled, how fast it loads, and how well it works on
              a phone, and all of these are set by design and build choices. It
              affects user experience because layout, navigation, and visual
              clarity decide whether visitors find what they need and act on it.
              Good design supports both at once: a fast, mobile-friendly,
              clearly structured site ranks more reliably and turns more
              visitors into enquiries.
            </p>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            Many businesses invest in content and backlinks, then wonder why
            rankings stall. Often the cause sits in the website itself: slow
            pages, confusing menus, or a layout that breaks on a phone. At 4Biz
            International, we see this regularly with businesses across UAE, so
            this guide explains how design connects to SEO and user experience,
            in the order people usually ask about it.
          </p>
        </section>

        {/* Row 1: Text on Left, Image on Right */}
        <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Does Website Design Really Affect SEO?
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Yes. Search engines do not only read your words. They also measure
              how your pages behave: how quickly they load, whether they work on
              mobile, and whether the site is organized clearly enough to be
              understood. Design and development decisions shape every one of
              these signals.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Why Is My Website Not Ranking Even With Good Content?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Strong content can be held back by technical and design
                problems, such as pages that load slowly, a layout that fails on
                phones, hidden or tangled navigation, or pages search engines
                struggle to reach. A design review often finds these quickly.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Is the Link Between SEO and User Experience?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Search engines aim to send people to pages that satisfy them. A
                site that is quick, readable, and easy to move around in
                satisfies visitors, and those same qualities line up with what
                search engines look for. The two goals support each other.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/blog/how-websitedesign-effect-seo-1.webp"
                alt="Search engine optimization performance metrics and user engagement charts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Row 2: Image on Left, Text on Right */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-10">
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              How Does Mobile-Friendly Design Affect SEO?
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Google primarily uses the mobile version of a page when it indexes
              and ranks a site, which is known as mobile-first indexing. If your
              mobile layout is weaker than your desktop one, your rankings can
              reflect the weaker version.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Makes a Website Truly Mobile-Friendly?
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-200">
                <li>A layout that adjusts to any screen size</li>
                <li>Text that can be read without zooming</li>
                <li>Buttons and links spaced so a thumb can tap them</li>
                <li>Forms that are short and easy to complete on a phone</li>
                <li>Menus that open and close cleanly on small screens</li>
                <li>The same important content on mobile as on desktop</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                How Do I Check If My Site Works on Mobile?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Open it on a real phone, try the main journey a customer would
                take, such as finding a service and sending an enquiry, and note
                anything that is awkward. Google&apos;s free tools also report
                mobile usability problems.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/blog/how-websitedesign-effect-seo-2.webp"
                alt="Responsive mobile website interface displayed on a smartphone"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Speed & Core Web Vitals */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Does Website Speed Affect SEO and Users?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            Loading speed is part of what Google calls page experience. It also
            shapes how visitors feel in their first few seconds. A page that
            takes too long makes people leave before they read anything.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
              What Are Core Web Vitals?
            </h3>
            <p className="text-base leading-relaxed text-slate-200">
              Core Web Vitals are Google&apos;s measures of real-world page
              experience:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/15 bg-white/[0.04]">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-white/15 bg-white/[0.06] text-cyan-300 text-sm sm:text-base">
                    <th className="py-3.5 px-4 font-semibold">Measure</th>
                    <th className="py-3.5 px-4 font-semibold">
                      What It Tracks
                    </th>
                    <th className="py-3.5 px-4 font-semibold">
                      What a Visitor Notices
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm sm:text-base text-slate-200">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">
                      Largest Contentful Paint (LCP)
                    </td>
                    <td className="py-3.5 px-4">
                      How quickly the main content appears
                    </td>
                    <td className="py-3.5 px-4">
                      The page feels fast or slow to load
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">
                      Interaction to Next Paint (INP)
                    </td>
                    <td className="py-3.5 px-4">
                      How quickly the page responds to taps and clicks
                    </td>
                    <td className="py-3.5 px-4">
                      Buttons respond right away or lag
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">
                      Cumulative Layout Shift (CLS)
                    </td>
                    <td className="py-3.5 px-4">
                      How much the layout jumps while loading
                    </td>
                    <td className="py-3.5 px-4">
                      Content stays put or moves unexpectedly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Slows a Website Down?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-slate-200">
                <li>Large, uncompressed images and video</li>
                <li>Heavy scripts and unused code</li>
                <li>Too many plug-ins or third-party widgets</li>
                <li>Slow or overloaded hosting</li>
                <li>No caching or content delivery network</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                How Can Design Improve Speed?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Designing with fewer heavy elements, compressing images, using
                modern image formats, loading media only when needed, and
                choosing reliable hosting all help pages appear faster without
                making the site look plain.
              </p>
            </div>
          </div>
        </section>

        {/* Row 3: Text on Left, Image on Right */}
        <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              How Does Site Structure and URL Design Affect SEO?
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Search engines follow links to discover pages. A clear structure
              helps them find and understand everything, and helps visitors know
              where they are.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Does a Good Site Structure Look Like?
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-200">
                <li>
                  Main sections that match what customers look for, such as
                  services, about, and contact
                </li>
                <li>Related pages grouped under the right section</li>
                <li>
                  Important pages reachable in a few clicks from the homepage
                </li>
                <li>Internal links that connect related pages and posts</li>
                <li>An up-to-date sitemap submitted to search engines</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Makes a Good URL?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                A good URL is short, readable, and describes the page, for
                example{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 text-sm">
                  /services/web-design
                </code>
                . Avoid long strings of numbers, random codes, and duplicate
                versions of the same page.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Why Do Headings and Page Layout Matter?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Headings (H1, H2, H3) tell search engines and readers how a page
                is organized. One clear H1 and logical sub-headings make content
                easier to scan and easier for search engines and AI tools to
                understand and quote.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/blog/how-websitedesign-effect-seo-3.webp"
                alt="Clean UI UX wireframe layout and structured website architecture planning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Images and Media */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Do Images and Media Affect SEO?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            Visuals make a site engaging, but unmanaged media is a common cause
            of slow pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                How Should Images Be Prepared?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-slate-200">
                <li>Resize them to the size they are actually displayed</li>
                <li>Compress them without visible loss of quality</li>
                <li>Use efficient formats such as WebP</li>
                <li>Give files descriptive names</li>
                <li>
                  Add short alt text describing each image, which also helps
                  screen reader users
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What About Video?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Host large videos on a dedicated platform and embed them,
                instead of loading heavy files directly from your own server.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Does Navigation Affect User Experience?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            If visitors cannot find what they came for, they leave. Navigation
            is the clearest test of whether a site was designed around its
            users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Makes Website Navigation Easy to Use?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-slate-200">
                <li>A short main menu with clear labels</li>
                <li>Names that match how customers describe your services</li>
                <li>
                  The most important pages, such as services and contact, easy
                  to reach
                </li>
                <li>A search option on larger sites</li>
                <li>Breadcrumbs showing where the visitor is</li>
                <li>A consistent menu on every page</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Should Every Page Be in the Main Menu?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                No. Too many choices overwhelm people. Keep the main menu
                focused and place secondary pages in sub-menus or the footer.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Design & Branding */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Does Visual Design and Branding Affect Trust?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            People judge a site quickly. A consistent, professional appearance
            signals reliability, while mismatched fonts, colors, and styles
            suggest carelessness.
          </p>

          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Is Visual Hierarchy?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Visual hierarchy is how size, color, spacing, and position guide
                the eye to what matters most. A strong hierarchy leads
                visitors from the headline to the benefits to the call to action
                without confusion.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                How Do I Make Calls to Action Work?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-slate-200">
                <li>
                  Give each page one main action, such as &quot;Request a
                  quote&quot; or &quot;Call us&quot;
                </li>
                <li>Make the button stand out from the rest of the page</li>
                <li>Use clear action wording</li>
                <li>Repeat the action where visitors are ready to decide</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Why Does Brand Consistency Matter?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Using the same logo, colors, fonts, and tone across every page
                builds recognition and trust, and makes the experience feel
                intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Does Accessibility Affect SEO and User Experience?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            An accessible site works for people with different abilities and
            devices, including those using screen readers or keyboards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                What Are the Basics of an Accessible Website?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-slate-200">
                <li>Descriptive alt text on images</li>
                <li>Good color contrast between text and background</li>
                <li>Readable font sizes</li>
                <li>Headings in a logical order</li>
                <li>Navigation that works with a keyboard</li>
                <li>Clear labels on form fields</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Does Accessibility Help SEO?
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Many accessibility practices, such as descriptive alt text,
                clear headings, and logical structure, are also good for search
                engines. It also widens the audience who can use your site
                comfortably.
              </p>
            </div>
          </div>
        </section>

        {/* How Do I Check Whether My Website Design Is Hurting SEO? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Do I Check Whether My Website Design Is Hurting SEO?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                1. Test on Mobile
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Walk through the main customer journey on a phone.
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                2. Measure Speed
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Run your key pages through Google PageSpeed Insights and review
                the Core Web Vitals results.
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                3. Review Your Search Console Reports
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Check for indexing issues, mobile usability warnings, and page
                experience problems.
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                4. Look at Your Menu and Structure
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Ask whether a new visitor could find your main services in a
                few seconds.
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                5. Check Images and Headings
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Look for oversized images, missing alt text, and pages with no
                clear H1.
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-cyan-300">
                6. Watch Real Behavior
              </h3>
              <p className="text-base leading-relaxed text-slate-200">
                Use analytics to see where visitors leave and which pages they
                never reach.
              </p>
            </div>
          </div>
        </section>

        {/* What Gets Missed When Businesses Design Websites */}
        <section className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            What Gets Missed When Businesses Design Websites
          </h2>
          <ul className="list-disc pl-5 space-y-2.5 text-base text-slate-200">
            <li>
              Choosing a design for appearance without testing speed or mobile
              behavior
            </li>
            <li>Treating SEO as something added after the site is built</li>
            <li>Large, unoptimized images and video</li>
            <li>
              Menus built around internal company terms instead of customer
              words
            </li>
            <li>Several different calls to action competing on one page</li>
            <li>Missing or duplicated headings and page titles</li>
            <li>Ignoring accessibility until the end</li>
            <li>
              Leaving old pages and broken links after a redesign, which hurts
              rankings
            </li>
            <li>Launching without analytics, so results cannot be measured</li>
          </ul>
        </section>

        {/* How Does 4Biz International Build Websites That Work for SEO and Users? */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            How Does 4Biz International Build Websites That Work for SEO and
            Users?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            4Biz International designs and builds corporate websites, web
            applications, mobile apps, and e-commerce platforms through its{" "}
            <a
              href="https://www.4bizinternational.com/services/web-mobile-commerce-solutions/"
              className="text-cyan-300 underline decoration-cyan-400/60 underline-offset-4 hover:text-white transition-colors font-medium"
            >
              web, mobile, and commerce solutions
            </a>
            , with UI/UX design, responsive builds, CMS development, and API and
            payment integration. We connect this with{" "}
            <a
              href="https://www.4bizinternational.com/services/digital-growth-marketing-brand-experience/"
              className="text-cyan-300 underline decoration-cyan-400/60 underline-offset-4 hover:text-white transition-colors font-medium"
            >
              SEO, AEO, and digital growth services
            </a>{" "}
            so a site is built to be found as well as to be used. We work with
            businesses across Dubai, Abu Dhabi, and the wider UAE, from our
            offices in Dubai and Kerala.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            A website that looks impressive but loads slowly, confuses visitors,
            or cannot be crawled by search engines is working against the
            business. The aim at 4Biz International is a site that looks right,
            loads fast, and is easy for both people and search engines to
            understand.
          </p>
        </section>

        {/* Interactive FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <details
              open
              className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors"
            >
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  1. Does website design affect SEO?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                Yes. Design and development decide mobile usability, loading
                speed, site structure, and page layout, all of which search
                engines take into account when crawling and ranking a site.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  2. What is the most important design factor for SEO?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                There is no single factor, but mobile-friendliness and loading
                speed are among the most important, because search engines
                index the mobile version first and slow pages frustrate
                visitors.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  3. How fast should my website load?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                As fast as reasonably possible. Use Google PageSpeed Insights
                and the Core Web Vitals report to see how your pages perform
                and what to improve.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  4. Will redesigning my website hurt my rankings?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                It can, if old pages are removed or URLs change without
                redirects. A careful redesign keeps important pages, redirects
                old URLs to new ones, and checks for errors after launch.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  5. How does user experience affect SEO?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                Search engines aim to send people to pages that satisfy them.
                Sites that are fast, clear, and easy to use tend to keep
                visitors engaged, which aligns with what search engines reward.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  6. Is accessibility part of SEO?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                Many accessibility practices, such as alt text, clear headings,
                and logical structure, also help search engines understand a
                page, so the two overlap.
              </div>
            </details>

            <details className="group rounded-xl bg-white/[0.05] border border-white/15 open:border-cyan-400/40 transition-colors">
              <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  7. Can 4Biz International review my current website?
                </h4>
                <span className="text-cyan-300 text-xl font-bold shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-200 border-t border-white/10">
                Yes. 4Biz International can review your site&apos;s speed,
                mobile experience, structure, and SEO foundations, and recommend
                what to fix first. Contact us to discuss your website.
              </div>
            </details>
          </div>
        </section>

        {/* Bottom Contact / CTA Box */}
        <section className="rounded-2xl bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 border border-cyan-400/35 p-6 sm:p-10 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Talk to 4Biz International About Your Website
          </h2>
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto">
            Build a website that ranks, loads fast, and turns visitors into
            enquiries.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-slate-200">
            <a
              href="tel:+971527925100"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Phone: +971 52 792 5100
            </a>
            <span>
              Coverage: Dubai, Abu Dhabi, and all UAE Emirates, plus India
              (Kerala)
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}