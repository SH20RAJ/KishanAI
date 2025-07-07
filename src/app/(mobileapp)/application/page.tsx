'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileApplication() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.replace('/application/home');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-t-green-400 animate-spin mx-auto" style={{ animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">KisanAI</h2>
        <p className="text-gray-600 text-sm">Initializing application...</p>
      </div>
    </div>
  );
}