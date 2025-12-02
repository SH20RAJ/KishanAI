'use client';

import React from 'react';
import { Bell, Info, TrendingUp, CloudRain, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotificationsPage() {
    const router = useRouter();

    const notifications = [
        {
            id: 1,
            type: 'system',
            title: 'Welcome to KisanAI',
            message: 'Complete your profile to get personalized crop recommendations.',
            time: '2 hours ago',
            read: false,
            icon: Info,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 2,
            type: 'weather',
            title: 'Rain Alert',
            message: 'Heavy rain expected in your area tomorrow. Take necessary precautions.',
            time: '5 hours ago',
            read: false,
            icon: CloudRain,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 3,
            type: 'market',
            title: 'Wheat Price Update',
            message: 'Wheat prices in Indore Mandi have increased by ₹50/quintal.',
            time: '1 day ago',
            read: true,
            icon: TrendingUp,
            color: 'bg-green-100 text-green-600'
        }
    ];

    return (
        <div className="pb-20">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <button className="text-sm text-green-600 font-medium hover:text-green-700">
                    Mark all as read
                </button>
            </div>

            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-4 rounded-xl border ${notification.read ? 'bg-white border-gray-100' : 'bg-green-50 border-green-100'}`}
                    >
                        <div className="flex gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}>
                                <notification.icon size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className={`font-semibold ${notification.read ? 'text-gray-900' : 'text-gray-900'}`}>
                                        {notification.title}
                                    </h3>
                                    <span className="text-xs text-gray-500">{notification.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                    {notification.message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {notifications.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
                    <p className="text-gray-500 mt-1">You're all caught up!</p>
                </div>
            )}
        </div>
    );
}
