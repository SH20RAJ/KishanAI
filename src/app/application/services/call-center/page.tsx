'use client';

import React from 'react';
import { Phone, ArrowLeft, MessageCircle, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function CallCenterPage() {
    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Kisan Call Center</h1>
            </div>

            {/* Hero Card */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-3xl shadow-lg shadow-red-200 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-1">1800-180-1551</h2>
                <p className="text-red-100 mb-6">Toll Free Number</p>
                <a href="tel:18001801551" className="inline-block px-8 py-3 bg-white text-red-600 rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
                    Call Now
                </a>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <Clock className="w-6 h-6 text-gray-400 mb-2" />
                    <h3 className="font-bold text-gray-900">Timings</h3>
                    <p className="text-xs text-gray-500">6:00 AM - 10:00 PM</p>
                    <p className="text-xs text-gray-500">All 7 Days</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <Globe className="w-6 h-6 text-gray-400 mb-2" />
                    <h3 className="font-bold text-gray-900">Languages</h3>
                    <p className="text-xs text-gray-500">22 Local Languages</p>
                    <p className="text-xs text-gray-500">Supported</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-[var(--primary)]" />
                    Common Questions
                </h3>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>How to register complaints?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3 group-open:animate-fadeIn text-sm">
                            You can register complaints by calling the toll-free number or visiting the nearest agriculture office.
                        </p>
                    </details>
                    <div className="h-px bg-gray-100"></div>
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>Is the service free?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3 group-open:animate-fadeIn text-sm">
                            Yes, calling the Kisan Call Center is completely free of cost for farmers.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}
