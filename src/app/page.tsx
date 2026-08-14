import React from 'react';
import { Metadata } from 'next';

// --- SERVER-SIDE CLIENT COMPONENTS (Preserved Imports) ---
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from "@/components/About";
import ClientSection from '@/components/ClientSection';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

// --- HOME-SPECIFIC HIGH-CONVERSION METADATA (Server-Side SEO/AEO/GEO) ---
export const metadata: Metadata = {
  title: '4Biz International | Enterprise IT Solutions & Digital Transformation',
  description: '4Biz International delivers custom ERP/CRM software, enterprise IT consulting, cloud infrastructure, cybersecurity, and digital marketing in Dubai, UAE.',
  keywords: [
    'IT Solutions Dubai',
    'Enterprise Software Development',
    'Digital Transformation UAE',
    'Custom ERP CRM Integration',
    'Managed IT Infrastructure',
    'Cybersecurity Services Dubai',
    'Cloud Migration Solutions'
  ],
  alternates: {
    canonical: 'https://www.4bizinternational.com',
  },
  verification: {
    google: [
      'BZ4Tew_7L_bfrDJyIb_R_nZi4wN7SKpIbTCCrsrV-NU',
      'Np59UNG71PX2xlLxwSRvACIs9hjria8GTaKLWmU0RAs'
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.4bizinternational.com',
    siteName: '4Biz International',
    title: '4Biz International | Enterprise IT Solutions & Digital Transformation',
    description: '4Biz International delivers top-tier IT consulting, enterprise software development, and digital marketing solutions engineered to scale your business.',
    images: [
      {
        url: '/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International Enterprise IT & Software Solutions Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Biz International | Enterprise IT Solutions & Digital Transformation',
    description: '4Biz International delivers custom ERP/CRM, IT infrastructure, cloud hosting, and digital marketing solutions in Dubai.',
    images: ['/4biz_logo-1.png'],
  },
};

// --- JSON-LD STRUCTURED GRAPH FOR AEO & GEO ENTITY DISAMBIGUATION ---
const homepageSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.4bizinternational.com/#webpage',
      'url': 'https://www.4bizinternational.com',
      'name': '4Biz International | Enterprise IT Solutions & Digital Transformation',
      'description': '4Biz International delivers custom ERP/CRM software, enterprise IT consulting, cloud infrastructure, cybersecurity, and digital marketing in Dubai, UAE.',
      'isPartOf': {
        '@id': 'https://www.4bizinternational.com/#website',
      },
      'about': {
        '@id': 'https://www.4bizinternational.com/#organization',
      },
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': 'https://www.4bizinternational.com/4biz_logo-1.png',
      },
      'inLanguage': 'en-US',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.4bizinternational.com/#faqpage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What enterprise IT services does 4Biz International offer in Dubai?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4Biz International provides end-to-end digital transformation including custom ERP/CRM development, cloud infrastructure migration, enterprise software engineering, cyber security, and digital marketing services.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does 4Biz International assist with enterprise business automation?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4Biz International integrates Microsoft Dynamics 365, Zoho, custom CRM platforms, and tailored AI business automation to streamline enterprise workflows.',
          },
        },
      ],
    },
  ],
};

/**
 * HomeClientContent Handles layout structure.
 * - `scroll-smooth` ensures ultra-fluid scrolling transitions.
 * - `overflow-x-hidden` prevents broken layout/horizontal jumps on mobile devices.
 * - Hardware acceleration styles (`transform-gpu`) ensure smooth performance on 120Hz mobile screens.
 */
function HomeClientContent() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden scroll-smooth antialiased selection:bg-[#00D3F2] selection:text-black transform-gpu">
      {/* Structural AEO/GEO Text Block for Generative Extraction (Visually Clean & Accessible) */}
      <section className="sr-only" aria-label="Executive Briefing & Entity Information">
        <h2>About 4Biz International IT Solutions</h2>
        <p>
          4Biz International is a top-tier digital transformation agency and enterprise IT solution provider based in Dubai, United Arab Emirates. Specializing in custom software development, ERP and CRM solutions, cybersecurity, cloud architecture, search engine optimization, and digital growth marketing.
        </p>
      </section>

      {/* Hero: Above the fold - should render immediately for Core Web Vitals (LCP) */}
      <Hero />
      
      {/* Content Sections: Structured cleanly to prevent DOM jumping */}
      <About />
      <Services />  
      <ClientSection />   
      <Faq />  
      <Contact />         
    </div>
  );
}

// --- MAIN PAGE COMPONENT (Static Export & SEO Friendly Server Component) ---
export default function Home() {
  return (
    <>
      {/* Dynamic JSON-LD Structured Data Insertion for Search Engines & Answer Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchemaGraph) }}
      />
      <HomeClientContent />
    </>
  );
}