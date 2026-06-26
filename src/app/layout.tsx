import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";
import FixedCallWhatsappButton from "@/components/FixedCallWhatsappButton";

// --- ADVANCED GLOBAL SEO METADATA & FALLBACKS ---
export const metadata: Metadata = {
  title: {
    default: "4Biz International LLC | Leading IT Solutions & Digital Transformation",
    template: "%s | 4Biz International LLC"
  },
  description: "4Biz International delivers top-tier IT consulting, software development, advanced SEO, and digital marketing solutions engineered to scale your business in Dubai.",
  metadataBase: new URL("https://www.4bizinternational.com"),
  alternates: {
    canonical: "./",
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
    title: "4Biz International LLC | IT Solutions & Digital Transformation",
    description: "Partner with a trusted digital agency in Dubai. We specialize in advanced SEO, high-converting web development, CRM integration, and elite enterprise business growth.",
    siteName: "4Biz International LLC",
    locale: "en_US",
    images: [
      {
        url: "https://www.4bizinternational.com/4biz-logo-4.png",
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Dubai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Biz International LLC | IT Solutions & Digital Transformation",
    description: "Accelerate your pipeline with custom-made web platforms, comprehensive SEO optimization, and corporate enterprise digital marketing in Dubai.",
    images: ["https://www.4bizinternational.com/4biz-logo-4.png"],
  },
};

// --- GLOBAL ORGANIZATION & SERVICE SCHEMA ---
const globalSchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "4Biz International",
  "legalName": "4biz International LLC",
  "url": "https://www.4bizinternational.com/",
  "logo": "https://www.4bizinternational.com/4biz-logo-4.png",
  "description": "4Biz International delivers top-tier IT consulting, software development, and digital solutions engineered to scale your business.",
  "image": "https://www.4bizinternational.com/4biz-logo-4.png",
  "slogan": "Impacting Infinite!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office 104, Crystal Building, Near ADCB Metro Station, Al Karama",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971-52-79-25-100",
      "contactType": "customer support",
      "email": "info@4bizinternational.com"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971-43-921-234",
      "contactType": "sales"
    }
  ],
  "potentialAction": {
    "@type": "Action",
    "name": "Free IT Consultation",
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
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "IT Consulting & Digital Transformation Services"
    },
    "price": "0",
    "priceCurrency": "USD",
    "description": "Get a free consultation today."
  },
  "serviceType": [
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
    "Software and Custom-made Applications"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <link rel="icon" type="image/png" href="/4biz_logo-1.png" />
        <link rel="apple-touch-icon" href="/4biz_logo-1.png" />
        <link rel="shortcut icon" href="/4biz_logo-1.png" />
        
        {/* Inject Global Schema structured data safely across all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemaData) }}
        />
      </head>
      <body className="bg-black relative w-full overflow-x-hidden">
        <Header />
        
        <AIChatButton />
        <FixedCallWhatsappButton />
        
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
     
        <Footer />
      </body>
    </html>
  );
}