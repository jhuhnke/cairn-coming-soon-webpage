import type { Feature } from "@/data/features";

type FeatureCardProps = Feature;

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <article className="group flex h-full flex-col items-center px-4 text-center">
      <div
        className={[
          "flex h-16 w-16 items-center justify-center",
          "text-white/90 transition-transform duration-300",
          "group-hover:-translate-y-1",
        ].join(" ")}
      >
        <Icon className="h-14 w-14" />
      </div>

      <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-[240px] text-sm leading-6 text-white/70">
        {description}
      </p>
    </article>
  );
}