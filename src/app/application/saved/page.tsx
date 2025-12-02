'use client';

import React, { useState } from 'react';
import { Bookmark, FileText, TrendingUp, Sprout } from 'lucide-react';

export default function SavedPage() {
    const [activeTab, setActiveTab] = useState('schemes');

    const tabs = [
        { id: 'schemes', label: 'Schemes', icon: FileText },
        { id: 'market', label: 'Market', icon: TrendingUp },
        { id: 'articles', label: 'Articles', icon: Sprout },
    ];

    return (
        <div className="pb-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Items</h1>

            {/* Tabs */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${activeTab === tab.id
                                ? 'bg-white text-green-700 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Bookmark size={32} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No saved items</h3>
                <p className="text-gray-500 mt-1 max-w-xs">
                    Items you save will appear here for quick access.
                </p>
            </div>
        </div>
    );
}
