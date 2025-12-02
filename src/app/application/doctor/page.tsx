'use client';

import React, { useState } from 'react';
import { Camera, Upload, X, CheckCircle2, AlertTriangle, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function CropDoctorPage() {
    const [image, setImage] = useState<string | null>(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [showChat, setShowChat] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [isChatLoading, setIsChatLoading] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                analyzeImage();
            };
            reader.readAsDataURL(file);
        }
    };

    const analyzeImage = () => {
        setAnalyzing(true);
        // Simulate API call
        setTimeout(() => {
            setAnalyzing(false);
            setResult({
                disease: 'Leaf Rust',
                confidence: '92%',
                treatment: 'Apply fungicide containing propiconazole. Ensure proper spacing between plants for air circulation.',
                severity: 'Moderate'
            });
        }, 2000);
    };

    const reset = () => {
        setImage(null);
        setResult(null);
        setShowChat(false);
        setChatHistory([]);
    };

    const handleSendMessage = async () => {
        if (!chatMessage.trim()) return;

        const userMessage = chatMessage;
        setChatMessage('');
        setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsChatLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `Context: Disease detected is ${result?.disease}. User question: ${userMessage}`
                })
            });

            const data = await response.json() as { response: string };
            setChatHistory(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            console.error('Chat error:', error);
            setChatHistory(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    return (
        <div className="pb-24 space-y-6 h-[calc(100vh-8rem)] flex flex-col">

            {!image ? (
                <div className="flex-1 flex flex-col justify-center items-center space-y-8">
                    <div className="text-center space-y-2">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <Camera className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Crop Doctor</h1>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            Take a photo of your affected crop to detect diseases and get instant remedies.
                        </p>
                    </div>

                    <div className="w-full max-w-xs space-y-4">
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                capture="environment"
                                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                                onChange={handleImageUpload}
                            />
                            <Button className="w-full h-14 text-lg shadow-lg shadow-green-200" variant="primary">
                                <Camera className="mr-2" /> Take Photo
                            </Button>
                        </div>

                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                                onChange={handleImageUpload}
                            />
                            <Button variant="outline" className="w-full h-14 text-lg">
                                <Upload className="mr-2" /> Upload from Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col">
                    {/* Image Preview */}
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg mb-6 bg-black">
                        <Image src={image} alt="Uploaded Crop" fill className="object-cover" />
                        <button
                            onClick={reset}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white"
                        >
                            <X size={20} />
                        </button>

                        {analyzing && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="font-bold">Analyzing Crop...</p>
                            </div>
                        )}
                    </div>

                    {/* Results */}
                    {result && (
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex-1 animate-in slide-in-from-bottom-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{result.disease}</h2>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">{result.confidence} Match</span>
                                        <span>•</span>
                                        <span>{result.severity}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-green-600" /> Treatment
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
                                        {result.treatment}
                                    </p>
                                </div>

                                <Button className="w-full" variant="primary">
                                    Find Medicine in Market
                                </Button>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => setShowChat(true)}
                                >
                                    <MessageSquare className="mr-2" size={18} /> Ask Expert Advice
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Chat Modal */}
                    {showChat && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
                            <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl h-[80vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom-20">
                                <div className="p-4 border-b flex justify-between items-center bg-green-50 rounded-t-3xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <MessageSquare size={16} className="text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">KisanAI Expert</h3>
                                            <p className="text-xs text-green-600">Online</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowChat(false)} className="p-2 hover:bg-black/5 rounded-full">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {chatHistory.length === 0 && (
                                        <div className="text-center text-gray-400 mt-10">
                                            <p>Ask anything about {result?.disease}...</p>
                                        </div>
                                    )}
                                    {chatHistory.map((msg, idx) => (
                                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user'
                                                ? 'bg-green-600 text-white rounded-tr-none'
                                                : 'bg-gray-100 text-gray-800 rounded-tl-none'
                                                }`}>
                                                <p className="text-sm">{msg.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {isChatLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 border-t">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={chatMessage}
                                            onChange={(e) => setChatMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                            placeholder="Type your question..."
                                            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                        <Button
                                            variant="primary"
                                            className="w-12 h-10 flex items-center justify-center p-0"
                                            onClick={handleSendMessage}
                                            disabled={isChatLoading}
                                        >
                                            <Send size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
