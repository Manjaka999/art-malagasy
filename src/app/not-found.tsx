import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden py-20">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 font-display text-[34vw] leading-none text-ink/[0.035] select-none"
        aria-hidden="true"
      >
        404
      </div>
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-terra">Erreur 404</p>
          <h1 className="mt-5 font-display text-[56px] leading-[0.94] tracking-[-0.02em] sm:text-[80px]">
            Cette page s’est
            <br />
            <span className="italic text-terra">perdue en chemin.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
            Le lien est peut-être ancien, la pièce a trouvé son foyer, ou
            l’adresse contient une petite erreur. Revenez à l’atelier : il reste
            beaucoup à découvrir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/boutique" className="btn-dark">
              Découvrir la boutique
              <ArrowRight size={15} />
            </Link>
            <Link href="/" className="btn-outline">
              Retour à l’accueil
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
            <Link href="/artisans" className="transition-colors hover:text-ink">
              Les artisans
            </Link>
            <Link href="/faq" className="transition-colors hover:text-ink">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
