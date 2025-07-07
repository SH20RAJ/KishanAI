import React from 'react';

interface StepCardProps {
  step: number;
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon ? (
          <div className="text-white">{icon}</div>
        ) : (
          <span className="text-white text-xl font-bold">{step}</span>
        )}
      </div>
      <h4 className="text-lg font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
