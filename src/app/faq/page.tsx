import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { faqGroups } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Commandes, livraison, retours, authenticité et entretien des pièces : toutes les réponses de l’atelier Vakoka.",
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Questions fréquentes"
        title={
          <>
            Tout ce qu’il faut savoir
            <br />
            <span className="italic text-terra">avant de choisir.</span>
          </>
        }
        description="Commande, livraison, authenticité, entretien : nous avons rassemblé les questions que l’on nous pose le plus souvent. Et si la vôtre n’y figure pas, l’atelier vous répond directement."
      />

      <section className="pb-20 pt-10 sm:pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16 xl:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted/60">
              Sommaire
            </p>
            <nav className="mt-4 border-t border-line">
              {faqGroups.map((group, index) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="group flex items-center justify-between gap-3 border-b border-line py-3 text-xs text-muted transition-colors hover:text-ink"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[9px] tabular-nums text-muted/50">
                      0{index + 1}
                    </span>
                    {group.title}
                  </span>
                  <ArrowRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>

            <div className="mt-8 hidden bg-cream/60 p-5 lg:block">
              <p className="font-display text-2xl leading-tight">
                Une autre question ?
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">
                Écrivez à l’atelier, nous répondons sous 24h ouvrées.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-[9px] font-semibold uppercase tracking-[0.14em] underline decoration-line underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </div>
          </aside>

          <div className="space-y-14 sm:space-y-16">
            {faqGroups.map((group, index) => (
              <Reveal key={group.id}>
                <section id={group.id} className="scroll-mt-28">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-terra">
                        0{index + 1} — {group.intro}
                      </p>
                      <h2 className="mt-2 font-display text-[36px] leading-none sm:text-[44px]">
                        {group.title}
                      </h2>
                    </div>
                  </div>
                  <FaqAccordion
                    className="mt-6"
                    items={group.items}
                    defaultOpen={0}
                  />
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="flex flex-col items-start justify-between gap-5 border border-line bg-cream/40 p-6 sm:flex-row sm:items-center sm:p-8">
                <div>
                  <p className="font-display text-3xl">Vous n’avez pas trouvé ?</p>
                  <p className="mt-1 text-xs text-muted">
                    L’atelier vous répond personnellement, sous 24h ouvrées.
                  </p>
                </div>
                <Link href="/contact" className="btn-dark shrink-0">
                  Nous contacter
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
