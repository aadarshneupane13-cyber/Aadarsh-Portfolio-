import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mountain, Calendar, Image as ImageIcon, Compass, ArrowRight } from 'lucide-react';
import { travelDestinations } from '../../data/travel';
import { InteractiveMap } from './InteractiveMap';

export const TravelJournal: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('mustang');

  const currentDestination =
    travelDestinations.find((d) => d.id === selectedId) || travelDestinations[0];

  return (
    <section id="travel" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Compass className="w-4 h-4" />
          <span>Chapter 07 — Expeditions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          The World Is My <br />
          <span className="text-gradient-emerald">Classroom.</span>
        </h2>
        <p className="mt-3 text-xl sm:text-2xl font-bold text-slate-200">
          I don't just want to see the world. I want to experience it.
        </p>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          From the wind-carved arid cliffs of Mustang and the tranquility of Lumbini in Nepal, to the ancient holy ghats of Banaras and royal corridors of Lucknow in India.
        </p>
      </div>

      {/* Lightweight Interactive Map Visualization */}
      <div className="mb-14">
        <InteractiveMap activeId={selectedId} onSelect={setSelectedId} />
      </div>

      {/* Cinematic Destination Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDestination.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="glass-panel rounded-3xl border border-white/15 overflow-hidden p-6 sm:p-10 lg:p-12 relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Cinematic Huge Photograph */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group shadow-xl">
              <img
                src={currentDestination.image}
                alt={`${currentDestination.name} expedition`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/15 text-white font-bold flex items-center gap-1.5 shadow-lg">
                  <span>{currentDestination.countryFlag}</span>
                  <span>{currentDestination.country}</span>
                </span>

                {currentDestination.altitude && (
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-semibold flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5" />
                    <span>{currentDestination.altitude}</span>
                  </span>
                )}
              </div>

              {/* Bottom Photo Count */}
              <div className="absolute bottom-4 right-4 font-mono text-xs px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/15 text-slate-300 flex items-center gap-1.5 shadow-lg">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentDestination.photoCount} Captures in Archive</span>
              </div>
            </div>

            {/* Travel Story Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentDestination.region}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black font-display text-white uppercase">
                  {currentDestination.name}
                </h3>

                <p className="mt-3 text-sm font-semibold text-emerald-300">
                  {currentDestination.highlight}
                </p>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {currentDestination.story}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Expedition Year: {currentDestination.year}</span>
                </div>

                <a
                  href="#gallery"
                  data-cursor="GALLERY"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  <span>Explore Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
