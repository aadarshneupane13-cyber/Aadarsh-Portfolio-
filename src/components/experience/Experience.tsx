import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Megaphone, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { FeaturedEvent } from './FeaturedEvent';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Briefcase className="w-4 h-4" />
          <span>Chapter 04 — Ground Reality</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          Real World <span className="text-gradient-emerald">Experience</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Bridging digital growth and live on-ground coordination. Hands-on experience directing digital marketing strategies and managing real-world live events and concerts in Nepal.
        </p>
      </div>

      {/* Experience Roles */}
      <div className="grid grid-cols-1 gap-8">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            data-cursor="EXPERIENCE"
            className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold uppercase tracking-wider">
                    {exp.type}
                  </span>
                  {exp.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Role</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {exp.role}
                </h3>
                <div className="text-lg sm:text-xl font-bold text-emerald-400 font-display mt-1">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Verified Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-6 border-t border-white/5">
              {exp.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Butwal Concert Case Study */}
      <FeaturedEvent />
    </section>
  );
};
