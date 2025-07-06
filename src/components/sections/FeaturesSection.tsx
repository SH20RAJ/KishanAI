import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { Camera, Bot, Cloud, DollarSign, Calendar, Building } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Disease Detection",
      description: "Upload crop photos for instant AI-powered disease diagnosis"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Assistant",
      description: "Get farming advice in your local language"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Weather Alerts",
      description: "Accurate forecasts and rainfall predictions"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Market Prices",
      description: "Real-time mandi prices for better selling decisions"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Crop Calendar",
      description: "Personalized farming schedule and reminders"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Gov Schemes",
      description: "Updates on agricultural schemes and eligibility"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="gradient-text">Farming Solution</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced agricultural technology in your pocket
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};
