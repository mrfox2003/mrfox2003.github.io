import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white/45
        backdrop-blur-xl
        border border-white/60
        rounded-brand-card
        p-6
        transition-all
        duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverEffect 
          ? 'shadow-brand-card hover:shadow-brand-card-hover hover:-translate-y-1 hover:border-white/95' 
          : 'shadow-brand-card'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
