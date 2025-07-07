import React from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  humidity: number;
  windSpeed: number;
  location: string;
  forecast: Array<{
    day: string;
    temp: number;
    condition: 'sunny' | 'cloudy' | 'rainy';
  }>;
}

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun size={32} className="text-yellow-500" />;
      case 'cloudy': return <Cloud size={32} className="text-gray-500" />;
      case 'rainy': return <CloudRain size={32} className="text-blue-500" />;
      default: return <Sun size={32} className="text-yellow-500" />;
    }
  };

  const getConditionText = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'धूप';
      case 'cloudy': return 'बादल';
      case 'rainy': return 'बारिश';
      default: return 'धूप';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">आज का मौसम</h3>
          <p className="text-blue-100 text-sm">{weather.location}</p>
        </div>
        {getWeatherIcon(weather.condition)}
      </div>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-3xl font-bold">{weather.temperature}°C</div>
        <div className="text-blue-100">{getConditionText(weather.condition)}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/20 rounded-xl p-3 text-center">
          <Thermometer size={20} className="mx-auto mb-1" />
          <div className="text-xs text-blue-100">तापमान</div>
          <div className="font-semibold">{weather.temperature}°</div>
        </div>
        <div className="bg-white/20 rounded-xl p-3 text-center">
          <Droplets size={20} className="mx-auto mb-1" />
          <div className="text-xs text-blue-100">नमी</div>
          <div className="font-semibold">{weather.humidity}%</div>
        </div>
        <div className="bg-white/20 rounded-xl p-3 text-center">
          <Wind size={20} className="mx-auto mb-1" />
          <div className="text-xs text-blue-100">हवा</div>
          <div className="font-semibold">{weather.windSpeed} km/h</div>
        </div>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto">
        {weather.forecast.map((day, index) => (
          <div key={index} className="bg-white/20 rounded-xl p-3 min-w-[80px] text-center">
            <div className="text-xs text-blue-100 mb-1">{day.day}</div>
            <div className="mb-2">{getWeatherIcon(day.condition)}</div>
            <div className="text-sm font-semibold">{day.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};