import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section className="border-t border-line/70 py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-terra" />
                <p className="eyebrow text-muted">Sélection de la maison</p>
              </div>
              <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl lg:text-7xl">
                Les pièces
                <br />
                <span className="italic text-terra">qui nous habitent.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/boutique"
              className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em]"
            >
              Voir toute la collection
              <span className="grid size-9 place-items-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-terra group-hover:bg-terra group-hover:text-ivory">
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <Reveal key={product.slug} delay={(index % 4) * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex items-center justify-center gap-3 text-center text-[9px] uppercase tracking-[0.18em] text-muted">
          <span className="h-px w-8 bg-line" />
          Chaque pièce est signée et accompagnée de son certificat
          <span className="h-px w-8 bg-line" />
        </Reveal>
      </div>
    </section>
  );
}
