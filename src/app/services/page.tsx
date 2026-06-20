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
      { threshold: 0.12 }
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
      className={`transition-all duration-1000 ease-out transform will-change-transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.99]"
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
      visualAsset: "/services/digital-workplace-productivity-solutions-1.png",
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
      visualAsset: "/services/enterprise-business-applications-erp-crm-1.png",
      accentColor: "from-cyan-400 to-blue-500",
      glowColor: "from-cyan-500/40 via-blue-500/10 to-transparent",
      url: "/services/enterprise-business-applications-erp-crm",
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
      visualAsset: "/services/web-mobile-commerce-solutions.png",
      accentColor: "from-blue-400 to-indigo-500",
      glowColor: "from-blue-500/40 via-indigo-500/10 to-transparent",
      url: "/services/web-mobile-commerce-solutions",
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
      visualAsset: "/services/digital-growth-marketing-brand-experience.png",
      accentColor: "from-amber-400 to-orange-500",
      glowColor: "from-amber-500/40 via-orange-500/10 to-transparent",
      url: "/services/digital-growth-marketing-brand-experience",
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
      visualAsset: "/services/communication-customer-engagement-solutions.png",
      accentColor: "from-purple-400 to-pink-500",
      glowColor: "from-purple-500/40 via-pink-500/10 to-transparent",
      url: "/services/communication-customer-engagement-solutions",
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
      visualAsset: "/services/cloud-hosting-infrastructure-services.png",
      accentColor: "from-emerald-400 to-teal-500",
      glowColor: "from-emerald-500/40 via-teal-500/10 to-transparent",
      url: "/services/cloud-hosting-infrastructure-services",
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
      visualAsset: "/services/cybersecurity-digital-protection.png",
      accentColor: "from-red-500 to-rose-500",
      glowColor: "from-red-500/40 via-rose-500/10 to-transparent",
      url: "/services/cybersecurity-digital-protection",
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
      visualAsset: "/services/digital-transformation-emerging-technologies.png", 
      accentColor: "from-lime-400 to-emerald-400",
      glowColor: "from-lime-500/50 via-emerald-500/15 to-transparent",
      url: "/services/digital-transformation-emerging-technologies",
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
    <div className="w-full bg-[#050b21] text-slate-100 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-[#00e5a3] selection:text-black scroll-smooth">
      
      {/* Persistent Radial Gradient Overlay Matching the Reference Color Fields */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_30%,#12286b_0%,#081236_50%,#04091f_100%)] pointer-events-none z-0" />
      
      {/* High-Tech Architectural Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />
      
      {/* Ultra-Modern Connected Vector Spline System covering top header to footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50 mix-blend-screen">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 5000" preserveAspectRatio="none">
          {/* Header Spline Structure */}
          <path d="M-100,150 C350,280 200,50 750,380 C1100,620 950,150 1600,450" fill="none" stroke="url(#spline-gradient-blue)" strokeWidth="3" />
          {/* Middle Body Splines */}
          <path d="M1500,600 C1100,1200 800,900 500,1700 C200,2300 700,2100 -100,2700" fill="none" stroke="url(#spline-gradient-neon)" strokeWidth="2.5" />
          <path d="M-80,1800 C400,2200 950,1700 1100,2900 C1250,3800 600,3900 1550,4400" fill="none" stroke="url(#spline-gradient-blue)" strokeWidth="2" opacity="0.8" />
          {/* Adjusted to gracefully extend dynamically into the 5000 base threshold */}
          <path d="M1500,2500 C1000,3100 500,2800 200,3800 C-50,4500 400,4700 800,5000" fill="none" stroke="url(#spline-gradient-neon)" strokeWidth="1.5" opacity="0.6" />
          {/* Additional bottom spline layer to maintain density right above the footer */}
          <path d="M-50,4100 C300,4400 800,4200 1100,4600 C1250,4850 950,4950 1550,5000" fill="none" stroke="url(#spline-gradient-blue)" strokeWidth="2.5" opacity="0.5" />
          
          <defs>
            <linearGradient id="spline-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#a855f7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#04091f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spline-gradient-neon" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00e5a3" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#050b21" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Layered Dynamic Luminous Auras */}
      <div className="absolute top-[5%] left-[-5%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[55vw] h-[55vw] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Seamless Hero Presentation Section */}
      <header className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden pt-36 pb-16 z-10">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
          <span className="text-sm font-bold tracking-[0.45em] uppercase text-[#00e5a3] mb-5 block">
            // Enterprise Architecture Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase text-white max-w-5xl mx-auto">
            Meet our network of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a3] via-cyan-400 to-blue-400">
              industry trailblazers.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-normal text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We help our clients unlock growth by focusing on modern architectural solution spaces.
          </p>
        </div>
      </header>

      {/* Structured Content Grid Stream */}
      <main className="w-full relative z-10 flex flex-col">
        {totalServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={index} 
              className="w-full relative scroll-mt-24 py-14 sm:py-20 lg:py-24"
            >
              <div className="relative z-10">
                <ScrollReveal>
                  <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-16 xl:gap-24`}>
                    
                    {/* Graphics / Visual Asset Column */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[240px] sm:h-[360px] md:h-[400px] lg:h-[440px] relative group">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.glowColor} blur-[80px] sm:blur-[100px] opacity-90 scale-95 transition-transform duration-1000 pointer-events-none`} />
                      
                      <div className="relative w-full h-full transform transition-all duration-1000 ease-out mix-blend-screen group-hover:scale-[1.03]">
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

                    {/* Typography Content Unit */}
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

                      {/* Info Value Chips */}
                      <div className="flex flex-wrap gap-x-3 gap-y-2.5 mb-8 max-w-xl">
                        {service.points.map((point, pIdx) => (
                          <div 
                            key={pIdx}
                            className="flex items-center gap-2 bg-[#0d1b47]/40 backdrop-blur-md py-1.5 px-3 rounded-md border border-white/[0.05] hover:border-blue-500/40 transition-colors duration-300"
                          >
                            <CheckCircle2 size={13} className="text-[#00e5a3] shrink-0" />
                            <span className="text-slate-100 text-sm font-medium tracking-wide">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Action Trigger */}
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

      {/* Global Interactive Engagement Footer Container */}
      <footer className="w-full relative z-20 bg-transparent">
        <Contact />
      </footer>
    </div>
  );
}