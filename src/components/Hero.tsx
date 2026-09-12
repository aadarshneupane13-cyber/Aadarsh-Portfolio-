import React, { useEffect, useRef, useState } from 'react';
import { EchoText } from './EchoText';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProgress(1); // Default to fully open
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(rawProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-driven values matching the reference screenshots
  // 1. Black parting panels: 0% to 101% translation
  const leftDoorTranslate = -progress * 101;
  const rightDoorTranslate = progress * 101;

  // 2. Photo scale and gentle depth: 1.12 settling to 1.00
  const imageScale = 1.12 - progress * 0.12;

  // 3. Wordmark splitting & tightening
  // Words translate outward to opposite edges
  const leftWordTranslate = -progress * 58; // % of its width
  const rightWordTranslate = progress * 58; // % of its width
  const titleScale = 1.0 + progress * 0.22;
  const letterSpacingEm = 0.03 - progress * 0.06; // tightens as it separates

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative h-[240vh] bg-zinc-100 dark:bg-[#0A0C0E] transition-colors duration-300"
    >
      {/* Sticky Stage: 100vh locked viewport with overflow hidden and isolation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate select-none flex items-center justify-center bg-zinc-100 dark:bg-[#0A0C0E] transition-colors duration-300">
        
        {/* ================= LAYER 1: AADARSH'S PHOTO (Centered with exact ratio) ================= */}
        <div 
          className="relative z-10 w-full h-full flex items-center justify-center px-4 will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Portrait Container - matching the exact ratio of Aadarsh's portrait */}
          <div className="relative w-full max-w-[480px] sm:max-w-[560px] md:max-w-[620px] h-[80vh] sm:h-[85vh] max-h-[860px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/10 bg-zinc-200 dark:bg-[#0e131d]">
            <img 
              src="/images/aadarsh-profile.jpg" 
              alt="Aadarsh Neupane" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle edge vignette so the photo melts into the panels */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-900/30 dark:from-[#0A0C0E]/40 via-transparent to-zinc-900/20 dark:to-[#0A0C0E]/30" />
          </div>
        </div>

        {/* ================= LAYER 2: TWO SOLID PARTING DOORS ================= */}
        {/* Left Solid Panel (from left edge to center seam) */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-zinc-100 dark:bg-[#0A0C0E] z-20 will-change-transform border-r border-zinc-200 dark:border-white/5 transition-colors duration-300"
          style={{
            transform: `translate3d(${leftDoorTranslate}%, 0, 0)`,
          }}
        />

        {/* Right Solid Panel (from right edge to center seam) */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-[50.5%] bg-zinc-100 dark:bg-[#0A0C0E] z-20 will-change-transform border-l border-zinc-200 dark:border-white/5 transition-colors duration-300"
          style={{
            transform: `translate3d(${rightDoorTranslate}%, 0, 0)`,
          }}
        />

        {/* ================= LAYER 3: THE PARTING WORDMARK ON TOP ================= */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-4 sm:px-8 overflow-hidden">
          <h1 
            className="font-syne font-extrabold text-[clamp(15px,5.1vw,82px)] text-zinc-900 dark:text-[#EDE7DC] leading-none tracking-[-0.01em] whitespace-nowrap flex items-center justify-center will-change-transform max-w-full"
            style={{
              transform: `scale(${titleScale})`,
              letterSpacing: `${letterSpacingEm}em`,
            }}
          >
            {/* Left Word: AADARSH */}
            <span 
              className="inline-block will-change-transform pr-1.5 sm:pr-3"
              style={{
                transform: `translate3d(${leftWordTranslate}%, 0, 0)`,
              }}
            >
              <EchoText text="AADARSH" />
            </span>

            {/* Right Word: NEUPANE */}
            <span 
              className="inline-block will-change-transform pl-1.5 sm:pl-3"
              style={{
                transform: `translate3d(${rightWordTranslate}%, 0, 0)`,
              }}
            >
              <EchoText text="NEUPANE" />
            </span>
          </h1>
        </div>

        {/* ================= LAYER 4: PINNED CORNER METADATA ================= */}
        {/* Top-Left */}
        <div className="absolute top-20 left-6 sm:left-10 z-30 pointer-events-none">
          <span className="font-sora text-[10px] uppercase tracking-[0.15em] text-zinc-700 dark:text-slate-300 block font-semibold">
            BE IT ENGINEER
          </span>
          <span className="font-sora text-[9px] uppercase tracking-[0.14em] text-zinc-500 dark:text-slate-500">
            NEPAL 🇳🇵
          </span>
        </div>

        {/* Top-Right */}
        <div className="absolute top-20 right-6 sm:right-10 z-30 text-right pointer-events-none">
          <span className="font-sora text-[10px] uppercase tracking-[0.15em] text-zinc-700 dark:text-slate-300 block font-semibold">
            EXPLORER WHO LOVES TRAVELING
          </span>
          <span className="font-sora text-[9px] uppercase tracking-[0.14em] text-zinc-500 dark:text-slate-500">
            EXPLORING THE WORLD
          </span>
        </div>

        {/* Bottom-Left */}
        <div className="absolute bottom-8 left-6 sm:left-10 z-30 pointer-events-none flex items-center gap-2">
          <span className="font-sora text-[10px] uppercase tracking-[0.15em] text-zinc-600 dark:text-slate-400 font-medium">
            {progress < 0.95 ? 'SCROLL TO OPEN ↓' : 'PORTAL UNCOVERED'}
          </span>
        </div>

        {/* Bottom-Right */}
        <div className="absolute bottom-8 right-6 sm:right-10 z-30 text-right pointer-events-none">
          <span className="font-sora text-[10px] uppercase tracking-[0.15em] text-zinc-700 dark:text-slate-300 block font-semibold">
            LEARNING FOR MINE BETTER DEVELOPMENT
          </span>
          <span className="font-sora text-[9px] uppercase tracking-[0.14em] text-zinc-900 dark:text-zinc-300 font-medium">
            EXPLORER & CREATOR
          </span>
        </div>

      </div>
    </section>
  );
};
