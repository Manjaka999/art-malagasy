import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { homeFaqItems } from "@/lib/faq";

export function HomeFaq() {
  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-terra" />
              <p className="eyebrow text-muted">Questions fréquentes</p>
            </div>
            <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
              Avant de
              <br />
              <span className="italic text-terra">choisir.</span>
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Une hésitation sur une pièce, une livraison ou un projet sur mesure
              ? Nous sommes là.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] link-underline"
            >
              Nous écrire
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/faq"
              className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              Toutes les questions
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <FaqAccordion items={homeFaqItems} />
        </Reveal>
      </div>
    </section>
  );
}
