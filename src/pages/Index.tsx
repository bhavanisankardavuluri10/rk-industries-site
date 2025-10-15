import { HeroSection } from '@/components/HeroSection';
import { ProblemSolution } from '@/components/ProblemSolution';
import { ProductShowcase } from '@/components/ProductShowcase';
import { SustainabilityTimeline } from '@/components/SustainabilityTimeline';
import { WhyChooseRK } from '@/components/WhyChooseRK';
import { ImpactStats } from '@/components/ImpactStats';
import { CTASection } from '@/components/CTASection';
import { ManufacturingVideo } from '@/components/ManufacturingVideo';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <ProductShowcase />
      <SustainabilityTimeline />
      <WhyChooseRK />
      <ImpactStats />
      <CTASection />
      <ManufacturingVideo />
      <Footer />
    </main>
  );
};

export default Index;
