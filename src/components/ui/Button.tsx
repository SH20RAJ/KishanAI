import Link from 'next/link';
import React from 'react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary: "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white shadow-sm hover:shadow-md border border-transparent",
    secondary: "bg-[var(--secondary)] hover:bg-green-100 text-[var(--primary-dark)] border border-transparent",
    outline: "bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--secondary)]",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    accent: "bg-[var(--accent)] hover:bg-yellow-600 text-white shadow-sm hover:shadow-md border border-transparent"
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-base px-5 py-2.5 rounded-lg",
    lg: "text-lg px-8 py-3 rounded-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};