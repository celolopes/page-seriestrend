import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seriestrend.vercel.app"),
  title: "SeriesTrend - Sigue las tendencias de series",
  description:
    "La app esencial para seguir las tendencias de series más vistas de la semana y el día",
  keywords: [
    "seguimiento de series",
    "series de televisión",
    "series en tendencia",
    "app de series",
    "app de entretenimiento",
  ],
  openGraph: {
    title: "SeriesTrend - Sigue las tendencias de series",
    description:
      "La app esencial para seguir las tendencias de series más vistas de la semana y el día",
    url: "https://seriestrend.vercel.app/es",
    siteName: "SeriesTrend",
    images: [
      {
        url: "https://seriestrend.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista previa de la app SeriesTrend",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeriesTrend - Sigue las tendencias de series",
    description:
      "La app esencial para seguir las tendencias de series más vistas de la semana y el día",
    images: ["https://seriestrend.vercel.app/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
