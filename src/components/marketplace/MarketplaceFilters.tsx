import React from 'react';
import { Filter, MapPin, BadgeCheck, Leaf } from 'lucide-react';

export const MarketplaceFilters: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">Filters</h3>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Location</h4>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="text-gray-600 group-hover:text-green-700 text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Nearby (50km)
                    </span>
                </label>
            </div>

            {/* Trust Filter */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Trust & Quality</h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="text-gray-600 group-hover:text-green-700 text-sm flex items-center gap-2">
                            <BadgeCheck className="w-4 h-4 text-blue-500" /> Verified Sellers
                        </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="text-gray-600 group-hover:text-green-700 text-sm flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-green-500" /> Organic Certified
                        </span>
                    </label>
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Price Range</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                    />
                </div>
            </div>

            {/* Categories */}
            <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                    {['Seeds', 'Fertilizers', 'Tools', 'Pesticides', 'Services'].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            <span className="text-gray-600 group-hover:text-green-700 text-sm">{cat}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};
