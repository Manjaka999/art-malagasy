import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données Art-Malagasy collecte, pourquoi, combien de temps et comment exercer vos droits.",
  alternates: {
    canonical: "/confidentialite",
  },
};

const sections: LegalSection[] = [
  {
    title: "Responsable du traitement",
    paragraphs: [
      `Le responsable du traitement des données est Art-Malagasy — Maison d'art malgache, ${siteConfig.address}.`,
      `Pour toute question relative à vos données personnelles : ${siteConfig.email}.`,
    ],
  },
  {
    title: "Données collectées",
    paragraphs: [
      "Nous collectons uniquement les données nécessaires au traitement de votre demande :",
    ],
    items: [
      "Identité et coordonnées : prénom, nom, adresse e-mail, téléphone, adresse de livraison.",
      "Informations de commande : pièces choisies, quantités, mode de livraison, mode de règlement, message éventuel.",
      "Données de contact : contenu des messages envoyés via le formulaire ou par e-mail.",
      "Données techniques : informations strictement nécessaires au fonctionnement du site, sans profilage publicitaire.",
    ],
  },
  {
    title: "Finalités et bases légales",
    paragraphs: [
      "Vos données sont utilisées pour répondre à vos demandes, préparer et suivre les commandes, organiser la livraison, gérer les retours et respecter nos obligations comptables ou légales.",
      "Les traitements liés à une commande reposent sur l’exécution du contrat. Les réponses aux messages et l’envoi de la lettre d’atelier reposent sur votre consentement ou notre intérêt légitime à entretenir la relation.",
    ],
  },
  {
    title: "Destinataires",
    paragraphs: [
      "Vos données sont accessibles aux personnes de l’atelier en charge des commandes et des relations clients. Elles peuvent être transmises à nos prestataires techniques (hébergement, e-mail, logistique, paiement) dans la limite de ce qui est nécessaire à leurs missions.",
      "Nous ne vendons ni ne louons vos données. Aucun transfert à des fins publicitaires n’est réalisé.",
    ],
  },
  {
    title: "Durée de conservation",
    paragraphs: [
      "Les données liées aux commandes sont conservées pendant la durée nécessaire au suivi et aux obligations légales, puis archivées selon les durées applicables.",
      "Les messages de contact sont conservés jusqu’à trois ans après le dernier échange, sauf demande de suppression anticipée. Les données de la lettre d’atelier sont conservées jusqu’au retrait du consentement.",
    ],
  },
  {
    title: "Cookies et stockage local",
    paragraphs: [
      "Le site n’utilise pas de cookies publicitaires ni de traceurs de réseaux sociaux. Le panier repose sur le stockage local de votre navigateur (localStorage) afin de conserver vos pièces entre deux visites.",
      "Vous pouvez supprimer ce stockage à tout moment via les réglages de votre navigateur. La suppression vide le panier mais n’affecte pas votre navigation.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données, dans les conditions prévues par la réglementation applicable.",
      `Pour exercer ces droits, écrivez à ${siteConfig.email} en précisant votre demande. Une vérification d’identité peut être demandée en cas de doute raisonnable. Vous pouvez également introduire une réclamation auprès de l’autorité de protection des données compétente.`,
    ],
  },
  {
    title: "Sécurité",
    paragraphs: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l’accès non autorisé, la perte ou l’altération : accès restreint, connexions sécurisées et minimisation des données collectées.",
      "Aucun système n’étant infaillible, nous vous invitons à ne jamais transmettre d’informations sensibles par e-mail ou via le formulaire de contact.",
    ],
  },
  {
    title: "Modifications",
    paragraphs: [
      "Cette politique peut être mise à jour pour refléter une évolution du site ou de la réglementation. La date de dernière mise à jour figure en tête de page. En cas de changement important, une information claire sera diffusée sur le site.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Confidentialité"
      intro="Nous collectons le strict nécessaire, ne vendons aucune donnée et vous laissons la main sur votre panier comme sur vos informations."
      updated="29 octobre 2026"
      sections={sections}
    />
  );
}
