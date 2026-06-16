"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, Users, Cpu, Monitor, Zap, 
  Mail, Server, Lock, Layers, CheckCircle2 
} from "lucide-react";

interface ServiceBlock {
  title: string;
  description: string;
  icon: React.ReactNode;
  visualAsset: string;
  points: string[];
  borderColor: string;
}

export default function ServicesPage() {
  const totalServices: ServiceBlock[] = [
    {
      title: "Digital Workplace & Productivity Solutions",
      description: "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
      icon: <Users className="text-[#00e5a3]" size={22} />,
      visualAsset: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-[#00e5a3] hover:bg-[#00e5a3] text-[#00e5a3]",
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
      // Replaced with ultra-vivid, premium dark neon datacenter setup with strong color presence
      visualAsset: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
      borderColor: "border-emerald-400 hover:bg-emerald-400 text-emerald-400",
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
      // Replaced with highly relevant, bright neon cyber defense operations visualization
      visualAsset: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=85",
      borderColor: "border-red-500 hover:bg-red-500 text-red-500",
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
      visualAsset: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80",
      borderColor: "border-lime-400 hover:bg-lime-400 text-lime-400",
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
    <div className="w-full bg-[#050b1e] text-white font-sans antialiased relative min-h-screen pt-28 sm:pt-36 md:pt-40 pb-24 md:pb-32 overflow-x-hidden selection:bg-[#00e5a3] selection:text-black">
      
      {/* Background Grid & Lighting Architecture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-[700px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,163,0.08),transparent_60%)] pointer-events-none z-0" />

      {/* Main Title Architecture */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10 mb-16 sm:mb-24 lg:mb-32 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#00e5a3] font-bold mb-4 bg-[#00e5a3]/5 px-3 py-1 rounded-full border border-[#00e5a3]/10">
            Digital Excellence Since 2010
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Our Core <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a3] via-cyan-400 to-indigo-400">
              Capabilities
            </span>
          </h1>
        </div>
      </div>

      {/* Alternating Services Layout Framework */}
      <div className="w-full relative z-10 flex flex-col gap-20 sm:gap-28 lg:gap-36">
        {totalServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section key={index} className="w-full scroll-mt-24">
              <div className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20`}>
                
                {/* Visual Asset Container - Infinite Blend Design */}
                <div className="w-full lg:w-1/2 flex justify-center items-center h-[240px] sm:h-[360px] md:h-[400px] lg:h-[460px] relative select-none pointer-events-none w-full">
                  
                  {/* Advanced CSS Blend & Feather Masks to completely remove borders */}
                  <div className="absolute inset-0 bg-[#050b1e]/10 z-20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1e] via-transparent to-[#050b1e] z-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050b1e] via-transparent to-[#050b1e] z-20" />
                  <div 
                    className="absolute inset-0 z-20 hidden sm:block" 
                    style={{
                      backgroundImage: "radial-gradient(circle at center, transparent 20%, #050b1e 72%)"
                    }}
                  />
                  <div 
                    className="absolute inset-0 z-20 block sm:hidden" 
                    style={{
                      backgroundImage: "radial-gradient(circle at center, transparent 35%, #050b1e 70%)"
                    }}
                  />
                  
                  {/* High Vibrant Frame Image Layer */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={service.visualAsset}
                      alt={service.title}
                      fill
                      priority={index <= 1}
                      loading={index <= 1 ? undefined : "lazy"}
                      className="object-cover opacity-75 saturate-200 brightness-125 contrast-125 transition-transform duration-700 ease-out"
                      sizes="(max-w-1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Service Proposition Content Framework */}
                <div className="w-full lg:w-1/2 flex flex-col text-left">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-900/60 text-[#00e5a3] shadow-md backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
                    {service.title}
                  </h2>

                  <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl font-normal">
                    {service.description}
                  </p>

                  {/* Dynamic Points Grid Matrices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.points.map((point, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#070f26]/30 border border-slate-950 hover:border-slate-800/30 hover:bg-[#070f26]/60 transition-all duration-200"
                      >
                        <CheckCircle2 size={14} className="text-[#00e5a3] shrink-0" />
                        <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-tight leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Custom Action Callouts */}
                  <div>
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className={`group/cta inline-flex items-center justify-center font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 gap-2.5 px-5 sm:px-6 py-3 rounded-full border bg-transparent hover:text-black hover:font-black shadow-md ${service.borderColor}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} className="transform transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Optimized Performance Custom Styling Rules */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth !important;
          background-color: #050b1e;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}