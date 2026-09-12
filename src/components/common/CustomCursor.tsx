import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const customLabel = interactive.getAttribute('data-cursor');
        setCursorText(customLabel || null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: cursorText ? 0 : 1
        }}
      />
      {/* Outer Expanding Halo / Badge */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          cursorText
            ? 'w-20 h-20 bg-emerald-500/90 text-dark-950 font-bold text-xs tracking-wider border border-emerald-300 shadow-lg shadow-emerald-500/30'
            : isHovered
            ? 'w-12 h-12 bg-emerald-500/15 border border-emerald-400/60 scale-110'
            : 'w-8 h-8 border border-white/25 bg-transparent'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
