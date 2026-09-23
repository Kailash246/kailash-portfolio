import React from 'react';

interface RoomHeaderProps {
  index: string;
  catalogNumber: string;
  title: string;
  subtitle: string;
  dimensionLabel?: string;
  className?: string;
}

export const RoomHeader: React.FC<RoomHeaderProps> = ({
  index,
  title,
  subtitle,
  dimensionLabel,
  className = '',
}) => {
  return (
    <header className={`mb-8 sm:mb-12 md:mb-16 border-b border-neutral-200/80 pb-4 sm:pb-6 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
        <div className="inline-flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-black text-white text-[10px] sm:text-[11px] font-mono font-medium">
            {index}
          </span>
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">
            // SECTION {index}
          </span>
        </div>

        {dimensionLabel && (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {dimensionLabel}
          </span>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2.5 sm:gap-3">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-[#111111] tracking-tight leading-tight break-words">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-sans leading-relaxed max-w-lg">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
