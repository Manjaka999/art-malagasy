"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpen?: number;
  className?: string;
};

export function FaqAccordion({
  items,
  defaultOpen = 0,
  className,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
              aria-expanded={open}
            >
              <span className="flex gap-4 sm:gap-6">
                <span className="mt-1.5 text-[9px] tabular-nums text-muted/60">
                  0{index + 1}
                </span>
                <span className="font-display text-xl leading-snug sm:text-2xl">
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300",
                  open && "rotate-45 border-terra bg-terra text-ivory",
                )}
              >
                <Plus size={15} strokeWidth={1.6} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-8 pr-4 text-sm leading-relaxed text-muted sm:pl-12 sm:text-[15px]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
