export type Artisan = {
  slug: string;
  name: string;
  role: string;
  region: string;
  years: string;
  image: string;
  alt: string;
  bio: string;
  quote: string;
  specialties: string[];
};

export const artisans: Artisan[] = [
  {
    slug: "hery-rakotondrabe",
    name: "Hery Rakotondrabe",
    role: "Sculpteur",
    region: "Analamanga",
    years: "22 ans de métier",
    image: "/images/atelier.jpg",
    alt: "Artisan dans un atelier d'art à Madagascar",
    bio: "Hery a appris à sculpter dans l'atelier de son oncle, à Ambohijatovo. Il travaille le palissandre et le bois flotté en suivant le dessin naturel de la matière, sans jamais forcer une forme. Ses pièces sont présentes dans des collections privées à Paris, Bruxelles et Tananarive.",
    quote:
      "Le bois a déjà une histoire. Mon travail consiste simplement à en révéler la voix.",
    specialties: ["Bois de palissandre", "Bois flotté", "Sculpture animalière"],
  },
  {
    slug: "voahangy-rasoanaivo",
    name: "Voahangy Rasoanaivo",
    role: "Tisseuse",
    region: "Vakinankaratra",
    years: "15 ans de métier",
    image: "/images/artisan-weaving.jpg",
    alt: "Artisane tissant un textile traditionnel",
    bio: "Voahangy tisse la soie sauvage sur un métier en bois hérité de sa mère. Elle maîtrise la préparation des fils, les teintures végétales et le nouage des franges. Depuis 2021, elle forme de jeunes tisserandes dans son village et défend une rémunération juste pour chaque pièce.",
    quote:
      "Un tissage réussi ne se voit pas seulement aux yeux. Il se reconnaît au toucher.",
    specialties: ["Soie sauvage", "Teintures végétales", "Lamba"],
  },
  {
    slug: "fanja-andriamihaja",
    name: "Fanja Andriamihaja",
    role: "Vannière",
    region: "Vatovavy",
    years: "18 ans de métier",
    image: "/images/artisan-basket.jpg",
    alt: "Artisane tressant un panier en fibres naturelles",
    bio: "Fanja dirige un collectif de douze femmes dans le sud-est de Madagascar. Ensemble, elles récoltent le raffia et la jacinthe d'eau, préparent les fibres et tressent des paniers aux formes contemporaines. Le collectif reverse une partie des ventes à l'école du village.",
    quote:
      "Nos paniers portent nos mains et notre patience. C'est cela que vous recevez chez vous.",
    specialties: ["Raffia", "Jacinthe d'eau", "Tressage en spirale"],
  },
  {
    slug: "miora-tiana",
    name: "Miora Tiana",
    role: "Céramiste",
    region: "Itasy",
    years: "10 ans de métier",
    image: "/images/ambiance.jpg",
    alt: "Artisan façonnant un objet dans son atelier",
    bio: "Miora a grandi entre les potières d'Arivonimamo. Après des études d'arts appliqués à Antananarivo, elle est revenue installer son atelier au bord du lac Itasy. Elle travaille des terres locales et des émaux minéraux, en cherchant une céramique simple, robuste et quotidienne.",
    quote:
      "J'aime l'idée qu'un bol puisse accompagner mille matins et se patiner avec le temps.",
    specialties: ["Grès", "Émaux minéraux", "Tournage"],
  },
  {
    slug: "tahina-randrianasolo",
    name: "Tahina Randrianasolo",
    role: "Peintre",
    region: "Antananarivo",
    years: "12 ans de pratique",
    image: "/images/artisan-painting.jpg",
    alt: "Artiste peignant des motifs colorés à la main",
    bio: "Tahina compose des portraits qui mêlent photographie de famille, peinture et symboles textiles. Son travail interroge la mémoire et la transmission. Il expose régulièrement à Madagascar et en Afrique du Sud, et travaille depuis son atelier du quartier d'Isoraka.",
    quote:
      "Je peins des visages que l'on connaît sans les avoir jamais vus.",
    specialties: ["Peinture acrylique", "Portrait", "Pigments naturels"],
  },
];

export function getArtisan(slug: string) {
  return artisans.find((artisan) => artisan.slug === slug);
}
