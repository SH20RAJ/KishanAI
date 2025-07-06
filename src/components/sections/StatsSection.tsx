import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      title: "Farmers to Impact",
      value: "100M+",
      icon: "👨‍🌾"
    },
    {
      title: "Languages Supported",
      value: "15+",
      icon: "🌐"
    },
    {
      title: "Crop Disease Images",
      value: "50K+",
      icon: "📸"
    },
    {
      title: "AI Support",
      value: "24/7",
      icon: "🤖"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Impact & Reach
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-yellow-300">Farmers</span> Across India
          </h3>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Making agriculture smarter, one farmer at a time with cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              style={{ 
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-green-100 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                  {stat.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-yellow-300">Why Farmers Choose KisanAI</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">100% Free</div>
                  <div className="text-green-100 text-sm">No hidden charges</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Instant Results</div>
                  <div className="text-green-100 text-sm">AI-powered speed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Trusted & Secure</div>
                  <div className="text-green-100 text-sm">Your data is safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
