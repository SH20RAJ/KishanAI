import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Smartphone, MessageCircle, Zap, Globe, Camera } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center relative">
      <div className="max-w-4xl mx-auto">
        
        <Badge variant="primary" className="mb-6">
          YUKTI AICTE Hackathon 2025
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block text-gray-900 mb-2">India&apos;s First</span>
          <span className="gradient-text block">AI-Powered Farm Assistant</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Instant crop disease detection and expert advice for farmers across India
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Button 
            href="https://t.me/KisanAIBot" 
            variant="primary"
            size="md"
            className="flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Try Telegram Bot
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">FREE</span>
          </Button>
          
          <Button 
            variant="outline"
            size="md"
            href="/app"
            className="border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Try Full App Demo
          </Button>
        </div>
        
        {/* Key features */}
        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Camera className="w-4 h-4 text-green-600" />
            <span>Instant Detection</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>15+ Languages</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>24/7 Available</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          Made in India • Transforming Agriculture with AI
        </div>
      </div>
    </section>
  );
};