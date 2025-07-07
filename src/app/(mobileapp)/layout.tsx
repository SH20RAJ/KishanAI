import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KisanAI Mobile - AI-Powered Farming Assistant",
  description: "Complete mobile farming solution with AI crop disease detection, weather forecasts, market prices, and government schemes for Indian farmers.",
  keywords: ["KisanAI", "mobile farming app", "crop disease detection", "agricultural assistant", "farmer app", "Indian agriculture"],
  authors: [{ name: "KisanAI Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#16a34a",
  manifest: "/manifest.json",
  openGraph: {
    title: "KisanAI Mobile - Smart Farming App",
    description: "AI-powered mobile farming assistant for Indian farmers",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MobileAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="h-full">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KisanAI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} antialiased h-full bg-gray-50 font-sans`}
        style={{
          fontFamily: 'var(--font-geist-sans), "Noto Sans Devanagari", Arial, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}