import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiMapPinLine, RiBriefcaseLine, RiTimeLine,
  RiCheckboxCircleLine, RiArrowRightLine,
  RiFileList3Line, RiAwardLine, RiMailLine, RiPhoneLine, RiStarLine
} from 'react-icons/ri';

/* ============================================================
   SEO / AEO / GEO METADATA
============================================================ */
export const metadata: Metadata = {
  title: 'Digital Marketer Jobs in Kozhikode | 4Biz Careers',
  description:
    'Join 4Biz International as a Digital Marketer (Fresher) in Kozhikode, Kerala. Hands-on experience in SEO, Google Ads, Meta Ads & content marketing. Apply today.',
  keywords: [
    'Digital Marketing jobs Kozhikode', 'Digital Marketer Fresher Kerala', 'SEO jobs Calicut',
    'Google Ads jobs India', 'Social Media Marketing careers', '4Biz International careers',
    'Content Marketing jobs UAE', 'Digital Marketing Internship Kozhikode',
  ],
  alternates: { canonical: 'https://www.4bizinternational.com/careers/' },
  openGraph: {
    title: 'Digital Marketer (Fresher) — Kozhikode | 4Biz International Careers',
    description:
      'We are hiring a Digital Marketer (Fresher / 0-1 Year) in Kozhikode. Hands-on experience in SEO, Ads & Social Media. Apply now.',
    url: 'https://www.4bizinternational.com/careers/',
    type: 'website',
    siteName: '4Biz International',
    images: [{ url: '/4biz_logo-1.png', width: 1200, height: 630, alt: '4Biz Careers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketer (Fresher) — Kozhikode | 4Biz Careers',
    description: 'We are hiring a Digital Marketer (Fresher) in Kozhikode. 0-1 year experience in SEO & Ads.',
    images: ['/4biz_logo-1.png'],
  },
  robots: { index: true, follow: true },
};

/* ============================================================
   STRUCTURED DATA
============================================================ */
const TODAY_ISO = new Date().toISOString().split('T')[0];

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Digital Marketer (Fresher / 0–1 Year Experience)',
  description:
    '4 Biz International is hiring a Digital Marketer who is enthusiastic, creative, and eager to build a career in digital marketing. This role is ideal for fresh graduates or early-career professionals looking for hands-on experience across SEO, AEO, content marketing, paid advertising, and social media platforms.',
  identifier: { '@type': 'PropertyValue', name: '4Biz International', value: 'MKT-DM-001' },
  datePosted: TODAY_ISO,
  validThrough: '2027-12-31',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: '4Biz International LLC',
    sameAs: 'https://www.4bizinternational.com',
    logo: 'https://www.4bizinternational.com/4biz_logo-1.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HiLITE Business Park',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: { '@type': 'QuantitativeValue', unitText: 'MONTH', value: 'Competitive' },
  },
  qualifications:
    'Fresher or 0–1 year experience in Digital Marketing. Knowledge of SEO & AEO fundamentals. Good understanding of content writing and copywriting. Basic knowledge of Google Ads & Meta Ads. Familiarity with social media platforms. Educational background in Marketing, Business, Mass Communication, or related field.',
  responsibilities:
    'Assist in planning and executing SEO & AEO strategies. Create engaging content for blogs, ads, and social media. Support and manage Google Ads & Meta Ads campaigns. Handle social media accounts. Conduct keyword research and basic performance analysis. Monitor campaign results and prepare basic reports.',
  skills:
    'SEO, AEO, Content Writing, Copywriting, Google Ads, Meta Ads, Social Media Management, Google Analytics, Search Console',
  industry: 'Information Technology / Digital Marketing',
  occupationalCategory: '11-2021.00 - Marketing Managers',
  directApply: true,
  applicantLocationRequirements: { '@type': 'Country', name: 'India' },
  jobBenefits: 'Hands-on learning with real-time projects, exposure to multiple digital marketing channels, supportive work environment, strong career growth.',
  workHours: 'Full-time',
  inLanguage: 'en',
};

