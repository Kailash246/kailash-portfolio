import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { useExhibition } from '../../context/ExhibitionContext';

interface SpatialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'monogram';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const SpatialButton: React.FC<SpatialButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  ...props
}) => {
  const { reducedMotion } = useExhibition();

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-mono-tag tracking-wider',
    md: 'px-5 py-2.5 text-xs font-mono-tag tracking-wider',
    lg: 'px-7 py-3.5 text-sm font-mono-tag tracking-widest',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#1A1918] text-[#FAF8F5] border border-[#1A1918] shadow-[0_4px_12px_rgba(26,25,24,0.15)] hover:bg-[#C84B28] hover:border-[#C84B28] hover:shadow-[0_8px_24px_rgba(200,75,40,0.25)]',
    secondary:
      'bg-[#F4F0E8] text-[#1A1918] border border-[#DDD7CB] shadow-[0_2px_8px_rgba(26,25,24,0.04)] hover:bg-[#FAF8F5] hover:border-[#C84B28]/40 hover:text-[#C84B28]',
    outline:
      'bg-transparent text-[#1A1918] border border-[#1A1918]/20 hover:border-[#C84B28] hover:text-[#C84B28] hover:bg-[#C84B28]/5',
    monogram:
      'bg-[#FAF8F5] text-[#1A1918] border border-[#DDD7CB] p-2.5 rounded-full hover:border-[#C84B28] hover:text-[#C84B28]',
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 uppercase font-medium rounded-full cursor-pointer transition-all select-none outline-none focus-visible:ring-2 focus-visible:ring-[#C84B28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] ${
        reducedMotion
          ? 'active:opacity-85'
          : 'hover:-translate-y-0.5 active:translate-y-0.5 active:scale-[0.98]'
      } ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
