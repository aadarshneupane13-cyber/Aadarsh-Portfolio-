import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter reaching 100% in ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const step = Math.max(1, Math.ceil(remaining * 0.12));
        const next = Math.min(100, prev + step);
        if (next === 100) {
          clearInterval(interval);
        }
        return next;
      });
    }, 45);

    // Complete timer
    const doneTimer = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  const letters = 'AADARSH'.split('');

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            filter: 'blur(12px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Subtle Ambient Radial Seam in Monochrome */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none" />

          {/* Top subtle line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">
            {/* Logo Avatar Badge */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-1 ring-red-500/30 p-1.5 bg-red-950/20 backdrop-blur-md mb-6 sm:mb-8 shadow-2xl shadow-red-950/40 flex items-center justify-center relative"
            >
              <img
                src="/images/aadarsh-monogram-red.jpg"
                alt="Aadarsh"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>

            {/* Cinematic Staggered "AADARSH" Typography */}
            <div className="overflow-hidden flex items-center justify-center gap-1.5 sm:gap-3 py-1">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-wider text-white inline-block drop-shadow-lg"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle / Exploration Callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-400 font-medium">
                EXPLORER
              </span>
            </motion.div>

            {/* Minimal Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col items-center gap-2.5 w-56 sm:w-64 max-w-[80vw]"
            >
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between w-full font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                <span>LET'S GO</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom subtle indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-6 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600 pointer-events-none"
          >
            LEARNING FOR MINE BETTER DEVELOPMENT
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
