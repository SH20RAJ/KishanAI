'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Check, ChevronRight, Languages, User, MapPin } from 'lucide-react';

const languages = [
    { id: 'en', name: 'English', native: 'English' },
    { id: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { id: 'mr', name: 'Marathi', native: 'मराठी' },
    { id: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
    { id: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
];

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [selectedLang, setSelectedLang] = useState('en');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Finish onboarding
            router.push('/application/home');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Progress Bar */}
            <div className="h-1 bg-gray-100">
                <div
                    className="h-full bg-[var(--primary)] transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                ></div>
            </div>

            <div className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">

                {/* Step 1: Language */}
                {step === 1 && (
                    <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8 mt-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Languages className="w-8 h-8 text-green-600" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose Language</h1>
                            <p className="text-gray-500">Select your preferred language for the app</p>
                        </div>

                        <div className="flex-1 space-y-3">
                            {languages.map((lang) => (
                                <button
                                    key={lang.id}
                                    onClick={() => setSelectedLang(lang.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selectedLang === lang.id
                                            ? 'border-[var(--primary)] bg-green-50'
                                            : 'border-gray-100 hover:border-gray-200'
                                        }`}
                                >
                                    <div className="text-left">
                                        <div className="font-bold text-gray-900">{lang.native}</div>
                                        <div className="text-sm text-gray-500">{lang.name}</div>
                                    </div>
                                    {selectedLang === lang.id && (
                                        <div className="w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Phone Login */}
                {step === 2 && (
                    <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8 mt-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Farmer</h1>
                            <p className="text-gray-500">Enter your mobile number to continue</p>
                        </div>

                        <div className="flex-1">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
                                <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="font-bold text-gray-900">+91</span>
                                    <input
                                        type="tel"
                                        placeholder="98765 43210"
                                        className="flex-1 bg-transparent border-none outline-none font-bold text-lg text-gray-900 placeholder-gray-300"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 text-center">
                                By continuing, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                )}

                {/* Step 3: Profile Details */}
                {step === 3 && (
                    <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8 mt-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Complete Profile</h1>
                            <p className="text-gray-500">Tell us a bit about yourself</p>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-none outline-none font-bold text-lg text-gray-900 placeholder-gray-300 mt-1"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <label className="text-xs font-bold text-gray-500 uppercase">Location / Village</label>
                                <input
                                    type="text"
                                    placeholder="Enter your village"
                                    className="w-full bg-transparent border-none outline-none font-bold text-lg text-gray-900 placeholder-gray-300 mt-1"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Actions */}
                <div className="mt-6">
                    <Button
                        onClick={handleNext}
                        className="w-full h-14 text-lg rounded-xl shadow-lg shadow-green-200"
                        variant="primary"
                    >
                        {step === 3 ? 'Get Started' : 'Continue'} <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

            </div>
        </div>
    );
}
