import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

// Importar componentes
import Header from "@/components/en/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/en/Footer";

// Proveedor de idioma
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - Sigue las tendencias de series",
  description:
    "La app esencial para seguir las tendencias de series más vistas de la semana y el día",
};

// Textos traducidos al español
const translations = {
  hero: {
    title: "Sigue lo que es tendencia en el mundo de las series",
    subtitle:
      "Descarga la app esencial para estar al día con las series más vistas de la semana y el día",
    ctaButton: "Descargar ahora",
    statsUsers: "Usuarios activos",
    statsSeries: "Series monitoreadas",
    statsRatings: "Valoraciones de usuarios",
  },
  features: {
    title: "¿Qué ofrece SeriesTrend?",
    subtitle:
      "Descubre todas las herramientas y funciones que transformarán la forma en que sigues tus series favoritas.",
    items: [
      {
        title: "Sigue las tendencias",
        description:
          "Consulta qué series son tendencia en el momento, con rankings diarios y semanales actualizados en tiempo real.",
      },
      {
        title: "Información de series con IA",
        description:
          "Accede a curiosidades sobre tus series favoritas gracias a la IA, con información exclusiva y detalles de temporadas y episodios.",
      },
      {
        title: "Notificaciones",
        description:
          "Recibe alertas cuando tus series favoritas entren en tendencia o estrenen nuevos episodios.",
      },
      {
        title: "Búsqueda avanzada",
        description:
          "Encuentra series rápidamente por título, género, plataforma o popularidad con filtros específicos.",
      },
      {
        title: "Calendario de estrenos",
        description:
          "Mantente al día con las fechas de estreno de los próximos episodios de tus series favoritas.",
      },
      {
        title: "Listas personalizadas",
        description:
          "Crea y organiza listas personalizadas con las series que ves, has visto o planeas ver.",
      },
    ],
  },
  screenshots: {
    title: "Mira SeriesTrend en acción",
    subtitle: "Descubre la interfaz intuitiva y elegante de nuestra app",
  },
  testimonials: {
    title: "Lo que dicen nuestros usuarios",
    subtitle:
      "Descubre por qué más de 10.000 personas ya confían en SeriesTrend para seguir sus series favoritas.",
  },
  download: {
    title: "Descargar ahora",
    subtitle: "Disponible para iOS y Android",
    googlePlay: "Consíguelo en Google Play",
    appStore: "Descargar en App Store",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <LanguageProvider language="es">
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
