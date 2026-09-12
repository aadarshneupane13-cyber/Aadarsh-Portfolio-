import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Compass, Gauge, Film, Users, Heart, ArrowDown } from 'lucide-react';

interface CuriosityTopic {
  title: string;
  icon: React.ReactNode;
  accent: string;
  tagline: string;
}

export const CuriosityIntro: React.FC = () => {
  const curiosities: CuriosityTopic[] = [
    { title: 'Technology.', icon: <Terminal className="w-4 h-4" />, accent: '#10b981', tagline: 'Logic, systems & code' },
    { title: 'AI.', icon: <Cpu className="w-4 h-4" />, accent: '#06b6d4', tagline: 'Intelligent systems & models' },
    { title: 'Travel.', icon: <Compass className="w-4 h-4" />, accent: '#10b981', tagline: 'Unmapped terrains & horizons' },
    { title: 'Motorcycles.', icon: <Gauge className="w-4 h-4" />, accent: '#38bdf8', tagline: 'Two wheels & high passes' },
    { title: 'Filmmaking.', icon: <Film className="w-4 h-4" />, accent: '#10b981', tagline: 'Visual rhythm & framing' },
    { title: 'Events.', icon: <Sparkles className="w-4 h-4" />, accent: '#06b6d4', tagline: 'Stadium concerts & crowds' },
    { title: 'People.', icon: <Users className="w-4 h-4" />, accent: '#10b981', tagline: 'Shared stories & perspectives' },
    { title: 'Experiences.', icon: <Heart className="w-4 h-4" />, accent: '#38bdf8', tagline: 'Living beyond the screen' }
  ];

  return (
    <section id="curiosity" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start">
        {/* Subtle Section Subtitle */}
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Curiosity Manifesto</span>
        </div>

        {/* Huge Kinetic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-white tracking-tight uppercase max-w-4xl leading-[1.05]"
        >
          I'm curious about <br />
          <span className="text-gradient-emerald">a lot of things.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          Curiosity isn't a single switch — it's an expansive radar. Here is what keeps my mind, wheels, and cameras in constant motion:
        </motion.p>

        {/* Scroll-Revealed Kinetic Words Grid */}
        <div className="mt-14 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {curiosities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              data-cursor="CURIOUS"
              className="group p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-500 font-semibold group-hover:text-emerald-400 transition-colors">
                  0{idx + 1}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-emerald-400 border border-white/10 bg-white/[0.02] group-hover:scale-110 transition-transform"
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  {item.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smooth transition prompt to About section */}
        <div className="mt-12 flex items-center gap-3 text-xs font-mono text-slate-500">
          <span>Continue below</span>
          <ArrowDown className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
