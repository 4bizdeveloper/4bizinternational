'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF } from 'react-icons/fa6';

export default function Hero() {
  // ── EASILY CUSTOMIZABLE VISIBILITY CONFIGURATION ──
  const showCenterText = true;
  const showScrollDown = true;

  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // High-performance hardware-accelerated interactive utility styles
  const iconClass = 'text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 opacity-90 hover:opacity-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full bg-black/40 backdrop-blur-md p-2 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/10';
  const uniformIconSize = 'w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 block shrink-0';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Comprehensive Mobile Engine Watchdog to prevent video freezing
    const videoElement = videoRef.current;
    
    const forceVideoPlayback = () => {
      if (videoElement) {
        if (videoElement.paused) {
          videoElement.play().catch(() => {
            console.log("Autoplay sweep bypassed due to low battery mode restriction.");
          });
        }
      }
    };

    forceVideoPlayback();

    const handleStall = () => {
      if (videoElement) {
        videoElement.load();
        videoElement.play().catch(() => {});
      }
    };

    if (videoElement) {
      videoElement.addEventListener('stalled', handleStall);
      videoElement.addEventListener('suspend', forceVideoPlayback);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (videoElement) {
        videoElement.removeEventListener('stalled', handleStall);
        videoElement.removeEventListener('suspend', forceVideoPlayback);
      }
    };
  }, []);

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
    <>
      <style jsx global>{`
        @keyframes dynamicWheel {
          0% { transform: translateY(0) scaleY(1); opacity: 0.3; }
          20% { transform: translateY(4px) scaleY(1.3); opacity: 1; filter: drop-shadow(0 0 6px rgba(255,255,255,0.8)); }
          60% { transform: translateY(16px) scaleY(0.8); opacity: 0; }
          100% { transform: translateY(0) scaleY(1); opacity: 0.3; }
        }
        @keyframes microPulse {
          0%, 100% { 
            border-color: rgba(255,255,255,0.35); 
            box-shadow: 0 4px 20px rgba(0,0,0,0.8);
            transform: scale(1);
          }
          50% { 
            border-color: rgba(255,255,255,0.6); 
            box-shadow: 0 0 20px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.9);
            transform: scale(1.02);
          }
        }
        @keyframes subtleTextPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.01); }
        }
      `}</style>

      <section
        className="relative h-svh min-h-[520px] w-full flex flex-col justify-between text-center overflow-hidden bg-[#010305] select-none"
        aria-label="Hero Introduction"
      >
        {/* ── HIGH PERFORMANCE FULL SCREEN STREAMING BACKGROUND VIDEO MATRIX ── */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-[#010305]" aria-hidden="true">
          <div 
            className="w-full h-full absolute inset-0"
            style={{
              // Fixed: Removed the horizontal transparent gradients that cause side bars on phone aspect ratios.
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, transparent 100%)',
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.05] contrast-[1.05] bg-[#010305]"
              style={{ 
                willChange: 'transform, opacity',
              }}
            >
              <source src="https://raw.githubusercontent.com/4bizdeveloper/4bizinternational/main/public/hero-background-video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Futuristic Cinematic Overlay Blend */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.12] bg-gradient-to-br from-[#00aaff]/10 via-transparent to-[#00aaff]/10" />
            <div className="absolute inset-0 pointer-events-none bg-black/25" />
          </div>
        </div>

        {/* ── RESPONSIVE NAVIGATION MATRIX (Transforms automatically on Mobile viewports) ── */}
        <nav
          aria-label="Social Profile Navigation"
          className={`
            absolute z-50 flex
            left-1/2 -translate-x-1/2 bottom-28 flex-row gap-4
            sm:left-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:flex-col sm:gap-[18px]
            lg:left-8
            transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
            ${isScrolled ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 pointer-events-auto scale-100'}
          `}
          style={{ willChange: 'transform, opacity' }}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.target}
              rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
              className={iconClass}
              aria-label={social.label}
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

        {/* ── COMPREHENSIVE TEXT BRANDING WRAPPER CONTAINER ── */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-16 z-30 pt-14 pb-24 min-h-0">
          <div 
            className={`
              w-full flex flex-col items-center gap-2 sm:gap-3 pointer-events-none transition-all duration-500
              ${showCenterText ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Removed absolute size constraints to let fonts adapt dynamically across devices */}
            <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 px-2">
              <h1 
                className="text-[1.85rem] xs:text-[2.25rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem] font-black uppercase tracking-[0.06em] text-white leading-[1.1] font-sans text-center max-w-full block"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 8px 20px rgba(0,0,0,0.85), 0 0 25px rgba(0,170,255,0.2)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
                }}
              >
                4BIZ INTERNATIONAL
              </h1>

              <h2 
                className="text-[0.88rem] xs:text-[1.05rem] sm:text-[1.3rem] md:text-[1.65rem] lg:text-[2rem] font-extrabold uppercase tracking-[0.14em] text-[#cbd5e1] leading-none font-sans pl-[0.14em] text-center max-w-full block"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 6px 15px rgba(0,0,0,0.85)',
                }}
              >
                IMPACTING INFINITE
              </h2>
            </div>
          </div>
        </div>

        {/* ── SCROLL DETECTOR BAR CONTAINER ── */}
        <div
          className={`
            absolute bottom-[3vh] left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center z-40 pointer-events-none shrink-0 transition-all duration-500
            ${isScrolled ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}
          `}
          style={{ willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <div 
            className={`transition-all duration-500 ${showScrollDown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div
                style={{
                  position: 'relative',
                  width: '24px',
                  height: '40px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255,255,255,0.4)',
                  background: 'rgba(1, 3, 5, 0.6)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingTop: '6px',
                  animation: 'microPulse 3s infinite ease-in-out',
                  willChange: 'transform, border-color, box-shadow',
                }}
                className="backdrop-blur-sm"
              >
                <span
                  style={{
                    display: 'block',
                    width: '3px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: '#ffffff',
                    boxShadow: '0 0 8px #fff',
                    animation: 'dynamicWheel 1.8s infinite cubic-bezier(0.25, 1, 0.5, 1)',
                    willChange: 'transform, opacity',
                  }}
                />
              </div>

              <span
                className="text-[0.52rem] sm:text-[0.6rem] font-black tracking-[0.5em] uppercase text-white pl-[0.5em]"
                style={{ 
                  textShadow: '0 2px 6px #000',
                  animation: 'subtleTextPulse 3s infinite ease-in-out',
                  willChange: 'transform, opacity'
                }}
              >
                scroll down
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}