import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, ArrowDown, Sparkles, MapPin, Briefcase, Calendar } from 'lucide-react';
import { profileData } from '../../data/profile';
import { ProfileCard } from './ProfileCard';

export const Hero: React.FC = () => {
  const [topicIndex, setTopicIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTopicIndex((prev) => (prev + 1) % profileData.exploringTopics.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Ambient Lighting & Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Editorial Micro-Labels Around Hero Viewport */}
      <div className="hidden xl:flex items-center justify-between absolute top-24 left-12 right-12 text-[11px] font-mono text-slate-500 tracking-widest uppercase pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-emerald-400/80" />
          <span>BASED IN NEPAL 🇳🇵</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400/80" />
          <span>BE IT ENGINEER</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>EST. 2000s / 2026</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Hero Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Currently Exploring Live Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              CURRENTLY EXPLORING:
            </span>
            <div className="h-5 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profileData.exploringTopics[topicIndex]}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="font-mono text-xs font-bold text-emerald-400 tracking-wider"
                >
                  {profileData.exploringTopics[topicIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Identity Tag */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-gradient-to-r from-emerald-400 to-cyan-400" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-emerald-400">
              EXPLORER
            </span>
          </div>

          {/* Monumental Hero Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter font-display text-white leading-[0.98] uppercase">
            Aadarsh <br />
            <span className="text-gradient-emerald">Neupane</span>
          </h1>

          {/* Sub-identity Line: Technology · Travel · Creativity · Experiences */}
          <div className="mt-4 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
            <span>Technology</span>
            <span className="text-emerald-400">·</span>
            <span>Travel</span>
            <span className="text-emerald-400">·</span>
            <span>Creativity</span>
            <span className="text-emerald-400">·</span>
            <span>Experiences</span>
          </div>

          {/* Main Statement */}
          <p className="text-lg sm:text-2xl font-medium text-slate-200 leading-snug tracking-tight mb-4 max-w-xl">
            {profileData.dynamicStatement}
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
            {profileData.supportingParagraph}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#curiosity"
              data-cursor="JOURNEY"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-emerald-500 text-dark-950 font-bold text-sm tracking-wide hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass className="w-4 h-4" />
              <span>EXPLORE MY JOURNEY</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#experience"
              data-cursor="WORK"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-sm border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>VIEW MY WORK</span>
            </a>
          </div>

          {/* Editorial Mobile Status Tags */}
          <div className="flex xl:hidden flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
              Nepal 🇳🇵
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
              BE IT Engineer
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
              EST. 2026
            </span>
          </div>

        </div>

        {/* Right Column: 3D Floating Physical Photograph Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <ProfileCard />
        </div>

      </div>

      {/* Editorial Scroll Indicator */}
      <a
        href="#curiosity"
        data-cursor="EXPLORE"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-emerald-300 text-xs font-mono tracking-widest transition-colors z-20 group"
      >
        <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" />
      </a>
    </section>
  );
};
