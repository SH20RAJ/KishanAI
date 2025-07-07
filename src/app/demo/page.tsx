'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components';
import { TabButton } from '@/components/ui/TabButton';

// Mock data for the demo
const MOCK_CHAT_HISTORY = [
  {
    id: 1,
    type: 'user',
    message: 'My tomato plants have yellow spots on leaves. What should I do?',
    timestamp: '2025-07-07T10:30:00Z',
    language: 'en'
  },
  {
    id: 2,
    type: 'assistant',
    message: 'Based on your description, your tomato plants likely have Early Blight disease. Here\'s what you should do:\n\n🔍 **Immediate Actions:**\n• Remove affected leaves immediately\n• Improve air circulation around plants\n• Avoid overhead watering\n\n💊 **Treatment Options:**\n• Organic: Neem oil spray (10ml/liter)\n• Chemical: Mancozeb 75% WP (2g/liter)\n\n📅 **Follow-up:** Check daily for 1 week',
    timestamp: '2025-07-07T10:31:00Z',
    language: 'en',
    confidence: 92,
    category: 'Disease Management'
  },
  {
    id: 3,
    type: 'user',
    message: 'आज का मौसम कैसा है? क्या मैं आज खेत में काम कर सकता हूँ?',
    timestamp: '2025-07-07T11:15:00Z',
    language: 'hi'
  },
  {
    id: 4,
    type: 'assistant',
    message: '🌤️ **आज का मौसम (दिल्ली):**\n• तापमान: 28°C\n• आर्द्रता: 65%\n• हवा: 12 km/h\n• स्थिति: आंशिक बादल\n\n✅ **खेती सलाह:**\n• खेत का काम करने के लिए अच्छा समय है\n• सुबह 6-9 बजे या शाम 4-7 बजे काम करें\n• पानी की व्यवस्था रखें\n• कल हल्की बारिश की संभावना',
    timestamp: '2025-07-07T11:16:00Z',
    language: 'hi',
    confidence: 98,
    category: 'Weather & Farming'
  }
];

const MOCK_WEATHER_DATA = {
  location: 'Delhi, India',
  current: {
    temperature: 28,
    humidity: 65,
    condition: 'Partly Cloudy',
    windSpeed: 12,
    pressure: 1013
  },
  forecast: [
    { date: '2025-07-08', min: 22, max: 32, condition: 'Sunny', rainfall: 0, icon: '☀️' },
    { date: '2025-07-09', min: 24, max: 30, condition: 'Light Rain', rainfall: 5, icon: '🌦️' },
    { date: '2025-07-10', min: 20, max: 28, condition: 'Cloudy', rainfall: 0, icon: '☁️' },
    { date: '2025-07-11', min: 23, max: 31, condition: 'Partly Cloudy', rainfall: 0, icon: '⛅' }
  ],
  farmingAdvice: {
    irrigation: 'Good time for regular watering. Check soil moisture levels.',
    fieldWork: 'Excellent conditions for field operations. Work during cooler hours.',
    planting: 'Suitable for summer crops. Ensure adequate water supply.',
    pestControl: 'Normal pest monitoring required. Watch for increased activity.'
  }
};

const MOCK_MARKET_PRICES = [
  { crop: 'Wheat', price: 2150, unit: 'Quintal', market: 'Azadpur, Delhi', trend: 'stable', change: '+0.5%' },
  { crop: 'Rice (Basmati)', price: 4850, unit: 'Quintal', market: 'Karnal, Haryana', trend: 'up', change: '+3.2%' },
  { crop: 'Tomato', price: 1500, unit: 'Quintal', market: 'Azadpur, Delhi', trend: 'up', change: '+15.5%' },
  { crop: 'Onion', price: 1000, unit: 'Quintal', market: 'Lasalgaon, Maharashtra', trend: 'down', change: '-8.2%' },
  { crop: 'Potato', price: 750, unit: 'Quintal', market: 'Agra, UP', trend: 'stable', change: '+1.2%' },
  { crop: 'Cotton', price: 6000, unit: 'Quintal', market: 'Rajkot, Gujarat', trend: 'up', change: '+2.5%' }
];

const MOCK_SCHEMES = [
  {
    name: 'PM-KISAN',
    description: 'Income support of ₹6,000 per year to farmer families',
    eligibility: 'All landholding farmer families',
    amount: '₹6,000/year',
    status: 'Active',
    category: 'Income Support'
  },
  {
    name: 'Crop Insurance (PMFBY)',
    description: 'Comprehensive risk solution for crops',
    eligibility: 'All farmers growing notified crops',
    amount: 'Up to ₹2,00,000',
    status: 'Active',
    category: 'Insurance'
  },
  {
    name: 'Kisan Credit Card',
    description: 'Flexible and hassle-free credit to farmers',
    eligibility: 'All farmers with land records',
    amount: 'Based on land holding',
    status: 'Active',
    category: 'Credit'
  },
  {
    name: 'Soil Health Card',
    description: 'Free soil testing and nutrient recommendations',
    eligibility: 'All farmers',
    amount: 'Free',
    status: 'Active',
    category: 'Advisory'
  }
];

