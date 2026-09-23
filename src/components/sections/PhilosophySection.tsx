import React from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { PHILOSOPHY_MANIFESTO } from '../../data/portfolioData';
import { useExhibition } from '../../context/ExhibitionContext';
import { Terminal } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { viewMode } = useExhibition();

  if (viewMode === 'quick') {
    return null;
  }
  return (
    <section
      id="philosophy"
      aria-label="Section 07: Core Philosophy"
      className="py-12 sm:py-28 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="07"
        catalogNumber="SECTION // 07"
        title="CORE PHILOSOPHY"
        subtitle="Prioritizing tangible, working software and physical prototypes over passive theory."
        dimensionLabel="BUILDER MINDSET"
      />

      {/* Visual Monolithic Manifesto Poster Card */}
      <div className="p-5 sm:p-8 lg:p-14 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl relative overflow-hidden my-4">
        {/* Subtle Watermark Monogram */}
        <div className="absolute -right-8 -bottom-10 text-[18rem] font-sans font-black text-neutral-900 select-none pointer-events-none leading-none opacity-40">
          K
        </div>

        <div className="max-w-3xl relative z-10 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-emerald-400 border border-neutral-800 text-[11px] sm:text-xs font-mono font-medium">
            <Terminal size={12} />
            <span>BUILDER FIRST PRINCIPLE</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-tight break-words">
              I DON'T JUST LEARN TECHNOLOGY.
            </h3>
            <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-emerald-400 leading-tight break-words">
              I USE IT TO BUILD THINGS.
            </h3>
          </div>

          {/* Visual Formula Callout */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-xs text-neutral-300">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2 py-0.5 rounded bg-neutral-800 text-white">REAL FRICTION</span>
              <span>+</span>
              <span className="px-2 py-0.5 rounded bg-neutral-800 text-white">PRAGMATIC CODE</span>
              <span>=</span>
              <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-400 border border-emerald-800 font-bold">AUTHENTIC IMPACT</span>
            </div>
          </div>
        </div>

        {/* 3 Visual Pillar Stamps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-800 relative z-10">
          {PHILOSOPHY_MANIFESTO.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-2 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  0{idx + 1}
                </span>
                <span className="text-sm">
                  {idx === 0 ? '🛠️' : idx === 1 ? '🎯' : '⚡'}
                </span>
              </div>
              <h4 className="text-sm font-sans font-bold text-white tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
