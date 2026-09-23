import React, { useState } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { JOURNEY_STAGES } from '../../data/portfolioData';
import { Milestone, ArrowRight, Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(2); // Default to Builder phase (2024)

  const phaseIcons = ['🎓', '🌐', '⚡', '🚀'];

  return (
    <section
      id="journey"
      aria-label="Section 06: Learning Journey"
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="06"
        catalogNumber="SECTION // 06"
        title="LEARNING JOURNEY"
        subtitle="From core computer science fundamentals to shipping operational software and physical systems."
        dimensionLabel="DEV EVOLUTION"
      />

      {/* Sleek Milestone Stepper Flow Bar */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono">
          <Milestone size={16} className="text-black" />
          <span className="font-bold text-neutral-900 uppercase">4-STAGE BUILDER EVOLUTION</span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-600">2022 to Present</span>
        </div>

        {/* Mini Step Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className={activePhase === 0 ? 'text-black font-bold' : ''}>01 Fundamentals</span>
          <ArrowRight size={12} />
          <span className={activePhase === 1 ? 'text-black font-bold' : ''}>02 Full-Stack</span>
          <ArrowRight size={12} />
          <span className={activePhase === 2 ? 'text-black font-bold' : ''}>03 Builder</span>
          <ArrowRight size={12} />
          <span className={activePhase === 3 ? 'text-black font-bold' : ''}>04 Systems</span>
        </div>
      </div>

      {/* 4-Phase Progression Timeline Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {JOURNEY_STAGES.map((stage, idx) => {
          const isSelected = activePhase === idx;

          return (
            <div
              key={stage.phase}
              onClick={() => setActivePhase(idx)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-black text-white border-black shadow-xl -translate-y-1'
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-black hover:shadow-sm'
              }`}
            >
              <div>
                {/* Top: Icon + Period */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200/20">
                  <span className="text-2xl">{phaseIcons[idx]}</span>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase ${
                      isSelected ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {stage.period}
                  </span>
                </div>

                {/* Phase Number & Title */}
                <span className={`text-[10px] font-mono font-bold block mb-1 uppercase ${isSelected ? 'text-emerald-400' : 'text-neutral-400'}`}>
                  PHASE 0{idx + 1} // {stage.phase}
                </span>

                <h4 className="text-base font-sans font-bold tracking-tight mb-2.5">
                  {stage.role}
                </h4>

                {/* Narrative - 1 Clean Sentence */}
                <p
                  className={`text-xs font-sans leading-relaxed mb-5 ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {stage.narrative}
                </p>
              </div>

              {/* Breakthrough Callout */}
              <div className="pt-3.5 border-t border-neutral-200/20">
                <span className="text-[10px] font-mono uppercase tracking-wider block mb-1 opacity-70 flex items-center gap-1">
                  <Sparkles size={11} className={isSelected ? 'text-emerald-400' : 'text-neutral-400'} />
                  KEY LEAP:
                </span>
                <span className="text-xs font-sans font-bold block leading-snug">
                  {stage.keyLeap}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
