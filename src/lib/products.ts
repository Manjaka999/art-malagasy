export type CategorySlug =
  | "sculpture"
  | "textile"
  | "vannerie"
  | "ceramique"
  | "bijoux"
  | "peinture";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  categoryLabel: string;
  price: number;
  image: string;
  alt: string;
  shortDescription: string;
  description: string;
  story: string;
  artisan: string;
  region: string;
  material: string;
  dimensions: string;
  care: string;
  tag?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "sculpture",
    name: "Sculpture",
    description: "Bois patiné, formes totémiques et gardiens du quotidien.",
    image: "/images/collection-sculpture.jpg",
  },
  {
    slug: "textile",
    name: "Textile",
    description: "Lambas de soie, cotons teintés et motifs hérités.",
    image: "/images/collection-textile.jpg",
  },
  {
    slug: "vannerie",
    name: "Vannerie",
    description: "Raffia, jacinthe et gestes de tressage transmis.",
    image: "/images/collection-vannerie.jpg",
  },
  {
    slug: "ceramique",
    name: "Céramique",
    description: "Terres locales, émaux naturels et courbes simples.",
    image: "/images/collection-ceramique.jpg",
  },
  {
    slug: "bijoux",
    name: "Bijoux",
    description: "Argent martelé, perles et parures de cérémonie.",
    image: "/images/produit-bijoux.jpg",
  },
  {
    slug: "peinture",
    name: "Peinture",
    description: "Toiles contemporaines inspirées des hauts plateaux.",
    image: "/images/produit-tableau.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "masque-vohitra",
    name: "Masque Vohitra",
    category: "sculpture",
    categoryLabel: "Sculpture",
    price: 245,
    image: "/images/produit-masque.jpg",
    alt: "Masque sculpté en bois patiné présenté sur un étal artisanal",
    shortDescription:
      "Un masque sculpté à la main, entre mémoire cérémonielle et présence contemporaine.",
    description:
      "Taillé dans une pièce de palissandre patinée, le masque Vohitra conjugue des lignes sobres et une expression singulière. Chaque nervure est travaillée au ciseau puis polie à la main pour révéler le veinage du bois. Une pièce de caractère, à poser seule ou au milieu d'une composition plus intime.",
    story:
      "Vohitra fait référence aux collines qui entourent Antananarivo. Le sculpteur Hery Rakotondrabe s'inspire des masques de gardiens transmis dans sa famille, qu'il réinterprète avec des volumes plus doux et contemporains.",
    artisan: "Hery Rakotondrabe",
    region: "Analamanga",
    material: "Bois de palissandre patiné",
    dimensions: "32 × 18 × 7 cm",
    care: "Dépoussiérer avec un chiffon doux et sec. Éviter l'exposition directe au soleil et les pièces humides.",
    tag: "Pièce unique",
    featured: true,
  },
  {
    slug: "lamba-soie-sauvage",
    name: "Lamba Soie Sauvage",
    category: "textile",
    categoryLabel: "Textile",
    price: 390,
    image: "/images/produit-lamba.jpg",
    alt: "Lamba en soie sauvage aux reflets chauds, suspendu à l'atelier",
    shortDescription:
      "Un lamba de soie sauvage tissé main, aux reflets vivants et à la douceur incomparable.",
    description:
      "Tissé sur un métier traditionnel, ce lamba en soie sauvage déploie des nuances naturelles qui changent selon la lumière. Ses franges nouées à la main et sa texture légèrement irrégulière rappellent le travail vivant de la soie. Il se porte comme un châle ou se pose comme une pièce textile sur un lit, un canapé ou un mur.",
    story:
      "La soie sauvage est collectée dans les hauts plateaux puis filée et teinte selon des recettes familiales. Voahangy Rasoanaivo tisse chaque lamba à la commande, en laissant apparaître les petites variations du fil : c'est là, dit-elle, que réside la vraie beauté du tissage.",
    artisan: "Voahangy Rasoanaivo",
    region: "Vakinankaratra",
    material: "Soie sauvage naturelle",
    dimensions: "180 × 60 cm",
    care: "Lavage à la main à froid, sans essorage. Sécher à plat à l'ombre. Repasser à basse température.",
    tag: "Édition limitée",
    featured: true,
  },
  {
    slug: "panier-raffia-antemoro",
    name: "Panier Raffia Antemoro",
    category: "vannerie",
    categoryLabel: "Vannerie",
    price: 145,
    image: "/images/produit-panier.jpg",
    alt: "Paniers en raffia tressé aux tons chauds dans la lumière du soleil",
    shortDescription:
      "Un panier souple et graphique, tressé à la main en raffia naturel.",
    description:
      "Ce panier en raffia est tressé selon une technique de spirale qui lui donne sa souplesse et sa solidité. Les anses sont renforcées à la main et les finitions sont naturelles, sans teinture. Parfait pour ranger des textiles, accompagner un grand bouquet ou simplement apporter une présence végétale dans une pièce.",
    story:
      "Dans le sud-est de Madagascar, le raffia est récolté, séché et fendu en fines lanières avant d'être tressé. Fanja Andriamihaja travaille avec un groupe de femmes de son village ; chaque panier demande près de trois jours de travail.",
    artisan: "Fanja Andriamihaja",
    region: "Vatovavy",
    material: "Raffia naturel",
    dimensions: "38 × 32 × 28 cm",
    care: "Dépoussiérer avec une brosse douce. Ne pas immerger. Éviter l'humidité prolongée.",
    tag: "Best-seller",
    featured: true,
  },
  {
    slug: "sculpture-zebu",
    name: "Sculpture Zébu",
    category: "sculpture",
    categoryLabel: "Sculpture",
    price: 280,
    image: "/images/produit-sculpture.jpg",
    alt: "Sculpture animalière en bois finement ciselée",
    shortDescription:
      "Une silhouette de zébu stylisée, symbole de force tranquille et de lien au territoire.",
    description:
      "Réalisée dans un bois dense, cette sculpture reprend la silhouette du zébu avec des lignes épurées. Le travail de ciselage révèle les cornes, la bosse et le mouvement de l'animal sans jamais tomber dans le détail. Une pièce puissante et paisible, à installer sur une console ou une étagère.",
    story:
      "Le zébu occupe une place centrale dans l'imaginaire malgache : il accompagne les rites, les échanges et les grands passages de la vie. Hery en propose ici une version intemporelle, presque minimaliste, où la matière raconte davantage que la forme.",
    artisan: "Hery Rakotondrabe",
    region: "Analamanga",
    material: "Bois de palissandre",
    dimensions: "42 × 30 × 12 cm",
    care: "Dépoussiérer avec un chiffon doux. Nourrir le bois une à deux fois par an avec une huile naturelle.",
    featured: true,
  },
  {
    slug: "vase-terre-rouge",
    name: "Vase Terre Rouge",
    category: "ceramique",
    categoryLabel: "Céramique",
    price: 180,
    image: "/images/produit-ceramique.jpg",
    alt: "Vases en céramique aux tons terracotta dans une ambiance rustique",
    shortDescription:
      "Un vase tourné main dans une terre locale, aux courbes douces et à l'émail minéral.",
    description:
      "Tourné à la main, ce vase présente une silhouette généreuse et une surface légèrement texturée. La terre locale est cuite à haute température puis émaillée avec un mélange naturel qui laisse apparaître des nuances uniques. Il accueille quelques branches séchées ou se suffit à lui-même comme objet sculptural.",
    story:
      "La céramique est arrivée dans l'atelier de Miora Tiana par les grands-mères potières de la région d'Itasy. Elle mélange aujourd'hui les gestes anciens du tour et une recherche contemporaine sur les émaux, en travaillant uniquement avec des matières trouvées à proximité.",
    artisan: "Miora Tiana",
    region: "Itasy",
    material: "Terre locale, émail naturel",
    dimensions: "30 × 20 cm · ouverture 9 cm",
    care: "Nettoyer à la main avec un chiffon humide. Ne pas passer au lave-vaisselle.",
    featured: true,
  },
  {
    slug: "tenture-batik",
    name: "Tenture Batik",
    category: "textile",
    categoryLabel: "Textile",
    price: 220,
    image: "/images/produit-batik.jpg",
    alt: "Tissus batik colorés suspendus dans la lumière",
    shortDescription:
      "Une tenture en coton teinté à la cire, aux motifs libres inspirés des plantes du Sud.",
    description:
      "Réalisée selon la technique du batik, cette tenture en coton joue avec les réserves de cire et les pigments naturels. Chaque motif est dessiné à la main, ce qui rend la pièce légèrement différente à chaque tirage. Suspendue sur un mur ou utilisée comme parure de lit, elle apporte une couleur profonde et vivante.",
    story:
      "Les motifs de cette tenture sont nés d'une série de croquis réalisés par Voahangy lors d'un voyage dans le Sud : euphorbes, aloès, fleurs de ravinala. Le bain de teinture est préparé à partir de pigments minéraux et végétaux, puis séché au soleil.",
    artisan: "Voahangy Rasoanaivo",
    region: "Antananarivo",
    material: "Coton, pigments naturels",
    dimensions: "150 × 90 cm",
    care: "Lavage à la main séparément, à froid. Sécher à l'ombre. Repasser sur l'envers.",
    tag: "Nouveau",
    featured: true,
  },
  {
    slug: "parure-argent",
    name: "Parure Argent",
    category: "bijoux",
    categoryLabel: "Bijoux",
    price: 95,
    image: "/images/produit-bijoux.jpg",
    alt: "Parure de bijoux artisanaux en argent présentée sur un tissu naturel",
    shortDescription:
      "Un collier en argent martelé, simple et lumineux, à porter seul ou superposé.",
    description:
      "Façonné à la main dans un atelier de Fianarantsoa, ce collier en argent 925 joue sur les reflets du métal martelé. Son fermoir est travaillé avec soin et sa longueur s'ajuste pour se porter au plus près du cou. Une pièce intemporelle, à transmettre.",
    story:
      "Njaka M. apprend l'orfèvrerie auprès de son père, qui travaille l'argent selon les techniques des bijoutiers des hauts plateaux. Il conserve les gestes anciens du marteau et du feu, en simplifiant les formes pour créer des bijoux qui se portent tous les jours.",
    artisan: "Njaka M.",
    region: "Fianarantsoa",
    material: "Argent 925",
    dimensions: "Collier 45 cm · pendentif 2,5 cm",
    care: "Conserver dans une pochette sèche. Nettoyer avec un chiffon doux et un produit pour argent.",
    featured: true,
  },
  {
    slug: "tableau-ancestral",
    name: "Tableau Ancestral",
    category: "peinture",
    categoryLabel: "Peinture",
    price: 320,
    image: "/images/produit-tableau.jpg",
    alt: "Tableau contemporain encadré représentant un visage",
    shortDescription:
      "Une toile habitée de visages et de symboles, entre mémoire et peinture contemporaine.",
    description:
      "Cette toile originale mêle acrylique, pigments et traits fins pour composer un visage à la fois familier et énigmatique. Le cadre en bois brut a été réalisé spécialement pour la pièce. Chaque tableau est unique et signé à la main par l'artiste.",
    story:
      "Tahina Randrianasolo travaille à partir de portraits photographiques de famille, qu'il décompose puis recompose sur la toile. Son travail interroge la transmission, les absences et la façon dont les visages continuent de nous accompagner.",
    artisan: "Tahina Randrianasolo",
    region: "Antananarivo",
    material: "Acrylique et pigments sur toile de coton",
    dimensions: "60 × 80 cm · cadre inclus",
    care: "Éviter l'exposition directe au soleil. Dépoussiérer avec un plumeau doux.",
    tag: "Pièce unique",
    featured: true,
  },
  {
    slug: "statuettes-vakoka",
    name: "Statuettes Vakoka",
    category: "sculpture",
    categoryLabel: "Sculpture",
    price: 130,
    image: "/images/produit-figurines.jpg",
    alt: "Statuettes sculptées et peintes aux couleurs vives",
    shortDescription:
      "Un trio de statuettes peintes, petits gardiens colorés du quotidien.",
    description:
      "Ces trois statuettes sont sculptées dans une seule pièce de bois puis peintes aux pigments naturels. Leurs silhouettes allongées et leurs visages minimalistes leur donnent une présence à la fois douce et espiègle. À disposer ensemble ou à disperser dans la maison.",
    story:
      "Inspirées des figurines offertes lors des naissances, les statuettes Vakoka sont pensées comme des objets de transmission. Hery les sculpte par séries de trois, chaque couleur correspondant à une intention : terre, eau, lumière.",
    artisan: "Hery Rakotondrabe",
    region: "Analamanga",
    material: "Bois sculpté, pigments naturels",
    dimensions: "18 × 8 cm (chaque pièce)",
    care: "Dépoussiérer avec un chiffon doux. Éviter l'humidité.",
  },
  {
    slug: "panier-luv",
    name: "Panier Luv",
    category: "vannerie",
    categoryLabel: "Vannerie",
    price: 120,
    image: "/images/produit-panier-2.jpg",
    alt: "Paniers tressés colorés suspendus sur un mur",
    shortDescription:
      "Un panier mural en jacinthe d'eau, à la fois léger et graphique.",
    description:
      "Tressé en jacinthe d'eau, ce panier au volume généreux joue sur les contrastes de la matière naturelle. Il se suspend au mur comme une pièce décorative ou trouve sa place dans une entrée pour accueillir les objets du quotidien.",
    story:
      "La jacinthe d'eau est récoltée puis séchée pendant plusieurs semaines avant d'être tressée. Ce travail permet de valoriser une plante envahissante tout en créant une matière souple et durable. Fanja et son collectif en ont fait leur spécialité.",
    artisan: "Fanja Andriamihaja",
    region: "Vatovavy",
    material: "Jacinthe d'eau tressée",
    dimensions: "35 × 25 × 12 cm",
    care: "Dépoussiérer avec une brosse douce. Tenir à l'abri de l'humidité.",
  },
  {
    slug: "bol-terre",
    name: "Bol Terre",
    category: "ceramique",
    categoryLabel: "Céramique",
    price: 75,
    image: "/images/produit-vase-2.jpg",
    alt: "Bol en céramique au motif floral posé sur un fond naturel",
    shortDescription:
      "Un bol en grès émaillé, dessiné pour les rituels du matin.",
    description:
      "Ce bol en grès est tourné puis émaillé à la main. Son motif floral, gravé dans la terre avant la cuisson, crée un léger relief sous les doigts. Parfait pour le café, le thé ou une petite soupe, il résiste au quotidien.",
    story:
      "Miora Tiana imagine ces bols comme des pièces à tenir chaque jour, qui se patinent avec l'usage. Les motifs sont inspirés des tissus lamba et des jardins de son enfance à Arivonimamo.",
    artisan: "Miora Tiana",
    region: "Itasy",
    material: "Grès émaillé",
    dimensions: "14 × 22 cm · 550 ml",
    care: "Compatible lave-vaisselle. Éviter les chocs thermiques.",
  },
  {
    slug: "sculpture-oiseau",
    name: "Sculpture Oiseau",
    category: "sculpture",
    categoryLabel: "Sculpture",
    price: 210,
    image: "/images/produit-sculpture-2.jpg",
    alt: "Sculpture d'oiseau en bois aux formes organiques",
    shortDescription:
      "Un oiseau en bois flotté, à mi-chemin entre le végétal et le vivant.",
    description:
      "Cette sculpture est taillée dans une branche de bois flotté, choisie pour sa forme déjà habitée. Le sculpteur a suivi le dessin naturel du bois pour faire émerger un oiseau, entre abstraction et figuration. Chaque pièce est unique et signée.",
    story:
      "Hery ramasse le bois flotté sur les berges de la rivière Ikopa. Il le laisse sécher plusieurs mois avant de le travailler, en gardant les traces du temps et de l'eau sur la surface. L'oiseau est un motif récurrent dans son travail, symbole de passage.",
    artisan: "Hery Rakotondrabe",
    region: "Analamanga",
    material: "Bois flotté",
    dimensions: "35 × 20 × 14 cm",
    care: "Dépoussiérer avec un chiffon doux. Ne pas exposer à une humidité prolongée.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        candidate.category === product.category,
    )
    .concat(
      products.filter(
        (candidate) =>
          candidate.slug !== product.slug &&
          candidate.category !== product.category,
      ),
    )
    .slice(0, limit);
}

export const FREE_SHIPPING_THRESHOLD = 180;
export const STANDARD_SHIPPING = 14;
