import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CareerTimelineSection } from "@/components/CareerTimelineSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { RecognitionsSection } from "@/components/RecognitionsSection";
import { QuotesSection } from "@/components/QuotesSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { PodcastSection } from "@/components/PodcastSection";
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
      <PublicationsSection />
      <PodcastSection />
      <Footer />
      <AIChatBot />
    </main>
  );
};

export default Index;
