import React from 'react';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Send,
    Clock,
    Globe,
    ArrowLeft,
    ExternalLink
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - KisanAI',
    description: 'Get in touch with the KisanAI team. We are here to help Indian farmers with AI-powered agricultural support.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                <img src="/logo.png" alt="KisanAI Logo" className="rounded-lg w-5 h-5 object-contain" />
                            </div>
                            <span className="font-bold text-green-900">KisanAI</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                        We&apos;re here to help! Reach out to us through any of the channels below.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Quick Contact Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">

                        {/* Telegram Bot */}
                        <a
                            href="https://t.me/Kishan_aibot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <Send className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                Telegram Bot
                                <ExternalLink className="w-4 h-4 text-gray-400" />
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">Instant AI assistance for your farming needs</p>
                            <span className="text-blue-600 font-medium">@KisanAIBot</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:kisanai@strivio.world"
                            className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all group"
                        >
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                                <Mail className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600 text-sm mb-3">For inquiries and partnerships</p>
                            <span className="text-green-600 font-medium">kisanai@strivio.world</span>
                        </a>

                        {/* Support Hours */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Support</h3>
                            <p className="text-gray-600 text-sm mb-3">Our AI chatbot is available</p>
                            <span className="text-purple-600 font-medium">24/7 Support</span>
                        </div>
                    </div>

                    {/* Main Contact Section */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Left Column - Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                            <div className="space-y-6">
                                {/* About Section */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                                    <h3 className="font-bold text-gray-900 mb-3">About KisanAI</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        KisanAI is India&apos;s first AI-powered agricultural assistant, built for the
                                        YUKTI AICTE Hackathon 2025. We&apos;re on a mission to empower 100+ million
                                        Indian farmers with cutting-edge AI technology.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                                    <h3 className="font-bold text-gray-900 mb-4">Contact Details</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Email</p>
                                                <a href="mailto:kisanai@strivio.world" className="text-gray-600 hover:text-green-600 transition-colors">
                                                    kisanai@strivio.world
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Send className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Telegram</p>
                                                <a href="https://t.me/Kishan_aibot" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    @KisanAIBot
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Globe className="w-5 h-5 text-purple-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Website</p>
                                                <a href="https://kishanai.strivio.world" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                                                    kishanai.strivio.world
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Project Info */}
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                                    <h3 className="font-bold text-gray-900 mb-2">🏆 YUKTI AICTE Hackathon 2025</h3>
                                    <p className="text-gray-700 text-sm">
                                        KisanAI is a proud participant in the YUKTI Innovation Challenge by AICTE,
                                        focused on solving real agricultural challenges faced by Indian farmers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - FAQ */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">How do I use KisanAI?</h3>
                                    <p className="text-gray-600 text-sm">
                                        Simply open Telegram and search for @KisanAIBot. Start a chat and send photos of your
                                        crops for disease detection, or ask agricultural questions in your preferred language.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">Is KisanAI free to use?</h3>
                                    <p className="text-gray-600 text-sm">
                                        Yes! KisanAI is completely free for all farmers. We believe in accessible
                                        technology for agriculture.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">What languages are supported?</h3>
                                    <p className="text-gray-600 text-sm">
                                        KisanAI supports 15+ Indian languages including Hindi, Bengali, Telugu, Tamil,
                                        Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">How accurate is disease detection?</h3>
                                    <p className="text-gray-600 text-sm">
                                        Our AI achieves 85%+ accuracy in detecting common crop diseases. For best results,
                                        take clear photos of affected plant parts in good lighting.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">Can I get mandi prices for my area?</h3>
                                    <p className="text-gray-600 text-sm">
                                        Yes! Share your location or type your district name, and we&apos;ll show real-time
                                        market prices from nearby mandis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Start Farming Smarter?</h2>
                        <p className="text-green-100 mb-6 max-w-xl mx-auto">
                            Join thousands of farmers already using KisanAI for better yields and smarter decisions.
                        </p>
                        <a
                            href="https://t.me/Kishan_aibot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors"
                        >
                            <Send className="w-5 h-5" />
                            Start Using KisanAI
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
