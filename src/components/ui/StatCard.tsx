import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      {icon && (
        <div className="text-2xl mb-2">{icon}</div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-green-100 text-sm md:text-base">
        {title}
      </div>
      {description && (
        <div className="text-green-200 text-xs mt-1">
          {description}
        </div>
      )}
    </div>
  );
};
