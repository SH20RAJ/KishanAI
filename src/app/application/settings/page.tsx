'use client';

import React from 'react';
import { ChevronRight, Globe, Bell, Shield, HelpCircle, LogOut, User } from 'lucide-react';

interface SectionItem {
    icon: React.ElementType;
    label: string;
    href: string;
    value?: string;
}

interface Section {
    title: string;
    items: SectionItem[];
}

export default function SettingsPage() {
    const sections: Section[] = [
        {
            title: 'Preferences',
            items: [
                { icon: Globe, label: 'Language', value: 'English', href: '#' },
                { icon: Bell, label: 'Notifications', value: 'On', href: '#' },
            ]
        },
        {
            title: 'Account',
            items: [
                { icon: User, label: 'Edit Profile', href: '/application/profile' },
                { icon: Shield, label: 'Privacy & Security', href: '#' },
            ]
        },
        {
            title: 'Support',
            items: [
                { icon: HelpCircle, label: 'Help Center', href: '#' },
                { icon: HelpCircle, label: 'About KisanAI', href: '#' },
            ]
        }
    ];

    return (
        <div className="pb-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

            <div className="space-y-6">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">
                            {section.title}
                        </h2>
                        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                            {section.items.map((item, itemIdx) => (
                                <button
                                    key={itemIdx}
                                    className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                                            <item.icon size={16} />
                                        </div>
                                        <span className="text-gray-900 font-medium">{item.label}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.value && (
                                            <span className="text-sm text-gray-500">{item.value}</span>
                                        )}
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                <button className="w-full flex items-center justify-center gap-2 p-4 mt-8 text-red-600 font-medium bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <LogOut size={20} />
                    Log Out
                </button>

                <p className="text-center text-xs text-gray-400 mt-8">
                    Version 1.0.0
                </p>
            </div>
        </div>
    );
}
