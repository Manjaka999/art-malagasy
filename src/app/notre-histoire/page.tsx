import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Art-Malagasy, l’art malgache façonné à la main. Découvrez notre maison, nos engagements et la relation directe que nous construisons avec les artisans depuis 2016.",
  alternates: {
    canonical: "/notre-histoire",
  },
};

const commitments = [
  {
    number: "01",
    title: "Une rémunération juste",
    text: "Les prix sont convenus en amont avec chaque atelier, sans intermédiaire. Nous privilégions des commandes régulières qui permettent de planifier la production et de vivre du métier.",
  },
  {
    number: "02",
    title: "Des matières responsables",
    text: "Bois issus de filières identifiées, soie sauvage, raffia, jacinthe d’eau et terres locales. Nous limitons les transports et refusons les matières synthétiques.",
  },
  {
    number: "03",
    title: "Une traçabilité réelle",
    text: "Chaque pièce porte le nom de son artisan, sa région et sa matière. Un certificat signé accompagne chaque commande, pour que l’objet ne perde jamais son origine.",
  },
  {
    number: "04",
    title: "La transmission",
    text: "Une partie de nos marges finance l’achat de matières premières et la formation de jeunes apprentis dans les ateliers partenaires.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "La première rencontre",
    text: "Miora et Hery parcourent les ateliers des hauts plateaux et choisissent de travailler avec huit artisans. La première collection de lambas voit le jour.",
  },
  {
    year: "2019",
    title: "L’atelier d’Antananarivo",
    text: "Art-Malagasy ouvre un atelier-boutique à Antanimena. Un lieu pour rencontrer les artisans, comprendre les gestes et préparer les commandes.",
  },
  {
    year: "2022",
    title: "La coopérative de Vatovavy",
    text: "Le collectif de Fanja rejoint la maison. Douze vannières travaillent désormais ensemble, avec un revenu régulier et une école soutenue au village.",
  },
  {
    year: "2026",
    title: "Une maison, 120 mains",
    text: "Art-Malagasy réunit aujourd’hui 120 artisans dans 12 régions. La collection Terre & fibres poursuit ce travail de rencontre, de patience et de transmission.",
  },
];

