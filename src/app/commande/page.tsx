import type { Metadata } from "next";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Finaliser la commande",
  description:
    "Renseignez vos coordonnées et choisissez votre mode de règlement. L’atelier Vakoka confirme chaque commande sous 24 heures ouvrées.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CommandePage() {
  return <Checkout />;
}
