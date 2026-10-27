import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "La boutique",
  description:
    "Découvrez nos sculptures, textiles, vanneries, céramiques, bijoux et peintures façonnés à la main par des artisans malgaches. Des pièces uniques, traçables et livrées avec soin.",
  alternates: {
    canonical: "/boutique",
  },
};

type BoutiquePageProps = {
  searchParams: Promise<{
    categorie?: string | string[];
    q?: string | string[];
  }>;
};

export default async function BoutiquePage({ searchParams }: BoutiquePageProps) {
  const params = await searchParams;
  const category =
    typeof params.categorie === "string" ? params.categorie : undefined;
  const query = typeof params.q === "string" ? params.q : undefined;

  return (
    <>
      <PageHero
        eyebrow="La boutique"
        title={
          <>
            Des pièces à vivre,
            <br />
            <span className="italic text-terra">pas seulement à regarder.</span>
          </>
        }
        description="Sculptures, textiles, vanneries et céramiques : chaque pièce est façonnée à la main, documentée et accompagnée de son certificat. Choisissez un geste, une matière, une histoire."
        image="/images/collection-vannerie-2.jpg"
        imageAlt="Paniers en fibres naturelles tressés à la main à Madagascar"
        caption="Atelier partenaire · Vatovavy, Madagascar"
      />
      <ProductCatalog
        key={`${category ?? "all"}-${query ?? ""}`}
        initialCategory={category}
        initialQuery={query}
      />
    </>
  );
}
