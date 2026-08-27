'use client';

import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';

// Extend video attributes to safely support fetchPriority without TypeScript errors
interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function Home() {
  // High-performance hardware-accelerated interactive utility styles
  const iconClass = 'text-white flex items-center justify-center transition-all duration-300 hover:scale-[1.15] opacity-90 hover:opacity-100 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full vertical-alignment-safe transform-gpu will-change-transform';
  const uniformIconSize = 'w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] lg:w-[22px] lg:h-[22px] block shrink-0 transition-transform duration-300';

  const socials = [
    {
      href: 'https://www.instagram.com/4biz_ae',
      label: 'Instagram',
      isComponent: false,
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324A4.162 4.162 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
      target: '_blank',
    },
    {
      href: 'https://www.facebook.com/4bizglobal',
      label: 'Facebook',
      isComponent: true,
      component: <FaFacebookF className={uniformIconSize} />,
      target: '_blank',
    },
    {
      href: 'https://x.com/4biz123',
      label: 'X',
      isComponent: false,
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      target: '_blank',
    },
    {
      href: 'https://www.linkedin.com/company/4biz-international/',
      label: 'LinkedIn',
      isComponent: false,
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z',
      target: '_blank',
    },
  ];

  return (
    <section 
      className="relative w-full min-h-[100dvh] min-h-[480px] overflow-x-clip bg-black"
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '100dvh',
        backgroundImage: "url('/hero-desktop-1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      aria-label="4Biz International Corporate Hero"
    >
      {/* 
        High Performance Video Container 
        - Cross-origin configuration prevents browser execution thread block.
        - hardware-acceleration layered safely via translate3d to offload computing cycles to device GPU.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster="/hero-desktop-1.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transform-gpu"
        style={{ 
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
        {...({ fetchPriority: 'high' } as CustomVideoProps)}
      >
        <source src="/background-video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mask Overlay Container */}
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

      {/* ── SOCIAL PROFILE NAVIGATION SIDEBAR ── */}
      <nav
        aria-label="Social Profile Links"
        className="absolute top-1/2 -translate-y-[60%] lg:-translate-y-1/2 z-40 flex flex-col items-center justify-center left-4 gap-6 sm:left-6 sm:gap-7 lg:left-8 opacity-100 pointer-events-auto transition-transform duration-500 will-change-transform transform-gpu"
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.target}
            rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
            className={iconClass}
            aria-label={`Follow 4Biz International on ${social.label}`}
          >
            {social.isComponent ? (
              social.component
            ) : (
              <svg viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true" className={uniformIconSize}>
                <path d={social.path} />
              </svg>
            )}
          </a>
        ))}
      </nav>
      
      {/* ── FLEX CENTER HERO CONTAINER ── */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100dvh] text-center text-white px-6 w-full max-w-7xl mx-auto sm:px-12 md:px-16 pt-12 pb-6 min-h-0 transform-gpu -translate-y-12 sm:-translate-y-10 lg:-translate-y-4">
        <header 
          className="w-full flex flex-col items-center pointer-events-none transition-all duration-500 opacity-100 scale-100 will-change-transform transform-gpu"
        >
          <div className="w-full max-w-[95vw] sm:max-w-[640px] md:max-w-[850px] lg:max-w-[1100px] flex flex-col items-center">
            
            {/* Main Title Headings - Engineered with responsive fluid layouts to prevent dynamic layout shifts */}
            <h1 
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5 text-center font-semibold uppercase tracking-[0.06em] text-white leading-[1.15] md:leading-tight font-sans"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)',
              }}
            >
              <span className="text-[8.5vw] xs:text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[3.8rem]">
                4BIZ
              </span>
              <span className="text-[8.5vw] xs:text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[3.8rem]">
                INTERNATIONAL
              </span>
            </h1>

            {/* Subheading Tagline */}
            <h2 
              className="mt-5 md:mt-6 text-[3.8vw] xs:text-[1.05rem] sm:text-[1.4rem] md:text-[1.65rem] lg:text-[1.65rem] font-medium uppercase tracking-[0.12em] text-white/95 leading-none font-sans pl-[0.12em] text-wrap text-center"
              style={{
                textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.5)',
              }}
            >
              IMPACTING INFINITE
            </h2>
          </div>
        </header>
      </div>
    </section>
  );
}