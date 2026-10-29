import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { artisans } from "@/lib/artisans";

export const metadata: Metadata = {
  title: "Les artisans",
  description:
    "Sculpteurs, tisseuses, vannières, céramistes et peintres : rencontrez les artisans malgaches qui façonnent les pièces Art-Malagasy.",
  alternates: {
    canonical: "/artisans",
  },
};

const stats = [
  { value: "120", label: "artisans partenaires" },
  { value: "12", label: "régions" },
  { value: "05", label: "ateliers fondateurs" },
];

export default function ArtisansPage() {
  return (
    <>
      <PageHero
        eyebrow="Les artisans"
        title={
          <>
            Des mains, des noms,
            <br />
            <span className="italic text-terra">des territoires.</span>
          </>
        }
        description="Derrière Art-Malagasy, il n’y a pas une usine mais des ateliers, des familles et des gestes transmis. Voici quelques-unes des personnes avec qui nous construisons la maison, pièce après pièce."
        image="/images/artisan-weaving.jpg"
        imageAlt="Artisane malgache tissant à la main"
        caption="Vakinankaratra · Atelier de tissage"
      />

      <section className="border-b border-line">
        <div className="container-x grid grid-cols-3 divide-x divide-line">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="py-7 text-center sm:py-9">
              <p className="font-display text-4xl leading-none sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[9px]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-x space-y-20 sm:space-y-24 lg:space-y-32">
          {artisans.map((artisan, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={artisan.slug}
                id={artisan.slug}
                className="scroll-mt-28"
              >
                <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16 xl:gap-24">
                  <Reveal
                    className={reversed ? "lg:order-2" : ""}
                    delay={0.04}
                  >
                    <div className="relative">
                      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                        <Image
                          src={artisan.image}
                          alt={artisan.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="object-cover"
                        />
                        <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] backdrop-blur">
                          {String(index + 1).padStart(2, "0")} / 05
                        </span>
                      </div>
                      <div className="absolute -bottom-4 -right-2 hidden border border-line bg-ivory px-5 py-3 sm:block lg:-right-5">
                        <p className="font-display text-2xl leading-none">
                          {artisan.years}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <Reveal>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-terra" />
                        <p className="eyebrow text-muted">
                          {artisan.role} · {artisan.region}
                        </p>
                      </div>
                      <h2 className="mt-4 font-display text-[44px] leading-[0.95] sm:text-[58px]">
                        {artisan.name}
                      </h2>
                    </Reveal>

                    <Reveal delay={0.08}>
                      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {artisan.bio}
                      </p>
                    </Reveal>

                    <Reveal delay={0.12}>
                      <blockquote className="mt-7 border-l border-terra pl-5">
                        <p className="font-display text-2xl italic leading-snug">
                          « {artisan.quote} »
                        </p>
                      </blockquote>
                    </Reveal>

                    <Reveal delay={0.16}>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {artisan.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="border border-line px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/boutique"
                        className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] link-underline"
                      >
                        Voir les pièces de l’atelier
                        <ArrowUpRight size={14} />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-ivory sm:py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full border border-ivory/10"
          aria-hidden="true"
        />
        <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-ivory/45">Artisans & coopératives</p>
              <h2 className="mt-4 max-w-2xl font-display text-[38px] leading-[1.02] sm:text-5xl">
                Vous êtes artisan ou faites partie
                <br />
                <span className="italic text-ochre">d’une coopérative ?</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/55">
                Nous rencontrons régulièrement de nouveaux ateliers à Madagascar.
                Écrivez-nous avec quelques photos de votre travail et l’histoire
                de votre collectif.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="btn bg-ochre text-ink hover:bg-ivory"
            >
              Nous présenter votre atelier
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
