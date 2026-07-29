import React, { memo } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Contact from '@/components/Contact';
import ClientAnimationWrapper from "./ClientAnimationWrapper";

// Comprehensive Canonical configuration for ultimate Core Web Vitals & Multi-level SEO
export const metadata: Metadata = {
  title: 'Meet Our Network of Industry Trailblazers | 4Biz International',
  description: 'We help our clients unlock growth across key global solutions industries. Explore our trusted network of innovative partners.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/clients/',
  },
  openGraph: {
    title: 'Meet Our Network of Industry Trailblazers | 4Biz International',
    description: 'We help our clients unlock growth across key global solutions industries. Explore our trusted network of innovative partners.',
    url: 'https://www.4bizinternational.com/clients/',
    type: 'website',
    images: [
      {
        url: "/4biz_logo-1.png", // Explicitly passed to prevent override deletion from layout.tsx
        width: 1200,
        height: 630,
        alt: "4Biz International LLC Dubai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Meet Our Network of Industry Trailblazers | 4Biz International',
    description: 'We help our clients unlock growth across key global solutions industries. Explore our trusted network of innovative partners.',
    images: ["/4biz_logo-1.png"], // Explicitly passed to prevent override deletion from layout.tsx
  },
};

// Data strictly preserved on the server to minimize JS bundle sizes & accelerate TTFB
const ALL_CLIENTS = [
  { id: 'pharsfilm', src: '/client-logos/pharsfilm-logo.svg', alt: 'Pharsfilm Logo' },
  { id: 'theyyampattil', src: '/client-logos/theyyampattil-logo.avif', alt: 'Theyyampattil Logo' },
  { id: 'opusbm', src: '/client-logos/opusbm-logo.png', alt: 'OpusBM Logo' },
  { id: 'aimbridge', src: '/client-logos/aimbridge-logo.png', alt: 'Aimbridge Logo' },
  { id: 'Alrumooz', src: '/client-logos/al-rumooz-logo.png', alt: 'Alrumooz Logo' },
  { id: 'Apparel', src: '/client-logos/apparel-logo.svg', alt: 'Apparel Logo' },
  { id: 'Inka-Dubai', src: '/client-logos/inka-dubai.png', alt: 'Inka Dubai Logo' },
  { id: 'Novo-Cinemas', src: '/client-logos/novo-cinemas.svg', alt: 'Novo Cinemas Logo' },
  { id: 'sixth-street', src: '/client-logos/6thstreet-logo.webp', alt: '6th Street Logo' },
  { id: 'al-rostamani', src: '/client-logos/al-rostamani.png', alt: 'Al Rostamani Logo' },
  { id: 'beetroot', src: '/client-logos/beetroot.png', alt: 'Beetroot Logo' },
  { id: 'blueberry-media', src: '/client-logos/blueberry-media.webp', alt: 'Blueberry Media Logo' },
  { id: 'ramada-group', src: '/client-logos/ramada-logo.png', alt: 'Ramada Group Logo' },
  { id: 'apple-international-school', src: '/client-logos/apple-international-school.png', alt: 'Apple International School Logo' },
  { id: 'fmredxb', src: '/client-logos/fmredxb.png', alt: 'FMREDXB Logo' },
  { id: 'gulf-film', src: '/client-logos/gulf-film-llc.png', alt: 'Gulf Film LLC Logo' },
  { id: 'h-h', src: '/client-logos/h-h.svg', alt: 'H-H Logo' },
  { id: 'nano-pixel-technologies', src: '/client-logos/nano-pixels.png', alt: 'Nano Pixel Technologies Logo' },
  { id: '3r-creative-fze', src: '/client-logos/3R-creative-fze.svg', alt: '3R Creative FZE Logo' },
  { id: 'exiloz', src: '/client-logos/exiloz.png', alt: 'Exiloz Logo' },
  { id: 'kanoo-stationery-bahrain', src: '/client-logos/kanoo-stationery-bahrain.png', alt: 'Kanoo Stationery Bahrain Logo' },
  { id: 'sunbridge-logistics', src: '/client-logos/sunbridge-logistics.avif', alt: 'Sunbridge Logistics Logo' },
  { id: 'arab-brazilian-chamber', src: '/client-logos/arab-brazilian-chamber-of-commerce.svg', alt: 'Arab Brazilian Chamber of Commerce Logo' },
  { id: 'secret-sports-gym', src: '/client-logos/secret-sports-gym.png', alt: 'Secret Sports Gym Logo' },
  { id: 'thumbelina', src: '/client-logos/thumbelina.webp', alt: 'Thumbelina Logo' },
  { id: 'frontline-medical-centre', src: '/client-logos/frontline-medical-centre.png', alt: 'Frontline Medical Centre Logo' },
  { id: 'oxford-school', src: '/client-logos/oxford-school.svg', alt: 'Oxford School Logo' },
  { id: 'r-and-b', src: '/client-logos/r&b-logo.svg', alt: 'R&B Logo' },
  { id: 'cedar-school', src: '/client-logos/cedar-school.png', alt: 'Cedar School Logo' },
  { id: 'nora-medical-poly-clinic', src: '/client-logos/nora-medical-poly-clinic.png', alt: 'Nora Medical Poly Clinic Logo' },
  { id: 'pixcom-technologies', src: '/client-logos/pixcom-technologies.png', alt: 'Pixcom Technologies Logo' },
  { id: 'smart-setup-gov-services', src: '/client-logos/smart-setup-gov-services.png', alt: 'Smart Setup Gov Services Logo' },
  { id: 'taksmens', src: '/client-logos/taksmens.png', alt: 'Taksmens Logo' },
  { id: 'cars24', src: '/client-logos/cars24.png', alt: 'Cars24 Logo' },
  { id: 'university-of-sharja', src: '/client-logos/university-of-sharja.png', alt: 'University of Sharja Logo' },
  { id: 'earss', src: '/client-logos/earss.png', alt: 'Earss Fashion Jewellery UAE Logo' }
];

export default function ClientSection() {
  return (
    <>
      {/* 
        SERVER-SIDE ENGINE OPTIMIZED HERO SECTION
        Employs hardware acceleration, content-visibility for rapid paint speeds, and premium glassmorphism accents.
      */}
      <section 
        className="pb-20 md:pb-28 pt-28 sm:pt-32 md:pt-36 lg:pt-40 relative overflow-hidden select-none w-full bg-[#070e25] transform-gpu scroll-smooth"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1200px' }}
      >
        {/* Modern Blur Backdrops */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none transform-gpu" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#00b49d]/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* SEO Semantic Header - Crafted for AI & Search Engine discovery models */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto spec-header-container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-none text-[#00b49d] uppercase mb-4 md:mb-5">
              MEET OUR NETWORK OF<br className="hidden sm:inline" />
              <span className="text-white relative inline-block mt-1 sm:mt-2">
                INDUSTRY TRAILBLAZERS.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal tracking-wide text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90 px-2 sm:px-0">
              We help our clients unlock growth by focusing on four key solution areas.
            </p>
          </div>

          {/* ULTRA-RESPONSIVE INTERACTIVE CONTAINER */}
          <ClientAnimationWrapper>
            {ALL_CLIENTS.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </ClientAnimationWrapper>

        </div>
      </section>

      {/* Structured Content Divider */}
      <div className="w-full bg-[#070e25] relative z-20">
        <Contact />
      </div>
    </>
  );
}

/* 
  Individual Logo Box Component 
  - Restructured to enforce identical max bounding dimensions to fix variable sizing.
  - Revoked all hover filter shifts, opacity scaling, and graying mechanics.
*/
const ClientCard = memo(({ client }: { client: { src: string; alt: string } }) => {
  return (
    <div className="group relative flex items-center justify-center w-full h-[95px] sm:h-[115px] md:h-[130px] lg:h-[140px] rounded-2xl border border-blue-500/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#00b49d]/40 hover:shadow-[0_0_40px_rgba(0,180,157,0.15)] transform-gpu will-change-transform">
      {/* Soft aesthetic glow background without shifting logo color spectrums */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00b49d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Controlled inner wrapper to guarantee all images fit perfectly, uniformly, and consistently */}
      <div className="relative w-[80%] h-[55%] flex items-center justify-center p-1 transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.02]">
        <Image
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 15vw"
          /* 
            Optimized Engine Standardizations:
            - Opacity 100% permanently handles original rich vibrancy.
            - Filters removed to prevent color mutation on hover states.
            - object-contain ensures clean aspect-ratio preservation without layout jerking.
          */
          className="object-contain opacity-100 filter-none transition-none"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDcwZTI1Ii8+PC9zdmc+"
        />
      </div>
    </div>
  );
});

ClientCard.displayName = 'ClientCard';