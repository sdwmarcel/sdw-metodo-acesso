'use client';

import { useEffect } from 'react';

export default function UtmForwarder() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[href*="inlead.digital"]');
      if (!link) return;

      const origem = new URLSearchParams(window.location.search);
      if ([...origem].length === 0) return; // sem UTM na URL, não faz nada

      const destino = new URL(link.href);
      origem.forEach((valor, chave) => {
        if (!destino.searchParams.has(chave)) {
          destino.searchParams.set(chave, valor);
        }
      });
      link.href = destino.toString();
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null; // não renderiza nada visível
}
