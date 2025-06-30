import React from 'react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
        <span className="text-white text-2xl font-bold">{step}</span>
      </div>
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
