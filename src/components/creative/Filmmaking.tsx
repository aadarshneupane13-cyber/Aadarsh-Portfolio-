import React, { useState } from 'react';
import { Film, Play, X, Camera, Sliders, Sparkles, Layers } from 'lucide-react';

export const Filmmaking: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; description: string; url?: string } | null>(null);

  const visualReels = [
    {
      title: 'Himalayan Dust & Solitude',
      category: 'Cinematography & Travel Reel',
      runtime: '02:14',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      description: 'Framing the high-altitude starkness between arid limestone canyons and Tibetan prayer flags across Mustang.'
    },
    {
      title: 'Neon, Chords & Crowds: Live in Butwal',
      category: 'Concert & Event Documentary',
      runtime: '03:40',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      description: 'The intense choreography, backstage focus, and explosive crowd energy captured live on stage.'
    }
  ];

  const creativeDisciplines = [
    { name: 'Filmmaking', desc: 'Narrative structure, light direction, and intentional composition.' },
    { name: 'Photography', desc: 'Freezing candid moments, textures, and mountain natural light.' },
    { name: 'Video Editing', desc: 'Cutting to the beat, sound design, pacing, and color grading.' },
    { name: 'Visual Storytelling', desc: 'Connecting human perspective with cinematic wonder.' }
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Film className="w-4 h-4" />
          <span>Chapter 08 — Visual Media</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase leading-[1.08]">
          I Like Telling Stories <br />
          <span className="text-gradient-emerald">Visually.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Through camera glass and editing timelines, I capture the raw energy of concerts, the stillness of mountain passes, and the stories that words alone cannot convey.
        </p>

        {/* 4 Facets Pills */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {creativeDisciplines.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-display font-bold text-sm text-emerald-400 mb-0.5">
                {item.name}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visualReels.map((reel, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-emerald-500/30 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300"
          >
            {/* Video Frame Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group/frame shadow-inner">
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover object-center group-hover/frame:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-dark-950/40 group-hover/frame:bg-dark-950/20 transition-colors" />

              {/* Play Button Trigger */}
              <button
                type="button"
                onClick={() => setActiveVideo(reel)}
                data-cursor="PLAY"
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-emerald-500 text-dark-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all"
                aria-label={`Preview ${reel.title}`}
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>

              {/* Top Badges */}
              <div className="absolute top-3 left-3">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-emerald-400 font-bold uppercase tracking-wider">
                  {reel.category}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md text-slate-300">
                {reel.runtime}
              </div>
            </div>

            {/* Reel Narrative */}
            <div className="mt-6">
              <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                {reel.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {reel.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player (No loud autoplay) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl rounded-3xl glass-panel border border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Cinematic Preview — {activeVideo.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl bg-dark-900 overflow-hidden flex flex-col items-center justify-center text-center p-6 border border-white/10">
              <Film className="w-16 h-16 text-emerald-400/60 mb-4 animate-pulse-slow" />
              <h4 className="font-display font-bold text-xl text-white">
                Cinematic Video Channel Ready
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 leading-relaxed">
                Connect your YouTube, Vimeo, or local MP4 video file in <code className="text-emerald-300 font-mono">src/components/creative/Filmmaking.tsx</code> for instant playback without disruptive autoplay sound.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
