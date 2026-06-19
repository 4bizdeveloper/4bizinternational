import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

// Ultra-optimized SEO Meta Tags (Preserved perfectly)
export const metadata: Metadata = {
  title: 'Digital Workplace & Productivity Solutions | 4Biz International',
  description: 'Transform your business with modern digital workplace architecture, cloud productivity infrastructure, and automated workflows designed for global operations.',
  openGraph: {
    title: 'Digital Workplace & Productivity Solutions | 4Biz International',
    description: 'Empower hybrid teams with seamless cloud environments and high-performance workflow automation.',
    url: 'https://4bizinternational.vercel.app/services/digital-workplace',
    type: 'website',
  },
};

export default function DigitalWorkplacePage() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      
      {/* ================= GLOBAL ULTRA-MODERN DYNAMIC BACKGROUND ================= */}
      {/* Implements the exact rich, glowing, non-dull radial blue gradient from your image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Radial Glow Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
        
        {/* 3D Splines Matrix: Hardware-accelerated SVG lines that shift perspective natively as the user scrolls */}
        <svg 
          className="absolute inset-0 w-full h-[200vh] opacity-40 mix-blend-screen will-change-transform transform motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
          style={{
            transform: 'translateY(calc(var(--scroll-y, 0px) * -0.15))',
            perspective: '1000px'
          }}
          viewBox="0 0 1440 1800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-100 200C300 400 500 -50 900 350C1300 750 800 1200 1600 1100" 
            stroke="url(#splineGradient1)" 
            strokeWidth="2.5" 
            strokeDasharray="8 4"
          />
          <path 
            d="M-50 450C450 150 200 800 850 650C1500 500 1100 1400 1550 1500" 
            stroke="url(#splineGradient2)" 
            strokeWidth="1.5" 
          />
          <path 
            d="M150 100C250 500 800 300 700 900C600 1500 1300 1200 1350 1750" 
            stroke="url(#splineGradient1)" 
            strokeWidth="1" 
            opacity="0.6"
          />
          
          <defs>
            <linearGradient id="splineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="splineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>

        {/* CSS-only clean dynamic scroll-illusion layer */}
        <div className="absolute inset-0 bg-attachment-scroll bg-[linear-gradient(to_bottom,rgba(4,10,33,0)_0%,rgba(4,10,33,0.4)_100%)] mix-blend-multiply" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10">
        
        {/* ================= HERO SECTION (CLEAN & IMAGELESS) ================= */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4 block backdrop-blur-sm bg-blue-950/30 px-4 py-1.5 rounded-full border border-blue-500/10">
              Next-Gen Enterprise Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] pb-6 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
              Architecting the Future of Distributed Work
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal transparent-content">
              Eliminate operational friction, unify disparate teams, and accelerate daily output with enterprise-grade cloud ecosystems designed for fluid productivity.
            </p>
          </div>
        </section>

        {/* ================= VISUAL FLOW: IMAGE & NARRATIVE ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Fluid Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Seamlessly Synchronized Infrastructure
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Traditional workplace architectures are failing the demands of modern cross-border collaboration. We replace fragmented toolsets with integrated workspaces that maintain continuous data compliance and high-speed asset access anywhere on earth.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                By combining identity management, cloud storage matrices, and predictive communication lanes, your enterprise scales organically without sacrificing operational security.
              </p>
            </div>

            {/* Seamless Immersive Graphic Layer */}
            <div className="lg:col-span-7 relative w-full aspect-[16/10] flex items-center justify-center">
              <div className="absolute w-[80%] h-[80%] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />
              <Image
                src="/services/ai-1.png"
                alt="Advanced Digital Workplace Node Network Infrastructure"
                fill
                sizes="(max-w-1024px) 100vw, 700px"
                className="object-contain mix-blend-screen transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* ================= CORE CAPABILITIES ================= */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Core Capabilities
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded" />
            </div>

            {/* Pure Borderless Typography Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">01 //</span>
                <h3 className="text-xl font-bold text-white tracking-wide">Unified Communication Frameworks</h3>
                <p className="text-slate-400 leading-relaxed">
                  Consolidate enterprise chat, audio, video syncs, and documentation layers into high-speed hubs that completely eliminate communication lag.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">02 //</span>
                <h3 className="text-xl font-bold text-white tracking-wide">Intelligent Workflow Automation</h3>
                <p className="text-slate-400 leading-relaxed">
                  Offload recurring, logic-driven tasks onto cloud native background engines, liberating your experts to focus on deep strategic execution.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">03 //</span>
                <h3 className="text-xl font-bold text-white tracking-wide">Zero-Trust Security & Identity</h3>
                <p className="text-slate-400 leading-relaxed">
                  Protect global data pipelines with granular, identity-verified credentials and end-to-end device management that safeguards proprietary assets.
                </p>
              </div>

              <div className="space-y-3 group">
                <span className="text-blue-400 text-lg font-mono block transition-colors group-hover:text-blue-300">04 //</span>
                <h3 className="text-xl font-bold text-white tracking-wide">Predictive Analytics Dashboards</h3>
                <p className="text-slate-400 leading-relaxed">
                  Gain real-time metrics into global operational velocities and cross-functional project resource deployment without manually mining system logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECOND VISUAL FLOW: CONTEXT & RESULTS ================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Immersive Image */}
            <div className="lg:col-span-7 order-last lg:order-first relative w-full aspect-[16/10] flex items-center justify-center">
              <div className="absolute w-[80%] h-[80%] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />
              <Image
                src="/services/ai-1.png"
                alt="High performance UI monitoring and clean workflow automation platforms"
                fill
                sizes="(max-w-1024px) 100vw, 700px"
                className="object-cover mix-blend-screen transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Fluid Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Engineered for Instant Performance
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                We deploy productivity environments using edge computing arrays and modern server architectures. Your team experiences zero micro-stuttering, instant interface reactions, and fluid page state transitions.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Every system is fine-tuned to maintain absolute visual consistency—there are no jumping columns, popping content frames, or erratic layout shifts.
              </p>
            </div>

          </div>
        </section>

        {/* ================= CLOSING ACTION ================= */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Unshackle Your Global Workforce?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Let’s systematically upgrade your workflows, streamline cross-functional asset channels, and scale operations.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase bg-blue-600 rounded-full hover:bg-blue-500 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
              >
                Consult with our Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}