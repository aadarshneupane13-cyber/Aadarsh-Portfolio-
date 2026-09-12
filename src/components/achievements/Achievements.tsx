import React from 'react';
import { Trophy, Award, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Trophy className="w-4 h-4" />
          <span>Chapter 09 — Proven Ground</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          Milestones
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          An honest, verified record of academic completions, real-world event marketing coordination, and expeditions.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {achievementsData.map((item) => {
          const isFeatured = item.featured;

          return (
            <div
              key={item.id}
              data-cursor="MILESTONE"
              className={`glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between ${
                isFeatured ? 'md:col-span-6 lg:col-span-7' : 'md:col-span-6 lg:col-span-5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                      {item.year}
                    </span>
                    {item.category && (
                      <span className="font-mono text-[11px] text-slate-400 uppercase">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <Award className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-1.5 mb-4 font-semibold">
                  {item.organization}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {(item.credentialUrl || item.link) && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={item.credentialUrl || item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VERIFY"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    <span>Verify Credential on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
