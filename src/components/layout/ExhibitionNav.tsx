import React, { useState, useEffect } from 'react';
import { useExhibition } from '../../context/ExhibitionContext';
import { PERSONAL_INFO } from '../../data/portfolioData';
import type { ExhibitionRoomId } from '../../types/exhibition';
import { Wind, Play, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS: Array<{ id: ExhibitionRoomId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'expertise', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'journey', label: 'Journey' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
];

export const ExhibitionNav: React.FC = () => {
  const {
    activeRoom,
    scrollToRoom,
    reducedMotion,
    toggleReducedMotion,
  } = useExhibition();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      (window as any).__lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: ExhibitionRoomId) => {
    scrollToRoom(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Portfolio Navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Identity: Monogram + Name + Optional 2XL Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => scrollToRoom('hero')}
              aria-label="Scroll to top"
              className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1 transition-transform active:scale-95"
            >
              {/* Minimalist Monogram */}
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-sans font-black text-sm shadow-sm group-hover:bg-neutral-800 transition-colors shrink-0">
                K
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-xs font-sans font-bold tracking-tight text-neutral-900 leading-none">
                  KAILASH KUMAR
                </span>
                <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-0.5">
                  STUDENT & BUILDER
                </span>
              </div>
            </button>

            {/* University Status Badge - visible only on extra-wide screens to prevent cramming */}
            <div className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-200/70 whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>BCA @ ALLIANCE UNIVERSITY</span>
            </div>
          </div>

          {/* Center Desktop Navigation Pills (Vercel Style) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-neutral-100/90 p-1 rounded-full border border-neutral-200/80 shadow-xs backdrop-blur-md shrink-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeRoom === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-tight whitespace-nowrap transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black ${
                    isActive
                      ? 'bg-black text-white shadow-xs font-semibold'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-200/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Social Icons, Motion Toggle, Connect CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* GitHub Profile */}
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="hidden xl:inline-flex p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-black hover:border-black bg-white transition-colors shrink-0 cursor-pointer shadow-3xs"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="hidden xl:inline-flex p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-black hover:border-black bg-white transition-colors shrink-0 cursor-pointer shadow-3xs"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Motion Toggle Button (Compact icon-first button, never wraps text) */}
            <button
              onClick={toggleReducedMotion}
              aria-label={`Toggle motion mode. Currently ${reducedMotion ? 'reduced' : 'standard'}`}
              title={`Motion Animation: ${reducedMotion ? 'Reduced' : 'Full Animation'}`}
              className={`p-2 rounded-full border text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all outline-none focus-visible:ring-2 focus-visible:ring-black shrink-0 whitespace-nowrap shadow-3xs ${
                reducedMotion
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-black hover:text-black'
              }`}
            >
              {reducedMotion ? <Wind size={14} /> : <Play size={14} className="fill-current" />}
              <span className="hidden 2xl:inline text-[11px] font-mono uppercase tracking-wider whitespace-nowrap">
                {reducedMotion ? 'Reduced' : 'Motion: On'}
              </span>
            </button>

            {/* Connect CTA Button */}
            <button
              onClick={() => scrollToRoom('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-sans font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full bg-white border border-neutral-200 text-neutral-900 hover:border-black cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black shrink-0"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-5 sm:p-7 h-[100dvh] max-h-[100dvh] overflow-y-auto overscroll-contain animate-fadeIn"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                PORTFOLIO DIRECTORY
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="text-xs font-mono text-black font-bold uppercase tracking-wider px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-full transition-colors cursor-pointer min-h-[44px] inline-flex items-center gap-1.5"
            >
              <span>CLOSE</span>
              <X size={15} />
            </button>
          </div>

          {/* Links list */}
          <div className="space-y-1 py-4 flex-1 overflow-y-auto">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeRoom === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl border-b border-neutral-100/80 text-left group cursor-pointer transition-colors min-h-[48px] ${
                    isActive ? 'bg-neutral-100 font-bold' : 'hover:bg-neutral-50 active:bg-neutral-100'
                  }`}
                >
                  <span className={`text-lg font-sans font-bold transition-colors ${isActive ? 'text-black' : 'text-neutral-700 group-hover:text-black'}`}>
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom strip */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500 shrink-0">
            <span className="truncate">KAILASH KUMAR • BCA</span>
            <button
              onClick={toggleReducedMotion}
              className="text-xs font-mono text-black font-bold underline cursor-pointer p-2 min-h-[44px] flex items-center"
            >
              {reducedMotion ? 'Motion: Off' : 'Motion: On'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
