import React from 'react';
import { Compass, ArrowUp, Mail, Linkedin, Instagram } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Monogram / Brand mark */}
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400/80 mb-6 shadow-xl shadow-emerald-500/20">
          <img
            src={profileData.logoImage || profileData.profileImage}
            alt="Aadarsh Neupane Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Heading */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
          Aadarsh Neupane
        </h3>

        {/* Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mt-2 mb-4 font-bold">
          <span>EXPLORER</span>
          <span>·</span>
          <span>ENGINEER</span>
          <span>·</span>
          <span>CREATOR</span>
        </div>

        {/* Location & Status Pills */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>NEPAL 🇳🇵</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300 font-semibold">
            <span>STILL EXPLORING.</span>
          </div>
        </div>

        {/* Social Links on Mobile / Footer */}
        <div className="flex items-center gap-3 mb-10">
          <a
            href={`mailto:${profileData.email}`}
            data-cursor="EMAIL"
            className="p-3 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/5 transition-colors"
            aria-label="Email Aadarsh"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="p-3 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 border border-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://www.instagram.com/${profileData.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="INSTA"
            className="p-3 rounded-xl bg-white/[0.03] hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 border border-white/5 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Aadarsh Neupane. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
