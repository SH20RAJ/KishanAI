'use client';

import React, { useState } from 'react';
import { Sprout, MapPin, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SoilHealthPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="pb-24 space-y-6 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
                <p className="text-gray-600">Your soil test request has been received. A representative will contact you shortly.</p>
                <Link href="/application/services" className="px-6 py-3 bg-[var(--primary)] text-white rounded-xl font-semibold">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Soil Health Card</h1>
            </div>

            {/* Info Card */}
            <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                        <Sprout className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">Why Test Soil?</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            • Know nutrient deficiencies (N, P, K)<br />
                            • Save money on fertilizers<br />
                            • Improve crop yield
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Book a Soil Test</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (Acres)</label>
                        <input type="number" placeholder="e.g. 2.5" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Crop</label>
                        <input type="text" placeholder="e.g. Wheat" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sample Collection Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input type="date" className="w-full p-3 pl-10 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <textarea placeholder="Village, District..." className="w-full p-3 pl-10 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[80px]" required></textarea>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-4 bg-[var(--primary)] text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 active:scale-95 transition-transform">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}
