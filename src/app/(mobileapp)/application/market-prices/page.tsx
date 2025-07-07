'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  IndianRupee, 
  MapPin, 
  Calendar,
  Filter,
  Search,
  BarChart3
} from 'lucide-react';
import { MobileHeader } from '@/components/mobile';

interface MarketPrice {
  id: string;
  crop: string;
  hindiName: string;
  variety: string;
  market: string;
  state: string;
  currentPrice: number;
  previousPrice: number;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export default function MarketPricesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const marketPrices: MarketPrice[] = [
    {
      id: '1',
      crop: 'Wheat',
      hindiName: 'गेहूं',
      variety: 'HD-2967',
      market: 'अमृतसर मंडी',
      state: 'पंजाब',
      currentPrice: 2150,
      previousPrice: 2100,
      minPrice: 2100,
      maxPrice: 2200,
      modalPrice: 2150,
      unit: 'क्विंटल',
      date: 'आज',
      trend: 'up',
      changePercent: 2.4
    },
    {
      id: '2',
      crop: 'Rice',
      hindiName: 'चावल',
      variety: 'बासमती',
      market: 'लुधियाना मंडी',
      state: 'पंजाब',
      currentPrice: 3200,
      previousPrice: 3250,
      minPrice: 3150,
      maxPrice: 3300,
      modalPrice: 3200,
      unit: 'क्विंटल',
      date: 'आज',
      trend: 'down',
      changePercent: -1.5
    },
    {
      id: '3',
      crop: 'Cotton',
      hindiName: 'कपास',
      variety: 'BT कॉटन',
      market: 'फरीदकोट मंडी',
      state: 'पंजाब',
      currentPrice: 5800,
      previousPrice: 5750,
      minPrice: 5700,
      maxPrice: 5900,
      modalPrice: 5800,
      unit: 'क्विंटल',
      date: 'आज',
      trend: 'up',
      changePercent: 0.9
    },
    {
      id: '4',
      crop: 'Sugarcane',
      hindiName: 'गन्ना',
      variety: 'को-238',
      market: 'मुजफ्फरनगर मंडी',
      state: 'उत्तर प्रदेश',
      currentPrice: 350,
      previousPrice: 350,
      minPrice: 340,
      maxPrice: 360,
      modalPrice: 350,
      unit: 'क्विंटल',
      date: 'आज',
      trend: 'stable',
      changePercent: 0
    },
    {
      id: '5',
      crop: 'Mustard',
      hindiName: 'सरसों',
      variety: 'वरुणा',
      market: 'जयपुर मंडी',
      state: 'राजस्थान',
      currentPrice: 4500,
      previousPrice: 4400,
      minPrice: 4400,
      maxPrice: 4600,
      modalPrice: 4500,
      unit: 'क्विंटल',
      date: 'आज',
      trend: 'up',
      changePercent: 2.3
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp size={16} className="text-green-500" />;
      case 'down': return <TrendingDown size={16} className="text-red-500" />;
      case 'stable': return <Minus size={16} className="text-gray-500" />;
      default: return <Minus size={16} className="text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const filteredPrices = marketPrices.filter(price => {
    const matchesSearch = price.hindiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         price.crop.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'up' && price.trend === 'up') ||
                         (selectedFilter === 'down' && price.trend === 'down') ||
                         (selectedFilter === 'stable' && price.trend === 'stable');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <MobileHeader
        userName="राम सिंह"
        location="पंजाब, भारत"
        notificationCount={5}
      />

      {/* Back Button */}
      <div className="p-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          <span>वापस जाएं</span>
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">मंडी भाव</h1>
          <p className="text-gray-600">आज के ताजा दाम</p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="फसल खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto">
            {[
              { id: 'all', label: 'सभी', icon: BarChart3 },
              { id: 'up', label: 'बढ़ते', icon: TrendingUp },
              { id: 'down', label: 'गिरते', icon: TrendingDown },
              { id: 'stable', label: 'स्थिर', icon: Minus }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <filter.icon size={16} />
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Market Summary */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 text-white">
          <h3 className="text-lg font-semibold mb-3">आज का सारांश</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {marketPrices.filter(p => p.trend === 'up').length}
              </div>
              <div className="text-green-100 text-sm">बढ़ते भाव</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {marketPrices.filter(p => p.trend === 'down').length}
              </div>
              <div className="text-green-100 text-sm">गिरते भाव</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {marketPrices.filter(p => p.trend === 'stable').length}
              </div>
              <div className="text-green-100 text-sm">स्थिर भाव</div>
            </div>
          </div>
        </div>

        {/* Price List */}
        <div className="space-y-3">
          {filteredPrices.map((price) => (
            <div key={price.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-lg">{price.hindiName}</h4>
                  <p className="text-sm text-gray-600">{price.variety}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-500">{price.market}, {price.state}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <IndianRupee size={18} className="text-gray-600" />
                    <span className="text-xl font-bold text-gray-800">{price.currentPrice}</span>
                    <span className="text-sm text-gray-500">/{price.unit}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${getTrendColor(price.trend)}`}>
                    {getTrendIcon(price.trend)}
                    <span>{Math.abs(price.changePercent)}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800">₹{price.minPrice}</div>
                  <div className="text-xs text-gray-500">न्यूनतम</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800">₹{price.modalPrice}</div>
                  <div className="text-xs text-gray-500">मॉडल</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800">₹{price.maxPrice}</div>
                  <div className="text-xs text-gray-500">अधिकतम</div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Calendar size={12} />
                  <span>अपडेट: {price.date}</span>
                </div>
                <button className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                  ट्रेंड देखें
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MSP Information */}
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-3">न्यूनतम समर्थन मूल्य (MSP)</h4>
          <div className="space-y-2 text-sm text-blue-700">
            <div className="flex justify-between">
              <span>गेहूं (2024-25)</span>
              <span className="font-semibold">₹2,275/क्विंटल</span>
            </div>
            <div className="flex justify-between">
              <span>चावल (2024-25)</span>
              <span className="font-semibold">₹2,300/क्विंटल</span>
            </div>
            <div className="flex justify-between">
              <span>कपास (2024-25)</span>
              <span className="font-semibold">₹7,121/क्विंटल</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
            प्राइस अलर्ट सेट करें
          </button>
          <button className="py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            ऐतिहासिक डेटा
          </button>
        </div>
      </div>
    </div>
  );
}