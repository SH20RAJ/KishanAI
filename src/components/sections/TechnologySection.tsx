import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Brain, MessageSquare, Globe, BarChart } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Models",
      description: "Disease Detection"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Assistant",
      description: "Multilingual Support"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Language API",
      description: "15+ Indian Languages"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-time Data",
      description: "Weather & Market Prices"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h3>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Built with reliable technology for farming insights
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="text-green-600 mb-3 flex justify-center">{tech.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
