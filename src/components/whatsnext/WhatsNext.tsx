import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export const WhatsNext: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 glass-panel rounded-3xl p-8 sm:p-14 border border-white/15 shadow-2xl overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Continuous Evolution</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight uppercase leading-[1.08]"
        >
          The Next Chapter Is <br />
          <span className="text-gradient-emerald">Still Being Written.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <div className="mt-8 space-y-3 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          <p>
            I'm still learning. Still building. Still travelling. Still figuring things out.
          </p>
          <p className="text-emerald-300 font-semibold font-display text-lg sm:text-2xl">
            And that's the part I'm most excited about.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            data-cursor="CONNECT"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 text-dark-950 font-bold text-sm tracking-wider uppercase hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>LET'S CONNECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
