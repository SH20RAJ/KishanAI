import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "📸",
      title: "Instant Disease Detection",
      description: "Upload a photo of your crop and get instant disease diagnosis with remedies in your language"
    },
    {
      icon: "🤖",
      title: "AI Chatbot Assistant",
      description: "Ask questions about fertilizers, weather, mandi prices in Hindi, English, or your local language"
    },
    {
      icon: "🌦️",
      title: "Weather Forecasting",
      description: "Get accurate weather predictions and rainfall alerts for better crop planning"
    },
    {
      icon: "💰",
      title: "Live Mandi Prices",
      description: "Real-time market prices from Agmarknet API to help you get the best rates"
    },
    {
      icon: "📅",
      title: "Crop Calendar",
      description: "Personalized farming calendar with sowing, irrigation, and harvest reminders"
    },
    {
      icon: "🏛️",
      title: "Government Schemes",
      description: "Stay updated on PM-KISAN, KCC, and other agricultural schemes with eligibility checker"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete Farming Solution</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything a farmer needs, right in their pocket. From disease detection to market prices, 
          we&apos;ve got you covered.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
