import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const values = [
  {
    number: "01",
    title: "La main avant la machine",
    text: "Chaque pièce est façonnée, tissée ou tournée à la main. Les irrégularités sont la signature du geste, pas un défaut.",
  },
  {
    number: "02",
    title: "Une relation directe",
    text: "Nous travaillons sans intermédiaire avec les ateliers, à des prix convenus en amont et dans la durée.",
  },
  {
    number: "03",
    title: "La matière vivante",
    text: "Bois, soie, raffia, terre : nous choisissons des matières naturelles, traçables et pensées pour vieillir beau.",
  },
];

export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-cream/45 py-20 sm:py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden bg-sand/40">
            <Image
              src="/images/ambiance.jpg"
              alt="Artisan façonnant un objet dans son atelier à Madagascar"
              fill
              sizes="(max-width: 1024px) 86vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-30px] left-0 w-[46%] max-w-[210px] border-[8px] border-cream bg-cream">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/artisan-weaving.jpg"
                alt="Mains d’artisane travaillant un textile"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -right-2 top-6 hidden items-center gap-3 bg-ivory px-4 py-3 shadow-[0_12px_35px_-24px_rgba(31,26,20,0.5)] sm:flex lg:-right-6">
            <span className="font-display text-3xl leading-none">10</span>
            <span className="text-[8px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted">
              années
              <br />
              de rencontres
            </span>
          </div>
          <p className="absolute -left-7 top-1/2 hidden -translate-y-1/2 rotate-180 text-[8px] font-semibold uppercase tracking-[0.24em] text-muted [writing-mode:vertical-rl] lg:block">
            Depuis Antananarivo
          </p>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-terra" />
              <p className="eyebrow text-muted">Notre histoire</p>
            </div>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[42px] leading-[0.97] sm:text-6xl lg:text-7xl">
              Le geste
              <br />
              <span className="italic text-terra">avant l’objet.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-7 max-w-xl space-y-4 text-[14px] leading-relaxed text-muted sm:text-[15px]">
              <p>
                Vakoka est née d’un mot malgache qui signifie « héritage ». Ce
                que l’on reçoit, mais aussi ce que l’on choisit de transmettre.
                Depuis 2016, nous parcourons les hauts plateaux, la côte est et
                le sud de Madagascar à la rencontre de celles et ceux qui
                travaillent la matière.
              </p>
              <p>
                Nous ne cherchons pas à produire plus vite. Nous cherchons la
                juste mesure : un objet qui dure, un prix qui respecte la main
                qui l’a fait, une histoire qui se raconte au fil des années.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-0 border-t border-line">
            {values.map((value, index) => (
              <Reveal key={value.number} delay={0.08 * index}>
                <div className="grid grid-cols-[36px_1fr] gap-4 border-b border-line py-5">
                  <span className="font-display text-lg text-terra">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {value.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link href="/notre-histoire" className="btn-outline group">
                Lire notre histoire
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <div>
                <p className="font-display text-xl italic">Miora & Hery</p>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Fondateurs de Vakoka
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
