export type Currency = "MGA" | "EUR" | "USD";

export const DEFAULT_CURRENCY: Currency = "MGA";

// Les prix du catalogue sont saisis en euros. Taux indicatifs pour l'affichage.
export const currencies: Record<
  Currency,
  { label: string; symbol: string; rate: number }
> = {
  MGA: { label: "Ariary", symbol: "Ar", rate: 5200 },
  EUR: { label: "Euro", symbol: "€", rate: 1 },
  USD: { label: "Dollar", symbol: "$", rate: 1.15 },
};

export function isCurrency(value: unknown): value is Currency {
  return value === "MGA" || value === "EUR" || value === "USD";
}

export function convertPrice(priceEur: number, currency: Currency) {
  const converted = priceEur * currencies[currency].rate;
  // L'ariary s'affiche arrondi au millier, comme en boutique.
  return currency === "MGA" ? Math.round(converted / 1000) * 1000 : converted;
}

export function formatPrice(priceEur: number, currency: Currency = "EUR") {
  const value = convertPrice(priceEur, currency);

  if (currency === "MGA") {
    return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value)} Ar`;
  }

  return new Intl.NumberFormat(currency === "USD" ? "en-US" : "fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
