'use client';

import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  IndianRupee,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';
import { MobileHeader, BottomNavigation } from '@/components/mobile';

const governmentSchemes = [
  {
    id: '1',
    name: 'प्रधानमंत्री किसान सम्मान निधि',
    description: 'छोटे और सीमांत किसानों को आर्थिक सहायता',
    amount: '₹6,000 प्रति वर्ष',
    deadline: '31 मार्च 2024',
    eligibility: '2 हेक्टेयर तक भूमि वाले किसान',
    status: 'active',
    category: 'subsidy',
    beneficiaries: '12 करोड़+'
  },
  {
    id: '2',
    name: 'फसल बीमा योजना',
    description: 'प्राकृतिक आपदाओं से फसल सुरक्षा',
    amount: 'प्रीमियम सब्सिडी',
    deadline: '31 दिसंबर 2024',
    eligibility: 'सभी किसान',
    status: 'active',
    category: 'insurance',
    beneficiaries: '5.5 करोड़+'
  },
  {
    id: '3',
    name: 'किसान क्रेडिट कार्ड',
    description: 'कृषि के लिए आसान लोन',
    amount: 'फसल के आधार पर',
    deadline: 'साल भर',
    eligibility: 'भूमि धारक किसान',
    status: 'active',
    category: 'credit',
    beneficiaries: '7 करोड़+'
  },
  {
    id: '4',
    name: 'प्रधानमंत्री सूक्ष्म सिंचाई योजना',
    description: 'ड्रिप और स्प्रिंकलर सिंचाई सब्सिडी',
    amount: '80% तक सब्सिडी',
    deadline: '15 अप्रैल 2024',
    eligibility: 'सभी वर्गों के किसान',
    status: 'active',
    category: 'infrastructure',
    beneficiaries: '65 लाख+'
  },
  {
    id: '5',
    name: 'मृदा स्वास्थ्य कार्ड योजना',
    description: 'मुफ्त मिट्टी जांच और सलाह',
    amount: 'निःशुल्क',
    deadline: 'निरंतर',
    eligibility: 'सभी किसान',
    status: 'active',
    category: 'testing',
    beneficiaries: '22 करोड़+'
  }
];

const applicationStatus = [
  {
    id: '1',
    schemeName: 'प्रधानमंत्री किसान सम्मान निधि',
    applicationId: 'PM-KSN-2024-001',
    status: 'approved',
    amount: '₹2,000',
    date: '15 मार्च 2024'
  },
  {
    id: '2',
    schemeName: 'फसल बीमा योजना',
    applicationId: 'CIS-2024-002',
    status: 'pending',
    amount: 'प्रीमियम सब्सिडी',
    date: '10 मार्च 2024'
  }
];

const categories = [
  { id: 'all', name: 'सभी योजनाएं', count: 25 },
  { id: 'subsidy', name: 'सब्सिडी', count: 8 },
  { id: 'insurance', name: 'बीमा', count: 4 },
  { id: 'credit', name: 'लोन', count: 6 },
  { id: 'infrastructure', name: 'इंफ्रास्ट्रक्चर', count: 5 },
  { id: 'testing', name: 'परीक्षण', count: 2 }
];

const SchemesPage = () => {
  const [activeTab, setActiveTab] = useState('schemes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSchemes = governmentSchemes.filter(scheme => 
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || scheme.category === selectedCategory)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'rejected': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader 
        title="सरकारी योजनाएं" 
      />
      
      <div className="px-4 py-4 pb-20">
        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-4 shadow-sm">
          <button
            onClick={() => setActiveTab('schemes')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'schemes' 
                ? 'bg-green-500 text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            योजनाएं
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'applications' 
                ? 'bg-green-500 text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            आवेदन स्थिति
          </button>
        </div>

        {activeTab === 'schemes' ? (
          <>
            {/* Search and Filter */}
            <div className="mb-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="योजना खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Schemes List */}
            <div className="space-y-4">
              {filteredSchemes.map((scheme) => (
                <div key={scheme.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{scheme.name}</h3>
                        <p className="text-sm text-gray-600">{scheme.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          scheme.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {scheme.status === 'active' ? 'सक्रिय' : 'बंद'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">राशि: {scheme.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">अंतिम तिथि: {scheme.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-gray-600">लाभार्थी: {scheme.beneficiaries}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-orange-600" />
                        <span className="text-sm text-gray-600">पात्रता देखें</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">पात्रता:</span> {scheme.eligibility}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                        आवेदन करें
                      </button>
                      <button className="flex items-center justify-center gap-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        विवरण <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Applications Status */}
            <div className="space-y-4">
              {applicationStatus.map((application) => {
                const StatusIcon = getStatusIcon(application.status);
                return (
                  <div key={application.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{application.schemeName}</h3>
                        <p className="text-sm text-gray-600">आवेदन ID: {application.applicationId}</p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                        <StatusIcon className="h-4 w-4" />
                        {application.status === 'approved' ? 'स्वीकृत' : 
                         application.status === 'pending' ? 'लंबित' : 'अस्वीकृत'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">राशि: {application.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">आवेदन: {application.date}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      विवरण देखें
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default SchemesPage;
