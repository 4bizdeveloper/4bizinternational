import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

// Ultra-optimized SEO Meta Tags
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
    <div className="min-h-screen bg-[#080e25] text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth">
      
      {/* ================= HERO SECTION WITH INTEGRATED BACKGROUND IMAGE ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#080e25]">
        
        {/* Ultra Performance Background Image Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
            alt="Abstract Digital Infrastructure Flow Line Network Graphic"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover opacity-[0.18] mix-blend-screen transition-opacity duration-1000 scale-[1.02]"
          />
          {/* Edge masking to perfectly bleed image boundaries into uniform #080e25 background color */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080e25] via-transparent to-[#080e25] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e25] via-transparent to-[#080e25] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#080e25_90%)] pointer-events-none" />
        </div>
        
        {/* Core Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4 block">
            Next-Gen Enterprise Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] pb-6 break-words">
            Architecting the Future of Distributed Work
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate operational friction, unify disparate teams, and accelerate daily output with enterprise-grade cloud ecosystems designed for fluid productivity.
          </p>
        </div>
      </section>

      {/* ================= VISUAL FLOW: IMAGE & NARRATIVE ================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#080e25]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Fluid Narrative - No Card Boundaries */}
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

          {/* Seamless Immersive Image - COMPLETELY REMOVED BOX BACKGROUNDS AND SHADOW BOXES */}
          <div className="lg:col-span-7 relative w-full aspect-[16/10] flex items-center justify-center">
            {/* Organic light burst instead of rigid background block */}
            <div className="absolute w-[70%] h-[70%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <Image
              src="/services/ai-1.png"
              alt="Advanced Digital Workplace Node Network Infrastructure"
              fill
              sizes="(max-w-1024px) 100vw, 700px"
              className="object-contain mix-blend-screen transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080e25]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Core Capabilities
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded" />
          </div>

          {/* Pure Borderless Typography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            <div className="space-y-3">
              <span className="text-blue-500 text-lg font-mono block">01 //</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Unified Communication Frameworks</h3>
              <p className="text-slate-400 leading-relaxed">
                Consolidate enterprise chat, audio, video syncs, and documentation layers into high-speed hubs that completely eliminate communication lag.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-500 text-lg font-mono block">02 //</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Intelligent Workflow Automation</h3>
              <p className="text-slate-400 leading-relaxed">
                Offload recurring, logic-driven tasks onto cloud native background engines, liberating your experts to focus on deep strategic execution.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-500 text-lg font-mono block">03 //</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Zero-Trust Security & Identity</h3>
              <p className="text-slate-400 leading-relaxed">
                Protect global data pipelines with granular, identity-verified credentials and end-to-end device management that safeguards proprietary assets.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-500 text-lg font-mono block">04 //</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Predictive Analytics Dashboards</h3>
              <p className="text-slate-400 leading-relaxed">
                Gain real-time metrics into global operational velocities and cross-functional project resource deployment without manually mining system logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND VISUAL FLOW: CONTEXT & RESULTS ================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#080e25]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Seamless Immersive Image - COMPLETELY REMOVED BOX BACKGROUNDS AND SHADOW BOXES */}
          <div className="lg:col-span-7 order-last lg:order-first relative w-full aspect-[16/10] flex items-center justify-center">
            <div className="absolute w-[70%] h-[70%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <Image
              src="/services/ai-1.png"
              alt="High performance UI monitoring and clean workflow automation platforms"
              fill
              sizes="(max-w-1024px) 100vw, 700px"
              className="object-cover mix-blend-screen transition-transform duration-700 ease-out hover:scale-[1.03]"
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
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#080e25] text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.06),transparent_45%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Unshackle Your Global Workforce?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Let’s systematically upgrade your workflows, streamline cross-functional asset channels, and scale operations.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase bg-blue-600 rounded-full hover:bg-blue-500 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
            >
              Consult with our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}