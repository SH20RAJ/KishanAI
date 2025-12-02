'use client';

import React, { useEffect } from 'react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export const LanguageSwitcher = () => {
    useEffect(() => {
        // Function to initialize Google Translate
        const initGoogleTranslate = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'hi,bn,te,ta,ml,kn,gu,mr,pa,or,as,ur,ne,si,my',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    'google_translate_element_modal'
                );
            }
        };

        // Check if script is already loaded
        if (window.google && window.google.translate) {
            initGoogleTranslate();
        } else {
            // If not loaded, we might need to wait or it might be initialized by the global callback
            // However, the global callback in layout.tsx targets specific IDs.
            // We are adding a new ID 'google_translate_element_modal', so we need to manually trigger it
            // or ensure the global script picks it up.

            // Since the global script is already running, we can try to hook into it or just poll/wait.
            // A simple approach is to retry a few times or just run it if available.

            // Let's try to set a timeout to check again, as the script is async
            const checkInterval = setInterval(() => {
                if (window.google && window.google.translate) {
                    initGoogleTranslate();
                    clearInterval(checkInterval);
                }
            }, 500);

            return () => clearInterval(checkInterval);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div id="google_translate_element_modal" className="w-full flex justify-center"></div>
            <p className="text-xs text-gray-500 mt-2">Select your preferred language</p>
        </div>
    );
};
