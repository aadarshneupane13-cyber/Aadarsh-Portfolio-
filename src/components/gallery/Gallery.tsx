import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, Sparkles, Filter } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'TRAVEL', 'MOTORCYCLES', 'EVENTS', 'FILMMAKING', 'LIFE'];

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Chapter 09 — Visual Archive</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
          Moments & <span className="text-gradient-emerald">Perspectives</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          From mountain trails and concerts to late-night coding sessions. A living gallery organized across the five facets of my journey.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-cursor="FILTER"
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-dark-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20 scale-105'
                  : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid Display */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              data-cursor="VIEW"
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-emerald-500/40 transition-all duration-500 cursor-pointer aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-emerald-300 font-bold tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Hover Center Maximize Icon */}
              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-emerald-500/90 text-dark-950 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors truncate">
                  {item.title}
                </h4>

                {item.location && (
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-300 mt-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
