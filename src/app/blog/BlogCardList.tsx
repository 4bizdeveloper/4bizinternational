import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarLine, RiTimeLine, RiArrowRightUpLine } from 'react-icons/ri';

interface BlogProps {
  featuredBlog: {
    title: string;
    excerpt: string;
    slug: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
  };
}

export default function BlogCardList({ featuredBlog }: BlogProps) {
  return (
    <section className="w-full px-1 sm:px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        
        <article className="group relative bg-[#0b143c]/50 backdrop-blur-md border border-blue-900/40 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 ease-out flex flex-col justify-between transform-gpu hover:shadow-[0_12px_45px_-12px_rgba(37,99,235,0.35)] will-change-transform">
          
          <div>
            {/* Visual Aspect-Locked Container Block (Prevents CLS entirely) */}
            <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden border-b border-blue-950/60">
              <Image 
                src={featuredBlog.image} 
                alt="Modern architectural glass highrises in the Dubai corporate commercial hub representing cross-border enterprise development metrics." 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                className="object-cover object-center transition-transform duration-700 ease-out transform-gpu group-hover:scale-[1.04] will-change-transform"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#040a27]/90 backdrop-blur-md text-blue-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md border border-blue-800/30">
                  {featuredBlog.category}
                </span>
              </div>
            </div>

            {/* Content Layout Block */}
            <div className="p-6 sm:p-8">
              {/* Meta metrics row */}
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                <div className="flex items-center gap-1.5">
                  <RiCalendarLine className="text-sm text-blue-400/80" />
                  <span>{featuredBlog.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RiTimeLine className="text-sm text-blue-400/80" />
                  <span>{featuredBlog.readTime}</span>
                </div>
              </div>

              {/* Title Target Element */}
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-blue-300 transition-colors duration-300">
                <Link href={featuredBlog.slug} className="focus:outline-none">
                  {/* Pseudo-element creates a full-card clickable surface safely without structural bugs */}
                  <span className="absolute inset-0 z-20" aria-hidden="true" />
                  {featuredBlog.title}
                </Link>
              </h2>

              {/* Narrative Summary Text */}
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed line-clamp-3 relative z-10">
                {featuredBlog.excerpt}
              </p>
            </div>
          </div>

          {/* Card Base Navigation Row */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 mt-auto relative z-10">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-blue-400 border-t border-blue-950/80 pt-4 w-full group-hover:text-blue-300 transition-colors duration-300">
              <span>Read Investigation</span>
              <RiArrowRightUpLine className="text-lg transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-400 group-hover:text-blue-300" />
            </div>
          </div>

        </article>

      </div>
    </section>
  );
}