import React from 'react';
import { Button } from '../ui/Button';
import { Smartphone, MessageCircle } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-[var(--primary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-leaf opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
            Join thousands of farmers using KisanAI to detect diseases, check prices, and get expert advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://t.me/Kishan_aibot"
              variant="accent"
              size="lg"
              className="flex items-center gap-2 shadow-xl"
            >
              <Smartphone className="w-5 h-5" />
              Start Telegram Bot
            </Button>

            <Button
              href="/application"
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[var(--primary)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Try App Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
          <Button
            href="https://t.me/Kishan_aibot"
            variant="primary"
            className="flex-1 text-sm py-3"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Telegram Bot
          </Button>
          <Button
            href="/application"
            variant="outline"
            className="flex-1 text-sm py-3"
          >
            App Demo
          </Button>
        </div>
      </div>
    </>
  );
};
