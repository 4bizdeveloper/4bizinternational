import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";
import FixedCallWhatsappButton from "@/components/FixedCallWhatsappButton";

// --- ADVANCED GLOBAL SEO METADATA ---
export const metadata: Metadata = {
  title: "4Biz International LLC | Digital Marketing Agency in Dubai",
  description: "4Biz International is a trusted digital marketing agency in Dubai offering SEO, web development, CRM solutions and business growth services.",
  metadataBase: new URL("https://www.4bizinternational.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  // OpenGraph standard controls previews across WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    url: "https://www.4bizinternational.com",
    title: "4Biz International LLC | Digital Marketing Agency in Dubai",
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
  // Explicitly handles card layouts across X / Twitter platforms
  twitter: {
    card: "summary_large_image",
    title: "4Biz International LLC | Digital Marketing Agency in Dubai",
    description: "Accelerate your pipeline with custom-made web platforms, comprehensive SEO optimization, and corporate enterprise digital marketing in Dubai.",
    images: ["https://www.4bizinternational.com/4biz-logo-4.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        {/* Verification tags, location metadata and explicit app icons */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <link rel="icon" type="image/png" href="/4biz_logo-1.png" />
        <link rel="apple-touch-icon" href="/4biz_logo-1.png" />
        <link rel="shortcut icon" href="/4biz_logo-1.png" />
      </head>
      <body className="bg-black relative w-full overflow-x-hidden">
        
        {/* Fixed Global UI Elements */}
        <Header />
        
        {/* Floating Utilities */}
        <AIChatButton />
        {/* <WhatsAppButton />
        <CallButton /> */}
        <FixedCallWhatsappButton />
        
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
     
        <Footer />

      </body>
    </html>
  );
}