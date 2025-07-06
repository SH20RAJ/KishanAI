import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center relative">
      <div className="max-w-5xl mx-auto">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 animate-float delay-1000">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-sm"></div>
        </div>
        <div className="absolute bottom-10 left-1/4 animate-float delay-2000">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-sm"></div>
        </div>
        
        {/* <Badge variant="primary" className="mb-8 animate-glow shadow-lg">
          🏆 YUKTI AICTE Hackathon 2025 Winner
        </Badge> */}
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-gray-900 mb-2">भारत का पहला</span>
          <span className="gradient-text block mb-2">AI-Powered</span>
          <span className="block text-gray-900">कृषि सहायक</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Empowering <span className="font-semibold text-green-600">100+ million</span> Indian farmers with instant crop disease detection, 
          multilingual chatbot assistance, and real-time agricultural insights - all through Telegram!
        </p>
        
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            href="https://t.me/KisanAIBot" 
            variant="secondary"
            size="lg"
            className="flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-glow"
          >
            <span className="text-2xl">📱</span>
            <span className="font-semibold">Try Telegram Bot</span>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">FREE</span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl mr-2">💬</span>
            WhatsApp Bot (Coming Soon)
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl mr-2">📱</span>
            KisanAI App (Q4 2025)
          </Button>
        </div>
        
        {/* Enhanced features preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📸</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Instant Detection</div>
                <div className="text-sm text-gray-600">AI-powered crop analysis</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌐</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">15+ Languages</div>
                <div className="text-sm text-gray-600">Your local language</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">24/7 Available</div>
                <div className="text-sm text-gray-600">Always ready to help</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <span className="text-gray-500 font-medium">Also coming to:</span>
          <div className="flex gap-3">
            <Badge variant="default" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
              🏪 Google Play Store
            </Badge>
            <Badge variant="default" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
              🍎 App Store
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Made in India 🇮🇳
          </span>
          <span className="text-gray-300">|</span>
          <span>Transforming Agriculture with AI</span>
        </div>
      </div>
    </section>
  );
};
