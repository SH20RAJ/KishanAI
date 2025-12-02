import React from 'react';
import { Wheat, Twitter, Linkedin, Youtube, Mail, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="KisanAI Logo" className=" rounded-lg w-5 h-5 object-contain" />
              </div>
              <h4 className="text-xl font-bold">KisanAI</h4>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              AI-powered agricultural solutions for Indian farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
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
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@kisanai.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://t.me/Kishan_aibot" className="hover:text-white transition-colors">@KisanAIBot</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Made for YUKTI 2025
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 KisanAI. Built for Indian Farmers. YUKTI AICTE Hackathon 2025.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