/* ============================================================
   DATA CONSTANTS
============================================================ */
const RESPONSIBILITIES = [
  'Assist in planning and executing SEO & AEO strategies.',
  'Create engaging content for blogs, ads, and social media platforms.',
  'Support and manage Google Ads & Meta Ads campaigns.',
  'Handle social media accounts, posting schedules, and audience engagement.',
  'Conduct keyword research and basic performance analysis.',
  'Monitor campaign results and prepare basic reports.',
  'Stay updated with digital marketing trends and best practices.',
  'Collaborate with design, development, and marketing teams.',
];

const QUALIFICATIONS = [
  'Fresher or 0–1 year experience in Digital Marketing.',
  'Knowledge of SEO & AEO fundamentals.',
  'Good understanding of content writing and copywriting.',
  'Basic knowledge of Google Ads & Meta Ads.',
  'Familiarity with social media platforms (Instagram, Facebook, LinkedIn, etc.).',
  'Strong communication skills (written & verbal).',
  'Creative mindset with analytical thinking.',
  'Educational background in Marketing, Business, Mass Communication, or a related field.',
];

const NICE_TO_HAVE = [
  'Internship or certification in Digital Marketing.',
  'Hands-on experience through projects or freelancing.',
  'Basic knowledge of analytics tools (Google Analytics, Search Console).',
  'Strong desire to learn and adapt to new marketing technologies.',
];

