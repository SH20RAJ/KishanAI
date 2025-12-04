'use client';

import React from 'react';

interface FilterTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function FilterTabs({ activeTab, onTabChange }: FilterTabsProps) {
    const tabs = ['Recent', 'Trending', 'Popular'];

    return (
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl w-fit">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab
                            ? 'bg-white text-green-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
