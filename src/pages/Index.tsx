import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CareerTimelineSection } from "@/components/CareerTimelineSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { RecognitionsSection } from "@/components/RecognitionsSection";
import { QuotesSection } from "@/components/QuotesSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { KnowledgePodcastSection } from "@/components/KnowledgePodcastSection";
import { Footer } from "@/components/Footer";
import { AIChatBot } from "@/components/AIChatBot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ImpactSection />
      <CareerTimelineSection />
      <CapabilitiesSection />
      <RecognitionsSection />
      <QuotesSection />
      <ChallengeSection />
      <KnowledgePodcastSection />
      <Footer />
      <AIChatBot />
    </main>
  );
};

export default Index;
