"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING,
  type Product,
} from "@/lib/products";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  image: string;
  categoryLabel: string;
  artisan: string;
  quantity: number;
};

type CartContextValue = {
  items: CartLine[];
  isOpen: boolean;
  hydrated: boolean;
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  freeShippingThreshold: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "art-malagasy-cart-v1";
const EMPTY_CART: CartLine[] = [];

let cachedCart: CartLine[] = EMPTY_CART;
let cachedRaw: string | null = null;
let loaded = false;
let memoryOnly = false;
const listeners = new Set<() => void>();

function parseCart(raw: string | null): CartLine[] {
  if (!raw) return EMPTY_CART;

  try {
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return EMPTY_CART;

    const valid = parsed.filter(
      (line) =>
        typeof line.slug === "string" &&
        typeof line.price === "number" &&
        typeof line.quantity === "number",
    );

    return valid.length > 0 ? valid : EMPTY_CART;
  } catch {
    return EMPTY_CART;
  }
}

function readCart(): CartLine[] {
  if (typeof window === "undefined" || memoryOnly) return cachedCart;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return cachedCart;
  }

  if (!loaded || raw !== cachedRaw) {
    loaded = true;
    cachedRaw = raw;
    cachedCart = parseCart(raw);
  }

  return cachedCart;
}

function getServerCart() {
  return EMPTY_CART;
}

function subscribeToCart(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    loaded = false;
    onStoreChange();
  };

  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function subscribeToHydration() {
  return () => {};
}

function getHydrated() {
  return true;
}

function getServerHydrated() {
  return false;
}

function commitCart(next: CartLine[]) {
  cachedCart = next;
  loaded = true;

  try {
    const raw = JSON.stringify(next);
    window.localStorage.setItem(STORAGE_KEY, raw);
    cachedRaw = raw;
    memoryOnly = false;
  } catch {
    memoryOnly = true;
  }

  listeners.forEach((listener) => listener());
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(
    subscribeToCart,
    readCart,
    getServerCart,
  );
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydrated,
    getServerHydrated,
  );
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const current = readCart();
    const existing = current.find((line) => line.slug === product.slug);

    if (existing) {
      commitCart(
        current.map((line) =>
          line.slug === product.slug
            ? { ...line, quantity: Math.min(line.quantity + quantity, 10) }
            : line,
        ),
      );
    } else {
      commitCart([
        ...current,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          categoryLabel: product.categoryLabel,
          artisan: product.artisan,
          quantity: Math.min(quantity, 10),
        },
      ]);
    }

    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string) => {
    commitCart(readCart().filter((line) => line.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      commitCart(readCart().filter((line) => line.slug !== slug));
      return;
    }

    commitCart(
      readCart().map((line) =>
        line.slug === slug
          ? { ...line, quantity: Math.min(quantity, 10) }
          : line,
      ),
    );
  }, []);

  const clearCart = useCallback(() => commitCart([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(
    () => items.reduce((total, line) => total + line.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((total, line) => total + line.price * line.quantity, 0),
    [items],
  );

  const shipping = useMemo(() => {
    if (items.length === 0) return 0;
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  }, [items.length, subtotal]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      hydrated,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      hydrated,
      count,
      subtotal,
      shipping,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
