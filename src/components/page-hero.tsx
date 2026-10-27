import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  caption,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-cream/45",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full border border-ink/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-8 size-[260px] rounded-full border border-ink/[0.06]"
        aria-hidden="true"
      />

      <div
        className={cn(
          "container-x relative grid items-end gap-10 pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20",
          image ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-1",
        )}
      >
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-terra" />
              <p className="eyebrow text-muted">{eyebrow}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-[52px] leading-[0.94] tracking-[-0.02em] sm:text-[70px] lg:text-[88px]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          )}
        </div>

        {image && (
          <Reveal delay={0.18} className="relative">
            <div className="relative aspect-[5/4] overflow-hidden bg-cream">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            {caption && (
              <div className="absolute -bottom-4 left-4 max-w-[220px] border border-line bg-ivory px-4 py-3 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted sm:left-6">
                {caption}
              </div>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
