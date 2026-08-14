"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const ALL_CLIENTS = [
  { id: 'pharsfilm', src: '/client-logos/pharsfilm-logo.svg', alt: 'Pharsfilm Logo', isColorful: true },
  { id: 'theyyampattil', src: '/client-logos/theyyampattil-logo.avif', alt: 'Theyyampattil Logo' },
  { id: 'opusbm', src: '/client-logos/opusbm-logo.png', alt: 'OpusBM Logo' },
  { id: 'aimbridge', src: '/client-logos/aimbridge-logo.png', alt: 'Aimbridge Logo' },
  { id: 'Alrumooz', src: '/client-logos/al-rumooz-logo.png', alt: 'Alrumooz Logo' },
  { id: 'Apparel', src: '/client-logos/apparel-logo.svg', alt: 'Apparel Group Logo' },
  { id: 'Inka-Dubai', src: '/client-logos/inka-dubai.png', alt: 'Inka Dubai Logo' },
  { id: 'university-of-sharja', src: '/client-logos/university-of-sharja.png', alt: 'University of Sharjah Logo', isSharjahLogo: true },
  { id: 'sixth-street', src: '/client-logos/6thstreet-logo.webp', alt: '6th Street Logo' },
  { id: 'al-rostamani', src: '/client-logos/al-rostamani.svg', alt: 'Al Rostamani Group Logo' },
  { id: 'beetroot', src: '/client-logos/beetroot.png', alt: 'Beetroot Logo' },
  { id: 'Novo-Cinemas', src: '/client-logos/novo-cinemas.svg', alt: 'Novo Cinemas Logo' },
  { id: 'ramada-group', src: '/client-logos/ramada-logo.png', alt: 'Ramada Group Logo' },
  { id: 'apple-international-school', src: '/client-logos/apple-international-school.png', alt: 'Apple International School Logo' },
  { id: 'fmredxb', src: '/client-logos/fmredxb.png', alt: 'FMREDXB Logo' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

export default function ClientSection() {
  return (
    <section 
      aria-labelledby="clients-title"
      className="pt-10 pb-6 md:pt-14 md:pb-8 relative overflow-hidden transform-gpu select-none w-full"
      style={{
        background: 'radial-gradient(circle at center top, #001f5c 0%, #000c24 70%, #000511 100%)',
        contentVisibility: 'auto',
        contain: 'paint layout',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <header className="text-center mb-6 md:mb-8">
          <h2 
            id="clients-title"
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#00b49d] uppercase mb-2"
          >
            Our Clients
          </h2>
          <p className="text-sm sm:text-base font-normal tracking-wide text-gray-300 max-w-xl mx-auto leading-normal opacity-90">
            Trusted by industry leaders across global markets
          </p>
        </header>

        {/* Client Logos Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto justify-items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {ALL_CLIENTS.slice(0, 15).map((client, index) => {
            const is15thItem = index === 14;

            return (
              <motion.div 
                key={client.id} 
                className={is15thItem ? "hidden sm:block w-full" : "block w-full"} 
                variants={itemVariants}
              >
                <ClientCard 
                  client={client} 
                  isColorful={client.isColorful} 
                  isSharjahLogo={client.isSharjahLogo} 
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA Button */}
        <div className="mt-8 md:mt-10 text-center">
          <Link 
            href="/clients" 
            title="View full portfolio of 4Biz International clients"
            aria-label="View full portfolio of 4Biz International clients"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-[#00d2f1] bg-transparent text-xs font-bold text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,210,241,0.75)] transition-all duration-300 hover:bg-[#00d2f1]/10 hover:shadow-[0_0_25px_rgba(0,210,241,0.4)] hover:scale-[1.01] transform-gpu"
          >
            <span>View All Clients</span>
            <svg 
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 stroke-[#00d2f1]" 
              fill="none" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

const ClientCard = memo(({ 
  client, 
  isColorful, 
  isSharjahLogo 
}: { 
  client: { src: string; alt: string }; 
  isColorful?: boolean; 
  isSharjahLogo?: boolean; 
}) => {
  let filterClass = "brightness-0 invert opacity-90 group-hover:opacity-100";
  let blendClass = "";
  
  if (isColorful) {
    filterClass = "opacity-100 brightness-105 contrast-105";
  } else if (isSharjahLogo) {
    filterClass = "brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300";
    blendClass = "mix-blend-screen";
  }

  return (
    <div className="group relative flex items-center justify-center w-full h-[80px] sm:h-[95px] md:h-[105px] rounded-xl border border-blue-500/15 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-[#00b49d]/50 hover:shadow-[0_0_20px_rgba(0,180,157,0.15)] transform-gpu">
      <div className={`relative w-full h-full max-w-[65%] max-h-[45%] transition-all duration-300 ease-out transform-gpu group-hover:scale-105 ${blendClass}`}>
        <Image
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className={`object-contain transition-all duration-300 ease-out ${filterClass}`}
          priority
        />
      </div>
    </div>
  );
});
ClientCard.displayName = 'ClientCard';