import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function categoryHref(slug: string) {
  return `/boutique?categorie=${encodeURIComponent(slug)}`;
}
