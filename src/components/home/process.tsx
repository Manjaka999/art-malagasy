import { Compass, Hammer, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Choisir",
    text: "Parcourez les collections et découvrez l’histoire de chaque pièce, son atelier, sa matière et ses dimensions.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Façonner",
    text: "Votre commande est transmise directement à l’atelier. La pièce est préparée, contrôlée et signée à la main.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Recevoir",
    text: "Elle voyage dans un emballage protecteur, accompagnée de son certificat et d’un mot de l’artisan.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-terra" />
                <p className="eyebrow text-muted">Le parcours d’une pièce</p>
              </div>
              <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
                Du geste
                <br />
                <span className="italic text-terra">à votre intérieur.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-sm leading-relaxed text-muted lg:ml-auto">
              Nous avons pensé chaque étape pour que la pièce arrive entre vos
              mains dans les meilleures conditions, sans jamais perdre le fil de
              son histoire.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="group relative border-b border-line py-7 sm:border-b-0 sm:border-r sm:px-7 sm:py-8 sm:last:border-r-0 lg:px-10">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl leading-none text-terra/80">
                      {step.number}
                    </span>
                    <span className="grid size-11 place-items-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-terra group-hover:bg-terra group-hover:text-ivory">
                      <Icon size={20} strokeWidth={1.3} />
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
