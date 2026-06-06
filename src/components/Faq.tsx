"use client";

import { Accordion } from "@base-ui-components/react/accordion";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { cn } from "@/lib/cn";

type FaqItem = { q: string; a: string };

type FaqProps = {
  items: FaqItem[];
  /** "dark" = linhas com hairline gold; "card" = cartões claros. */
  variant?: "dark" | "card";
  accent?: "gold" | "rose";
  className?: string;
};

/**
 * FAQ acessível (Base UI Accordion): teclado, aria, foco — sem hover-only.
 * Animação de altura via grid-template-rows (0fr → 1fr), suave e sem CLS.
 */
export function Faq({ items, variant = "dark", accent = "gold", className }: FaqProps) {
  const iconColor = accent === "gold" ? "text-gold" : "text-rose";

  return (
    <Accordion.Root className={cn("mx-auto max-w-[840px]", className)}>
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          className={cn(
            variant === "dark"
              ? "border-t border-[rgba(240,198,140,0.16)] last:border-b"
              : "mb-3 overflow-hidden rounded-2xl border border-line bg-white",
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full cursor-pointer items-center justify-between gap-5 text-left font-medium",
                variant === "dark" ? "py-[26px] text-lg" : "px-6 py-[22px] text-[1.1rem]",
              )}
            >
              <span>{item.q}</span>
              <PlusIcon
                weight="bold"
                className={cn(
                  "size-5 shrink-0 transition-transform duration-300 group-data-[panel-open]:rotate-45",
                  iconColor,
                )}
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel
            className={cn(
              "grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "data-[open]:grid-rows-[1fr]",
            )}
          >
            <div className="overflow-hidden">
              <p
                className={cn(
                  "font-light leading-relaxed",
                  variant === "dark" ? "pb-[26px] text-ink-soft" : "px-6 pb-[22px] text-ink-soft",
                )}
              >
                {item.a}
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
