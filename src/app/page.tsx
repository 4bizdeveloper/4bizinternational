import React from 'react';
import { Metadata } from 'next';

// --- HOME-SPECIFIC HIGH-CONVERSION METADATA (Server-Side SEO) ---
export const metadata: Metadata = {
  title: '4Biz International | Leading IT Solutions & Digital Transformation Services',
  description: '4Biz International delivers top-tier IT consulting, enterprise software development, and digital marketing solutions engineered to scale your business. Get a free consultation today.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/',
  },
  verification: {
    google: [
      'BZ4Tew_7L_bfrDJyIb_R_nZi4wN7SKpIbTCCrsrV-NU',
      'Np59UNG71PX2xlLxwSRvACIs9hjria8GTaKLWmU0RAs'
    ],
  },
};

// --- CLIENT SIDE COMPONENTS (Preserved Imports) ---
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from "@/components/About";
import ClientSection from '@/components/ClientSection';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

/**
 * HomeClientContent Handles layout structure.
 * - `scroll-smooth` ensures ultra-fluid scrolling transitions.
 * - `overflow-x-hidden` prevents broken layout/horizontal jumps on mobile devices.
 * - Hardware acceleration styles (`transform-gpu`) ensure smooth performance on 120Hz mobile screens.
 */
function HomeClientContent() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden scroll-smooth antialiased selection:bg-[#00D3F2] selection:text-black transform-gpu">
      {/* Hero: Above the fold - should render immediately for Core Web Vitals (LCP) */}
      <Hero />
      
      {/* Content Sections: Structured cleanly to prevent DOM jumping */}
      <About />
      <Services />  
      <ClientSection />   
      <Faq />  
      <Contact />         
    </main>
  );
}

// --- MAIN PAGE COMPONENT (Static Export & SEO Friendly Server Component) ---
export default function Home() {
  return (
    <HomeClientContent />
  );
}