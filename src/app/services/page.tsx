"use client";

import React, { useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  subtitle?: string;
  desc: string;
  icon: string;
  img?: string;
  points?: string[];
  linkUrl?: string;
  showReadMoreBtn?: boolean;
  index: number;
}

const ServiceCard = ({ 
  title, 
  subtitle, 
  desc, 
  icon, 
  img, 
  points, 
  linkUrl, 
  showReadMoreBtn, 
  index 
}: ServiceProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 transition-all duration-500 hover:border-cyan-400/60 shadow-2xl transform-gpu flex flex-col justify-between"
    >
      <div>
        {/* Media Window Container (Fixed aspects prevent layout jumps/CLS) */}
        <div className="relative h-48 sm:h-52 mb-6 overflow-hidden rounded-2xl z-20 bg-[#0c1535] border border-white/5 shadow-inner">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src={img || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80'} 
              alt={title}
              fill
              priority={index < 3} // Essential for LCP Core Web Vital optimizations
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e25]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20">
          <div className="text-4xl mb-4 drop-shadow-[0_4px_12px_rgba(34,211,238,0.3)] filter transition-transform duration-300 group-hover:scale-110 origin-left inline-block">
            {icon}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-black mb-1 text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h3>
          
          {subtitle && (
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3 font-semibold opacity-90">
              {subtitle}
            </p>
          )}
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
            {desc}
          </p>

          {/* Integrated Bullet Points Sub-Grid */}
          {points && points.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 mb-6 border-t border-white/10">
              {points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start space-x-1.5 text-xs text-slate-200 font-semibold tracking-wide">
                  <span className="text-cyan-400 font-black select-none shrink-0">»</span>
                  <span className="text-left leading-snug">{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Button Handling Container */}
      {showReadMoreBtn && linkUrl && (
        <div className="w-full pt-2 relative z-20">
          <a 
            href={linkUrl}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-white font-black text-xs tracking-widest uppercase shadow-md active:scale-98"
            aria-label={`Read details about ${title}`}
          >
            <span>Read More</span>
            <span className="text-cyan-400 font-black">→</span>
          </a>
        </div>
      )}

      {/* High Performance Dynamic Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMemo(() => `radial-gradient(400px circle at var(--x) var(--y), rgba(34, 211, 238, 0.08), transparent 50%)`, []),
          // @ts-ignore
          '--x': smoothX,
          '--y': smoothY,
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  // Completely consolidated service array containing all distinct entries with absolute preservation of points/descriptions
  const expandedServiceData = useMemo(() => [
    { 
      title: "Web Design & Development", 
      subtitle: "Web, Mobile & Commerce Solutions",
      desc: "We provide complete Web Management Services, including website, email, and SEO. Partner with us for cost-effective solutions, expert support, and an optimized online presence. Our cutting-edge technology ensures your website works well on all devices, giving you a competitive edge in your industry.", 
      icon: "🌐",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      points: [
        "UI/UX Design", "Corporate Website Development", "Web Application Development",
        "CMS Development", "Progressive Web Apps (PWA)", "Payment Gateway Integration",
        "API Integration", "Portal Development", "E-commerce Solutions"
      ],
      linkUrl: "/services/web-mobile-commerce",
      showReadMoreBtn: true
    },
    { 
      title: "Search Engine Optimization (SEO & AEO)", 
      subtitle: "Digital Growth & Branding",
      desc: "In the ever-evolving digital landscape, the visibility of your business in search engine results is paramount to your online success. Our approach goes above and beyond conventional strategies to ensure that your website not only ranks high but shines brightly across AI engines and search ecosystems alike.",
      icon: "🚀",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", 
      points: [
        "SEO Optimization", "SEO (Search Engine Optimization)", "AEO (Answer Engine Optimization)", 
        "Performance Marketing", "Social Media Ads", "Campaign Management", "Reputation Management",
        "Online Reputation Management"
      ],
      linkUrl: "/services/digital-growth",
      showReadMoreBtn: true
    },
    { 
      title: "Microsoft Dynamics 365",
      subtitle: "Enterprise Business Applications",
      desc: "At 4biz International, we take pride in offering an unparalleled solution to transform and empower your business—Microsoft Dynamics 365. This all-in-one platform seamlessly integrates Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP), providing a unified system to streamline operations and elevate your overall business efficiency.",
      icon: "♾️",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      points: [
        "Dynamics 365 Customization", "CRM & ERP Integration", "Sales Automation",
        "Inventory Management", "Finance & HR Workflows", "Business Intelligence",
        "Customer Relationship Management", "Inventory & Finance Management"
      ],
      linkUrl: "/services/enterprise-applications",
      showReadMoreBtn: true
    },
    { 
      title: "Social Media Marketing",
      subtitle: "Digital Growth, Marketing & Brand Experience",
      desc: "In a digital landscape where social media reigns supreme, 4Biz International stands as your strategic partner to turn platforms like Facebook, Instagram, LinkedIn, and Twitter into powerful catalysts for brand success. We craft digital narratives that elevate your brand's online presence through a fusion of strategy, engagement, and content excellence.", 
      icon: "📢", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      points: [
        "Social Media Management", "Social Media Advertising", "Influencer Marketing",
        "Brand Strategy", "Creative Design", "Campaign Optimization"
      ],
      linkUrl: "/services/digital-growth",
      showReadMoreBtn: true
    },
    { 
      title: "Domain & Hosting Services", 
      subtitle: "Cloud & Infrastructure Solutions",
      desc: "At 4Biz, we offer our own fast and reliable hosting solutions. We use cutting-edge technology and high-performance hardware for exceptional results. Our dedicated servers provide fast and dependable hosting for websites and web apps. Whether you need custom hosting packages, Site Lock, SSL Certificates, or advanced hacking protection, we've got you covered.", 
      icon: "☁️", 
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      points: [
        "Domain Registration", "International & Country TLDs", "Shared Hosting", 
        "Reseller Hosting", "VPS Hosting", "Dedicated Servers", "AWS Cloud Solutions", 
        "Microsoft Azure Solutions", "Cloud Migration", "Server Management", 
        "Backup Solutions", "Storage Solutions", "Disaster Recovery", "SSL & SiteLock Security"
      ],
      linkUrl: "/services/cloud-infrastructure",
      showReadMoreBtn: true
    },
    { 
      title: "Content Marketing", 
      subtitle: "Brand Narrative & Optimization",
      desc: "In the dynamic realm of digital marketing, content reigns supreme, and at 4Biz, we understand that quality content is the heartbeat of a successful strategy. Our Content Marketing services go beyond the ordinary, incorporating key elements that ensure your brand stands out in the digital landscape and amplifies your digital footprint.", 
      icon: "✍️", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      points: [
        "Content Strategy", "Corporate Branding", "Creative Design",
        "Video Marketing", "Copywriting Services", "Asset Architecture"
      ],
      linkUrl: "/services/digital-growth",
      showReadMoreBtn: true
    },
    { 
      title: "Email And SMS Marketing", 
      subtitle: "Communication & Customer Engagement",
      desc: "Our comprehensive engagement services help businesses reach their target audience and drive measurable results. With our expertise in crafting compelling email content, designing eye-catching templates, and implementing strategic SMS campaigns, we ensure that your marketing messages resonate with your audience and turn leads into high-yield conversions.", 
      icon: "📩", 
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
      points: [
        "Email Marketing", "SMS Marketing", "WhatsApp Business Solutions",
        "Marketing Automation", "Bulk Messaging Solutions", "Newsletter Campaigns",
        "Customer Engagement Workflows", "Lead Nurturing Solutions"
      ],
      linkUrl: "/services/customer-engagement",
      showReadMoreBtn: true
    },
    { 
      title: "Branding & Identity Architecture", 
      subtitle: "Digital Growth & Brand Experience",
      desc: "Branding is about creating a distinct image through consistent advertising to stand out, attract loyal customers, and leave an impact. We have a unique approach for building strong brands. It requires a systematic strategy to make a lasting impression. It's not just about quality; it's about how you present your brand.", 
      icon: "💎", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      points: [
        "Brand Strategy", "Corporate Branding", "Creative Design",
        "Asset Standards", "Identity Guidelines", "Market Positioning"
      ],
      linkUrl: "/services/digital-growth",
      showReadMoreBtn: true
    },
    { 
      title: "Photoshoot And Videoshoot", 
      subtitle: "Visual Creative Content Operations",
      desc: "In the expansive realm of professional photography and video services, 4Biz emerges as your dedicated partner, committed to translating your brand vision into captivating visual stories. Our skilled team brings a creative passion that breathes life into every frame, transforming mere moments into an immersive visual experience.", 
      icon: "📸", 
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      points: [
        "Corporate Video Ads", "Product Photography", "Creative Direction",
        "Video Editing & Production", "Social Media Media Packages", "Visual Narratives"
      ],
      linkUrl: "/services/digital-growth",
      showReadMoreBtn: true
    },
    { 
      title: "CRM Software Solutions", 
      subtitle: "Enterprise Customer Systems",
      desc: "At 4Biz International, we present a cutting-edge CRM software solution designed to revolutionize how you manage and nurture customer relationships. Our CRM is not just a tool; it's a dynamic ecosystem equipped to enhance your customer management, tracking, conversion analytics, and retention benchmarks to unique new levels.", 
      icon: "👥", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      points: [
        "Custom CRM Development", "Sales Automation Workflows", "Customer Analytics Pipelines",
        "Lead Capture Integrations", "Support Ticket Modules", "Cross-Platform Sync"
      ],
      linkUrl: "/services/enterprise-applications",
      showReadMoreBtn: true
    },
    { 
      title: "IT Infrastructure & Security", 
      subtitle: "Cloud, Cybersecurity & Infrastructure Services",
      desc: "We specialize in modern, cost-effective IT infrastructure solutions, including structured cabling, networking, security configurations, servers, and system integration. Coupled with advanced proactive penetration testing and vulnerability analysis, we build fortresses that insulate your venture.", 
      icon: "🏗️", 
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      points: [
        "Penetration Testing & Audits", "Vulnerability Assessments", "Structured Network Cabling",
        "Managed Server Frameworks", "Endpoint & Email Security", "Threat Intelligence Monitoring",
        "Malware Analysis", "Security Audits", "SSL Certificates", "Website Security", 
        "SiteLock Protection", "Compliance Readiness"
      ],
      linkUrl: "/services/cybersecurity",
      showReadMoreBtn: true
    },
    { 
      title: "Mobile App Development", 
      subtitle: "Advanced Web & Mobile Commerce",
      desc: "Embark on a journey of digital transformation with 4Biz International as your dedicated innovation partner. We cater to entrepreneurs, businesses, and startups, managing the entire app development cycle from concept to a fully realized product engineered to scale elegantly on all consumer environments.", 
      icon: "📲", 
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      points: [
        "iOS App Architecture", "Android App Architecture", "Hybrid Flutter / React Native",
        "E-commerce Integrations", "Smooth Scrolling Frameworks", "Secure API Construction"
      ],
      linkUrl: "/services/web-mobile-commerce",
      showReadMoreBtn: true
    },
    { 
      title: "CMS Software Platforms", 
      subtitle: "Document & Workflow Automation",
      desc: "At 4Biz International, we bring you the power of advanced CMS technology for seamless and efficient digital content management. Our solutions cater to both enterprise and web content needs, fostering workplace collaboration through integrated document, schema layout adjustments, and asset management.", 
      icon: "📁", 
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      points: [
        "Enterprise Document Sync", "Asset Control Hierarchies", "Role-Based Access Layouts",
        "Content Publishing Flows", "Custom Intranet Portals", "Headless CMS Configurations"
      ],
      linkUrl: "/services/web-mobile-commerce",
      showReadMoreBtn: true
    },
    { 
      title: "4Biz ERP Solutions", 
      subtitle: "Custom Resource Planning Modules",
      desc: "4Biz ERP stands as a flexible and comprehensive solution meticulously designed to meet the unique needs of retail, supply chain distribution, and manufacturing industries. Tailor your ERP experience by selecting the modules that align with your business requirements, and scale up effortlessly as your business grows.", 
      icon: "⚙️", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      points: [
        "Odoo & ERPNext Development", "Custom ERP Implementations", "Inventory & Warehouse Controls",
        "Finance & Accounting Ledgers", "HR & Automated Payroll Panels", "Supply Chain Optimization Modules",
        "HR & Payroll Solutions"
      ],
      linkUrl: "/services/enterprise-applications",
      showReadMoreBtn: true
    },
    { 
      title: "Digital Workplace & Productivity", 
      subtitle: "Digital Workplace, AI & Emerging Technology Solutions",
      desc: "Empower your workforce with modern AI innovations and secure cloud productivity environments. From advanced custom generative AI chatbots to premium software licensing (Microsoft 365, Google Workspace, Adobe Solutions, Zoho), we transform traditional operations into smart digital enterprises.", 
      icon: "🧠", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      points: [
        "Microsoft 365", "Google Workspace", "Zoho Workplace", "Exchange Email Solutions", 
        "Business Email Setup", "Team Collaboration Tools", "Document Management", "Workflow Automation",
        "Artificial Intelligence Solutions", "Generative AI Integration", "AI Chatbots & Assistants", 
        "Business Process Automation", "Data Analytics & BI", "Digital Transformation Consulting", 
        "IT Infrastructure Modernization", "Cloud Transformation", "Enterprise Automation", 
        "Industry 4.0 Enablement", "Process Re-engineering", "Technology Consulting", 
        "Software Licensing & Trading", "Adobe Solutions", "Microsoft Solutions", 
        "SaaS Licensing", "Online & On-Premise Licensing"
      ],
      linkUrl: "/services/digital-transformation",
      showReadMoreBtn: true
    }
  ], []);

  return (
    <section 
      id="services" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative bg-[#070e25] overflow-hidden transform-gpu antialiased"
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '0 2000px' 
      }}
    >
      {/* ATMOSPHERIC ULTRA MODERN BACKGROUND NETWORKS */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-purple-950/30 mix-blend-overlay" />
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-purple-600/10 blur-[130px] rounded-full will-change-transform animate-[soft-pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-cyan-600/10 blur-[130px] rounded-full will-change-transform animate-[soft-pulse_10s_ease-in-out_infinite_1.5s]" />
        <div className="absolute inset-0 services-lines-matrix opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Section Title Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs sm:text-sm tracking-[0.5em] uppercase font-black block mb-4"
          >
            Digital Excellence & Enterprise Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">Capabilities</span>
          </motion.h2>
          <p className="mt-6 text-slate-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            Discover our comprehensive suite of advanced digital capabilities tailored explicitly for modern enterprises.
          </p>
        </div>

        {/* Dynamic Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {expandedServiceData.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>

      {/* Embedded Global Theme Layout Styles optimizing rendering workflows */}
      <style jsx global>{`
        @keyframes soft-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.7; transform: scale(1.06) translate(10px, -10px); }
        }
        .services-lines-matrix {
          background-image:
            repeating-linear-gradient(-55deg, transparent, transparent 50px, rgba(255,255,255,0.01) 50px, rgba(255,255,255,0.01) 51px),
            repeating-linear-gradient(35deg, transparent, transparent 70px, rgba(255,255,255,0.008) 70px, rgba(255,255,255,0.008) 71px);
        }
        html {
          scroll-behavior: smooth !important;
        }
        /* Lock down fluid layout configurations to eliminate any scroll stuttering effects */
        body {
          overflow-x: hidden;
          background-color: #070e25;
        }
      `}</style>
    </section>
  );
};

export default Services;