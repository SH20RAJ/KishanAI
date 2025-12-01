import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--secondary)] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-6">
              Your Personal <span className="text-[var(--primary)]">Crop Doctor</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              Diagnose crop issues in seconds. Just take a photo, and our AI will identify the disease and suggest the best treatment.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Instant disease detection with 95% accuracy",
                "Treatment recommendations in your local language",
                "Preventive measures to save your crop",
                "Connect with expert agronomists"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/application" variant="primary" size="lg" className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Try App Demo
              </Button>
              <Button href="https://t.me/KisanAIBot" variant="outline" size="lg" className="flex items-center gap-2">
                Use on Telegram <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md mx-auto relative">
            <div className="relative z-10 mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                {/* App UI Mockup */}
                <div className="bg-green-600 p-4 text-white pt-10">
                  <div className="text-xs opacity-80">Good Morning,</div>
                  <div className="text-xl font-bold">Ram Kumar</div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="text-sm text-green-800 font-semibold mb-2">Weather Update</div>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-green-700">28°C</div>
                      <div className="text-right">
                        <div className="text-xs text-green-600">Sunny</div>
                        <div className="text-xs text-green-600">H: 32° L: 24°</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-xl text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-blue-800">Scan Crop</div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-xl text-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-600">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-amber-800">Mandi</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm font-bold text-gray-800 mb-2">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">!</div>
                        <div>
                          <div className="text-xs font-bold">Tomato Blight</div>
                          <div className="text-[10px] text-gray-500">Detected 2h ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around">
                  <div className="w-6 h-6 bg-green-100 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
