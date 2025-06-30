
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">🌾</span>
          </div>
          <h1 className="text-2xl font-bold text-green-800">KisanAI</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          <div id="google_translate_element" className="scale-75 origin-right"></div>
        </nav>
        <div className="flex items-center gap-4">
          <div id="google_translate_element_mobile" className="md:hidden scale-75"></div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            भारत का पहला <span className="text-green-600">AI-Powered</span> कृषि सहायक
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering 100+ million Indian farmers with instant crop disease detection, 
            multilingual chatbot assistance, and real-time agricultural insights - all through Telegram!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://t.me/KisanAIBot" 
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg"
            >
              📱 Try Telegram Bot
            </a>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
              � WhatsApp Bot (Coming Soon)
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
              📱 KisanAI App (Q4 2025)
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-4">
            <span className="text-sm text-gray-500">Also available on:</span>
            <div className="flex gap-2">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">🏪 Google Play Store (Coming)</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">🍎 App Store (Coming)</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            🏆 Built for YUKTI AICTE Hackathon 2025 | Made in India 🇮🇳
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">100M+</div>
              <div className="text-green-100">Farmers to Impact</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-green-100">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-green-100">Crop Disease Images</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-green-100">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete Farming Solution</h3>
          <p className="text-xl text-gray-600">Everything a farmer needs, right in their pocket</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">📸</div>
            <h4 className="text-xl font-semibold mb-3">Instant Disease Detection</h4>
            <p className="text-gray-600">Upload a photo of your crop and get instant disease diagnosis with remedies in your language</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="text-xl font-semibold mb-3">AI Chatbot Assistant</h4>
            <p className="text-gray-600">Ask questions about fertilizers, weather, mandi prices in Hindi, English, or your local language</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">🌦️</div>
            <h4 className="text-xl font-semibold mb-3">Weather Forecasting</h4>
            <p className="text-gray-600">Get accurate weather predictions and rainfall alerts for better crop planning</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-semibold mb-3">Live Mandi Prices</h4>
            <p className="text-gray-600">Real-time market prices from Agmarknet API to help you get the best rates</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">📅</div>
            <h4 className="text-xl font-semibold mb-3">Crop Calendar</h4>
            <p className="text-gray-600">Personalized farming calendar with sowing, irrigation, and harvest reminders</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">🏛️</div>
            <h4 className="text-xl font-semibold mb-3">Government Schemes</h4>
            <p className="text-gray-600">Stay updated on PM-KISAN, KCC, and other agricultural schemes with eligibility checker</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How KisanAI Works</h3>
            <p className="text-xl text-gray-600">Simple 3-step process to get expert farming advice</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Open Telegram</h4>
              <p className="text-gray-600">Search for @KisanAIBot or click our link to start chatting</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Send Photo or Ask Question</h4>
              <p className="text-gray-600">Upload crop images or type your farming questions in any language</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Get Expert Advice</h4>
              <p className="text-gray-600">Receive instant AI-powered solutions and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* KisanAI Mobile App Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  📱 Coming Q4 2025
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  KisanAI Mobile App
                  <span className="block text-2xl font-normal text-gray-600 mt-2">
                    Complete Farming Companion
                  </span>
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  While our Telegram bot serves millions of farmers today, we're building a comprehensive 
                  mobile app with advanced features for the modern Indian farmer.
                </p>
                
                {/* App Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">📴</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Offline Functionality</h4>
                      <p className="text-gray-600">Core features work without internet connectivity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">🏡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Farm Management</h4>
                      <p className="text-gray-600">Track multiple fields, crops, and farming activities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">🔗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">IoT Integration</h4>
                      <p className="text-gray-600">Connect soil sensors and weather stations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">🏪</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketplace Access</h4>
                      <p className="text-gray-600">Direct farmer-to-consumer sales platform</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
                    📧 Join Waitlist
                  </button>
                  <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                    📖 Learn More
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <span className="text-sm text-gray-600">Will be available on:</span>
                  <div className="flex gap-2">
                    <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      🏪 Google Play Store
                    </div>
                    <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      🍎 Apple App Store
                    </div>
                  </div>
                </div>
              </div>
              
              {/* App Mockup/Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-inner">
                    <div className="space-y-4">
                      {/* Mock app interface */}
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg text-gray-900">🌾 KisanAI</h4>
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                          <div>
                            <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-16"></div>
                          </div>
                        </div>
                        <div className="h-20 bg-green-100 rounded border-2 border-dashed border-green-300 flex items-center justify-center">
                          <span className="text-green-600 text-sm">📸 Upload Crop Image</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-xl mb-1">🌤️</div>
                          <div className="text-xs text-gray-600">Weather</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-xl mb-1">💰</div>
                          <div className="text-xs text-gray-600">Prices</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                          Get AI Advice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                  Coming Soon!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Made in India 🇮🇳
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h3>
          <p className="text-xl text-gray-600">Built with cutting-edge technology for reliable farming insights</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-semibold">TensorFlow Lite</h4>
            <p className="text-sm text-gray-600">Disease Detection Model</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="font-semibold">GPT-4 + LangChain</h4>
            <p className="text-sm text-gray-600">Multilingual Chat Assistant</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="font-semibold">Bhashini API</h4>
            <p className="text-sm text-gray-600">Indian Language Support</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-semibold">Real-time APIs</h4>
            <p className="text-sm text-gray-600">Weather & Mandi Data</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Farming?</h3>
          <p className="text-xl mb-8 text-green-100">Join thousands of farmers already using KisanAI for better harvests</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/KisanAIBot" 
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              📱 Start with Telegram Bot
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              📧 Join Waitlist for App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-gray-400">Empowering Indian farmers with AI-powered agricultural solutions.</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Disease Detection</li>
                <li>AI Chatbot</li>
                <li>Weather Forecast</li>
                <li>Mandi Prices</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>15+ Languages</li>
                <li>24/7 AI Support</li>
                <li>Offline Mode</li>
                <li>Voice Commands</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li>📧 contact@kisanai.in</li>
                <li>📱 Telegram: @KisanAIBot</li>
                <li>🌐 Made for YUKTI 2025</li>
                <li>🇮🇳 Proud Indian Startup</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KisanAI. Built with ❤️ for Indian Farmers. YUKTI AICTE Hackathon 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}