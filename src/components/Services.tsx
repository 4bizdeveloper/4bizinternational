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
  linkUrl: string; 
  showReadMoreBtn: boolean; 
  seoAlt: string; // Dynamic SEO optimized alt tag for each specific service image
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
    activeTabClass: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/digital-workplace-productivity-solutions-1.png",
    linkUrl: "/services/digital-workplace-productivity-solutions",
    showReadMoreBtn: true,
    seoAlt: "Enterprise Digital Workplace Platforms and Microsoft 365 Hybrid Workspace Productivity Software Implementation"
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
    activeTabClass: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/enterprise-business-applications-erp-crm-2.png",
    linkUrl: "/services/enterprise-business-applications-erp-crm",
    showReadMoreBtn: true,
    seoAlt: "Custom Enterprise ERP Software and Cloud CRM Solution Architecture Dashboard Interface"
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
    activeTabClass: "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/web-mobile-commerce-solutions.png",
    linkUrl: "/services/web-mobile-commerce-solutions",
    showReadMoreBtn: true,
    seoAlt: "Responsive UI UX Design for Cross Platform Mobile Applications and Corporate E-commerce Web Portals"
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
    activeTabClass: "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/digital-growth-marketing-brand-experience.png",
    linkUrl: "/services/digital-growth-marketing-brand-experience",
    showReadMoreBtn: true,
    seoAlt: "Data Driven Performance Marketing Strategy and Search Engine Optimization Campaign Visual Growth Chart"
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
    activeTabClass: "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/communication-customer-engagement-solutions.png",
    linkUrl: "/services/communication-customer-engagement-solutions",
    showReadMoreBtn: true,
    seoAlt: "Omnichannel Customer Engagement Infrastructure and Automated WhatsApp Business API Workflows"
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
    activeTabClass: "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/cloud-hosting-infrastructure-services.png",
    linkUrl: "/services/cloud-hosting-infrastructure-services",
    showReadMoreBtn: true,
    seoAlt: "Secure Managed Infrastructure showing Data Center Servers with AWS and Microsoft Azure Cloud Migration Ecosystem"
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
    activeTabClass: "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/cybersecurity-digital-protection.png",
    linkUrl: "/services/cybersecurity-digital-protection",
    showReadMoreBtn: true,
    seoAlt: "Enterprise Network Protection Infrastructure with Continuous Penetration Testing and Threat Intelligence Operations"
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
    activeTabClass: "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md shadow-emerald-600/15 ring-1 ring-white/20",
    btnGlowClass: "bg-[#00D2F1] hover:bg-[#00E5FF] shadow-[#00D2F1]/20 focus:ring-[#00D2F1]",
    backgroundImage: "/services/digital-transformation-emerging-technologies.png",
    linkUrl: "/services/digital-transformation-emerging-technologies",
    showReadMoreBtn: true,
    seoAlt: "Advanced Artificial Intelligence Development with Generative AI Architecture and Enterprise Business Process Automation"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(false);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

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

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
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
      className="services-section w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 text-white overflow-hidden relative bg-[#04091a] bg-[radial-gradient(circle_at_50%_35%,_#0e2a80_0%,_#09153d_50%,_#0a122c_100%)] font-seo antialiased"
    >
      <div className="pointer-events-none absolute inset-0 services-lines-overlay z-0 opacity-25" aria-hidden="true" />

      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 transform-gpu ${visibleCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            What we do <span className="text-[#00D2F1]">?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-2 leading-relaxed">
            Discover our comprehensive suite of advanced digital capabilities tailored for modern enterprises.
          </p>
        </div>

        {/* Main Outer Container Box with Refined, Thinner #00D2F1 Border */}
        <div className="main-panel bg-white/[0.01] border border-[#00D2F1]/60 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.2rem] lg:rounded-[2.5rem] p-3 sm:p-5 md:p-6 lg:p-10 shadow-[0_0_25px_rgba(0,210,241,0.15)] backdrop-blur-md transform-gpu">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 items-stretch min-h-auto lg:min-h-[620px]">

            {/* Desktop Navigation Column */}
            <div className="hidden lg:flex flex-col justify-start items-center w-[320px] shrink-0 gap-4 relative border-r border-white/[0.08] pr-6 max-h-[620px]">
              <button
                onClick={handlePrev}
                className="text-[#00D2F1] bg-[#00D2F1]/5 border border-[#00D2F1]/50 hover:bg-[#00D2F1]/15 shadow-[0_0_15px_rgba(0,210,241,0.2)] transition-all duration-300 py-2.5 w-full rounded-xl text-center sticky top-0 backdrop-blur-sm z-20 cursor-pointer focus:outline-none flex items-center justify-center active:scale-95"
                aria-label="Scroll Up"
              >
                <ChevronUp size={24} className="mx-auto text-[#00D2F1]" />
              </button>

              <div
                ref={scrollContainerRef}
                className="w-full flex flex-col gap-3.5 overflow-y-auto custom-scrollbar py-1 px-1.5 items-center max-h-[520px]"
              >
                {servicesData.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(index)}
                      className={`w-full px-5 py-4 rounded-2xl text-left font-bold transition-all duration-300 transform-gpu text-sm xl:text-base leading-snug tracking-tight border cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] ${
                        isActive
                          ? "bg-gradient-to-r from-[#00D2F1]/15 to-[#00D2F1]/5 text-white border-[#00D2F1]/80 shadow-[0_0_15px_rgba(0,210,241,0.25)] scale-[1.01]"
                          : "text-white bg-white/[0.02] border-white/[0.06] hover:border-[#00D2F1]/50 hover:bg-white/[0.05] hover:shadow-[0_0_10px_rgba(0,210,241,0.15)]"
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                className="text-[#00D2F1] bg-[#00D2F1]/5 border border-[#00D2F1]/50 hover:bg-[#00D2F1]/15 shadow-[0_0_15px_rgba(0,210,241,0.2)] transition-all duration-300 py-2.5 w-full rounded-xl text-center sticky bottom-0 backdrop-blur-sm z-20 cursor-pointer focus:outline-none flex items-center justify-center active:scale-95"
                aria-label="Scroll Down"
              >
                <ChevronDown size={24} className="mx-auto text-[#00D2F1]" />
              </button>
            </div>

            {/* Mobile & Tablet Top Bar Controls */}
            <div className="lg:hidden flex items-center justify-between bg-white/[0.04] p-3 rounded-xl border border-white/10 shadow-xl">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-lg bg-[#00D2F1]/5 text-[#00D2F1] border border-[#00D2F1]/50 shadow-[0_0_10px_rgba(0,210,241,0.2)] hover:bg-[#00D2F1]/15 active:scale-95 transition-all cursor-pointer focus:outline-none shrink-0"
                aria-label="Previous service"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-[#00D2F1] text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] truncate max-w-[80%]">
                {currentService.title}
              </span>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-lg bg-[#00D2F1]/5 text-[#00D2F1] border border-[#00D2F1]/50 shadow-[0_0_10px_rgba(0,210,241,0.2)] hover:bg-[#00D2F1]/15 active:scale-95 transition-all cursor-pointer focus:outline-none shrink-0"
                aria-label="Next service"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Content Display Card Layer */}
            <div
              ref={contentRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="content-card flex-1 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 text-white shadow-[0_0_30px_rgba(0,210,241,0.15)] flex flex-col relative overflow-hidden transition-all duration-300 ease-out border border-[#00D2F1]/60 transform-gpu touch-pan-y"
            >
              <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
                <Image
                  src={currentService.backgroundImage}
                  alt={currentService.seoAlt}
                  fill
                  sizes="(max-w-1024px) 100vw, 60vw"
                  className="object-cover scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-[#050a1d]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04091a] via-[#070f2b]/85 to-transparent" />
              </div>

              <div className="flex-1 flex flex-col justify-between z-10 relative space-y-6 md:space-y-8 h-full" style={{ isolation: "isolate" }}>
                
                <div className="space-y-6 md:space-y-8">
                  {/* Headers / Brand Copy */}
                  <div className="w-full flex flex-col text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight leading-snug text-[#00D2F1] seo-text-shadow-heavy">
                      {currentService.subtitle}
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold tracking-wide max-w-4xl seo-text-shadow-medium">
                      {currentService.description}
                    </p>
                  </div>

                  {/* Sub-points content block layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-white/15">
                    {currentService.points.map((point, pIdx) => (
                      <div 
                        key={pIdx} 
                        className="flex items-center gap-3 py-1 bg-transparent group/item select-none"
                      >
                        <span className="flex items-center justify-center text-[#00D2F1] transition-transform duration-200 group-hover/item:translate-x-1 shrink-0">
                          <ArrowRight size={18} strokeWidth={2.5} className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                        </span>
                        <span className="cursor-default text-left font-black text-sm sm:text-base text-cyan-200 group-hover/item:text-white tracking-wide transition-colors duration-150 seo-text-shadow-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Call-To-Action Element */}
                {currentService.showReadMoreBtn && (
                  <div className="w-full flex justify-center lg:justify-start pt-6 mt-auto transition-all duration-300">
                    <a 
                      href={currentService.linkUrl}
                      className="group/glass-btn relative inline-flex items-center gap-4 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D2F1]/5 to-transparent backdrop-blur-md border border-[#00D2F1]/60 hover:from-[#00D2F1]/15 hover:to-[#00D2F1]/5 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer decoration-0 text-white select-none shadow-[0_0_15px_rgba(0,210,241,0.2)] hover:shadow-[0_0_20px_rgba(0,210,241,0.35)]"
                      aria-label={`Read details about ${currentService.subtitle}`}
                    >
                      <span className="font-black text-sm tracking-widest uppercase text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]">
                        Read More
                      </span>
                      <div className="p-1.5 rounded-full text-white transition-all duration-300 bg-[#00D2F1]/90 group-hover/glass-btn:bg-[#00E5FF] shadow-[0_0_8px_rgba(0,210,241,0.3)] flex items-center justify-center">
                        <ArrowRight size={14} strokeWidth={2.5} className="transform transition-transform duration-300 group-hover/glass-btn:translate-x-0.5" />
                      </div>
                    </a>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Mobile Dot Carousel Navigation Trackers */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden" aria-label="Service carousel dots">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`rounded-full transition-all duration-300 border-0 h-2.5 cursor-pointer focus:outline-none ${
                index === activeIndex
                  ? "w-8 bg-[#00D2F1] shadow-[0_0_8px_rgba(0,210,241,0.4)]"
                  : "w-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Show layout tab ${index + 1}`}
            />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .font-seo {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .seo-text-shadow-heavy {
          text-shadow: 
            -2px -2px 0 #000,  
             2px -2px 0 #000,
            -2px  2px 0 #000,
             2px  2px 0 #000,
             0px 4px 12px rgba(0, 0, 0, 1),
             0px 1px 2px rgba(0, 0, 0, 1);
        }

        .seo-text-shadow-medium {
          text-shadow: 
            -1.5px -1.5px 0 rgba(0,0,0,1),  
             1.5px -1.5px 0 rgba(0,0,0,1),
            -1.5px  1.5px 0 rgba(0,0,0,1),
             1.5px  1.5px 0 rgba(0,0,0,1),
             0px 3px 8px rgba(0, 0, 0, 1);
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

        .custom-scrollbar::-webkit-scrollbar { 
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track { 
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(255, 255, 255, 0.25); 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(255, 255, 255, 0.45); 
        }
        
        /* Mitigate CLS Layout Jumps During Tab Transition states */
        .content-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}