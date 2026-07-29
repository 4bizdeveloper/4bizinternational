"use client";

import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface Location {
  city: string;
  title: string;
  subtitle: string;
  address: string;
  src: string;
  link: string;
}

/**
 * MEMOIZED PREMIUM TOUCH DEVICE LOCATION CARD
 * Renders an expansive, hyper-realistic smartphone/tablet hybrid hardware frame.
 * Features side buttons, realistic corner styling, deep screen glass reflections,
 * and high-performance hardware acceleration.
 */
const LocationCard = memo(({ loc, index }: { loc: Location; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.65, delay: index * 0.15, ease: [0.215, 0.610, 0.355, 1.000] }}
    className="group relative flex flex-col items-center h-full w-full transform-gpu"
    style={{ willChange: 'transform' }}
  >
    {/* OUTER HARDWARE FRAME WRAPPER */}
    <div className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[360px] aspect-[9/13.5] rounded-[2.8rem] p-3.5 bg-[#0e1126] border-[4px] border-[#222954] shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/50 transform-gpu">
      
      {/* LEFT HARDWARE VOLUME KEYS (+/-) */}
      <div className="absolute top-[24%] -left-[8px] w-[4px] h-9 bg-[#2b3369] rounded-l border-l border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />
      <div className="absolute top-[32%] -left-[8px] w-[4px] h-9 bg-[#2b3369] rounded-l border-l border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />
      
      {/* RIGHT HARDWARE POWER SWITCH BUTTON */}
      <div className="absolute top-[28%] -right-[8px] w-[4px] h-12 bg-[#2b3369] rounded-r border-r border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />

      {/* TOP EAR-SPEAKER STRIP & DOT SENSOR MATRIX */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-center space-x-1.5 px-3 border border-white/5">
        <div className="w-8 h-1 bg-white/20 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#161a36]" />
      </div>

      {/* INNER DISPLAY SURFACE & BEZEL */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-black border border-black shadow-inner">
        
        {/* FLOATING GLASSMORPHIC HUD OVERLAY */}
        <a 
          href={loc.link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-12 left-3 right-3 z-20 bg-[#070b1e]/85 backdrop-blur-xl border border-white/10 p-3.5 rounded-xl transition-all duration-300 hover:bg-[#070b1e]/95 group/info pointer-events-auto shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                <span className="text-cyan-400 font-mono text-[8px] uppercase tracking-[0.25em] font-bold">Node Active</span>
              </div>
              <h4 className="text-white font-black text-sm uppercase tracking-tight group-hover/info:text-cyan-400 transition-colors">
                {loc.city}
              </h4>
              <p className="text-cyan-400/80 text-[9px] font-mono font-bold uppercase tracking-wider">
                {loc.title}
              </p>
            </div>
            <div className="p-1.5 bg-white/5 border border-white/10 rounded-lg group-hover/info:bg-cyan-400 group-hover/info:border-cyan-300 transition-all duration-500 shadow-md shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/info:stroke-black">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </a>

        {/* NATIVE GOOGLE MAP EMBED IFRAME */}
        <iframe 
          src={loc.src} 
          width="100%" 
          height="100%" 
          style={{ 
            border: 0,
            background: '#070b1e' 
          }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={`${loc.city} - ${loc.title}`}
          className="w-full h-full opacity-100 transition-opacity duration-500 transform-gpu rounded-[2.2rem]"
        />

        {/* TOP STATUS BAR POLISH / GRADIENT SHIELD */}
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-black/50 via-black/10 to-transparent z-10" />

        {/* HARDWARE EMBOSSED SCREEN REFLECTION LAYER */}
        <div className="shine-layer absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-30" />
      </div>
    </div>
  </motion.div>
));

LocationCard.displayName = 'LocationCard';

const MapSection = () => {
  const locations: Location[] = [
    {
      city: "Dubai, UAE",
      title: "Global Headquarters",
      subtitle: "International Enterprise Solutions Hub",
      address: "Crystal Building, Al Karama, Dubai",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.846921067268!2d55.2973838!3d25.2420804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f84a0cd39%3A0x6834edd5ea42e51d!2s4BIZ%20International%20LLC!5e0!3m2!1sen!2sae!4v1780903880922!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/32WmFGVmDaoCesDK9"
    },
    {
      city: "Kozhikode, IN",
      title: "Regional Tech Node",
      subtitle: "Offshore Software Development Center",
      address: "HiLite Business Park, Calicut, Kerala",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1893273073897!2d75.8334759!3d11.247478800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b26cb564cd7%3A0x6e4ea8183d688e13!2s4biz%20International!5e0!3m2!1sen!2sae!4v1780903901319!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/ehYp13MsiQJxXmebA"
    },
    {
      city: "Nadakkavu, IN",
      title: "Operational Hub",
      subtitle: "Next-Gen IT Infrastructure & Operations",
      address: "4Biz International Tower, Calicut",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.778183213242!2d75.7727812!3d11.277709500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f2df7358683%3A0xdd71f8c39ea9198!2s4biz%20International%20-%20Nadakkavu!5e0!3m2!1sen!2sae!4v1780903922115!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/M1xzYiJ6AARUdH9i8"
    }
  ];

  return (
    <section 
      id="map" 
      className="py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[#070e24]"
    >
      {/* MATRIX TECH GRID MESH */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SEO TARGETED ACCESSIBLE HEADER */}
        <header className="mb-20 flex flex-col items-center text-center w-full px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-3"
          >
            Enterprise Infrastructure
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] pb-5"
          >
            Global Office <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] inline-block">Branches</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl text-xs sm:text-sm md:text-base font-medium tracking-wide leading-relaxed mb-6"
          >
            Connecting cross-border innovation hubs to engineer highly scalable, secure enterprise architectures and full-cycle digital software transformations.
          </motion.p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          />
        </header>

        {/* RESPONSIVE FLUID INFRASTRUCTURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 justify-items-center">
          {locations.map((loc, index) => (
            <LocationCard key={index} loc={loc} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* High-Performance Hardware Acceleration Layer */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1200px;
        }

        /* Prevent Layout Shifts and Elevate Hover Items smoothly */
        .group:hover {
          z-index: 20;
        }

        /* Smooth Cinematic Reflective Light Move without paint performance costs */
        @keyframes shine-move {
          0% { background-position: -150% -150%; }
          100% { background-position: 250% 250%; }
        }

        .shine-layer {
          background: linear-gradient(
            135deg,
            transparent 40%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(34, 211, 238, 0.02) 55%,
            transparent 65%
          );
          background-size: 250% 250%;
          animation: shine-move 6s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default MapSection;