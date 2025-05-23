import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeriesTrend - Acompanhe as Tendências de Séries",
  description:
    "SeriesTrend - O aplicativo essencial para acompanhar as tendências de séries mais assistidas na semana e no dia.",
  keywords: [
    "séries",
    "tendências",
    "aplicativo",
    "streaming",
    "rastreamento",
    "séries populares",
  ],
  openGraph: {
    title: "SeriesTrend - Acompanhe as Tendências de Séries",
    description:
      "O aplicativo essencial para acompanhar as tendências de séries mais assistidas na semana e no dia.",
    url: "https://seriestrend.vercel.app",
    siteName: "SeriesTrend",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SeriesTrend - Acompanhe as Tendências de Séries",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeriesTrend - Acompanhe as Tendências de Séries",
    description:
      "O aplicativo essencial para acompanhar as tendências de séries mais assistidas na semana e no dia.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Favicon padrão para compatibilidade geral */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Favicon SVG para navegadores modernos */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
