import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#academics', label: 'Academics' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 sm:gap-3 group transition-transform active:scale-95 shrink-0"
        >
          <img 
            src="/images/aadarsh-logo.png" 
            alt="Aadarsh Neupane" 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-1 ring-zinc-300 dark:ring-white/20 shadow-sm" 
          />
          <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white transition-colors truncate max-w-[180px] sm:max-w-none">
            Aadarsh Neupane
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 border border-zinc-200/60 dark:border-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/10 transition-all duration-200 active:scale-95 touch-manipulation"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/10 transition-all duration-200 active:scale-95 touch-manipulation"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>

          {/* Hamburger / Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200/60 dark:border-white/10 transition-all duration-200 active:scale-95 touch-manipulation"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-900 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-30 md:hidden animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-40 md:hidden border-t border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-[#080b11]/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl transition-all animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-slate-200 hover:text-zinc-950 dark:hover:text-white px-4 py-3 rounded-xl bg-zinc-100/80 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200/50 dark:border-white/5 transition-all touch-manipulation active:scale-[0.98]"
              >
                <span>{link.label}</span>
                <span className="text-zinc-400 dark:text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
