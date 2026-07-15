import { Hero } from "@/components/landing/Hero";
import { Header } from "@/components/layout/Header";
import { FeatureBar } from "@/components/landing/FeatureBar";
import { MissionSection } from "@/components/landing/MissionSection";
import { PursuitsSection } from "@/components/landing/PursuitsSection";

export default function HomePage() {
  return (
    <main>
      <Header />
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
  );
}