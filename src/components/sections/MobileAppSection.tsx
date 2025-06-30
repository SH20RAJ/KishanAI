import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import Link from 'next/link';

export const MobileAppSection: React.FC = () => {
  const appFeatures = [
    {
      icon: "📴",
      title: "Offline Functionality",
      description: "Core features work without internet connectivity"
    },
    {
      icon: "🏡",
      title: "Farm Management",
      description: "Track multiple fields, crops, and farming activities"
    },
    {
      icon: "🔗",
      title: "IoT Integration",
      description: "Connect soil sensors and weather stations"
    },
    {
      icon: "🏪",
      title: "Marketplace Access",
      description: "Direct farmer-to-consumer sales platform"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="warning" className="mb-4">
                📱 Coming Q4 2025
              </Badge>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                KisanAI Mobile App
                <span className="block text-2xl font-normal text-gray-600 mt-2">
                  Complete Farming Companion
                </span>
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                While our Telegram bot serves millions of farmers today, we&apos;re building a comprehensive 
                mobile app with advanced features for the modern Indian farmer.
              </p>
              
              {/* App Features */}
              <div className="space-y-4 mb-8">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg"
                  href='https://tally.so/r/wvaEN8'
                >
                  📧 Join Waitlist
                </Link>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  📖 Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Will be available on:</span>
                <div className="flex gap-2">
                  <Badge variant="default" size="sm">🏪 Google Play Store</Badge>
                  <Badge variant="default" size="sm">🍎 Apple App Store</Badge>
                </div>
              </div>
            </div>
            
            {/* App Mockup/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="space-y-4">
                    {/* Mock app interface */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-lg text-gray-900">🌾 KisanAI</h4>
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                        <div>
                          <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-green-100 rounded border-2 border-dashed border-green-300 flex items-center justify-center">
                        <span className="text-green-600 text-sm">📸 Upload Crop Image</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-xl mb-1">🌤️</div>
                        <div className="text-xs text-gray-600">Weather</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-xl mb-1">💰</div>
                        <div className="text-xs text-gray-600">Prices</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                        Get AI Advice
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                Coming Soon!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Made in India 🇮🇳
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
