"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { SearchOverlay } from "@/components/search-overlay";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, hydrated, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="relative z-40 bg-ink text-ivory">
        <div className="container-x flex h-9 items-center justify-between text-[8px] font-medium uppercase tracking-[0.2em] sm:text-[9px]">
          <span className="hidden sm:block">Fait main à Madagascar</span>
          <span className="truncate">
            Livraison offerte dès 180 € · Retours sous 14 jours
          </span>
          <span className="hidden sm:block">Misaotra · Depuis 2016</span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink/10 bg-ivory/92 backdrop-blur-xl"
            : "border-b border-transparent bg-ivory",
        )}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Vakoka, retour à l’accueil"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid size-9 place-items-center rounded-full border border-ink/25 font-display text-xl leading-none transition-colors duration-300 group-hover:border-terra group-hover:bg-terra group-hover:text-ivory">
              V
            </span>
            <span className="flex flex-col">
              <span className="font-display text-[25px] uppercase leading-none tracking-[0.13em]">
                Vakoka
              </span>
              <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.34em] text-muted">
                Art Malagasy
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-terra transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="group hidden h-10 items-center gap-2.5 rounded-full border border-transparent px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:border-ink/15 hover:text-ink md:flex"
              aria-label="Rechercher une pièce"
            >
              <Search size={16} strokeWidth={1.6} />
              <span className="hidden xl:inline">Rechercher</span>
              <kbd className="hidden rounded border border-line px-1.5 py-0.5 text-[8px] font-medium tracking-normal text-muted/70 xl:inline">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid size-10 place-items-center text-ink md:hidden"
              aria-label="Rechercher une pièce"
            >
              <Search size={18} strokeWidth={1.6} />
            </button>

            <button
              type="button"
              onClick={openCart}
              className="group flex h-10 items-center gap-2 rounded-full border border-ink/20 pl-3.5 pr-1.5 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              aria-label={`Ouvrir le panier, ${hydrated ? count : 0} article${
                hydrated && count > 1 ? "s" : ""
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.7} />
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] sm:inline">
                Panier
              </span>
              <motion.span
                key={hydrated ? count : 0}
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
                className="grid size-7 place-items-center rounded-full bg-ink text-[9px] font-semibold text-ivory transition-colors group-hover:bg-ivory group-hover:text-ink"
              >
                {hydrated ? count : 0}
              </motion.span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-10 place-items-center text-ink lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-ink text-ivory lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container-x flex h-[74px] shrink-0 items-center justify-between border-b border-ivory/15">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="grid size-9 place-items-center rounded-full border border-ivory/30 font-display text-xl">
                  V
                </span>
                <span className="font-display text-[25px] uppercase tracking-[0.13em]">
                  Vakoka
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-ivory/20"
                aria-label="Fermer le menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="container-x flex flex-1 flex-col justify-between overflow-y-auto py-8">
              <nav aria-label="Navigation mobile">
                <ul>
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.18 + index * 0.06,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border-b border-ivory/12"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-4"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="text-[9px] tabular-nums text-ivory/40">
                            0{index + 1}
                          </span>
                          <span className="font-display text-[38px] leading-none">
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.3}
                          className="text-ivory/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ivory"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 border-t border-ivory/15 pt-6"
              >
                <p className="eyebrow text-ivory/45">Maison Vakoka</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-block font-display text-2xl"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-2 text-xs text-ivory/55">{siteConfig.address}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
