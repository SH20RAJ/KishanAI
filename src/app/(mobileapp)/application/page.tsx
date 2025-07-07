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
  Home,
  Bell,
  User,
  Menu
} from 'lucide-react';

// Import mobile components
import {
  MobileHeader,
  QuickActionCard,
  WeatherCard,
  MarketPriceCard,
  CropDoctorCard,
  FarmManagementCard,
  ChatInterface,
  BottomNavigation,
  AlertCard,
  GovernmentSchemeCard
} from '@/components/mobile';

// Mock data - In production, this would come from APIs
const mockWeatherData = {
  temperature: 28,
  condition: 'sunny' as const,
  humidity: 65,
  windSpeed: 12,
  location: 'पंजाब, भारत',
  forecast: [
    { day: 'आज', temp: 28, condition: 'sunny' as const },
    { day: 'कल', temp: 30, condition: 'cloudy' as const },
    { day: 'परसों', temp: 26, condition: 'rainy' as const },
    { day: 'रविवार', temp: 29, condition: 'sunny' as const },
  ]
};

const mockMarketPrices = [
  {
    name: 'Wheat',
    hindiName: 'गेहूं',
    currentPrice: 2150,
    previousPrice: 2100,
    unit: 'क्विंटल',
    market: 'मंडी अमृतसर'
  },
  {
    name: 'Rice',
    hindiName: 'चावल',
    currentPrice: 3200,
    previousPrice: 3250,
    unit: 'क्विंटल',
    market: 'मंडी लुधियाना'
  },
  {
    name: 'Cotton',
    hindiName: 'कपास',
    currentPrice: 5800,
    previousPrice: 5750,
    unit: 'क्विंटल',
    market: 'मंडी फरीदकोट'
  }
];

const mockFarms = [
  {
    id: '1',
    name: 'मुख्य खेत',
    area: 5.5,
    crop: 'गेहूं',
    sowingDate: '15 नवं',
    expectedHarvest: '15 अप्रैल',
    irrigationStatus: 'good' as const,
    healthScore: 85
  },
  {
    id: '2',
    name: 'पूर्वी खेत',
    area: 3.2,
    crop: 'सरसों',
    sowingDate: '20 नवं',
    expectedHarvest: '25 मार्च',
    irrigationStatus: 'needs-attention' as const,
    healthScore: 72
  }
];

const mockRecentDiagnoses = [
  {
    cropName: 'गेहूं',
    disease: 'पत्ती का धब्बा',
    date: '2 दिन पहले',
    severity: 'low' as const
  },
  {
    cropName: 'सरसों',
    disease: 'तना सड़न',
    date: '5 दिन पहले',
    severity: 'medium' as const
  }
];

