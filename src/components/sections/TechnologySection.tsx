import React from 'react';
import { Card, CardContent } from '../ui/Card';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: "🧠",
      title: "TensorFlow Lite",
      description: "Disease Detection Model"
    },
    {
      icon: "💬",
      title: "GPT-4 + LangChain",
      description: "Multilingual Chat Assistant"
    },
    {
      icon: "🌐",
      title: "Bhashini API",
      description: "Indian Language Support"
    },
    {
      icon: "📊",
      title: "Real-time APIs",
      description: "Weather & Mandi Data"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Built with cutting-edge technology for reliable farming insights and scalable solutions
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} hover className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">{tech.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Infrastructure</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-green-600 text-2xl font-bold">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-blue-600 text-2xl font-bold">&lt; 2s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-purple-600 text-2xl font-bold">256-bit</div>
              <div className="text-gray-600">SSL Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
