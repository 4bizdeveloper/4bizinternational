"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Users, Cpu, Monitor, Zap, 
  Mail, Server, Lock, Layers, CheckCircle2, ChevronDown 
} from "lucide-react";
import Contact from "@/components/Contact";

interface ServiceBlock {
  title: string;
  questionTitle: string;
  directAnswer: string;
  description: string;
  icon: React.ReactNode;
  visualAsset: string;
  points: string[];
  accentColor: string;
  glowColor: string;
  url: string;
  imageAlt: string;
}

// ----------------------------------------------------------------------
// 1. COMPLETE SERVICE CONTENT DATA STRUCTURE (All 8 Services Preserved)
// ----------------------------------------------------------------------
const totalServices: ServiceBlock[] = [
  {
    title: "Web, Mobile & Commerce Solutions",
    questionTitle: "What are Web, Mobile & Commerce Development Solutions?",
    directAnswer: "Web and mobile commerce solutions combine high-performance headless architecture with intuitive UI/UX design to maximize customer conversion rates.",
    description: "Create powerful digital experiences with scalable websites, mobile applications, and eCommerce platforms designed for performance and growth.",
    icon: <Monitor className="text-blue-400" size={22} />,
    visualAsset: "/services/web-mobile-commerce-solutions.png",
    accentColor: "from-blue-400 to-indigo-500",
    glowColor: "from-blue-500/20 via-indigo-500/5 to-transparent",
    url: "/services/web-mobile-commerce-solutions",
    imageAlt: "Responsive e-commerce and mobile application development framework graphics",
    points: [
      "UI/UX Design", "Corporate Website Development", "Web Application Development", 
      "Mobile App Development", "E-commerce Solutions", "CMS Development", 
      "Progressive Web Apps (PWA)", "Payment Gateway Integration", "API Integration", "Portal Development"
    ]
  },
  {
    title: "Digital Workplace & Productivity Solutions",
    questionTitle: "What are Digital Workplace & Productivity Solutions?",
    directAnswer: "Digital workplace solutions integrate enterprise cloud infrastructure, managed email systems, and unified collaboration tools to enable secure, productive hybrid operations.",
    description: "Empower your workforce with secure cloud-based productivity platforms that enhance collaboration, communication, and operational efficiency across your organization.",
    icon: <Users className="text-[#00e5a3]" size={22} />,
    visualAsset: "/services/digital-workplace-productivity-solutions-1.png",
    accentColor: "from-[#00e5a3] to-emerald-400",
    glowColor: "from-[#00e5a3]/20 via-emerald-500/5 to-transparent",
    url: "/services/digital-workplace-productivity-solutions",
    imageAlt: "Digital Workplace Productivity Dashboard showing cloud migration and team collaboration suite",
    points: [
      "Microsoft 365", "Google Workspace", "Zoho Workplace", 
      "Exchange Email Solutions", "Business Email Setup", 
      "Team Collaboration Tools", "Document Management", "Workflow Automation"
    ]
  },
  {
    title: "Enterprise Business Applications (ERP & CRM)",
    questionTitle: "How do Enterprise Business Applications (ERP & CRM) drive growth?",
    directAnswer: "Enterprise ERP and CRM applications unify supply chain, customer intelligence, inventory, and finance management into single-pane operational dashboards.",
    description: "Streamline operations, improve customer engagement, and gain real-time business insights through integrated ERP and CRM platforms tailored to your business needs.",
    icon: <Cpu className="text-cyan-400" size={22} />,
    visualAsset: "/services/enterprise-business-applications-erp-crm-2.png",
    accentColor: "from-cyan-400 to-blue-500",
    glowColor: "from-cyan-500/20 via-blue-500/5 to-transparent",
    url: "/services/enterprise-business-applications-erp-crm",
    imageAlt: "Enterprise ERP and CRM platform architecture visualization displaying real-time analytics",
    points: [
      "Custom ERP Development", "Custom CRM Development", "Microsoft Dynamics 365", 
      "Odoo ERP", "ERPNext", "4Biz ERP Solutions", "Sales Automation", 
      "Customer Relationship Management", "Inventory & Finance Management", "HR & Payroll Solutions"
    ]
  },
  {
    title: "Digital Growth, Marketing & Brand Experience",
    questionTitle: "How does integrated digital growth and AEO marketing scale brands?",
    directAnswer: "Digital growth marketing leverages technical SEO, Answer Engine Optimization (AEO), and target performance ads to capture market share and drive qualified leads.",
    description: "Drive traffic, increase conversions, and build a memorable brand presence through data-driven marketing and modern digital engagement strategies.",
    icon: <Zap className="text-amber-400" size={22} />,
    visualAsset: "/services/digital-growth-marketing-brand-experience.png",
    accentColor: "from-amber-400 to-orange-500",
    glowColor: "from-amber-500/20 via-orange-500/5 to-transparent",
    url: "/services/digital-growth-marketing-brand-experience",
    imageAlt: "Digital growth marketing and performance tracking analytics interface display",
    points: [
      "SEO (Search Engine Optimization)", "AEO (Answer Engine Optimization)", "Social Media Management", 
      "Social Media Advertising", "Performance Marketing", "Content Marketing", "Brand Strategy", 
      "Corporate Branding", "Creative Design", "Video Marketing", "Campaign Management", 
      "Influencer Marketing", "Online Reputation Management"
    ]
  },
  {
    title: "Communication & Customer Engagement Solutions",
    questionTitle: "Why are Automated Communication & Customer Engagement platforms essential?",
    directAnswer: "Automated customer engagement systems deliver personalized omnichannel communications across WhatsApp, SMS, and email to maximize client retention.",
    description: "Connect with your audience through intelligent communication platforms that improve engagement, retention, and customer relationships.",
    icon: <Mail className="text-purple-400" size={22} />,
    visualAsset: "/services/communication-customer-engagement-solutions.png",
    accentColor: "from-purple-400 to-pink-500",
    glowColor: "from-purple-500/20 via-pink-500/5 to-transparent",
    url: "/services/communication-customer-engagement-solutions",
    imageAlt: "Omnichannel customer engagement hub showing WhatsApp API and email workflow automation",
    points: [
      "Email Marketing", "SMS Marketing", "WhatsApp Business Solutions", 
      "Marketing Automation", "Bulk Messaging Solutions", "Newsletter Campaigns", 
      "Customer Engagement Workflows", "Lead Nurturing Solutions"
    ]
  },
  {
    title: "Cloud, Hosting & Infrastructure Services",
    questionTitle: "What are Enterprise Cloud, Hosting & Infrastructure Services?",
    directAnswer: "Cloud infrastructure services provide highly scalable AWS, Azure, and private server hosting featuring automated disaster recovery and zero-downtime migrations.",
    description: "Build a secure and scalable digital foundation with enterprise-grade hosting, cloud infrastructure, and managed IT services.",
    icon: <Server className="text-emerald-400" size={22} />,
    visualAsset: "/services/cloud-hosting-infrastructure-services.png",
    accentColor: "from-emerald-400 to-teal-500",
    glowColor: "from-emerald-500/20 via-teal-500/5 to-transparent",
    url: "/services/cloud-hosting-infrastructure-services",
    imageAlt: "Enterprise cloud hosting servers and multi-cloud infrastructure diagram",
    points: [
      "Domain Registration", "International & Country TLDs", "Shared Hosting", 
      "Reseller Hosting", "VPS Hosting", "Dedicated Servers", "AWS Cloud Solutions", 
      "Microsoft Azure Solutions", "Cloud Migration", "Server Management", 
      "Backup Solutions", "Storage Solutions", "Disaster Recovery"
    ]
  },
  {
    title: "Cybersecurity & Digital Protection",
    questionTitle: "How does enterprise cybersecurity protect organizational assets?",
    directAnswer: "Enterprise cybersecurity utilizes Zero-Trust architecture, automated penetration testing, and 24/7 threat monitoring to prevent breach vectors before impact.",
    description: "Protect your organization from evolving cyber threats with proactive security assessments, monitoring, and advanced protection solutions.",
    icon: <Lock className="text-red-400" size={22} />,
    visualAsset: "/services/cybersecurity-digital-protection.png",
    accentColor: "from-red-500 to-rose-500",
    glowColor: "from-red-500/20 via-rose-500/5 to-transparent",
    url: "/services/cybersecurity-digital-protection",
    imageAlt: "Cybersecurity shield protection system showing threat detection and encryption protocols",
    points: [
      "Penetration Testing", "Vulnerability Assessment", "Malware Analysis", 
      "Threat Intelligence", "Security Audits", "SSL Certificates", "Website Security", 
      "SiteLock Protection", "Endpoint Security", "Email Security", "Security Monitoring", "Compliance Readiness"
    ]
  },
  {
    title: "Digital Transformation & Emerging Technologies",
    questionTitle: "What is Digital Transformation with Emerging Technologies?",
    directAnswer: "Digital transformation combines Generative AI, machine learning tools, process automation, and SaaS cloud modernizations to re-engineer core enterprise workflows.",
    description: "Transform traditional operations into intelligent, data-driven digital enterprises through AI, automation, cloud technologies, and innovation-led strategies.",
    icon: <Layers className="text-lime-400" size={22} />,
    visualAsset: "/services/digital-transformation-emerging-technologies.png", 
    accentColor: "from-lime-400 to-emerald-400",
    glowColor: "from-lime-500/20 via-emerald-500/5 to-transparent",
    url: "/services/digital-transformation-emerging-technologies",
    imageAlt: "Digital transformation ecosystem featuring Artificial Intelligence and process automation",
    points: [
      "Artificial Intelligence Solutions", "Generative AI Integration", "AI Chatbots & Assistants", 
      "Business Process Automation", "Data Analytics & BI", "Digital Transformation Consulting", 
      "IT Infrastructure Modernization", "Cloud Transformation", "Enterprise Automation", 
      "Industry 4.0 Enablement", "Process Re-engineering", "Technology Consulting", "Software Licensing & Trading", 
      "Adobe Solutions", "Microsoft Solutions", "SaaS Licensing", "Online & On-Premise Licensing"
    ]
  }
];

