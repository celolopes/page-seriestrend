import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// Importando componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialShowcase from "@/components/SocialShowcase";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

// Provider de idioma
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - Track Series & Connect with Friends",
  description:
    "Track series, see what your friends are watching, react, share recommendations and earn badges. Social tracking with Trakt.tv sync.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <Analytics />
      <LanguageProvider language="en">
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
