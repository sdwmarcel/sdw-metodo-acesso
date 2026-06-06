import { SPEAKERS_IMG } from "@/lib/content";

type Props = {
  /** Imagem-herói (LCP): prioridade alta + eager. */
  priority?: boolean;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Foto dos palestrantes em <picture> (WebP nativo + fallback PNG).
 * width/height preservam a proporção real (1122×1402) → sem CLS.
 */
export function SpeakersImage({ priority = false, width, height, alt, className, style }: Props) {
  return (
    <picture style={{ display: "contents" }}>
      <source srcSet={SPEAKERS_IMG.webp} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SPEAKERS_IMG.png}
        alt={alt ?? SPEAKERS_IMG.alt}
        width={width}
        height={height}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={style}
      />
    </picture>
  );
}
