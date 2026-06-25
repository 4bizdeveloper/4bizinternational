import React from 'react';
import { Metadata } from 'next';

// --- SEO METADATA (Server Side) ---
export const metadata: Metadata = {
  title: '4Biz International | Leading IT Solutions & Digital Transformation Services',
  description: '4Biz International delivers top-tier IT consulting, software development, and digital solutions engineered to scale your business. Get a free consultation today.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.4bizinternational.com/',
  },
};

// --- CORRECTED SCHEMA MARKUP ---
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "4Biz International",
  "legalName": "4biz International LLC",
  "url": "https://www.4bizinternational.com/",
  "logo": "https://www.4bizinternational.com/logo.png", 
  "description": "4Biz International delivers top-tier IT consulting, software development, and digital solutions engineered to scale your business.",
  "image": "https://www.4bizinternational.com/og-image.png", 
  "slogan": "Impacting Infinite!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office 104, Crystal Building, Near ADCB Metro Station, Al Karama",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971-52-79-25-100",
      "contactType": "customer support",
      "email": "info@4bizinternational.com"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971-43-921-234",
      "contactType": "sales"
    }
  ],
  "potentialAction": {
    "@type": "Action",
    "name": "Free IT Consultation",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.4bizinternational.com/#contact",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  },
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "IT Consulting & Digital Transformation Services"
    },
    "price": "0",
    "priceCurrency": "USD",
    "description": "Get a free consultation today."
  },
  "serviceType": [
    "Microsoft Dynamics 365",
    "Search Engine Optimization",
    "Web Design & Development",
    "Social Media Marketing",
    "Domain & Hosting",
    "Content Marketing",
    "Email And SMS Marketing",
    "Branding",
    "Photoshoot And Videoshoot",
    "CRM Software",
    "IT Infrastructure",
    "Mobile App Development",
    "CMS Software",
    "4Biz ERP Solutions",
    "Microsoft Product Licenses",
    "Google Workspace Solutions",
    "Zoho Solutions",
    "Business Email Solutions",
    "Software and Custom-made Applications"
  ]
};

// --- CLIENT SIDE COMPONENTS WRAPPER ---
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from '@/components/Contact';
import ClientSection from '@/components/ClientSection';
import Faq from '@/components/Faq';

function HomeClientContent() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Hero />
      <About />
      <Services />  
      <ClientSection />   
      {/* <Testimonials />  */}
      <Faq />  
      <Contact />         
    </main>
  );
}

// --- MAIN PAGE COMPONENT (Default Export) ---
export default function Home() {
  return (
    <>
      {/* Safe injection of Schema markup structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <HomeClientContent />
    </>
  );
}