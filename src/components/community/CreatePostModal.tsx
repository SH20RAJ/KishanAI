'use client';

import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon, Send } from 'lucide-react';

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (content: string, image: File | null, category: string) => void;
}

export function CreatePostModal({ isOpen, onClose, onSubmit }: CreatePostModalProps) {
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Question');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const MAX_CHARS = 500;

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content, imageFile, category);
            // Reset form
            setContent('');
            setCategory('Question');
            setImagePreview(null);
            setImageFile(null);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scaleIn">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center rounded-t-2xl">
                    <h2 className="text-lg font-bold text-gray-900">Create Post</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {/* Category Selection */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                        >
                            <option value="Question">Question</option>
                            <option value="Crop Issue">Crop Issue</option>
                            <option value="Success Story">Success Story</option>
                            <option value="Tip">Farming Tip</option>
                            <option value="General">General Discussion</option>
                        </select>
                    </div>

                    {/* Content Textarea */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            What's on your mind?
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Share your farming query, experience, or tips..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                            rows={6}
                            maxLength={MAX_CHARS}
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">
                                {content.length}/{MAX_CHARS} characters
                            </span>
                            <div
                                className={`w-16 h-1 rounded-full ${content.length > MAX_CHARS * 0.9
                                        ? 'bg-red-500'
                                        : content.length > MAX_CHARS * 0.7
                                            ? 'bg-yellow-500'
                                            : 'bg-green-500'
                                    }`}
                                style={{
                                    width: `${Math.min((content.length / MAX_CHARS) * 100, 100)}%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageSelect}
                            className="hidden"
                        />
                        {!imagePreview ? (
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-green-500 hover:bg-green-50 transition-all flex flex-col items-center gap-2 text-gray-500 hover:text-green-600"
                            >
                                <ImageIcon size={32} />
                                <span className="text-sm font-medium">
                                    Add Photo (Optional)
                                </span>
                            </button>
                        ) : (
                            <div className="relative rounded-lg overflow-hidden">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-64 object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!content.trim()}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                        <Send size={18} />
                        Post to Community
                    </button>
                </form>
            </div>
        </div>
    );
}
