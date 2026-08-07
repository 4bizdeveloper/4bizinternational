"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  backgroundImage: string;
  linkUrl: string; 
  showReadMoreBtn: boolean; 
  seoAlt: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "digital-workplace",
    title: "Digital Workplace & Productivity",
    subtitle: "MANAGED WORKSPACES",
    description: "Secure cloud platforms that optimize team communication and corporate operational efficiency.",
    points: ["Microsoft 365", "Google Workspace", "Zoho Apps", "Mail Automation"],
    backgroundImage: "/services/digital-workplace-productivity-solutions-1.png",
    linkUrl: "/services/digital-workplace-productivity-solutions",
    showReadMoreBtn: true,
    seoAlt: "Enterprise Digital Workplace Platforms and Microsoft 365 Hybrid Workspace Productivity Software"
  },
  {
    id: "enterprise-apps",
    title: "Enterprise Business Apps (ERP & CRM)",
    subtitle: "INTEGRATED SYSTEMS",
    description: "Streamline core enterprise operations with real-time data insights and workflow automation.",
    points: ["Custom ERP Platforms", "Tailored CRM", "Odoo Solutions", "Finance Modules"],
    backgroundImage: "/services/enterprise-business-applications-erp-crm-2.png",
    linkUrl: "/services/enterprise-business-applications-erp-crm",
    showReadMoreBtn: true,
    seoAlt: "Custom Enterprise ERP Software and Cloud CRM Solution Architecture Dashboard"
  },
  {
    id: "web-mobile-commerce",
    title: "Web, Mobile & Commerce Solutions",
    subtitle: "DIGITAL EXPERIENCES",
    description: "High-performance corporate portals and high-conversion enterprise eCommerce engines.",
    points: ["UI/UX Design", "Mobile Apps", "E-commerce", "API Integrations"],
    backgroundImage: "/services/web-mobile-commerce-solutions.png",
    linkUrl: "/services/web-mobile-commerce-solutions",
    showReadMoreBtn: true,
    seoAlt: "Responsive UI UX Design for Cross Platform Mobile Applications and Corporate E-commerce Web Portals"
  },
  {
    id: "digital-growth",
    title: "Digital Growth & Brand Experience",
    subtitle: "PERFORMANCE MARKETING",
    description: "Accelerate visibility and business scaling utilizing advanced data-driven search marketing.",
    points: ["SEO Optimization", "AEO Strategies", "Social Campaigns", "Brand Identity"],
    backgroundImage: "/services/digital-growth-marketing-brand-experience.png",
    linkUrl: "/services/digital-growth-marketing-brand-experience",
    showReadMoreBtn: true,
    seoAlt: "Data Driven Performance Marketing Strategy and Search Engine Optimization Campaign Visual Growth Chart"
  },
  {
    id: "customer-engagement",
    title: "Communication & Engagement",
    subtitle: "OMNICHANNEL PIPELINES",
    description: "Connect with high-value audiences using automated workflows built to elevate retention.",
    points: ["WhatsApp APIs", "Marketing Automation", "Bulk Messaging", "Lead Nurturing"],
    backgroundImage: "/services/communication-customer-engagement-solutions.png",
    linkUrl: "/services/communication-customer-engagement-solutions",
    showReadMoreBtn: true,
    seoAlt: "Omnichannel Customer Engagement Infrastructure and Automated WhatsApp Business API Workflows"
  },
  {
    id: "cloud-hosting",
    title: "Cloud, Hosting & Infrastructure",
    subtitle: "MANAGED CLOUD ARCHITECTURE",
    description: "Robust, secure hosting infrastructures configured for ultimate enterprise uptime metrics.",
    points: ["AWS Management", "Azure Systems", "Secure VPS", "Disaster Recovery"],
    backgroundImage: "/services/cloud-hosting-infrastructure-services.png",
    linkUrl: "/services/cloud-hosting-infrastructure-services",
    showReadMoreBtn: true,
    seoAlt: "Secure Managed Infrastructure showing Data Center Servers with AWS and Microsoft Azure Cloud Migration"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Digital Protection",
    subtitle: "PROACTIVE THREAT PROTECTION",
    description: "Insulate corporate databases from evolving network and endpoint vulnerability exposures.",
    points: ["Penetration Testing", "Vulnerability Auditing", "Network Security", "Compliance Validation"],
    backgroundImage: "/services/cybersecurity-digital-protection.png",
    linkUrl: "/services/cybersecurity-digital-protection",
    showReadMoreBtn: true,
    seoAlt: "Enterprise Network Protection Infrastructure with Continuous Penetration Testing and Threat Intelligence"
  },
  {
    id: "digital-transformation",
    title: "AI & Digital Transformation",
    subtitle: "EMERGING TECH & COGNITIVE AI",
    description: "Convert legacy systems into intelligence-driven operation units through modern AI models.",
    points: ["Generative AI", "Process Automation", "Power BI Panels", "SaaS Licensing"],
    backgroundImage: "/services/digital-transformation-emerging-technologies.png",
    linkUrl: "/services/digital-transformation-emerging-technologies",
    showReadMoreBtn: true,
    seoAlt: "Advanced Artificial Intelligence Development with Generative AI Architecture and Enterprise Business Process Automation"
  }
];

