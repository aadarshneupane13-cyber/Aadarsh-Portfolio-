import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-white/5 py-12 px-4 sm:px-6 bg-zinc-100 dark:bg-[#06080d] text-zinc-600 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand / Copyright */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/aadarsh-logo.png" 
            alt="Aadarsh Neupane" 
            className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-300 dark:ring-white/10" 
          />
          <p className="poppins-regular text-zinc-600 dark:text-slate-400">
            © {new Date().getFullYear()} <span className="text-zinc-900 dark:text-white font-medium">Aadarsh Neupane</span>. All rights reserved.
          </p>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-slate-400">
            <a 
              href="https://www.facebook.com/AadarshNeupane.69" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Facebook Profile"
            >
              Facebook
            </a>
            <span>•</span>
            <a 
              href="https://www.instagram.com/aad_rsh11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              Instagram
            </a>
            <span>•</span>
            <a 
              href="https://www.linkedin.com/in/aadarsh-neupane-657705418" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-lg bg-zinc-200/80 hover:bg-zinc-300 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-800 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white transition-all border border-zinc-300 dark:border-white/10"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
