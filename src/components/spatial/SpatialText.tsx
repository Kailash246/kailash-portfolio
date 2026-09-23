import React, { type ReactNode } from 'react';

import { useExhibition } from '../../context/ExhibitionContext';

interface SpatialTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  shadowColor?: string;
  offset?: number;
}

export const SpatialText: React.FC<SpatialTextProps> = ({
  children,
  as: Component = 'div',
  className = '',
  shadowColor = 'rgba(26, 25, 24, 0.05)',
  offset = 2,
}) => {
  const { reducedMotion } = useExhibition();

  return (
    <Component
      style={{
        textShadow: reducedMotion
          ? 'none'
          : `${offset}px ${offset * 1.5}px 0px ${shadowColor}, ${offset * 2}px ${offset * 3}px 8px rgba(26,25,24,0.03)`,
      }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </Component>
  );
};
