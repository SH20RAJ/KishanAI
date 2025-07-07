'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  IndianRupee, 
  MapPin, 
  Calendar,
  Filter,
  Search,
  BarChart3,
  ArrowRight,
  Leaf,
  Star,
  Clock,
  AlertCircle
} from 'lucide-react';
import { MobileHeader, BottomNavigation, MarketPriceCard } from '@/components/mobile';

const marketData = [
  {
    id: '1',
    crop: 'गेहूं',
    hindiName: 'गेहूं',
    variety: 'HD-2967',
    market: 'दिल्ली मंडी',
    state: 'दिल्ली',
    currentPrice: 2150,
    previousPrice: 2040,
    minPrice: 2100,
    maxPrice: 2200,
    modalPrice: 2150,
    unit: 'प्रति क्विंटल',
    trend: 'up' as const,
    changePercent: 5.4,
    lastUpdated: '2 घंटे पहले'
  },
  {
    id: '2',
    crop: 'धान',
    hindiName: 'धान',
    variety: 'बासमती',
    market: 'करनाल मंडी',
    state: 'हरियाणा',
    currentPrice: 3200,
    previousPrice: 3150,
    minPrice: 3100,
    maxPrice: 3300,
    modalPrice: 3200,
    unit: 'प्रति क्विंटल',
    trend: 'up' as const,
    changePercent: 1.6,
    lastUpdated: '1 घंटा पहले'
  },
  {
    id: '3',
    crop: 'मक्का',
    hindiName: 'मक्का',
    variety: 'संकर',
    market: 'इंदौर मंडी',
    state: 'मध्य प्रदेश',
    currentPrice: 1750,
    previousPrice: 1820,
    minPrice: 1700,
    maxPrice: 1800,
    modalPrice: 1750,
    unit: 'प्रति क्विंटल',
    trend: 'down' as const,
    changePercent: -3.8,
    lastUpdated: '3 घंटे पहले'
  },
  {
    id: '4',
    crop: 'सोयाबीन',
    hindiName: 'सोयाबीन',
    variety: 'JS-335',
    market: 'भोपाल मंडी',
    state: 'मध्य प्रदेश',
    currentPrice: 4200,
    previousPrice: 4100,
    minPrice: 4150,
    maxPrice: 4250,
    modalPrice: 4200,
    unit: 'प्रति क्विंटल',
    trend: 'up' as const,
    changePercent: 2.4,
    lastUpdated: '1 घंटा पहले'
  }
];

const topGainers = [
  { crop: 'तुअर दाल', change: 8.5, price: 6200 },
  { crop: 'चना', change: 6.2, price: 4800 },
  { crop: 'गेहूं', change: 5.4, price: 2150 }
];

const topLosers = [
  { crop: 'प्याज', change: -12.3, price: 1200 },
  { crop: 'आलू', change: -8.7, price: 800 },
  { crop: 'मक्का', change: -3.8, price: 1750 }
];

export default function MarketPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = marketData.filter(item => 
    item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.market.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <MobileHeader 
        title="मंडी भाव"
        showBack={false}
        rightElement={
          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <Filter size={20} className="text-gray-600" />
          </button>
        }
      />

      {/* Content */}
      <div className="px-4 pt-6 pb-24 space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">आज के मंडी भाव 📈</h2>
              <p className="text-orange-100 text-sm mb-4">
                लाइव मार्केट रेट्स और ट्रेंड्स देखें
              </p>
              <div className="flex items-center gap-1 text-sm">
                <Clock size={16} />
                <span>अंतिम अपडेट: अभी</span>
              </div>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <BarChart3 size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="फसल या मंडी खोजें..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">टॉप गेनर</p>
                <p className="text-lg font-bold text-green-600">तुअर दाल</p>
                <p className="text-xs text-green-600">+8.5%</p>
              </div>
              <TrendingUp size={24} className="text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">टॉप लूजर</p>
                <p className="text-lg font-bold text-red-600">प्याज</p>
                <p className="text-xs text-red-600">-12.3%</p>
              </div>
              <TrendingDown size={24} className="text-red-600" />
            </div>
          </div>
        </div>

        {/* Market Trends */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">मार्केट ट्रेंड्स</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Top Gainers */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-600" />
                टॉप गेनर्स
              </h4>
              <div className="space-y-2">
                {topGainers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.crop}</span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-800">₹{item.price}</div>
                      <div className="text-xs text-green-600">+{item.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <TrendingDown size={16} className="text-red-600" />
                टॉप लूजर्स
              </h4>
              <div className="space-y-2">
                {topLosers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.crop}</span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-800">₹{item.price}</div>
                      <div className="text-xs text-red-600">{item.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['all', 'grains', 'pulses', 'vegetables', 'fruits'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {filter === 'all' ? 'सभी' :
               filter === 'grains' ? 'अनाज' :
               filter === 'pulses' ? 'दालें' :
               filter === 'vegetables' ? 'सब्जियां' : 'फल'}
            </button>
          ))}
        </div>

        {/* Market Prices List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">आज के भाव</h3>
            <button className="text-orange-600 text-sm font-medium flex items-center gap-1">
              विस्तार से देखें <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Leaf size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.crop}</h4>
                      <p className="text-sm text-gray-600">{item.variety}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} />
                        <span>{item.market}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <IndianRupee size={16} className="text-gray-600" />
                      <span className="text-lg font-bold text-gray-800">{item.currentPrice}</span>
                    </div>
                    <div className={`text-sm flex items-center gap-1 ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend === 'up' ? 
                        <TrendingUp size={14} /> : 
                        <TrendingDown size={14} />
                      }
                      {Math.abs(item.changePercent)}%
                    </div>
                    <p className="text-xs text-gray-500">{item.lastUpdated}</p>
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>न्यूनतम: ₹{item.minPrice}</span>
                    <span>अधिकतम: ₹{item.maxPrice}</span>
                    <span>मोडल: ₹{item.modalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Alert */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">मार्केट अलर्ट</h4>
              <p className="text-sm text-yellow-700">
                मानसून की वजह से सब्जियों के दामों में उतार-चढ़ाव हो सकता है। 
                बेचने से पहले स्थानीय मंडी की जांच करें।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}