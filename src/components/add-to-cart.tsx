"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex h-[52px] w-fit items-center border border-ink/20">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="grid h-full w-12 place-items-center text-muted transition-colors hover:bg-cream hover:text-ink disabled:opacity-30"
            disabled={quantity <= 1}
            aria-label="Diminuer la quantité"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm font-semibold tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(10, value + 1))}
            className="grid h-full w-12 place-items-center text-muted transition-colors hover:bg-cream hover:text-ink disabled:opacity-30"
            disabled={quantity >= 10}
            aria-label="Augmenter la quantité"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            addItem(product, quantity);
            setQuantity(1);
          }}
          className="btn-dark flex-1"
        >
          <ShoppingBag size={15} strokeWidth={1.7} />
          Ajouter au panier — {formatPrice(product.price * quantity)}
        </button>
      </div>

      <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.13em] text-muted">
        <Truck size={14} strokeWidth={1.5} className="text-terra" />
        Livraison offerte dès 180 € · Expédition sous 48h
      </p>
    </div>
  );
}
