'use client';

import React from 'react';
import { BookOpen, ArrowLeft, Wheat, Sun, Droplets, Bug } from 'lucide-react';
import Link from 'next/link';

export default function AdvisoryPage() {
    const advisories = [
        {
            crop: 'Wheat',
            stage: 'Sowing',
            tips: [
                'Use certified seeds for better yield.',
                'Treat seeds with fungicide before sowing.',
                'Maintain proper spacing of 20-22 cm.'
            ],
            icon: Wheat,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50'
        },
        {
            crop: 'Paddy',
            stage: 'Harvesting',
            tips: [
                'Harvest when 80% grains turn golden.',
                'Dry grains to 14% moisture content.',
                'Store in dry, pest-free godowns.'
            ],
            icon: Sun,
            color: 'text-green-600',
            bg: 'bg-green-50'
        },
        {
            crop: 'Cotton',
            stage: 'Flowering',
            tips: [
                'Monitor for bollworm infestation.',
                'Apply irrigation at critical stages.',
                'Spray micronutrients for better boll setting.'
            ],
            icon: Bug,
            color: 'text-pink-600',
            bg: 'bg-pink-50'
        }
    ];

    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Crop Advisory</h1>
            </div>

            {/* Intro */}
            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Expert Tips</h3>
                    <p className="text-sm text-gray-600">Seasonal advice for major crops.</p>
                </div>
            </div>

            {/* Advisories */}
            <div className="space-y-4">
                {advisories.map((advisory, index) => {
                    const Icon = advisory.icon;
                    return (
                        <div key={index} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className={`p-2 rounded-full ${advisory.bg}`}>
                                    <Icon className={`w-6 h-6 ${advisory.color}`} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{advisory.crop}</h3>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">Stage: {advisory.stage}</span>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {advisory.tips.map((tip, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2 mt-1 w-1.5 h-1.5 bg-[var(--primary)] rounded-full flex-shrink-0"></span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
