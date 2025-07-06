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
    <section id="features" className="container mx-auto px-4 py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Complete Solution
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything a <span className="gradient-text">Farmer Needs</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From disease detection to market prices, we&apos;ve built a comprehensive platform 
            that puts advanced agricultural technology right in your pocket.
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
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <h4 className="text-2xl font-bold mb-4">Ready to Experience the Future of Farming?</h4>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of farmers who are already using KisanAI to make smarter farming decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/KisanAIBot"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              >
                🚀 Start Free Today
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                📖 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
