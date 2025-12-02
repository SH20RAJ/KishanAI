'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Compass size={40} className="text-green-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Lost in the fields?</h1>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                The page you are looking for seems to have wandered off. Let's get you back to safety.
            </p>

            <Link
                href="/application/home"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
            >
                <Home size={20} />
                Go to Home
            </Link>
        </div>
    );
}
