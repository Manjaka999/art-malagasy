"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { categories, products } from "@/lib/products";
import { categoryHref, formatPrice } from "@/lib/utils";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const close = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 120);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return products
      .filter((product) =>
        [
          product.name,
          product.categoryLabel,
          product.artisan,
          product.material,
          product.shortDescription,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
      .slice(0, 6);
  }, [query]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    close();
    router.push(`/boutique?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100]">
          <motion.button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-ink/55 backdrop-blur-[3px]"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Fermer la recherche"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Rechercher dans la boutique"
            className="relative max-h-[92svh] overflow-y-auto border-b border-line bg-ivory shadow-2xl"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container-x py-6 sm:py-9">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-muted">Rechercher</p>
                <button
                  type="button"
                  onClick={close}
                  className="grid size-10 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
                  aria-label="Fermer la recherche"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <form onSubmit={submit} className="mt-5 flex items-center gap-4 border-b border-ink/20 pb-4">
                <Search size={24} strokeWidth={1.2} className="shrink-0 text-terra" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Un masque, un lamba, une matière…"
                  className="w-full bg-transparent font-display text-3xl italic outline-none placeholder:text-muted/40 sm:text-4xl lg:text-5xl"
                  aria-label="Votre recherche"
                />
              </form>

              <div className="mt-7">
                {query.trim() === "" ? (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                      Explorer par matière
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={categoryHref(category.slug)}
                          onClick={close}
                          className="rounded-full border border-ink/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {products.slice(0, 3).map((product) => (
                        <Link
                          key={product.slug}
                          href={`/boutique/${product.slug}`}
                          onClick={close}
                          className="group flex items-center gap-4 border-t border-line pt-3"
                        >
                          <div className="relative size-16 shrink-0 overflow-hidden bg-cream">
                            <Image
                              src={product.image}
                              alt={product.alt}
                              fill
                              sizes="64px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <p className="font-display text-xl leading-tight">
                              {product.name}
                            </p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted">
                              {product.categoryLabel}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                      {results.length} résultat{results.length > 1 ? "s" : ""}
                    </p>
                    <div className="mt-3 divide-y divide-line">
                      {results.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/boutique/${product.slug}`}
                          onClick={close}
                          className="group flex items-center gap-4 py-3.5 sm:gap-6"
                        >
                          <div className="relative h-[74px] w-16 shrink-0 overflow-hidden bg-cream">
                            <Image
                              src={product.image}
                              alt={product.alt}
                              fill
                              sizes="64px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-display text-xl leading-tight sm:text-2xl">
                              {product.name}
                            </p>
                            <p className="mt-1 truncate text-[10px] uppercase tracking-[0.15em] text-muted">
                              {product.categoryLabel} · {product.artisan}
                            </p>
                          </div>
                          <span className="text-sm font-medium">
                            {formatPrice(product.price)}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="hidden text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                          />
                        </Link>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={submit}
                      className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-terra link-underline"
                    >
                      Voir tous les résultats
                    </button>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <p className="font-display text-3xl italic text-muted">
                      Aucune pièce ne correspond à « {query} ».
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Essayez « bois », « soie », « panier » ou « argent ».
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
