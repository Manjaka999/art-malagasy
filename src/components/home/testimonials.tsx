"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Le lamba est encore plus beau en vrai. La soie change de reflet selon la lumière, et l’on sent le travail de la main dans chaque frange. L’emballage était un cadeau à lui seul.",
    name: "Claire M.",
    location: "Paris, France",
    piece: "Lamba Soie Sauvage",
    initials: "CM",
  },
  {
    quote:
      "Nous cherchions une pièce forte pour notre entrée. Le masque Vohitra a trouvé sa place naturellement. L’échange avec l’équipe avant l’achat était précis, humain et sans pression.",
    name: "Thomas & Léa",
    location: "Lyon, France",
    piece: "Masque Vohitra",
    initials: "TL",
  },
  {
    quote:
      "J’ai offert les statuettes à ma mère. Elle a été touchée par le certificat signé par l’artisan et par la petite carte manuscrite. C’est rare, cette attention au détail.",
    name: "Aïcha B.",
    location: "Genève, Suisse",
    piece: "Statuettes Vakoka",
    initials: "AB",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  const testimonial = testimonials[index];

  const go = (direction: number) => {
    setIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-cream/45 py-20 sm:py-24 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-terra" />
            <p className="eyebrow text-muted">Des mots reçus</p>
          </div>
          <h2 className="mt-5 font-display text-[42px] leading-[0.98] sm:text-6xl">
            Ce que l’on
            <br />
            <span className="italic text-terra">nous écrit.</span>
          </h2>

          <div className="mt-8 border-t border-line pt-6">
            <div className="flex items-center gap-1 text-ochre">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-display text-4xl leading-none">4,9 / 5</p>
            <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-muted">
              Une note nourrie par les messages reçus après chaque livraison.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid size-10 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid size-10 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
              aria-label="Témoignage suivant"
            >
              <ArrowRight size={15} />
            </button>
            <span className="ml-3 text-[10px] tabular-nums text-muted">
              0{index + 1} / 0{testimonials.length}
            </span>
          </div>
        </div>

        <div
          className="relative min-h-[360px] border-l-0 border-line lg:border-l lg:pl-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote
            size={42}
            strokeWidth={1}
            className="text-terra/30"
            aria-hidden="true"
          />
          <div aria-live="polite" className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5"
              >
                <p className="max-w-3xl font-display text-[30px] leading-[1.18] sm:text-[40px] lg:text-[46px]">
                  « {testimonial.quote} »
                </p>
                <footer className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-forest text-[10px] font-semibold tracking-[0.08em] text-ivory">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-xs font-semibold">{testimonial.name}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="hidden h-8 w-px bg-line sm:block" />
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                    {testimonial.piece}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className="group py-2"
                aria-label={`Voir le témoignage de ${item.name}`}
              >
                <span
                  className={
                    dotIndex === index
                      ? "block h-[2px] w-8 bg-terra transition-all duration-300"
                      : "block h-[2px] w-8 bg-ink/15 transition-all duration-300 group-hover:bg-ink/40"
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
