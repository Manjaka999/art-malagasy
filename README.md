# Art-Malagasy — Maison d'art malgache

Boutique en ligne et maison d’art dédiée à l’artisanat malgache. Le site présente quinze pièces, cinq ateliers partenaires, l’histoire de la maison et un parcours de commande sans paiement en ligne.

**Devise :** « L’âme de Madagascar, façonnée à la main. »

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Images locales optimisées par `next/image`

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev        # serveur de développement (webpack)
npm run build      # build de production (webpack)
npm run start      # serveur de production
npm run lint       # ESLint
npm run typecheck  # vérification TypeScript
```

Le build local utilise webpack, car l’environnement Windows de développement bloque les bindings natifs SWC/Turbopack. Vercel peut builder le projet sans configuration supplémentaire.

## Structure

```text
src/
├─ app/                  # pages App Router, SEO, sitemap, robots
│  ├─ boutique/          # catalogue et fiches produits
│  ├─ artisans/          # portraits d’ateliers
│  ├─ notre-histoire/    # manifeste et engagements
│  ├─ commande/          # demande de commande
│  └─ ...                # contact, FAQ, pages légales
├─ components/
│  ├─ home/              # sections de la page d’accueil
│  ├─ cart-*.tsx         # panier et tiroir latéral
│  ├─ checkout.tsx       # parcours de commande
│  └─ ...
└─ lib/
   ├─ products.ts        # produits, catégories, seuils de livraison
   ├─ artisans.ts        # ateliers et biographies
   ├─ faq.ts             # groupes de questions
   └─ site.ts            # marque, navigation, coordonnées
```

## Personnalisation

- **Produits et catégories** : `src/lib/products.ts`
- **Artisans** : `src/lib/artisans.ts`
- **FAQ** : `src/lib/faq.ts`
- **Marque, contact, réseaux et navigation** : `src/lib/site.ts`
- **Couleurs, typographies et classes globales** : `src/app/globals.css`
- **Images** : `public/images` (toutes les images sont locales ; aucun domaine distant n’est configuré)

Les textes, coordonnées et informations légales (mentions, CGV, confidentialité) sont à ajuster avant une mise en production réelle.

## Panier et commande

Le panier est conservé dans le `localStorage` du navigateur. La page `/commande` enregistre une **demande de commande** : aucun paiement n’est débité et aucune API de paiement n’est branchée. Une référence est générée côté client et l’atelier confirme ensuite par e-mail.

## Déploiement Vercel

```bash
npx vercel
npx vercel --prod
```

Variable d’environnement recommandée :

```bash
NEXT_PUBLIC_SITE_URL=https://art-malagasy-mg.vercel.app
```

Sans cette variable, `src/lib/site.ts` utilise l’URL de production par défaut. Pensez à mettre à jour cette URL et le domaine dans Vercel après le premier déploiement.

## Crédits

Photographies d’illustration : [Pexels](https://www.pexels.com/) (licence Pexels). Les visuels sont utilisés à titre éditorial et ne représentent pas nécessairement les pièces exactes présentées.

Visuels Wikimedia Commons :

- [Lamba mena](https://commons.wikimedia.org/wiki/File:Lamba_mena.jpg), Cia 401, CC0.
- [Textile Lamba, Madagascar](https://commons.wikimedia.org/wiki/File:Textile_Lamba,_Madagascar,_collection_priv%C3%A9e_de_Ariane_Mawaffo.jpg), Rhodapenmarck, CC0.
- [Artisant travaillant le rafia à Madagascar](https://commons.wikimedia.org/wiki/File:Artisant_travaillant_le_rafia_%C3%A0_Madagascar.jpg), Dalbergiaada, CC BY-SA 4.0.
