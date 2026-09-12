import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ items, currentIndex, onClose, onNavigate }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const current = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setIsZoomed(false);
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        setIsZoomed(false);
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase font-bold tracking-wider">
            {current.category}
          </span>
          {current.location && (
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{current.location}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            data-cursor="ZOOM"
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle zoom"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close Lightbox */}
          <button
            type="button"
            onClick={onClose}
            data-cursor="CLOSE"
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={() => {
          setIsZoomed(false);
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        data-cursor="PREV"
        className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-dark-900/80 hover:bg-emerald-500/20 border border-white/10 text-slate-200 hover:text-emerald-400 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className={`max-h-[70vh] w-auto max-w-full object-contain rounded-2xl transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-display font-bold text-lg text-white">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {current.caption}
          </p>
          <div className="font-mono text-[11px] text-slate-500 mt-2">
            {currentIndex + 1} of {items.length} (Use ← / → keys to navigate)
          </div>
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => {
          setIsZoomed(false);
          onNavigate((currentIndex + 1) % items.length);
        }}
        data-cursor="NEXT"
        className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-dark-900/80 hover:bg-emerald-500/20 border border-white/10 text-slate-200 hover:text-emerald-400 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
