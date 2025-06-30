import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">🌾</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-green-800">KisanAI</h1>
            <p className="text-xs text-gray-500">Smart Farming Assistant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            How it Works
          </a>
          <a href="#technology" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            Technology
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            Contact
          </a>
          <div id="google_translate_element" className="scale-75 origin-right"></div>
        </nav>
        
        <div className="flex items-center gap-4">
          <div id="google_translate_element_mobile" className="md:hidden scale-75"></div>
          <Button 
            href="https://t.me/KisanAIBot"
            variant="primary"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
