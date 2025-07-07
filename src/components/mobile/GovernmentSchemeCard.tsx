import React from 'react';
import { Award, ExternalLink, Clock, CheckCircle } from 'lucide-react';

interface Scheme {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  benefit: string;
  eligibility: string;
  status: 'eligible' | 'applied' | 'received' | 'not-eligible';
  deadline?: string;
}

interface GovernmentSchemeCardProps {
  schemes: Scheme[];
  onSchemeClick?: (scheme: Scheme) => void;
}

export const GovernmentSchemeCard: React.FC<GovernmentSchemeCardProps> = ({
  schemes,
  onSchemeClick
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'eligible': return 'bg-blue-100 text-blue-800';
      case 'applied': return 'bg-yellow-100 text-yellow-800';
      case 'received': return 'bg-green-100 text-green-800';
      case 'not-eligible': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'eligible': return 'योग्य';
      case 'applied': return 'आवेदित';
      case 'received': return 'प्राप्त';
      case 'not-eligible': return 'अयोग्य';
      default: return 'अज्ञात';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'eligible': return <ExternalLink size={14} className="text-blue-600" />;
      case 'applied': return <Clock size={14} className="text-yellow-600" />;
      case 'received': return <CheckCircle size={14} className="text-green-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-orange-100 rounded-xl">
          <Award size={24} className="text-orange-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">सरकारी योजनाएं</h3>
          <p className="text-sm text-gray-500">आपके लिए उपलब्ध लाभ</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {schemes.slice(0, 4).map((scheme) => (
          <button
            key={scheme.id}
            onClick={() => onSchemeClick?.(scheme)}
            className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-sm">{scheme.hindiName}</h4>
                <p className="text-xs text-gray-600 mt-1">{scheme.description}</p>
              </div>
              <div className="flex items-center space-x-1">
                {getStatusIcon(scheme.status)}
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(scheme.status)}`}>
                  {getStatusText(scheme.status)}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-green-600 font-medium">
                लाभ: {scheme.benefit}
              </div>
              {scheme.deadline && (
                <div className="text-xs text-red-500">
                  अंतिम तिथि: {scheme.deadline}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors">
        सभी योजनाएं देखें
      </button>
    </div>
  );
};