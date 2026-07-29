import React from 'react';
import { Metadata } from 'next';
import Contact from '@/components/Contact';

// ==========================================
// 1. SERVER & SEARCH ENGINE LEVEL SEO METADATA
// Fully optimized for static export, search indexing, and social graphs.
// ==========================================
export const metadata: Metadata = {
  title: 'Contact 4Biz International | IT Consulting Dubai',
  description: 'Get in touch with 4Biz International. Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/contact/',
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
    url: 'https://www.4bizinternational.com/contact',
    type: 'website',
    siteName: '4Biz International',
    locale: 'en_US',
    // Inherits global layout image fallback explicitly to avoid array-wiping issues
    images: [
      {
        url: "/4biz_logo-1.png",
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Dubai Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact 4Biz International | IT Consulting Dubai',
    description: 'Get in touch with 4Biz International. Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
    images: ["/4biz_logo-1.png"],
  },
};

export default function ContactPage() {
  // ==========================================
  // 2. STATIC EXPORT FRIENDLY STRUCTURED DATA (JSON-LD Schema)
  // Cleanly linked to avoid collisions with root layout graph entities.
  // ==========================================
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://www.4bizinternational.com/contact/#webpage',
    'url': 'https://www.4bizinternational.com/contact/',
    'name': 'Contact 4Biz International | IT Consulting Dubai',
    'description': 'Contact our Dubai & global offices for IT consulting, software development, digital marketing & cyber security services.',
    'mainEntity': {
      // Clean cross-reference to the Organization graph defined globally in layout.tsx
      '@id': 'https://www.4bizinternational.com/#organization'
    }
  };

  return (
    <>
      {/* Injecting Schema for SEO Crawlers at Server-Level */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Layout View Container with modern hardware-accelerated rendering smooth effects */}
      <div className="min-h-screen bg-[#030a21] bg-[radial-gradient(circle_at_center,_#0b2154_0%,_#051133_50%,_#030a21_100%)] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased scroll-smooth style-running">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
          
          {/* Decorative Modern Background Ambient Glow - Soft blurred accents that do not cause layout jumps */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Hero Core Content Wrapper */}
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            
            {/* Visual Hook Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-medium tracking-wide mb-6 uppercase animate-fade-in backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Connect Globally
            </div>

            {/* Title - Optimized for extreme responsive fluidity without layout shifts */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] pb-4 break-words px-2 drop-shadow-sm">
              Let’s Build Your Next Modern Business Milestone
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal px-4 block opacity-90">
              Partner with 4Biz International. Whether scaling operations cross-border or initiating structural innovation, our expert consulting team is standing by to assist you.
            </p>

          </div>
        </section>

        {/* IMPORTED CONTACT SECTION */}
        {/* Reserved space container to prevent layout jumping (CLS) while Client Component hydrates */}
        <section className="relative z-10 w-full bg-transparent min-h-[400px] clear-both transition-all duration-300 ease-in-out">
          <Contact />
        </section>

      </div>
    </>
  );
}