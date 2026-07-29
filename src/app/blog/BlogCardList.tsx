import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarLine, RiTimeLine, RiArrowRightUpLine } from 'react-icons/ri';

interface BlogItem {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogProps {
  blogs: BlogItem[];
}

export default function BlogCardList({ blogs }: BlogProps) {
  const isSingle = blogs.length === 1;

  return (
    <section className="w-full px-1 sm:px-2">
      <div 
        className={`grid gap-8 xl:gap-10 transition-all duration-300 ${
          isSingle 
            ? 'grid-cols-1 max-w-md md:max-w-xl lg:max-w-2xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {blogs.map((blog, index) => (
          /* Pure White Premium Contrast Isolated Card Box */
          <article 
            key={index}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between transform-gpu shadow-[0_35px_70px_-15px_rgba(0,3,20,0.7)] hover:shadow-[0_45px_85px_-10px_rgba(59,130,246,0.45)] hover:-translate-y-1.5 will-change-transform"
          >
            <div>
              {/* Layout shift-free image aspect box */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  sizes={isSingle ? "(max-w-768px) 100vw, 650px" : "(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"}
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-700 ease-out transform-gpu group-hover:scale-[1.02] will-change-transform"
                />
              </div>

              {/* Typography Structure Content wrapper */}
              <div className="p-6 sm:p-8 pb-4">
                {/* Meta Row Indicators */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-5 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/60">
                    <RiCalendarLine className="text-sm text-blue-600" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/60">
                    <RiTimeLine className="text-sm text-blue-600" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Deep Corporate Midnight Blue Title (Changes to eye-friendly royal dark blue on hover) */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001759] tracking-tight leading-snug mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">
                  <Link href={blog.slug} className="focus:outline-none">
                    {/* Absolute layout mask facilitating premium whole-card clicking interaction */}
                    <span className="absolute inset-0 z-20" aria-hidden="true" />
                    {blog.title}
                  </Link>
                </h2>

                {/* Highly Readable Solid Black Description Component */}
                <p className="text-black text-sm sm:text-base font-normal leading-relaxed line-clamp-3 relative z-10 opacity-90">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            {/* Action Callout Base Module with Updated Custom Premium Button Styling */}
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