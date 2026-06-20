"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, useInView, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { RiCompass3Line, RiCpuLine, RiShieldFlashLine, RiGlobalLine, RiEyeLine, RiRocketLine, RiDoubleQuotesL } from 'react-icons/ri';
import Contact from '@/components/Contact';

// ─── PERFORMANCE OPTIMIZED CLS-FREE COUNTER ─────────────────────────────────
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => `${Math.floor(latest)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <motion.span ref={ref} className="text-3xl sm:text-5xl font-black text-white selection:bg-cyan-500">
      {rounded}
    </motion.span>
  );
};

// ─── MAIN ABOUT PAGE COMPONENT ───────────────────────────────────────────────
export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  // High-performance GPU template to prevent layout shifting/jumping
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.04), transparent 50%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const stats = useMemo(() => [
    { value: 1000, suffix: '+', label: 'Global Projects' },
    { value: 16, suffix: '+', label: 'Years Experience' },
    { value: 10, suffix: '+', label: 'Top Rated Matrix' },
    { value: 8, suffix: '+', label: 'Countries Served' },
  ], []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="group relative w-full text-white overflow-hidden font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-500 bg-[#020721]"
      style={{
        background: `radial-gradient(circle at 50% 45%, #081d63 0%, #051245 45%, #030a2b 80%, #020721 100%)`
      }}
    >
      {/* Dynamic Ambient Core Glow Layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-[85vw] h-[85vw] sm:w-[70vw] sm:h-[70vw] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent blur-[130px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[5%] w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full bg-gradient-to-tl from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] mix-blend-screen" />
        <div className="absolute top-[45%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-400/8 blur-[110px] mix-blend-screen" />
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[58%] flex flex-col space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 font-bold">Discover Our Story</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-white py-1">
            <span className="block text-white/90 font-light tracking-wide mb-1 text-3xl sm:text-5xl">ABOUT</span>
            <span className="w-max max-w-full block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              4BIZ INTERNATIONAL
            </span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            4BIZ INTERNATIONAL LLC is a high-performance global technology innovator. We architect elite digital infrastructures, custom applications, and next-generation frameworks designed to empower businesses on a global scale.
          </p>
          <div className="pt-4">
            <a 
              href="#contact" 
              className="relative group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-cyan-400 hover:text-black shadow-lg hover:shadow-cyan-400/20 transform-gpu hover:-translate-y-0.5"
            >
              <span>Connect With Our Experts</span>
              <RiCompass3Line className="text-lg transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </motion.div>

        {/* Right Core Logo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[42%] flex items-center justify-center relative min-h-[350px] sm:min-h-[420px]"
          style={{ perspective: 1200 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu">
            <div className="absolute w-56 h-56 bg-radial-gradient from-cyan-500/30 via-pink-500/20 to-transparent blur-2xl animate-pulse" />
            <div className="absolute w-48 h-48 rounded-full border-[6px] border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.4)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            <div className="absolute w-60 h-60 rounded-full border-[4px] border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite_0.9s]" />
            <div className="absolute w-72 h-72 rounded-full border-[5px] border-purple-500/10 shadow-[0_0_35px_rgba(168,85,247,0.2)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite_1.8s]" />
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[3px] border-dashed border-cyan-400/40 animate-[spin_25s_linear_infinite]" />
            <div className="absolute w-[18rem] h-[18rem] sm:w-[23rem] sm:h-[23rem] rounded-full border-[2px] border-double border-pink-500/30 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute w-[21rem] h-[21rem] sm:w-[26rem] sm:h-[26rem] rounded-full border-[4px] border-transparent border-t-purple-500/40 border-b-teal-400/40 animate-[spin_35s_linear_infinite]" />
          </div>

          <div className="absolute inset-0 bg-radial-gradient from-cyan-500/25 via-purple-500/15 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative w-64 h-32 sm:w-80 sm:h-40 transition-transform duration-700 hover:scale-105 transform-gpu filter drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]">
            <Image
              src="/4biz_logo-1.png"
              alt="4Biz International Corporate Logo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-contain relative z-10"
              priority={true}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── NUMERIC STATS INTERCONNECTED LINE ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 bg-white/[0.01]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 md:pl-4 py-2">
              <div className="flex items-center justify-center md:justify-start space-x-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION & VISION SECTION (SYMMETRIC UNIFORM LAYOUT) ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
          
          {/* Left Side Grouped Titles */}
          <div className="md:col-span-4 flex flex-col space-y-16 lg:space-y-20 relative z-10">
            {/* Mission Title */}
            <div className="flex items-center space-x-5 group">
              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <RiRocketLine className="text-3xl" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mission</span>
              </h3>
            </div>

            {/* Vision Title */}
            <div className="flex items-center space-x-5 group">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <RiEyeLine className="text-3xl" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vision</span>
              </h3>
            </div>
          </div>
          
          {/* Right Side Descriptions */}
          <div className="md:col-span-8 flex flex-col space-y-8 relative z-10">
            {/* Mission Box */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.03] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04]">
              <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed tracking-wide text-left md:text-justify">
                To empower businesses with innovative technology, digital solutions, and expert support that drive growth, efficiency, and lasting success.
              </p>
            </div>

            {/* Vision Box */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.03] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04]">
              <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed tracking-wide text-left md:text-justify">
                To inspire infinite possibilities by helping businesses embrace innovation, achieve sustainable growth, and thrive in the digital future.
              </p>
            </div>
          </div>

        </div>

        {/* Center Typography Block */}
        <div className="mt-24 text-center max-w-4xl mx-auto flex flex-col space-y-4 px-4">
          <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 via-blue-400 to-purple-400 filter drop-shadow-[0_2px_15px_rgba(34,211,238,0.25)] uppercase py-1">
            Impacting Infinite..!!
          </h4>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-white/80 text-sm sm:text-base tracking-wide font-medium font-mono max-w-2xl mx-auto leading-relaxed">
            Creating limitless opportunities through technology, innovation, and business excellence
          </p>
        </div>
      </section>

      {/* ─── EXECUTIVE LEADERSHIP / CEO SPEAKS SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-28 md:pb-36 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* CEO Insight Text Block */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-6 text-left relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-transparent border border-white/[0.03] px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-purple-400 font-bold">Executive Insights</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              CEO Speaks
            </h2>

            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.01]">
              <RiDoubleQuotesL className="text-4xl sm:text-5xl text-cyan-400/20 absolute -top-4 -left-2 sm:-left-4" />
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-light italic leading-relaxed text-justify tracking-wide pt-2">
                "Our journey at 4BIZ INTERNATIONAL LLC is defined by a relentless passion for excellence and an unwavering commitment to pioneering tomorrow's enterprise architectures today. We don't just engineer premium digital environments; we forge hyper-scalable ecosystems that empower global partners to unlock unprecedented performance indicators and rewrite industry standard matrices."
              </p>
              
              <div className="mt-6 pt-4 flex flex-col space-y-1">
                <span className="text-2xl font-black tracking-wide text-white">
                  Ibrahim Valapra
                </span>
                <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Chief Executive Officer
                </span>
                <span className="text-sm font-mono uppercase tracking-[0.18em] text-cyan-300 font-extrabold mt-1.5 bg-cyan-950/20 border border-white/[0.03] px-3 py-1 rounded-md w-fit shadow-[0_0_15px_rgba(34,211,238,0.05)]">
                  4BIZ INTERNATIONAL LLC
                </span>
              </div>
            </div>
          </div>

          {/* CEO Image Container - Optimized bounds layout with hardware acceleration layer */}
          <div className="w-full lg:w-[45%] flex justify-center items-end relative h-[450px] sm:h-[500px] transform-gpu">
            <div className="absolute bottom-0 w-[80%] h-[70%] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />
            
            <div 
              className="relative w-full h-full max-w-[380px] overflow-hidden flex items-end select-none pointer-events-none transform-gpu"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)'
              }}
            >
              <Image 
                src="/persons/4biz_international-ceo.png" 
                alt="4BIZ INTERNATIONAL LLC CEO Ibrahim"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-contain object-bottom"
                priority={true}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="relative z-10 w-full block bg-[#020721] -mb-1 pb-0">
        <Contact />
      </section>

      {/* Smooth Ambient Cursor Spotlighting Tracker Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: spotlightBackground }}
      />
    </div>
  );
}