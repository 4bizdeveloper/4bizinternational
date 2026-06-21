"use client";

import React, { useState } from 'react';
import AIChatWindow from './AIChatWindow';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AIChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/*
        STACK ORDER (bottom-left corner, vertical):
        • WhatsApp   → bottom: 80px  (above AI)
        • AI Chat    → bottom: 20px  (lowest, at very bottom)
        Chat window opens upward from AI button top edge:
        AI top = 20 + 52 = 72px, + 12px gap = bottom: 84px for window
      */}
      <div
        className="fixed bottom-[10px] left-[10px] lg:bottom-[20px] lg:left-[20px] z-[999998] hover:z-[1000000] flex flex-row items-center pointer-events-none group transform-gpu ai-position-wrapper"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ai-orb pointer-events-auto will-change-transform relative flex items-center justify-center"
          aria-label="Toggle AI Chat"
          style={{ width: 52, height: 52 }}
        >
          {/* Deepened shiny cyan/blue gradient core (Consolidated structure to completely fix border artifacts) */}
          <span className="ai-orb-core" />

          {/* Internal Volumetric Energy Glow */}
          <span className="ai-cyber-glow" />

          {/* Gloss - Premium high-fidelity overlay shard */}
          <span className="ai-gloss" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 45%, transparent 60%)',
            zIndex: 10, pointerEvents: 'none',
          }} />

          {/* Original AI SVG icon - Exact copy from JSX with red mouth */}
          <svg viewBox="0 0 100 100"
            style={{ width: 32, height: 32, position: 'relative', zIndex: 20, transition: 'transform 0.5s', flexShrink: 0, filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))' }}
            className="group-hover:scale-110">
            <circle cx="28" cy="32" r="4.5" fill="white"/>
            <line x1="28" x2="42" y1="32" y2="48" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M50 42c-15 0-27 12-27 27s12 27 27 27 27-12 27-27-12-27-27-27z" fill="white"/>
            <path d="M32 65c0-4 3-8 8-8h20c5 0 8 4 8 8v5c0 4-3 8-8 8H40c-5 0-8-4-8-8v-5z" fill="#03030b"/>
            <path d="M40 68c2-2 5-2 7 0M53 68c2-2 5-2 7 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Mouth color changed to red while preserving shape */}
            <path d="M44 85c0 3 3 6 6 6s6-3 6-6" stroke="#ff0000" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M64 28h18c3 0 5 2 5 5v12c0 3-2 5-5 5h-4l-1 6-5-6h-8c-3 0-5-2-5-5V33c0-3 2-5 5-5z" fill="white"/>
          </svg>
        </button>

        {/* Tooltip — desktop only, slides out to the right */}
        <div className="hidden lg:flex items-center ml-4 px-4 py-2 bg-[#03030b]/88 backdrop-blur-xl border border-white/[0.08] rounded-xl text-white text-[10px] font-bold uppercase tracking-[0.32em] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-out pointer-events-none whitespace-nowrap"
          style={{ boxShadow: '0 0 24px rgba(0,212,255,0.35)' }}>
          <span className="relative flex h-2 w-2 mr-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#00d4ff' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(135deg,#00d4ff,#0052d4)' }}></span>
          </span>
          AI Assistant
        </div>
      </div>

      <style jsx global>{`
        /* Responsive Border Radius Overrides */
        .ai-orb, .ai-orb-core, .ai-cyber-glow, .ai-gloss {
          border-radius: 50% !important;
        }

        .ai-orb {
          contain: layout paint;
          cursor: pointer;
          isolation: isolate;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .ai-orb:hover { 
          transform: scale(1.12) translateY(-2px); 
        }

        .ai-orb-core {
          position: absolute; 
          inset: 0; 
          z-index: 1;
          background-clip: padding-box;
          -webkit-background-clip: padding-box;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          
          background: linear-gradient(135deg, 
            #00f5ff 0%, 
            #00b4d8 30%, 
            #0077b6 65%, 
            #0052d4 100%
          );

          /* Ultra-Smooth Layering Configuration:
            Replaces browser sub-pixel blending calculations with a solid tracking ring mask layout
            to ensure 100% vector smoothness on pure black or complex visual UI panels.
          */
          box-shadow:
            0 0 0 1.5px rgba(0, 244, 255, 0.25),
            0 12px 32px rgba(0, 180, 216, 0.45),
            0 4px 12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.15),
            inset 0 3px 4px rgba(255, 255, 255, 0.7),
            inset 0 -3px 5px rgba(0, 0, 0, 0.4);
          transition: filter 0.3s ease, box-shadow 0.3s ease;
        }

        .ai-orb:hover .ai-orb-core {
          filter: brightness(1.08);
          box-shadow:
            0 0 0 2px rgba(0, 244, 255, 0.4),
            0 16px 36px rgba(0, 180, 216, 0.55),
            0 6px 16px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.22),
            inset 0 3px 4px rgba(255, 255, 255, 0.8),
            inset 0 -2px 5px rgba(0, 0, 0, 0.3);
        }

        /* Fixed volumetric internal glow without animation rules */
        .ai-cyber-glow {
          position: absolute; 
          inset: 1px; 
          z-index: 5; 
          pointer-events: none;
          background-clip: padding-box;
          -webkit-background-clip: padding-box;
          background: radial-gradient(circle at 35% 25%, rgba(255,255,255,0.45) 0%, rgba(0,245,255,0.2) 50%, transparent 80%);
        }

        /* Mobile and Tablet adjustment (< 1024px) */
        @media (max-width: 1023px) {
          .ai-orb {
            width: 46px !important;
            height: 46px !important;
          }
        }
      `}</style>
    </>
  );
};

export default AIChatButton;