"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function NewsletterForm({
  tone = "dark",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const dark = tone === "dark";

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "flex items-start gap-3 border p-5",
          dark ? "border-ivory/20 bg-ivory/5" : "border-line bg-cream/40",
          className,
        )}
        role="status"
      >
        <span
          className={cn(
            "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full",
            dark ? "bg-ochre text-ink" : "bg-terra text-ivory",
          )}
        >
          <Check size={16} strokeWidth={2} />
        </span>
        <div>
          <p className={cn("font-display text-2xl", dark && "text-ivory")}>
            Misaotra, vous êtes des nôtres.
          </p>
          <p
            className={cn(
              "mt-1 text-xs leading-relaxed",
              dark ? "text-ivory/60" : "text-muted",
            )}
          >
            Vous recevrez nos nouvelles pièces, portraits d’artisans et récits
            de Madagascar. Pas plus de deux lettres par mois.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className={cn("w-full", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Votre adresse e-mail</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre adresse e-mail"
            className={cn(
              "h-[52px] w-full border bg-transparent px-4 text-sm outline-none transition-colors",
              dark
                ? "border-ivory/25 text-ivory placeholder:text-ivory/40 focus:border-ochre"
                : "border-line text-ink placeholder:text-muted/55 focus:border-terra",
            )}
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "btn shrink-0 disabled:opacity-60",
            dark
              ? "bg-ochre text-ink hover:bg-ivory"
              : "bg-ink text-ivory hover:bg-terra",
          )}
        >
          {status === "loading" ? "Inscription…" : "S’inscrire"}
          <ArrowRight size={15} />
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between gap-4">
        <p
          className={cn(
            "text-[9px] uppercase tracking-[0.14em]",
            dark ? "text-ivory/40" : "text-muted",
          )}
        >
          Deux lettres par mois · Désinscription en un clic
        </p>
        <AnimatePresence>
          {status === "loading" && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "text-[9px] uppercase tracking-[0.14em]",
                dark ? "text-ochre" : "text-terra",
              )}
            >
              Envoi…
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
