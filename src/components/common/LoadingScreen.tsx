import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { profileData } from '../../data/profile';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'name' | 'explorer' | 'done'>('name');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    const timer1 = setTimeout(() => {
      setPhase('explorer');
    }, 650);

    const timer2 = setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 400);
    }, 1350);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06070a] text-slate-100"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
            {/* Logo Avatar Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-400/80 p-0.5 bg-dark-900 flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/30"
            >
              <img
                src={profileData.logoImage || profileData.profileImage}
                alt="Aadarsh Neupane"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase font-display"
            >
              Aadarsh Neupane
            </motion.h1>

            {/* Subtitle / Explorer */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{
                opacity: phase === 'explorer' ? 1 : 0.4,
                filter: phase === 'explorer' ? 'blur(0px)' : 'blur(2px)'
              }}
              transition={{ duration: 0.4 }}
              className="mt-2 text-xs sm:text-sm font-mono tracking-[0.35em] text-emerald-400 uppercase font-semibold"
            >
              Explorer
            </motion.div>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 font-mono text-[10px] text-slate-500 tracking-wider">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
