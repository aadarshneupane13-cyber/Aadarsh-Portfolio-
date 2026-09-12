import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

interface SocialItem {
  id: string;
  name: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  cursor: string;
  color: string;
}

export const FixedSocials: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socials: SocialItem[] = [
    {
      id: 'email',
      name: 'Email',
      label: 'aadarshneupane13@gmail.com',
      href: `mailto:${profileData.email}`,
      icon: <Mail className="w-4 h-4" />,
      cursor: 'EMAIL',
      color: 'hover:text-emerald-400 hover:border-emerald-500/40'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      label: 'Aadarsh Neupane',
      href: profileData.linkedin,
      icon: <Linkedin className="w-4 h-4" />,
      cursor: 'LINKEDIN',
      color: 'hover:text-cyan-400 hover:border-cyan-500/40'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: '@aad_rsh11',
      href: `https://www.instagram.com/${profileData.instagram}/`,
      icon: <Instagram className="w-4 h-4" />,
      cursor: 'INSTA',
      color: 'hover:text-pink-400 hover:border-pink-500/40'
    }
  ];

  return (
    <aside
      aria-label="Social connections"
      className="hidden lg:flex flex-col items-center fixed left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto"
    >
      {/* Top subtle vertical accent line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20 mb-4" />

      {/* Social Items List */}
      <div className="flex flex-col items-center gap-3.5">
        {socials.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.a
                href={item.href}
                target={item.id !== 'email' ? '_blank' : undefined}
                rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
                data-cursor={item.cursor}
                whileHover={{ scale: 1.15, x: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`w-10 h-10 rounded-xl bg-dark-900/80 backdrop-blur-md border border-white/10 text-slate-400 flex items-center justify-center transition-colors shadow-lg shadow-black/40 ${item.color}`}
                aria-label={`Connect with Aadarsh on ${item.name}`}
              >
                {item.icon}
              </motion.a>

              {/* Reveal Label on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 16, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-full pl-1 pointer-events-none whitespace-nowrap z-40"
                  >
                    <div className="px-3 py-1.5 rounded-lg bg-dark-850/95 backdrop-blur-xl border border-white/15 text-slate-200 text-xs font-mono shadow-2xl flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="text-slate-400 text-[11px] font-normal">
                        ({item.label})
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom subtle vertical accent line */}
      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20 mt-4" />
    </aside>
  );
};
