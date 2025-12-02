'use client';

import React from 'react';

export default function VideoSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        See KisanAI in Action
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Watch how KisanAI is transforming agriculture for Indian farmers with AI-powered solutions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            src="https://www.youtube.com/embed/LZD7YKC1HTs?list=PLfAV8wPWROFDxE-8GvjT4yenYggxj2uMR&index=1"
                            title="KisanAI Pitch Video"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
