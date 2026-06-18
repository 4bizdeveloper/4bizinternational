"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What IT services does 4Biz International offer?",
    answer: "We provide comprehensive solutions including Microsoft Dynamics 365, CRM, CMS, ERP, mobile app development, web design, SEO, and IT infrastructure."
  },
  {
    question: "How do you ensure website performance and SEO?",
    answer: "We prioritize SEO and responsive web design to ensure your website ranks high and provides an optimized, fast experience across all devices."
  },
  {
    question: "What kind of hosting solutions do you provide?",
    answer: "We offer fast, reliable hosting with high-performance hardware, including SSL certificates, Site Lock, and robust hacking protection."
  },
  {
    question: "Do you provide support for Microsoft and Google Workspace?",
    answer: "Yes, we provide flexible options and expert support for Microsoft 365, Dynamics 365, Azure, and Google Workspace to streamline your business workflows."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-900/40 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start sm:items-center gap-4 py-5 sm:py-6 text-left focus:outline-none group select-none"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-white group-hover:text-blue-200 transition-colors duration-200">
          {question}
        </span>
        <span className={`text-xs sm:text-sm mt-1 sm:mt-0 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''} text-blue-400 shrink-0`}>
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-sm sm:text-base text-blue-100/80 leading-relaxed pr-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section 
      className="relative w-full py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex items-center" 
      style={{
        background: 'radial-gradient(circle at center, #001f5c 0%, #000c24 70%, #000511 100%)'
      }}
      aria-labelledby="faq-title"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="w-full flex flex-col">
          {faqData.map((item, index) => (
            <FaqItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}