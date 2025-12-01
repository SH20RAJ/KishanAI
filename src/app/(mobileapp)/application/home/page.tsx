'use client';

import React from 'react';
import {
  Camera,
  TrendingUp,
  Cloud,
  Award,
  Sprout,
  Bell,
  User,
  ArrowRight,
  Leaf,
  IndianRupee
} from 'lucide-react';
import Link from 'next/link';

// Import mobile components
import {
  MobileHeader,
  QuickActionCard,
  WeatherCard,
  AlertCard,
  FarmManagementCard,
  BottomNavigation
} from '@/components/mobile';

// Mock data
const mockWeatherData = {
  temperature: 28,
  condition: 'sunny' as const,
  humidity: 65,
  windSpeed: 12,
  location: 'पुणे, महाराष्ट्र',
  forecast: [
    { day: 'आज', temp: 28, condition: 'sunny' as const },
    { day: 'कल', temp: 26, condition: 'cloudy' as const },
    { day: 'परसों', temp: 24, condition: 'rainy' as const }
  ]
};

const mockMarketPrices = [
  { crop: 'गेहूं', price: 2150, change: 5.2, unit: 'प्रति क्विंटल' },
  { crop: 'धान', price: 1980, change: -2.1, unit: 'प्रति क्विंटल' },
  { crop: 'मक्का', price: 1750, change: 3.8, unit: 'प्रति क्विंटल' }
];

const mockAlerts = [
  {
    id: '1',
    type: 'warning' as const,
    title: 'मौसम चेतावनी',
    message: 'अगले 2 दिनों में भारी बारिश की संभावना',
    timestamp: '2 घंटे पहले'
  },
  {
    id: '2',
    type: 'error' as const,
    title: 'फसल रोग अलर्ट',
    message: 'आपके क्षेत्र में टमाटर में झुलसा रोग फैल रहा है',
    timestamp: '5 घंटे पहले'
  }
];

const mockFarms = [
  {
    id: '1',
    name: 'उत्तरी खेत',
    area: 5,
    crop: 'गेहूं',
    sowingDate: '15 नवं',
    expectedHarvest: '15 अप्रैल',
    irrigationStatus: 'good' as const,
    healthScore: 85
  },
  {
    id: '2',
    name: 'दक्षिणी खेत',
    area: 3,
    crop: 'धान',
    sowingDate: '20 जून',
    expectedHarvest: '25 अक्टू',
    irrigationStatus: 'needs-attention' as const,
    healthScore: 72
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <MobileHeader
        title="KisanAI"
        showBack={false}
        rightElement={
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Bell size={20} className="text-white" />
            </button>
            <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <User size={20} className="text-white" />
            </button>
          </div>
        }
      />

      {/* Content */}
      <div className="px-4 -mt-6 relative z-10 space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">नमस्ते, किसान जी! 🙏</h2>
            <p className="text-gray-500 text-sm">आज आपकी खेती कैसी चल रही है?</p>
          </div>
          <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center">
            <Sprout size={24} className="text-[var(--primary)]" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 px-1">त्वरित सेवाएं</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/application/crop-scan">
              <QuickActionCard
                icon={Camera}
                title="फसल स्कैन"
                subtitle="रोग पहचान"
                color="from-blue-500 to-blue-600"
              />
            </Link>
            <Link href="/application/weather-forecast">
              <QuickActionCard
                icon={Cloud}
                title="मौसम"
                subtitle="7 दिन का पूर्वानुमान"
                color="from-cyan-500 to-cyan-600"
              />
            </Link>
            <Link href="/application/market-prices">
              <QuickActionCard
                icon={TrendingUp}
                title="मंडी भाव"
                subtitle="आज के दाम"
                color="from-orange-500 to-orange-600"
              />
            </Link>
            <Link href="/application/schemes">
              <QuickActionCard
                icon={Award}
                title="सरकारी योजनाएं"
                subtitle="नई योजनाएं"
                color="from-purple-500 to-purple-600"
              />
            </Link>
          </div>
        </div>

        {/* Weather Widget */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-gray-800">आज का मौसम</h3>
            <Link href="/application/weather-forecast" className="text-[var(--primary)] text-sm font-semibold flex items-center gap-1">
              विस्तार से देखें <ArrowRight size={16} />
            </Link>
          </div>
          <WeatherCard weather={mockWeatherData} />
        </div>

        {/* Market Prices Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-gray-800">मंडी भाव</h3>
            <Link href="/application/market-prices" className="text-[var(--primary)] text-sm font-semibold flex items-center gap-1">
              सभी देखें <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {mockMarketPrices.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                      <Leaf size={20} className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{item.crop}</p>
                      <p className="text-xs text-gray-500">{item.unit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <IndianRupee size={14} className="text-gray-400" />
                      <span className="font-bold text-gray-800 text-lg">{item.price}</span>
                    </div>
                    <div className={`text-xs flex items-center justify-end gap-1 font-medium ${item.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {item.change > 0 ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                      {Math.abs(item.change)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 px-1">महत्वपूर्ण सूचनाएं</h3>
          <AlertCard alerts={mockAlerts} />
        </div>

        {/* Farm Management Quick Access */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 px-1">खेत प्रबंधन</h3>
          <FarmManagementCard farms={mockFarms} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}