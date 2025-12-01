'use client';

import React from 'react';
import { CloudSun, Droplets, Wind, ArrowRight, Scan, TrendingUp, Sprout, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="pb-24 space-y-6">

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-200">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 opacity-90 mb-1">
                            <MapPin size={14} />
                            <span className="text-sm font-medium">Madhya Pradesh</span>
                        </div>
                        <h2 className="text-3xl font-bold">28°C</h2>
                        <p className="opacity-90">Partly Cloudy</p>
                    </div>
                    <CloudSun size={48} className="opacity-90" />
                </div>

                <div className="flex justify-between items-center bg-white/20 rounded-2xl p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Droplets size={16} className="opacity-80" />
                        <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-px h-4 bg-white/30"></div>
                    <div className="flex items-center gap-2">
                        <Wind size={16} className="opacity-80" />
                        <span className="text-sm font-medium">12 km/h</span>
                    </div>
                    <div className="w-px h-4 bg-white/30"></div>
                    <div className="flex items-center gap-2">
                        <Sprout size={16} className="opacity-80" />
                        <span className="text-sm font-medium">Normal</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div>
                <h3 className="font-bold text-gray-900 mb-4 px-1">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/application/doctor" className="bg-green-50 p-4 rounded-2xl border border-green-100 active:scale-95 transition-transform">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                            <Scan className="w-5 h-5 text-green-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">Crop Doctor</h4>
                        <p className="text-xs text-gray-500 mt-1">Detect diseases</p>
                    </Link>

                    <Link href="/application/marketplace" className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 active:scale-95 transition-transform">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                            <TrendingUp className="w-5 h-5 text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">Mandi Rates</h4>
                        <p className="text-xs text-gray-500 mt-1">Check prices</p>
                    </Link>

                    <Link href="/application/marketplace" className="bg-blue-50 p-4 rounded-2xl border border-blue-100 active:scale-95 transition-transform">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                            <ShoppingBag className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">Buy Inputs</h4>
                        <p className="text-xs text-gray-500 mt-1">Seeds & Tools</p>
                    </Link>

                    <Link href="/application/community" className="bg-purple-50 p-4 rounded-2xl border border-purple-100 active:scale-95 transition-transform">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                            <Users className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">Community</h4>
                        <p className="text-xs text-gray-500 mt-1">Ask experts</p>
                    </Link>
                </div>
            </div>

            {/* Featured Scheme / Banner */}
            <div className="bg-gray-900 rounded-2xl p-5 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="inline-block bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-md mb-2">
                        NEW SCHEME
                    </div>
                    <h3 className="text-lg font-bold mb-1">PM Kisan Samman Nidhi</h3>
                    <p className="text-gray-400 text-sm mb-4 max-w-[70%]">Get ₹6,000 per year direct income support.</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black h-8 text-xs">
                        Check Eligibility
                    </Button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20">
                    <Sprout size={120} />
                </div>
            </div>

        </div>
    );
}

// Helper for MapPin since it was missing in imports
import { MapPin, Users } from 'lucide-react';
