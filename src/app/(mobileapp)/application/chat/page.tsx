'use client';

import React, { useState } from 'react';
import { 
  MessageCircle, 
  Bot, 
  ExternalLink, 
  Zap, 
  Globe, 
  Users, 
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Send,
  Mic,
  Image,
  Phone,
  Video
} from 'lucide-react';
import { MobileHeader, BottomNavigation } from '@/components/mobile';

const chatFeatures = [
  {
    icon: Bot,
    title: 'AI किसान सहायक',
    description: 'DeepSeek AI से संचालित - कोई भी खेती का सवाल पूछें!',
    color: 'bg-blue-500'
  },
  {
    icon: Globe,
    title: 'बहुभाषी AI समर्थन',
    description: '11 भारतीय भाषाओं में स्मार्ट जवाब',
    color: 'bg-green-500'
  },
  {
    icon: Zap,
    title: 'तुरंत AI जवाब',
    description: '24/7 उपलब्ध AI एक्सपर्ट सहायता',
    color: 'bg-yellow-500'
  },
  {
    icon: Users,
    title: 'व्यक्तिगत सलाह',
    description: 'AI आपकी फसल के लिए विशिष्ट सुझाव देता है',
    color: 'bg-purple-500'
  }
];

const recentChats = [
  {
    id: '1',
    title: 'गेहूं की फसल में पीला रतुआ',
    lastMessage: 'धन्यवाद! आपकी सलाह बहुत उपयोगी थी।',
    time: '2 मिनट पहले',
    unread: 0,
    type: 'ai'
  },
  {
    id: '2',
    title: 'डॉ. राजेश शर्मा',
    lastMessage: 'मिट्टी की जांच रिपोर्ट भेजी गई है',
    time: '1 घंटे पहले',
    unread: 1,
    type: 'expert'
  },
  {
    id: '3',
    title: 'बाजार मूल्य अपडेट',
    lastMessage: 'टमाटर की कीमत में 15% की वृद्धि',
    time: '3 घंटे पहले',
    unread: 0,
    type: 'notification'
  }
];

const quickActions = [
  {
    icon: MessageCircle,
    title: 'AI से फसल की समस्या पूछें',
    description: 'रोग, कीट और मौसम संबंधी AI सलाह'
  },
  {
    icon: Image,
    title: 'फोटो भेजकर AI निदान',
    description: 'पौधे की तस्वीर से तुरंत AI विश्लेषण'
  },
  {
    icon: Phone,
    title: 'AI चैट सहायता',
    description: 'DeepSeek AI से तुरंत बातचीत करें'
  },
  {
    icon: Video,
    title: 'स्मार्ट AI सुझाव',
    description: 'व्यक्तिगत खेती की AI रणनीति'
  }
];

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');

  // Replace with your actual Telegram bot username
  const TELEGRAM_BOT_USERNAME = 'KisanAIBot'; // TODO: Update this with your actual bot username
  const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader 
        title="चैट सहायता" 
      />
      
      <div className="px-4 py-4 pb-20">
        {/* Telegram Bot CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">KisanAI Telegram Bot</h2>
              <p className="text-blue-100 text-sm">
                DeepSeek AI से संचालित - कोई भी खेती का सवाल पूछें!
              </p>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>AI तुरंत जवाब</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>11 भाषाओं में</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>DeepSeek AI पावर्ड</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>फ्री सेवा</span>
            </div>
          </div>
          
          <div className="mt-4 bg-white/10 rounded-lg p-3 mb-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4" />
              AI से पूछें:
            </h3>
            <div className="text-sm text-blue-100 space-y-1">
              <p>• "मेरी गेहूं की फसल में पीले धब्बे हैं"</p>
              <p>• "टमाटर के लिए सबसे अच्छा उर्वरक"</p>
              <p>• "बारिश से पहले क्या करना चाहिए"</p>
            </div>
          </div>
          
          <div className="mt-4 flex gap-3">
            <a 
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Telegram पर चैट करें
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Chat Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">चैट सुविधाएं</h3>
          <div className="grid grid-cols-2 gap-3">
            {chatFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className={`${feature.color} p-2 rounded-lg w-fit mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">त्वरित सहायता</h3>
          <div className="grid grid-cols-1 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{action.title}</h4>
                      <p className="text-xs text-gray-600">{action.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Chats */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">हाल की बातचीत</h3>
          <div className="space-y-3">
            {recentChats.map((chat) => (
              <div key={chat.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    chat.type === 'ai' ? 'bg-blue-100' : 
                    chat.type === 'expert' ? 'bg-green-100' : 
                    'bg-yellow-100'
                  }`}>
                    {chat.type === 'ai' ? (
                      <Bot className={`h-5 w-5 ${
                        chat.type === 'ai' ? 'text-blue-600' : 
                        chat.type === 'expert' ? 'text-green-600' : 
                        'text-yellow-600'
                      }`} />
                    ) : chat.type === 'expert' ? (
                      <Users className="h-5 w-5 text-green-600" />
                    ) : (
                      <MessageCircle className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{chat.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">{chat.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-App Chat Input */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">यहाँ भी चैट करें</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="अपना सवाल यहाँ लिखें..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            बेहतर अनुभव के लिए <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Telegram Bot</a> का उपयोग करें
          </p>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ChatPage;
