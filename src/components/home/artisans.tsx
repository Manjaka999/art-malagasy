import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { artisans } from "@/lib/artisans";

export function ArtisansSection() {
  const highlights = artisans.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-forest py-20 text-ivory sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -right-40 -top-32 size-[520px] rounded-full border border-ivory/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[420px] rounded-full border border-ivory/[0.07]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-ochre" />
                <p className="eyebrow text-ivory/50">Celles et ceux qui font</p>
              </div>
              <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl lg:text-7xl">
                Derrière chaque pièce,
                <br />
                <span className="italic text-ochre">une main.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-sm sm:text-right">
              <p className="text-sm leading-relaxed text-ivory/55">
                Nous travaillons avec 120 artisans dans 12 régions. Pas de
                vitrine anonyme : des noms, des ateliers, des gestes.
              </p>
              <Link
                href="/artisans"
                className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ochre transition-colors hover:text-ivory"
              >
                Rencontrer les artisans
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {highlights.map((artisan, index) => (
            <Reveal key={artisan.slug} delay={index * 0.08}>
              <Link
                href={`/artisans#${artisan.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-forest-soft"
              >
                <Image
                  src={artisan.image}
                  alt={artisan.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute right-4 top-4 grid size-8 place-items-center rounded-full border border-ivory/30 text-ivory/70 transition-colors group-hover:border-ochre group-hover:bg-ochre group-hover:text-ink">
                  <ArrowUpRight size={14} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-ochre">
                    {artisan.role} · {artisan.region}
                  </p>
                  <h3 className="mt-1.5 font-display text-3xl leading-none">
                    {artisan.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-ivory/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    « {artisan.quote} »
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
