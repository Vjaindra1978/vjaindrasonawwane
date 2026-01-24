import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CareerTimelineSection } from "@/components/CareerTimelineSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { RecognitionsSection } from "@/components/RecognitionsSection";
import { InsightsPublicationsSection } from "@/components/InsightsPublicationsSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { Footer } from "@/components/Footer";
import { AIChatBot } from "@/components/AIChatBot";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ImpactSection />
      <CareerTimelineSection />
      <CapabilitiesSection />
      <SkillsSection />
      <RecognitionsSection />
      <InsightsPublicationsSection />
      <ChallengeSection />
      <Footer />
      <AIChatBot />
      <BackToTop />
    </main>
  );
};

export default Index;
