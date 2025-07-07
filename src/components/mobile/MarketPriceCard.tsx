import React from 'react';
import { TrendingUp, TrendingDown, Minus, IndianRupee } from 'lucide-react';

interface CropPrice {
  name: string;
  hindiName: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  market: string;
}

interface MarketPriceCardProps {
  prices: CropPrice[];
}

export const MarketPriceCard: React.FC<MarketPriceCardProps> = ({ prices }) => {
  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp size={16} className="text-green-500" />;
    if (current < previous) return <TrendingDown size={16} className="text-red-500" />;
    return <Minus size={16} className="text-gray-500" />;
  };

  const getTrendColor = (current: number, previous: number) => {
    if (current > previous) return 'text-green-600';
    if (current < previous) return 'text-red-600';
    return 'text-gray-600';
  };

  const getPercentageChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return Math.abs(change).toFixed(1);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">मंडी भाव</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          आज अपडेट
        </span>
      </div>
      
      <div className="space-y-3">
        {prices.map((crop, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{crop.hindiName}</div>
              <div className="text-xs text-gray-500">{crop.market}</div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-1">
                <IndianRupee size={14} className="text-gray-600" />
                <span className="font-bold text-gray-800">{crop.currentPrice}</span>
                <span className="text-xs text-gray-500">/{crop.unit}</span>
              </div>
              
              <div className={`flex items-center space-x-1 text-xs ${getTrendColor(crop.currentPrice, crop.previousPrice)}`}>
                {getTrendIcon(crop.currentPrice, crop.previousPrice)}
                <span>{getPercentageChange(crop.currentPrice, crop.previousPrice)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
        सभी भाव देखें
      </button>
    </div>
  );
};