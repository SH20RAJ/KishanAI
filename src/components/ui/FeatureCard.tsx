import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  hover?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  hover = true
}) => {
  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group' : '';
  
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden ${hoverClasses} ${className}`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated background pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <div className="text-green-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};
