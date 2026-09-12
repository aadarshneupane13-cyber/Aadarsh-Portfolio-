import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Compass,
  Gauge,
  Film,
  Sparkles,
  Gamepad2,
  Headphones,
  ArrowUpRight
} from 'lucide-react';
import { worldPillars } from '../../data/world';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />
};

export const MyWorld: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(worldPillars[0].id);

  const activePillar = worldPillars.find((p) => p.id === activeId) || worldPillars[0];

  return (
    <section id="world" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Chapter 02 — Pillars</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase max-w-3xl leading-[1.05]">
          A few things that <br />
          <span className="text-gradient-emerald">make me, me.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          I don't fit into a single label. These are the eight dimensions where my energy, curiosity, and hours live — from terminals and AI architectures to mountain gravel passes and stadium concerts.
        </p>
      </div>

      {/* Main Interactive Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Interactive 8-Pillar List with Moving Numbers & Typography Shifts */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          {worldPillars.map((pillar) => {
            const isActive = activeId === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                onClick={() => setActiveId(pillar.id)}
                data-cursor="EXPLORE"
                className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer border overflow-hidden ${
                  isActive
                    ? 'bg-white/[0.05] border-emerald-500/40 shadow-xl shadow-emerald-500/5'
                    : 'bg-white/[0.015] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                {/* Subtle active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activePillarBar"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-cyan-400"
                  />
                )}

                <div className="flex items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Number that moves on hover */}
                    <span
                      className={`font-mono text-base sm:text-xl font-bold transition-all duration-300 group-hover:translate-x-1 ${
                        isActive
                          ? 'text-emerald-400 scale-110'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      {pillar.number}
                    </span>

                    {/* Title & Tagline with shift */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-display font-extrabold text-lg sm:text-2xl tracking-tight transition-all duration-300 group-hover:translate-x-1.5 ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-slate-400 mt-0.5 hidden sm:block">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Icon & Arrow */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors border border-white/10 ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-white/[0.03] text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {iconMap[pillar.icon] || <Sparkles className="w-4 h-4" />}
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive
                          ? 'text-emerald-400 translate-x-0.5 -translate-y-0.5'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Mobile Description Expansion */}
                {isActive && (
                  <div className="lg:hidden mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Cinematic Visual Showcase Reacting to Active Pillar */}
        <div className="hidden lg:flex lg:col-span-5 flex-col">
          <div className="sticky top-28 rounded-3xl overflow-hidden glass-panel border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[580px] shadow-2xl relative">
            
            {/* Background High-Res Image with Mask Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activePillar.image})` }}
              >
                {/* Vignette & Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/75 to-dark-950/30" />
                <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Top Detail Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/15 text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>DIMENSION {activePillar.number}</span>
              </span>

              {activePillar.stats && (
                <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-slate-300">
                  {activePillar.stats}
                </span>
              )}
            </div>

            {/* Bottom Content Narrative */}
            <div className="relative z-10 mt-auto pt-16">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
                {activePillar.tagline}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                {activePillar.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activePillar.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Curated by Aadarsh</span>
                <span className="text-emerald-400 font-semibold">Live in Nepal 🇳🇵</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
