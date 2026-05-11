import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seriestrend.vercel.app"),
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
    url: "https://seriestrend.vercel.app",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
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
