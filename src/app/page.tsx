import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

// Provider de idioma
import { LanguageProvider } from "@/context/LanguageContext";

// Imports com carregamento dinâmico para melhorar performance
// const Screenshots = dynamic(() => import('@/components/Screenshots'), { ssr: true });
// const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      {/* Adicionado Analytics para análise de acessos com Vercel */}
      <Analytics />
      <LanguageProvider language="pt-BR">
        <Header />
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
        <Download />
        <Footer />
      </LanguageProvider>
    </main>
  );
}
