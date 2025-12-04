'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { Comment } from './types';

interface CommentSectionProps {
    comments: Comment[];
    onAddComment: (comment: string) => void;
}

export function CommentSection({ comments, onAddComment }: CommentSectionProps) {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
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
        <div className="bg-gray-50 p-4 space-y-4">
            {/* Existing Comments */}
            {comments.length > 0 && (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3 animate-fadeIn">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                {getUserInitials(comment.user)}
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                    <p className="font-semibold text-sm text-gray-900">
                                        {comment.user}
                                    </p>
                                    <p className="text-sm text-gray-700 mt-1">
                                        {comment.content}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 ml-1">
                                    {comment.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* No Comments State */}
            {comments.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                    No comments yet. Be the first to comment!
                </p>
            )}

            {/* Add Comment Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                />
                <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                    <Send size={16} />
                </button>
            </form>
        </div>
    );
}
