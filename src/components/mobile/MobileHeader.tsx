import React from 'react';
import Link from 'next/link';
import { Bell, MapPin } from 'lucide-react';
import Image from 'next/image';

export const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 px-4 py-3">
      <div className="flex justify-between items-center max-w-md mx-auto">

        {/* User Location / Greeting */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <Image
              src="/logo.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900 leading-none">Namaste, Kisan</h1>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
              <MapPin size={10} />
              <span>Madhya Pradesh, IN</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/application/notifications" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </Link>
        </div>

      </div>
    </header>
  );
};