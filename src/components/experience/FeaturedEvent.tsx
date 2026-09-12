import React, { useState } from 'react';
import { Sparkles, Music, MapPin, Calendar, Users, Camera, Film, ArrowDown, Image as ImageIcon } from 'lucide-react';
import { featuredEventCaseStudy } from '../../data/experience';

export const FeaturedEvent: React.FC = () => {
  const {
    title,
    subtitle,
    location,
    date,
    venue,
    team,
    artists,
    stages,
    bannerPhrases,
    audienceNote,
    responsibilities,
    eventPhotos
  } = featuredEventCaseStudy;

  const [activePhoto, setActivePhoto] = useState<string>(eventPhotos?.[0] || featuredEventCaseStudy.image);

  return (
    <div className="mt-24 relative">
      {/* Cinematic Marquee Banner */}
      <div className="relative overflow-hidden py-3 bg-emerald-500/10 border-y border-emerald-500/20 mb-12 rounded-xl">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).flatMap((_, i) =>
            bannerPhrases.map((phrase, pIdx) => (
              <div key={`${i}-${pIdx}`} className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] text-emerald-400 font-bold uppercase">
                <span>{phrase}</span>
                <span className="text-white/30">↓</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Case Study Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
        
        {/* Ambient Back Glow */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-dark-950 font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20">
                Featured Case Study
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{location}</span>
              </div>
            </div>

            {/* Headlining Artists Pills */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-400">Headlining Artists:</span>
              <div className="flex flex-wrap items-center gap-2">
                {artists.map((artist) => (
                  <span
                    key={artist}
                    className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/15 text-xs font-display font-bold text-emerald-300 shadow-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.08] max-w-4xl uppercase">
            {title}
          </h3>

          <p className="mt-3 text-xl font-bold text-emerald-400 font-display">
            {subtitle}
          </p>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {featuredEventCaseStudy.tagline}
          </p>

          {/* Editorial Case Study Metadata Grid (Room to add Date, Venue, Team, Responsibilities) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono">
            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">Event Venue</div>
              <div className="text-slate-200 font-semibold">{venue}</div>
            </div>
            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">Production Team</div>
              <div className="text-slate-200 font-semibold">{team}</div>
            </div>
            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">My Role</div>
              <div className="text-emerald-400 font-semibold">{featuredEventCaseStudy.role}</div>
            </div>
            <div>
              <div className="text-slate-500 uppercase tracking-wider mb-1">Timeline</div>
              <div className="text-slate-200 font-semibold">{date}</div>
            </div>
          </div>

          {/* 6-Stage Process Lifecycle Flow (IDEA -> PLANNING -> PROMOTION -> COORDINATION -> EVENT -> EXPERIENCE) */}
          <div className="mt-14">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-6 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Event Lifecycle Architecture</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stages.map((stage, sIdx) => (
                <div
                  key={stage.step}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/20">
                      STAGE {stage.step}
                    </span>
                    {sIdx < stages.length - 1 && (
                      <span className="hidden lg:block text-slate-600 font-mono text-xs group-hover:text-emerald-400 transition-colors">
                        ↓ Next
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {stage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Imagery & Room for Posters/Videos */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 uppercase tracking-widest font-semibold">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>Concert Photographs & Media Archive</span>
              </div>
              <div className="text-xs font-mono text-slate-500">
                Drop your high-res concert captures into <code className="text-emerald-300 font-mono">public/images/</code>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl overflow-hidden bg-dark-900 border border-white/10 shadow-xl group">
                <img
                  src={activePhoto}
                  alt="Concert in Butwal by Event Vibes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                  <span>Butwal Live Concert Archive</span>
                  <span className="text-emerald-400 font-bold">Event Vibes</span>
                </div>
              </div>

              {/* Verified Audience & Documentation Note */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-dark-900 border border-emerald-500/25">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2 font-mono text-xs font-bold">
                    <Music className="w-4 h-4" />
                    <span>AUTHENTIC DOCUMENTATION</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Verified Execution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {audienceNote}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="font-mono text-xs text-slate-400 mb-2">Room for Media Additions:</div>
                  <ul className="text-xs text-slate-300 space-y-1 font-mono">
                    <li>• Event Date & Venue</li>
                    <li>• Official Stage Posters</li>
                    <li>• Direct YouTube/Video Reel Embed</li>
                    <li>• Backstage & Crowd Photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
