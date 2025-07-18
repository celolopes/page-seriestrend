"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const screenshotsPt = [
  {
    src: "/images/screenshot-1.png",
    alt: "Lista de séries em tendência",
    title: "Lista de Tendências",
    description:
      "Veja as séries mais populares do momento, organizadas por relevância.",
  },
  {
    src: "/images/screenshot-3.png",
    alt: "Detalhes da série",
    title: "Detalhes da Série",
    description:
      "Acesse informações detalhadas sobre cada série, incluindo avaliações e estatísticas.",
  },
  {
    src: "/images/screenshot-2.png",
    alt: "Busca de séries e sugestões",
    title: "Busca de Séries e Sugestões",
    description:
      "Encontre séries rapidamente com a busca inteligente e receba sugestões personalizadas das séries em tendência.",
  },
  {
    src: "/images/screenshot-4.png",
    alt: "Lista personalizada de séries",
    title: "Lista Personalizada",
    description:
      "Organize suas séries favoritas em listas personalizadas para acompanhar seu progresso.",
  },
  {
    src: "/images/screenshot-5.png",
    alt: "Curiosidades sobre a série",
    title: "Curiosidades sobre a série",
    description:
      "Veja curiosidades sobre a série, incluindo curiosidades sobre os personagens, bastidores e o elenco através da IA.",
  },
];

const screenshotsEn = [
  {
    src: "/images/screenshot-1.png",
    alt: "Trending series list",
    title: "Trending List",
    description:
      "See the most popular series at the moment, organized by relevance.",
  },
  {
    src: "/images/screenshot-3.png",
    alt: "Series details",
    title: "Series Details",
    description:
      "Access detailed information about each series, including ratings and statistics.",
  },
  {
    src: "/images/screenshot-2.png",
    alt: "Series search and suggestions",
    title: "Series Search and Suggestions",
    description:
      "Find series quickly with smart search and get personalized suggestions of trending series.",
  },
  {
    src: "/images/screenshot-4.png",
    alt: "Custom series list",
    title: "Custom List",
    description:
      "Organize your favorite series in custom lists to track your progress.",
  },
  {
    src: "/images/screenshot-5.png",
    alt: "Series trivia",
    title: "Series Trivia",
    description:
      "See fun facts about the series, including character trivia, behind the scenes and cast information through AI.",
  },
];

const Screenshots = () => {
  const { translations, language } = useLanguage();
  const t = translations.screenshots;

  // Usa lista de screenshots do contexto se existir
  const screenshots = t.list || screenshotsPt;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, activeIndex]);

  // Textos com base no idioma para botões de controle
  const prevButtonLabel = t.prev || "Imagem anterior";
  const nextButtonLabel = t.next || "Próxima imagem";
  const pauseLabel = t.pause || "Pausar";
  const playLabel = t.play || "Reproduzir";
  const viewImageLabel =
    t.viewImage || ((index: number) => `Ver imagem ${index + 1}`);

  // ID da seção baseado no idioma
  const sectionId = language === "en" ? "screenshots" : "prints";

  return (
    <section id={sectionId} className="py-20 bg-app-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title || "Conheça o Series"}
            <span className="text-accent">Trend</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t.subtitle ||
              "Veja como é fácil e intuitivo acompanhar as tendências de séries com nosso aplicativo."}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 md:block hidden">
            <button
              onClick={prevSlide}
              className="bg-app-blue/70 hover:bg-accent text-white p-3 rounded-full transition-colors"
              aria-label={prevButtonLabel}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 md:block hidden">
            <button
              onClick={nextSlide}
              className="bg-app-blue/70 hover:bg-accent text-white p-3 rounded-full transition-colors"
              aria-label={nextButtonLabel}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pause/Play Button */}
          <div className="absolute top-0 right-0 z-10">
            <button
              onClick={togglePause}
              className="bg-app-blue/70 hover:bg-accent text-white p-2 rounded-full transition-colors"
              aria-label={isPaused ? playLabel : pauseLabel}
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
          </div>

          {/* Carousel */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[600px] w-[300px]">
                <div className="absolute -top-4 -left-4 bg-accent/20 w-24 h-24 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 bg-accent/20 w-24 h-24 rounded-full blur-3xl"></div>
                <Image
                  src={screenshots[activeIndex].src}
                  alt={screenshots[activeIndex].alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {screenshots[activeIndex].description}
              </p>

              {/* Mobile Controls */}
              <div className="flex justify-center gap-4 md:hidden">
                <button
                  onClick={prevSlide}
                  className="bg-app-blue hover:bg-accent text-white p-3 rounded-full transition-colors"
                  aria-label={prevButtonLabel}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={togglePause}
                  className="bg-app-blue hover:bg-accent text-white p-3 rounded-full transition-colors"
                  aria-label={isPaused ? playLabel : pauseLabel}
                >
                  {isPaused ? <Play size={24} /> : <Pause size={24} />}
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-app-blue hover:bg-accent text-white p-3 rounded-full transition-colors"
                  aria-label={nextButtonLabel}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center md:justify-start gap-2 mt-6">
                {screenshots.map((_: unknown, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-accent" : "bg-gray-500"
                    }`}
                    aria-label={viewImageLabel(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
