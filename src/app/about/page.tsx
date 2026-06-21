"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, useInView } from 'framer-motion';
import Image from 'next/image';
import { 
  RiCompass3Line, 
  RiFocus2Line, 
  RiShieldFlashLine, 
  RiCpuLine, 
  RiGlobalLine, 
  RiDoubleQuotesL,
  RiRocketLine,
  RiEyeLine
} from 'react-icons/ri';
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

  return <span ref={ref} className="text-3xl sm:text-5xl font-black text-white" />;
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
      className="group relative w-full min-h-screen text-white overflow-hidden font-sans select-none selection:bg-cyan-500 selection:text-black bg-[#060c31] sm:bg-[radial-gradient(circle_at_center,rgba(11,29,87,1)_0%,rgba(6,12,49,1)_100%)]"
    >
      {/* Ambient Premium Core Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[85vw] h-[85vw] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[15%] right-[-5%] w-[75vw] h-[75vw] rounded-full bg-gradient-to-bl from-purple-600/15 via-blue-500/10 to-transparent blur-[140px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 blur-[160px] pointer-events-none" />
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-3/5 flex flex-col space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">Digital Vanguard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.1] sm:leading-[1.05]">
            ABOUT <br />
            <span className="inline-block pr-3 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              4BIZ INTERNATIONAL
            </span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed font-light">
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
          className="w-full lg:w-2/5 flex items-center justify-center relative min-h-[320px] sm:min-h-[400px] lg:min-h-[420px]"
          style={{ perspective: 1200 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu scale-95 sm:scale-100">
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 bg-radial-gradient from-cyan-500/30 via-pink-500/20 to-transparent blur-2xl animate-pulse" />
            <div className="absolute w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[4px] sm:border-[6px] border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.4)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border-[3px] sm:border-[4px] border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite_0.9s]" />
            <div className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border-[3px] sm:border-[5px] border-purple-500/10 shadow-[0_0_35px_rgba(168,85,247,0.2)] animate-[ping_3.5s_cubic-bezier(0.16,1,0.3,1)_infinite_1.8s]" />
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-[2px] sm:border-[3px] border-dashed border-cyan-400/40 animate-[spin_25s_linear_infinite]" />
            <div className="absolute w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] lg:w-[23rem] lg:h-[23rem] rounded-full border-[1.5px] sm:border-[2px] border-double border-pink-500/30 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute w-[19rem] h-[19rem] sm:w-[23rem] sm:h-[23rem] lg:w-[26rem] lg:h-[26rem] rounded-full border-[3px] sm:border-[4px] border-transparent border-t-purple-500/40 border-b-teal-400/40 animate-[spin_35s_linear_infinite]" />
          </div>

          <div className="absolute inset-0 bg-radial-gradient from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative w-44 h-24 sm:w-64 sm:h-32 lg:w-80 lg:h-40 transition-transform duration-700 hover:scale-105 transform-gpu filter drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]">
            <Image
              src="/4biz_logo-1.png"
              alt="4Biz International Corporate Logo"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 320px"
              className="object-contain relative z-10"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ─── NUMERIC STATS ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 border-t border-b border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 md:pl-4 md:border-l border-white/15 first:border-0 py-2">
              <div className="flex items-center justify-center md:justify-start space-x-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION & VISION SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-12 flex flex-col space-y-16">
        <div className="w-full flex flex-col space-y-12">
          
          {/* OUR MISSION BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-4 flex items-center space-x-4 lg:space-x-6">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <RiRocketLine className="text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mission</span>
              </h3>
            </div>
            <div className="md:col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                To empower businesses with innovative technology, digital solutions, and expert support that drive growth, efficiency, and lasting success.
              </p>
            </div>
          </motion.div>

          {/* OUR VISION BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-4 flex items-center space-x-4 lg:space-x-6">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-purple-500/15 border border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <RiEyeLine className="text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Vision</span>
              </h3>
            </div>
            <div className="md:col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-purple-500/30 transition-all duration-300">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                To inspire infinite possibilities by helping businesses embrace innovation, achieve sustainable growth, and thrive in the digital future.
              </p>
            </div>
          </motion.div>
        </div>

        {/* IMPACTING INFINITE BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full text-center pt-4 flex flex-col items-center justify-center space-y-4"
        >
          <h4 className="text-2xl sm:text-4xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(6,182,212,0.25)]">
            IMPACTING INFINITE..!!
          </h4>
          <div className="w-24 sm:w-36 h-[3px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl font-light tracking-wide px-4 leading-relaxed pt-2">
            Creating limitless opportunities through technology, innovation, and business excellence
          </p>
        </motion.div>
      </section>

      {/* ─── BRAND STORY & VIDEO SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Extended Text Block */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="flex flex-col space-y-3">
            <div className="inline-flex items-center space-x-2 text-purple-400 font-mono text-xs uppercase tracking-widest font-bold">
              <RiFocus2Line className="text-base animate-spin" style={{ animationDuration: '6s' }} />
              <span>Operational DNA & Strategy Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Brand Story
            </h2>
          </div>
          
          <div className="space-y-6 text-white/80 text-base sm:text-lg font-light leading-relaxed text-justify">
            <p>
              At 4Biz International, we see a digital landscape full of untapped potential. We transform that potential into performance by merging cutting-edge technological innovation with master-class strategic planning. Our mission is to scale your vision, optimize your operations, and ensure your business doesn't just survive the digital evolution—it leads it.
            </p>
            <p>
              We drive organizational change through technical excellence and precision architecture. Our global frameworks provide companies with advanced cloud integrations, fluid user experience platforms, and scalable data models tailored for complex industries. By removing structural barriers, we turn digital capabilities into real market advantages.
            </p>
          </div>

          {/* Value Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                <RiCpuLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Elite Infrastructure</h4>
                <p className="text-xs text-white/50 leading-normal">High-throughput custom application stacks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300">
                <RiShieldFlashLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Absolute Velocity</h4>
                <p className="text-xs text-white/50 leading-normal">Zero-latency optimization protocols.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-black transition-all duration-300">
                <RiGlobalLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Global Scale</h4>
                <p className="text-xs text-white/50 leading-normal">Cross-border operations across top clusters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Video - Smartphone Chassis */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[9/16] rounded-[2.8rem] p-3.5 bg-[#0e1436] border-[4px] border-[#252f63] shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] group transform-gpu transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/50">
            <div className="absolute top-[24%] -left-[8px] w-[4px] h-9 bg-[#2e3b7a] rounded-l border-l border-white/10 shadow-md z-50" />
            <div className="absolute top-[32%] -left-[8px] w-[4px] h-9 bg-[#2e3b7a] rounded-l border-l border-white/10 shadow-md z-50" />
            <div className="absolute top-[28%] -right-[8px] w-[4px] h-12 bg-[#2e3b7a] rounded-r border-r border-white/10 shadow-md z-50" />
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-center space-x-1.5 px-3">
              <div className="w-8 h-1 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#1c2247]" />
            </div>
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative border border-black shadow-inner">
              <iframe
                className="w-full h-full relative z-10 border-0"
                src={embedVideoUrl}
                title="4Biz International Corporate Video Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CEO SECTION ─── */}
      <section
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-24 overflow-hidden"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* CEO Quote — Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6 order-2 lg:order-1 relative"
          >
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">Leadership Message</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">CEO Speaks</h2>
            </div>
            
            {/* Box Container with Inside-Positioned Quote Icon */}
            <div className="relative bg-[#0b1d57]/40 border border-cyan-500/20 p-6 sm:p-10 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col space-y-4">
              <div>
                <RiDoubleQuotesL className="text-4xl sm:text-5xl text-cyan-400/40 select-none" />
              </div>
              
              <p className="text-white/90 text-base sm:text-xl font-light italic leading-relaxed relative z-10">
                "Our philosophy centers on building digital systems with timeless structural integrity. We don't just solve modern execution challenges; we equip dynamic market leaders with scalable assets that spark continuous global influence and compound long-term returns."
              </p>
              
              <div className="pt-4 border-t border-white/10 flex flex-col">
                <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Chief Executive Officer
                </span>
                <span className="text-xs font-mono uppercase text-white/40 tracking-widest mt-1">
                  4Biz International
                </span>
              </div>
            </div>
          </motion.div>

          {/* CEO Image — Right Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full flex justify-center items-end self-end">
            <div className="relative w-full max-w-[350px] h-[460px] sm:h-[540px] lg:h-[450px] overflow-visible">
              
              {/* Dynamic Backlight Glow aura under image */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none -z-10 opacity-70"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Seamless Edge Masking Matrix (No Borders, Perfectly Dissolved Bottom) */}
              <div
                className="absolute inset-0 transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01]"
                style={{
                  willChange: 'transform',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
                }}
              >
                <Image
                  src="/persons/4biz_international-ceo-1.png"
                  alt="4Biz International CEO"
                  fill
                  sizes="(max-width: 768px) 350px, 350px"
                  className="object-cover object-top border-0 outline-none select-none pointer-events-none bg-transparent"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="relative z-10 w-full pt-12 md:pt-20">
        <div className="w-full px-0 mx-0">
          <Contact />
        </div>
      </section>

      {/* Smooth Ambient Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(34, 211, 238, 0.03), transparent 50%)`,
          // @ts-ignore
          '--x': smoothX,
          '--y': smoothY,
        }}
      />
    </div>
  );
}