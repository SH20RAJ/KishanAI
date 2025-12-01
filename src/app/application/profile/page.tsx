'use client';

import React from 'react';
import { User, MapPin, Settings, Phone, FileText, LogOut, ChevronRight, Languages, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
    const menuItems = [
        { icon: User, label: 'Edit Profile', href: '#' },
        { icon: Languages, label: 'Change Language', href: '#', value: 'English' },
        { icon: FileText, label: 'My Orders', href: '#' },
        { icon: Shield, label: 'Privacy & Security', href: '#' },
        { icon: Phone, label: 'Help & Support', href: '#' },
    ];

    return (
        <div className="pb-24 space-y-6">

            {/* Profile Header */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-50">
                        <Image
                            src="/logo.png"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white border-2 border-white">
                        <Settings size={14} />
                    </button>
                </div>

                <h1 className="text-xl font-bold text-gray-900">Kisan Kumar</h1>
                <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mt-1">
                    <MapPin size={14} />
                    <span>Indore, Madhya Pradesh</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                    <div>
                        <div className="font-bold text-lg text-gray-900">12</div>
                        <div className="text-xs text-gray-500">Crops</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg text-gray-900">5</div>
                        <div className="text-xs text-gray-500">Orders</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg text-gray-900">24</div>
                        <div className="text-xs text-gray-500">Posts</div>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                                    <Icon size={20} />
                                </div>
                                <span className="font-medium text-gray-900">{item.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {item.value && <span className="text-sm text-gray-400">{item.value}</span>}
                                <ChevronRight size={16} className="text-gray-400" />
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Logout Button */}
            <Button variant="outline" className="w-full border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700">
                <LogOut size={18} className="mr-2" /> Log Out
            </Button>

            <div className="text-center text-xs text-gray-400 mt-8">
                Version 1.0.0 • Made with ❤️ for Farmers
            </div>

        </div>
    );
}
