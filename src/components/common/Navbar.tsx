import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ArrowUpRight, Mail, Linkedin, Instagram } from 'lucide-react';
import { profileData } from '../../data/profile';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'World', href: '#world' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Travel', href: '#travel' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', ...navItems.map((item) => item.href.substring(1))];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 flex justify-center ${
          scrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="w-full max-w-6xl rounded-2xl glass-pill px-4 py-3 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/10"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-slate-100 focus:outline-none"
            data-cursor="HOME"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400/70 group-hover:border-emerald-300 shadow-md shadow-emerald-500/25 shrink-0 transition-all duration-300">
              <img
                src={profileData.logoImage || profileData.profileImage}
                alt="Aadarsh Neupane Logo"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-sm tracking-tight group-hover:text-emerald-400 transition-colors uppercase">
                Aadarsh Neupane
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/80 -mt-0.5">
                Explorer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-cursor="NAV"
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/15 font-bold border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action / Status Pill */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Nepal 🇳🇵</span>
            </div>

            <a
              href="#contact"
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 text-dark-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-dark-950/98 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          {/* Close button on top right */}
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            {/* Mobile Social Connections */}
            <div className="flex items-center justify-around py-2">
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 rounded-xl bg-white/[0.04] text-slate-300 hover:text-emerald-400 border border-white/10"
                aria-label="Email Aadarsh"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] text-slate-300 hover:text-cyan-400 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://www.instagram.com/${profileData.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] text-slate-300 hover:text-pink-400 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Location:</span>
              <span className="text-slate-200">Nepal 🇳🇵</span>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl bg-emerald-500 text-dark-950 font-bold text-sm tracking-wider uppercase"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </>
  );
};
