'use client';

import React, { useState } from 'react';
import { 
  Camera, 
  Upload, 
  Scan, 
  CheckCircle, 
  AlertTriangle,
  Leaf,
  Clock,
  Target,
  Zap,
  ArrowRight,
  BookOpen,
  Video,
  MessageSquare,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import { MobileHeader, BottomNavigation, CropDoctorCard } from '@/components/mobile';

const recentDiagnoses = [
  {
    id: '1',
    crop: 'टमाटर',
    disease: 'पत्ती का झुलसा रोग',
    date: '2 दिन पहले',
    severity: 'medium' as const,
    image: '/api/placeholder/80/80'
  },
  {
    id: '2',
    crop: 'गेहूं',
    disease: 'पीला रतुआ',
    date: '1 सप्ताह पहले',
    severity: 'high' as const,
    image: '/api/placeholder/80/80'
  }
];

const expertServices = [
  {
    id: '1',
    name: 'डॉ. राजेश शर्मा',
    specialization: 'फसल रोग विशेषज्ञ',
    experience: '15+ वर्ष',
    rating: 4.8,
    available: true,
    consultationFee: 200
  },
  {
    id: '2',
    name: 'डॉ. प्रिया पटेल',
    specialization: 'कीट नियंत्रण विशेषज्ञ',
    experience: '12+ वर्ष',
    rating: 4.9,
    available: false,
    consultationFee: 250
  }
];

export default function DoctorPage() {
  const [activeTab, setActiveTab] = useState('doctor');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <MobileHeader 
        title="फसल डॉक्टर"
        showBack={false}
      />

      {/* Content */}
      <div className="px-4 pt-6 pb-24 space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">AI फसल डॉक्टर 🔬</h2>
              <p className="text-green-100 text-sm mb-4">
                अपनी फसल की तस्वीर लें और तुरंत रोग की पहचान करें
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Zap size={16} />
                  <span>तुरंत परिणाम</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target size={16} />
                  <span>95% सटीकता</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <Scan size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/application/crop-scan">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Camera size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">फोटो लें</h3>
                  <p className="text-xs text-gray-500">कैमरा से तस्वीर लें</p>
                </div>
              </div>
            </div>
          </Link>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Upload size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">अपलोड करें</h3>
                <p className="text-xs text-gray-500">गैलरी से चुनें</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Diagnoses */}
        {recentDiagnoses.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">हाल की जांच</h3>
              <button className="text-green-600 text-sm font-medium flex items-center gap-1">
                सभी देखें <ArrowRight size={16} />
              </button>
            </div>
            <div className="space-y-3">
              {recentDiagnoses.map((diagnosis) => (
                <div key={diagnosis.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Leaf size={24} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{diagnosis.crop}</h4>
                      <p className="text-sm text-gray-600">{diagnosis.disease}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{diagnosis.date}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          diagnosis.severity === 'high' ? 'bg-red-500' :
                          diagnosis.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expert Consultation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">विशेषज्ञ सलाह</h3>
          <div className="space-y-3">
            {expertServices.map((expert) => (
              <div key={expert.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {expert.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{expert.name}</h4>
                      <p className="text-sm text-gray-600">{expert.specialization}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{expert.experience}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-xs text-gray-600">{expert.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`w-3 h-3 rounded-full mb-2 ${
                      expert.available ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <p className="text-sm font-medium text-gray-800">₹{expert.consultationFee}</p>
                    <p className="text-xs text-gray-500">प्रति सलाह</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                    expert.available 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}>
                    <Video size={16} className="inline mr-1" />
                    वीडियो कॉल
                  </button>
                  <button className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                    expert.available 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}>
                    <MessageSquare size={16} className="inline mr-1" />
                    चैट
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">ज्ञान भंडार</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2">
                <BookOpen size={24} className="text-purple-600" />
                <h4 className="font-medium text-gray-800">रोग गाइड</h4>
                <p className="text-xs text-gray-500">सामान्य रोगों की जानकारी</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2">
                <Video size={24} className="text-red-600" />
                <h4 className="font-medium text-gray-800">वीडियो ट्यूटोरियल</h4>
                <p className="text-xs text-gray-500">उपचार के तरीके</p>
              </div>
            </div>
          </div>
        </div>

        {/* CropDoctorCard for additional features */}
        <CropDoctorCard />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}