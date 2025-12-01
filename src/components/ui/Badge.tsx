import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = ''
}) => {
  const variants = {
    primary: "bg-[var(--secondary)] text-[var(--primary-dark)] border border-green-200",
    secondary: "bg-gray-100 text-gray-800 border border-gray-200",
    outline: "bg-transparent border border-[var(--primary)] text-[var(--primary)]",
    accent: "bg-[var(--accent-light)] text-yellow-800 border border-yellow-200"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
