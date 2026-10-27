"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    count,
    subtotal,
    shipping,
    total,
    freeShippingThreshold,
    removeItem,
    updateQuantity,
  } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [isOpen, closeCart]);

  const remaining = Math.max(freeShippingThreshold - subtotal, 0);
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[95]">
          <motion.button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-ink/50 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            aria-label="Fermer le panier"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Votre panier"
            className="absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-ivory shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-[74px] shrink-0 items-center justify-between border-b border-line px-5 sm:px-7">
              <div className="flex items-baseline gap-2">
                <h2 className="font-display text-2xl">Votre panier</h2>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {count} article{count > 1 ? "s" : ""}
                </span>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="grid size-10 place-items-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-ivory"
                aria-label="Fermer le panier"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {items.length > 0 && (
              <div className="shrink-0 border-b border-line bg-cream/45 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em]">
                  <Truck size={14} strokeWidth={1.5} className="text-terra" />
                  {remaining > 0 ? (
                    <span>
                      Plus que{" "}
                      <strong className="font-bold">{formatPrice(remaining)}</strong>{" "}
                      pour la livraison offerte
                    </span>
                  ) : (
                    <span className="text-forest">
                      Livraison offerte — c’est cadeau.
                    </span>
                  )}
                </div>
                <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-sand/50">
                  <motion.div
                    className="h-full rounded-full bg-terra"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 sm:px-7">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <span className="grid size-20 place-items-center rounded-full border border-line bg-cream/50">
                    <ShoppingBag size={28} strokeWidth={1.2} className="text-muted" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl">
                    Votre panier attend sa première pièce.
                  </h3>
                  <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-muted">
                    Des objets façonnés lentement, choisis pour durer et raconter
                    quelque chose de Madagascar.
                  </p>
                  <Link
                    href="/boutique"
                    onClick={closeCart}
                    className="btn-dark mt-7"
                  >
                    Découvrir la boutique
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-line">
                  <AnimatePresence initial={false}>
                    {items.map((line) => (
                      <motion.li
                        key={line.slug}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 24, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 py-5"
                      >
                        <Link
                          href={`/boutique/${line.slug}`}
                          onClick={closeCart}
                          className="group relative h-[104px] w-[82px] shrink-0 overflow-hidden bg-cream"
                        >
                          <Image
                            src={line.image}
                            alt={line.name}
                            fill
                            sizes="82px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>

                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
                                {line.categoryLabel}
                              </p>
                              <Link
                                href={`/boutique/${line.slug}`}
                                onClick={closeCart}
                                className="mt-1 block font-display text-xl leading-tight hover:text-terra"
                              >
                                {line.name}
                              </Link>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(line.slug)}
                              className="grid size-7 place-items-center text-muted transition-colors hover:text-terra"
                              aria-label={`Retirer ${line.name} du panier`}
                            >
                              <Trash2 size={14} strokeWidth={1.5} />
                            </button>
                          </div>

                          <div className="mt-auto flex items-center justify-between gap-4 pt-3">
                            <div className="flex h-8 items-center border border-line">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(line.slug, line.quantity - 1)
                                }
                                className="grid size-8 place-items-center text-muted transition-colors hover:bg-cream hover:text-ink"
                                aria-label={`Diminuer la quantité de ${line.name}`}
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-7 text-center text-[11px] font-semibold tabular-nums">
                                {line.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(line.slug, line.quantity + 1)
                                }
                                className="grid size-8 place-items-center text-muted transition-colors hover:bg-cream hover:text-ink"
                                aria-label={`Augmenter la quantité de ${line.name}`}
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="text-sm font-semibold">
                              {formatPrice(line.price * line.quantity)}
                            </span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="shrink-0 border-t border-line bg-ivory px-5 pb-6 pt-4 sm:px-7">
                <dl className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Sous-total</dt>
                    <dd className="font-medium">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Livraison</dt>
                    <dd className="font-medium">
                      {shipping === 0 ? "Offerte" : formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-line pt-3">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Total
                    </dt>
                    <dd className="font-display text-2xl">{formatPrice(total)}</dd>
                  </div>
                </dl>

                <Link
                  href="/commande"
                  onClick={closeCart}
                  className="btn-dark mt-4 w-full"
                >
                  Passer commande
                  <ArrowRight size={15} />
                </Link>

                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[9px] uppercase tracking-[0.14em] text-muted">
                  <ShieldCheck size={12} strokeWidth={1.5} />
                  Paiement sécurisé · Retours sous 14 jours
                </p>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
