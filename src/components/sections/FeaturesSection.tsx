import React from 'react';
import { Card } from '../ui/Card';
import { Leaf, CloudRain, Smartphone, IndianRupee, Languages, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Crop Disease Detection",
    description: "Simply upload a photo of your crop to instantly identify diseases and get treatment recommendations.",
    color: "bg-green-50"
  },
  {
    icon: <Languages className="w-6 h-6 text-blue-600" />,
    title: "Multilingual Support",
    description: "Chat in your native language. We support Hindi, Marathi, Telugu, Tamil, and 10+ other Indian languages.",
    color: "bg-blue-50"
  },
  {
    icon: <CloudRain className="w-6 h-6 text-cyan-600" />,
    title: "Weather Forecasts",
    description: "Get accurate, location-based weather updates to plan your sowing, irrigation, and harvesting.",
    color: "bg-cyan-50"
  },
  {
    icon: <IndianRupee className="w-6 h-6 text-[var(--accent)]" />,
    title: "Live Mandi Prices",
    description: "Check real-time market prices for your crops in nearby mandis to ensure you get the best deal.",
    color: "bg-yellow-50"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    title: "Works on Telegram",
    description: "No need to download heavy apps. Access all features directly through our lightweight Telegram bot.",
    color: "bg-purple-50"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Government Schemes",
    description: "Stay updated with the latest government schemes (PM-KISAN, etc.) and check your eligibility instantly.",
    color: "bg-emerald-50"
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4">
            Everything You Need to <span className="text-[var(--primary)]">Farm Better</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Comprehensive tools designed specifically for the Indian farmer, accessible right from your phone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 h-full border-t-4 border-t-[var(--primary)]" hover={true}>
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
