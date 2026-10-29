import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions de commande, de paiement, de livraison et de retour des pièces Art-Malagasy.",
  alternates: {
    canonical: "/cgv",
  },
};

const sections: LegalSection[] = [
  {
    title: "Objet",
    paragraphs: [
      "Les présentes conditions générales de vente encadrent les commandes passées auprès d’Art-Malagasy — Maison d'art malgache via le site art-malagasy-mg.vercel.app.",
      "Toute commande implique l’acceptation sans réserve des présentes conditions. Elles peuvent être mises à jour à tout moment ; la version applicable est celle en vigueur au moment de la demande de commande.",
    ],
  },
  {
    title: "Commande",
    paragraphs: [
      "Le site fonctionne comme un espace de demande de commande. Après validation du formulaire, vous recevez un récapitulatif par e-mail. La commande devient définitive après confirmation écrite de l’atelier, sous 24 heures ouvrées.",
      "L’atelier peut refuser une commande en cas d’indisponibilité d’une pièce, d’erreur manifeste de prix ou de doute raisonnable sur l’identité du client. Les sommes éventuellement versées sont alors restituées.",
    ],
  },
  {
    title: "Prix",
    paragraphs: [
      "Les prix sont indiqués en euros, toutes taxes comprises, hors éventuels droits de douane. Ils ne comprennent pas les frais de livraison, précisés avant validation de la commande.",
      `La livraison standard est facturée ${STANDARD_SHIPPING} € et offerte dès ${FREE_SHIPPING_THRESHOLD} € d’achat. La livraison express est proposée à 29 €.`,
      "Art-Malagasy se réserve le droit de modifier ses prix à tout moment, sans effet sur les commandes déjà confirmées.",
    ],
  },
  {
    title: "Paiement",
    paragraphs: [
      "Aucun paiement n’est débité en ligne lors de la demande de commande. Trois modes de règlement sont proposés : virement bancaire, Mobile Money ou paiement à la livraison.",
      "Les coordonnées de règlement sont communiquées par e-mail après confirmation. La préparation de la commande débute à réception du paiement, ou après validation explicite du mode « à la livraison ».",
      "En cas de défaut de paiement dans un délai de sept jours après confirmation, la commande peut être annulée et les pièces remises en vente.",
    ],
  },
  {
    title: "Livraison",
    paragraphs: [
      "Les commandes sont préparées sous 48 heures ouvrées. La livraison standard intervient sous 5 à 8 jours ouvrés, l’express sous 2 à 4 jours ouvrés, à compter de l’expédition.",
      "Nous livrons en France métropolitaine, en Belgique, au Luxembourg, en Suisse et dans l’Union européenne. Pour Madagascar et les autres destinations, un devis est établi au cas par cas.",
      "Les éventuels droits de douane, taxes locales et frais de dédouanement restent à la charge du destinataire. Les délais sont indicatifs et peuvent varier en période de forte activité ou selon le transporteur.",
    ],
  },
  {
    title: "Retours et remboursements",
    paragraphs: [
      "Vous disposez de 14 jours à compter de la réception pour exercer votre droit de retour, sans avoir à justifier de motif. La pièce doit être non utilisée, dans son état et son emballage d’origine, avec son certificat.",
      "Les frais de retour sont à votre charge, sauf erreur de l’atelier ou pièce endommagée. Le remboursement intervient dans les 14 jours suivant la réception du retour, sur le moyen de paiement initial.",
      "Les pièces personnalisées, les commandes sur mesure et les pièces signalées comme non retournables ne sont pas éligibles au retour. En cas de dommage pendant le transport, contactez-nous dans les 48 heures avec des photographies.",
    ],
  },
  {
    title: "Pièces artisanales",
    paragraphs: [
      "Chaque pièce étant façonnée à la main, de légères variations de teinte, de dimensions, de veinage ou de finition sont normales. Elles ne constituent pas un défaut et ne justifient pas un retour, sauf cas de dommage ou de non-conformité manifeste.",
      "Les photographies sont réalisées avec le plus grand soin, mais les couleurs peuvent varier selon les écrans. Pour les pièces uniques, des images complémentaires peuvent être demandées avant commande.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Art-Malagasy ne saurait être responsable des dommages indirects résultant de l’utilisation des pièces ou de l’impossibilité d’accéder au site. Sa responsabilité reste en tout état de cause limitée au montant de la commande concernée.",
      "Les pièces doivent être utilisées et entretenues conformément aux indications de leur fiche. Les dommages résultant d’un usage inadapté ne sont pas couverts.",
    ],
  },
  {
    title: "Droit applicable et litiges",
    paragraphs: [
      "Les présentes conditions sont soumises au droit malgache, sans préjudice des protections impératives dont pourrait bénéficier le consommateur dans son pays de résidence.",
      `En cas de difficulté, écrivez d’abord à ${siteConfig.email} : nous chercherons une solution amiable. À défaut, le litige pourra être porté devant les juridictions compétentes.`,
    ],
  },
];

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Conditions de vente"
      title="CGV"
      intro="Commande, prix, paiement, livraison et retours : les règles qui encadrent chaque pièce qui quitte l’atelier."
      updated="29 octobre 2026"
      sections={sections}
    />
  );
}
