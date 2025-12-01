import {
  Header,
  HeroSection,
  StatsSection,
  FeaturesSection,
  AppShowcaseSection, // Added AppShowcaseSection
  HowItWorksSection,
  MobileAppSection,
  TechnologySection,
  CTASection,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <Header />
      <main className="relative z-10 pt-16">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <AppShowcaseSection /> {/* Rendered AppShowcaseSection */}
        <HowItWorksSection />
        <MobileAppSection />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
