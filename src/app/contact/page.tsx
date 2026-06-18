import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Contact from '@/components/Contact';

// SEO Meta Tags for Global Reach and High Performance
export const metadata: Metadata = {
  title: 'Contact 4Biz International | Connect with Our Global Experts',
  description: 'Have questions or ready to scale your international business? Contact the 4Biz International team today. We are here to provide tailored global business solutions.',
  openGraph: {
    title: 'Contact 4Biz International | Global Business Solutions',
    description: 'Get in touch with 4Biz International for premium corporate expansion, global trading, and strategic consulting services.',
    url: 'https://4bizinternational.vercel.app/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070e25] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased scroll-smooth">
      
      {/* HERO SECTION */}
      {/* Slightly increased pt-40 sm:pt-44 to add that clean space below your header logo/menu */}
      {/* Updated bottom padding from pb-6 to a responsive scale (pb-12 sm:pb-16 md:pb-20) */}
      <section className="relative relative-hero min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center pt-40 sm:pt-44 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070e25]">

        {/* Hero Core Content Wrapper */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Title - Built with strict text containment to prevent overflow cut-offs */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] pb-4 break-words px-2">
            Let’s Build Your Next Modern Business Milestone
          </h1>

          {/* Subtitle / Description - Increased thickness (font-normal) & enhanced color density */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal px-4 block">
            Partner with 4Biz International. Whether scaling operations cross-border or initiating structural innovation, our expert consulting team is standing by to assist you.
          </p>

        </div>
      </section>

      {/* IMPORTED CONTACT SECTION - Seamlessly integrated space reduction */}
      <section className="relative z-10 w-full bg-[#070e25]">
        <Contact />
      </section>

    </div>
  );
}