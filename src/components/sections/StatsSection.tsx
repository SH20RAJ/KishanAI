import React from 'react';
import { StatCard } from '../ui/StatCard';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      title: "Farmers to Impact",
      value: "100M+",
      icon: "👨‍🌾"
    },
    {
      title: "Languages Supported",
      value: "15+",
      icon: "🌐"
    },
    {
      title: "Crop Disease Images",
      value: "50K+",
      icon: "📸"
    },
    {
      title: "AI Support",
      value: "24/7",
      icon: "🤖"
    }
  ];

  return (
    <section className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">Trusted by Farmers Across India</h3>
          <p className="text-green-100">Making agriculture smarter, one farmer at a time</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
