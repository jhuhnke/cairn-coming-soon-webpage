import { FeatureCard } from "@/components/landing/FeatureCard";
import { Container } from "@/components/ui/Container";
import { features } from "@/data/features";

export function FeatureBar() {
  return (
    <section
      id="product"
      className="bg-[radial-gradient(circle_at_top,var(--cairn-night-soft),var(--cairn-night)_72%)] py-14 text-white md:py-16"
    >
      <h2 id="features-heading" className="sr-only">
        Cairn product features
      </h2>

      <Container>
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={[
                "relative",
                index > 0
                  ? "lg:before:absolute lg:before:-left-4 lg:before:top-4 lg:before:h-[calc(100%-2rem)] lg:before:w-px lg:before:bg-white/10"
                  : "",
              ].join(" ")}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}