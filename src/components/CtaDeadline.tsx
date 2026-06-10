'use client';

import { useEffect, useState } from 'react';

// 26 jun 2026 às 08:59 horário de Brasília (BRT, UTC-3)
const DEADLINE = new Date('2026-06-26T08:59:00-03:00');

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function getTimeLeft() {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff % 86_400_000) / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1_000),
  };
}

type TimeLeft = { d: number; h: number; m: number; s: number } | null;

export function CtaDeadline({ btnClassName }: { btnClassName: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1_000);
    return () => clearInterval(id);
  }, []);

  const expired = timeLeft === null;

  useEffect(() => {
    if (!expired) return;

    // Botões CTA de texto: remove href (elimina URL no status bar), muda texto, marca atributo
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="inlead.digital"]:not([aria-label="Inlead"])')
      .forEach((el) => {
        el.removeAttribute('href');
        el.dataset.expired = 'true';
        el.textContent = 'INSCRIÇÕES ENCERRADAS';
      });

    // FloatButton: remove href e marca atributo
    const floatBtn = document.querySelector<HTMLAnchorElement>('a[aria-label="Inlead"]');
    if (floatBtn) {
      floatBtn.removeAttribute('href');
      floatBtn.dataset.expired = 'true';
    }

    const style = document.createElement('style');
    style.id = 'deadline-guard';
    style.textContent =
      'a[data-expired]:not([aria-label="Inlead"]){pointer-events:none!important;opacity:.4!important;position:relative!important;}' +
      'a[data-expired]:not([aria-label="Inlead"])::after{content:""!important;position:absolute!important;inset:0!important;cursor:not-allowed!important;pointer-events:auto!important;}' +
      'a[aria-label="Inlead"][data-expired]{opacity:.4!important;pointer-events:none!important;}' +
      'a[aria-label="Inlead"][data-expired]::after{content:""!important;position:absolute!important;inset:0!important;border-radius:9999px!important;cursor:not-allowed!important;pointer-events:auto!important;}' +
      'header{top:44px!important;}';
    document.head.appendChild(style);
    return () => style.remove();
  }, [expired]);

  // Render sem hidratação no SSR — fallback estático
  if (timeLeft === undefined) {
    return (
      <a href="https://inlead.digital/sdwhub" className={`mt-9 ${btnClassName}`}>
        QUERO APLICAR PARA O TREINAMENTO →
      </a>
    );
  }

  return (
    <>
      {expired && (
        <div
          aria-live="assertive"
          role="alert"
          className="fixed inset-x-0 top-0 z-100 bg-black/80 py-3 text-center text-sm font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
        >
          INGRESSOS ESGOTADOS
        </div>
      )}

      <div className="border-gold-soft/20 rounded-4xl border bg-white/10 p-6 backdrop-blur-sm">
        <div className="mt-8 flex flex-col items-center gap-3">
          {!expired && (
            <>
              <p className="text-[12.5px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                Oferta por tempo limitado.
              </p>
              <div className="flex gap-2.5 text-center">
                {[
                  { key: 'd', val: timeLeft.d, label: 'dias' },
                  { key: 'h', val: timeLeft.h, label: 'horas' },
                  { key: 'm', val: timeLeft.m, label: 'min' },
                  { key: 's', val: timeLeft.s, label: 'seg' },
                ].map(({ key, val, label }) => (
                  <div key={key} className="flex flex-col items-center">
                    <span className="min-w-13 rounded-xl bg-black/30 px-3 py-2.5 text-[1.5rem] leading-none font-extrabold text-white tabular-nums">
                      {pad(val)}
                    </span>
                    <span className="mt-1.5 text-[10px] tracking-[0.12em] text-white/50 uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-3 flex flex-col items-center gap-1">
            <span className="text-[11.5px] tracking-[0.14em] text-white/50 uppercase">
              Valor total do treinamento
            </span>
            <span className="text-[0.98rem] font-light text-white/40 line-through">R$ 997,00</span>
            <span className="text-gold text-[2.6rem] leading-none font-extrabold tracking-[-0.03em]">
              R$ 0,00
            </span>
          </div>

          {expired ? (
            <button disabled className={`mt-8 cursor-not-allowed opacity-40 ${btnClassName}`}>
              INSCRIÇÕES ENCERRADAS
            </button>
          ) : (
            <a href="https://inlead.digital/sdwhub" className={`mt-8 ${btnClassName}`}>
              QUERO APLICAR PARA O TREINAMENTO →
            </a>
          )}
        </div>
      </div>
    </>
  );
}
