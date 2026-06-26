"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import Image from 'next/image';

// ─── PERFORMANCE OPTIMIZED CLS-FREE COUNTER ─────────────────────────────────
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  useEffect(() => {
    return rounded.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix;
      }
    });
  }, [rounded, suffix]);

  return (
    <span 
      ref={ref} 
      className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight block drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)] will-change-transform h-[1.2em]"
    >
      0{suffix}
    </span>
  );
};

// ─── MAIN BRAND ARCHITECTURE ABOUT COMPONENT ────────────────────────────────
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stats = [
    { value: 1000, suffix: '+', label: 'PROJECTS' },
    { value: 16, suffix: '+', label: 'YEARS OF EXPERIENCE' },
    { value: 10, suffix: '+', label: 'TOP RATED COMPANY' },
    { value: 8, suffix: '+', label: 'COUNTRIES SERVING' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full text-white py-12 md:py-20 lg:py-24 overflow-hidden font-sans select-text"
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '0 900px',
        background: 'radial-gradient(circle at 50% 45%, #112663 0%, #091336 60%, #04081a 100%)'
      }}
    >
      {/* CSS Injection for Smooth, Continuous Ring Rotations */}
      <style jsx global>{`
        @keyframes continuous-spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes continuous-spin-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-continuous-fast {
          animation: continuous-spin-clockwise 12s linear infinite;
        }
        .animate-spin-continuous-reverse {
          animation: continuous-spin-counter 16s linear infinite;
        }
        .animate-spin-continuous-slow {
          animation: continuous-spin-clockwise 22s linear infinite;
        }
        .animate-spin-continuous-slow-reverse {
          animation: continuous-spin-counter 26s linear infinite;
        }
      `}</style>

      {/* Micro-mesh Grid Structural Backdrop Overlay for Premium High-Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0 opacity-40" />

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        
        {/* Two-Column Responsive Layout Node - Optimized for Zero Dead Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-2 mb-10 md:mb-16">
          
          {/* Left Side Content Column */}
          <div className="w-full lg:col-span-7 flex flex-col order-1 lg:order-1 items-center lg:items-start text-center lg:text-left">
            {/* Section Sub-Tag */}
            <div className="flex items-center justify-center lg:justify-start mb-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] [word-spacing:0.35em] font-black text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] select-text">
                WE ARE
              </span>
            </div>
            
            {/* Ultra Modern Dynamic Typography Canvas Area */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full h-auto flex flex-col justify-center items-center lg:items-start select-text group py-1 mb-4 lg:cursor-none"
            >
              {/* 📱 MOBILE & TABLET VIEW */}
              <div className="block lg:hidden text-[2.6rem] xs:text-[3.2rem] sm:text-6xl md:text-7xl font-black tracking-wider bg-gradient-to-r from-[#39f3ff] via-[#00b0ff] to-[#6366f1] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(0,240,255,0.4)] uppercase leading-[1.1] select-text pointer-events-auto w-full text-center">
                4BIZ <br />
                <span className="text-[0.5em] xs:text-[0.55em] sm:text-[0.42em] tracking-normal block mt-1">INTERNATIONAL LLC</span>
              </div>

              {/* 💻 DESKTOP VIEW: Outline Layer */}
              <div 
                className="hidden lg:block text-[5.2rem] xl:text-[6.2rem] font-black tracking-wider text-transparent pointer-events-auto select-text transition-all duration-500 uppercase leading-[1.05]"
                style={{ 
                  WebkitTextStroke: isHovered ? '2px rgba(57, 243, 255, 0.95)' : '2px rgba(0, 191, 255, 0.85)',
                  opacity: isHovered ? 0.95 : 0.8,
                  filter: isHovered 
                    ? 'drop-shadow(0 0 35px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 10px rgba(0, 176, 255, 0.25))' 
                    : 'drop-shadow(0 0 20px rgba(0, 176, 255, 0.35))'
                }}
              >
                4BIZ <br />
                <span className="text-[0.45em] tracking-normal block">INTERNATIONAL LLC</span>
              </div> 

              {/* 💻 DESKTOP VIEW: Spotlight Liquid Mask Overlay */}
              <div 
                className="absolute inset-0 py-1 hidden lg:block text-[5.2rem] xl:text-[6.2rem] font-black tracking-wider bg-gradient-to-r from-[#39f3ff] via-[#00cdf4] to-[#4f46e5] bg-clip-text text-transparent pointer-events-none select-none filter drop-shadow-[0_0_40px_rgba(0,240,255,0.55)] uppercase transition-opacity duration-300 leading-[1.05]"
                style={{
                  opacity: isHovered ? 1 : 0,
                  clipPath: `circle(115px at ${mousePos.x}px ${mousePos.y}px)`
                }}
              >
                4BIZ <br />
                <span className="text-[0.45em] tracking-normal block">INTERNATIONAL LLC</span>
              </div> 

              {/* 💻 DESKTOP VIEW: HUD Lens Flare Crosshair */}
              {isHovered && (
                <div 
                  className="absolute pointer-events-none rounded-full transition-transform duration-75 ease-out hidden lg:flex items-center justify-center"
                  style={{
                    width: '230px',
                    height: '230px',
                    left: `${mousePos.x - 115}px`,
                    top: `${mousePos.y - 115}px`,
                    background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,0,0,0) 75%)',
                    boxShadow: '0 0 50px rgba(0, 240, 255, 0.4), inset 0 0 20px rgba(0, 240, 255, 0.2)',
                    border: '1.5px solid rgba(0, 240, 255, 0.85)'
                  }}
                >
                  <div className="absolute w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] opacity-90 top-3 left-3" />
                  <div className="absolute w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] opacity-90 bottom-3 right-3" />
                </div>
              )}
            </div>

            {/* Core Continuous Flowing Typography Block */}
            <div className="flex flex-col space-y-4 pt-1 max-w-5xl items-center lg:items-start w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white leading-snug sm:leading-tight text-center lg:text-left select-text">
                Leading IT Solutions & Software Development Company in <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#1ca6db] to-blue-500 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">Dubai</span>
              </h3>

              <p className="text-white/90 leading-relaxed text-sm md:text-base text-center lg:text-justify font-medium tracking-wide border-l-0 lg:border-l-[3px] border-cyan-400/40 lg:pl-4 md:pl-5 py-1 select-text">
                4Biz International is a leading IT solutions and digital transformation company in Dubai, helping businesses streamline operations, accelerate growth, and embrace innovation through advanced technology solutions. Our expertise spans software development, mobile app development, web design, ERP and CRM solutions, cloud services, cybersecurity, IT infrastructure, and digital marketing. With a client-focused approach and a team of experienced professionals, we deliver scalable, secure, and future-ready solutions tailored to meet unique business requirements. At 4Biz International, we bridge the gap between technology and business excellence, empowering organizations to thrive in an increasingly digital world.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6 text-center lg:text-left">
              <a 
                href="/about" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 border border-white/20 hover:border-white rounded-full text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] text-white bg-white/[0.02] backdrop-blur-md group select-text"
              >
                MORE ABOUT US
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 sm:ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ─── RIGHT SIDE COLUMN: SYMMETRICAL COSMIC MATRIX ─── */}
          <div className="w-full lg:col-span-5 flex items-center justify-center relative min-h-[280px] xs:min-h-[320px] sm:min-h-[420px] lg:min-h-[450px] order-2 lg:order-2">
            {/* Glowing Vibrant Space Backplane */}
            <div className="absolute inset-0 bg-radial-gradient from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* RIGID COMPOSITE CONTAINER */}
            <div className="absolute w-full h-full flex items-center justify-center pointer-events-none transform-gpu">
              
              {/* Complex Multi-layered Particle Rings & Cosmic Track System */}
              <div className="absolute inset-0 flex items-center justify-center transform-gpu">

                {/* Diffuse Energy Vibrant Core */}
                <div className="absolute w-36 h-36 sm:w-52 sm:h-52 bg-radial-gradient from-[#00d3f2]/20 via-[#ff41e3]/10 to-transparent blur-2xl animate-pulse" />

                {/* ── INNER RINGS ── */}
                {/* Inner Pulsating Ring 1 */}
                <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border-[4px] sm:border-[5px] border-[#ff41e3]/30 shadow-[0_0_20px_rgba(255,65,227,0.3)] animate-[ping_3.8s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
                {/* Inner Pulsating Ring 2 */}
                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full border-[2px] sm:border-[3px] border-[#00d3f2]/20 shadow-[0_0_25px_rgba(0,211,242,0.2)] animate-[ping_3.8s_cubic-bezier(0.16,1,0.3,1)_infinite_1.1s]" />

                {/* ── OUTER ROTATING RINGS ── */}
                {/* Outer Ring 1 — dashed, clockwise fast → #00d3f2 */}
                <div
                  className="absolute w-44 h-44 xs:w-48 xs:h-48 sm:w-72 sm:h-72 rounded-full border-[2px] sm:border-[2.5px] border-dashed will-change-transform animate-spin-continuous-fast"
                  style={{
                    borderColor: 'rgba(0,211,242,0.50)',
                    boxShadow: '0 0 15px rgba(0,211,242,0.20)'
                  }}
                />
                {/* Outer Ring 2 — double border, counter-clockwise → #ff41e3 */}
                <div
                  className="absolute w-52 h-52 xs:w-56 xs:h-56 sm:w-[19rem] sm:h-[19rem] rounded-full border-[1.5px] sm:border-[2px] border-double will-change-transform animate-spin-continuous-reverse"
                  style={{
                    borderColor: 'rgba(255,65,227,0.40)',
                    boxShadow: '0 0 15px rgba(255,65,227,0.15)'
                  }}
                />

                {/* INCREASED CURVE LENGTH: Outer Ring 3 — slow clockwise arc extended to 7/8ths around */}
                <div
                  className="absolute w-[14rem] h-[14rem] xs:w-[15rem] xs:h-[15rem] sm:w-[22rem] sm:h-[22rem] rounded-full border-[3px] sm:border-[4px] border-transparent will-change-transform animate-spin-continuous-slow"
                  style={{
                    borderTopColor: '#00d3f2',
                    borderBottomColor: '#ff41e3',
                    borderLeftColor: '#00d3f2',
                    borderRightColor: 'rgba(0,211,242,0.45)', // Extended arc segment
                    filter: 'drop-shadow(0 0 15px rgba(0,211,242,0.5))'
                  }}
                />
                
                {/* INCREASED CURVE LENGTH: Outer Ring 4 — slow counter-clockwise partial extended significantly */}
                <div
                  className="absolute w-[15.5rem] h-[15.5rem] xs:w-[17rem] xs:h-[17rem] sm:w-[25rem] sm:h-[25rem] rounded-full border-[1.5px] sm:border-[2px] border-transparent will-change-transform animate-spin-continuous-slow-reverse"
                  style={{
                    borderRightColor: 'rgba(255,65,227,0.85)',
                    borderLeftColor: 'rgba(0,211,242,0.75)',
                    borderTopColor: 'rgba(0,211,242,0.35)',  // Extended arc segment
                    borderBottomColor: 'rgba(255,65,227,0.35)', // Extended arc segment
                    filter: 'drop-shadow(0 0 10px rgba(0,211,242,0.35))'
                  }}
                />
              </div>
              
              {/* Floating Center Logo Surface - SCALED COHESIVELY ACROSS ALL DEVICES */}
              <div className="absolute w-44 h-22 xs:w-52 xs:h-26 sm:w-76 sm:h-38 lg:w-80 lg:h-40 transition-transform duration-500 hover:scale-105 transform-gpu filter drop-shadow-[0_0_35px_rgba(6,182,212,0.35)] flex items-center justify-center">
                <Image
                  src="/4biz_logo-1.png"
                  alt="4Biz International Corporate Asset Logo"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 304px, 320px"
                  className="object-contain relative z-10"
                  priority
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Content Row: High-Brilliance Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 lg:gap-10 pt-10 border-t border-white/10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center lg:items-start space-y-1.5 pl-0 lg:pl-4 border-l-0 lg:border-l-2 border-white/10 hover:border-white transition-all duration-300 group bg-gradient-to-r from-white/[0.01] to-transparent py-1 select-text"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="flex flex-col items-center lg:items-start space-y-1.5">
                <span className="text-xs sm:text-sm text-white font-semibold tracking-wider max-w-[160px] text-center lg:text-left select-text">
                  {stat.label}
                </span>
                <div className="w-10 sm:w-12 h-[2px] bg-white opacity-90 rounded-full transition-all duration-300 group-hover:w-16 sm:group-hover:w-20 shadow-[0_1px_5px_rgba(255,255,255,0.4)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}