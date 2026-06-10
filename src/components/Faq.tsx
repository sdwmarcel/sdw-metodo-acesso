'use client';

import { Accordion } from '@base-ui-components/react/accordion';
import { PlusIcon } from '@phosphor-icons/react/dist/csr/Plus';
import { cn } from '@/lib/cn';

type FaqItem = { q: string; a: string };

type FaqProps = {
  items: FaqItem[];
  /** "dark" = linhas com hairline gold; "card" = cartões claros. */
  variant?: 'dark' | 'card';
  accent?: 'gold' | 'rose';
  className?: string;
};

/**
 * FAQ acessível (Base UI Accordion): teclado, aria, foco — sem hover-only.
 * Animação de altura via grid-template-rows (0fr → 1fr), suave e sem CLS.
 */
export function Faq({ items, variant = 'dark', accent = 'gold', className }: FaqProps) {
  const iconColor = accent === 'gold' ? 'text-gold' : 'text-rose';

  return (
    <Accordion.Root className={cn('mx-auto max-w-210', className)}>
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          className={cn(
            variant === 'dark'
              ? 'border-t border-[rgba(240,198,140,0.16)] last:border-b'
              : 'border-line mb-3 overflow-hidden rounded-2xl border bg-white',
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                'group flex w-full cursor-pointer items-center justify-between gap-5 text-left font-medium',
                variant === 'dark' ? 'py-6.5 text-lg' : 'px-6 py-5.5 text-[1.1rem]',
              )}
            >
              <span>{item.q}</span>
              <PlusIcon
                weight="bold"
                className={cn(
                  'size-5 shrink-0 transition-transform duration-300 group-data-panel-open:rotate-45',
                  iconColor,
                )}
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel
            className={cn(
              'ease-brand grid grid-rows-[0fr] transition-[grid-template-rows] duration-400',
              'data-open:grid-rows-[1fr]',
            )}
          >
            <div className="overflow-hidden">
              <p
                className={cn(
                  'leading-relaxed font-light',
                  variant === 'dark' ? 'text-line/50 pb-6.5' : 'text-ink-soft px-6 pb-5.5',
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
