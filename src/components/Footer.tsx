"use client";

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  // High-precision scroll tracking for Parallax ambient effects
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // PHYSICS: Eliminates "jitter" and frame stuttering on modern high-refresh displays
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  // 3D Transforms trigger GPU rendering layers to prevent layout jerking
  const y1 = useTransform(smoothProgress, [0, 1], ["0px", "-40px"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0px", "40px"]);

  // Declared social media schema
  const socialLinks = useMemo(() => [
    {
      href: 'https://wa.me/971527925100?text=Hello%204Biz%20International,%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details.',
      label: 'WhatsApp',
      path: 'M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.19 1.62 6.02L0 24l6.15-1.61A11.97 11.97 0 0 0 12.04 24C18.66 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.04 21.9c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.65.96.98-3.56-.24-.37A9.8 9.8 0 0 1 2.24 12c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.9-9.8 9.9zm5.38-7.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.58-.49-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.98 2.43.05 1.43 1.02 2.81 1.16 3 .15.19 2.02 3.08 4.89 4.31.68.29 1.21.46 1.62.58.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z',
      target: '_blank',
    },
    {
      href: 'https://www.facebook.com/4bizglobal',
      label: 'Facebook',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      target: '_blank',
    },
    {
      href: 'https://www.instagram.com/4biz_ae',
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324A4.162 4.162 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
      target: '_blank',
    },
    {
      href: 'https://www.linkedin.com/company/4biz-international/',
      label: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
      target: '_blank',
    },
    {
      href: 'https://x.com/4biz123',
      label: 'X',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      target: '_blank',
    },
    {
      href: 'https://www.youtube.com/@4bizinternationalae',
      label: 'YouTube',
      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      target: '_blank',
    }
  ], []);

  const navItems = useMemo(() => [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blogs', path: '/blog' },
  ], []);

  return (
    <footer 
      id="footer"
      ref={footerRef} 
      className="relative z-10 mt-0 pt-16 overflow-hidden border-t border-white/10 transform-gpu backface-hidden"
      style={{ 
        background: 'radial-gradient(circle at 50% 15%, #001b6b 0%, #001042 50%, #000933 100%)',
        contentVisibility: 'auto', 
        paddingBottom: 'calc(140px + env(safe-area-inset-bottom))' // Increased clear zone for floating action badges shown in image_d9b67f.jpg
      } as React.CSSProperties}
    >
      {/* Hardware Accelerated Subtle Parallax Internal Ambient Accents */}
      <motion.div 
        style={{ y: y1, translateZ: 0 }} 
        className="absolute top-0 -right-20 w-[320px] md:w-[700px] h-[320px] md:h-[700px] bg-white/[0.012] blur-[100px] md:blur-[160px] rounded-full pointer-events-none -z-10 will-change-transform" 
      />
      <motion.div 
        style={{ y: y2, translateZ: 0 }} 
        className="absolute top-1/3 -left-20 w-[320px] md:w-[700px] h-[320px] md:h-[700px] bg-black/[0.02] blur-[100px] md:blur-[160px] rounded-full pointer-events-none -z-10 will-change-transform" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Centered Main Navigation Element */}
        <div className="w-full flex justify-center mb-16 pb-8 border-b border-white/10">
          <nav className="w-full">
            <ul className="grid grid-cols-2 justify-items-start max-w-[280px] mx-auto gap-y-4 sm:flex sm:grid-cols-none sm:max-w-none sm:justify-center sm:gap-x-6 md:gap-x-8 lg:gap-x-12 text-[12px] font-bold uppercase tracking-[0.2em] text-white/90">
              {navItems.map((item) => (
                <li key={item.label} className="w-full sm:w-auto">
                  <Link href={item.path} className="hover:text-white transition-colors duration-200 flex items-center gap-2 py-1 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-cyan-400 transition-colors flex-shrink-0" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all group-hover:after:w-full">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-14 lg:gap-8 items-start mb-16">
          
          {/* Brand Architecture Column */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6 md:space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-14 w-52 transition-transform duration-300 transform-gpu"
            >
              <Image 
                src="/4biz_logo-1.png" 
                alt="4Biz International Logo" 
                fill
                className="object-contain"
                sizes="208px"
                priority={false}
              />
            </motion.div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal border-l-2 border-cyan-500/40 pl-4 italic antialiased max-w-sm">
              "Engineering secure digital frontiers and redefining IT excellence for the next generation of global leaders."
            </p>
            
            {/* Unified Social Link Matrix */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target={link.target || undefined}
                  rel={link.target ? "noopener noreferrer" : undefined}
                  aria-label={`Follow 4Biz International on ${link.label}`}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/70 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-cyan-500/10 transform-gpu"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Core Communications Terminals */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h2 className="text-white/60 font-bold uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span> Digital Link & Infrastructure
            </h2>
            <div className="space-y-4">
              {/* Mail Segment */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group shadow-sm">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold bg-white/10 text-white/90 px-2 py-0.5 rounded inline-block">Mail Infrastructure</span>
                <a href="mailto:info@4bizinternational.com" className="text-base text-white group-hover:text-cyan-400 transition-colors font-medium break-all block mt-2.5">
                  info@4bizinternational.com
                </a>
              </div>
              {/* Telecoms Segment */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-sm">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold bg-white/10 text-white/90 px-2 py-0.5 rounded inline-block mb-3">HQ Telecoms / WhatsApp</span>
                <div className="flex flex-col gap-3 mt-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <a href="https://wa.me/971527925100" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-cyan-400 transition-colors" aria-label="Contact Dubai HQ via WhatsApp">+971 52 792 5100</a>
                    <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-white/10 text-white/80 uppercase tracking-wide">Dubai</span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a href="https://wa.me/919895717879" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-cyan-400 transition-colors" aria-label="Contact India Tech Wing via WhatsApp">+91 98957 17879</a>
                    <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-white/10 text-white/80 uppercase tracking-wide">India</span>
                  </div>
                </div>
              </div>

              {/* Company Profile Panel Link */}
              <a 
                href="/documents/4biz-international-company-profile.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between bg-white/[0.02] border border-white/5 text-white py-3.5 px-4 rounded-xl transition-all hover:bg-white/[0.05] hover:border-cyan-500/30 shadow-sm transform-gpu"
              >
                <div className="flex flex-col pr-4">
                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/50 font-mono mb-0.5">Access File</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-white/90 group-hover:text-cyan-400 transition-colors">Our Portfolio</span>
                </div>
                <RiDownloadCloud2Line className="text-xl text-white/70 group-hover:text-cyan-400 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Regional Enterprise Hubs Map */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h2 className="text-white/60 font-bold uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span> Corporate Geographies
            </h2>
            <div className="space-y-5 text-white/80">
              {/* Dubai Corporate Hub */}
              <div className="flex flex-col border-l border-white/10 hover:border-cyan-500/50 pl-4 py-0.5 group transition-colors duration-300">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">Dubai Corporate Hub</span>
                  <span className="text-[9px] font-mono font-medium bg-white/10 text-white/90 px-1.5 rounded uppercase tracking-wide">Global HQ</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                  Crystal Building - Office # 104 - 2C St - near ADCB Metro Station - Al Karama - Dubai, UAE
                </p>
              </div>

              {/* India Tech Wing */}
              <div className="flex flex-col border-l border-white/10 hover:border-cyan-500/50 pl-4 py-0.5 group transition-colors duration-300">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">India HiLite Business Park</span>
                  <span className="text-[9px] font-mono font-medium bg-white/10 text-white/90 px-1.5 rounded uppercase tracking-wide">Tech Wing</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                  Tower 2, HiLITE Business Park, Office 2723, 7th Floor, near HiLITE Mall, Poovangal, Pantheeramkavu, Kozhikode, Kerala 673014, India
                </p>
              </div>

              {/* India Operations */}
              <div className="flex flex-col border-l border-white/10 hover:border-cyan-500/50 pl-4 py-0.5 group transition-colors duration-300">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">India Nadakkave Office</span>
                  <span className="text-[9px] font-mono font-medium bg-white/10 text-white/90 px-1.5 rounded uppercase tracking-wide">Operations</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                  5th Floor, C. M. Mathew Brothers Arcade, Kannur Rd, near Hotel Westway, Vikas Nagar Housing Colony, West Nadakkave, Chakkorathukulam, Kozhikode, Kerala 673006, India
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Pipeline */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center relative z-20">
          <div className="w-full max-w-md mx-auto text-center px-4">
            <p className="text-white/50 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.2em] font-medium font-mono leading-relaxed break-words sm:break-normal">
              &copy; {new Date().getFullYear()} 4Biz International.<br className="block sm:hidden" /> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;