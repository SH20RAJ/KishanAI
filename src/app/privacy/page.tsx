import React from 'react';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Mail, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - KisanAI',
    description: 'Learn about how KisanAI collects, uses, and protects your data. We are committed to safeguarding farmer privacy.',
};

export default function PrivacyPage() {
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
            <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg text-green-100 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-green-200 mt-4">Last updated: December 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-green max-w-none">

                        {/* Information We Collect */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Database className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                            </div>
                            <p className="text-gray-600 mb-4">We collect information to provide better services to our farming community:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Account Information:</strong> When you create an account, we collect your name, email, and phone number.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Crop Images:</strong> Photos you upload for disease detection are processed by our AI and may be stored to improve our models.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Location Data:</strong> With your permission, we collect location data to provide weather forecasts and local market prices.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Usage Data:</strong> We collect information about how you use our services to improve the experience.</span>
                                </li>
                            </ul>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Provide accurate crop disease detection and treatment recommendations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Deliver personalized weather forecasts for your region</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Show relevant mandi prices from your local markets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Improve our AI models to better serve the farming community</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Send important agricultural alerts and updates</span>
                                </li>
                            </ul>
                        </div>

                        {/* Data Protection */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Data Protection</h2>
                            </div>
                            <p className="text-gray-600 mb-4">We implement robust security measures to protect your data:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>End-to-end encryption for all sensitive data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Regular security audits and vulnerability assessments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Limited access to personal data within our organization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Compliance with Indian data protection regulations</span>
                                </li>
                            </ul>
                        </div>

                        {/* Your Rights */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                            <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">Access & Portability</h3>
                                    <p className="text-sm text-gray-600">Request a copy of your data at any time</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">Correction</h3>
                                    <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
                                    <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">Opt-out</h3>
                                    <p className="text-sm text-gray-600">Opt-out of marketing communications</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                            <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h2 className="text-2xl font-bold mb-2">Questions About Privacy?</h2>
                            <p className="text-green-100 mb-4">Contact our privacy team for any concerns or requests.</p>
                            <a
                                href="mailto:kisanai@strivio.world"
                                className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                kisanai@strivio.world
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
