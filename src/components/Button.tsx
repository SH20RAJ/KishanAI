import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const baseClasses = 'font-semibold rounded-full transition-colors inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-4 text-lg'
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-600 hover:text-green-600 transition-colors">
      {children}
    </a>
  );
};
