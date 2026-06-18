"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const ALL_CLIENTS = [
  { id: 'pharsfilm', src: '/client-logos/pharsfilm-logo.svg', alt: 'Pharsfilm', isPHF: true },
  { id: 'theyyampattil', src: '/client-logos/theyyampattil-logo.avif', alt: 'Theyyampattil Logo' },
  { id: 'opusbm', src: '/client-logos/opusbm-logo.png', alt: 'OpusBM Logo' },
  { id: 'aimbridge', src: '/client-logos/aimbridge-logo.png', alt: 'Aimbridge Logo' },
  { id: 'Alrumooz', src: '/client-logos/al-rumooz-logo.png', alt: 'Alrumooz Logo' },
  { id: 'Apparel', src: '/client-logos/apparel-logo.svg', alt: 'Apparel Logo' },
  { id: 'Inka-Dubai', src: '/client-logos/inka-dubai.png', alt: 'Inka Dubai Logo' },
  { id: 'Novo-Cinemas', src: '/client-logos/novo-cinemas.svg', alt: 'Novo Cinemas Logo' },
  { id: 'sixth-street', src: '/client-logos/6thstreet.png', alt: '6th Street Logo' },
  { id: 'al-rostamani', src: '/client-logos/al-rostamani.svg', alt: 'Al Rostamani Logo' },
  { id: 'beetroot', src: '/client-logos/beetroot.png', alt: 'Beetroot Logo' },
  { id: 'blueberry-media', src: '/client-logos/blueberry-media.webp', alt: 'Blueberry Media Logo' },
  { id: 'ramada-group', src: '/client-logos/ramada-group.png', alt: 'Ramada Group Logo' },
  { id: 'apple-international-school', src: '/client-logos/apple-international-school.png', alt: 'Apple International School Logo' },
  { id: 'fmredxb', src: '/client-logos/fmredxb.png', alt: 'FMREDXB Logo' },
  { id: 'gulf-film', src: '/client-logos/gulf-film-llc.png', alt: 'Gulf Film LLC Logo' },
  { id: 'h-h', src: '/client-logos/h-h.svg', alt: 'H-H Logo' },
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
      className="py-16 md:py-20 relative overflow-hidden transform-gpu select-none w-full"
      style={{
        // Radial gradient capturing the rich dark-to-bright blue glow from the reference image
        background: 'radial-gradient(circle at center, #0a1b4d 0%, #061133 50%, #03081a 100%)',
        contentVisibility: 'auto',
        contain: 'paint layout',
        containmentIntrinsicSize: '1px 500px',
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block with optimal contrast for readability */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight md:tracking-tighter text-[#00b49d] uppercase mb-3">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg font-normal tracking-wide text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-95">
            We're proud parents when it comes to our client list
          </p>
        </div>

        {/* Ultra-responsive layout updated to display:
          grid-cols-2 -> 2 columns on mobile devices (16 items = 8 clean rows)
          md:grid-cols-3 -> 3 columns on tablet devices (15 items = 5 clean rows)
          lg:grid-cols-5 -> 5 columns on desktop screens (15 items = 3 clean rows)
          
          Added 'justify-items-center justify-center' to guarantee alignment.
        */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5 max-w-7xl mx-auto justify-items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ALL_CLIENTS.map((client, index) => {
            // Index 0 to 14 (first 15 items) show everywhere.
            // Index 15 (16th item) shows ONLY on mobile.
            // Index 16+ (remaining items) hidden everywhere to maintain crisp counts.
            let visibilityClass = "hidden";
            
            if (index < 15) {
              visibilityClass = "block w-full";
            } else if (index === 15) {
              visibilityClass = "block md:hidden w-full";
            }

            return (
              <motion.div 
                key={client.id} 
                className={visibilityClass} 
                variants={itemVariants}
              >
                <ClientCard client={client} isPHF={client.isPHF} />
              </motion.div>
            );
          })}
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
const ClientCard = memo(({ client, isPHF }: { client: { src: string; alt: string }, isPHF?: boolean }) => {
  return (
    <div className="group relative flex items-center justify-center w-full h-[100px] sm:h-[120px] md:h-[125px] rounded-2xl border border-blue-500/25 bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/[0.03] hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transform-gpu">
      <div className="relative w-[70%] h-[50%] max-w-full max-h-full transition-transform duration-300 ease-out transform-gpu group-hover:scale-105">
        <Image
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className={`object-contain opacity-90 transition-all duration-300 ease-out group-hover:filter-none group-hover:opacity-100 ${
            isPHF 
              ? '' 
              : 'brightness-0 invert' 
          }`}
          loading="lazy" 
        />
      </div>
    </div>
  );
});
ClientCard.displayName = 'ClientCard';

export default ClientSection;