import React from 'react';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Farming?</h3>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
          Join thousands of farmers already using KisanAI for better harvests and smarter farming decisions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            href="https://t.me/KisanAIBot"
            variant="primary"
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
          >
            📱 Start with Telegram Bot
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-600"
          >
            📧 Join Waitlist for App
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-green-700 rounded-xl p-6">
            <div className="text-2xl font-bold mb-2">Free Forever</div>
            <div className="text-green-100">Core features always free for farmers</div>
          </div>
          <div className="bg-green-700 rounded-xl p-6">
            <div className="text-2xl font-bold mb-2">No Registration</div>
            <div className="text-green-100">Start using immediately via Telegram</div>
          </div>
          <div className="bg-green-700 rounded-xl p-6">
            <div className="text-2xl font-bold mb-2">15+ Languages</div>
            <div className="text-green-100">Support in your local language</div>
          </div>
        </div>
      </div>
    </section>
  );
};
