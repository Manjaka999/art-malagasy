"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [firstName, setFirstName] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setFirstName(String(data.get("firstName") ?? ""));
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 850);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[420px] flex-col items-start justify-center border border-line bg-cream/40 p-8 sm:p-12"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-terra text-ivory">
          <Check size={22} strokeWidth={1.8} />
        </span>
        <h3 className="mt-6 font-display text-4xl leading-tight">
          Misaotra{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Votre message est bien arrivé à l’atelier. Nous vous répondons sous 24
          heures ouvrées, du lundi au vendredi.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-7"
        >
          Envoyer un autre message
          <ArrowRight size={15} />
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="field-label">Prénom *</span>
          <input
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Votre prénom"
            className="field"
          />
        </label>
        <label>
          <span className="field-label">Nom *</span>
          <input
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Votre nom"
            className="field"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="field-label">E-mail *</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.com"
            className="field"
          />
        </label>
        <label>
          <span className="field-label">Téléphone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+261 …"
            className="field"
          />
        </label>
      </div>

      <label>
        <span className="field-label">Motif de votre message *</span>
        <select name="subject" required className="field cursor-pointer">
          <option value="">Choisir un sujet</option>
          <option value="commande">Une question sur une commande</option>
          <option value="sur-mesure">Une commande sur mesure</option>
          <option value="artisan">Travailler avec Vakoka</option>
          <option value="presse">Presse & collaborations</option>
          <option value="autre">Autre demande</option>
        </select>
      </label>

      <label>
        <span className="field-label">Votre message *</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Dites-nous tout…"
          className="field resize-none"
        />
      </label>

      <label className="flex items-start gap-3 text-[11px] leading-relaxed text-muted">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-3.5 accent-[#a94f2e]"
        />
        <span>
          J’accepte que mes informations soient utilisées pour répondre à ma
          demande, conformément à la{" "}
          <a href="/confidentialite" className="text-ink underline underline-offset-2">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-dark mt-1 w-full disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