/* ============================================================
   COMPONENT
============================================================ */
export default function CareersLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-[#00D3F2] selection:text-black">

        {/* ============================================================
            HERO SECTION
        ============================================================ */}
        <section
          aria-labelledby="job-title"
          className="relative w-full isolate overflow-hidden border-b border-[#00D3F2]/20 pt-24 pb-14 sm:pt-32 sm:pb-20"
          style={{
            background: 'radial-gradient(circle at 50% 30%, #143373 0%, #0a1c4a 45%, #06122e 100%)',
          }}
        >
          {/* Background image layer */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/blog/digital-marketing-1.png"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="100vw"
              quality={75}
              className="object-cover object-center opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06122e]/60 via-[#0a1c4a]/25 to-[#06122e]/80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D3F2]/40 bg-[#00D3F2]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00D3F2] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D3F2] motion-safe:animate-pulse" aria-hidden="true" />
              Hiring: Digital Marketer
            </div>

            <h1
              id="job-title"
              className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Digital Marketer (Fresher / 0–1 Year Experience)
            </h1>

            {/* Quick Facts Bar */}
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-2 border border-slate-700/60 backdrop-blur-md">
                <RiMapPinLine className="text-[#00D3F2]" />
                <span className="text-sm font-medium text-slate-200">Kozhikode (Calicut), Kerala</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-2 border border-slate-700/60 backdrop-blur-md">
                <RiBriefcaseLine className="text-[#00D3F2]" />
                <span className="text-sm font-medium text-slate-200">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-2 border border-slate-700/60 backdrop-blur-md">
                <RiTimeLine className="text-[#00D3F2]" />
                <span className="text-sm font-medium text-slate-200">0–1 Year Exp</span>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/careers/apply"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#00D3F2] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-[#00D3F2]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[#00D3F2]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D3F2] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Apply Now
                <RiArrowRightLine className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            UNIFIED CONTENT SECTION (Job Details + Final CTA)
        ============================================================ */}
        <section className="relative w-full bg-gradient-to-br from-[#0c2d6b] via-[#0a2256] to-[#071b44]">
          
          {/* Job Details Content */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16">
            
            {/* About the Role */}
            <div className="mb-12">
              <h2 className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white drop-shadow-md">
                About the Role
              </h2>
              <p className="max-w-4xl text-base leading-relaxed text-blue-50/90 drop-shadow-sm">
                4 Biz International is hiring a Digital Marketer who is enthusiastic, creative, and eager to build a career in digital marketing. This role is ideal for fresh graduates or early-career professionals looking for hands-on experience across SEO, AEO, content marketing, paid advertising, and social media platforms. You will work closely with our marketing and design teams to plan, execute, and optimize digital campaigns while gaining exposure to real-world projects and performance-driven strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              
              {/* Key Responsibilities */}
              <div className="rounded-2xl border border-[#00D3F2]/30 bg-[#07193c]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
                <div className="mb-5 flex items-center gap-3 border-b border-blue-400/20 pb-4">
                  <RiFileList3Line className="shrink-0 text-2xl text-[#00D3F2] drop-shadow-[0_0_8px_rgba(0,211,242,0.6)]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white">
                    Key Responsibilities
                  </h3>
                </div>
                <ul className="space-y-3">
                  {RESPONSIBILITIES.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-blue-100/90">
                      <RiCheckboxCircleLine className="mt-0.5 shrink-0 text-[#00D3F2] text-lg drop-shadow-[0_0_5px_rgba(0,211,242,0.5)]" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Skills & Qualifications */}
              <div className="rounded-2xl border border-[#00D3F2]/30 bg-[#07193c]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
                <div className="mb-5 flex items-center gap-3 border-b border-blue-400/20 pb-4">
                  <RiAwardLine className="shrink-0 text-2xl text-[#00D3F2] drop-shadow-[0_0_8px_rgba(0,211,242,0.6)]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white">
                    Required Skills & Qualifications
                  </h3>
                </div>
                <ul className="space-y-3">
                  {QUALIFICATIONS.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-blue-100/90">
                      <RiCheckboxCircleLine className="mt-0.5 shrink-0 text-[#00D3F2] text-lg drop-shadow-[0_0_5px_rgba(0,211,242,0.5)]" aria-hidden="true" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nice to Have */}
            <div className="mt-8 rounded-2xl border border-[#00D3F2]/30 bg-[#07193c]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <div className="mb-4 flex items-center gap-3 border-b border-blue-400/20 pb-4">
                <RiStarLine className="shrink-0 text-2xl text-[#00D3F2] drop-shadow-[0_0_8px_rgba(0,211,242,0.6)]" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white">
                  Nice to Have
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NICE_TO_HAVE.map((n, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-blue-100/90">
                    <RiCheckboxCircleLine className="mt-0.5 shrink-0 text-[#00D3F2] text-lg drop-shadow-[0_0_5px_rgba(0,211,242,0.5)]" aria-hidden="true" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Final CTA Content */}
          <div className="relative overflow-hidden py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,211,242,0.15),transparent_60%)]" />
            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
              <h2
                id="cta-title"
                className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-black tracking-tight text-white drop-shadow-md"
              >
                Interested candidates can apply now
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-blue-100/90">
                Send your CV & portfolio to our hiring team. We review applications on a rolling basis.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/careers/apply"
                  className="group inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#00D3F2] px-8 py-4 text-sm font-black uppercase tracking-wider text-slate-950 shadow-2xl shadow-[#00D3F2]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[#00D3F2]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D3F2] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Apply for This Role
                  <RiArrowRightLine className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              {/* Contact info - dot removed */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 text-base font-medium text-blue-100 sm:flex-row sm:gap-6">
                <a
                  href="mailto:hr@4bizinternational.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#00D3F2]"
                >
                  <RiMailLine className="text-[#00D3F2]" aria-hidden="true" />
                  hr@4bizinternational.com
                </a>
                <a
                  href="tel:+971527925100"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#00D3F2]"
                >
                  <RiPhoneLine className="text-[#00D3F2]" aria-hidden="true" />
                  +971 52 792 5100
                </a>
              </div>
            </div>
          </div>

        </section>

      </div>
    </>
  );
}