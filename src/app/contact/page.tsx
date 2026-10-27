import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur une pièce, une commande sur mesure ou un projet de collaboration ? Écrivez à l’atelier Vakoka à Antananarivo.",
  alternates: {
    canonical: "/contact",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Réponse sous 24h ouvrées",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    note: "Du lundi au vendredi, 9h — 17h",
  },
  {
    icon: MapPin,
    label: "Atelier-boutique",
    value: "Lot II A 45, Antanimena",
    href: undefined,
    note: "Antananarivo 101, Madagascar",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lundi — Vendredi",
    href: undefined,
    note: "9h à 17h (GMT+3), sur rendez-vous",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de votre
            <br />
            <span className="italic text-terra">projet, d’une pièce.</span>
          </>
        }
        description="Une question sur une commande, une envie de sur-mesure, un projet de collaboration ou simplement l’envie de nous connaître : l’atelier vous répond avec attention."
        image="/images/atelier.jpg"
        imageAlt="Atelier Vakoka à Antananarivo"
        caption="Antanimena · Antananarivo"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-terra" />
                <p className="eyebrow text-muted">L’atelier</p>
              </div>
              <h2 className="mt-5 font-display text-[40px] leading-[0.98] sm:text-5xl">
                Une présence,
                <br />
                <span className="italic text-terra">pas un guichet.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                Derrière chaque message, il y a une personne de l’atelier.
                Écrivez-nous en français, en malgache ou en anglais — nous vous
                répondons avec le même soin.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 divide-y divide-line border-y border-line">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <>
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-line text-terra">
                        <Icon size={15} strokeWidth={1.4} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                          {detail.label}
                        </span>
                        <span className="mt-1 block truncate text-sm font-medium">
                          {detail.value}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted">
                          {detail.note}
                        </span>
                      </span>
                    </>
                  );

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="group flex gap-4 py-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label} className="flex gap-4 py-5">
                      {content}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 bg-cream/60 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Une question rapide ?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  La réponse se trouve peut-être déjà dans notre FAQ : délais,
                  entretien, authenticité, retours et commandes sur mesure.
                </p>
                <Link
                  href="/faq"
                  className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-[0.16em] underline decoration-line underline-offset-4 transition-colors hover:text-terra"
                >
                  Consulter la FAQ
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="border border-line bg-ivory p-6 sm:p-9 lg:p-10">
              <p className="eyebrow text-muted">Formulaire</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Dites-nous tout.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Les champs marqués d’un astérisque sont obligatoires.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className="container-x grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Une commande sur mesure",
              text: "Dimensions, teintes, finitions : décrivez votre espace et votre projet. Réponse avec devis sous 48h.",
            },
            {
              title: "Presse & collaborations",
              text: "Dossiers de presse, prêts de pièces, shootings et projets éditoriaux : écrivez à l’atelier.",
            },
            {
              title: "Artisans & coopératives",
              text: "Vous façonnez à Madagascar et souhaitez nous rencontrer ? Envoyez-nous quelques images de votre travail.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="border-t border-ink/20 pt-4">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
