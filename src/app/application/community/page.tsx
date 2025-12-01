'use client';

import React from 'react';
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const posts = [
    {
        id: 1,
        user: 'Ramesh Kumar',
        location: 'Punjab',
        time: '2 hours ago',
        content: 'My wheat crop is turning yellow at the tips. Is this a fungal infection or nutrient deficiency? Please help.',
        image: '/mockups/community-and-services.png', // Placeholder
        likes: 24,
        comments: 12
    },
    {
        id: 2,
        user: 'Suresh Patel',
        location: 'Gujarat',
        time: '5 hours ago',
        content: 'Just harvested my cotton crop. Yield is better than last year thanks to the new organic fertilizer.',
        image: null,
        likes: 156,
        comments: 45
    }
];

export default function CommunityPage() {
    return (
        <div className="pb-24 space-y-6">

            {/* Create Post Input */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 overflow-hidden relative">
                    <Image src="/logo.png" alt="User" fill className="object-cover" />
                </div>
                <input
                    type="text"
                    placeholder="Share your farming query..."
                    className="flex-1 bg-gray-50 rounded-xl px-4 text-sm outline-none border-none"
                />
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        {/* Post Header */}
                        <div className="p-4 flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">{post.user}</h3>
                                    <div className="text-xs text-gray-500">{post.location} • {post.time}</div>
                                </div>
                            </div>
                            <button className="text-gray-400">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        {/* Post Content */}
                        <div className="px-4 pb-3">
                            <p className="text-gray-800 text-sm leading-relaxed">{post.content}</p>
                        </div>

                        {/* Post Image */}
                        {post.image && (
                            <div className="relative w-full h-64 bg-gray-100">
                                <Image
                                    src={post.image}
                                    alt="Post content"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Post Actions */}
                        <div className="p-3 flex items-center justify-between border-t border-gray-50 mt-2">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-[var(--primary)] px-2 py-1 rounded-lg transition-colors">
                                <ThumbsUp size={18} />
                                <span className="text-xs font-bold">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors">
                                <MessageCircle size={18} />
                                <span className="text-xs font-bold">{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 px-2 py-1 rounded-lg transition-colors">
                                <Share2 size={18} />
                                <span className="text-xs font-bold">Share</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
