import React from 'react';
import { Camera, Upload, Scan, Leaf } from 'lucide-react';

interface CropDoctorCardProps {
  onCameraClick?: () => void;
  onUploadClick?: () => void;
  recentDiagnoses?: Array<{
    cropName: string;
    disease: string;
    date: string;
    severity: 'low' | 'medium' | 'high';
  }>;
}

export const CropDoctorCard: React.FC<CropDoctorCardProps> = ({
  onCameraClick,
  onUploadClick,
  recentDiagnoses = []
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'low': return 'कम';
      case 'medium': return 'मध्यम';
      case 'high': return 'गंभीर';
      default: return 'अज्ञात';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-green-100 rounded-xl">
          <Leaf size={24} className="text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">फसल डॉक्टर</h3>
          <p className="text-sm text-gray-500">AI से तुरंत निदान</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={onCameraClick}
          className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95"
        >
          <Camera size={24} className="mb-2" />
          <span className="text-sm font-semibold">फोटो लें</span>
        </button>
        
        <button
          onClick={onUploadClick}
          className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
        >
          <Upload size={24} className="mb-2" />
          <span className="text-sm font-semibold">अपलोड करें</span>
        </button>
      </div>
      
      {recentDiagnoses.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">हाल के निदान</h4>
          <div className="space-y-2">
            {recentDiagnoses.slice(0, 3).map((diagnosis, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{diagnosis.cropName}</div>
                  <div className="text-xs text-gray-500">{diagnosis.disease}</div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(diagnosis.severity)}`}>
                    {getSeverityText(diagnosis.severity)}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{diagnosis.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
        <div className="flex items-center space-x-2">
          <Scan size={16} className="text-green-600" />
          <span className="text-sm text-green-800 font-medium">
            99% सटीकता के साथ AI निदान
          </span>
        </div>
      </div>
    </div>
  );
};