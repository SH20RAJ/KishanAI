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
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
        <p className="text-gray-600">लोड हो रहा है...</p>
      </div>
    </div>
  );
}