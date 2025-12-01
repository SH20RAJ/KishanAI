import React from 'react';
import { MarketplaceFilters } from '@/components/marketplace/MarketplaceFilters';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { Button } from '@/components/ui/Button';
import { SlidersHorizontal } from 'lucide-react';

// Mock Data
const PRODUCTS = [
    {
        id: '1',
        name: 'Hybrid Tomato Seeds (High Yield)',
        price: 450,
        mrp: 600,
        image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
        seller: 'Kisan Kendra',
        verified: true,
        location: 'Nashik, MH',
        rating: 4.5,
        reviews: 128
    },
    {
        id: '2',
        name: 'Organic Neem Fertilizer',
        price: 850,
        mrp: 1200,
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800',
        seller: 'Green Earth Organics',
        verified: true,
        location: 'Pune, MH',
        rating: 4.8,
        reviews: 85
    },
    {
        id: '3',
        name: 'Drip Irrigation Kit (1 Acre)',
        price: 12500,
        mrp: 15000,
        image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=800',
        seller: 'AgriTech Solutions',
        verified: true,
        location: 'Nagpur, MH',
        rating: 4.2,
        reviews: 45
    },
    {
        id: '4',
        name: 'Soil Testing Kit (Digital)',
        price: 1200,
        mrp: 1800,
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
        seller: 'LabTech India',
        verified: false,
        location: 'Mumbai, MH',
        rating: 4.0,
        reviews: 22
    },
    {
        id: '5',
        name: 'Paddy Seeds - Basmati 1121',
        price: 950,
        mrp: 1100,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
        seller: 'Punjab Agri Store',
        verified: true,
        location: 'Amritsar, PB',
        rating: 4.9,
        reviews: 310
    },
    {
        id: '6',
        name: 'Hand Sprayer Pump (16L)',
        price: 1800,
        mrp: 2500,
        image: 'https://images.unsplash.com/photo-1595855793465-c30027f0582c?auto=format&fit=crop&q=80&w=800',
        seller: 'Local Hardware',
        verified: false,
        location: 'Solapur, MH',
        rating: 3.8,
        reviews: 15
    }
];

export default function ProductListPage() {
    return (
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
                <p className="text-gray-500">Showing {PRODUCTS.length} results for your farm</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-4">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" /> Filters
                    </Button>
                </div>

                {/* Sidebar Filters - Desktop */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <MarketplaceFilters />
                </aside>

                {/* Product Grid */}
                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PRODUCTS.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
