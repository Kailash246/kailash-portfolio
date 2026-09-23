import React, { useEffect } from 'react';
import type { ProjectData } from '../../types/exhibition';
import { X, CheckCircle2, AlertTriangle, BookOpen, Layers, Cpu, Compass, ArrowLeft } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock background scrolling and pause Lenis while modal is open; cleanly restore on close
  useEffect(() => {
    if (!project) return;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    (window as any).__lenis?.stop();

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
    };
  }, [project]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      data-lenis-prevent
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-fadeIn"
    >
      <div
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[88dvh] bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto animate-scaleUp"
      >
        {/* Vercel Dialog Header */}
        <div className="shrink-0 bg-neutral-900 text-white px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              aria-label="Back to Projects"
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 px-3 py-1.5 rounded-full cursor-pointer transition-colors border border-neutral-700 min-h-[36px]"
            >
              <ArrowLeft size={13} />
              <span>Back</span>
            </button>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-emerald-400">
              PROJECT // {project.number}
            </span>
            <span className="text-xs font-mono text-neutral-400 uppercase hidden md:inline">
              TECHNICAL CASE STUDY & SPECIFICATION
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Case Study (Escape)"
            className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 min-h-[36px] rounded-full cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>ESC</span>
            <X size={13} />
          </button>
        </div>

        {/* Modal Body */}
        <div
          data-lenis-prevent
          style={{ WebkitOverflowScrolling: 'touch' }}
          className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-8 space-y-6 sm:space-y-8"
        >
          {/* Header Title Section */}
          <div className="border-b border-neutral-100 pb-5 sm:pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-600 font-semibold">
                ● {project.status} ({project.year})
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-sans font-black text-[#111111] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-sans font-medium text-neutral-600 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 text-neutral-900 mb-2">
                <AlertTriangle size={15} />
                <h4 className="text-xs font-mono uppercase font-bold">
                  THE REAL-WORLD PROBLEM
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 text-neutral-900 mb-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <h4 className="text-xs font-mono uppercase font-bold">
                  THE ENGINEERED SOLUTION
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Kailash's Specific Contribution */}
          <div className="p-5 rounded-2xl bg-black text-white border border-neutral-800">
            <div className="flex items-center gap-2 mb-1.5">
              <Compass size={16} className="text-emerald-400" />
              <h4 className="text-xs font-mono tracking-wider uppercase font-bold">
                MY DIRECT ROLE & CONTRIBUTION
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Architecture Highlights & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono tracking-wider uppercase font-bold text-neutral-900 flex items-center gap-2 mb-3">
                <Cpu size={14} />
                ARCHITECTURE HIGHLIGHTS
              </h4>
              <ul className="space-y-2">
                {project.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-wider uppercase font-bold text-neutral-900 flex items-center gap-2 mb-3">
                <Layers size={14} />
                KEY CAPABILITIES
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-100">
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 mb-2.5">
                KEY TECHNICAL CHALLENGES
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((ch, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-sans">
                    {ch}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 mb-2.5 flex items-center gap-1.5">
                <BookOpen size={13} />
                WHAT I LEARNED AS A DEVELOPER
              </h4>
              <ul className="space-y-2">
                {project.learnings.map((lr, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-sans">
                    {lr}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verified Technologies Stack & Close */}
          <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-neutral-500 mr-2 uppercase">
                STACK:
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 text-xs font-mono font-semibold cursor-pointer transition-colors border border-neutral-200 min-h-[36px]"
              >
                <ArrowLeft size={13} />
                <span>Back to Projects</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white text-xs font-sans font-semibold cursor-pointer transition-colors min-h-[36px]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
