"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// The 4 verified operational client assets from image_ac3d47.jpg
const ALL_CLIENTS = [
  { id: 'theyyampattil', src: '/client-logos/theyyampattil-ogo.avif', alt: 'Theyyampattil Logo' },
  { id: 'opusbm', src: '/client-logos/opusbm-logo.png', alt: 'OpusBM Logo' },
  { id: 'opus-acoustic', src: '/client-logos/opus-acoustic-logo.png', alt: 'Opus Acoustic Logo' },
  { id: 'aimbridge', src: '/client-logos/aimbridge-logo.png', alt: 'Aimbridge Logo' },
];

// GPU optimized, lightweight animations to prevent frame drops or layout shifts
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const ClientSection = () => {
  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden transform-gpu select-none"
      style={{
        backgroundColor: '#070e25',
        contentVisibility: 'auto',
        contain: 'paint layout',
        containmentIntrinsicSize: '1px 500px',
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with optimal contrast for readability */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight md:tracking-tighter text-[#00b49d] uppercase mb-3">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg font-normal tracking-wide text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-95">
            We're proud parents when it comes to our client list
          </p>
        </div>

        {/* 
          Ultra-responsive, pixel-perfect layout:
          grid-cols-2 -> 2 columns on mobile devices
          md:grid-cols-3 -> 3 columns on tablet devices 
          lg:grid-cols-4 -> 4 columns on large screens / desktop
        */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ALL_CLIENTS.map((client) => (
            <motion.div key={client.id} variants={itemVariants}>
              <ClientCard client={client} />
            </motion.div>
          ))}
         </motion.div>

        {/* CTA link block */}
        <div className="mt-10 md:mt-12 text-center">
          <Link 
            href="/clients" 
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#00b49d]/40 bg-transparent text-sm font-bold text-gray-200 uppercase tracking-widest transition-all duration-300 hover:bg-[#00b49d] hover:text-[#070e25] hover:border-[#00b49d] hover:shadow-[0_0_25px_rgba(0,180,157,0.4)]"
          >
            <span>View All Clients</span>
            <svg 
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

/* Individual Logo Box with hardware acceleration & subtle high-fidelity effects */
const ClientCard = memo(({ client }: { client: { src: string; alt: string } }) => {
  return (
    <div className="group relative flex items-center justify-center w-full h-[100px] sm:h-[120px] md:h-[125px] rounded-2xl border border-blue-500/25 bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/[0.03] hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transform-gpu">
      <div className="relative w-[70%] h-[50%] max-w-full max-h-full transition-transform duration-300 ease-out transform-gpu group-hover:scale-105">
        <Image
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain brightness-0 invert opacity-90 transition-all duration-300 ease-out group-hover:filter-none group-hover:opacity-100"
          loading="lazy" 
        />
      </div>
    </div>
  );
});
ClientCard.displayName = 'ClientCard';

export default ClientSection;