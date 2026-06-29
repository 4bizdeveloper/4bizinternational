import React from 'react';
import { Metadata } from 'next';
import BlogCardList from "./BlogCardList";

// High-Performance Server-rendered Metadata for Search Engines
export const metadata: Metadata = {
  title: "4Biz International Blog | Business & IT Insights Dubai",
  description: "Read the latest articles from 4Biz International on IT consulting, digital marketing, cyber security, business setup in Dubai, and global tech trends. Updated regularly.",
  alternates: {
    canonical: "https://new.4bizinternational.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "4Biz International Blog | Business & IT Insights Dubai",
    description: "Read the latest articles from 4Biz International on IT consulting, digital marketing, cyber security, business setup in Dubai, and global tech trends. Updated regularly.",
    url: "https://new.4bizinternational.com/blog",
    siteName: "4Biz International",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200",
        width: 1200,
        height: 750,
        alt: "Modern architectural glass highrises in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Biz International Blog | Business & IT Insights Dubai",
    description: "Read the latest articles from 4Biz International on IT consulting, digital marketing, cyber security, business setup in Dubai, and global tech trends.",
    images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200"],
  },
};

export default function BlogsLandingPage() {
  // Completely preserved structural data model 
  const featuredBlog = {
    title: "Ultimate Guide to Business Setup in Dubai: Scaling Globally from UAE in 2026",
    excerpt: "Navigate corporate tax laws, mainland vs free zone licensing, and optimize your international operational frameworks with 4Biz experts.",
    slug: "/blog/business-setup-dubai-global-scaling",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200",
    date: "June 08, 2026",
    readTime: "7 min read",
    category: "Business Setup"
  };

  // Structured Schema.org Injection (JSON-LD) for Rich Google Search Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.title,
    "description": metadata.description,
    "url": "https://new.4bizinternational.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "4Biz International",
      "url": "https://new.4bizinternational.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": `https://new.4bizinternational.com${featuredBlog.slug}`,
          "name": featuredBlog.title
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Container Layout Block */}
      <main className="min-h-screen text-slate-100 pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#020722] selection:bg-blue-600 selection:text-white">
        
        {/* Hardware-Accelerated High Performance Ambient Backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,36,108,0.75)_0%,rgba(6,15,53,0.95)_60%,rgba(2,7,34,1)_100%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Centered Premium Header Section */}
          <header className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 px-2">
            <span className="text-blue-400 font-semibold uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Corporate Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Global Strategy</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Actionable strategic execution files, localized regulatory breakdowns, and institutional framework evaluations curated by 4Biz International advisory groups.
            </p>
          </header>

          {/* Grid Render Section */}
          <BlogCardList featuredBlog={featuredBlog} />
          
        </div>
      </main>
    </>
  );
}