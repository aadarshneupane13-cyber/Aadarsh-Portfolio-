import React from 'react';
import { MapPin, Navigation, Mountain, Compass } from 'lucide-react';
import { travelDestinations } from '../../data/travel';

interface InteractiveMapProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ activeId, onSelect }) => {
  // Relative placement coordinates for visual map representation
  const pinPositions: Record<string, { x: number; y: number }> = {
    mustang: { x: 42, y: 32 },
    lumbini: { x: 48, y: 56 },
    lucknow: { x: 32, y: 68 },
    banaras: { x: 62, y: 76 }
  };

  return (
    <div className="relative w-full rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 overflow-hidden">
      {/* Top Map Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-400" />
          <h3 className="font-display font-bold text-lg text-white">
            Expedition Route Matrix
          </h3>
          <span className="font-mono text-xs text-slate-400">
            (Nepal & India Waypoints)
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Active Pin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span>Visited Location</span>
          </div>
        </div>
      </div>

      {/* Interactive Map Visual Grid */}
      <div className="relative w-full aspect-[2/1] sm:aspect-[2.4/1] bg-gradient-to-b from-dark-900 to-dark-950 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Region Labels */}
        <div className="absolute top-6 left-1/3 font-mono text-[11px] uppercase tracking-widest text-emerald-400/40 pointer-events-none">
          Himalayan Ridge / Nepal
        </div>
        <div className="absolute bottom-6 left-1/4 font-mono text-[11px] uppercase tracking-widest text-cyan-400/40 pointer-events-none">
          Gangetic Plains / India
        </div>

        {/* Route Connection Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 42 32 Q 45 44 48 56 T 32 68 T 62 76"
            fill="none"
            stroke="rgba(16, 185, 129, 0.25)"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Pins */}
        {travelDestinations.map((dest) => {
          const pos = pinPositions[dest.id] || { x: 50, y: 50 };
          const isActive = activeId === dest.id;

          return (
            <button
              key={dest.id}
              onClick={() => onSelect(dest.id)}
              data-cursor="PIN"
              className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              aria-label={`Select ${dest.name}`}
            >
              <div className="relative flex flex-col items-center">
                {/* Pin Halo */}
                {isActive && (
                  <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping" />
                )}

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-400 text-dark-950 scale-125 shadow-lg shadow-emerald-400/40'
                      : 'bg-dark-800 text-slate-300 border border-white/20 hover:border-emerald-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>

                {/* Pin Tooltip */}
                <div
                  className={`mt-1.5 px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wider whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500 text-dark-950 font-bold shadow-md'
                      : 'bg-dark-950/90 text-slate-300 border border-white/10 group-hover:border-emerald-400/50'
                  }`}
                >
                  <span>{dest.name}</span>
                  <span className="ml-1 text-[9px] opacity-80">{dest.countryFlag}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Select Tab Bar Below Map */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {travelDestinations.map((dest) => {
          const isActive = activeId === dest.id;
          return (
            <button
              key={dest.id}
              onClick={() => onSelect(dest.id)}
              data-cursor="SELECT"
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-500 text-dark-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20 scale-105'
                  : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              <span>{dest.countryFlag}</span>
              <span>{dest.name}</span>
              {dest.altitude && (
                <span className="text-[10px] opacity-70">({dest.altitude})</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
