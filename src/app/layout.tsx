import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/site-seo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "SeriesTrend - Descubra Séries e Conecte-se",
  description:
    "SeriesTrend - Acompanhe suas séries, veja o que seus amigos estão assistindo, compartilhe recomendações e conquiste badges na sua rede social de séries.",
  keywords: [
    "séries",
    "rede social",
    "amigos",
    "streaming",
    "rastreamento",
    "trakt",
    "badges",
    "comunidade",
  ],
  openGraph: {
    title: "SeriesTrend - Descubra Séries e Conecte-se",
    description:
      "Acompanhe suas séries, veja o que seus amigos estão assistindo, compartilhe recomendações e conquiste badges na sua rede social de séries.",
    url: "./",
    siteName: "SeriesTrend",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SeriesTrend - Descubra Séries e Conecte-se",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeriesTrend - Descubra Séries e Conecte-se",
    description:
      "Acompanhe suas séries, veja o que seus amigos estão assistindo, compartilhe recomendações e conquiste badges na sua rede social de séries.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "464x464", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        {/* Google tag (gtag.js) - Adicionado para Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N7JSFYHCBC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N7JSFYHCBC');
          `,
          }}
        />
        {/* Fim Google tag (gtag.js) */}
        {children}
      </body>
    </html>
  );
}
