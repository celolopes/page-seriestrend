import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/site-seo";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
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
    url: "./",
    siteName: "SeriesTrend",
    images: [
      {
        url: "/images/og-image.jpg",
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
  return <>{children}</>;
}
