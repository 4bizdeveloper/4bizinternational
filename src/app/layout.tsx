import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";
import FixedCallWhatsappButton from "@/components/FixedCallWhatsappButton";

export const metadata: Metadata = {
  title: "4Biz International LLC | Digital Marketing Agency in Dubai",
  description: "4Biz International is a trusted digital marketing agency in Dubai offering SEO, web development, CRM solutions and business growth services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/images/4biz_logo.avif" />
        <link rel="apple-touch-icon" href="/images/4biz_logo.avif" />
        <link rel="shortcut icon" href="/images/4biz_logo.avif" />
        
        {/* CRITICAL FOR INSTANT LOADING & PERFORMANCE: 
          Preloads the heavy MP4 stream as high priority immediately before parsing JS layout maps.
        */}
        <link 
          rel="preload" 
          href="/hero-video-1.mp4" 
          as="video" 
          type="video/mp4" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="bg-black relative w-full overflow-x-hidden antialiased">
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