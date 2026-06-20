"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, useInView } from 'framer-motion';
import Image from 'next/image';
import { RiCompass3Line, RiFocus2Line, RiShieldFlashLine, RiCpuLine, RiGlobalLine, RiEyeLine, RiRocketLine, RiDoubleQuotesL } from 'react-icons/ri';
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

  const embedVideoUrl = "https://www.youtube.com/embed/xwGzKRwNSA0?autoplay=0&mute=1&rel=0&loop=1";

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full text-white overflow-hidden font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-500 transform-gpu bg-[#020721]"
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
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] break-words text-white py-1">
            Architecting <br className="hidden sm:block" />
            <span className="inline-block px-1 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              Digital Futures
            </span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            We are a high-performance global network crafting elite ecosystems, seamless architectures, and transformational growth platforms for modern market leaders.
          </p>
          <div className="pt-4">
            <a 
              href="#contact" 
              className="relative group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-cyan-400 hover:text-black shadow-lg hover:shadow-cyan-400/20 transform-gpu hover:-translate-y-0.5"
            >
              <span>Explore Architecture</span>
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
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 border-t border-b border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 md:pl-4 md:border-l border-white/15 first:border-0 py-2">
              <div className="flex items-center justify-center md:justify-start space-x-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION & VISION SECTION (ULTRA MODERN LAYOUT) ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Modern Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2rem] p-10 bg-gradient-to-b from-[#0b1542] via-[#050b24] to-[#030617] border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <RiRocketLine className="text-3xl" />
                </div>
                <span className="text-xs font-mono tracking-[0.3em] text-cyan-400/60 uppercase">01 / Purpose</span>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mission</span>
              </h3>
              <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed tracking-wide text-justify">
                To empower businesses with innovative technology, digital solutions, and expert support that drive growth, efficiency, and lasting success.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>EXPLORE FRAMEWORK</span>
              <span className="w-8 h-px bg-cyan-500/40 group-hover:w-16 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Modern Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2rem] p-10 bg-gradient-to-b from-[#140e3d] via-[#08051f] to-[#040212] border border-purple-500/20 hover:border-purple-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-purple-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <RiEyeLine className="text-3xl" />
                </div>
                <span className="text-xs font-mono tracking-[0.3em] text-purple-400/60 uppercase">02 / Horizon</span>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vision</span>
              </h3>
              <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed tracking-wide text-justify">
                To inspire infinite possibilities by helping businesses embrace innovation, achieve sustainable growth, and thrive in the digital future.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>EXPLORE DESTINATION</span>
              <span className="w-8 h-px bg-purple-500/40 group-hover:w-16 transition-all duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Center Typography Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center max-w-4xl mx-auto flex flex-col space-y-5 px-4"
        >
          <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 via-blue-400 to-purple-400 filter drop-shadow-[0_2px_20px_rgba(34,211,238,0.35)] uppercase py-2">
            Impacting Infinite..!!
          </h4>
          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-white/85 text-base sm:text-lg md:text-xl tracking-wide font-medium font-mono max-w-3xl mx-auto leading-relaxed">
            Creating limitless opportunities through technology, innovation, and business excellence
          </p>
        </motion.div>
      </section>

      {/* ─── EXECUTIVE LEADERSHIP / CEO SPEAKS SECTION (IMAGE FLIPPED & SMOOTH BOTTOM DISSOLVE) ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* CEO Insight Text Block (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%] flex flex-col space-y-6 text-left relative z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/15 to-transparent border border-purple-500/20 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-purple-400 font-bold">Executive Insights</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              CEO Speaks
            </h2>

            <div className="relative group p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl">
              <RiDoubleQuotesL className="text-4xl sm:text-5xl text-cyan-400/30 absolute -top-4 -left-2 sm:-left-4" />
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-light italic leading-relaxed text-justify tracking-wide pt-2">
                "Our journey at 4BIZ INTERNATIONAL LLC is defined by a relentless passion for excellence and an unwavering commitment to pioneering tomorrow's enterprise architectures today. We don't just engineer premium digital environments; we forge hyper-scalable ecosystems that empower global partners to unlock unprecedented performance indicators and rewrite industry standard matrices."
              </p>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col space-y-1">
                <span className="text-2xl font-black tracking-wide text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                  Ibrahim Valapra
                </span>
                <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Chief Executive Officer
                </span>
                <span className="text-sm font-mono uppercase tracking-[0.18em] text-cyan-300 font-extrabold mt-1.5 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  4BIZ INTERNATIONAL LLC
                </span>
              </div>
            </div>
          </motion.div>

          {/* CEO Image Container (Right Side - With Gradient Border-Free Cut Dissolve Layer) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex justify-center items-end relative"
          >
            <div className="absolute bottom-0 w-[80%] h-[70%] rounded-full bg-cyan-500/10 blur-[90px] mix-blend-screen pointer-events-none" />
            
            {/* Masking Style smoothly unifies the bottom layout perfectly while protecting native graphic textures */}
            <div 
              className="relative w-full max-w-[400px] aspect-[4/5] overflow-visible flex items-end"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
              }}
            >
              <Image 
                src="/persons/4biz_international-ceo.png" 
                alt="4BIZ INTERNATIONAL LLC CEO Ibrahim"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                priority={true}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── BRAND STORY & VIDEO CONTAINER (SWAPPED FROM RIGHT TO LEFT) ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-28 md:pt-14 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Brand Video Smartphone Framework (Left Side) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[9/16] rounded-[2.8rem] p-3.5 bg-[#0e1438] border-[4px] border-[#222e6b] shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.1)] group transform-gpu transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/50">
            <div className="absolute top-[24%] -left-[8px] w-[4px] h-9 bg-[#2b3a8a] rounded-l border-l border-white/10 shadow-md z-50" />
            <div className="absolute top-[32%] -left-[8px] w-[4px] h-9 bg-[#2b3a8a] rounded-l border-l border-white/10 shadow-md z-50" />
            <div className="absolute top-[28%] -right-[8px] w-[4px] h-12 bg-[#2b3a8a] rounded-r border-r border-white/10 shadow-md z-50" />
            
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-center space-x-1.5 px-3">
              <div className="w-8 h-1 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#161f52]" />
            </div>

            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative border border-black shadow-inner">
              <iframe
                className="w-full h-full relative z-10 border-0"
                src={embedVideoUrl}
                title="4Biz International Corporate Video Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content Block (Right Side) */}
        <div className="lg:col-span-7 flex flex-col space-y-8 order-1 lg:order-2">
          <div className="flex flex-col space-y-3">
            <div className="inline-flex items-center space-x-2 text-purple-300 font-mono text-xs uppercase tracking-widest font-bold">
              <RiFocus2Line className="text-base animate-spin" style={{ animationDuration: '6s' }} />
              <span>Operational DNA & Strategy Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Brand Story
            </h2>
          </div>
          
          <div className="space-y-6 text-white/90 text-base sm:text-lg font-light leading-relaxed text-justify">
            <p>
              At 4Biz International, we see a digital landscape full of untapped potential. We transform that potential into performance by merging cutting-edge technological innovation with master-class strategic planning. Our mission is to scale your vision, optimize your operations, and ensure your business doesn't just survive the digital evolution—it leads it.
            </p>
            <p>
              We drive organizational change through technical excellence and precision architecture. Our global frameworks provide companies with advanced cloud integrations, fluid user experience platforms, and scalable data models tailored for complex industries. By removing structural barriers, we turn digital capabilities into real market advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                <RiCpuLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Elite Infrastructure</h4>
                <p className="text-xs text-white/60 leading-normal">High-throughput custom application stacks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300">
                <RiShieldFlashLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Absolute Velocity</h4>
                <p className="text-xs text-white/60 leading-normal">Zero-latency optimization protocols.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-black transition-all duration-300">
                <RiGlobalLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Global Scale</h4>
                <p className="text-xs text-white/60 leading-normal">Cross-border operations across top clusters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION (GAP AND EDGE OVERLAP CORRECTION REMOVED DOUBLE SCROLL) ─── */}
      <section id="contact" className="relative z-10 w-full block bg-[#020721] -mb-1 pb-0">
        <Contact />
      </section>

      {/* Smooth Ambient Cursor Spotlighting Tracker Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(34, 211, 238, 0.04), transparent 50%)`,
          // @ts-ignore
          '--x': smoothX,
          '--y': smoothY,
        }}
      />
    </div>
  );
}