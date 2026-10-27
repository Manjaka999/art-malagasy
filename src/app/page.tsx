import { ArtisansSection } from "@/components/home/artisans";
import { CollectionsSection } from "@/components/home/collections";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeHero } from "@/components/home/hero";
import { TrustMarquee } from "@/components/home/marquee";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { ProcessSection } from "@/components/home/process";
import { StorySection } from "@/components/home/story";
import { TestimonialsSection } from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/og.jpg`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lot II A 45, Antanimena",
    addressLocality: "Antananarivo",
    postalCode: "101",
    addressCountry: "MG",
  },
  sameAs: [siteConfig.socials.instagram, siteConfig.socials.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomeHero />
      <TrustMarquee />
      <CollectionsSection />
      <FeaturedProducts />
      <StorySection />
      <ArtisansSection />
      <ProcessSection />
      <TestimonialsSection />
      <HomeFaq />
      <NewsletterSection />
    </>
  );
}
