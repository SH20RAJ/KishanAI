import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-xl">🌾</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              KisanAI
            </h1>
            <p className="text-xs text-gray-500 font-medium">Smart Farming Assistant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group">
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#technology" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div id="google_translate_element" className="scale-75 origin-right"></div>
        </nav>
        
        <div className="flex items-center gap-4">
          <div id="google_translate_element_mobile" className="md:hidden scale-75"></div>
          <Button 
            href="https://t.me/KisanAIBot"
            variant="primary"
            size="sm"
            className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">🚀</span>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};