import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { categories, products } from "@/lib/products";
import { categoryHref, cn } from "@/lib/utils";

const homeCategories = [
  "sculpture",
  "textile",
  "vannerie",
  "ceramique",
  "peinture",
];

export function CollectionsSection() {
  const list = homeCategories
    .map((slug) => categories.find((category) => category.slug === slug))
    .filter((category): category is NonNullable<typeof category> =>
      Boolean(category),
    );

  return (
    <section id="collections" className="py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-terra" />
                <p className="eyebrow text-muted">Nos collections</p>
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-[42px] leading-[0.98] sm:text-6xl lg:text-7xl">
                Quatre matières,
                <br />
                <span className="italic text-terra">mille histoires.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-xs sm:text-right">
              <p className="text-sm leading-relaxed text-muted">
                Chaque collection est le fruit d’une rencontre avec un atelier,
                une région et un geste transmis.
              </p>
              <Link
                href="/boutique"
                className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink link-underline"
              >
                Tout explorer
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[255px] xl:auto-rows-[290px]">
          {list.map((category, index) => {
            const count = products.filter(
              (product) => product.category === category.slug,
            ).length;
            const isLarge = index === 0;

            return (
              <Reveal
                key={category.slug}
                delay={index * 0.06}
                className={cn(
                  isLarge && "col-span-2 row-span-2",
                  !isLarge && "col-span-1",
                )}
              >
                <Link
                  href={categoryHref(category.slug)}
                  className={cn(
                    "group relative block h-full overflow-hidden bg-ink text-ivory",
                    isLarge
                      ? "aspect-[4/5] lg:aspect-auto"
                      : "aspect-[3/4] lg:aspect-auto",
                  )}
                >
                  <Image
                    src={category.image}
                    alt={`Collection ${category.name}`}
                    fill
                    sizes={
                      isLarge
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover opacity-90 transition-all duration-[900ms] ease-out group-hover:scale-[1.045] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/90" />

                  <span className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.16em] text-ivory/50">
                    0{index + 1}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-ivory/55">
                      {count} pièce{count > 1 ? "s" : ""}
                    </p>
                    <h3
                      className={cn(
                        "mt-1 font-display leading-none",
                        isLarge ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
                      )}
                    >
                      {category.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-ivory/65 transition-colors group-hover:text-ivory">
                      <span>Découvrir</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
