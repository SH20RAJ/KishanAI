'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Eye,
  Compass,
  AlertTriangle,
  MapPin,
  Calendar,
  Clock
} from 'lucide-react';
import { MobileHeader } from '@/components/mobile';

interface WeatherData {
  day: string;
  date: string;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy';
  temperature: {
    max: number;
    min: number;
    current?: number;
  };
  humidity: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
  uvIndex: number;
  precipitation: number;
  pressure: number;
  description: string;
  hindiDescription: string;
  alerts?: string[];
}

export default function WeatherForecastPage() {
  const [selectedDay, setSelectedDay] = useState(0);

  const weatherData: WeatherData[] = [
    {
      day: 'आज',
      date: '15 जनवरी',
      condition: 'sunny',
      temperature: { max: 22, min: 8, current: 18 },
      humidity: 65,
      windSpeed: 12,
      windDirection: 'उत्तर-पश्चिम',
      visibility: 10,
      uvIndex: 6,
      precipitation: 0,
      pressure: 1013,
      description: 'Clear sky with bright sunshine',
      hindiDescription: 'साफ आसमान और तेज धूप',
      alerts: []
    },
    {
      day: 'कल',
      date: '16 जनवरी',
      condition: 'cloudy',
      temperature: { max: 20, min: 10 },
      humidity: 70,
      windSpeed: 15,
      windDirection: 'पश्चिम',
      visibility: 8,
      uvIndex: 4,
      precipitation: 10,
      pressure: 1010,
      description: 'Partly cloudy with possible light rain',
      hindiDescription: 'आंशिक बादल और हल्की बारिश की संभावना'
    },
    {
      day: 'परसों',
      date: '17 जनवरी',
      condition: 'rainy',
      temperature: { max: 18, min: 12 },
      humidity: 85,
      windSpeed: 20,
      windDirection: 'दक्षिण-पश्चिम',
      visibility: 5,
      uvIndex: 2,
      precipitation: 80,
      pressure: 1005,
      description: 'Heavy rain expected',
      hindiDescription: 'तेज बारिश की संभावना',
      alerts: ['तेज बारिश की चेतावनी', 'खेत में जल निकासी की व्यवस्था करें']
    },
    {
      day: 'गुरुवार',
      date: '18 जनवरी',
      condition: 'cloudy',
      temperature: { max: 19, min: 11 },
      humidity: 75,
      windSpeed: 18,
      windDirection: 'उत्तर',
      visibility: 7,
      uvIndex: 3,
      precipitation: 30,
      pressure: 1008,
      description: 'Overcast with light showers',
      hindiDescription: 'बादल छाए रहेंगे और हल्की बौछारें'
    },
    {
      day: 'शुक्रवार',
      date: '19 जनवरी',
      condition: 'sunny',
      temperature: { max: 23, min: 9 },
      humidity: 60,
      windSpeed: 10,
      windDirection: 'पूर्व',
      visibility: 12,
      uvIndex: 7,
      precipitation: 0,
      pressure: 1015,
      description: 'Clear and sunny',
      hindiDescription: 'साफ और धूप वाला दिन'
    },
    {
      day: 'शनिवार',
      date: '20 जनवरी',
      condition: 'sunny',
      temperature: { max: 25, min: 10 },
      humidity: 55,
      windSpeed: 8,
      windDirection: 'दक्षिण-पूर्व',
      visibility: 15,
      uvIndex: 8,
      precipitation: 0,
      pressure: 1018,
      description: 'Bright and clear',
      hindiDescription: 'उज्ज्वल और साफ मौसम'
    },
    {
      day: 'रविवार',
      date: '21 जनवरी',
      condition: 'cloudy',
      temperature: { max: 21, min: 12 },
      humidity: 68,
      windSpeed: 14,
      windDirection: 'पश्चिम',
      visibility: 9,
      uvIndex: 5,
      precipitation: 20,
      pressure: 1012,
      description: 'Partly cloudy',
      hindiDescription: 'आंशिक बादल'
    }
  ];

  const getWeatherIcon = (condition: string, size: number = 32) => {
    const iconProps = { size, className: getWeatherIconColor(condition) };
    switch (condition) {
      case 'sunny': return <Sun {...iconProps} />;
      case 'cloudy': return <Cloud {...iconProps} />;
      case 'rainy': return <CloudRain {...iconProps} />;
      case 'stormy': return <CloudRain {...iconProps} />;
      case 'snowy': return <CloudSnow {...iconProps} />;
      default: return <Sun {...iconProps} />;
    }
  };

  const getWeatherIconColor = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'text-yellow-500';
      case 'cloudy': return 'text-gray-500';
      case 'rainy': return 'text-blue-500';
      case 'stormy': return 'text-purple-500';
      case 'snowy': return 'text-blue-300';
      default: return 'text-yellow-500';
    }
  };

  const getConditionBg = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'from-yellow-400 to-orange-500';
      case 'cloudy': return 'from-gray-400 to-gray-600';
      case 'rainy': return 'from-blue-500 to-blue-700';
      case 'stormy': return 'from-purple-500 to-purple-700';
      case 'snowy': return 'from-blue-300 to-blue-500';
      default: return 'from-blue-400 to-blue-600';
    }
  };

  const currentWeather = weatherData[selectedDay];

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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">मौसम पूर्वानुमान</h1>
          <div className="flex items-center justify-center space-x-1 text-gray-600">
            <MapPin size={16} />
            <span>पंजाब, भारत</span>
          </div>
        </div>

        {/* Current Weather */}
        <div className={`bg-gradient-to-br ${getConditionBg(currentWeather.condition)} rounded-2xl p-6 text-white shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">{currentWeather.day}</h3>
              <p className="text-white/80">{currentWeather.date}</p>
            </div>
            {getWeatherIcon(currentWeather.condition, 48)}
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl font-bold">
              {currentWeather.temperature.current || currentWeather.temperature.max}°C
            </div>
            <div className="text-white/80">
              <div className="text-sm">अधिकतम: {currentWeather.temperature.max}°C</div>
              <div className="text-sm">न्यूनतम: {currentWeather.temperature.min}°C</div>
            </div>
          </div>
          
          <p className="text-white/90 mb-4">{currentWeather.hindiDescription}</p>
          
          {currentWeather.alerts && currentWeather.alerts.length > 0 && (
            <div className="bg-white/20 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle size={16} />
                <span className="font-semibold text-sm">चेतावनी</span>
              </div>
              {currentWeather.alerts.map((alert, index) => (
                <p key={index} className="text-sm text-white/90">• {alert}</p>
              ))}
            </div>
          )}
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">7 दिन का पूर्वानुमान</h3>
          <div className="space-y-2">
            {weatherData.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                  selectedDay === index 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {getWeatherIcon(day.condition, 24)}
                  <div className="text-left">
                    <div className="font-medium text-gray-800">{day.day}</div>
                    <div className="text-sm text-gray-500">{day.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">{day.temperature.max}°/{day.temperature.min}°</div>
                  <div className="text-sm text-gray-500">{day.precipitation}% बारिश</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Weather Info */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">विस्तृत जानकारी</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Droplets size={20} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-800">नमी</span>
              </div>
              <div className="text-xl font-bold text-blue-800">{currentWeather.humidity}%</div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Wind size={20} className="text-green-600" />
                <span className="text-sm font-medium text-green-800">हवा</span>
              </div>
              <div className="text-xl font-bold text-green-800">{currentWeather.windSpeed} km/h</div>
              <div className="text-xs text-green-600">{currentWeather.windDirection}</div>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Eye size={20} className="text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">दृश्यता</span>
              </div>
              <div className="text-xl font-bold text-yellow-800">{currentWeather.visibility} km</div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Thermometer size={20} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-800">UV इंडेक्स</span>
              </div>
              <div className="text-xl font-bold text-purple-800">{currentWeather.uvIndex}</div>
            </div>
          </div>
        </div>

        {/* Farming Advice */}
        <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
          <h4 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
            <Calendar size={20} />
            <span>कृषि सलाह</span>
          </h4>
          <div className="space-y-2 text-sm text-green-700">
            {currentWeather.condition === 'rainy' && (
              <>
                <p>• खेत में जल निकासी की व्यवस्था करें</p>
                <p>• छिड़काव का काम स्थगित करें</p>
                <p>• फसल को नुकसान से बचाने के लिए तैयारी करें</p>
              </>
            )}
            {currentWeather.condition === 'sunny' && (
              <>
                <p>• सिंचाई का उपयुक्त समय है</p>
                <p>• छिड़काव और निराई-गुड़ाई का काम करें</p>
                <p>• फसल की कटाई के लिए अच्छा मौसम है</p>
              </>
            )}
            {currentWeather.condition === 'cloudy' && (
              <>
                <p>• मध्यम सिंचाई करें</p>
                <p>• बीज बुआई के लिए उपयुक्त समय</p>
                <p>• खरपतवार नियंत्रण का काम करें</p>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            मौसम अलर्ट सेट करें
          </button>
          <button className="py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
            कृषि कैलेंडर देखें
          </button>
        </div>
      </div>
    </div>
  );
}