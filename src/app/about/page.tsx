import type { Metadata } from 'next';
import AboutClientView from './AboutClientView';

// ─── SERVER LEVEL SEO METADATA CONFIGURATION ───────────────────────────────
export const metadata: Metadata = {
  title: "About 4Biz International | Our Story, Mission & Vision",
  description: "Learn about 4Biz International — a global IT company with 16+ years of experience, 1000+ projects delivered, and offices in Dubai & India. Meet our team.",
  openGraph: {
    title: "About 4Biz International | Our Story, Mission & Vision",
    description: "Learn about 4Biz International — a global IT company with 16+ years of experience, 1000+ projects delivered, and offices in Dubai & India. Meet our team.",
    url: 'https://4bizinternational.com/about',
    siteName: '4Biz International',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International Corporate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About 4Biz International | Our Story, Mission & Vision",
    description: "Learn about 4Biz International — a global IT company with 16+ years of experience, 1000+ projects delivered, and offices in Dubai & India. Meet our team.",
    images: ['/4biz_logo-1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};

// ─── SEARCH ENGINE LEVEL STRUCTURED DATA ────────────────────────────────────
export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "4Biz International",
      "alternateName": "4Biz",
      "url": "https://4bizinternational.com",
      "logo": "https://4bizinternational.com/4biz_logo-1.png",
      "description": "Learn about 4Biz International — a global IT company with 16+ years of experience, 1000+ projects delivered, and offices in Dubai & India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "", 
        "contactType": "customer service",
        "areaServed": ["AE", "IN"],
        "availableLanguage": "en"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "India",
          "addressCountry": "IN"
        }
      ]
    }
  };

  return (
    <>
      {/* Inject Structured Data directly into Head elements for pristine static compilation parsing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClientView />
    </>
  );
}