const MOCK_CROP_CALENDAR = [
  { crop: 'Wheat', activity: 'Sowing', period: 'Oct-Dec', status: 'upcoming' },
  { crop: 'Rice', activity: 'Transplanting', period: 'Jun-Aug', status: 'completed' },
  { crop: 'Maize', activity: 'Harvesting', period: 'Jul-Sep', status: 'current' },
  { crop: 'Cotton', activity: 'Picking', period: 'Oct-Jan', status: 'upcoming' },
  { crop: 'Sugarcane', activity: 'Planting', period: 'Feb-Apr', status: 'completed' },
  { crop: 'Soybean', activity: 'Sowing', period: 'Jun-Jul', status: 'completed' }
];

const MOCK_DISEASE_DETECTION = {
  disease: 'Early Blight (Alternaria solani)',
  crop: 'Tomato',
  confidence: 94,
  severity: 'Medium',
  symptoms: [
    'Brown/black spots with concentric rings on leaves',
    'Yellowing around spots',
    'Leaf drop starting from bottom'
  ],
  treatment: {
    immediate: [
      'Remove affected leaves and destroy them',
      'Improve air circulation between plants',
      'Avoid watering on leaves'
    ],
    organic: [
      'Neem oil spray (10ml/liter water)',
      'Copper sulfate solution',
      'Baking soda spray (5g/liter)'
    ],
    chemical: [
      'Mancozeb 75% WP (2g/liter)',
      'Copper oxychloride (3g/liter)',
      'Propiconazole (1ml/liter)'
    ]
  }
};

