'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PostCard } from '@/components/community/PostCard';
import type { Post } from '@/components/community/types';
import { CreatePostModal } from '@/components/community/CreatePostModal';
import { FilterTabs } from '@/components/community/FilterTabs';
import { Search, Plus } from 'lucide-react';

// Mock Data
const INITIAL_POSTS: Post[] = [
    {
        id: 1,
        user: 'Ramesh Kumar',
        location: 'Punjab',
        time: '2 hours ago',
        content: 'My wheat crop is turning yellow at the tips. Is this a fungal infection or nutrient deficiency? Please help.',
        image: '/mockups/community-and-services.png',
        likes: 24,
        comments: [
            {
                id: 101,
                user: 'Dr. Singh',
                content: 'This looks like Nitrogen deficiency. Try applying Urea.',
                time: '1 hour ago'
            }
        ],
        category: 'Crop Issue'
    },
    {
        id: 2,
        user: 'Suresh Patel',
        location: 'Gujarat',
        time: '5 hours ago',
        content: 'Just harvested my cotton crop. Yield is better than last year thanks to the new organic fertilizer.',
        image: null,
        likes: 156,
        comments: [],
        category: 'Success Story'
    }
];

export default function CommunityPage() {
    const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Recent');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCreatePost = (content: string, image: File | null, category: string) => {
        const newPost: Post = {
            id: Date.now(),
            user: 'You', // In a real app, get from auth context
            location: 'India',
            time: 'Just now',
            content,
            image: image ? URL.createObjectURL(image) : null, // Temporary preview URL
            likes: 0,
            comments: [],
            category
        };
        setPosts([newPost, ...posts]);
    };

    const handleLike = (postId: number) => {
        // Optimistic update handled in PostCard, but we update state here too for consistency
        // In a real app, this would make an API call
        console.log('Liked post', postId);
    };

    const handleComment = (postId: number, commentContent: string) => {
        const newComment = {
            id: Date.now(),
            user: 'You',
            content: commentContent,
            time: 'Just now'
        };

        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, comments: [...post.comments, newComment] }
                : post
        ));
    };

    const handleShare = (postId: number) => {
        console.log('Shared post', postId);
    };

    const filteredPosts = posts.filter(post =>
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.user.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pb-24 space-y-6 max-w-2xl mx-auto">
            {/* Header & Search */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Community</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors shadow-sm"
                    >
                        <Plus size={20} />
                        <span className="hidden sm:inline">New Post</span>
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search discussions, topics, or experts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                </div>

                <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Create Post Trigger (Mobile/Quick Access) */}
            <div
                onClick={() => setIsModalOpen(true)}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-3 cursor-pointer hover:border-green-200 transition-colors"
            >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 overflow-hidden relative">
                    <Image src="/logo.png" alt="User" fill className="object-cover" />
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-500">
                    Share your farming query...
                </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
                {filteredPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onLike={handleLike}
                        onComment={handleComment}
                        onShare={handleShare}
                    />
                ))}
            </div>

            <CreatePostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleCreatePost}
            />
        </div>
    );
}
