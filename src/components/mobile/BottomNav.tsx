'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Users, Grid, User } from 'lucide-react';

export const BottomNav = () => {
    const pathname = usePathname();

    const navItems = [
        { icon: Home, label: 'Home', href: '/application/home' },
        { icon: ShoppingBag, label: 'Market', href: '/application/marketplace' },
        { icon: Users, label: 'Community', href: '/application/community' },
        { icon: Grid, label: 'Services', href: '/application/services' },
        { icon: User, label: 'Profile', href: '/application/profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 pb-safe">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${isActive
                                    ? 'text-[var(--primary)]'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <Icon
                                size={24}
                                className={isActive ? 'fill-current' : ''}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