// ----------------------------------------------------------------------
// 2. FAQ DATA STRUCTURE (5 Total Questions)
// ----------------------------------------------------------------------
const faqList = [
  {
    question: "What IT and digital services does 4Biz International offer in Dubai?",
    answer: "4Biz International LLC provides enterprise IT Consulting, Cloud Productivity (Microsoft 365, Google Workspace), ERP/CRM Systems, Web & Mobile Engineering, Digital Growth Marketing, Cloud Hosting, Cybersecurity, and Generative AI Integrations."
  },
  {
    question: "How do cloud workplace solutions enhance enterprise productivity?",
    answer: "Cloud workplace platforms centralize business communications, automate document management, and allow secure remote collaboration, reducing operational overhead by up to 35%."
  },
  {
    question: "Does 4Biz International provide custom ERP and CRM implementations?",
    answer: "Yes, 4Biz International customizes and deploys Odoo ERP, ERPNext, Microsoft Dynamics 365, and proprietary 4Biz ERP systems tailored for UAE compliance, finance, and supply chain operations."
  },
  {
    question: "What cybersecurity measures are implemented for digital asset protection?",
    answer: "We deploy Zero-Trust network architectures, continuous threat monitoring, automated penetration testing, SSL/data encryption, and compliance readiness aligned with ISO 27001 standards."
  },
  {
    question: "How long does a digital transformation project typically take to deploy?",
    answer: "Initial cloud integrations or web deployments range from 2 to 4 weeks, whereas complex enterprise ERP setups and full digital transformation initiatives are structured across 8 to 16-week milestones."
  }
];

