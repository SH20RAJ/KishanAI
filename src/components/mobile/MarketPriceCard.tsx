import React from 'react';
import { TrendingUp, TrendingDown, Minus, IndianRupee, ArrowRight } from 'lucide-react';

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
    if (current > previous) return <TrendingUp size={14} className="text-green-600" />;
    if (current < previous) return <TrendingDown size={14} className="text-red-500" />;
    return <Minus size={14} className="text-gray-400" />;
  };

  const getTrendColor = (current: number, previous: number) => {
    if (current > previous) return 'text-green-600 bg-green-50';
    if (current < previous) return 'text-red-600 bg-red-50';
    return 'text-gray-500 bg-gray-50';
  };

  const getPercentageChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return Math.abs(change).toFixed(1);
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">मंडी भाव</h3>
          <p className="text-xs text-gray-500">आज के ताजा भाव</p>
        </div>
        <span className="text-[10px] font-medium text-[var(--primary)] bg-[var(--secondary)] px-3 py-1 rounded-full border border-green-100">
          LIVE UPDATE
        </span>
      </div>

      <div className="space-y-3">
        {prices.map((crop, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:border-green-100 hover:bg-[var(--secondary)] transition-all group">
            <div className="flex-1">
              <div className="font-bold text-gray-800 group-hover:text-[var(--primary)] transition-colors">{crop.hindiName}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                {crop.market}
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end space-x-1">
                <IndianRupee size={14} className="text-gray-400" />
                <span className="font-bold text-gray-900 text-lg">{crop.currentPrice}</span>
              </div>

              <div className={`inline-flex items-center space-x-1 text-[10px] px-1.5 py-0.5 rounded-md font-medium ${getTrendColor(crop.currentPrice, crop.previousPrice)}`}>
                {getTrendIcon(crop.currentPrice, crop.previousPrice)}
                <span>{getPercentageChange(crop.currentPrice, crop.previousPrice)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-5 py-3 bg-gray-50 text-gray-600 rounded-xl font-semibold text-sm hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center gap-2 group">
        सभी भाव देखें
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};