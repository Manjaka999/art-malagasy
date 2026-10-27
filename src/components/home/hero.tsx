"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "120", label: "artisans partenaires" },
  { value: "12", label: "régions représentées" },
  { value: "100%", label: "façonné à la main" },
];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (delay: number) => ({
    y: 0,
    transition: {
      duration: 0.95,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory pb-16 pt-8 sm:pt-10 lg:min-h-[calc(100svh-110px)] lg:pb-14 lg:pt-10"
    >
      <div
        className="pointer-events-none absolute -right-[16%] top-[12%] size-[70vw] rounded-full bg-[radial-gradient(circle,rgba(199,154,88,0.15),transparent_66%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-[20%] bottom-0 size-[55vw] rounded-full bg-[radial-gradient(circle,rgba(169,79,46,0.07),transparent_68%)]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 border-b border-ink/15 pb-2"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-terra opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-terra" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-muted sm:text-[10px]">
              Collection 2026 · Terre & fibres
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(3.4rem,7.4vw,6.9rem)] leading-[0.9] tracking-[-0.035em]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                custom={0.12}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={lineVariants}
              >
                L’âme de
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block italic text-terra"
                custom={0.22}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={lineVariants}
              >
                Madagascar,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                custom={0.32}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={lineVariants}
              >
                entre vos mains.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[470px] text-[14px] leading-relaxed text-muted sm:text-[15px]"
          >
            Sculptures, lambas, vanneries et céramiques façonnés lentement par
            des artisans malgaches. Des pièces uniques, choisies pour traverser
            le temps et raconter leur territoire.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/boutique" className="btn-dark group">
              Explorer la boutique
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/artisans"
              className="link-underline py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Rencontrer les artisans
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 grid max-w-[480px] grid-cols-3 gap-4 border-t border-ink/15 pt-6 sm:mt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl leading-none sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-muted sm:text-[9px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] pb-14 pl-8 sm:pl-20 lg:pb-0 lg:pl-8 xl:pl-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={reduceMotion ? undefined : { y: mainY }}
            className="relative ml-auto aspect-[3/4] w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[8px] bg-cream shadow-[0_30px_80px_-50px_rgba(31,26,20,0.65)]"
          >
            <Image
              src="/images/hero-mask.jpg"
              alt="Masque malgache sculpté à la main présenté sur un étal de marché"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-ivory sm:p-7">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-ivory/60">
                  Pièce du mois
                </p>
                <p className="mt-1 font-display text-2xl leading-none sm:text-3xl">
                  Masque Vohitra
                </p>
              </div>
              <span className="text-[9px] uppercase tracking-[0.14em] text-ivory/60">
                245 €
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24, rotate: -9 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={reduceMotion ? undefined : { y: smallY }}
            className="absolute bottom-2 left-0 w-[41%] max-w-[208px] border-[6px] border-ivory bg-ivory shadow-[0_20px_50px_-25px_rgba(31,26,20,0.55)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src="/images/hero-textile.jpg"
                alt="Textile malgache aux couleurs chaudes"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <p className="px-2 py-2 text-[7px] font-semibold uppercase tracking-[0.14em] text-muted">
              Textile · Soie sauvage
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, type: "spring", bounce: 0.3 }}
            style={reduceMotion ? undefined : { y: badgeY }}
            className="absolute -right-1 top-3 sm:right-0 lg:-right-3"
          >
            <div className="relative grid size-[104px] place-items-center rounded-full border border-ink/15 bg-ivory/85 backdrop-blur sm:size-[122px]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full animate-spin-slow"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-badge-path"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-ink text-[7.1px] font-semibold uppercase tracking-[0.22em]">
                  <textPath href="#hero-badge-path">
                    Fait main à Madagascar · Pièces uniques ·
                  </textPath>
                </text>
              </svg>
              <div className="text-center">
                <p className="font-display text-2xl leading-none">100%</p>
                <p className="mt-0.5 text-[6px] font-semibold uppercase tracking-[0.17em] text-muted">
                  fait main
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="absolute bottom-10 right-0 hidden w-[178px] border border-line bg-ivory/95 p-4 backdrop-blur sm:block"
          >
            <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-muted">
              Nouvelle collection
            </p>
            <p className="mt-1.5 font-display text-xl leading-tight">
              Terre & fibres
            </p>
            <Link
              href="/boutique"
              className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[8px] font-semibold uppercase tracking-[0.16em]"
            >
              Découvrir
              <ArrowUpRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.7 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 xl:flex"
      >
        <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-muted">
          Découvrir
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink/20 p-1.5">
          <motion.span
            className="size-1 rounded-full bg-terra"
            animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <ArrowDown size={12} className="text-muted" />
      </motion.div>
    </section>
  );
}
