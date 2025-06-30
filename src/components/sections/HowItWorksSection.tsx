import React from 'react';
import { StepCard } from '../ui/StepCard';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Open Telegram",
      description: "Search for @KisanAIBot or click our link to start chatting with our AI assistant"
    },
    {
      step: 2,
      title: "Send Photo or Ask Question",
      description: "Upload crop images for disease detection or type your farming questions in any language"
    },
    {
      step: 3,
      title: "Get Expert Advice",
      description: "Receive instant AI-powered solutions, treatments, and personalized recommendations"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">How KisanAI Works</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple 3-step process to get expert farming advice powered by advanced AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to get started?</p>
          <a 
            href="https://t.me/KisanAIBot"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            📱 Try KisanAI Now
          </a>
        </div>
      </div>
    </section>
  );
};
