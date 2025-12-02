'use client';

import React from 'react';
import { CloudSun, CloudRain, Sun, Wind, Droplets, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WeatherPage() {
    // Mock data for 7-day forecast
    const forecast = [
        { day: 'Today', temp: '28°C', icon: CloudSun, condition: 'Partly Cloudy', rain: '10%' },
        { day: 'Tomorrow', temp: '25°C', icon: CloudRain, condition: 'Light Rain', rain: '60%' },
        { day: 'Wed', temp: '30°C', icon: Sun, condition: 'Sunny', rain: '0%' },
        { day: 'Thu', temp: '31°C', icon: Sun, condition: 'Sunny', rain: '0%' },
        { day: 'Fri', temp: '29°C', icon: CloudSun, condition: 'Partly Cloudy', rain: '20%' },
        { day: 'Sat', temp: '27°C', icon: CloudRain, condition: 'Showers', rain: '40%' },
        { day: 'Sun', temp: '28°C', icon: CloudSun, condition: 'Clear', rain: '10%' },
    ];

    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/application/services" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Weather Forecast</h1>
            </div>

            {/* Current Weather Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg shadow-blue-200">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-blue-100 text-lg">New Delhi, India</p>
                        <h2 className="text-5xl font-bold mt-2">28°C</h2>
                        <p className="text-blue-100 mt-1">Partly Cloudy</p>
                    </div>
                    <CloudSun className="w-16 h-16 text-yellow-300" />
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-400/30">
                    <div className="text-center">
                        <Wind className="w-6 h-6 mx-auto mb-1 text-blue-100" />
                        <p className="text-sm opacity-80">Wind</p>
                        <p className="font-semibold">12 km/h</p>
                    </div>
                    <div className="text-center">
                        <Droplets className="w-6 h-6 mx-auto mb-1 text-blue-100" />
                        <p className="text-sm opacity-80">Humidity</p>
                        <p className="font-semibold">65%</p>
                    </div>
                    <div className="text-center">
                        <CloudRain className="w-6 h-6 mx-auto mb-1 text-blue-100" />
                        <p className="text-sm opacity-80">Rain</p>
                        <p className="font-semibold">10%</p>
                    </div>
                </div>
            </div>

            {/* 7-Day Forecast */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-[var(--primary)]" />
                    7-Day Forecast
                </h3>
                <div className="space-y-3">
                    {forecast.map((day, index) => {
                        const Icon = day.icon;
                        return (
                            <div key={index} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${day.condition.includes('Rain') ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{day.day}</p>
                                        <p className="text-xs text-gray-500">{day.condition}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{day.temp}</p>
                                    <p className="text-xs text-blue-600 flex items-center justify-end">
                                        <Droplets className="w-3 h-3 mr-1" />
                                        {day.rain}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
