"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Contact from '@/components/Contact';

const ALL_CLIENTS = [
  // --- Original Group ---
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
  { id: 'nano-pixel-technologies', src: '/client-logos/nano-pixel-technologies.svg', alt: 'Nano Pixel Technologies Logo' },
  { id: '3r-creative-fze', src: '/client-logos/3R-creative-fze.svg', alt: '3R Creative FZE Logo' },
  { id: 'exiloz', src: '/client-logos/exiloz.png', alt: 'Exiloz Logo' },
  { id: 'kanoo-stationery-bahrain', src: '/client-logos/kanoo-stationery-bahrain.png', alt: 'Kanoo Stationery Bahrain Logo' },
  { id: 'sunbridge-logistics', src: '/client-logos/sunbridge-logistics.avif', alt: 'Sunbridge Logistics Logo' },
  { id: 'arab-brazilian-chamber', src: '/client-logos/arab-brazilian-chamber-of-commerce.svg', alt: 'Arab Brazilian Chamber of Commerce Logo' },
  { id: 'secret-sports-gym', src: '/client-logos/secret-sports-gym.png', alt: 'Secret Sports Gym Logo' },
  { id: 'thumbelina', src: '/client-logos/thumbelina.jfif', alt: 'Thumbelina Logo' },
  { id: 'frontline-medical-centre', src: '/client-logos/frontline-medical-centre.png', alt: 'Frontline Medical Centre Logo' },
  { id: 'oxford-school', src: '/client-logos/oxford-school.svg', alt: 'Oxford School Logo' },
  { id: 'r-and-b', src: '/client-logos/r&b-logo.svg', alt: 'R&B Logo' },
  { id: 'cedar-school', src: '/client-logos/cedar-school.png', alt: 'Cedar School Logo' },
  { id: 'nora-medical-poly-clinic', src: '/client-logos/nora-medical-poly-clinic.png', alt: 'Nora Medical Poly Clinic Logo' },
  { id: 'pixcom-technologies', src: '/client-logos/pixcom-technologies.png', alt: 'Pixcom Technologies Logo' },
  { id: 'smart-setup-gov-services', src: '/client-logos/smart-setup-gov-services.png', alt: 'Smart Setup Gov Services Logo' },
  { id: 'taksmens', src: '/client-logos/taksmens.png', alt: 'Taksmens Logo' },
];

// GPU optimized, lightweight animations to prevent frame drops or layout shifts
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
  }
};

const ClientSection = () => {
  return (
    <>
      <section 
        className="pb-20 md:pb-28 pt-28 sm:pt-32 md:pt-36 lg:pt-40 relative overflow-hidden transform-gpu select-none w-full"
        style={{
          backgroundColor: '#070e25',
          contentVisibility: 'auto',
          contain: 'paint layout',
          containmentIntrinsicSize: '1px 600px',
        } as React.CSSProperties}
      >
        {/* Dynamic Background Premium Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00b49d]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto spec-header-container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-none text-[#00b49d] uppercase mb-4 md:mb-5">
              MEET OUR NETWORK OF<br className="hidden sm:inline" />
              <span className="text-white relative inline-block mt-1 sm:mt-2">
                INDUSTRY TRAILBLAZERS.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal tracking-wide text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90 px-2 sm:px-0">
              We help our clients unlock growth by focusing on four key solution areas.
            </p>
          </div>

          {/* Ultra-responsive grid layout displaying 5 items in a row on desktop view */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {ALL_CLIENTS.map((client) => (
              <motion.div key={client.id} variants={itemVariants} className="w-full">
                <ClientCard client={client} />
              </motion.div>
            ))}
           </motion.div>

        </div>
      </section>

      {/* Semantic integration of Contact Section */}
      <div className="w-full bg-[#070e25] relative z-20">
        <Contact />
      </div>
    </>
  );
};

/* Individual Logo Box with full colorful assets */
const ClientCard = memo(({ client }: { client: { src: string; alt: string } }) => {
  return (
    <div className="group relative flex items-center justify-center w-full h-[100px] sm:h-[120px] md:h-[130px] rounded-2xl border border-blue-500/15 bg-white/[0.01] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/[0.03] hover:border-[#00b49d]/50 hover:shadow-[0_0_30px_rgba(0,180,157,0.15)] transform-gpu will-change-transform">
      {/* Decorative inner ambient glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00b49d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative w-[70%] h-[50%] max-w-full max-h-full transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.03]">
        <Image
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain opacity-90 transition-all duration-300 ease-out group-hover:opacity-100"
          loading="lazy" 
        />
      </div>
    </div>
  );
});
ClientCard.displayName = 'ClientCard';

export default ClientSection;