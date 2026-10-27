import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import { CartDrawer } from "@/components/cart-drawer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vakoka — Art Malagasy",
    template: "%s — Vakoka",
  },
  description: siteConfig.description,
  keywords: [
    "art malgache",
    "artisanat Madagascar",
    "décoration artisanale",
    "sculpture malgache",
    "lamba",
    "vannerie",
    "raffia",
    "artisanat éthique",
  ],
  authors: [{ name: "Vakoka" }],
  creator: "Vakoka",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: "Vakoka — Art Malagasy",
    title: "Vakoka — L'âme de Madagascar, façonnée à la main",
    description: siteConfig.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Vakoka, art malgache contemporain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakoka — L'âme de Madagascar, façonnée à la main",
    description: siteConfig.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        <CartProvider>
          <ScrollProgress />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CartDrawer />
          <div className="grain" aria-hidden="true" />
        </CartProvider>
      </body>
    </html>
  );
}
