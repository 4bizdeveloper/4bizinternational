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
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}