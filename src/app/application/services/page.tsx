'use client';

import React from 'react';
import { CloudSun, Sprout, FileText, Phone, Landmark, Calculator, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Weather Forecast',
        description: 'Next 7 days prediction',
        icon: CloudSun,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        href: '/application/services/weather'
    },
    {
        title: 'Soil Health Card',
        description: 'Book a soil test',
        icon: Sprout,
        color: 'text-green-600',
        bg: 'bg-green-50',
        href: '/application/services/soil-health'
    },
    {
        title: 'Govt Schemes',
        description: 'Subsidies & benefits',
        icon: Landmark,
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        href: '/application/services/schemes'
    },
    {
        title: 'Crop Advisory',
        description: 'Expert farming tips',
        icon: BookOpen,
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        href: '/application/services/advisory'
    },
    {
        title: 'Kisan Call Center',
        description: 'Talk to experts',
        icon: Phone,
        color: 'text-red-600',
        bg: 'bg-red-50',
        href: '/application/services/call-center'
    },
    {
        title: 'Fertilizer Calc',
        description: 'Calculate dosage',
        icon: Calculator,
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        href: '/application/services/fertilizer-calc'
    },
    {
        title: 'Mandi Prices',
        description: 'Live market rates',
        icon: TrendingUp,
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        href: '/application/marketplace'
    },
    {
        title: 'Crop Insurance',
        description: 'Protect your crops',
        icon: FileText,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        href: '/application/services/insurance'
    }
];

export default function ServicesPage() {
    return (
        <div className="pb-24 space-y-6">

            <div className="bg-[var(--primary)] text-white p-6 rounded-3xl shadow-lg shadow-green-200">
                <h1 className="text-2xl font-bold mb-2">Farming Services</h1>
                <p className="opacity-90">Access all government schemes and farming tools in one place.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <Link
                            key={index}
                            href={service.href}
                            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-95 transition-transform"
                        >
                            <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                                <Icon className={`w-6 h-6 ${service.color}`} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                            <p className="text-xs text-gray-500">{service.description}</p>
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}
