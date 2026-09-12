import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ProfileCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [imgError, setImgError] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect coarse pointer (mobile touch devices)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
    }
  }, []);

  // 3D Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{ perspective: 1100 }}
    >
      {/* Outer ambient glow reacting to mouse */}
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none"
        style={{
          left: glowX,
          top: glowY
        }}
      />

      {/* Main 3D Card Presentation */}
      <motion.div
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full max-w-[340px] sm:max-w-[390px] rounded-3xl p-3 sm:p-4 glass-panel border border-white/15 shadow-2xl shadow-black/80 transition-shadow duration-300"
        data-cursor="EXPLORE"
      >
        {/* Floating Bevel Glass Highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20" />

        {/* Physical Photograph Frame */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group shadow-inner">
          
          {/* Subtle noise grain texture */}
          <div className="absolute inset-0 bg-grain pointer-events-none z-10 opacity-25" />

          {/* Actual Photograph Presentation */}
          {!imgError ? (
            <img
              src={profileData.profileImage}
              alt="Aadarsh Neupane — Explorer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
          ) : (
            // Architectural fallback when awaiting local photo drop-in
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-dark-850 to-dark-950 p-6 text-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 shadow-lg">
                <Compass className="w-10 h-10 animate-spin-slow" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">
                Aadarsh Neupane
              </h3>
              <p className="text-xs font-mono text-emerald-400 mt-1 uppercase tracking-widest font-semibold">
                Explorer · Nepal 🇳🇵
              </p>
              <div className="mt-5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 max-w-xs leading-relaxed">
                Your genuine photo will display here automatically from <br />
                <code className="text-emerald-300 font-mono">public/images/aadarsh-profile.jpg</code>
              </div>
            </div>
          )}

          {/* Soft inner vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/25 to-transparent pointer-events-none z-10" />

          {/* Bottom Card Identity Info */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Identity</span>
              </div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-white">
                Aadarsh Neupane
              </div>
              <div className="font-mono text-[11px] text-slate-400">
                BE IT Engineer · Explorer
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-dark-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-400 shadow-lg">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Floating Editorial Badge 1: BASED IN NEPAL */}
        <motion.div
          animate={isTouch ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -left-3 z-30 px-3.5 py-1.5 rounded-xl glass-pill shadow-xl border border-emerald-500/30 flex items-center gap-2"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-mono text-xs font-bold text-slate-100 tracking-wider">
            NEPAL 🇳🇵
          </span>
        </motion.div>

        {/* Floating Editorial Badge 2: CURRENT STATUS */}
        <motion.div
          animate={isTouch ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-3 -right-3 z-30 px-3.5 py-1.5 rounded-xl glass-pill shadow-xl border border-cyan-500/30 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-bold text-slate-100 tracking-wider">
            BE IT ENGINEER
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
