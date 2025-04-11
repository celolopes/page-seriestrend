import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

// Importando componentes existentes em português
import Header from "@/components/en/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SeriesTrend - Track What's Trending",
  description:
    "The essential app to track the most watched TV series trends of the week and day",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
