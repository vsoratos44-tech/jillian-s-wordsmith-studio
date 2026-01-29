import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <ServicesOverview />
      <ProcessSection />
      <ResultsSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
