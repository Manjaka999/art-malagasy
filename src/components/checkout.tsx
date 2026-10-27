"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  Landmark,
  Lock,
  Smartphone,
  Truck,
} from "lucide-react";
import { useCart, type CartLine } from "@/components/cart-provider";
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { cn, formatPrice } from "@/lib/utils";

const EXPRESS_SHIPPING = 29;

const paymentMethods = [
  {
    value: "virement",
    label: "Virement bancaire",
    description: "Coordonnées envoyées par e-mail après confirmation.",
    icon: Landmark,
  },
  {
    value: "mobile",
    label: "Mobile Money",
    description: "Mvola, Orange Money ou Airtel Money.",
    icon: Smartphone,
  },
  {
    value: "livraison",
    label: "À la livraison",
    description: "Règlement en espèces à la réception, sur devis.",
    icon: Banknote,
  },
] as const;

type ShippingMethod = "standard" | "express";
type PaymentMethod = (typeof paymentMethods)[number]["value"];

type PlacedOrder = {
  reference: string;
  firstName: string;
  email: string;
  total: number;
  items: CartLine[];
  shipping: ShippingMethod;
  payment: PaymentMethod;
};

export function Checkout() {
  const {
    items,
    subtotal,
    count,
    hydrated,
    clearCart,
  } = useCart();
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("virement");
  const [order, setOrder] = useState<PlacedOrder | null>(null);

  const shippingCost =
    shippingMethod === "express"
      ? EXPRESS_SHIPPING
      : subtotal >= FREE_SHIPPING_THRESHOLD
        ? 0
        : STANDARD_SHIPPING;
  const total = subtotal + shippingCost;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reference = `VK-${Math.floor(100000 + Math.random() * 900000)}`;

    setOrder({
      reference,
      firstName: String(data.get("firstName") ?? ""),
      email: String(data.get("email") ?? ""),
      total,
      items,
      shipping: shippingMethod,
      payment: paymentMethod,
    });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (order) {
    const payment = paymentMethods.find(
      (method) => method.value === order.payment,
    );

    return (
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="grid size-14 place-items-center rounded-full bg-terra text-ivory">
              <Check size={26} strokeWidth={1.8} />
            </span>
            <p className="eyebrow mt-7 text-muted">Commande enregistrée</p>
            <h1 className="mt-4 font-display text-[46px] leading-[0.98] sm:text-6xl">
              Misaotra
              {order.firstName ? `, ${order.firstName}` : ""}.
              <br />
              <span className="italic text-terra">Votre demande est partie.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              Un e-mail de récapitulatif est en route vers{" "}
              <span className="text-ink">{order.email}</span>. L’atelier vous
              confirme la disponibilité et les modalités de règlement sous 24
              heures ouvrées.
            </p>

            <div className="mt-8 border border-line">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-cream/40 px-5 py-4">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Référence
                  </p>
                  <p className="mt-1 font-display text-2xl">{order.reference}</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Total
                  </p>
                  <p className="mt-1 font-display text-2xl">
                    {formatPrice(order.total)}
                  </p>
                </div>
              </div>

              <div className="divide-y divide-line px-5">
                {order.items.map((item) => (
                  <div key={item.slug} className="flex gap-4 py-4">
                    <div className="relative size-16 shrink-0 overflow-hidden bg-cream">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg leading-tight">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted">
                        {item.categoryLabel} · Quantité {item.quantity}
                      </p>
                    </div>
                    <p className="text-xs">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-line bg-cream/40 px-5 py-4">
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  {order.shipping === "express" ? (
                    <Truck size={14} className="text-terra" />
                  ) : (
                    <Truck size={14} className="text-terra" />
                  )}
                  Livraison{" "}
                  {order.shipping === "express" ? "express (2 à 4 j)" : "standard (5 à 8 j)"}
                  {payment ? ` · ${payment.label}` : ""}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-xs leading-relaxed text-muted">
              {order.payment === "virement" && (
                <p>
                  Nous vous transmettrons nos coordonnées bancaires par e-mail.
                  La commande sera préparée dès réception du virement.
                </p>
              )}
              {order.payment === "mobile" && (
                <p>
                  L’atelier vous contactera pour initier le paiement Mobile Money
                  et vous communiquer les instructions.
                </p>
              )}
              {order.payment === "livraison" && (
                <p>
                  Le règlement à la livraison est confirmé au cas par cas. Nous
                  vous recontactons pour valider ce mode et son montant exact.
                </p>
              )}
              <p>
                Une question ? Écrivez à{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink underline decoration-line underline-offset-4"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/boutique" className="btn-dark">
                Continuer la découverte
                <ArrowRight size={15} />
              </Link>
              <Link href="/" className="btn-outline">
                Retour à la maison
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (!hydrated) {
    return (
      <section className="py-20">
        <div className="container-x max-w-xl text-center">
          <p className="eyebrow text-muted">Chargement</p>
          <p className="mt-4 font-display text-4xl">Préparation du panier…</p>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="py-20 sm:py-28">
        <div className="container-x max-w-xl text-center">
          <p className="eyebrow text-muted">Votre panier</p>
          <h1 className="mt-4 font-display text-[46px] leading-[0.98] sm:text-6xl">
            Il n’y a rien
            <br />
            <span className="italic text-terra">à finaliser pour l’instant.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
            Choisissez une pièce dans la boutique, ajoutez-la à votre panier et
            revenez ici pour nous laisser vos coordonnées.
          </p>
          <Link href="/boutique" className="btn-dark mt-7">
            Découvrir la boutique
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-line bg-cream/40 py-10 sm:py-12">
        <div className="container-x flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-muted">Commande sécurisée</p>
            <h1 className="mt-3 font-display text-[44px] leading-[0.98] sm:text-6xl">
              Finaliser votre commande
            </h1>
            <p className="mt-3 max-w-lg text-xs leading-relaxed text-muted">
              Aucun paiement n’est débité en ligne. Nous confirmons chaque
              commande et ses modalités de règlement par e-mail sous 24h ouvrées.
            </p>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={13} />
            Continuer mes achats
          </Link>
        </div>
      </section>

      <form onSubmit={submit} className="pb-20 pt-10 sm:pt-12">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <div className="space-y-10">
            <section>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <span className="font-display text-2xl text-terra">01</span>
                <h2 className="font-display text-2xl">Vos coordonnées</h2>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="field-label">Prénom *</span>
                  <input
                    name="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="Votre prénom"
                    className="field"
                  />
                </label>
                <label>
                  <span className="field-label">Nom *</span>
                  <input
                    name="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="Votre nom"
                    className="field"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="field-label">E-mail *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                    className="field"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="field-label">Téléphone *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+261 34 …"
                    className="field"
                  />
                </label>
              </div>
            </section>

            <section>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <span className="font-display text-2xl text-terra">02</span>
                <h2 className="font-display text-2xl">Adresse de livraison</h2>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="field-label">Adresse *</span>
                  <input
                    name="address"
                    required
                    autoComplete="street-address"
                    placeholder="Numéro et nom de rue"
                    className="field"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="field-label">Complément d’adresse</span>
                  <input
                    name="address2"
                    autoComplete="address-line2"
                    placeholder="Appartement, étage, digicode…"
                    className="field"
                  />
                </label>
                <label>
                  <span className="field-label">Code postal *</span>
                  <input
                    name="postalCode"
                    required
                    autoComplete="postal-code"
                    placeholder="75011"
                    className="field"
                  />
                </label>
                <label>
                  <span className="field-label">Ville *</span>
                  <input
                    name="city"
                    required
                    autoComplete="address-level2"
                    placeholder="Paris"
                    className="field"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="field-label">Pays *</span>
                  <select
                    name="country"
                    required
                    autoComplete="country-name"
                    defaultValue="France"
                    className="field cursor-pointer"
                  >
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Autre pays</option>
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="field-label">
                    Un mot pour l’atelier (optionnel)
                  </span>
                  <textarea
                    name="note"
                    rows={4}
                    placeholder="Un message à joindre, une précision sur la livraison…"
                    className="field resize-none"
                  />
                </label>
              </div>
            </section>

            <section>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <span className="font-display text-2xl text-terra">03</span>
                <h2 className="font-display text-2xl">Livraison</h2>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 border p-4 transition-colors",
                    shippingMethod === "standard"
                      ? "border-ink bg-cream/40"
                      : "border-line hover:border-ink/30",
                  )}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="mt-1 size-3.5 accent-[#a94f2e]"
                  />
                  <span>
                    <span className="flex items-center justify-between gap-3 text-xs font-semibold">
                      Standard
                      <span>
                        {subtotal >= FREE_SHIPPING_THRESHOLD
                          ? "Offerte"
                          : formatPrice(STANDARD_SHIPPING)}
                      </span>
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-muted">
                      5 à 8 jours ouvrés · suivie
                    </span>
                  </span>
                </label>
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 border p-4 transition-colors",
                    shippingMethod === "express"
                      ? "border-ink bg-cream/40"
                      : "border-line hover:border-ink/30",
                  )}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="mt-1 size-3.5 accent-[#a94f2e]"
                  />
                  <span>
                    <span className="flex items-center justify-between gap-3 text-xs font-semibold">
                      Express
                      <span>{formatPrice(EXPRESS_SHIPPING)}</span>
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-muted">
                      2 à 4 jours ouvrés · suivie
                    </span>
                  </span>
                </label>
              </div>
              <p className="mt-3 flex items-center gap-2 text-[10px] leading-relaxed text-muted">
                <Truck size={13} className="shrink-0 text-terra" />
                Livraison offerte dès {formatPrice(FREE_SHIPPING_THRESHOLD)} avec
                la méthode standard. Pour Madagascar, un devis est établi après
                commande.
              </p>
            </section>

            <section>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <span className="font-display text-2xl text-terra">04</span>
                <h2 className="font-display text-2xl">Règlement</h2>
              </div>
              <div className="mt-5 grid gap-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const selected = paymentMethod === method.value;
                  return (
                    <label
                      key={method.value}
                      className={cn(
                        "flex cursor-pointer items-center gap-4 border p-4 transition-colors",
                        selected
                          ? "border-ink bg-cream/40"
                          : "border-line hover:border-ink/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={selected}
                        onChange={() => setPaymentMethod(method.value)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full border",
                          selected
                            ? "border-terra bg-terra text-ivory"
                            : "border-line text-muted",
                        )}
                      >
                        <Icon size={16} strokeWidth={1.4} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold">
                          {method.label}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-relaxed text-muted">
                          {method.description}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid size-4 shrink-0 place-items-center rounded-full border",
                          selected ? "border-terra" : "border-line",
                        )}
                      >
                        {selected && (
                          <span className="size-2 rounded-full bg-terra" />
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[10px] text-muted">
                <Lock size={12} className="text-terra" />
                Aucun paiement en ligne n’est demandé à cette étape.
              </p>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="border border-line">
              <div className="flex items-center justify-between border-b border-line bg-cream/40 px-5 py-4">
                <h2 className="font-display text-2xl">Votre sélection</h2>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {count} pièce{count > 1 ? "s" : ""}
                </span>
              </div>

              <div className="divide-y divide-line px-5">
                {items.map((item) => (
                  <div key={item.slug} className="flex gap-4 py-4">
                    <div className="relative size-[68px] shrink-0 overflow-hidden bg-cream">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="68px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg leading-tight">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[9px] uppercase tracking-[0.1em] text-muted">
                        {item.categoryLabel} · × {item.quantity}
                      </p>
                    </div>
                    <p className="text-[11px]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {subtotal < FREE_SHIPPING_THRESHOLD && shippingMethod === "standard" && (
                <div className="mx-5 mb-4 bg-cream/60 p-3">
                  <p className="text-[10px] leading-relaxed text-muted">
                    Plus que{" "}
                    <span className="font-semibold text-ink">
                      {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}
                    </span>{" "}
                    pour bénéficier de la livraison offerte.
                  </p>
                  <div className="mt-2 h-1 w-full bg-line">
                    <div
                      className="h-full bg-terra transition-all"
                      style={{
                        width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2 border-t border-line px-5 py-4 text-xs">
                <div className="flex justify-between text-muted">
                  <span>Sous-total</span>
                  <span className="text-ink">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Livraison</span>
                  <span className="text-ink">
                    {shippingCost === 0 ? "Offerte" : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-t border-line pt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Total
                  </span>
                  <span className="font-display text-3xl">{formatPrice(total)}</span>
                </div>
                <p className="text-[9px] text-muted">TVA incluse.</p>
              </div>

              <div className="border-t border-line p-5">
                <label className="flex items-start gap-3 text-[10px] leading-relaxed text-muted">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 size-3.5 shrink-0 accent-[#a94f2e]"
                  />
                  <span>
                    J’ai lu et j’accepte les{" "}
                    <Link
                      href="/cgv"
                      className="text-ink underline decoration-line underline-offset-2"
                    >
                      conditions générales de vente
                    </Link>{" "}
                    et la{" "}
                    <Link
                      href="/confidentialite"
                      className="text-ink underline decoration-line underline-offset-2"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>

                <button type="submit" className="btn-dark mt-5 w-full">
                  Envoyer ma demande de commande
                  <ArrowRight size={15} />
                </button>
                <p className="mt-3 text-center text-[9px] leading-relaxed text-muted">
                  Confirmation par e-mail sous 24h ouvrées · Aucun débit immédiat
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.14em] text-muted">
              <Lock size={11} />
              Données protégées · Paiement après confirmation
            </div>
          </aside>
        </div>
      </form>
    </>
  );
}
