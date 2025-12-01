import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { BadgeCheck, MapPin, Star, ShieldCheck, Truck, Mic, Share2, Heart } from 'lucide-react';

// Mock Data for a single product
const PRODUCT = {
    id: '1',
    name: 'Hybrid Tomato Seeds (High Yield Variety)',
    price: 450,
    mrp: 600,
    description: 'These hybrid tomato seeds are specially treated for disease resistance and high yield. Suitable for all soil types and weather conditions. Produces firm, juicy tomatoes with long shelf life.',
    images: [
        'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1591158702033-53a954cd2cf9?auto=format&fit=crop&q=80&w=1200'
    ],
    seller: {
        name: 'Kisan Kendra',
        verified: true,
        location: 'Nashik, Maharashtra',
        joined: '2023'
    },
    specifications: [
        { label: 'Type', value: 'Hybrid F1' },
        { label: 'Germination Rate', value: '98%' },
        { label: 'Maturity', value: '60-65 Days' },
        { label: 'Season', value: 'Rabi / Kharif' }
    ],
    usage: [
        'Prepare soil with organic compost before sowing.',
        'Sow seeds 1-2 cm deep in seedling trays.',
        'Transplant after 20-25 days when seedlings are healthy.',
        'Water regularly but avoid waterlogging.'
    ],
    reviews: [
        { user: 'Ramesh P.', rating: 5, comment: 'Excellent germination rate. Very happy with the yield.' },
        { user: 'Suresh K.', rating: 4, comment: 'Good quality seeds, delivery was a bit late.' }
    ]
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const discount = Math.round(((PRODUCT.mrp - PRODUCT.price) / PRODUCT.mrp) * 100);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-gray-100 bg-white">
                        <Image
                            src={PRODUCT.images[0]}
                            alt={PRODUCT.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {PRODUCT.images.map((img, idx) => (
                            <div key={idx} className="relative h-24 rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:border-green-500 transition-colors">
                                <Image
                                    src={img}
                                    alt={`View ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">In Stock</span>
                                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                    <BadgeCheck className="w-3 h-3" /> Verified Seller
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{PRODUCT.name}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-gray-900">4.5</span> (128 Reviews)
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" /> {PRODUCT.seller.location}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-b border-gray-100 py-6 mb-6">
                        <div className="flex items-end gap-3 mb-2">
                            <span className="text-4xl font-bold text-green-700">₹{PRODUCT.price}</span>
                            <span className="text-lg text-gray-400 line-through mb-1">₹{PRODUCT.mrp}</span>
                            <span className="text-green-600 font-bold mb-1">({discount}% OFF)</span>
                        </div>
                        <p className="text-gray-500 text-sm">Inclusive of all taxes</p>
                    </div>

                    {/* Voice Explanation */}
                    <div className="bg-green-50 rounded-xl p-4 mb-8 flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-green-800 mb-1">Listen to Product Details</h4>
                            <p className="text-green-600 text-sm">Hear about usage and benefits in your language</p>
                        </div>
                        <Button variant="primary" className="flex items-center gap-2 rounded-full px-6">
                            <Mic className="w-4 h-4" /> Play Audio
                        </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-8">
                        <Button variant="primary" size="lg" className="flex-1 text-lg">
                            Buy Now
                        </Button>
                        <Button variant="outline" size="lg" className="flex-1 text-lg">
                            Add to Cart
                        </Button>
                    </div>

                    {/* Trust Signals */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <ShieldCheck className="w-6 h-6 text-green-600" />
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Kisan Verified</p>
                                <p className="text-xs text-gray-500">Quality checked products</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <Truck className="w-6 h-6 text-green-600" />
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Fast Delivery</p>
                                <p className="text-xs text-gray-500">Delivery within 3-5 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Tabs/Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <section className="bg-white rounded-2xl border border-gray-100 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                        <p className="text-gray-600 leading-relaxed">{PRODUCT.description}</p>
                    </section>

                    {/* Usage Instructions */}
                    <section className="bg-white rounded-2xl border border-gray-100 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
                        <ul className="space-y-3">
                            {PRODUCT.usage.map((step, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-600">
                                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Reviews */}
                    <section className="bg-white rounded-2xl border border-gray-100 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Farmer Reviews</h3>
                        <div className="space-y-6">
                            {PRODUCT.reviews.map((review, idx) => (
                                <div key={idx} className="border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-gray-900">{review.user}</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Product Specifications</h3>
                        <div className="space-y-3">
                            {PRODUCT.specifications.map((spec, idx) => (
                                <div key={idx} className="flex justify-between text-sm border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                                    <span className="text-gray-500">{spec.label}</span>
                                    <span className="font-medium text-gray-900">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
                        <p className="text-blue-700 text-sm mb-4">
                            Talk to our agri-experts to know if this product is right for your crop.
                        </p>
                        <Button variant="outline" className="w-full bg-white text-blue-700 border-blue-200 hover:bg-blue-50">
                            Chat with Expert
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
