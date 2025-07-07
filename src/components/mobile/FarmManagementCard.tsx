import React from 'react';
import { MapPin, Calendar, Droplets, Sprout, BarChart3 } from 'lucide-react';

interface Farm {
  id: string;
  name: string;
  area: number;
  crop: string;
  sowingDate: string;
  expectedHarvest: string;
  irrigationStatus: 'good' | 'needs-attention' | 'critical';
  healthScore: number;
}

interface FarmManagementCardProps {
  farms: Farm[];
  onFarmClick?: (farm: Farm) => void;
}

export const FarmManagementCard: React.FC<FarmManagementCardProps> = ({
  farms,
  onFarmClick
}) => {
  const getIrrigationColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-attention': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIrrigationText = (status: string) => {
    switch (status) {
      case 'good': return 'अच्छी';
      case 'needs-attention': return 'ध्यान दें';
      case 'critical': return 'तुरंत सिंचाई';
      default: return 'अज्ञात';
    }
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">खेत प्रबंधन</h3>
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
          {farms.length} खेत
        </span>
      </div>
      
      <div className="space-y-3">
        {farms.slice(0, 2).map((farm, index) => (
          <button
            key={index}
            onClick={() => onFarmClick?.(farm)}
            className="w-full text-left p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:from-green-100 hover:to-emerald-100 transition-all transform hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-600" />
                <span className="font-semibold text-gray-800">{farm.name}</span>
              </div>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                {farm.area} एकड़
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center space-x-2">
                <Sprout size={14} className="text-green-600" />
                <span className="text-sm text-gray-700">{farm.crop}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-blue-600" />
                <span className="text-sm text-gray-700">{farm.sowingDate}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Droplets size={14} className="text-blue-600" />
                <span className={`text-xs px-2 py-1 rounded-full ${getIrrigationColor(farm.irrigationStatus)}`}>
                  {getIrrigationText(farm.irrigationStatus)}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 size={14} className={getHealthScoreColor(farm.healthScore)} />
                <span className={`text-sm font-semibold ${getHealthScoreColor(farm.healthScore)}`}>
                  {farm.healthScore}%
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
        सभी खेत देखें
      </button>
    </div>
  );
};