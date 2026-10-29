"use client";

import { useSyncExternalStore } from "react";
import {
  currencies,
  DEFAULT_CURRENCY,
  formatPrice,
  isCurrency,
  type Currency,
} from "@/lib/currency";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "art-malagasy-currency";

const listeners = new Set<() => void>();
let memoryCurrency: Currency | null = null;

function readCurrency(): Currency {
  if (memoryCurrency) return memoryCurrency;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isCurrency(stored) ? stored : DEFAULT_CURRENCY;
  } catch {
    return DEFAULT_CURRENCY;
  }
}

function getServerCurrency() {
  return DEFAULT_CURRENCY;
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function setCurrency(currency: Currency) {
  try {
    window.localStorage.setItem(STORAGE_KEY, currency);
    memoryCurrency = null;
  } catch {
    memoryCurrency = currency;
  }
  listeners.forEach((listener) => listener());
}

export function useCurrency() {
  return useSyncExternalStore(subscribe, readCurrency, getServerCurrency);
}

export function Price({ value }: { value: number }) {
  const currency = useCurrency();
  return <>{formatPrice(value, currency)}</>;
}

export function CurrencySwitcher({ className }: { className?: string }) {
  const current = useCurrency();

  return (
    <div
      role="group"
      aria-label="Devise d'affichage des prix"
      className={cn("flex items-center gap-0.5", className)}
    >
      {(Object.keys(currencies) as Currency[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code)}
          aria-pressed={current === code}
          title={currencies[code].label}
          className={cn(
            "rounded-full px-2 py-0.5 transition-colors",
            current === code
              ? "bg-ivory text-ink"
              : "text-ivory/70 hover:text-ivory",
          )}
        >
          {currencies[code].symbol}
        </button>
      ))}
    </div>
  );
}