export default function AppDemoPage() {
  const [activeTab, setActiveTab] = useState('chat');
  const [chatMessage, setChatMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const tabs = [
    { id: 'chat', icon: '💬', label: 'AI Chat', count: 12 },
    { id: 'disease', icon: '📸', label: 'Disease Detection' },
    { id: 'weather', icon: '🌤️', label: 'Weather' },
    { id: 'prices', icon: '💰', label: 'Market Prices' },
    { id: 'schemes', icon: '🏛️', label: 'Gov Schemes', count: 4 },
    { id: 'calendar', icon: '📅', label: 'Crop Calendar' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' }
  ];

  const renderChatTab = () => (
    <div className="space-y-6">
      {/* Language Selector */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose your language / अपनी भाषा चुनें
        </label>
        <select 
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      {/* Chat History */}
      <div className="bg-white rounded-lg border border-gray-200 h-96 overflow-y-auto p-4 space-y-4">
        {MOCK_CHAT_HISTORY.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              msg.type === 'user' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="text-sm whitespace-pre-line">{msg.message}</p>
              {msg.type === 'assistant' && msg.confidence && (
                <div className="mt-2 text-xs opacity-75">
                  Confidence: {msg.confidence}% | Category: {msg.category}
                </div>
              )}
              <div className="text-xs mt-1 opacity-75">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          placeholder="Ask me anything about farming... / खेती के बारे में कुछ भी पूछें..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Send
        </button>
      </div>

      {/* Quick Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button className="p-3 text-left bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <div className="font-medium">🌱 Best crops for monsoon?</div>
          <div className="text-sm text-gray-600">मानसून के लिए सबसे अच्छी फसलें?</div>
        </button>
        <button className="p-3 text-left bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <div className="font-medium">💧 How much water for tomatoes?</div>
          <div className="text-sm text-gray-600">टमाटर के लिए कितना पानी?</div>
        </button>
        <button className="p-3 text-left bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
          <div className="font-medium">🐛 Pest control for cotton?</div>
          <div className="text-sm text-gray-600">कपास के लिए कीट नियंत्रण?</div>
        </button>
        <button className="p-3 text-left bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <div className="font-medium">🌾 Wheat market prices?</div>
          <div className="text-sm text-gray-600">गेहूं के बाजार भाव?</div>
        </button>
      </div>
    </div>
  );

  const renderDiseaseDetectionTab = () => (
    <div className="space-y-6">
      {/* Image Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
        <div className="text-4xl mb-4">📷</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Crop Image</h3>
        <p className="text-gray-600 mb-4">Take a photo of affected leaves or crops for instant disease detection</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Choose Image / तस्वीर चुनें
        </button>
      </div>

      {/* Sample Detection Result */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <h3 className="text-lg font-semibold">Detection Result</h3>
          <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
            {MOCK_DISEASE_DETECTION.confidence}% Confidence
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">🔍 Disease Identified</h4>
            <p className="text-lg text-red-600 font-semibold mb-1">{MOCK_DISEASE_DETECTION.disease}</p>
            <p className="text-gray-600">Crop: {MOCK_DISEASE_DETECTION.crop} | Severity: {MOCK_DISEASE_DETECTION.severity}</p>
            
            <h4 className="font-medium text-gray-900 mt-4 mb-2">🎯 Symptoms</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {MOCK_DISEASE_DETECTION.symptoms.map((symptom, index) => (
                <li key={index}>• {symptom}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">⚡ Immediate Actions</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {MOCK_DISEASE_DETECTION.treatment.immediate.map((action, index) => (
                <li key={index}>• {action}</li>
              ))}
            </ul>

            <h4 className="font-medium text-gray-900 mb-2">🌿 Organic Treatment</h4>
            <ul className="text-sm text-green-600 space-y-1">
              {MOCK_DISEASE_DETECTION.treatment.organic.map((treatment, index) => (
                <li key={index}>• {treatment}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Pro Tip:</strong> Monitor daily for 1 week and recheck after treatment. 
            Contact your local agricultural officer if symptoms persist.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWeatherTab = () => (
    <div className="space-y-6">
      {/* Current Weather */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">{MOCK_WEATHER_DATA.location}</h3>
            <p className="text-blue-100">Current Weather</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{MOCK_WEATHER_DATA.current.temperature}°C</div>
            <div className="text-blue-100">{MOCK_WEATHER_DATA.current.condition}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-blue-100">Humidity</div>
            <div className="font-semibold">{MOCK_WEATHER_DATA.current.humidity}%</div>
          </div>
          <div>
            <div className="text-sm text-blue-100">Wind</div>
            <div className="font-semibold">{MOCK_WEATHER_DATA.current.windSpeed} km/h</div>
          </div>
          <div>
            <div className="text-sm text-blue-100">Pressure</div>
            <div className="font-semibold">{MOCK_WEATHER_DATA.current.pressure} mb</div>
          </div>
        </div>
      </div>

      {/* 4-Day Forecast */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">4-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_WEATHER_DATA.forecast.map((day, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">{day.icon}</div>
              <div className="text-sm text-gray-600">{new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}</div>
              <div className="font-semibold">{day.max}°/{day.min}°</div>
              <div className="text-xs text-gray-500">{day.condition}</div>
              {day.rainfall > 0 && (
                <div className="text-xs text-blue-600 mt-1">💧 {day.rainfall}mm</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Farming Advice */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">🌾 Farming Advice Based on Weather</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">💧 Irrigation</h4>
              <p className="text-sm text-blue-700">{MOCK_WEATHER_DATA.farmingAdvice.irrigation}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">🚜 Field Work</h4>
              <p className="text-sm text-green-700">{MOCK_WEATHER_DATA.farmingAdvice.fieldWork}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-900">🌱 Planting</h4>
              <p className="text-sm text-yellow-700">{MOCK_WEATHER_DATA.farmingAdvice.planting}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900">🐛 Pest Control</h4>
              <p className="text-sm text-purple-700">{MOCK_WEATHER_DATA.farmingAdvice.pestControl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketPricesTab = () => (
    <div className="space-y-6">
      {/* Market Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">📈 +5.2%</div>
          <div className="text-sm text-green-700">Average Price Rise</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">6</div>
          <div className="text-sm text-blue-700">Crops Tracked</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">Live</div>
          <div className="text-sm text-orange-700">Real-time Prices</div>
        </div>
      </div>

      {/* Prices Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <h3 className="text-lg font-semibold">Today's Mandi Prices</h3>
          <p className="text-sm text-gray-600">Real-time prices from major agricultural markets</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Crop</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Market</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_MARKET_PRICES.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{item.crop}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold">₹{item.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">per {item.unit}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.market}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                      item.trend === 'up' ? 'text-green-600' : 
                      item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {item.trend === 'up' ? '↗️' : item.trend === 'down' ? '↘️' : '→'}
                      {item.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Alerts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">💡 Price Alerts & Recommendations</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="font-medium text-green-900">🔥 Best Selling Opportunity</div>
            <div className="text-sm text-green-700">Tomato prices are up 15.5% - consider selling if you have stock</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="font-medium text-blue-900">📊 Market Trend</div>
            <div className="text-sm text-blue-700">Rice (Basmati) showing strong upward trend - good time for farmers</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div className="font-medium text-yellow-900">⚠️ Price Drop Alert</div>
            <div className="text-sm text-yellow-700">Onion prices down 8.2% - consider holding if possible</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchemesTab = () => (
    <div className="space-y-6">
      {/* Schemes Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {MOCK_SCHEMES.map((scheme, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{scheme.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                scheme.category === 'Income Support' ? 'bg-green-100 text-green-800' :
                scheme.category === 'Insurance' ? 'bg-blue-100 text-blue-800' :
                scheme.category === 'Credit' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {scheme.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{scheme.description}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Amount:</span>
                <span className="text-sm font-medium text-green-600">{scheme.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Status:</span>
                <span className="text-sm font-medium text-green-600">{scheme.status}</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-700">
                <strong>Eligibility:</strong> {scheme.eligibility}
              </div>
            </div>
            
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Apply Now / अभी आवेदन करें
            </button>
          </div>
        ))}
      </div>

      {/* Application Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">📋 Your Application Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <div className="font-medium text-green-900">PM-KISAN Application</div>
              <div className="text-sm text-green-700">Applied on: June 15, 2025</div>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">✅ Approved</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <div className="font-medium text-yellow-900">Crop Insurance (PMFBY)</div>
              <div className="text-sm text-yellow-700">Applied on: July 1, 2025</div>
            </div>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">⏳ Under Review</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCalendarTab = () => (
    <div className="space-y-6">
      {/* Current Month Overview */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">July 2025 - Kharif Season</h3>
        <p className="text-green-100">Monsoon crops planting and management period</p>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-green-100">Active Tasks</div>
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-green-100">Upcoming</div>
          </div>
          <div>
            <div className="text-2xl font-bold">4</div>
            <div className="text-sm text-green-100">Completed</div>
          </div>
        </div>
      </div>

      {/* Crop Calendar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">🗓️ Crop Calendar</h3>
        <div className="space-y-4">
          {MOCK_CROP_CALENDAR.map((item, index) => (
            <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
              item.status === 'current' ? 'bg-orange-50 border-orange-500' :
              item.status === 'upcoming' ? 'bg-blue-50 border-blue-500' :
              'bg-green-50 border-green-500'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'current' ? 'bg-orange-500' :
                  item.status === 'upcoming' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}></div>
                <div>
                  <div className="font-medium text-gray-900">{item.crop} - {item.activity}</div>
                  <div className="text-sm text-gray-600">Period: {item.period}</div>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                item.status === 'current' ? 'bg-orange-100 text-orange-800' :
                item.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">📝 Today's Tasks (July 7, 2025)</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <input type="checkbox" className="rounded text-orange-600" />
            <div className="flex-1">
              <div className="font-medium text-orange-900">Monitor Maize Crop</div>
              <div className="text-sm text-orange-700">Check for pest activity and moisture levels</div>
            </div>
            <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">High Priority</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <input type="checkbox" className="rounded text-blue-600" />
            <div className="flex-1">
              <div className="font-medium text-blue-900">Apply Fertilizer to Cotton</div>
              <div className="text-sm text-blue-700">Second dose of NPK fertilizer application</div>
            </div>
            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Medium Priority</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <input type="checkbox" className="rounded text-green-600" defaultChecked />
            <div className="flex-1">
              <div className="font-medium text-green-900 line-through">Check Weather Forecast</div>
              <div className="text-sm text-green-700">Daily weather monitoring completed</div>
            </div>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat': return renderChatTab();
      case 'disease': return renderDiseaseDetectionTab();
      case 'weather': return renderWeatherTab();
      case 'prices': return renderMarketPricesTab();
      case 'schemes': return renderSchemesTab();
      case 'calendar': return renderCalendarTab();
      default: return renderChatTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">KisanAI - Interactive Demo</h1>
              <p className="text-xl text-green-100 mb-6">
                Experience all features with real-time data simulation
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live Demo Mode</span>
              </div>
            </div>
          </div>
        </section>

        {/* App Interface */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 p-2 bg-white rounded-lg shadow-sm border border-gray-200">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  icon={tab.icon}
                  label={tab.label}
                  count={tab.count}
                />
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-96">
              {renderTabContent()}
            </div>
          </div>
        </section>

        {/* Demo Info */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                🔬 Demo Information
              </h3>
              <p className="text-blue-800 mb-4">
                This is a fully interactive demo showcasing all KisanAI features with simulated data. 
                In the real application, all data is fetched live from various agricultural APIs and AI services.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">🚀 Features Demonstrated:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• AI-powered multilingual chat assistance</li>
                    <li>• Crop disease detection with treatment plans</li>
                    <li>• Real-time weather and farming advice</li>
                    <li>• Live mandi prices with trend analysis</li>
                    <li>• Government schemes and application tracking</li>
                    <li>• Personalized crop calendar management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">🔧 Technology Stack:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Next.js 15 with TypeScript</li>
                    <li>• OpenRouter API for AI chat</li>
                    <li>• Computer Vision for disease detection</li>
                    <li>• Weather APIs for forecasting</li>
                    <li>• Agmarknet API for market prices</li>
                    <li>• Government APIs for schemes data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
