type Variant = "gold" | "purple" | "white";

type Props = {
  /** gold = fundo escuro · purple = fundo claro · white = foto/gradiente. */
  variant: Variant;
  className?: string;
};

/** Wordmark sdw.hub em <picture> (WebP lossless + fallback PNG). 1278×614. */
export function Logo({ variant, className }: Props) {
  const base = `/assets/sdw-logo-${variant}`;
  return (
    <picture>
      <source srcSet={`${base}.webp`} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${base}.png`} alt="SDW.hub" width={1278} height={614} className={className} />
    </picture>
  );
}
