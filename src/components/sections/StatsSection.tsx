import React from 'react';
import { Users, CheckCircle, MessageSquare, IndianRupee } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[var(--primary)] relative">
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex justify-center mb-3 text-[var(--accent)]">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">10,000+</div>
            <div className="text-green-100 text-sm">Farmers Helped</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex justify-center mb-3 text-[var(--accent)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">50,000+</div>
            <div className="text-green-100 text-sm">Diseases Detected</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex justify-center mb-3 text-[var(--accent)]">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-green-100 text-sm">Languages</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex justify-center mb-3 text-[var(--accent)]">
              <IndianRupee className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">₹0</div>
            <div className="text-green-100 text-sm">Cost to Farmer</div>
          </div>
        </div>
      </div>
    </section>
  );
};