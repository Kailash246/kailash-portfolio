import React, { useState, useRef, type MouseEvent, type ReactNode } from 'react';

import { useExhibition } from '../../context/ExhibitionContext';

interface SpatialCardProps {
  children: ReactNode;
  className?: string;
  depth?: number; // max tilt degrees (default 8)
  elevation?: number; // translateZ in px (default 16)
  interactive?: boolean;
  onClick?: () => void;
  accentBorderOnHover?: boolean;
}

export const SpatialCard: React.FC<SpatialCardProps> = ({
  children,
  className = '',
  depth = 8,
  elevation = 16,
  interactive = true,
  onClick,
  accentBorderOnHover = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { reducedMotion } = useExhibition();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -depth;
    const rotY = ((x - centerX) / centerX) * depth;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    if (interactive && !reducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '1200px',
      }}
      className={`relative group ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div
        style={{
          transform: !reducedMotion && isHovered
            ? `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${elevation}px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.3s ease',
          transformStyle: 'preserve-3d',
        }}
        className={`bg-white rounded-2xl border border-[#1A1918]/[0.07] ${
          isHovered
            ? 'shadow-[0_20px_48px_-12px_rgba(26,25,24,0.12),0_4px_16px_rgba(26,25,24,0.04)]'
            : 'shadow-[0_4px_20px_-4px_rgba(26,25,24,0.05),0_1px_3px_rgba(26,25,24,0.03)]'
        } ${
          accentBorderOnHover && isHovered ? 'border-[#C84B28]/40' : ''
        } ${className}`}
      >
        <div style={{ transform: !reducedMotion && isHovered ? 'translateZ(10px)' : 'none' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
