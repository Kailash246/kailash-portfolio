import React from 'react';
import { useExhibition } from '../../context/ExhibitionContext';
import { Sparkles, Layers } from 'lucide-react';

interface ModeSwitcherProps {
  className?: string;
  isCompact?: boolean;
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ className = '', isCompact = false }) => {
  const { viewMode, setViewMode } = useExhibition();

  return (
    <div
      role="tablist"
      aria-label="Portfolio View Mode"
      className={`inline-flex items-center p-0.5 sm:p-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-3xs backdrop-blur-xs shrink-0 select-none ${className}`}
    >
      {/* Full View Button */}
      <button
        role="tab"
        aria-selected={viewMode === 'full'}
        onClick={() => setViewMode('full')}
        className={`flex items-center gap-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-tight transition-all duration-200 cursor-pointer ${
          isCompact ? 'px-2 py-1 text-[10px]' : 'px-2.5 sm:px-3 py-1 sm:py-1.5'
        } ${
          viewMode === 'full'
            ? 'bg-black text-white font-bold shadow-xs'
            : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60 font-medium'
        }`}
        title="Switch to Full View (Comprehensive Portfolio)"
      >
        <Layers size={isCompact ? 10 : 11} className={viewMode === 'full' ? 'text-white' : 'text-neutral-500'} />
        <span>{isCompact ? 'FULL' : 'FULL VIEW'}</span>
      </button>

      {/* Quick View Button */}
      <button
        role="tab"
        aria-selected={viewMode === 'quick'}
        onClick={() => setViewMode('quick')}
        className={`flex items-center gap-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-tight transition-all duration-200 cursor-pointer ${
          isCompact ? 'px-2 py-1 text-[10px]' : 'px-2.5 sm:px-3 py-1 sm:py-1.5'
        } ${
          viewMode === 'quick'
            ? 'bg-black text-white font-bold shadow-xs'
            : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60 font-medium'
        }`}
        title="Switch to Quick View (High-Signal Recruiter Summary)"
      >
        <Sparkles size={isCompact ? 10 : 11} className={viewMode === 'quick' ? 'text-amber-300' : 'text-neutral-500'} />
        <span>{isCompact ? 'QUICK' : 'QUICK VIEW'}</span>
      </button>
    </div>
  );
};
