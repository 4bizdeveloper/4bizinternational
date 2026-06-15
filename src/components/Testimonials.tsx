"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Chief Technology Officer",
    company: "Apex Global Solutions",
    content: "The custom enterprise architecture and cloud migration strategy delivered by this team transformed our digital infrastructure. Their execution was absolutely flawless, cutting our operational latency by over 40%. They don't just build software; they engineer massive business advantages.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "VP of Product Development",
    company: "Fintech Nexus Group",
    content: "We partnered with them for an intensive Next.js application overhaul and the results were stunning. Page load times plummeted, UX metrics hit record highs, and our core customer engagement metrics grew exponentially. They are hands-down the best modern development agency we've ever hired.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Quantum Cybernetics",
    content: "Finding an IT partner who truly understands high-performance web development, modern animation workflows, and scalable backend infrastructure is rare. They managed our end-to-end platform deployment with world-class technical precision. A genuine game-changer for our organization.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoplay, setIsAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay) {
      timerRef.current = setInterval(() => {
        slideNext();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, activeIndex]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoplay(false);
    action();
  };

  // Safe layout-preserving spring configurations 
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section 
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden select-none transform-gpu flex flex-col justify-center -mt-px"
      style={{
        backgroundColor: '#070e25',
        contentVisibility: 'auto',
        contain: 'paint',
        containmentIntrinsicSize: '1px 750px',
      } as React.CSSProperties}
    >
      {/* High-Tech Grid Structure adapted to cleanly fade out near edges and remove the hard top grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf803_1px,transparent_1px),linear-gradient(to_bottom,#38bdf803_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/[0.06] border border-cyan-400/20 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.05)]">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 leading-tight py-1">
            Trusted by Innovators Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Discover how we help global enterprises and high-growth startups build complex architectures and digital products that scale.
          </p>
        </motion.div>

        {/* Content Box Frame */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1533]/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transform-gpu"
            >
              {/* Vibrant Background Quote Emblem */}
              <Quote className="absolute top-6 right-6 w-24 h-24 text-cyan-500/[0.04] pointer-events-none group-hover:text-cyan-500/10 group-hover:scale-105 transition-all duration-500 z-0" />
              
              {/* Left Column: Profile Card */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8 z-10 w-full">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-slate-700 via-slate-800 to-cyan-500/40 shadow-xl">
                  <Image 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    priority
                    loading="eager"
                    className="object-cover rounded-[14px]"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm font-medium text-cyan-400 mt-1">
                  {currentTestimonial.role}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentTestimonial.company}
                </p>

                <div className="flex gap-1 mt-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.3)]" />
                  ))}
                </div>
              </div>

              {/* Right Column: Content Block */}
              <div className="lg:col-span-8 flex flex-col justify-center relative px-2 sm:px-4 z-10 w-full">
                <Quote className="w-10 h-10 text-cyan-400/20 mb-4 hidden lg:block" />
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-light italic">
                  "{currentTestimonial.content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          
          {/* Progress Indicators */}
          <div className="flex gap-2.5 order-2 sm:order-1">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                })}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Interactive Arrow Controls */}
          <div className="flex gap-4 order-1 sm:order-2">
            <button
              onClick={() => handleManualNavigation(slidePrev)}
              className="p-3.5 sm:p-4 rounded-xl bg-[#0d1533]/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-200 active:scale-95 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleManualNavigation(slideNext)}
              className="p-3.5 sm:p-4 rounded-xl bg-[#0d1533]/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-200 active:scale-95 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}