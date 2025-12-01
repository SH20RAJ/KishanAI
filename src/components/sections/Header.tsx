import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100/80 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="KisanAI Logo" width={40} height={40} className="rounded-xl" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">KisanAI</h1>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium text-sm">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium text-sm">
            How it Works
          </a>
          <a href="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium text-sm">
            Marketplace
          </a>

          {/* Language Selector - Clean Design */}
          <div className="relative">
            <div id="google_translate_element" className="translate-element"></div>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Language Selector */}
          <div id="google_translate_element_mobile" className="md:hidden translate-element-mobile"></div>

          <Button
            href="https://t.me/KisanAIBot"
            variant="primary"
            size="sm"
            className="px-4 py-2 text-sm font-medium"
          >
            Try Now
          </Button>
        </div>
      </div>
    </header>
  );
};