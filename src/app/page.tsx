import { FeatureBar } from "@/components/landing/FeatureBar";
import { Hero } from "@/components/landing/Hero";
import { MissionSection } from "@/components/landing/MissionSection";
import { PursuitsSection } from "@/components/landing/PursuitsSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeatureBar />
        <MissionSection />
        <PursuitsSection />

        <section className="section bg-[var(--cairn-night)] text-white">
          <div className="container">
            <p className="eyebrow">Next section</p>
            <h2 className="mt-4 text-4xl font-semibold">
              Real-time outdoor intelligence.
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}