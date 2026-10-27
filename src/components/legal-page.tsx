import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro} />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-16 xl:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted/60">
              Sommaire
            </p>
            <nav className="mt-4 border-t border-line">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#${slugify(section.title)}`}
                  className="flex items-start gap-3 border-b border-line py-2.5 text-[11px] leading-relaxed text-muted transition-colors hover:text-ink"
                >
                  <span className="mt-0.5 text-[8px] tabular-nums text-muted/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
            <p className="mt-5 text-[10px] leading-relaxed text-muted">
              Dernière mise à jour : {updated}
            </p>
            <p className="mt-3 text-[10px] leading-relaxed text-muted">
              Une question ?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ink underline decoration-line underline-offset-2"
              >
                {siteConfig.email}
              </a>
            </p>
          </aside>

          <div className="max-w-2xl">
            {sections.map((section, index) => (
              <Reveal key={section.title}>
                <article
                  id={slugify(section.title)}
                  className="scroll-mt-28 border-b border-line py-7 first:pt-0 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[9px] tabular-nums text-terra">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-3xl leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 pl-8 text-[13px] leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-3 space-y-2 pl-8">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 text-[13px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.62em] before:size-1 before:rounded-full before:bg-terra"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-outline">
                Nous contacter
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 self-center text-[9px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft size={13} />
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