export default function MobileApplication() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('hi-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('hi-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const quickActions = [
    {
      icon: Camera,
      title: 'फसल स्कैन करें',
      subtitle: 'AI से तुरंत निदान',
      color: 'from-blue-500 to-blue-600',
      onClick: () => console.log('Crop scan clicked')
    },
    {
      icon: TrendingUp,
      title: 'मंडी भाव',
      subtitle: 'आज के दाम देखें',
      color: 'from-green-500 to-green-600',
      onClick: () => console.log('Market prices clicked')
    },
    {
      icon: Cloud,
      title: 'मौसम अपडेट',
      subtitle: '7 दिन का पूर्वानुमान',
      color: 'from-purple-500 to-purple-600',
      onClick: () => console.log('Weather clicked')
    },
    {
      icon: Award,
      title: 'सरकारी योजना',
      subtitle: 'नई योजनाएं देखें',
      color: 'from-orange-500 to-orange-600',
      onClick: () => console.log('Schemes clicked')
    }
  ];

  const mockSchemes = [
    {
      id: '1',
      name: 'PM Kisan Samman Nidhi',
      hindiName: 'पीएम किसान सम्मान निधि',
      description: 'प्रति वर्ष ₹6,000 की सहायता',
      benefit: '₹6,000/वर्ष',
      eligibility: 'सभी छोटे किसान',
      status: 'eligible' as const,
      deadline: '31 मार्च 2024'
    },
    {
      id: '2',
      name: 'Pradhan Mantri Fasal Bima Yojana',
      hindiName: 'प्रधानमंत्री फसल बीमा योजना',
      description: 'फसल नुकसान की भरपाई',
      benefit: '90% प्रीमियम सब्सिडी',
      eligibility: 'सभी किसान',
      status: 'applied' as const
    },
    {
      id: '3',
      name: 'Kisan Credit Card',
      hindiName: 'किसान क्रेडिट कार्ड',
      description: 'कम ब्याज दर पर लोन',
      benefit: '4% ब्याज दर',
      eligibility: 'भूमि स्वामी किसान',
      status: 'received' as const
    }
  ];

  const mockAlerts = [
    {
      id: '1',
      type: 'warning' as const,
      title: 'मौसम चेतावनी',
      message: 'अगले 2 दिन में तेज बारिश की संभावना है। फसल की सुरक्षा करें।',
      timestamp: '2 घंटे पहले',
      actionText: 'विस्तार देखें'
    },
    {
      id: '2',
      type: 'info' as const,
      title: 'नई योजना',
      message: 'सोलर पंप सब्सिडी योजना के लिए आवेदन शुरू हो गए हैं।',
      timestamp: '1 दिन पहले',
      actionText: 'आवेदन करें'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4 space-y-6">
        {/* Time and Date Display */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{formatTime(currentTime)}</div>
            <div className="text-sm text-gray-500">{formatDate(currentTime)}</div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <QuickActionCard
              key={index}
              icon={action.icon}
              title={action.title}
              subtitle={action.subtitle}
              color={action.color}
              onClick={action.onClick}
            />
          ))}
        </div>

        {/* Weather Card */}
        <WeatherCard weather={mockWeatherData} />

        {/* Farm Management */}
        <FarmManagementCard 
          farms={mockFarms}
          onFarmClick={(farm) => console.log('Farm clicked:', farm)}
        />

        {/* Crop Doctor */}
        <CropDoctorCard
          recentDiagnoses={mockRecentDiagnoses}
          onCameraClick={() => console.log('Camera clicked')}
          onUploadClick={() => console.log('Upload clicked')}
        />

        {/* Market Prices */}
        <MarketPriceCard prices={mockMarketPrices} />

        {/* Daily Tips */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <Sprout size={24} />
            </div>
            <div>
              <h3 className="font-semibold">आज की सलाह</h3>
              <p className="text-emerald-100 text-sm">विशेषज्ञों से</p>
            </div>
          </div>
          <p className="text-sm text-emerald-50 leading-relaxed">
            गेहूं की फसल में इस समय दूसरी सिंचाई का समय है। मौसम साफ होने के कारण आज सिंचाई करना उत्तम रहेगा। 
            खरपतवार नियंत्रण के लिए निराई-गुड़ाई भी करें।
          </p>
          <button className="mt-3 bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors">
            और पढ़ें
          </button>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">सफलता की कहानी</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                <User size={24} className="text-yellow-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">सुरेश कुमार, हरियाणा</h4>
                <p className="text-sm text-gray-600 mt-1">
                  "KisanAI ऐप से मेरी गेहूं की फसल में लगी बीमारी का पता चला और सही इलाज से 
                  30% ज्यादा पैदावार हुई। अब मैं हर दिन ऐप का इस्तेमाल करता हूं।"
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    ✓ सत्यापित किसान
                  </span>
                  <span className="text-xs text-gray-500">2 दिन पहले</span>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        );

      case 'crop-doctor':
        return (
          <div className="p-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">फसल डॉक्टर</h2>
            <CropDoctorCard
              recentDiagnoses={mockRecentDiagnoses}
              onCameraClick={() => console.log('Camera clicked')}
              onUploadClick={() => console.log('Upload clicked')}
            />
            <AlertCard 
              alerts={mockAlerts.filter(alert => alert.type === 'warning')}
              onAlertAction={(alert) => console.log('Alert action:', alert)}
              onAlertDismiss={(id) => console.log('Alert dismissed:', id)}
            />
          </div>
        );

      case 'market':
        return (
          <div className="p-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">मंडी भाव</h2>
            <MarketPriceCard prices={mockMarketPrices} />
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">मूल्य रुझान</h3>
              <div className="space-y-3">
                {mockMarketPrices.map((crop, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{crop.hindiName}</span>
                      <span className="text-sm text-gray-500">पिछले 7 दिन</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.random() * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'schemes':
        return (
          <div className="p-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">सरकारी योजनाएं</h2>
            <GovernmentSchemeCard 
              schemes={mockSchemes}
              onSchemeClick={(scheme) => console.log('Scheme clicked:', scheme)}
            />
            <AlertCard 
              alerts={mockAlerts.filter(alert => alert.type === 'info')}
              onAlertAction={(alert) => console.log('Alert action:', alert)}
              onAlertDismiss={(id) => console.log('Alert dismissed:', id)}
            />
          </div>
        );

      case 'chat':
        return (
          <div className="h-screen flex flex-col">
            <div className="flex-1">
              <ChatInterface
                onSendMessage={(message) => console.log('Message sent:', message)}
                onVoiceMessage={() => console.log('Voice message')}
                onImageUpload={(file) => console.log('Image uploaded:', file)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <MobileHeader
        userName="राम सिंह"
        location="पंजाब, भारत"
        notificationCount={5}
        onMenuClick={() => console.log('Menu clicked')}
        onNotificationClick={() => console.log('Notifications clicked')}
        onProfileClick={() => console.log('Profile clicked')}
      />

      {/* Main Content */}
      {renderTabContent()}

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}