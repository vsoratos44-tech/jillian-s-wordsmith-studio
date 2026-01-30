import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { CTASection } from "@/components/home/CTASection";
import { usePageMeta } from "@/hooks/use-page-meta";

const HOME_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jillian Whitlow Consulting",
  serviceType: [
    "LinkedIn ghostwriting",
    "Content strategy",
    "Thought leadership development",
  ],
};

const Index = () => {
  usePageMeta({
    title: "Jillian Whitlow Consulting | LinkedIn Ghostwriting",
    description:
      "JW Ghostwriting & Content Strategy for founders who are too busy to post but too smart to sound generic. Build social authority on LinkedIn and generate revenue—without becoming a content creator.",
    canonicalPath: "/",
    jsonLd: HOME_JSONLD,
  });

  return (
    <Layout>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <ServicesOverview />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
