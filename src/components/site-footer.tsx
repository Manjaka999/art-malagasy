import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", shortLabel: "IG", href: siteConfig.socials.instagram },
  { label: "Facebook", shortLabel: "FB", href: siteConfig.socials.facebook },
  { label: "Pinterest", shortLabel: "P", href: siteConfig.socials.pinterest },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-x pb-8 pt-16 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.65fr_0.65fr_0.8fr] lg:gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Vakoka, retour à l’accueil"
            >
              <span className="grid size-10 place-items-center rounded-full border border-ivory/25 font-display text-2xl transition-colors group-hover:border-ochre group-hover:text-ochre">
                V
              </span>
              <span className="flex flex-col">
                <span className="font-display text-[28px] uppercase leading-none tracking-[0.13em]">
                  Vakoka
                </span>
                <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.34em] text-ivory/45">
                  Art Malagasy
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-[310px] text-sm leading-relaxed text-ivory/60">
              Des pièces uniques, façonnées à la main par des artisans malgaches.
              Une autre façon d’habiter avec l’art, la matière et la mémoire.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, shortLabel, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-ivory/20 text-[9px] font-semibold tracking-[0.08em] text-ivory/70 transition-colors hover:border-ochre hover:bg-ochre hover:text-ink"
                >
                  {shortLabel}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Boutique</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">La maison</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Nous écrire</p>
            <ul className="mt-5 space-y-4 text-[13px] text-ivory/65">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-ivory"
                >
                  <Mail size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ochre" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-start gap-3 transition-colors hover:text-ivory"
                >
                  <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ochre" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ochre" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ochre transition-colors hover:text-ivory"
            >
              Prendre contact
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-ivory/15 pt-6 text-[9px] uppercase tracking-[0.15em] text-ivory/40 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} {siteConfig.legalName}. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors hover:text-ivory">
              Mentions légales
            </Link>
            <Link href="/cgv" className="transition-colors hover:text-ivory">
              CGV
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-ivory">
              Confidentialité
            </Link>
            <Link
              href="/mentions-legales#credits-photographiques"
              className="transition-colors hover:text-ivory"
            >
              Crédits photo
            </Link>
          </div>
          <p className="text-ivory/30">Façonné avec soin · Antananarivo</p>
        </div>

        <div className="mt-10 overflow-hidden" aria-hidden="true">
          <p className="whitespace-nowrap font-display text-[18.5vw] uppercase leading-[0.62] tracking-[0.02em] text-ivory/[0.055]">
            Vakoka
          </p>
        </div>
      </div>
    </footer>
  );
}
