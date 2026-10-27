"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type CategorySlug } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortOption = "selection" | "price-asc" | "price-desc" | "name";

type ProductCatalogProps = {
  initialCategory?: string;
  initialQuery?: string;
};

const sortLabels: Record<SortOption, string> = {
  selection: "Notre sélection",
  "price-asc": "Prix croissant",
  "price-desc": "Prix décroissant",
  name: "Nom, A → Z",
};

export function ProductCatalog({
  initialCategory,
  initialQuery = "",
}: ProductCatalogProps) {
  const startingCategory = categories.some(
    (category) => category.slug === initialCategory,
  )
    ? (initialCategory as CategorySlug)
    : "all";
  const [category, setCategory] = useState<CategorySlug | "all">(
    startingCategory,
  );
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>("selection");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const list = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        [
          product.name,
          product.categoryLabel,
          product.artisan,
          product.material,
          product.region,
          product.shortDescription,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });

    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name, "fr");
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [category, query, sort]);

  const reset = () => {
    setCategory("all");
    setQuery("");
    setSort("selection");
  };

  return (
    <section className="pb-24 pt-4 sm:pb-32">
      <div className="container-x">
        <div className="sticky top-[74px] z-30 -mx-5 border-y border-line bg-ivory/92 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors",
                  category === "all"
                    ? "bg-ink text-ivory"
                    : "text-muted hover:bg-cream hover:text-ink",
                )}
              >
                Tout ({products.length})
              </button>
              {categories.map((item) => {
                const itemCount = products.filter(
                  (product) => product.category === item.slug,
                ).length;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setCategory(item.slug)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      category === item.slug
                        ? "bg-ink text-ivory"
                        : "text-muted hover:bg-cream hover:text-ink",
                    )}
                  >
                    {item.name} ({itemCount})
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <label className="relative block flex-1 xl:w-[230px] xl:flex-none">
                <span className="sr-only">Rechercher dans la boutique</span>
                <Search
                  size={15}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Rechercher une pièce…"
                  className="h-10 w-full border border-line bg-transparent pl-9 pr-8 text-[11px] outline-none transition-colors placeholder:text-muted/55 focus:border-terra"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-ink"
                    aria-label="Effacer la recherche"
                  >
                    <X size={13} />
                  </button>
                )}
              </label>

              <label className="relative flex h-10 items-center gap-2 border border-line px-3">
                <SlidersHorizontal size={14} strokeWidth={1.5} className="text-muted" />
                <span className="sr-only">Trier les pièces</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortOption)}
                  className="h-full cursor-pointer appearance-none bg-transparent pr-5 text-[10px] font-semibold uppercase tracking-[0.1em] outline-none"
                >
                  {Object.entries(sortLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 text-[8px] text-muted">
                  ▾
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-baseline justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            {filtered.length} pièce{filtered.length > 1 ? "s" : ""} disponible
            {filtered.length > 1 ? "s" : ""}
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.14em] text-muted sm:block">
            Chaque pièce est unique
          </p>
        </div>

        {filtered.length > 0 ? (
          <motion.div
            layout
            className="mt-7 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 flex flex-col items-center border border-line px-6 py-20 text-center"
          >
            <p className="font-display text-4xl italic">Aucune pièce trouvée.</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Essayez une autre matière, un autre nom d’artisan ou explorez
              l’ensemble de la collection.
            </p>
            <button type="button" onClick={reset} className="btn-outline mt-7">
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
