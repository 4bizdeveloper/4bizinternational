import type { Metadata } from "next";
import ServicesClientPage from "./ServicesClientPage"; 

// Server-level and Static Export SEO Configuration
export const metadata: Metadata = {
  title: "4Biz International Services | IT, Digital Marketing & Cyber Security Dubai",
  description: "Explore 4Biz International's full range of services — IT consulting, software development, digital marketing, cyber security, cloud hosting & more. Serving Dubai & globally.",
  alternates: {
    canonical: "https://www.4bizinternational.com/services/", 
  },
  openGraph: {
    title: "4Biz International Services | IT, Digital Marketing & Cyber Security Dubai",
    description: "Explore 4Biz International's full range of services — IT consulting, software development, digital marketing, cyber security, cloud hosting & more. Serving Dubai & globally.",
    type: "website",
    // Adding the global image fallback here fixes Next.js clearing the openGraph array
    images: [
      {
        url: "/4biz_logo-1.png", 
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Dubai Logo",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}