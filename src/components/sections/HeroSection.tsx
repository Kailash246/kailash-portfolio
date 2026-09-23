import React, { useState, useEffect, useRef } from 'react';
import { useExhibition } from '../../context/ExhibitionContext';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { scrollToRoom, reducedMotion } = useExhibition();
  const heroRef = useRef<HTMLElement>(null);

  // Smooth mouse tilt state
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse move handler for desktop 3D perspective
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x, y });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [reducedMotion, isMobile]);

  // Motion calculations (disabled on mobile or reduced motion for stability)
  const portraitRotateY = reducedMotion || isMobile ? 0 : mouseOffset.x * 5;
  const portraitRotateX = reducedMotion || isMobile ? 0 : -mouseOffset.y * 5;
  const portraitTranslateX = reducedMotion || isMobile ? 0 : mouseOffset.x * 12;
  const portraitTranslateY = reducedMotion || isMobile ? 0 : mouseOffset.y * 6;

  const typoTranslateX = reducedMotion || isMobile ? 0 : -mouseOffset.x * 8;
  const typoTranslateY = reducedMotion || isMobile ? 0 : -mouseOffset.y * 4;

  const shadowX = reducedMotion || isMobile ? 0 : -mouseOffset.x * 16;
  const shadowY = reducedMotion || isMobile ? 16 : 16 - mouseOffset.y * 8;

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Portfolio Hero Entrance"
      className="relative w-full h-[100svh] min-h-[640px] lg:min-h-[720px] max-h-[1150px] bg-[#FFFFFF] overflow-hidden select-none"
      style={{ perspective: '1400px' }}
    >
      {/* Background Subtle Daylight Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[350px] sm:h-[600px] lg:h-[900px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE]/30 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Layer 1: Monumental "KAILASH KUMAR" Typography */}
      <div
        style={{
          transform: `translate3d(${typoTranslateX.toFixed(1)}px, ${typoTranslateY.toFixed(1)}px, 0px)`,
          transition: isMobile ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0.8, 0.4, 1)',
        }}
        className="absolute top-14 sm:top-18 md:top-20 lg:top-18 xl:top-20 inset-x-0 flex items-center justify-center pointer-events-none z-10 px-3 sm:px-8 md:px-12"
      >
        <div className="w-full flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 tracking-tight whitespace-nowrap">
          {/* "KAILASH" - Clean architectural outline */}
          <span
            className="text-[10vw] sm:text-[10.5vw] md:text-[10vw] lg:text-[8.8vw] xl:text-[8.5vw] 2xl:text-[8.2vw] font-sans font-black uppercase leading-none select-none text-transparent"
            style={{
              WebkitTextStroke: isMobile ? '1.5px #111111' : '3px #111111',
              letterSpacing: '-0.04em',
            }}
          >
            KAILASH
          </span>
          {/* "KUMAR" - Bold solid black */}
          <span
            className="text-[10vw] sm:text-[10.5vw] md:text-[10vw] lg:text-[8.8vw] xl:text-[8.5vw] 2xl:text-[8.2vw] font-sans font-black uppercase leading-none select-none text-[#111111]"
            style={{
              letterSpacing: '-0.04em',
            }}
          >
            KUMAR
          </span>
        </div>
      </div>

      {/* Layer 2: Kailash's Real Portrait (MASSIVE SCALE, ANCHORED AT BOTTOM-0, OVERLAPPING LETTERS) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate3d(${portraitTranslateX.toFixed(1)}px, ${portraitTranslateY.toFixed(1)}px, 30px) rotateY(${portraitRotateY.toFixed(2)}deg) rotateX(${portraitRotateX.toFixed(2)}deg) scale(${isHovered && !isMobile ? 1.012 : 1})`,
          transition: isMobile
            ? 'none'
            : isHovered
            ? 'transform 0.25s ease-out'
            : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-[46vh] sm:h-[54vh] md:h-[68vh] lg:h-[84vh] xl:h-[88vh] max-h-[88vh] w-auto flex items-end justify-center pointer-events-auto cursor-pointer"
      >
        {/* High-Resolution Portrait Cutout - Natural suit base, NO white blurry shadow */}
        <img
          src="/kailash-portrait.png"
          alt="Kailash Kumar — Student, Builder, Learner"
          style={{
            filter: `drop-shadow(${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 24px rgba(26, 25, 24, 0.12)) contrast(1.04) brightness(1.01)`,
          }}
          className="h-full w-auto max-w-[96vw] object-contain object-bottom select-none pointer-events-none block"
          loading="eager"
        />
      </div>

      {/* Layer 3: Left Content Wing - Student | Builder | Learner */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 top-[20%] sm:top-[24%] md:top-[28%] lg:top-[52%] lg:-translate-y-1/2 z-30 max-w-[calc(100vw-2rem)] sm:max-w-md md:max-w-lg lg:max-w-md text-left pointer-events-auto">
        <h2 className="text-lg sm:text-2xl lg:text-[1.85rem] font-sans font-extrabold text-[#111111] tracking-tight leading-tight">
          Student | Builder | Learner
        </h2>

        <p className="text-xs sm:text-sm text-[#4B5563] font-sans leading-relaxed mt-1.5 sm:mt-3 mb-2.5 sm:mb-4 font-normal max-w-[280px] sm:max-w-none">
          Turning ideas into <strong className="font-semibold text-[#111111]">real-world impact</strong> through technology, creativity and consistent learning.
        </p>

        {/* Alliance University Brand Logo (Positioned right above CTA per user request) */}
        <div className="mb-3 sm:mb-5">
          <img
            src="/alliance-university-logo.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo ().png';
            }}
            alt="Alliance University"
            className="h-7 sm:h-9 md:h-9.5 w-auto object-contain select-none filter contrast-105"
          />
        </div>

        {/* Action Control: Let's Connect CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToRoom('contact')}
            className="group inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black min-h-[44px]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Layer 4: Lower Left subtle accent tag (Audio removed completely) */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 bottom-5 sm:bottom-8 lg:bottom-10 z-30 flex items-center gap-3 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#9CA3AF] uppercase select-none pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#D1D5DB]" />
          <span>A BETTER TOMORROW</span>
        </div>
      </div>

      {/* Layer 5: Right Editorial Track */}
      <div className="absolute right-6 sm:right-10 md:right-12 lg:right-16 xl:right-24 top-[52%] -translate-y-1/2 z-30 hidden lg:flex items-stretch gap-3.5 pointer-events-auto">
        {/* Vertical Category Track with thin line on the left */}
        <div className="w-[1.5px] bg-[#E5E7EB] rounded-full self-stretch" />
        <div className="flex flex-col space-y-2.5 text-xs font-mono tracking-[0.22em] text-[#6B7280] uppercase">
          <button
            onClick={() => scrollToRoom('expertise')}
            className="text-left hover:text-[#111111] hover:font-bold transition-all cursor-pointer"
          >
            TECH
          </button>
          <button
            onClick={() => scrollToRoom('about')}
            className="text-left hover:text-[#111111] hover:font-bold transition-all cursor-pointer"
          >
            IDEAS
          </button>
          <button
            onClick={() => scrollToRoom('projects')}
            className="text-left hover:text-[#111111] hover:font-bold transition-all cursor-pointer"
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToRoom('achievements')}
            className="text-left hover:text-[#111111] hover:font-bold transition-all cursor-pointer"
          >
            IMPACT
          </button>
        </div>
      </div>

      {/* Layer 6: Lower Right Accent Block */}
      <div className="absolute right-6 sm:right-10 md:right-12 lg:right-16 xl:right-24 bottom-6 sm:bottom-8 lg:bottom-10 z-30 hidden lg:flex flex-col items-end text-right space-y-1 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#9CA3AF] uppercase select-none pointer-events-none">
        <span>BUILD</span>
        <span>LEARN</span>
        <span>GROW</span>
        <div className="w-8 h-px bg-[#D1D5DB] mt-1.5" />
      </div>
    </section>
  );
};
