import React, { type ReactNode } from 'react';

import { useExhibition } from '../../context/ExhibitionContext';

interface DepthLayerProps {
  children: ReactNode;
  zDepth?: number; // visual translateZ distance in px
  className?: string;
  style?: React.CSSProperties;
}

export const DepthLayer: React.FC<DepthLayerProps> = ({
  children,
  zDepth = 12,
  className = '',
  style = {},
}) => {
  const { reducedMotion } = useExhibition();

  return (
    <div
      style={{
        transform: reducedMotion ? 'none' : `translateZ(${zDepth}px)`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};
