import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <img 
            src="/images/aadarsh-logo.png" 
            alt="Aadarsh Neupane" 
            className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-300 dark:ring-white/20 shadow-sm" 
          />
          <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white transition-colors">
            Aadarsh Neupane
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-3">
          <a 
            href="#projects" 
            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
          >
            Projects
          </a>
          <a 
            href="#academics" 
            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
          >
            Academics
          </a>
          <a 
            href="#skills" 
            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
          >
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/10 transition-all duration-200 active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
