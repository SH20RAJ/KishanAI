import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, CheckCircle2, Sprout, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--secondary)] -z-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pattern-leaf opacity-10 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="primary" icon={Sprout}>Made for Indian Farmers</Badge>
              <Badge variant="outline" icon={ShieldCheck}>AICTE Approved</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight mb-6">
              Smart Farming with <br />
              <span className="text-[var(--primary)]">Artificial Intelligence</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              Detect crop diseases instantly, get real-time mandi prices, and access government schemes in your local language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="https://t.me/KisanAIBot" variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-green-200">
                Start Telegram Bot <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/application" variant="outline" size="lg">
                Try App Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="flex items-center gap-2 font-bold text-2xl text-[var(--text-main)]">
                  10k+ <Users className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div className="text-sm text-gray-500">Active Farmers</div>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-2xl text-[var(--text-main)]">
                  95% <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <Image
                src="/og-image.png"
                alt="Indian Farmer using KisanAI"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Floating UI Elements */}
              <div className="absolute top-0 -right-2 bg-white p-2 rounded-xl shadow-lg animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Status</div>
                    <div className="font-bold text-green-700">Healthy Crop</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 -left-2 bg-white p-2 rounded-xl shadow-lg animate-float animation-delay-2000 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Market Price</div>
                    <div className="font-bold text-gray-800">₹2,150/q</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};