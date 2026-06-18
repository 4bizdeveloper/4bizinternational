"use client";

import React, { useEffect, useRef, useState } from "react";
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
  url: string;
}

// Simple local Scroll Reveal component to handle transitions when scrolling down
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.98]"
      }`}
    >
      {children}
    </div>
  );
}

export default function ServicesPage() {
  const totalServices: ServiceBlock[] = [
    {
      title: "Digital Workplace & Productivity Solutions",
      description: "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
      icon: <Users className="text-[#00e5a3]" size={22} />,
      visualAsset: "/services/ai-1.png",
      accentColor: "from-[#00e5a3] to-emerald-400",
      glowColor: "from-[#00e5a3]/40 via-emerald-500/10 to-transparent",
      url: "/services/digital-workplace-productivity-solutions",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-cyan-400 to-blue-500",
      glowColor: "from-cyan-500/40 via-blue-500/10 to-transparent",
      url: "/services/enterprise-applications",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-blue-400 to-indigo-500",
      glowColor: "from-blue-500/40 via-indigo-500/10 to-transparent",
      url: "/services/web-mobile-commerce",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-amber-400 to-orange-500",
      glowColor: "from-amber-500/40 via-orange-500/10 to-transparent",
      url: "/services/digital-marketing",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-purple-400 to-pink-500",
      glowColor: "from-purple-500/40 via-purple-500/10 to-transparent",
      url: "/services/customer-engagement",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-emerald-400 to-teal-500",
      glowColor: "from-emerald-500/40 via-emerald-500/10 to-transparent",
      url: "/services/cloud-infrastructure",
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
      visualAsset: "/services/ai-1.png",
      accentColor: "from-red-500 to-rose-500",
      glowColor: "from-red-500/40 via-rose-500/10 to-transparent",
      url: "/services/cybersecurity-protection",
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
      visualAsset: "/services/ai-1.png", 
      accentColor: "from-lime-400 to-emerald-400",
      glowColor: "from-lime-500/50 via-emerald-500/15 to-transparent",
      url: "/services/digital-transformation",
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
    <div className="w-full bg-[#121c42] text-slate-100 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-[#00e5a3] selection:text-black scroll-smooth">
      
      {/* Premium Technical Grid Line Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Global Ambient Glow Overlays (Brightened & intensified for depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,163,0.12),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[55%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[700px] h-[700px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Boxless, Centered, Perfectly Balanced Hero Section */}
      <header className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-24 z-10">
        {/* Immersive Background Canvas Blend */}
        <div className="absolute inset-0 z-0 opacity-[0.3] mix-blend-screen pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
            alt="Hero matrix structural backdrop"
            fill
            priority
            className="object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121c42] via-transparent to-[#121c42]" />
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
          <p className="mt-6 text-base sm:text-lg md:text-xl font-normal text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We help our clients unlock growth by focusing on four key solution areas.
          </p>
        </div>
      </header>

      {/* Borderless Continuously Merged Content Grid */}
      <main className="w-full relative z-10 flex flex-col">
        {totalServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={index} 
              className="w-full relative scroll-mt-24"
            >
              {/* Premium Curved Background with an explicit curved Line Transition Divider */}
              {!isEven && (
                <>
                  {/* Upper Curved Line transition */}
                  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 transform -translate-y-[99%]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#0b1129]">
                      <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                      <path d="M0,0 C300,90 900,90 1200,0" fill="none" stroke="#334155" strokeWidth="2" className="opacity-30" />
                    </svg>
                  </div>

                  {/* Dark Alternating Background Core */}
                  <div className="absolute inset-0 bg-[#0b1129] pointer-events-none z-0" />

                  {/* Lower Curved Line transition */}
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 transform translate-y-[99%]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#0b1129]">
                      <path d="M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z" fill="currentColor" />
                      <path d="M0,120 C300,30 900,30 1200,120" fill="none" stroke="#334155" strokeWidth="2" className="opacity-30" />
                    </svg>
                  </div>
                </>
              )}

              <div className="relative z-10 py-24 sm:py-32 lg:py-36">
                <ScrollReveal>
                  <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-16 xl:gap-24`}>
                    
                    {/* Visual Canvas Layer - Zero Card Borders, Seamless Blend */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[260px] sm:h-[380px] md:h-[420px] lg:h-[460px] relative group">
                      
                      {/* Underlay Gradient Glow Aura */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.glowColor} blur-[90px] opacity-90 scale-95 transition-transform duration-1000 pointer-events-none`} />
                      
                      {/* Blended Image Container */}
                      <div className="relative w-full h-full transform transition-all duration-1000 ease-out mix-blend-screen group-hover:scale-[1.04]">
                        <Image
                          src={service.visualAsset}
                          alt={service.title}
                          fill
                          priority={index === 0}
                          loading={index === 0 ? undefined : "lazy"}
                          className="object-contain opacity-95 saturate-[140%] brightness-[110%] transition-all duration-700"
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
                        <div className="text-slate-300 opacity-85">
                          {service.icon}
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
                        {service.description}
                      </p>

                      {/* Flowing Organic Clouds */}
                      <div className="flex flex-wrap gap-x-3 gap-y-2.5 mb-8 max-w-xl">
                        {service.points.map((point, pIdx) => (
                          <div 
                            key={pIdx}
                            className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md py-1.5 px-3 rounded-md border border-slate-700/60 hover:border-slate-500/80 transition-colors duration-300"
                          >
                            <CheckCircle2 size={13} className="text-[#00e5a3] shrink-0" />
                            <span className="text-slate-100 text-sm font-medium tracking-wide">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* High-Tech Dynamic Action Button Grid Overlay - Colorized and routing to service.url */}
                      <div className="pt-2">
                        <a
                          href={service.url}
                          className={`group/btn inline-flex items-center gap-3 bg-gradient-to-r ${service.accentColor} hover:saturate-[130%] px-6 py-3 rounded-full text-slate-950 font-bold text-sm uppercase tracking-widest shadow-xl shadow-black/30 hover:shadow-inherit transition-all duration-300 ease-out`}
                        >
                          <span>Read More</span>
                          <ArrowRight size={15} className="text-slate-950 transform transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                        </a>
                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        })}
      </main>

      {/* Global Interactive Engagement Footer */}
      <footer className="w-full relative z-20 bg-[#121c42]">
        <Contact />
      </footer>
    </div>
  );
}