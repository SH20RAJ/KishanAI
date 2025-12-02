'use client';

import React from 'react';
import { Landmark, ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function SchemesPage() {
    const schemes = [
        {
            title: 'PM-KISAN',
            desc: '₹6,000/year income support for all landholding farmers.',
            benefits: ['₹2,000 every 4 months', 'Direct Bank Transfer'],
            link: 'https://pmkisan.gov.in'
        },
        {
            title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
            desc: 'Crop insurance scheme for natural calamities.',
            benefits: ['Low premium (1.5-2%)', 'Full claim for losses'],
            link: 'https://pmfby.gov.in'
        },
        {
            title: 'Kisan Credit Card (KCC)',
            desc: 'Short-term credit for crops and term loans.',
            benefits: ['Low interest rate (4%)', 'Easy repayment'],
            link: '#'
        },
        {
            title: 'Paramparagat Krishi Vikas Yojana',
            desc: 'Promotion of organic farming.',
            benefits: ['₹50,000/hectare for organic inputs', 'Marketing support'],
            link: '#'
        }
    ];

    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Govt Schemes</h1>
            </div>

            {/* Intro */}
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                    <Landmark className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Central & State Schemes</h3>
                    <p className="text-sm text-gray-600">Find subsidies and benefits applicable to you.</p>
                </div>
            </div>

            {/* Schemes List */}
            <div className="space-y-4">
                {schemes.map((scheme, index) => (
                    <div key={index} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg text-gray-900">{scheme.title}</h3>
                            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[var(--primary)]">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{scheme.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {scheme.benefits.map((benefit, i) => (
                                <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                                    {benefit}
                                </span>
                            ))}
                        </div>
                        <button className="w-full py-2.5 bg-gray-900 text-white rounded-xl font-medium text-sm flex items-center justify-center">
                            Check Eligibility <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
