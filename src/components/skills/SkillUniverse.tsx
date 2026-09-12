import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Terminal,
  Code2,
  Palette,
  Users,
  Sparkles,
  TrendingUp,
  Film,
  Camera,
  Sliders,
  Layers,
  Wrench
} from 'lucide-react';
import { skillsData } from '../../data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />
};

export const SkillUniverse: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'creative' | 'management'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'technical', label: 'Engineering & AI' },
    { id: 'creative', label: 'Visual & Media' },
    { id: 'management', label: 'Events & Strategy' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Wrench className="w-4 h-4" />
          <span>Chapter 05 — Toolkit</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          What I Like To <br />
          <span className="text-gradient-emerald">Build With</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Real expertise isn’t an arbitrary percentage bar. It is what you can understand, design, coordinate, and execute when facing real problems.
        </p>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              data-cursor="FILTER"
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-dark-950 font-bold border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid Without Fake Percentages */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              data-cursor="SKILL"
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors shadow-sm">
                    {iconMap[skill.icon] || <Sparkles className="w-5 h-5" />}
                  </div>

                  {skill.levelText && (
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 tracking-wider">
                      {skill.levelText}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl text-white group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span className="capitalize">{skill.category}</span>
                <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Active Focus →
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
