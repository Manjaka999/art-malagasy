import { Check } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";
import { Reveal } from "@/components/reveal";

const perks = [
  "Les nouvelles pièces en avant-première",
  "Des récits d’ateliers et de matières",
  "Les invitations aux ventes privées",
];

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-ivory sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 size-[480px] -translate-y-1/2 rounded-full border border-ivory/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/2 size-[330px] -translate-y-1/2 rounded-full border border-ivory/[0.07]"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute -bottom-10 left-0 select-none font-display text-[20vw] leading-none text-ivory/[0.035]"
        aria-hidden="true"
      >
        Vakoka
      </p>

      <div className="container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-ochre" />
              <p className="eyebrow text-ivory/50">La lettre Vakoka</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-[42px] leading-[0.98] sm:text-6xl">
              Les nouvelles pièces,
              <br />
              <span className="italic text-ochre">avant tout le monde.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/55">
              Une lettre lente, deux fois par mois : les pièces qui arrivent à
              l’atelier, les mains qui les façonnent et les histoires qui les
              accompagnent.
            </p>
            <ul className="mt-6 space-y-2">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2.5 text-[11px] text-ivory/65"
                >
                  <span className="grid size-4 place-items-center rounded-full border border-ochre/60 text-ochre">
                    <Check size={9} strokeWidth={2.5} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-ivory/15 bg-ivory/[0.035] p-6 sm:p-8">
            <p className="font-display text-2xl">Recevoir la prochaine lettre</p>
            <p className="mt-1.5 text-xs text-ivory/45">
              Rejoignez les 2 400 personnes qui suivent la maison.
            </p>
            <div className="mt-6">
              <NewsletterForm tone="dark" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
