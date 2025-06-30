import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KisanAI - India's First AI-Powered Agricultural Assistant",
  description: "Empowering 100+ million Indian farmers with instant crop disease detection, multilingual AI chatbot, weather forecasts, and mandi prices through Telegram. Built for YUKTI AICTE Hackathon 2025.",
  keywords: ["KisanAI", "AI farming", "crop disease detection", "agricultural chatbot", "farmer assistance", "YUKTI", "AICTE", "Indian agriculture", "Telegram bot"],
  authors: [{ name: "KisanAI Team" }],
  openGraph: {
    title: "KisanAI - AI-Powered Farming Assistant",
    description: "Transform your farming with AI-powered crop disease detection and expert agricultural advice in your language",
    url: "https://kisanai.in",
    siteName: "KisanAI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanAI - AI for Farmers",
    description: "Instant crop disease detection & agricultural guidance for Indian farmers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Google Translate Scripts */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'hi,bn,te,ta,ml,kn,gu,mr,pa,or,as,ur,ne,si,my',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
              
              // Also initialize mobile element if it exists
              if (document.getElementById('google_translate_element_mobile')) {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'hi,bn,te,ta,ml,kn,gu,mr,pa,or,as,ur,ne,si,my',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element_mobile');
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
