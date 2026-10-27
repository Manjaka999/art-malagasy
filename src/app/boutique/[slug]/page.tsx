import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  ChevronDown,
  ChevronRight,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import {
  getProduct,
  getRelatedProducts,
  products,
  type Product,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Pièce introuvable" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/boutique/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Vakoka`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${siteConfig.url}${product.image}`],
    description: product.shortDescription,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    material: product.material,
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/boutique/${product.slug}`,
      priceCurrency: "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />

      <div className="container-x pb-8 pt-5">
        <nav
          aria-label="Fil d’Ariane"
          className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Accueil
          </Link>
          <ChevronRight size={11} />
          <Link href="/boutique" className="transition-colors hover:text-ink">
            Boutique
          </Link>
          <ChevronRight size={11} />
          <Link
            href={`/boutique?categorie=${product.category}`}
            className="transition-colors hover:text-ink"
          >
            {product.categoryLabel}
          </Link>
          <ChevronRight size={11} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              {product.tag && (
                <span className="absolute left-5 top-5 bg-ivory/95 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] backdrop-blur">
                  {product.tag}
                </span>
              )}
              <span className="absolute bottom-5 right-5 bg-ink/70 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-ivory backdrop-blur">
                Réf. VK-{product.slug.slice(0, 6).toUpperCase()}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-y border-line py-4">
              <div className="flex items-center gap-2.5">
                <Truck size={17} strokeWidth={1.3} className="shrink-0 text-terra" />
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  Expédié
                  <br />
                  sous 48h
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award size={17} strokeWidth={1.3} className="shrink-0 text-terra" />
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  Certificat
                  <br />
                  d’atelier
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={17} strokeWidth={1.3} className="shrink-0 text-terra" />
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  Retours
                  <br />
                  14 jours
                </span>
              </div>
            </div>
          </div>

          <div>
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terra">
                {product.categoryLabel} · {product.region}
              </p>
              <h1 className="mt-4 font-display text-[48px] leading-[0.95] tracking-[-0.02em] sm:text-[64px]">
                {product.name}
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {product.shortDescription}
              </p>
              <p className="mt-5 font-display text-3xl">{formatPrice(product.price)}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7 border-t border-line pt-7">
                <AddToCart product={product} />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
                <p>{product.description}</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-6">
                <div>
                  <dt className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                    Artisan
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium">{product.artisan}</dd>
                </div>
                <div>
                  <dt className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                    Région
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium">{product.region}</dd>
                </div>
                <div>
                  <dt className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                    Matière
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium">{product.material}</dd>
                </div>
                <div>
                  <dt className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                    Dimensions
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium">{product.dimensions}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6">
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    L’histoire de la pièce
                    <ChevronDown
                      size={15}
                      className="text-muted transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 text-xs leading-relaxed text-muted">
                    {product.story}
                  </p>
                </details>
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Entretien & matières
                    <ChevronDown
                      size={15}
                      className="text-muted transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 text-xs leading-relaxed text-muted">
                    {product.care}
                  </p>
                </details>
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Livraison & retours
                    <ChevronDown
                      size={15}
                      className="text-muted transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <div className="space-y-2 pb-5 text-xs leading-relaxed text-muted">
                    <p>
                      Préparation sous 48h ouvrées. Livraison standard en 5 à 8
                      jours ouvrés (offerte dès 180 €), express en 2 à 4 jours.
                    </p>
                    <p>
                      Retours acceptés sous 14 jours, hors pièces personnalisées.
                      Chaque pièce est protégée dans un emballage renforcé et
                      accompagnée de son certificat.
                    </p>
                  </div>
                </details>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex items-start gap-3 bg-cream/60 p-4">
                <PackageCheck
                  size={19}
                  strokeWidth={1.3}
                  className="mt-0.5 shrink-0 text-terra"
                />
                <p className="text-[11px] leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Un emballage pensé.</span>{" "}
                  Papier de soie, carton recyclé et carte manuscrite. Votre pièce
                  peut être envoyée directement à la personne de votre choix.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream/40 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted">Dans le même esprit</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Vous aimerez aussi
              </h2>
            </div>
            <Link
              href="/boutique"
              className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:flex link-underline"
            >
              <ArrowLeft size={13} />
              Retour à la boutique
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
