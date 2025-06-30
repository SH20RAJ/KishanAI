import React from 'react';

interface FeatureCardProps {
  icon: string;
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
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${hoverClasses} ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
