'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Camera,
  Upload,
  ArrowLeft,
  Scan,
  CheckCircle,
  AlertTriangle,
  Leaf,
  Clock,
  Target,
  Zap
} from 'lucide-react';
import { MobileHeader } from '@/components/mobile';

interface DiagnosisResult {
  disease: string;
  hindiName: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  treatment: string;
  prevention: string;
  symptoms: string[];
}

export default function CropScanPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<DiagnosisResult | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        startScanning();
      };
      reader.readAsDataURL(file);
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setScanResult(null);

    // Simulate AI processing
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        disease: 'Leaf Spot',
        hindiName: 'पत्ती का धब्बा',
        confidence: 94,
        severity: 'medium',
        treatment: 'नीम का तेल या कॉपर सल्फेट का छिड़काव करें। 15 दिन के अंतराल पर 2-3 बार दोहराएं।',
        prevention: 'खेत में जल निकासी की व्यवस्था करें। बीज बोने से पहले उपचार करें।',
        symptoms: ['पत्तियों पर भूरे धब्बे', 'धब्बों के चारों ओर पीला घेरा', 'पत्तियों का मुरझाना']
      });
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'low': return 'कम गंभीर';
      case 'medium': return 'मध्यम गंभीर';
      case 'high': return 'अत्यधिक गंभीर';
      default: return 'अज्ञात';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">फसल स्कैन करें</h1>
          <p className="text-gray-600">AI से तुरंत निदान पाएं</p>
        </div>

        {/* Scan Options */}
        {!selectedImage && !isScanning && !scanResult && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan size={40} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">फसल की फोटो लें</h3>
                <p className="text-sm text-gray-600">बीमार पत्ती या फसल की स्पष्ट तस्वीर लें</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  <Camera size={32} className="mb-2" />
                  <span className="font-semibold">कैमरा खोलें</span>
                </button>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  <Upload size={32} className="mb-2" />
                  <span className="font-semibold">गैलरी से चुनें</span>
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">बेहतर परिणाम के लिए:</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center space-x-2">
                  <Target size={16} />
                  <span>प्रभावित हिस्से पर फोकस करें</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap size={16} />
                  <span>अच्छी रोशनी में फोटो लें</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Leaf size={16} />
                  <span>पत्ती को साफ करके फोटो लें</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Selected Image */}
        {selectedImage && (
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">अपलोड की गई तस्वीर</h3>
            <Image
              src={selectedImage}
              alt="Uploaded crop"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Scanning Animation */}
        {isScanning && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Scan size={40} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI विश्लेषण चल रहा है...</h3>
              <p className="text-sm text-gray-600 mb-4">कृपया प्रतीक्षा करें</p>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} />
                  <span>छवि प्रसंस्करण...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scan Result */}
        {scanResult && (
          <div className="space-y-4">
            {/* Diagnosis Result */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle size={24} className="text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">निदान पूरा</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">{scanResult.hindiName}</h4>
                    <p className="text-sm text-gray-600">{scanResult.disease}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{scanResult.confidence}%</div>
                    <div className="text-xs text-gray-500">विश्वसनीयता</div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getSeverityColor(scanResult.severity)}`}>
                    {getSeverityText(scanResult.severity)}
                  </span>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-3">लक्षण</h4>
              <ul className="space-y-2">
                {scanResult.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
                <AlertTriangle size={20} />
                <span>उपचार</span>
              </h4>
              <p className="text-sm text-green-700 leading-relaxed">{scanResult.treatment}</p>
            </div>

            {/* Prevention */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">रोकथाम</h4>
              <p className="text-sm text-blue-700 leading-relaxed">{scanResult.prevention}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setScanResult(null);
                }}
                className="py-3 px-4 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                नई स्कैन करें
              </button>
              <button className="py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                विशेषज्ञ से बात करें
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}