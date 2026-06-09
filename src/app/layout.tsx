import type { Metadata, Viewport } from 'next';
import { Analytics } from '@/components/Analytics';
import { FloatButton } from '@/components/FloatButton';
// import { TypebotWidgets } from "@/components/Typebot";
import { SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Método ACESSO — Treinamento Gratuito para Empresários | SDW.hub',
    template: '%s',
  },
  applicationName: 'Método ACESSO — SDW.hub',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0e22',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Performance: preload das fontes críticas */}
        <link
          rel="preload"
          href="/fonts/Poppins-ExtraBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Performance: preload da imagem-herói (LCP) */}
        <link
          rel="preload"
          as="image"
          href="/assets/speakers-marcel-lara.webp"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Preconnect dos serviços de terceiros */}
        <link rel="preconnect" href="https://connect.facebook.net" />
      </head>
      {/* suppressHydrationWarning: extensões de browser (Grammarly, LastPass,
          Google Translate etc.) injetam atributos no <body> antes da hydration.
          No React 19 isso causa erro; este flag suprime apenas mismatches no
          próprio elemento body, não em seus filhos. */}
      <body suppressHydrationWarning>
        {children}
        <Analytics />
        <FloatButton />
        {/* <TypebotWidgets /> */}
      </body>
    </html>
  );
}
