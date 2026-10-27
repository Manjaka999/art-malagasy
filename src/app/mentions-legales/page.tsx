import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales, éditeur, hébergement et crédits du site Vakoka — Art Malagasy.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

const sections: LegalSection[] = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "Le site vakoka-art-malagasy.vercel.app est édité par Vakoka — Art Malagasy, maison d’art et boutique en ligne spécialisée dans l’artisanat malgache.",
      `Siège : ${siteConfig.address}.`,
      `Contact : ${siteConfig.email} — ${siteConfig.phone}.`,
      "La direction de la publication est assurée par la maison Vakoka. Les informations d’immatriculation et de fiscalité peuvent être communiquées sur demande écrite à l’adresse e-mail ci-dessus.",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
      "Hébergement Europe : Vercel Inc. — vercel.com. Les serveurs et la mise en cache peuvent être localisés dans plusieurs régions du monde.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L’ensemble des contenus présents sur le site (textes, identité visuelle, photographies, illustrations, mise en page) est protégé par le droit d’auteur et demeure la propriété de Vakoka ou de ses partenaires.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite. Les visuels des pièces peuvent être partagés à des fins de présentation non commerciale, à condition de mentionner clairement Vakoka et de ne pas les altérer.",
    ],
  },
  {
    title: "Crédits photographiques",
    paragraphs: [
      "Les photographies d’ambiance et d’illustration proviennent de banques d’images libres de droits (Pexels). Elles sont utilisées à titre éditorial et ne représentent pas nécessairement les pièces exactes proposées à la vente.",
      "Les photographies de produits, lorsqu’elles sont spécifiques à une fiche, sont réalisées par l’atelier ou ses partenaires.",
    ],
  },
  {
    title: "Liens et responsabilité",
    paragraphs: [
      "Le site peut contenir des liens vers des sites tiers. Vakoka n’exerce aucun contrôle sur ces contenus et décline toute responsabilité quant à leur disponibilité ou à leur exactitude.",
      "Vakoka s’efforce d’assurer l’exactitude des informations publiées, notamment les prix, disponibilités et descriptions. Des erreurs ou omissions peuvent toutefois survenir ; elles ne sauraient engager la responsabilité de la maison au-delà de la correction de bonne foi.",
    ],
  },
  {
    title: "Signalement",
    paragraphs: [
      `Pour signaler un contenu, une difficulté d’accès ou un problème lié au site, écrivez à ${siteConfig.email} en précisant la page concernée et la nature du signalement.`,
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Qui édite ce site, qui l’héberge, à qui appartiennent les images et comment nous joindre. L’essentiel, sans détour."
      updated="27 octobre 2026"
      sections={sections}
    />
  );
}
