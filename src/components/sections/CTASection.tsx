import React from 'react';
import { Button } from '../ui/Button';
import { Rocket, Mail, Gift, Zap, Globe } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-16">
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Ready to Start?
          </div>
          
          <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to <span className="text-yellow-300">Transform</span> Your Farming?
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of farmers already using KisanAI for better harvests and smarter farming decisions
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
            <Button 
              href="https://t.me/KisanAIBot"
              variant="primary"
              size="lg"
              className="  border-fuchsia-400 border text-green-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <Rocket className="w-5 h-5 mr-3" />
              <span className="font-bold">Start with Telegram Bot</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm ml-3">FREE</span>
            </Button>
            <Button 
              href="/application"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 mr-2" />
              Try Full App Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Gift className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">Free Forever</div>
              <div className="text-green-100 group-hover:text-white transition-colors duration-300">
                Core features always free for farmers
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Zap className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">No Registration</div>
              <div className="text-green-100 group-hover:text-white transition-colors duration-300">
                Start using immediately via Telegram
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Globe className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">15+ Languages</div>
              <div className="text-green-100 group-hover:text-white transition-colors duration-300">
                Support in your local language
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-green-100 mb-4">Trusted by farmers across India</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
