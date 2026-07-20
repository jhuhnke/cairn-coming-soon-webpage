import { FeatureBar } from "@/components/landing/FeatureBar";
import { Hero } from "@/components/landing/Hero";
import { MissionSection } from "@/components/landing/MissionSection";
import { PursuitsSection } from "@/components/landing/PursuitsSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { ScrollDepthTracker } from "@/components/analytics/ScrollDepthTracker";

export default function HomePage() {
  return (
    <>
      <PageViewTracker />
      <ScrollDepthTracker />
      <Header />

      <main>
        <Hero />
        <FeatureBar />
        <MissionSection />
        <PursuitsSection />
        <WaitlistSection />

        
      </main>

      <Footer />
    </>
  );
}