import React from 'react';
import { MobileHeader } from '@/components/mobile/MobileHeader';
import { BottomNav } from '@/components/mobile/BottomNav';

export default function MobileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#F8FAF9] pb-20">
            <MobileHeader />
            <main className="pt-16 px-4">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
