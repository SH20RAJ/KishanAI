import React from 'react';
import { Sprout, FlaskConical, Wrench, Handshake, Search, MapPin } from 'lucide-react';
import { CategoryCard } from '@/components/marketplace/CategoryCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function MarketplacePage() {
    const categories = [
        {
            name: 'Seeds',
            icon: Sprout,
            color: 'green',
            description: 'High-yield, disease-resistant seeds for all seasons.'
        },
        {
            name: 'Fertilizers',
            icon: FlaskConical,
            color: 'yellow',
            description: 'Organic and chemical fertilizers for better growth.'
        },
        {
            name: 'Tools',
            icon: Wrench,
            color: 'brown',
            description: 'Modern farming tools and drip irrigation systems.'
        },
        {
            name: 'Services',
            icon: Handshake,
            color: 'blue',
            description: 'Expert consultation, soil testing, and drone services.'
        }
    ];

    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-3xl p-8 md:p-12 mb-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>

                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">KisanAI Marketplace</h1>
                    <p className="text-green-100 text-lg mb-8">
                        Access high-quality seeds, fertilizers, tools, and expert services at fair prices.
                        Trusted by thousands of Indian farmers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-grow max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for seeds, tools..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-white border-none">
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="mb-16">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
                        <p className="text-gray-500 mt-1">Everything you need for a successful harvest</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link href={`/marketplace/products?category=${category.name.toLowerCase()}`} key={index}>
                            <CategoryCard {...category} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured Products Preview (Placeholder for now) */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Popular Near You</h2>
                    <Link href="/marketplace/products" className="text-green-600 font-medium hover:text-green-700 flex items-center gap-1">
                        View All <span className="text-lg">→</span>
                    </Link>
                </div>

                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                    <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Find Products Nearby</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                        Enable location services to see seeds, fertilizers, and tools available from verified sellers in your district.
                    </p>
                    <Button variant="primary">Enable Location</Button>
                </div>
            </div>
        </div>
    );
}
