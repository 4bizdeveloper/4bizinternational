"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What IT services does 4Biz International offer?",
    answer: "We provide comprehensive IT solutions including Microsoft Dynamics 365, enterprise CRM, CMS, ERP systems, mobile app development, custom web design, search engine optimization (SEO), and robust IT infrastructure."
  },
  {
    question: "How do you ensure website performance and SEO?",
    answer: "We prioritize technical SEO, fast page loads, responsive web design, structured schema markup, and accessible UI/UX to ensure your website ranks high and provides an optimized experience across all devices."
  },
  {
    question: "What kind of hosting solutions do you provide?",
    answer: "We offer high-performance enterprise hosting solutions equipped with high-performance hardware, SSL certificates, Site Lock, continuous monitoring, and robust hacking protection."
  },
  {
    question: "Do you provide support for Microsoft and Google Workspace?",
    answer: "Yes, we provide flexible cloud options and expert managed support for Microsoft 365, Dynamics 365, Azure, and Google Workspace to streamline business workflows."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div 
      className="border-b border-blue-900/40 last:border-b-0 backdrop-blur-sm"
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 py-4 sm:py-5 text-left focus:outline-none group select-none transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span 
          itemProp="name" 
          className="text-base sm:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 ease-out tracking-wide"
        >
          {question}
        </span>
        
        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          <span className="absolute w-4 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out" />
          <span 
            className={`absolute h-4 w-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`} 
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.25, delay: 0.05 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.15 } }
            }}
            className="overflow-hidden"
            itemScope 
            itemProp="acceptedAnswer" 
            itemType="https://schema.org/Answer"
          >
            <p 
              itemProp="text"
              className="pb-4 sm:pb-5 text-sm sm:text-base text-blue-100/80 leading-relaxed pr-6 max-w-2xl antialiased"
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  // Structured Schema for 100/100 AEO & SEO (FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section 
      className="relative w-full py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden flex items-center contain-intrinsic-size" 
      style={{
        background: 'radial-gradient(circle at center, #001f5c 0%, #000c24 70%, #000511 100%)'
      }}
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Dynamic JSON-LD Structured Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto relative z-10">
        <h2 
          id="faq-title" 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center tracking-tight bg-clip-text bg-gradient-to-b from-white to-neutral-300"
        >
          Frequently Asked Questions
        </h2>
        
        <div className="w-full flex flex-col border-t border-blue-900/40">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}