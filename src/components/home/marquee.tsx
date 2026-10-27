const items = [
  "Fait main à Madagascar",
  "Pièces uniques",
  "Matières naturelles",
  "Artisans partenaires",
  "Livraison soignée",
  "Depuis 2016",
];

export function TrustMarquee() {
  return (
    <div className="group overflow-hidden border-y border-ink/10 bg-cream/55 py-3.5">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <div key={item} className="flex items-center">
                <span className="whitespace-nowrap px-7 text-[9px] font-semibold uppercase tracking-[0.24em] text-muted sm:px-10 sm:text-[10px]">
                  {item}
                </span>
                <span className="size-1 rotate-45 bg-terra/65" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
