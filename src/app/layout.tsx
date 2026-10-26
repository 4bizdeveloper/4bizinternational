import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";
import FixedCallWhatsappButton from "@/components/FixedCallWhatsappButton";

// --- ADVANCED GLOBAL SEO, AEO & GEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.4bizinternational.com"),
  title: {
    default: "4Biz International | Enterprise IT Solutions & Digital Transformation",
    template: "%s | 4Biz International"
  },
  description: "4Biz International delivers custom ERP/CRM software, enterprise IT consulting, cloud infrastructure, cybersecurity, and digital marketing in Dubai, UAE.",
  keywords: [
    "IT Solutions Dubai",
    "Digital Transformation Agency",
    "Enterprise Software Development",
    "Microsoft Dynamics 365 Partner",
    "Custom CRM ERP Solutions",
    "SEO & Digital Marketing Dubai",
    "Managed IT Infrastructure UAE",
    "Cloud & Web App Development"
  ],
  authors: [{ name: "4Biz International LLC", url: "https://www.4bizinternational.com" }],
  creator: "4Biz International LLC",
  publisher: "4Biz International LLC",
  alternates: {
    canonical: "https://www.4bizinternational.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.4bizinternational.com",
    title: "4Biz International | IT & Digital Transformation",
    description: "Partner with a trusted digital agency in Dubai. We specialize in advanced SEO, high-converting web development, CRM integration, and elite enterprise business growth.",
    siteName: "4Biz International LLC",
    locale: "en_US",
    images: [
      {
        url: "/4biz_logo-1.png", 
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Enterprise IT Solutions Dubai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Biz International | IT & Digital Transformation",
    description: "Accelerate your pipeline with custom-made web platforms, comprehensive SEO optimization, and corporate enterprise digital marketing in Dubai.",
    images: ["/4biz_logo-1.png"],
  },
  category: "Technology",
};

// --- CORE WEB VITALS OPTIMIZATION (VIEWPORT & DISCOVERY) ---
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
  themeColor: "#000000",
  colorScheme: "dark",
};

// --- GLOBAL UNIFIED SCHEMA GRAPH ---
const globalSchemaGraphData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "additionalType": [
        "https://schema.org/InformationTechnologyCompany",
        "https://schema.org/SoftwareCompany"
      ],
      "@id": "https://www.4bizinternational.com/#organization",
      "name": "4Biz International",
      "legalName": "4biz International LLC",
      "url": "https://www.4bizinternational.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.4bizinternational.com/#logo",
        "url": "https://www.4bizinternational.com/4biz_logo-1.png",
        "caption": "4Biz International Corporate Logo",
        "width": 1200,
        "height": 630
      },
      "description": "4Biz International delivers top-tier IT consulting, custom software development, advanced SEO, CRM/ERP integrations, and corporate digital marketing engineered to scale enterprise businesses in Dubai and globally.",
      "image": {
        "@id": "https://www.4bizinternational.com/#logo"
      },
      "slogan": "Impacting Infinite!",
      "priceRange": "$$",
      "currenciesAccepted": "AED, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 104, Crystal Building, Near ADCB Metro Station, Al Karama",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2487,
        "longitude": 55.3023
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Dubai"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 25.2487,
            "longitude": 55.3023
          },
          "geoRadius": "50000"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971-52-79-25-100",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+971-43-921-234",
          "contactType": "sales",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"],
          "email": "info@4bizinternational.com"
        }
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "name": "Schedule Free IT Consultation",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.4bizinternational.com/#contact",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        }
      },
      "knowsAbout": [
        "Microsoft Dynamics 365",
        "Search Engine Optimization",
        "Web Design & Development",
        "Social Media Marketing",
        "Domain & Hosting",
        "Content Marketing",
        "Email And SMS Marketing",
        "Branding",
        "Photoshoot And Videoshoot",
        "CRM Software",
        "IT Infrastructure",
        "Mobile App Development",
        "CMS Software",
        "4Biz ERP Solutions",
        "Microsoft Product Licenses",
        "Google Workspace Solutions",
        "Zoho Solutions",
        "Business Email Solutions",
        "Software and Custom-made Applications",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.4bizinternational.com/#website",
      "url": "https://www.4bizinternational.com/",
      "name": "4Biz International",
      "description": "Leading IT Solutions & Digital Transformation Services",
      "publisher": {
        "@id": "https://www.4bizinternational.com/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.4bizinternational.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.4bizinternational.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.4bizinternational.com/"
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth bg-black text-white antialiased h-full md:overflow-y-scroll selection:bg-neutral-800 selection:text-white"
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2487;55.3023" />
        <meta name="ICBM" content="25.2487, 55.3023" />
        
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemaGraphData) }}
        />
      </head>
      <body className="bg-black relative w-full overflow-x-hidden min-h-full flex flex-col antialiased subpixel-antialiased backface-hidden">
        <div className="flex flex-col flex-1 w-full relative min-h-screen isolation-isolate">
          <Header />
          <div className="fixed inset-0 pointer-events-none z-50 flex flex-col items-end justify-end p-4 gap-4">
            <div className="pointer-events-auto select-none">
              <FixedCallWhatsappButton />
            </div>
          </div>
          <main className="relative z-10 w-full flex-grow flex flex-col contain-intrinsic-size transform-gpu select-text">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}