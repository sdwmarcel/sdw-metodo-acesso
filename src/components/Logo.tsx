type Variant = 'gold' | 'purple' | 'white' | 'acesso-branco' | 'acesso-preto';

type Props = {
  /** gold = fundo escuro · purple = fundo claro · white = foto/gradiente.
   *  acesso-branco = logo Método ACESSO branca · acesso-preto = logo Método ACESSO preta. */
  variant: Variant;
  className?: string;
};

/** Wordmark sdw.hub / Método ACESSO em <picture>. */
export function Logo({ variant, className }: Props) {
  if (variant === 'acesso-branco' || variant === 'acesso-preto') {
    const color = variant === 'acesso-branco' ? 'branco' : 'preto';
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/assets/sdw-metodo-acesso-${color}.webp`}
        alt="Método ACESSO — SDW.hub"
        className={className}
      />
    );
  }
  const base = `/assets/sdw-logo-${variant}`;
  return (
    <picture>
      <source srcSet={`${base}.webp`} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}.png`}
        alt="SDW.hub - Método Acesso"
        width={1278}
        height={614}
        className={className}
      />
    </picture>
  );
}
