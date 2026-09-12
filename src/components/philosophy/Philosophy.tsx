import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const statementLines = [
    { text: 'STAY CURIOUS.', color: 'text-white' },
    { text: 'KEEP MOVING.', color: 'text-slate-300' },
    { text: 'KEEP EXPLORING.', color: 'text-gradient-emerald' }
  ];

  return (
    <section className="relative py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Monogram emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 mb-8 shadow-inner"
        >
          <Compass className="w-6 h-6 animate-pulse-slow" />
        </motion.div>

        <div className="font-mono text-xs text-emerald-400 tracking-[0.35em] uppercase font-bold mb-6">
          Personal Philosophy
        </div>

        {/* Huge Cinematic Statements Animated Line by Line During Scroll */}
        <div className="space-y-2 sm:space-y-3 font-display font-black tracking-tight uppercase leading-[0.95] text-4xl sm:text-7xl lg:text-8xl">
          {statementLines.map((line, idx) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
        >
          The world is too big to experience from one perspective. <br className="hidden sm:block" />
          I want to keep learning, building, travelling, creating and discovering what comes next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex items-center gap-2 font-mono text-xs text-slate-500"
        >
          <span>Aadarsh Neupane</span>
          <span className="text-emerald-400">·</span>
          <span>Explorer</span>
          <span className="text-emerald-400">·</span>
          <span>Nepal 🇳🇵</span>
        </motion.div>
      </div>
    </section>
  );
};
