import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarLine, RiUser3Line, RiArrowRightUpLine } from 'react-icons/ri';

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

interface BlogItem {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  author: string;
  authorUrl: string;
  category: string;
}

function BlogCardList({ blogs }: { blogs: BlogItem[] }) {
  return (
    <section className="w-full px-1 sm:px-2">
      {/* Updated to CSS Grid: 1 col on mobile, 2 cols on tablet (md), 3 cols on desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 transition-all duration-300">
        {blogs.map((blog, index) => (
          <article 
            key={index}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between transform-gpu shadow-[0_35px_70px_-15px_rgba(0,3,20,0.7)] hover:shadow-[0_45px_85px_-10px_rgba(59,130,246,0.45)] hover:-translate-y-1.5 will-change-transform w-full"
          >
            <div>
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-700 ease-out transform-gpu group-hover:scale-[1.02] will-change-transform"
                />
              </div>

              <div className="p-6 sm:p-8 pb-4">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-5 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/60 shrink-0">
                    <RiCalendarLine className="text-sm text-blue-600" />
                    <span>{blog.date}</span>
                  </div>
                  
                  {/* Author Tag Linking to 4Biz International Website */}
                  <a
                    href={blog.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-30 flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/60 hover:border-blue-400 hover:bg-blue-50 transition-colors text-slate-700 font-semibold shrink-0"
                  >
                    <RiUser3Line className="text-sm text-blue-600" />
                    <span>{blog.author}</span>
                  </a>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001759] tracking-tight leading-snug mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">
                  <Link href={blog.slug} className="focus:outline-none">
                    <span className="absolute inset-0 z-20" aria-hidden="true" />
                    {blog.title}
                  </Link>
                </h2>

                <p className="text-black text-sm sm:text-base font-normal leading-relaxed line-clamp-3 relative z-10 opacity-90">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 relative z-10">
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#001759] text-white rounded-full border border-[#001759] text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-out shadow-sm">
                  <span>Read Article</span>
                  <RiArrowRightUpLine className="text-base" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BlogsLandingPage() {
  const blogDataList: BlogItem[] = [


      {
      title: "SEO Services in the UAE: What's Included & Cost | 4Biz",
      excerpt: "Looking into SEO services in the UAE? Here's what SEO actually involves, how long it takes to work, what it costs, and how it helps your business get found. ",
      slug: "/blog/seo-services-uae/",
      image: "/blog/seo-2.png",
      date: "Oct 01, 2026",
      author: "4Biz International LLC",
      authorUrl: "https://www.4bizinternational.com/",
      category: "Digital Marketing"
    },


    {
      title: "Digital Marketing Agency in the UAE | 4Biz International",
      excerpt: "What does a digital marketing agency in the UAE actually deliver? A breakdown of core services, pricing structures, and how to know if your business needs one. ",
      slug: "/blog/digital-marketing-agency-uae/",
      image: "/blog/digital-marketing-1.png",
      date: "Sep 29, 2026",
      author: "4Biz International LLC",
      authorUrl: "https://www.4bizinternational.com/",
      category: "Digital Marketing"
    },
    {
      title: "What Is AEO (Answer Engine Optimization) and Why Brands Need It Now",
      excerpt: "AI search tools are changing how customers find businesses. Learn what Answer Engine Optimization (AEO) is and how to optimize your content for AI Overviews and chat assistants.",
      slug: "/blog/what-is-aeo/",
      image: "/blog/aeo-1.png",
      date: "Sep 28, 2026",
      author: "4Biz International LLC",
      authorUrl: "https://www.4bizinternational.com/",
      category: "Digital Marketing"
    },
    {
      title: "4Biz International: Who We Are & What We Do | Dubai IT Solutions Company",
      excerpt: "Discover 4Biz International, a Dubai-based IT solutions and digital transformation company offering ERP/CRM, web & mobile development, cloud, cybersecurity, and digital marketing services.",
      slug: "/blog/4biz-international-who-we-are/",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      date: "Jul 07, 2026",
      author: "4Biz International LLC",
      authorUrl: "https://www.4bizinternational.com/",
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

      <main className="min-h-screen text-slate-100 pt-36 sm:pt-44 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#000a29] via-[#001759] to-[#000d38] selection:bg-blue-600 selection:text-white">
        
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.3),transparent_60%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
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

          <BlogCardList blogs={blogDataList} />
        </div>
      </main>
    </>
  );
}