import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge variant="primary" className="mb-6">
          🏆 YUKTI AICTE Hackathon 2025 Winner
        </Badge>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          भारत का पहला <span className="text-green-600">AI-Powered</span> कृषि सहायक
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering 100+ million Indian farmers with instant crop disease detection, 
          multilingual chatbot assistance, and real-time agricultural insights - all through Telegram!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            href="https://t.me/KisanAIBot" 
            variant="secondary"
            size="lg"
            className="flex items-center gap-2"
          >
            📱 Try Telegram Bot
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            📱 WhatsApp Bot (Coming Soon)
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            📱 KisanAI App (Q4 2025)
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-6">
          <span className="text-sm text-gray-500">Also available on:</span>
          <div className="flex gap-2">
            <Badge variant="default" size="sm">🏪 Google Play Store (Coming)</Badge>
            <Badge variant="default" size="sm">🍎 App Store (Coming)</Badge>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          Made in India 🇮🇳 | Transforming Agriculture with AI
        </p>
      </div>
    </section>
  );
};
