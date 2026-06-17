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
  borderColor: string;
  glowColor: string; // Tailored lighting fields for zero-container visual blending
}

export default function ServicesPage() {
  const totalServices: ServiceBlock[] = [
    {
      title: "Digital Workplace & Productivity Solutions",
      description: "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
      icon: <Users className="text-[#00e5a3]" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-[#00e5a3] hover:bg-[#00e5a3] text-[#00e5a3]",
      glowColor: "from-[#00e5a3]/30 via-emerald-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-cyan-400 hover:bg-cyan-400 text-cyan-400",
      glowColor: "from-cyan-500/30 via-blue-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-blue-400 hover:bg-blue-400 text-blue-400",
      glowColor: "from-blue-500/30 via-indigo-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-amber-400 hover:bg-amber-400 text-amber-400",
      glowColor: "from-amber-500/30 via-orange-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-purple-400 hover:bg-purple-400 text-purple-400",
      glowColor: "from-purple-500/30 via-pink-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
      borderColor: "border-emerald-400 hover:bg-emerald-400 text-emerald-400",
      glowColor: "from-emerald-500/30 via-teal-500/10",
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
      visualAsset: "https://images.unsplash.com/photo-1563986764494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=85",
      borderColor: "border-red-500 hover:bg-red-500 text-red-500",
      glowColor: "from-red-500/30 via-rose-500/10",
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
      borderColor: "border-lime-400 hover:bg-lime-400 text-lime-400",
      glowColor: "from-lime-500/30 via-emerald-500/10",
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
    <div className="w-full bg-[#050b1e] text-white font-sans antialiased relative min-h-screen pt-28 sm:pt-36 md:pt-40 overflow-x-hidden selection:bg-[#00e5a3] selection:text-black scroll-smooth">
      
      {/* Background Grid & Lighting Architecture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-[900px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,163,0.15),transparent_60%)] pointer-events-none z-0" />

      {/* Main Title Architecture */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10 mb-24 sm:mb-32 lg:mb-40 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white uppercase animate-fade-in">
            MEET OUR NETWORK OF <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a3] via-cyan-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(0,229,163,0.3)]">
              INDUSTRY TRAILBLAZERS.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-light tracking-wide text-slate-300 max-w-2xl mx-auto leading-relaxed opacity-95 px-2 sm:px-0">
            We help our clients unlock growth by focusing on four key solution areas.
          </p>
        </div>
      </div>

      {/* Alternating Services Layout Framework */}
      <div className="w-full relative z-10 flex flex-col gap-28 sm:gap-36 lg:gap-48 pb-32 md:pb-44">
        {totalServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={index} 
              className="w-full scroll-mt-28 [content-visibility:auto] [contain-intrinsic-size:500px]"
            >
              <div className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 md:gap-16 lg:gap-20 xl:gap-24`}>
                
                {/* Visual Asset Area - Zero Container, Fully Translucent Borderless Blending */}
                <div className="w-full lg:w-1/2 flex justify-center items-center h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px] relative group">
                  
                  {/* Dynamic Hyper-Vibrant Lighting Core (Acts as the image's source illumination) */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.glowColor} to-transparent blur-[80px] sm:blur-[120px] opacity-100 scale-95 group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none will-change-transform`} />
                  
                  {/* Container-less Image Frame utilizing Screen/Color-Dodge Mix Modes */}
                  <div className="relative w-full h-full transform group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform mix-blend-screen">
                    <Image
                      src={service.visualAsset}
                      alt={service.title}
                      fill
                      priority={index <= 1}
                      loading={index <= 1 ? undefined : "lazy"}
                      className="object-contain opacity-95 saturate-[200%] brightness-[125%] contrast-[115%] transition-all duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Service Proposition Content Framework */}
                <div className="w-full lg:w-1/2 flex flex-col text-left">
                  <div className="flex items-center mb-5">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[#00e5a3] shadow-xl backdrop-blur-md">
                      {service.icon}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-5 text-white drop-shadow-sm">
                    {service.title}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal opacity-90">
                    {service.description}
                  </p>

                  {/* Dynamic Points Grid Matrices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.points.map((point, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a1435]/40 border border-slate-800/50 hover:border-slate-700 hover:bg-[#0f1d4a]/60 transition-all duration-300 transform hover:-translate-y-0.5 will-change-transform"
                      >
                        <CheckCircle2 size={16} className="text-[#00e5a3] shrink-0" />
                        <span className="text-slate-200 text-xs sm:text-sm font-medium tracking-wide leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Custom Action Callouts */}
                  <div className="pt-2">
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className={`group/cta inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all duration-300 gap-3 px-7 py-4 rounded-full border bg-transparent hover:text-black hover:font-black shadow-lg transform hover:-translate-y-0.5 will-change-transform ${service.borderColor}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} className="transform transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Semantic integration of Contact Section at bottom */}
      <footer className="w-full relative z-20 border-t border-slate-900/60 bg-[#050b1e]">
        <Contact />
      </footer>
    </div>
  );
}