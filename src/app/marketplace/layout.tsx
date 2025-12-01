import React from 'react';
import { Header, Footer } from '@/components';

export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-20 pb-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
