import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Compass, Wind, Shield, Route, ArrowUpRight } from 'lucide-react';

export const MotoExpedition: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl">
        
        {/* Background Wide Visual Layer with subtle scale */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop)'
          }}
        />

        {/* Ambient Dark Gradient & Grain */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

        {/* Route Line Animation Across Background */}
        <svg className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" viewBox="0 0 400 300">
          <motion.path
            d="M 50 250 Q 150 100 250 180 T 380 50"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <Gauge className="w-4 h-4" />
            <span>Freedom · Exploration · Adventure</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase leading-[1.08]">
            Two wheels. <br />
            <span className="text-gradient-emerald">Endless roads.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            For me, motorcycles aren't just vehicles — they represent absolute freedom, resilience, and presence. When you ride high-altitude gravel trails through thin Himalayan air, there are no notifications, no illusions. Just the rhythm of the engine, the curvature of the road, and the horizon rolling toward you.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Compass className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Unpaved Routes</span>
              </div>
              <div className="text-sm font-display font-bold text-white">
                Trail Endurance
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Where the blacktop ends and genuine adventure begins.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Wind className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">High Altitudes</span>
              </div>
              <div className="text-sm font-display font-bold text-white">
                Mountain Passes
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Navigating cold winds and steep switchbacks in Mustang.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Shield className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Mindset</span>
              </div>
              <div className="text-sm font-display font-bold text-white">
                Pure Presence
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Total alertness, razor focus, and deep connection with the road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