// ----------------------------------------------------------------------
// 3. MAIN SINGLE PAGE COMPONENT
// ----------------------------------------------------------------------
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  // AEO & GEO Structured JSON-LD Schema Graphs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.4bizinternational.com/services/#webpage",
        "url": "https://www.4bizinternational.com/services/",
        "name": "IT & Digital Transformation Services Dubai | 4Biz",
        "description": "Comprehensive enterprise IT solutions, cloud workspace, zero-trust cybersecurity, custom ERP/CRM platforms, and digital transformation services in Dubai.",
        "dateModified": "2026-08-20T17:00:00+00:00",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.4bizinternational.com/#website",
          "url": "https://www.4bizinternational.com/",
          "name": "4Biz International LLC"
        },
        "publisher": {
          "@type": "Organization",
          "name": "4Biz International LLC",
          "url": "https://www.4bizinternational.com/",
          "logo": "https://www.4bizinternational.com/4biz_logo-1.png",
          "sameAs": [
            "https://www.linkedin.com/company/4biz-international",
            "https://twitter.com/4bizintl"
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.4bizinternational.com/#organization",
        "name": "4Biz International LLC",
        "url": "https://www.4bizinternational.com/",
        "logo": "https://www.4bizinternational.com/4biz_logo-1.png",
        "image": "https://www.4bizinternational.com/services/digital-transformation-emerging-technologies.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.2048",
          "longitude": "55.2708"
        },
        "areaServed": ["Dubai", "United Arab Emirates", "Worldwide"],
        "priceRange": "$$$"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.4bizinternational.com/services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.4bizinternational.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.4bizinternational.com/services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.4bizinternational.com/services/#faq",
        "mainEntity": faqList.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <head>
        {/* OPTIMIZED TITLE: 51 characters, main topic first, aligned with (but not duplicate of) H1 */}
        <title>IT & Digital Transformation Services Dubai | 4Biz</title>
        <meta name="description" content="Comprehensive enterprise IT solutions, cloud workspace, zero-trust cybersecurity, custom ERP/CRM platforms, and digital transformation services in Dubai." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Canonical always points to the secure, preferred HTTPS URL */}
        <link rel="canonical" href="https://www.4bizinternational.com/services/" />
        <meta property="og:url" content="https://www.4bizinternational.com/services/" />
      </head>

      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-[#050b21] text-slate-100 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-[#00e5a3] selection:text-black scroll-smooth">
        
        {/* Persistent Background Overlay */}
        <div aria-hidden="true" className="fixed inset-0 bg-[radial-gradient(circle_at_50%_30%,#12286b_0%,#081236_50%,#04091f_100%)] pointer-events-none z-0 transform translate-z-0" />
        
        {/* Spline Background Lines */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50 mix-blend-screen transform translate-z-0">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 5000" preserveAspectRatio="none" role="presentation" focusable="false">
            <path d="M-100,150 C350,280 200,50 750,380 C1100,620 950,150 1600,450" fill="none" stroke="url(#spline-gradient-blue)" strokeWidth="3" />
            <path d="M1500,600 C1100,1200 800,900 500,1700 C200,2300 700,2100 -100,2700" fill="none" stroke="url(#spline-gradient-neon)" strokeWidth="2.5" />
            <path d="M-80,1800 C400,2200 950,1700 1100,2900 C1250,3800 600,3900 1550,4400" fill="none" stroke="url(#spline-gradient-blue)" strokeWidth="2" opacity="0.8" />
            <path d="M1500,2500 C1000,3100 500,2800 200,3800 C-50,4500 400,4700 800,5000" fill="none" stroke="url(#spline-gradient-neon)" strokeWidth="1.5" opacity="0.6" />
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

        {/* Dynamic Light Auras */}
        <div aria-hidden="true" className="absolute top-[5%] left-[-5%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none transform translate-z-0" />
        <div aria-hidden="true" className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none transform translate-z-0" />
        <div aria-hidden="true" className="absolute bottom-[20%] left-[-10%] w-[55vw] h-[55vw] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none transform translate-z-0" />

        {/* Hero Section */}
        <header className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden pt-36 pb-8 z-10">
          <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
            <span className="text-xs sm:text-sm font-bold tracking-[0.45em] uppercase text-[#00e5a3] mb-4 block">
              Enterprise Digital Transformation Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.08] uppercase text-white max-w-5xl mx-auto">
              IT & Digital Transformation Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a3] via-cyan-400 to-blue-400">
                In Dubai & Worldwide
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl font-normal text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We empower modern enterprises with scalable cloud workspace solutions, custom software engineering, zero-trust cybersecurity, and revenue-driven marketing architectures.
            </p>
          </div>
        </header>

        {/* AEO FIX: Top Executive Summary & Audience Context Box — moved directly under the hero
            so AI/answer engines and readers get the bottom-line answer immediately */}
        <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 mb-6 sm:mb-10">
          <div className="p-6 rounded-xl bg-slate-900/90 border border-[#00e5a3]/30 backdrop-blur-md shadow-xl">
            <h2 className="text-[#00e5a3] font-mono uppercase tracking-widest text-xs sm:text-sm mb-2 font-bold">
              Executive Summary & Scope
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
              <strong>4Biz International LLC</strong> provides an integrated 8-pillar enterprise digital transformation framework designed for enterprise C-suite executives, IT directors, and digital growth leaders in Dubai and across global markets. Our suite bridges legacy operational gaps with cloud productivity, bespoke ERP/CRM integration, zero-trust security, and AI-driven growth models.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-800 text-xs sm:text-sm">
              <div><strong className="text-cyan-400">Target Audience:</strong> Mid-to-Large Enterprises, Public Sector, Scaling Firms</div>
              <div><strong className="text-cyan-400">Primary Industry Focus:</strong> Logistics, Retail, Finance, Technology, Services</div>
              <div><strong className="text-cyan-400">Deployment Region:</strong> UAE (Dubai/Abu Dhabi) & Worldwide</div>
            </div>
          </div>
        </section>

        {/* Structured Services Content Stream */}
        <main className="w-full relative z-10 flex flex-col">
          {totalServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <section 
                key={index} 
                className="w-full relative scroll-mt-24 py-12 sm:py-16 lg:py-20"
              >
                <div className="relative z-10">
                  <div className="w-full transform transition-all duration-500 ease-out opacity-100 translate-y-0 scale-100">
                    <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-12 lg:gap-16 xl:gap-24`}>
                      
                      {/* Visual Asset Box */}
                      <div className="w-full lg:w-1/2 flex justify-center items-center h-[260px] sm:h-[380px] md:h-[420px] lg:h-[450px] relative group">
                        <div aria-hidden="true" className={`absolute inset-0 rounded-full bg-gradient-to-tr ${service.glowColor} blur-[60px] opacity-70 pointer-events-none`} />
                        
                        <div className="relative w-full h-full transform transition-all duration-500 ease-out group-hover:scale-[1.02]">
                          <Image
                            src={service.visualAsset}
                            alt={service.imageAlt}
                            width={600}
                            height={450}
                            priority={index < 2}
                            loading={index < 2 ? undefined : "lazy"}
                            className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
                            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 45vw"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 flex flex-col text-left">
                        
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm sm:text-base font-mono tracking-widest text-[#00e5a3]">
                            0{index + 1} &mdash; Enterprise Capability
                          </span>
                          <div className="text-slate-300 opacity-90" aria-hidden="true">
                            {service.icon}
                          </div>
                        </div>

                        {/* AEO Question Headings */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] text-white mb-3">
                          {service.questionTitle}
                        </h2>

                        {/* AEO Direct Answer Snippet */}
                        <p className="p-3.5 rounded-lg bg-slate-900/90 border-l-4 border-[#00e5a3] text-slate-200 text-sm font-medium mb-4 leading-relaxed">
                          {service.directAnswer}
                        </p>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
                          {service.description}
                        </p>

                        {/* Keyword Points */}
                        <div className="flex flex-wrap gap-x-3 gap-y-2.5 mb-8 max-w-xl">
                          {service.points.map((point, pIdx) => (
                            <div 
                              key={pIdx}
                              className="flex items-center gap-2 bg-[#0d1b47]/60 backdrop-blur-md py-1.5 px-3 rounded-md border border-white/[0.1] hover:border-blue-400 transition-colors duration-300"
                            >
                              <CheckCircle2 size={13} className="text-[#00e5a3] shrink-0" aria-hidden="true" />
                              <span className="text-slate-100 text-xs sm:text-sm font-medium tracking-wide">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Concise & Optimized CTA Button */}
                        <div className="pt-2">
                          <Link
                            href={service.url}
                            className="group/btn inline-flex items-center gap-2.5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 hover:from-slate-850 hover:to-slate-900 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg border border-slate-700/80 hover:border-cyan-400/80 shadow-lg shadow-black/50 hover:shadow-cyan-500/10 transition-all duration-300 ease-out"
                          >
                            <span>Explore {service.title}</span>
                            <ArrowRight size={15} className="text-cyan-400 transform transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                          </Link>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </main>

        {/* Text Content & Definitions Block */}
        <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-8 mt-12">
          <div className="w-full border-t border-b border-slate-800/80 py-8 my-2">
            
            {/* Plain-Language Definition Support Block */}
            <div className="mb-6 pb-6 border-b border-slate-800/50">
              <h2 className="text-[#00e5a3] font-mono uppercase tracking-widest text-xs sm:text-sm mb-2">
                Definition & Scope
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-4xl">
                <strong>Enterprise Digital Transformation</strong> refers to the strategic integration of modern cloud infrastructure, unified application architectures, automated workflows, and robust security frameworks to modernize organizational capability and increase business agility across global operational landscapes.
              </p>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#00e5a3]" aria-hidden="true">⚡</span> Key Takeaways: 4Biz International Capabilities
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-lg leading-none" aria-hidden="true">•</span>
                <span><strong>Target Audience:</strong> Designed for mid-to-large enterprises, public sector entities, and hyper-growth startups across Dubai, UAE, and global markets requiring secure, scalable digital infrastructure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-lg leading-none" aria-hidden="true">•</span>
                <span><strong>Core Ecosystem:</strong> Full spectrum delivery spanning Cloud Workspaces, Custom ERP/CRM Platforms, Full-Stack Web/Mobile Apps, Cybersecurity, and AI Integrations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-lg leading-none" aria-hidden="true">•</span>
                <span><strong>Deployment Impact:</strong> Proven to reduce operational downtime by 40% and lower cloud provisioning overhead according to Gartner benchmark standards.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold text-lg leading-none" aria-hidden="true">•</span>
                <span><strong>Compliance Standard:</strong> Fully aligned with ISO 27001, Zero-Trust network protocols, and UAE regulatory data frameworks for high-security environments.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Comparative Decision Matrix */}
        <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 my-12">
          <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Enterprise Solution Matrix & Performance Benchmarks
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Verified operational statistics according to industry benchmarks from <a href="https://www.gartner.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Gartner Research</a> and <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Microsoft Enterprise Documentation</a>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <caption className="sr-only">Enterprise solution categories with target audience, business outcomes, and efficiency metrics</caption>
                <thead className="bg-slate-800/90 text-[#00e5a3] uppercase font-mono tracking-wider">
                  <tr>
                    <th scope="col" className="p-3.5">Solution Category</th>
                    <th scope="col" className="p-3.5">Primary Target Audience</th>
                    <th scope="col" className="p-3.5">Primary Business Outcome</th>
                    <th scope="col" className="p-3.5">SLA / Efficiency Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <th scope="row" className="p-3.5 font-bold text-white text-left">Digital Workplace</th>
                    <td className="p-3.5">Hybrid Workforces, Corporate Enterprises</td>
                    <td className="p-3.5">Centralized Collaboration & Document Sync</td>
                    <td className="p-3.5 text-emerald-400">99.99% Cloud Uptime</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <th scope="row" className="p-3.5 font-bold text-white text-left">ERP & CRM Platforms</th>
                    <td className="p-3.5">Logistics, Retail, Manufacturing, Finance</td>
                    <td className="p-3.5">Automated Supply Chain & Client Tracking</td>
                    <td className="p-3.5 text-emerald-400">35% Cost Reduction</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <th scope="row" className="p-3.5 font-bold text-white text-left">Cybersecurity Audit</th>
                    <td className="p-3.5">Fintech, E-commerce, Government, Healthcare</td>
                    <td className="p-3.5">Zero-Trust Threat Mitigation & Compliance</td>
                    <td className="p-3.5 text-emerald-400">ISO 27001 Aligned</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <th scope="row" className="p-3.5 font-bold text-white text-left">AI & Automation</th>
                    <td className="p-3.5">Banking, Customer Service, Tech Operations</td>
                    <td className="p-3.5">Generative Process Automation</td>
                    <td className="p-3.5 text-emerald-400">60% Faster Workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Clickable Interactive FAQ Component (5 Questions) */}
        <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 my-16">
          <div className="max-w-4xl mx-auto border-t border-slate-800/80 pt-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 text-white">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {faqList.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div 
                    key={fIdx} 
                    className="bg-slate-900/80 rounded-xl border border-slate-800/90 overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
                  >
                    <h3 className="m-0">
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${fIdx}`}
                        id={`faq-button-${fIdx}`}
                      >
                        <span className="text-base sm:text-lg font-bold text-cyan-300">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`text-cyan-400 shrink-0 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`} 
                          size={20}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    
                    {isOpen && (
                      <div
                        id={`faq-panel-${fIdx}`}
                        role="region"
                        aria-labelledby={`faq-button-${fIdx}`}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/50"
                      >
                        <p className="mt-2">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Engagement Footer */}
        <footer className="w-full relative z-20 bg-transparent">
          <Contact />
        </footer>
      </div>
    </>
  );
}