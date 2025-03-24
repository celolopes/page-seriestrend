import React from "react";

// Componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

// Imports com carregamento dinâmico para melhorar performance
// const Screenshots = dynamic(() => import('@/components/Screenshots'), { ssr: true });
// const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
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
