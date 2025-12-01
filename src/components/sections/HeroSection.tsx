import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Smartphone, MessageCircle, CheckCircle2, Globe2, Clock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--secondary)] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-leaf opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="accent" className="text-sm py-1 px-3">
                🏆 YUKTI AICTE Hackathon 2025
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3 border-green-600 text-green-700 bg-white/50">
                🇮🇳 Made in India
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-tight tracking-tight">
              Expert Farming Advice <br className="hidden lg:block" />
              <span className="text-[var(--primary)]">Right in Your Pocket</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              India's first AI-powered agricultural assistant. Detect crop diseases, get weather updates, and check mandi prices instantly on Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                href="https://t.me/KisanAIBot"
                variant="primary"
                size="lg"
                className="flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <Smartphone className="w-5 h-5" />
                Start Telegram Bot
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/application"
                className="bg-white hover:bg-green-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Try App Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-green-200/50 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 text-[var(--primary-dark)] font-semibold mb-1">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>95%</span>
                </div>
                <span className="text-sm text-gray-600">Accuracy</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 text-[var(--primary-dark)] font-semibold mb-1">
                  <Globe2 className="w-5 h-5" />
                  <span>15+</span>
                </div>
                <span className="text-sm text-gray-600">Languages</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 text-[var(--primary-dark)] font-semibold mb-1">
                  <Clock className="w-5 h-5" />
                  <span>24/7</span>
                </div>
                <span className="text-sm text-gray-600">Support</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration Placeholder */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-green-100 aspect-[4/3] group">
              {/* Placeholder for the generated image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                    <Smartphone className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">KisanAI in Action</h3>
                  <p className="text-green-600">AI-Powered Crop Doctor & Market Insights</p>
                </div>
              </div>

              {/* Floating UI Elements Mockup */}
              <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-lg max-w-[180px] transform rotate-3 transition-transform group-hover:rotate-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-bold text-gray-800">Disease Detected</span>
                </div>
                <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-2/3"></div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white p-3 rounded-lg shadow-lg max-w-[200px] transform -rotate-2 transition-transform group-hover:rotate-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-800">Mandi Prices</span>
                  <span className="text-[10px] text-green-600 bg-green-50 px-1 rounded">+5%</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-gray-500">Wheat</div>
                    <div className="font-bold text-gray-900">₹2,125/Q</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};