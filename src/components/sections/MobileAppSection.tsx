
import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
              <Button href="https://t.me/Kishan_aibot" variant="outline" size="lg" className="flex items-center gap-2">
                Use on Telegram <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md mx-auto relative flex justify-center">
            <div className="relative z-10 w-[300px] h-[600px] drop-shadow-2xl">
              <Image
                src="/mobile-application-mockup.png"
                alt="KisanAI Mobile App Interface"
                fill
                className="object-contain"
                sizes="(max-width: 868px) 100vw, 300px"
              />
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

