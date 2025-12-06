import React from 'react';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import { FileText, CheckCircle, AlertTriangle, Scale, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - KisanAI',
    description: 'Review the terms and conditions for using KisanAI agricultural services and Telegram bot.',
};

export default function TermsPage() {
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
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Please read these terms carefully before using KisanAI services.
                    </p>
                    <p className="text-sm text-blue-200 mt-4">Effective Date: December 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-green max-w-none">

                        {/* Acceptance of Terms */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-gray-600">
                                By accessing or using KisanAI services, including our Telegram bot (@KisanAIBot) and web application,
                                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                            <p className="text-gray-600 mt-4">
                                KisanAI is built for the YUKTI AICTE Hackathon 2025 and is designed to serve Indian farmers with
                                AI-powered agricultural assistance.
                            </p>
                        </div>

                        {/* Services Provided */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">2. Services Provided</h2>
                            </div>
                            <p className="text-gray-600 mb-4">KisanAI provides the following services:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Crop Disease Detection:</strong> AI-powered analysis of crop images to identify diseases and pests</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>AI Chatbot:</strong> Multilingual agricultural guidance and farming advice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Weather Forecasts:</strong> Location-based weather predictions for farming decisions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Mandi Prices:</strong> Real-time market prices from various mandis across India</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Crop Calendar:</strong> Personalized farming schedules and seasonal guidance</span>
                                </li>
                            </ul>
                        </div>

                        {/* User Responsibilities */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                            <p className="text-gray-600 mb-4">As a user of KisanAI, you agree to:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Provide accurate information when registering or using our services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Use our services only for lawful agricultural purposes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Not misuse or attempt to manipulate our AI systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Respect the intellectual property rights of KisanAI</span>
                                </li>
                            </ul>
                        </div>

                        {/* Disclaimer */}
                        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Disclaimer</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                <strong>Important:</strong> While KisanAI strives to provide accurate agricultural advice and disease detection:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Our AI recommendations are for guidance only and should not replace professional agricultural consultation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>We are not liable for crop losses or damages resulting from following our AI recommendations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Weather forecasts and market prices are sourced from third parties and may have inaccuracies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>For serious crop issues, always consult local agricultural experts or Krishi Vigyan Kendras</span>
                                </li>
                            </ul>
                        </div>

                        {/* Intellectual Property */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <p className="text-gray-600">
                                All content, features, and functionality of KisanAI, including but not limited to text, graphics, logos,
                                AI models, and software, are the exclusive property of the KisanAI team and are protected by intellectual
                                property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                            </p>
                        </div>

                        {/* Service Availability */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability</h2>
                            <p className="text-gray-600">
                                We strive to maintain 24/7 availability but cannot guarantee uninterrupted service. We may temporarily
                                suspend access for maintenance, updates, or unforeseen technical issues. We will make reasonable efforts
                                to notify users of planned downtime.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                            <p className="text-gray-600">
                                We may update these Terms of Service from time to time. We will notify users of significant changes through
                                our Telegram bot or website. Continued use of our services after changes constitutes acceptance of the new terms.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                            <p className="text-gray-600">
                                These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes
                                arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                            <FileText className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h2 className="text-2xl font-bold mb-2">Questions About Our Terms?</h2>
                            <p className="text-blue-100 mb-4">Contact us if you have any questions about these terms.</p>
                            <a
                                href="mailto:kisanai@strivio.world"
                                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
