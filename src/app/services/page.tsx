"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, Users, Cpu, Monitor, Zap, 
  Mail, Server, Lock, Layers, CheckCircle2 
} from "lucide-react";
import Contact from "@/components/Contact";

interface ServiceBlock {
  title: string;
  description: string;
  icon: React.ReactNode;
  visualAsset: string;
  points: string[];
  accentColor: string;
  glowColor: string;
}

export default function ServicesPage() {
  const totalServices: ServiceBlock[] = [
    {
      title: "Digital Workplace & Productivity Solutions",
      description: "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
      icon: <Users className="text-[#00e5a3]" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      accentColor: "from-[#00e5a3] to-emerald-400",
      glowColor: "from-[#00e5a3]/30 via-emerald-500/5 to-transparent",
      points: [
        "Microsoft 365", "Google Workspace", "Zoho Workplace", 
        "Exchange Email Solutions", "Business Email Setup", 
        "Team Collaboration Tools", "Document Management", "Workflow Automation"
      ]
    },
    {
      title: "Enterprise Business Applications (ERP & CRM)",
      description: "Streamline operations, improve customer engagement, and gain real-time business insights through integrated ERP and CRM platforms tailored to your business needs.",
      icon: <Cpu className="text-cyan-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
      accentColor: "from-cyan-400 to-blue-500",
      glowColor: "from-cyan-500/30 via-blue-500/5 to-transparent",
      points: [
        "Custom ERP Development", "Custom CRM Development", "Microsoft Dynamics 365", 
        "Odoo ERP", "ERPNext", "4Biz ERP Solutions", "Sales Automation", 
        "Customer Relationship Management", "Inventory & Finance Management", "HR & Payroll Solutions"
      ]
    },
    {
      title: "Web, Mobile & Commerce Solutions",
      description: "Create powerful digital experiences with scalable websites, mobile applications, and eCommerce platforms designed for performance and growth.",
      icon: <Monitor className="text-blue-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
      accentColor: "from-blue-400 to-indigo-500",
      glowColor: "from-blue-500/30 via-indigo-500/5 to-transparent",
      points: [
        "UI/UX Design", "Corporate Website Development", "Web Application Development", 
        "Mobile App Development", "E-commerce Solutions", "CMS Development", 
        "Progressive Web Apps (PWA)", "Payment Gateway Integration", "API Integration", "Portal Development"
      ]
    },
    {
      title: "Digital Growth, Marketing & Brand Experience",
      description: "Drive traffic, increase conversions, and build a memorable brand presence through data-driven marketing and modern digital engagement strategies.",
      icon: <Zap className="text-amber-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1000&q=80",
      accentColor: "from-amber-400 to-orange-500",
      glowColor: "from-amber-500/30 via-orange-500/5 to-transparent",
      points: [
        "SEO (Search Engine Optimization)", "AEO (Answer Engine Optimization)", "Social Media Management", 
        "Social Media Advertising", "Performance Marketing", "Content Marketing", "Brand Strategy", 
        "Corporate Branding", "Creative Design", "Video Marketing", "Campaign Management", 
        "Influencer Marketing", "Online Reputation Management"
      ]
    },
    {
      title: "Communication & Customer Engagement Solutions",
      description: "Connect with your audience through intelligent communication platforms that improve engagement, retention, and customer relationships.",
      icon: <Mail className="text-purple-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1000&q=80",
      accentColor: "from-purple-400 to-pink-500",
      glowColor: "from-purple-500/30 via-pink-500/5 to-transparent",
      points: [
        "Email Marketing", "SMS Marketing", "WhatsApp Business Solutions", 
        "Marketing Automation", "Bulk Messaging Solutions", "Newsletter Campaigns", 
        "Customer Engagement Workflows", "Lead Nurturing Solutions"
      ]
    },
    {
      title: "Cloud, Hosting & Infrastructure Services",
      description: "Build a secure and scalable digital foundation with enterprise-grade hosting, cloud infrastructure, and managed IT services.",
      icon: <Server className="text-emerald-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      accentColor: "from-emerald-400 to-teal-500",
      glowColor: "from-emerald-500/30 via-teal-500/5 to-transparent",
      points: [
        "Domain Registration", "International & Country TLDs", "Shared Hosting", 
        "Reseller Hosting", "VPS Hosting", "Dedicated Servers", "AWS Cloud Solutions", 
        "Microsoft Azure Solutions", "Cloud Migration", "Server Management", 
        "Backup Solutions", "Storage Solutions", "Disaster Recovery"
      ]
    },
    {
      title: "Cybersecurity & Digital Protection",
      description: "Protect your organization from evolving cyber threats with proactive security assessments, monitoring, and advanced protection solutions.",
      icon: <Lock className="text-red-400" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85",
      accentColor: "from-red-500 to-rose-500",
      glowColor: "from-red-500/30 via-rose-500/5 to-transparent",
      points: [
        "Penetration Testing", "Vulnerability Assessment", "Malware Analysis", 
        "Threat Intelligence", "Security Audits", "SSL Certificates", "Website Security", 
        "SiteLock Protection", "Endpoint Security", "Email Security", "Security Monitoring", "Compliance Readiness"
      ]
    },
    {
      title: "Digital Transformation & Emerging Technologies",
      description: "Transform traditional operations into intelligent, data-driven digital enterprises through AI, automation, cloud technologies, and innovation-led strategies.",
      icon: <Layers className="text-lime-400" size={22} />,
      visualAsset: "/services/ai-1.png", // Preserved completely untouched as requested
      accentColor: "from-lime-400 to-emerald-400",
      glowColor: "from-lime-500/40 via-emerald-500/10 to-transparent",
      points: [
        "Artificial Intelligence Solutions", "Generative AI Integration", "AI Chatbots & Assistants", 
        "Business Process Automation", "Data Analytics & BI", "Digital Transformation Consulting", 
        "IT Infrastructure Modernization", "Cloud Transformation", "Enterprise Automation", 
        "Industry 4.0 Enablement", "Process Re-engineering", "Technology Consulting", "Software Licensing & Trading", 
        "Adobe Solutions", "Microsoft Solutions", "SaaS Licensing", "Online & On-Premise Licensing"
      ]
    }
  ];

  return (
    <div className="w-full bg-[#070d24] text-slate-100 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-[#00e5a3] selection:text-black scroll-smooth">
      
      {/* Global Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,163,0.05),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Boxless, Centered, Perfectly Balanced Hero Section */}
      <header className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-16 z-10">
        {/* Immersive Background Canvas Blend */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
            alt="Hero matrix structural backdrop"
            fill
            priority
            className="object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d24] via-transparent to-[#070d24]" />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
          <span className="text-sm font-bold tracking-[0.45em] uppercase text-[#00e5a3] mb-5 block">
            // Enterprise Architecture Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase text-white max-w-5xl mx-auto">
            Meet our network of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a3] via-cyan-400 to-purple-400">
              industry trailblazers.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-normal text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We help our clients unlock growth by focusing on four key solution areas.
          </p>
        </div>
      </header>

      {/* Borderless Continuously Merged Content Grid */}
      <main className="w-full relative z-10 flex flex-col gap-28 sm:gap-40 lg:gap-48 pb-32">
        {totalServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={index} 
              className="w-full scroll-mt-24 border-none outline-none"
            >
              <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16 xl:gap-24`}>
                
                {/* Visual Canvas Layer - Zero Card Borders, Seamless Blend */}
                <div className="w-full lg:w-1/2 flex justify-center items-center h-[260px] sm:h-[380px] md:h-[420px] lg:h-[460px] relative group">
                  
                  {/* Underlay Gradient Glow Aura */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.glowColor} blur-[90px] opacity-80 scale-95 transition-transform duration-1000 pointer-events-none`} />
                  
                  {/* Blended Image Container */}
                  <div className="relative w-full h-full transform transition-all duration-1000 ease-out mix-blend-screen group-hover:scale-[1.02]">
                    <Image
                      src={service.visualAsset}
                      alt={service.title}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="object-contain opacity-90 saturate-[140%] brightness-[105%] transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>

                {/* Free Floating Premium Typographic Layout */}
                <div className="w-full lg:w-1/2 flex flex-col text-left">
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm sm:text-base font-mono tracking-widest text-[#00e5a3]">
                      0{index + 1} &mdash;
                    </span>
                    <div className="text-slate-400 opacity-75">
                      {service.icon}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
                    {service.description}
                  </p>

                  {/* Flowing Organic Clouds (No boxes, clean borderless text chips with scaled font size) */}
                  <div className="flex flex-wrap gap-x-3 gap-y-2.5 mb-8 max-w-xl">
                    {service.points.map((point, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center gap-2 bg-slate-950/20 backdrop-blur-sm py-1.5 px-3 rounded-md border border-slate-900/40 hover:border-slate-800/60 transition-colors duration-300"
                      >
                        <CheckCircle2 size={13} className="text-[#00e5a3] shrink-0" />
                        <span className="text-slate-300 text-sm font-medium tracking-wide">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* High-Tech Dynamic Action Button Grid Overlay */}
                  <div className="pt-2">
                    <a
                      href={`/services/${encodeURIComponent(service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`}
                      className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 hover:from-slate-850 hover:to-slate-800 border border-slate-800/80 hover:border-[#00e5a3] px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-widest shadow-xl shadow-black/30 hover:shadow-[#00e5a3]/5 transition-all duration-300 ease-out"
                    >
                      <span>Read More</span>
                      <ArrowRight size={15} className="text-[#00e5a3] transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* Global Interactive Engagement Footer */}
      <footer className="w-full relative z-20 bg-[#070d24]">
        <Contact />
      </footer>
    </div>
  );
}