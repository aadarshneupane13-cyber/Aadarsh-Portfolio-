import React from 'react';
import { Gamepad2, Headphones, Bike, Plane, Film, Terminal, Cpu, Compass, Sparkles } from 'lucide-react';

export const BeyondWork: React.FC = () => {
  const passions = [
    { title: 'Gaming', icon: <Gamepad2 className="w-5 h-5 text-emerald-400" />, note: 'Intricate game mechanics, world design & tactical immersion' },
    { title: 'Music', icon: <Headphones className="w-5 h-5 text-cyan-400" />, note: 'Nepali rock anthems, raw live concerts & midnight synthwave' },
    { title: 'Motorcycles', icon: <Bike className="w-5 h-5 text-amber-400" />, note: 'Himalayan twisties, gravel passes & throttle therapy' },
    { title: 'Travel', icon: <Plane className="w-5 h-5 text-emerald-400" />, note: 'Ancient stone steps in Banaras & prayer flags in Mustang' },
    { title: 'Filmmaking', icon: <Film className="w-5 h-5 text-purple-400" />, note: 'Visual pacing, color palettes & capturing human stories' },
    { title: 'Technology', icon: <Terminal className="w-5 h-5 text-cyan-400" />, note: 'Modern system design & deconstructing software' },
    { title: 'AI', icon: <Cpu className="w-5 h-5 text-rose-400" />, note: 'Testing neural models & turning ideas into reality' },
    { title: 'Exploration', icon: <Compass className="w-5 h-5 text-emerald-400" />, note: 'The mindset of always remaining a student of life' }
  ];

  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5 bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-left">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interests & Passions</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-black font-display text-white uppercase">
          Beyond The <span className="text-gradient-emerald">Screen.</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
          The experiences, sounds, and rides that inspire the code and fuel the imagination.
        </p>
      </div>

      {/* Grid Display of 8 Passions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {passions.map((item, idx) => (
          <div
            key={idx}
            data-cursor="PASSION"
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="font-display font-extrabold text-lg text-white group-hover:text-emerald-300 transition-colors">
              {item.title}
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
