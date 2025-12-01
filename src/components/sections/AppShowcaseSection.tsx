import React from 'react';
import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { Smartphone } from 'lucide-react';

const screenshots = [
    {
        src: '/mockups/onboarding-and-profile.png',
        alt: 'Easy Onboarding & Profile Setup',
        title: 'Easy Setup',
        description: 'Get started in minutes with your language'
    },
    {
        src: '/mockups/marketplace.png',
        alt: 'Digital Marketplace',
        title: 'Mandi Prices',
        description: 'Real-time market rates for your crops'
    },
    {
        src: '/mockups/community-and-services.png',
        alt: 'Community & Services',
        title: 'Community',
        description: 'Connect with experts and other farmers'
    },
    {
        src: '/mockups/mobile-application-mockup.png',
        alt: 'Crop Disease Detection',
        title: 'Crop Doctor',
        description: 'AI-powered disease detection'
    }
];

export const AppShowcaseSection: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="accent" className="mb-4">
                        <Smartphone className="w-3 h-3 mr-1" /> App Interface
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4">
                        Designed for <span className="text-[var(--primary)]">Simplicity</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Experience an intuitive interface built specifically for farmers. Easy to navigate, works in low network, and speaks your language.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Gradient Masks for Scroll Hint */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

                    <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
                        {screenshots.map((shot, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center group"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-gray-900 aspect-[9/19] transition-transform duration-300 group-hover:-translate-y-2">
                                    {/* Phone Frame Elements */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>

                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 280px, 320px"
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                                        <h3 className="text-xl font-bold mb-2">{shot.title}</h3>
                                        <p className="text-sm text-gray-200">{shot.description}</p>
                                    </div>
                                </div>

                                <div className="text-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="font-bold text-gray-900">{shot.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
