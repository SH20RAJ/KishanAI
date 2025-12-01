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
  const getWeatherIcon = (condition: string, size = 32, className = "") => {
    switch (condition) {
      case 'sunny': return <Sun size={size} className={`text-yellow-400 ${className}`} />;
      case 'cloudy': return <Cloud size={size} className={`text-gray-200 ${className}`} />;
      case 'rainy': return <CloudRain size={size} className={`text-blue-300 ${className}`} />;
      default: return <Sun size={size} className={`text-yellow-400 ${className}`} />;
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
    <div className="bg-gradient-to-br from-[#2E8B57] to-[#3CB371] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold font-manrope">आज का मौसम</h3>
            <p className="text-green-50 text-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              {weather.location}
            </p>
          </div>
          {getWeatherIcon(weather.condition, 40)}
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="text-5xl font-bold tracking-tighter">{weather.temperature}°</div>
          <div className="text-xl font-medium text-green-50">{getConditionText(weather.condition)}</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
            <Thermometer size={18} className="mx-auto mb-1 text-yellow-300" />
            <div className="text-[10px] text-green-100 uppercase tracking-wider">तापमान</div>
            <div className="font-bold text-sm">{weather.temperature}°</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
            <Droplets size={18} className="mx-auto mb-1 text-blue-300" />
            <div className="text-[10px] text-green-100 uppercase tracking-wider">नमी</div>
            <div className="font-bold text-sm">{weather.humidity}%</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
            <Wind size={18} className="mx-auto mb-1 text-gray-300" />
            <div className="text-[10px] text-green-100 uppercase tracking-wider">हवा</div>
            <div className="font-bold text-sm">{weather.windSpeed} km/h</div>
          </div>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-1 scrollbar-hide">
          {weather.forecast.map((day, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 min-w-[70px] text-center border border-white/5">
              <div className="text-xs text-green-100 mb-2">{day.day}</div>
              <div className="mb-2 flex justify-center">{getWeatherIcon(day.condition, 20)}</div>
              <div className="text-sm font-bold">{day.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};