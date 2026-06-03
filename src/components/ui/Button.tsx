import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'text' | 'icon';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-violet/50 disabled:opacity-50 disabled:cursor-not-allowed rounded-brand-btn text-brand-body";
  
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-navy/95 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-white text-brand-navy border border-brand-border hover:bg-brand-bg-primary hover:-translate-y-0.5 shadow-sm",
    accent: "bg-brand-violet text-white hover:bg-brand-violet/90 hover:-translate-y-0.5 shadow-sm",
    text: "text-brand-navy hover:text-brand-violet font-semibold transition-colors",
    icon: "p-2.5 bg-white text-brand-navy border border-brand-border hover:bg-brand-bg-primary rounded-xl transition-all"
  };

  const padStyles = variant === 'icon' ? '' : 'px-6 py-3';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${padStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
