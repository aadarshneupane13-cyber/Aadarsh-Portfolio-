import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink, Calendar, MapPin, CheckCircle2, Compass } from 'lucide-react';
import { journeyMilestones } from '../../data/journey';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16 text-left">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <GraduationCap className="w-4 h-4" />
          <span>Chapter 03 — Foundations</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          The Journey <span className="text-gradient-emerald">So Far</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          From early school curiosity and computer science fundamentals to engineering systems in BE IT. An honest progression of learning and exploration.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
        {journeyMilestones.map((milestone, idx) => {
          const isCurrent = milestone.status === 'CURRENT';

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-7 h-7 rounded-full border-4 border-dark-950 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                  isCurrent
                    ? 'bg-emerald-400 shadow-xl shadow-emerald-400/40 ring-4 ring-emerald-500/20'
                    : 'bg-slate-700 group-hover:bg-cyan-400'
                }`}
              >
                {isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-dark-950 animate-ping" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-dark-950" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs px-3.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-white/[0.04] text-slate-300 border border-white/10'
                      }`}
                    >
                      {milestone.status}
                    </span>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{milestone.location}</span>
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-emerald-300 transition-colors">
                  {milestone.institution}
                </h3>

                <div className="text-sm font-semibold text-emerald-400 mt-1 mb-4 flex items-center gap-2 font-mono">
                  <GraduationCap className="w-4 h-4" />
                  <span>{milestone.degree}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {milestone.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-6">
                  {milestone.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Institution Website Link */}
                {milestone.website ? (
                  <div className="pt-4 border-t border-white/5 flex items-center">
                    <a
                      href={milestone.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="VISIT"
                      className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group/link font-semibold"
                    >
                      <span>Visit Institution Website ({new URL(milestone.website).hostname})</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-white/5 flex items-center text-xs font-mono text-slate-500">
                    <span>Institution details editable upon official campus confirmation</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
