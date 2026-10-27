"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/products";
import { cn, formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  className?: string;
};

export function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className={cn("group relative", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Link
          href={`/boutique/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Découvrir ${product.name}`}
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
          />
          <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.045]" />
        </Link>

        {product.tag && (
          <span className="absolute left-3 top-3 z-20 bg-ivory/95 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 z-20 flex h-9 translate-y-1 items-center gap-2 rounded-full bg-ink/90 px-3.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ivory opacity-100 backdrop-blur transition-all duration-300 hover:bg-terra sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          aria-label={`Ajouter ${product.name} au panier`}
        >
          <Plus size={13} strokeWidth={2} />
          Ajouter
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted">
            {product.categoryLabel}
          </p>
          <Link href={`/boutique/${product.slug}`} className="mt-1 block">
            <h3 className="font-display text-[22px] leading-tight transition-colors duration-300 group-hover:text-terra sm:text-2xl">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-[10px] text-muted">{product.artisan}</p>
        </div>
        <p className="shrink-0 pt-3 text-[12px] font-semibold tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
