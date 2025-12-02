'use client';

import React, { useState } from 'react';
import { Calculator, ArrowLeft, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function FertilizerCalcPage() {
    const [area, setArea] = useState('');
    const [crop, setCrop] = useState('Wheat');
    const [result, setResult] = useState<{ urea: number; dap: number; mop: number } | null>(null);

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        const areaNum = parseFloat(area);
        if (!areaNum) return;

        // Mock calculation logic (Standard recommendation per acre)
        // Wheat: 100kg N, 60kg P, 40kg K
        // Urea (46% N), DAP (18% N, 46% P), MOP (60% K)

        // Simplified calculation for demo
        const urea = Math.round(areaNum * 110); // kg
        const dap = Math.round(areaNum * 55);   // kg
        const mop = Math.round(areaNum * 30);   // kg

        setResult({ urea, dap, mop });
    };

    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Fertilizer Calc</h1>
            </div>

            {/* Intro */}
            <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100 flex items-center space-x-4">
                <div className="p-3 bg-teal-100 rounded-xl">
                    <Calculator className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Dosage Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate exact fertilizer needs for your farm.</p>
                </div>
            </div>

            {/* Calculator Form */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <form onSubmit={calculate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Crop</label>
                        <select
                            value={crop}
                            onChange={(e) => setCrop(e.target.value)}
                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="Wheat">Wheat</option>
                            <option value="Paddy">Paddy</option>
                            <option value="Cotton">Cotton</option>
                            <option value="Maize">Maize</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Area (Acres)</label>
                        <input
                            type="number"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            placeholder="e.g. 2.5"
                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-teal-200 active:scale-95 transition-transform">
                        Calculate
                    </button>
                </form>
            </div>

            {/* Result */}
            {result && (
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-fadeIn">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Leaf className="w-5 h-5 mr-2 text-green-500" />
                        Recommended Dosage
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs text-gray-500 mb-1">Urea</p>
                            <p className="font-bold text-lg text-gray-900">{result.urea} kg</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs text-gray-500 mb-1">DAP</p>
                            <p className="font-bold text-lg text-gray-900">{result.dap} kg</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs text-gray-500 mb-1">MOP</p>
                            <p className="font-bold text-lg text-gray-900">{result.mop} kg</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">
                        *These are general recommendations. Please consult a soil expert for precise needs.
                    </p>
                </div>
            )}
        </div>
    );
}
