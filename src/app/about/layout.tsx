import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 4Biz International',
  description: 'Learn more about the digital infrastructure and strategic planning behind 4Biz International.',
};

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <main 
      className="w-full min-h-screen bg-[#060c31] overflow-x-hidden relative"
      style={{
        overflowAnchor: 'none',
        contain: 'paint layout',
      }}
    >
      {children}
    </main>
  );
}