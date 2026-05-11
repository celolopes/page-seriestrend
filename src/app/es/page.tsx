import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// Importar componentes
import Header from "@/components/en/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialShowcase from "@/components/SocialShowcase";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/en/Footer";

// Proveedor de idioma
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - Sigue series y conecta con amigos",
  description:
    "Sigue series, mira lo que tus amigos ven, reacciona, comparte recomendaciones y gana badges. Tracking social con sincronización Trakt.tv.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <Analytics />
      <LanguageProvider language="es">
        <Header />
        <Hero />
        <Features />
        <SocialShowcase />
        <Screenshots />
        <Testimonials />
        <Download />
        <Footer />
      </LanguageProvider>
    </main>
  );
}
