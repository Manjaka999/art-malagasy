export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  intro: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "commandes",
    title: "Commandes",
    intro: "Du choix de la pièce à sa confirmation.",
    items: [
      {
        question: "Comment passer commande ?",
        answer:
          "Ajoutez vos pièces au panier puis rendez-vous sur la page de commande. Renseignez vos coordonnées et choisissez votre mode de paiement : virement bancaire, Mobile Money ou paiement à la livraison. Nous confirmons chaque commande par e-mail sous 24 heures ouvrées.",
      },
      {
        question: "Puis-je commander une pièce sur mesure ?",
        answer:
          "Oui, de nombreuses pièces peuvent être adaptées en dimensions, en teintes ou en finitions. Écrivez-nous via la page contact en précisant votre projet et vos contraintes d’espace. Nous revenons vers vous avec un devis et un délai indicatif de 4 à 8 semaines selon l’atelier.",
      },
      {
        question: "Les pièces sont-elles vraiment uniques ?",
        answer:
          "La majorité de nos pièces sont uniques ou produites en très petites séries. Le bois, la soie, le raffia et la terre étant des matières vivantes, de légères variations de teinte, de veinage ou de dimensions sont naturelles. Elles font partie de la pièce et sont documentées dans sa fiche.",
      },
      {
        question: "Puis-je offrir une pièce ?",
        answer:
          "Bien sûr. Chaque commande est emballée dans un écrin de papier de soie et de carton recyclé, accompagné d’une carte manuscrite. Vous pouvez ajouter un message lors de la commande ; nous retirons alors les prix de l’emballage.",
      },
    ],
  },
  {
    id: "livraison",
    title: "Livraison & retours",
    intro: "Vos pièces voyagent avec soin.",
    items: [
      {
        question: "Quels sont les délais et frais de livraison ?",
        answer:
          "Les commandes sont préparées sous 48 heures ouvrées. La livraison standard (5 à 8 jours ouvrés) coûte 14 € et est offerte dès 180 € d’achat. L’express (2 à 4 jours ouvrés) est proposé à 29 €. Pour Madagascar et les autres destinations, contactez-nous pour un devis personnalisé.",
      },
      {
        question: "Livrez-vous à l’international ?",
        answer:
          "Nous livrons en France métropolitaine, en Belgique, en Suisse et dans l’Union européenne. Pour les autres pays, écrivez-nous : nous étudions chaque envoi au cas par cas. Les éventuels droits de douane et taxes locales restent à la charge du destinataire.",
      },
      {
        question: "Comment suivre ma commande ?",
        answer:
          "Dès l’expédition, vous recevez un e-mail avec le numéro de suivi et le lien du transporteur. Les pièces sont protégées dans un emballage renforcé, conçu pour les objets fragiles.",
      },
      {
        question: "Puis-je retourner une pièce ?",
        answer:
          "Vous disposez de 14 jours après réception pour nous retourner une pièce non utilisée, dans son emballage d’origine. Les frais de retour sont à votre charge, sauf en cas d’erreur de notre part ou de pièce endommagée. Les pièces personnalisées et les commandes sur mesure ne sont pas éligibles au retour.",
      },
    ],
  },
  {
    id: "pieces",
    title: "Pièces & authenticité",
    intro: "Ce qui se cache derrière chaque objet.",
    items: [
      {
        question: "Comment garantissez-vous l’authenticité des pièces ?",
        answer:
          "Chaque pièce est identifiée avec le nom de son artisan, sa région et sa matière. Elle est accompagnée d’un certificat Art-Malagasy signé par l’atelier. Nous travaillons en relation directe avec les artisans, sans intermédiaire, et visitons les ateliers plusieurs fois par an.",
      },
      {
        question: "D’où viennent les matières ?",
        answer:
          "Le bois provient de filières locales identifiées, le raffia et la jacinthe d’eau sont récoltés par les collectifs partenaires, la soie sauvage est filée sur les hauts plateaux et les terres céramiques sont prélevées à proximité des ateliers. Nous privilégions les matières naturelles, non toxiques et travaillées localement.",
      },
      {
        question: "Les couleurs sont-elles fidèles aux photos ?",
        answer:
          "Nous photographions chaque pièce en lumière naturelle, sans retouche de couleur excessive. Les écrans peuvent toutefois modifier légèrement les nuances. Pour une pièce importante, n’hésitez pas à nous demander des photos ou une courte vidéo supplémentaires.",
      },
    ],
  },
  {
    id: "entretien",
    title: "Entretien",
    intro: "Faire durer les objets, geste après geste.",
    items: [
      {
        question: "Comment entretenir une pièce en bois ?",
        answer:
          "Dépoussiérez avec un chiffon doux et sec. Nourrissez le bois une à deux fois par an avec une huile naturelle (lin ou teck), en petite quantité. Évitez l’exposition directe au soleil, les sources de chaleur et les pièces très humides.",
      },
      {
        question: "Comment laver un lamba ou un textile ?",
        answer:
          "Lavez à la main, à froid, avec un savon doux. Ne pas essorer ni laisser tremper. Séchez à plat à l’ombre et repassez à basse température sur l’envers. Pour les pièces anciennes ou très colorées, un nettoyage à sec professionnel est recommandé.",
      },
      {
        question: "Comment prendre soin d’un panier en fibres naturelles ?",
        answer:
          "Brossez la poussière avec une brosse douce. Évitez l’eau et l’humidité prolongée. Si le panier est légèrement déformé, humidifiez-le très légèrement et remettez-le en forme à la main, puis laissez sécher à l’air libre, à l’ombre.",
      },
      {
        question: "Et pour la céramique ?",
        answer:
          "La plupart de nos pièces en grès passent au lave-vaisselle, sauf mention contraire sur la fiche. Évitez les chocs thermiques et les détergents abrasifs. Un nettoyage à la main prolonge l’éclat de l’émail.",
      },
    ],
  },
  {
    id: "artisans",
    title: "Artisans & maison",
    intro: "Une relation directe, dans la durée.",
    items: [
      {
        question: "Comment travaillez-vous avec les artisans ?",
        answer:
          "Nous commandons directement aux ateliers, à des prix convenus en amont et sans intermédiaire. Les commandes sont régulières pour permettre aux artisans de planifier leur production. Nous finançons une partie des matières premières et soutenons la formation des jeunes apprentis.",
      },
      {
        question: "Puis-je visiter l’atelier ?",
        answer:
          "L’atelier Art-Malagasy se trouve à Antananarivo et se visite sur rendez-vous. Certains ateliers partenaires peuvent également être visités lors de séjours à Madagascar, selon leur disponibilité. Écrivez-nous au moins deux semaines à l’avance.",
      },
      {
        question: "Puis-je revendre vos pièces ?",
        answer:
          "Nous étudions les collaborations avec des concept stores et des galeries, en France comme à l’international. Contactez-nous avec une présentation de votre espace et de votre projet ; nous serons ravis d’en discuter.",
      },
    ],
  },
];

export const homeFaqItems: FaqItem[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[1].items[0],
  faqGroups[2].items[0],
  faqGroups[1].items[3],
];
