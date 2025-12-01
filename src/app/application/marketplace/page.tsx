'use client';

import React from 'react';
import { Search, Filter, ShoppingCart, Plus } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

const categories = [
    { id: 'all', name: 'All' },
    { id: 'seeds', name: 'Seeds' },
    { id: 'tools', name: 'Tools' },
    { id: 'fertilizers', name: 'Fertilizers' },
];

const products = [
    {
        id: 1,
        name: 'Hybrid Wheat Seeds',
        price: '₹1,200',
        unit: 'per kg',
        image: '/mockups/marketplace.png', // Placeholder
        category: 'Seeds',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Organic Fertilizer',
        price: '₹850',
        unit: 'per bag',
        image: '/mockups/marketplace.png', // Placeholder
        category: 'Fertilizers',
        rating: 4.8
    },
    {
        id: 3,
        name: 'Sprayer Pump',
        price: '₹2,500',
        unit: 'per unit',
        image: '/mockups/marketplace.png', // Placeholder
        category: 'Tools',
        rating: 4.2
    },
    {
        id: 4,
        name: 'Pesticide Sprayer',
        price: '₹450',
        unit: 'per bottle',
        image: '/mockups/marketplace.png', // Placeholder
        category: 'Fertilizers',
        rating: 4.6
    }
];

export default function MarketplacePage() {
    return (
        <div className="pb-24 space-y-6">

            {/* Search Header */}
            <div className="flex gap-3">
                <div className="flex-1 bg-gray-100 rounded-xl flex items-center px-4 h-12">
                    <Search className="text-gray-400 w-5 h-5 mr-2" />
                    <input
                        type="text"
                        placeholder="Search seeds, tools..."
                        className="bg-transparent border-none outline-none w-full text-gray-900 placeholder-gray-500"
                    />
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                    <Filter className="w-5 h-5" />
                </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat.id === 'all'
                                ? 'bg-[var(--primary)] text-white'
                                : 'bg-white border border-gray-200 text-gray-600'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                        <div className="relative aspect-square bg-gray-50">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                            <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
                                <Plus className="w-4 h-4 text-gray-900" />
                            </button>
                        </div>
                        <div className="p-3">
                            <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                            <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{product.name}</h3>
                            <div className="flex items-end justify-between mt-2">
                                <div>
                                    <div className="font-bold text-[var(--primary)]">{product.price}</div>
                                    <div className="text-[10px] text-gray-400">{product.unit}</div>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-bold bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded">
                                    ★ {product.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sell Button FAB */}
            <button className="fixed bottom-24 right-4 bg-[var(--accent)] text-black font-bold px-6 py-3 rounded-full shadow-lg shadow-yellow-200 flex items-center gap-2 z-40">
                <Plus className="w-5 h-5" /> Sell Crop
            </button>

        </div>
    );
}
