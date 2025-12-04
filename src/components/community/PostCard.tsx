'use client';

import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal, Bookmark, Heart } from 'lucide-react';
import Image from 'next/image';
import { CommentSection } from './CommentSection';
import type { Post } from './types';

interface PostCardProps {
    post: Post;
    onLike: (postId: number) => void;
    onComment: (postId: number, comment: string) => void;
    onShare: (postId: number) => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [localLikes, setLocalLikes] = useState(post.likes);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1);
        onLike(post.id);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        onShare(post.id);
        // You could add a toast notification here
        alert('Link copied to clipboard!');
    };

    const getUserInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Post Header */}
            <div className="p-4 flex justify-between items-start">
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                        {getUserInitials(post.user)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-900 text-sm">{post.user}</h3>
                            {post.isExpert && (
                                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                                    Expert
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-gray-500">
                            {post.location} • {post.time}
                        </div>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-50">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Category Tag */}
            {post.category && (
                <div className="px-4 pb-2">
                    <span className="inline-block bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                    </span>
                </div>
            )}

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

            {/* Post Stats */}
            <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500">
                <span>{localLikes} likes</span>
                <span>{post.comments.length} comments</span>
            </div>

            {/* Post Actions */}
            <div className="p-3 flex items-center justify-between border-t border-gray-50">
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${isLiked
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                        }`}
                >
                    <Heart
                        size={18}
                        className={`transition-all duration-300 ${isLiked ? 'fill-current scale-110' : ''
                            }`}
                    />
                    <span className="text-xs font-bold">Like</span>
                </button>

                <button
                    onClick={() => setShowComments(!showComments)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${showComments
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                >
                    <MessageCircle size={18} />
                    <span className="text-xs font-bold">Comment</span>
                </button>

                <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-500 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-colors"
                >
                    <Share2 size={18} />
                    <span className="text-xs font-bold">Share</span>
                </button>

                <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isBookmarked
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-500 hover:text-yellow-600 hover:bg-yellow-50'
                        }`}
                >
                    <Bookmark
                        size={18}
                        className={isBookmarked ? 'fill-current' : ''}
                    />
                </button>
            </div>

            {/* Comment Section */}
            {showComments && (
                <div className="border-t border-gray-100 animate-slideDown">
                    <CommentSection
                        comments={post.comments}
                        onAddComment={(comment: string) => onComment(post.id, comment)}
                    />
                </div>
            )}
        </div>
    );
}
