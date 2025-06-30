import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-2xl font-bold">{stepNumber}</span>
      </div>
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-green-100">{label}</div>
    </div>
  );
};

interface TechCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export const TechCard: React.FC<TechCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};
