import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌾</span>
              </div>
              <h4 className="text-xl font-bold">KisanAI</h4>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering Indian farmers with AI-powered agricultural solutions for better harvests and smarter farming.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Features</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Disease Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Chatbot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weather Forecast</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mandi Prices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crop Calendar</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">15+ Languages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24/7 AI Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contact@kisanai.in</li>
              <li>📱 <a href="https://t.me/KisanAIBot" className="hover:text-white transition-colors">Telegram: @KisanAIBot</a></li>
              <li>🌐 Made for YUKTI 2025</li>
              <li>🇮🇳 Proud Indian Startup</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 KisanAI. Built with ❤️ for Indian Farmers. YUKTI AICTE Hackathon 2025.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
