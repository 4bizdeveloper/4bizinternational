import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Contact from '@/components/Contact';

// 1. SERVER & SEARCH ENGINE LEVEL SEO METADATA
// Fully optimized for static export, search indexing, and social graphs.
export const metadata: Metadata = {
  title: 'Contact 4Biz International | IT Consulting Dubai',
  description: 'Get in touch with 4Biz International. Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
  alternates: {
    canonical: 'https://4bizinternational.vercel.app/contact', // Prevents duplicate content issues
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Contact 4Biz International | IT Consulting Dubai',
    description: 'Get in touch with 4Biz International. Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
    url: 'https://4bizinternational.vercel.app/contact',
    type: 'website',
    siteName: '4Biz International',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact 4Biz International | IT Consulting Dubai',
    description: 'Get in touch with 4Biz International. Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
  },
};

export default function ContactPage() {
  // 2. STATIC EXPORT FRIENDLY STRUCTURED DATA (JSON-LD Schema)
  // Injected directly into the HTML to help Google understand your business entity instantly.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': '4Biz International',
      'url': 'https://4bizinternational.vercel.app',
      'logo': 'https://4bizinternational.vercel.app/logo.png', // Fallback placeholder, update if needed
      'description': 'Global provider for IT consulting, software development, digital marketing & cyber security services.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '', // Add your phone number here if available
        'contactType': 'customer service',
        'areaServed': 'Global',
        'availableLanguage': ['en', 'ar']
      }
    }
  };

  return (
    <>
      {/* Injecting Schema for SEO Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Layout View Container */}
      <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#0b2154_0%,_#051133_50%,_#030a21_100%)] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="relative relative-hero min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center pt-40 sm:pt-44 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">

          {/* Hero Core Content Wrapper */}
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">

            {/* Title - Strict text containment prevents overflow cut-offs */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] pb-4 break-words px-2">
              Let’s Build Your Next Modern Business Milestone
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal px-4 block">
              Partner with 4Biz International. Whether scaling operations cross-border or initiating structural innovation, our expert consulting team is standing by to assist you.
            </p>

          </div>
        </section>

        {/* IMPORTED CONTACT SECTION */}
        <section className="relative z-10 w-full bg-transparent">
          <Contact />
        </section>

      </div>
    </>
  );
}