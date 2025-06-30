import {
  Header,
  HeroSection,
  StatsSection,
  FeaturesSection,
  HowItWorksSection,
  MobileAppSection,
  TechnologySection,
  CTASection,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MobileAppSection />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
