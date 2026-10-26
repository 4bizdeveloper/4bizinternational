"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What IT services does 4Biz International offer?",
    answer: "4Biz International provides end-to-end enterprise IT solutions including Microsoft Dynamics 365, custom CRM/CMS/ERP integrations, native mobile app development, high-performance web design, search engine optimization (SEO), and managed IT infrastructure."
  },
  {
    question: "How do you ensure website performance and SEO?",
    answer: "We build websites with optimized Next.js frameworks, server-side rendering, low TTFB (Time to First Byte), and semantic HTML to ensure dynamic responsiveness, high Google Lighthouse scores, and search engine ranking dominance."
  },
  {
    question: "What kind of hosting solutions do you provide?",
    answer: "We deliver cloud hosting infrastructure backed by high-performance hardware, SSL certificates, Site Lock integration, automated DDoS defense, and proactive security monitoring."
  },
  {
    question: "Do you provide support for Microsoft and Google Workspace?",
    answer: "Yes, 4Biz International delivers enterprise deployment, migration, and ongoing technical support for Microsoft 365, Dynamics 365, Azure Cloud Services, and Google Workspace ecosystems."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onToggle, index }: FaqItemProps) => {
  return (
    <article 
      className="border-b border-blue-900/40 last:border-b-0 backdrop-blur-sm"
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 py-4 sm:py-5 text-left focus:outline-none group select-none transition-all duration-300"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span 
          itemProp="name" 
          className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 ease-out tracking-wide"
        >
          {question}
        </span>
        
        <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
          <span className="absolute w-3.5 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out" />
          <span 
            className={`absolute h-3.5 w-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`} 
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.2, delay: 0.05 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.1 } }
            }}
            className="overflow-hidden"
            itemScope 
            itemProp="acceptedAnswer" 
            itemType="https://schema.org/Answer"
          >
            <p 
              itemProp="text" 
              className="pb-4 sm:pb-5 text-xs sm:text-sm text-blue-100/80 leading-relaxed pr-4 max-w-2xl antialiased"
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  // Structured Data / Schema Markup for 100/100 SEO & AEO Optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section 
      className="relative w-full pt-4 pb-10 sm:pt-6 sm:pb-14 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden flex items-center" 
      style={{
        background: 'radial-gradient(circle at center bottom, #001f5c 0%, #000c24 70%, #000511 100%)'
      }}
      aria-labelledby="faq-title"
    >
      {/* Schema Injection for Search Engines & LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-3xl mx-auto relative z-10">
        <h2 
          id="faq-title" 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center tracking-tight bg-clip-text bg-gradient-to-b from-white to-neutral-300"
        >
          Frequently Asked Questions
        </h2>
        
        <div 
          className="w-full flex flex-col border-t border-blue-900/40"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              index={index}
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