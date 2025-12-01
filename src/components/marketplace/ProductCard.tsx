import React from 'react';
import { BadgeCheck, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    mrp: number;
    image: string;
    seller: string;
    verified: boolean;
    location: string;
    rating: number;
    reviews: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    mrp,
    image,
    seller,
    verified,
    location,
    rating,
    reviews
}) => {
    const discount = Math.round(((mrp - price) / mrp) * 100);

    return (
        <Link href={`/marketplace/product/${id}`} className="group block">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {discount > 0 && (
                        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
                            {discount}% OFF
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-gray-900 font-bold text-lg line-clamp-2 group-hover:text-green-700 transition-colors">
                            {name}
                        </h3>
                    </div>

                    <div className="flex items-center gap-1 mb-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{seller}</span>
                        {verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {location}
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            {rating} ({reviews})
                        </div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                        <div>
                            <span className="text-xs text-gray-400 line-through">₹{mrp}</span>
                            <div className="text-xl font-bold text-green-700">₹{price}</div>
                        </div>
                        <Button size="sm" variant="outline" className="hover:bg-green-50 hover:text-green-700 hover:border-green-200">
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
