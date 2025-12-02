'use client';

import React from 'react';
import { FileText, ArrowLeft, ShieldCheck, AlertTriangle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function InsurancePage() {
    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Crop Insurance</h1>
            </div>

            {/* Hero Card */}
            <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 flex items-start space-x-4">
                <div className="p-3 bg-indigo-100 rounded-xl">
                    <ShieldCheck className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 text-lg">PMFBY Scheme</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Pradhan Mantri Fasal Bima Yojana aims to support sustainable production in agriculture sector.
                    </p>
                </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
                <h3 className="font-bold text-gray-900 px-2">Key Highlights</h3>

                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                            <span className="font-bold text-green-600 text-sm">2%</span>
                        </div>
                        <h4 className="font-bold text-gray-900">Low Premium</h4>
                    </div>
                    <p className="text-sm text-gray-600 pl-11">
                        Only 2% premium for Kharif crops and 1.5% for Rabi crops.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">Full Coverage</h4>
                    </div>
                    <p className="text-sm text-gray-600 pl-11">
                        Coverage against natural calamities like drought, flood, pests, etc.
                    </p>
                </div>
            </div>

            {/* Action Button */}
            <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-lg mt-6">
                <h3 className="font-bold text-xl mb-2">Apply Online</h3>
                <p className="text-gray-400 text-sm mb-6">
                    Visit the official portal to calculate premium and apply for insurance.
                </p>
                <a
                    href="https://pmfby.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-white text-gray-900 text-center rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    Go to PMFBY Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>
    );
}