export default function NotreHistoirePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre histoire"
        title={
          <>
            Nous ne vendons pas des objets.
            <br />
            <span className="italic text-terra">Nous transmettons des gestes.</span>
          </>
        }
        description="Notre nom dit simplement ce que nous faisons : l’art malgache, dans ce qu’il a de vivant et de manuel. Depuis 2016, nous construisons une maison autour de cette évidence."
        image="/images/atelier.jpg"
        imageAlt="Rencontre dans un atelier d’art à Madagascar"
        caption="Antananarivo · Atelier Art-Malagasy"
      />

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-terra" />
                <p className="eyebrow text-muted">Le nom</p>
              </div>
              <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
                Art-Malagasy,
                <br />
                <span className="italic text-terra">l’art, simplement.</span>
              </h2>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display text-[30px] leading-[1.2] sm:text-[38px]">
                Un objet n’est jamais seulement un objet. Il porte le geste de
                celui qui l’a fait, le paysage dont il est né et le temps qu’il a
                fallu pour le façonner.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                <p>
                  Nous avons grandi entre Antananarivo et les hauts plateaux,
                  dans des maisons où les objets se transmettaient plus souvent
                  qu’ils ne s’achetaient. Un lamba posé sur une chaise, un
                  masque accroché au-dessus d’une porte, un bol ébréché que l’on
                  continuait d’utiliser : chacun avait son histoire.
                </p>
                <p>
                  En créant Art-Malagasy, nous avons voulu prolonger ce geste. Pas
                  pour muséifier l’artisanat, mais pour lui donner une place
                  vivante dans les intérieurs d’aujourd’hui. Choisir une pièce
                  malgache, c’est accepter qu’elle ne soit pas parfaitement
                  régulière, qu’elle porte la trace d’une main, qu’elle évolue
                  avec le temps.
                </p>
                <p>
                  Nous travaillons avec des ateliers de taille humaine, dans une
                  relation directe et durable. Nous connaissons les noms, les
                  visages et les contraintes de celles et ceux qui fabriquent.
                  C’est cette proximité qui donne aux pièces leur justesse.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <blockquote className="mt-10 border-l border-terra pl-6">
                <p className="font-display text-2xl italic leading-snug sm:text-3xl">
                  « Tsy ny zavatra no zava-dehibe, fa ny tantara ao ambadiky. »
                </p>
                <footer className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Ce n’est pas l’objet qui compte, mais l’histoire qu’il porte.
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream/45 py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[5/6] overflow-hidden bg-sand/40">
              <Image
                src="/images/collection-vannerie.jpg"
                alt="Paniers tressés à la main dans un atelier malgache"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 max-w-[210px] bg-forest p-5 text-ivory sm:-right-6">
              <p className="font-display text-3xl leading-none">120</p>
              <p className="mt-2 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-ivory/55">
                artisans partenaires dans 12 régions
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-muted">Notre manière de faire</p>
              <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
                Lenteur,
                <br />
                <span className="italic text-terra">justesse, présence.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                <p>
                  Nous ne cherchons pas à produire plus vite. Nous cherchons le
                  bon rythme : celui qui permet à un bois de sécher, à une soie
                  d’être filée, à une terre de reposer avant la cuisson.
                </p>
                <p>
                  Chaque commande est préparée à la main dans notre atelier
                  d’Antananarivo. Nous vérifions la pièce, documentons son
                  origine et l’emballons avec le soin que l’on réserve aux objets
                  fragiles et importants.
                </p>
                <p>
                  Notre rôle est simple : créer les conditions pour que le
                  travail des artisans rencontre ceux qui sauront l’accueillir.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <Link href="/artisans" className="btn-outline group mt-8">
                Rencontrer les artisans
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="engagements" className="py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-terra" />
                  <p className="eyebrow text-muted">Nos engagements</p>
                </div>
                <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
                  Ce à quoi nous
                  <br />
                  <span className="italic text-terra">ne dérogeons pas.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">
                Quatre principes qui guident chaque rencontre, chaque commande et
                chaque pièce qui quitte l’atelier.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <Reveal key={commitment.number} delay={index * 0.06}>
                <article className="grid grid-cols-[48px_1fr] gap-4 border-b border-line py-8 sm:px-8 sm:odd:border-r sm:first:pl-0 sm:last:pr-0">
                  <span className="font-display text-2xl text-terra">
                    {commitment.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl leading-tight">
                      {commitment.title}
                    </h3>
                    <p className="mt-3 max-w-md text-xs leading-relaxed text-muted">
                      {commitment.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-ivory sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-ochre" />
                  <p className="eyebrow text-ivory/45">Notre chemin</p>
                </div>
                <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
                  Dix années
                  <br />
                  <span className="italic text-ochre">de rencontres.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ivory/50">
                Une maison se construit lentement, au rythme des ateliers et des
                saisons.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 border-t border-ivory/15">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <div className="grid gap-4 border-b border-ivory/15 py-6 sm:grid-cols-[120px_1fr_1.2fr] sm:items-start sm:gap-8 sm:py-8">
                  <p className="font-display text-3xl text-ochre">{item.year}</p>
                  <h3 className="font-display text-2xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="max-w-lg text-xs leading-relaxed text-ivory/50">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow text-muted">La suite</p>
            <h2 className="mt-4 max-w-3xl font-display text-[42px] leading-[1.02] sm:text-6xl">
              Le plus beau reste
              <br />
              <span className="italic text-terra">à transmettre.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted">
              Découvrez les pièces qui sont passées entre nos mains, ou venez à
              la rencontre de celles et ceux qui les façonnent.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/boutique" className="btn-dark w-full sm:w-auto">
                Découvrir la boutique
                <ArrowUpRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline w-full sm:w-auto">
                Nous écrire
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
