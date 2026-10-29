export const siteConfig = {
  name: "Art-Malagasy",
  legalName: "Art-Malagasy — Maison d'art malgache",
  tagline: "L'âme de Madagascar, façonnée à la main.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://vakoka-art-malagasy.vercel.app",
  description:
    "Art-Malagasy réunit des sculptures, lambas, sacs en raffia et céramiques façonnés à la main par des artisans malgaches. Des pièces uniques, traçables et pensées pour traverser le temps.",
  email: "bonjour@art-malagasy.mg",
  phone: "+261 34 12 345 67",
  phoneHref: "+261341234567",
  address: "Lot II A 45, Antanimena, Antananarivo 101, Madagascar",
  hours: "Lun — Ven · 9h à 17h (GMT+3)",
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;

export const navigation = [
  { label: "Boutique", href: "/boutique" },
  { label: "Artisans", href: "/artisans" },
  { label: "Notre histoire", href: "/notre-histoire" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  boutique: [
    { label: "Toutes les pièces", href: "/boutique" },
    { label: "Sculptures", href: "/boutique?categorie=sculpture" },
    { label: "Textiles", href: "/boutique?categorie=textile" },
    { label: "Vanneries", href: "/boutique?categorie=vannerie" },
    { label: "Céramiques", href: "/boutique?categorie=ceramique" },
  ],
  maison: [
    { label: "Notre histoire", href: "/notre-histoire" },
    { label: "Les artisans", href: "/artisans" },
    { label: "Nos engagements", href: "/notre-histoire#engagements" },
    { label: "Contact", href: "/contact" },
  ],
  aide: [
    { label: "Questions fréquentes", href: "/faq" },
    { label: "Livraison & retours", href: "/faq#livraison" },
    { label: "Entretien des pièces", href: "/faq#entretien" },
    { label: "CGV", href: "/cgv" },
  ],
} as const;
