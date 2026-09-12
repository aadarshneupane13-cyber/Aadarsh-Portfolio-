import React from 'react';

interface EchoTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const EchoText: React.FC<EchoTextProps> = ({ text, className = '', style }) => {
  // 5 stepped echo trail layers with proportional em offsets matching the JOURNEYS reference
  const layers = [
    { y: '-0.21em', opacity: 0.08 },
    { y: '-0.155em', opacity: 0.16 },
    { y: '-0.105em', opacity: 0.28 },
    { y: '-0.06em', opacity: 0.44 },
    { y: '-0.025em', opacity: 0.65 },
  ];

  return (
    <span className={`relative inline-block ${className}`} style={style}>
      {/* 5 Stepped Echo Trail Layers */}
      {layers.map((layer, idx) => (
        <span
          key={idx}
          aria-hidden="true"
          className="absolute inset-0 select-none pointer-events-none text-zinc-900 dark:text-[#EDE7DC] will-change-transform"
          style={{
            transform: `translate3d(0, ${layer.y}, 0)`,
            opacity: layer.opacity,
          }}
        >
          {text}
        </span>
      ))}

      {/* Main Foreground Text */}
      <span className="relative z-10 text-zinc-900 dark:text-[#EDE7DC]">
        {text}
      </span>
    </span>
  );
};
