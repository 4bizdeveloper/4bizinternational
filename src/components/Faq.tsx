"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock FAQ data matching image_157a47.jpg context
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

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="border-b border-blue-900/40 last:border-b-0 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-6 py-5 sm:py-6 text-left focus:outline-none group select-none transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 ease-out tracking-wide">
          {question}
        </span>
        
        {/* Modern Interactive Plus/Minus Icon */}
        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          {/* Horizontal line - updated to pure white */}
          <span className="absolute w-4 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out" />
          {/* Vertical line (rotates/shrinks to form a minus when open) - updated to pure white */}
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
          >
            <p className="pb-5 sm:pb-6 text-sm sm:text-base text-blue-100/80 leading-relaxed pr-6 max-w-2xl antialiased">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  // Lifted state handles mutual exclusivity (only 1 open at a time)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section 
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex items-center contain-intrinsic-size" 
      style={{
        background: 'radial-gradient(circle at center, #001f5c 0%, #000c24 70%, #000511 100%)'
      }}
      aria-labelledby="faq-title"
    >
      {/* Decorative Subtle Radial Glow for Premium Look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto relative z-10">
        <h2 
          id="faq-title" 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 text-center tracking-tight bg-clip-text bg-gradient-to-b from-white to-neutral-300"
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