'use client';

import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  TrendingUp, 
  Cloud, 
  Award, 
  MessageCircle, 
  Leaf,
  Sun,
  CloudRain,
  Sprout,
  Bell,
  User,
  Menu,
  ArrowRight,
  Calendar,
  MapPin,
  IndianRupee
} from 'lucide-react';
import Link from 'next/link';

// Import mobile components
import {
  MobileHeader,
  QuickActionCard,
  WeatherCard,
  MarketPriceCard,
  CropDoctorCard,
  FarmManagementCard,
  AlertCard,
  GovernmentSchemeCard,
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
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Header */}
      <MobileHeader 
        title="KisanAI"
        showBack={false}
        rightElement={
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              <User size={20} className="text-gray-600" />
            </button>
          </div>
        }
      />

      {/* Content */}
      <div className="px-4 pt-6 pb-24 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">नमस्ते, किसान जी! 🌾</h2>
              <p className="text-green-100 text-sm">आज आपकी खेती कैसी चल रही है?</p>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <Sprout size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">त्वरित सेवाएं</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/application/crop-scan">
              <QuickActionCard
                icon={Camera}
                title="फसल स्कैन"
                subtitle="रोग पहचान"
                color="bg-gradient-to-br from-blue-500 to-blue-600"
              />
            </Link>
            <Link href="/application/weather-forecast">
              <QuickActionCard
                icon={Cloud}
                title="मौसम"
                subtitle="7 दिन का पूर्वानुमान"
                color="bg-gradient-to-br from-cyan-500 to-cyan-600"
              />
            </Link>
            <Link href="/application/market-prices">
              <QuickActionCard
                icon={TrendingUp}
                title="मंडी भाव"
                subtitle="आज के दाम"
                color="bg-gradient-to-br from-orange-500 to-orange-600"
              />
            </Link>
            <Link href="/application/schemes">
              <QuickActionCard
                icon={Award}
                title="सरकारी योजनाएं"
                subtitle="नई योजनाएं"
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
            </Link>
          </div>
        </div>

        {/* Weather Widget */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">आज का मौसम</h3>
            <Link href="/application/weather-forecast" className="text-green-600 text-sm font-medium flex items-center gap-1">
              विस्तार से देखें <ArrowRight size={16} />
            </Link>
          </div>
          <WeatherCard weather={mockWeatherData} />
        </div>

        {/* Market Prices Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">मंडी भाव</h3>
            <Link href="/application/market-prices" className="text-green-600 text-sm font-medium flex items-center gap-1">
              सभी देखें <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="space-y-3">
              {mockMarketPrices.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.crop}</p>
                      <p className="text-xs text-gray-500">{item.unit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <IndianRupee size={14} className="text-gray-600" />
                      <span className="font-semibold text-gray-800">{item.price}</span>
                    </div>
                    <div className={`text-xs flex items-center gap-1 ${
                      item.change > 0 ? 'text-green-600' : 'text-red-600'
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
          <h3 className="text-lg font-semibold text-gray-800">महत्वपूर्ण सूचनाएं</h3>
          <AlertCard alerts={mockAlerts} />
        </div>

        {/* Farm Management Quick Access */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">खेत प्रबंधन</h3>
          <FarmManagementCard farms={mockFarms} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}