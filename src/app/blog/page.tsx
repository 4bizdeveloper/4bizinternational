import React from 'react';
import { Metadata } from 'next';
import BlogCardList from "./BlogCardList";

export const metadata: Metadata = {
  title: "4Biz International Blog | Business & IT Insights Dubai",
  description: "Read the latest articles from 4Biz International on IT consulting, digital marketing, cyber security, business setup in Dubai, and global tech trends. Updated regularly.",
  alternates: {
    canonical: "https://new.4bizinternational.com/blog/",
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
        url: "/4biz_logo-1.png",
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Dubai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Biz International Blog | Business & IT Insights Dubai",
    description: "Read the latest articles from 4Biz International on IT consulting, digital marketing, cyber security, business setup in Dubai, and global tech trends.",
    images: ["/4biz_logo-1.png"],
  },
};

export default function BlogsLandingPage() {
  const blogDataList = [
    {
      title: "4Biz International: Who We Are & What We Do | Dubai IT Solutions Company",
      excerpt: "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company offering ERP/CRM, web & mobile development, cloud, cybersecurity, and digital marketing services.",
      slug: "/blog/4biz-international-who-we-are",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      date: "Jul 07, 2026",
      readTime: "7 min read",
      category: "Business Setup"
    }
  ];

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
      "itemListElement": blogDataList.map((blog, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://new.4bizinternational.com${blog.slug}`,
        "name": blog.title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Corporate Luxury Dark Blue Workspace Environment */}
      <main className="min-h-screen text-slate-100 pt-36 sm:pt-44 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#000a29] via-[#001759] to-[#000d38] selection:bg-blue-600 selection:text-white">
        
        {/* Vector Background Blurs providing depth separation layer */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.3),transparent_60%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Header Module Section */}
          <header className="max-w-3xl mx-auto text-center mb-20 sm:mb-28 px-2">
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
              Corporate Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400">Global Strategy</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 mx-auto mb-8 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.4)]" />
            <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Actionable strategic execution files, localized regulatory breakdowns, and institutional framework evaluations curated by 4Biz International advisory groups.
            </p>
          </header>

          {/* Dynamic Grid Hook */}
          <BlogCardList blogs={blogDataList} />
          
        </div>
      </main>
    </>
  );
}