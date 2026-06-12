"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  activeTabClass: string;
  btnGlowClass: string;
  backgroundImage: string;
  linkUrl: string; // Dynamic routing parameter for each service container
  showReadMoreBtn: boolean; // Config switch parameter to easily hide/unhide button at any time
}

const servicesData: ServiceItem[] = [
  {
    id: "digital-workplace",
    title: "1. Digital Workplace & Productivity",
    subtitle: "Digital Workplace & Productivity Solutions",
    description:
      "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
    points: [
      "Microsoft 365",
      "Google Workspace",
      "Zoho Workplace",
      "Exchange Email Solutions",
      "Business Email Setup",
      "Team Collaboration Tools",
      "Document Management",
      "Workflow Automation"
    ],
    activeTabClass: "bg-blue-600 text-white shadow-xl shadow-blue-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/40 focus:ring-blue-400",
    backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/digital-workplace",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "enterprise-apps",
    title: "2. Enterprise Business Applications",
    subtitle: "Enterprise Business Applications (ERP & CRM)",
    description:
      "Streamline operations, improve customer engagement, and gain real-time business insights through integrated ERP and CRM platforms tailored to your business needs.",
    points: [
      "Custom ERP Development",
      "Custom CRM Development",
      "Microsoft Dynamics 365",
      "Odoo ERP",
      "ERPNext",
      "4Biz ERP Solutions",
      "Sales Automation",
      "Customer Relationship Management",
      "Inventory & Finance Management",
      "HR & Payroll Solutions"
    ],
    activeTabClass: "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/40 focus:ring-indigo-400",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/enterprise-applications",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "web-mobile-commerce",
    title: "3. Web, Mobile & Commerce",
    subtitle: "Web, Mobile & Commerce Solutions",
    description:
      "Create powerful digital experiences with scalable websites, mobile applications, and eCommerce platforms designed for performance and growth.",
    points: [
      "UI/UX Design",
      "Corporate Website Development",
      "Web Application Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "CMS Development",
      "Progressive Web Apps (PWA)",
      "Payment Gateway Integration",
      "API Integration",
      "Portal Development"
    ],
    activeTabClass: "bg-pink-600 text-white shadow-xl shadow-pink-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-pink-600 hover:bg-pink-500 shadow-pink-600/40 focus:ring-pink-400",
    backgroundImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/web-mobile-commerce",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "digital-growth",
    title: "4. Digital Growth & Branding",
    subtitle: "Digital Growth, Marketing & Brand Experience",
    description:
      "Drive traffic, increase conversions, and build a memorable brand presence through data-driven marketing and modern digital engagement strategies.",
    points: [
      "SEO (Search Engine Optimization)",
      "AEO (Answer Engine Optimization)",
      "Social Media Management",
      "Social Media Advertising",
      "Performance Marketing",
      "Content Marketing",
      "Brand Strategy",
      "Corporate Branding",
      "Creative Design",
      "Video Marketing",
      "Campaign Management",
      "Influencer Marketing",
      "Online Reputation Management"
    ],
    activeTabClass: "bg-cyan-600 text-white shadow-xl shadow-cyan-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/40 focus:ring-cyan-400",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/digital-growth",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "customer-engagement",
    title: "5. Customer Engagement Solutions",
    subtitle: "Communication & Customer Engagement Solutions",
    description:
      "Connect with your audience through intelligent communication platforms that improve engagement, retention, and customer relationships.",
    points: [
      "Email Marketing",
      "SMS Marketing",
      "WhatsApp Business Solutions",
      "Marketing Automation",
      "Bulk Messaging Solutions",
      "Newsletter Campaigns",
      "Customer Engagement Workflows",
      "Lead Nurturing Solutions"
    ],
    activeTabClass: "bg-teal-600 text-white shadow-xl shadow-teal-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-teal-600 hover:bg-teal-500 shadow-teal-600/40 focus:ring-teal-400",
    backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/customer-engagement",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "cloud-hosting",
    title: "6. Cloud & Infrastructure",
    subtitle: "Cloud, Hosting & Infrastructure Services",
    description:
      "Build a secure and scalable digital foundation with enterprise-grade hosting, cloud infrastructure, and managed IT services.",
    points: [
      "Domain Registration",
      "International & Country TLDs",
      "Shared Hosting",
      "Reseller Hosting",
      "VPS Hosting",
      "Dedicated Servers",
      "AWS Cloud Solutions",
      "Microsoft Azure Solutions",
      "Cloud Migration",
      "Server Management",
      "Backup Solutions",
      "Storage Solutions",
      "Disaster Recovery"
    ],
    activeTabClass: "bg-orange-600 text-white shadow-xl shadow-orange-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-orange-600 hover:bg-orange-500 shadow-orange-600/40 focus:ring-orange-400",
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/cloud-infrastructure",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "cybersecurity",
    title: "7. Cybersecurity Services",
    subtitle: "Cybersecurity & Digital Protection",
    description:
      "Protect your organization from evolving cyber threats with proactive security assessments, monitoring, and advanced protection solutions.",
    points: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Malware Analysis",
      "Threat Intelligence",
      "Security Audits",
      "SSL Certificates",
      "Website Security",
      "SiteLock Protection",
      "Endpoint Security",
      "Email Security",
      "Security Monitoring",
      "Compliance Readiness"
    ],
    activeTabClass: "bg-purple-600 text-white shadow-xl shadow-purple-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-purple-600 hover:bg-purple-500 shadow-purple-600/40 focus:ring-purple-400",
    backgroundImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/cybersecurity",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  },
  {
    id: "digital-transformation",
    title: "8. Digital Transformation & AI",
    subtitle: "Digital Transformation & Emerging Technologies",
    description:
      "Transform traditional operations into intelligent, data-driven digital enterprises through AI, automation, cloud technologies, and innovation-led strategies.",
    points: [
      "Artificial Intelligence Solutions",
      "Generative AI Integration",
      "AI Chatbots & Assistants",
      "Business Process Automation",
      "Data Analytics & BI",
      "Digital Transformation Consulting",
      "IT Infrastructure Modernization",
      "Cloud Transformation",
      "Enterprise Automation",
      "Industry 4.0 Enablement",
      "Process Re-engineering",
      "Technology Consulting",
      "Software Licensing & Trading",
      "Adobe Solutions",
      "Microsoft Solutions",
      "SaaS Licensing",
      "Online & On-Premise Licensing"
    ],
    activeTabClass: "bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 ring-1 ring-white/20",
    btnGlowClass: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/40 focus:ring-emerald-400",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    linkUrl: "/services/digital-transformation",
    showReadMoreBtn: true // Flip to false anytime to completely hide this button
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const handleTabClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 350);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && scrollContainer.children[activeIndex]) {
      const activeElement = scrollContainer.children[activeIndex] as HTMLElement;
      scrollContainer.scrollTo({
        top: activeElement.offsetTop - scrollContainer.offsetTop - 30,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(true);
          }
        });
      },
      { threshold: 0.02 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const currentService = servicesData[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="services-section w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 text-white overflow-hidden select-none relative bg-[#070e25] font-seo antialiased"
    >
      {/* SOLID PERFORMANCE CLEAN BACKGROUND GRID OVERLAY */}
      <div className="pointer-events-none absolute inset-0 services-lines-overlay z-0 opacity-40" aria-hidden="true" />

      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 transform-gpu ${visibleCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            What we do <span className="text-cyan-400">?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-2 leading-relaxed">
            Discover our comprehensive suite of advanced digital capabilities tailored for modern enterprises.
          </p>
        </div>

        {/* Main Frame */}
        <div className="main-panel bg-white/[0.02] border border-white/[0.06] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-3 sm:p-5 md:p-8 lg:p-10 shadow-2xl backdrop-blur-md transform-gpu will-change-transform">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 items-stretch min-h-auto lg:min-h-[580px]">

            {/* Navigation Tabs (Desktop / Tablet-Horizontal) */}
            <div className="hidden md:flex flex-col justify-start items-center w-full lg:w-[290px] shrink-0 gap-2 relative border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-4 lg:pb-0 lg:pr-6 max-h-none lg:max-h-[580px]">
              <button
                onClick={handlePrev}
                className="text-white/80 hover:text-cyan-400 transition-colors py-1.5 w-full text-center sticky top-0 backdrop-blur-sm z-20 cursor-pointer hidden lg:block bg-transparent border-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none"
                aria-label="Scroll Up"
              >
                <ChevronUp size={24} className="mx-auto animate-pulse" />
              </button>

              <div
                ref={scrollContainerRef}
                className="w-full flex flex-col gap-2.5 overflow-y-auto custom-scrollbar py-1 items-center max-h-[490px] pr-2"
              >
                {servicesData.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(index)}
                      className={`w-full px-4 py-3 md:py-3.5 rounded-xl md:rounded-2xl text-left font-bold transition-all duration-300 transform-gpu text-xs sm:text-sm md:text-base leading-snug tracking-tight border cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] ${
                        isActive
                          ? service.activeTabClass + " scale-[1.01]"
                          : "text-white bg-white/[0.03] hover:bg-white/15 border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                className="text-white/80 hover:text-cyan-400 transition-colors py-1.5 w-full text-center sticky bottom-0 backdrop-blur-sm z-20 cursor-pointer hidden lg:block bg-transparent border-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none"
                aria-label="Scroll Down"
              >
                <ChevronDown size={24} className="mx-auto animate-pulse" />
              </button>
            </div>

            {/* Mobile Prev/Next Controls */}
            <div className="md:hidden flex items-center justify-between bg-white/[0.05] p-2.5 rounded-xl border border-white/10 shadow-lg">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 active:scale-95 transition-all cursor-pointer focus:outline-none"
                aria-label="Previous service"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-bold text-xs sm:text-sm tracking-normal text-cyan-400 text-center px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-[70%] truncate">
                {currentService.title}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 active:scale-95 transition-all cursor-pointer focus:outline-none"
                aria-label="Next service"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Content Card Panel */}
            <div
              ref={contentRef}
              className="content-card flex-1 rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl flex flex-col relative overflow-hidden transition-all duration-300 ease-out border border-white/10 transform-gpu"
            >
              {/* Box Background Image Integration */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
                <Image
                  src={currentService.backgroundImage}
                  alt={`${currentService.title} asset backdrop`}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1024px) 80vw, 55vw"
                  className="object-cover transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-[#070e25]/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e25]/60 via-[#070e25]/20 to-black/40" />
              </div>

              {/* Tightened Layout Container with compact vertical gaps */}
              <div className="flex-1 flex flex-col justify-start z-10 relative space-y-4 md:space-y-6" style={{ isolation: "isolate" }}>
                
                {/* Header text blocks */}
                <div className="w-full flex flex-col text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-2 lg:mb-3 tracking-tight leading-snug text-white seo-text-shadow-heavy">
                    {currentService.subtitle}
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold tracking-normal max-w-4xl seo-text-shadow-medium opacity-95">
                    {currentService.description}
                  </p>
                </div>

                {/* Points list grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 pt-4 sm:pt-5 border-t border-white/20">
                  {currentService.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2 text-sm sm:text-base md:text-lg font-bold tracking-normal group/item seo-text-shadow-heavy">
                      <span className="text-cyan-400 font-black text-base sm:text-lg select-none shrink-0 mt-0.5">»</span>
                      <span className="cursor-default text-left text-white leading-tight transition-colors duration-150 group-hover/item:text-cyan-200">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ultra-Modern Glassmorphic Action Button perfectly centered at the bottom baseline (Responsive Toggle Controlled) */}
                {currentService.showReadMoreBtn && (
                  <div className="w-full flex justify-center pt-2 transition-all duration-300">
                    <a 
                      href={currentService.linkUrl}
                      className="group/glass-btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer decoration-0 text-white select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)]"
                      aria-label={`Read details about ${currentService.subtitle}`}
                    >
                      <span className="font-extrabold text-[11px] sm:text-xs tracking-widest uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                        Read More
                      </span>
                      <div className={`p-1 rounded-full text-white transition-all duration-300 ${currentService.btnGlowClass.split(' ')[0]} shadow-md`}>
                        <ArrowRight size={11} className="transform transition-transform duration-300 group-hover/glass-btn:translate-x-0.5" />
                      </div>
                    </a>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Indicator Dots (Mobile Screen Device Targets) */}
        <div className="flex justify-center gap-1.5 mt-5 md:hidden" aria-label="Service layout dots">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`rounded-full transition-all duration-300 border-0 h-2 cursor-pointer focus:outline-none ${
                index === activeIndex
                  ? "w-5 bg-cyan-400"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Show layout tab ${index + 1}`}
            />
          ))}
        </div>

      </div>

      <style jsx global>{`
        /* System UI Stack Configuration */
        .font-seo {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        }

        /* HD Contrast Text Protection Isolators */
        .seo-text-shadow-heavy {
          text-shadow: 
            -1.5px -1.5px 0 #000,  
             1.5px -1.5px 0 #000,
            -1.5px  1.5px 0 #000,
             1.5px  1.5px 0 #000,
             0px 4px 8px rgba(0, 0, 0, 1),
             0px 1px 2px rgba(0, 0, 0, 1);
        }

        .seo-text-shadow-medium {
          text-shadow: 
            -1px -1px 0 rgba(0,0,0,1),  
             1px -1px 0 rgba(0,0,0,1),
            -1px  1px 0 rgba(0,0,0,1),
             1px  1px 0 rgba(0,0,0,1),
             0px 3px 6px rgba(0, 0, 0, 1);
        }

        .services-lines-overlay {
          background-image:
            repeating-linear-gradient(
              -55deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.015) 40px,
              rgba(255,255,255,0.015) 41px
            ),
            repeating-linear-gradient(
              35deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.01) 60px,
              rgba(255,255,255,0.01) 61px
            );
        }

        /* Width-Optimized Scrollbar Layout with Absolute Corner Reset */
        .custom-scrollbar::-webkit-scrollbar { 
          width: 8px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track { 
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(255, 255, 255, 0.3); 
          border-radius: 8px;
          border: 1.5px solid transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(255, 255, 255, 0.5); 
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent !important;
        }

        @supports (animation-timeline: view()) {
          @media (min-width: 1024px) {
            .services-section {
              perspective: 1000px;
            }

            .main-panel {
              animation: panelScrollTilt linear both;
              animation-timeline: view();
              animation-range: entry 0% exit 100%;
              transform-style: preserve-3d;
            }

            .content-card {
              animation: contentCardParallax linear both;
              animation-timeline: view();
              animation-range: entry 4% exit 96%;
            }
          }
        }

        @keyframes panelScrollTilt {
          0%   { transform: rotateX(2.5deg) translateY(8px); }
          45%  { transform: rotateX(0deg) translateY(0px); }
          55%  { transform: rotateX(0deg) translateY(0px); }
          100% { transform: rotateX(-2.5deg) translateY(-8px); }
        }

        @keyframes contentCardParallax {
          0%   { transform: translateY(6px); }
          50%  { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .main-panel,
          .content-card,
          .animate-pulse {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}