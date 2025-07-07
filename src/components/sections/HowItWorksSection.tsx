import React from 'react';
import { StepCard } from '../ui/StepCard';
import { MessageSquare, Upload, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Open Telegram",
      description: "Search for @KisanAIBot and start chatting"
    },
    {
      step: 2,
      icon: <Upload className="w-8 h-8" />,
      title: "Send Photo or Question",
      description: "Upload crop images or ask farming questions"
    },
    {
      step: 3,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Get Expert Advice",
      description: "Receive instant AI-powered solutions"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Simple 3-step process to get expert farming advice
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://t.me/KisanAIBot"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Try KisanAI Now
          </a>
        </div>
      </div>
    </section>
  );
};