export default function Services() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleScrollUpdate = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const cardWidth = firstChild.getBoundingClientRect().width;
    const computedStyle = window.getComputedStyle(el);
    const gap = parseFloat(computedStyle.gap) || (window.innerWidth >= 640 ? 24 : 16);
    
    const totalItemWidth = cardWidth + gap;
    const newIndex = Math.round(el.scrollLeft / totalItemWidth);
    
    const maxIdx = servicesData.length - visibleCount;
    const safeIndex = Math.max(0, Math.min(newIndex, maxIdx));
    
    setScrollIndex(safeIndex);
  }, [visibleCount]);

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", handleScrollUpdate, { passive: true });
    }
    return () => el?.removeEventListener("scroll", handleScrollUpdate);
  }, [handleScrollUpdate]);

  const scrollToTab = useCallback((index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const cardWidth = firstChild.getBoundingClientRect().width;
    const computedStyle = window.getComputedStyle(el);
    const gap = parseFloat(computedStyle.gap) || (window.innerWidth >= 640 ? 24 : 16);
    
    el.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth"
    });
  }, []);

  const nextSlide = useCallback(() => {
    const maxIdx = servicesData.length - visibleCount;
    setScrollIndex((prev) => {
      const target = prev >= maxIdx ? 0 : prev + 1;
      scrollToTab(target);
      return target;
    });
  }, [visibleCount, scrollToTab]);

  const prevSlide = useCallback(() => {
    const maxIdx = servicesData.length - visibleCount;
    setScrollIndex((prev) => {
      const target = prev <= 0 ? maxIdx : prev - 1;
      scrollToTab(target);
      return target;
    });
  }, [visibleCount, scrollToTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        nextSlide();
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "4Biz International",
      "url": "https://www.4bizinternational.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Strategic Growth Services",
      "itemListElement": servicesData.map((s, i) => ({
        "@type": "OfferCatalogItem",
        "position": i + 1,
        "item": {
          "@type": "Service",
          "name": s.title,
          "description": s.description,
          "url": `https://www.4bizinternational.com${s.linkUrl}`
        }
      }))
    }
  };

  return (
    <section 
      className="w-full py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-slate-950 text-white overflow-x-clip relative font-sans antialiased selection:bg-[#00D2F1]/30 transform-gpu"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />

      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none transform-gpu opacity-25 mix-blend-screen transition-opacity duration-500"
        style={{ 
          backgroundImage: "url('/hero-desktop-1.png')",
          willChange: "transform"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/10 to-slate-950/40 z-0 pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,241,0.08)_0%,transparent_65%)] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="text-center mb-12 md:mb-16 max-w-4xl mx-auto flex flex-col items-center space-y-4">
          <div className="inline-block px-5 py-1.5 border border-[#00D2F1]/50 bg-[#00D2F1]/10 text-[#00D2F1] rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,210,241,0.15)] select-none">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            Cutting-Edge Enterprise Solutions
          </h2>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-normal px-2">
            4Biz delivers modern, high-quality infrastructure capabilities optimized to scale your visibility, efficiency, and real-time operations.
          </p>
        </header>

        <div 
          className="relative w-full px-0 sm:px-4 md:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-[-55px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 border border-white/40 text-white bg-slate-950/80 backdrop-blur-md hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95 shadow-[0_4px_25px_rgba(0,0,0,0.5)] cursor-pointer transform-gpu"
            aria-label="Previous services catalog slide"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-[-55px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 border border-white/40 text-white bg-slate-950/80 backdrop-blur-md hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95 shadow-[0_4px_25px_rgba(0,0,0,0.5)] cursor-pointer transform-gpu"
            aria-label="Next services catalog slide"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div 
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6 pt-2 px-4 sm:px-0 transform-gpu will-change-transform touch-pan-y"
            style={{ 
              scrollbarWidth: "none", 
              WebkitOverflowScrolling: "touch"
            }}
          >
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                className="w-[86vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-center sm:snap-start flex flex-col items-center text-center bg-white rounded-[2.25rem] p-6 sm:p-8 lg:p-9 text-slate-900 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transform-gpu border border-slate-100 will-change-transform"
              >
                <div className="w-full flex flex-col items-center flex-1 space-y-5">
                  
                  <div className="relative w-full h-48 sm:h-56 flex items-center justify-center select-none overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105">
                    <div className="relative w-60 sm:w-64 h-full">
                      <Image
                        src={service.backgroundImage}
                        alt={service.seoAlt}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain object-center transition-opacity duration-300"
                        priority={index < 3}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 w-full flex flex-col flex-1 justify-between">
                    <h3 className="text-base sm:text-md md:text-lg font-extrabold tracking-tight text-blue-950 uppercase leading-snug min-h-[3rem] flex items-center justify-center px-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium min-h-[3.5rem] flex items-center justify-center px-2">
                      {service.description}
                    </p>
                  </div>

                </div>

                {service.showReadMoreBtn && (
                  <div className="w-full pt-4 mt-4 border-t border-slate-100 flex justify-center">
                    <Link
                      href={service.linkUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-950 hover:text-[#00D2F1] transition-colors duration-200 group/btn"
                      aria-label={`Read more details about ${service.title}`}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-8 w-full">
          
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white bg-slate-900/90 active:bg-white active:text-slate-950 transition-all duration-200 shadow-md transform-gpu cursor-pointer"
              aria-label="Scroll carousel view left"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white bg-slate-900/90 active:bg-white active:text-slate-950 transition-all duration-200 shadow-md transform-gpu cursor-pointer"
              aria-label="Scroll carousel view right"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2.5 h-4">
            {Array.from({ length: Math.max(1, servicesData.length - visibleCount + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToTab(idx)}
                className={`transition-all duration-300 rounded-full h-2 border-0 cursor-pointer outline-none ${
                  scrollIndex === idx 
                    ? "w-8 bg-[#00D2F1] shadow-[0_0_10px_rgba(0,210,241,0.6)]" 
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Navigate to layout section index ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider text-slate-950 bg-white hover:bg-[#00D2F1] hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_0_25px_rgba(0,210,241,0.4)] transition-all duration-300 group/main-btn border border-transparent transform-gpu"
          >
            <Briefcase className="w-4 h-4 text-slate-950 group-hover/main-btn:rotate-12 transition-transform duration-200" />
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-200 group-hover/main-btn:translate-x-1.5" />
          </Link>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </section>
  );
}