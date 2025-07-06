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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
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
