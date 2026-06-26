import React from 'react';
import { Metadata } from 'next';

// --- HOME-SPECIFIC HIGH-CONVERSION METADATA ---
export const metadata: Metadata = {
  title: '4Biz International | Leading IT Solutions & Digital Transformation Services',
  description: '4Biz International delivers top-tier IT consulting, enterprise software development, and digital marketing solutions engineered to scale your business. Get a free consultation today.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/',
  },
  verification: {
    google: 'BZ4Tew_7L_bfrDJyIb_R_nZi4wN7SKpIbTCCrsrV-NU',
  },
};

// --- CLIENT SIDE COMPONENTS WRAPPER ---
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from "@/components/About";
import ClientSection from '@/components/ClientSection';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

function HomeClientContent() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Hero />
      <About />
      <Services />  
      <ClientSection />   
      <Faq />  
      <Contact />         
    </main>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    <HomeClientContent />
  );
}