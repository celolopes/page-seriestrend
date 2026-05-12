"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const screenshotsPt = [
  {
    src: "/images/screenshot-1.png",
    alt: "Lista de séries em tendência",
    title: "Lista de Tendências",
    description: "Veja as séries mais populares do momento, organizadas por relevância.",
  },
  {
    src: "/images/screenshot-3.png",
    alt: "Detalhes da série",
    title: "Detalhes da Série",
    description: "Acesse informações detalhadas sobre cada série, incluindo avaliações e estatísticas.",
  },
  {
    src: "/images/Screenshot-8.png",
    alt: "Dashboard Social",
    title: "Seu Perfil Social",
    description: "Gerencie seus amigos, seguidores e suas conquistas.",
  },
  {
    src: "/images/Screenshot-10.png",
    alt: "Badges",
    title: "Badges e Gamificação",
    description: "Ganhe badges exclusivas enquanto assiste suas séries.",
  },
  {
    src: "/images/Screenshot-11.png",
    alt: "Comparação",
    title: "Comparação de Amigos",
    description: "Veja quem assistiu mais episódios este mês.",
  },
  {
    src: "/images/screenshot-2.png",
    alt: "Busca de Séries",
    title: "Busca Completa",
    description: "Busca completa de séries e diretores de séries.",
  },
  {
    src: "/images/screenshot-4.png",
    alt: "Gráficos de Tendências",
    title: "Gráficos de Tendências",
    description: "Gráficos das séries e streamings que são tendências.",
  },
];

import { IPhoneMockup } from "./ui/iphone-mockup";

const Screenshots = () => {
  const { translations, language } = useLanguage();
  const t = translations.screenshots;
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

  const sectionId = language === "en" ? "screenshots" : "prints";

  return (
    <section id={sectionId} className="py-24 relative overflow-hidden bg-app-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {t.title} <span className="text-primary">SeriesTrend</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.subtitle ||
              "Veja como é fácil e intuitivo acompanhar as tendências de séries com nosso aplicativo."}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
          {/* Phone Frame Container */}
          <div className="relative flex-shrink-0">
            <IPhoneMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={screenshots[activeIndex].src}
                    alt={screenshots[activeIndex].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </IPhoneMockup>
            
            {/* Navigation Buttons (Desktop) */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-20 -translate-y-1/2 p-4 rounded-full glass hover:bg-white/10 text-white transition-all hidden lg:block"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-20 -translate-y-1/2 p-4 rounded-full glass hover:bg-white/10 text-white transition-all hidden lg:block"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Content */}
          <div className="max-w-lg text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {screenshots[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {screenshots[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex justify-center lg:justify-start gap-3 mb-8">
              {screenshots.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-4 lg:hidden">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={togglePause}
                className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
              >
                {isPaused ? <Play size={24} /> : <Pause size={24} />}
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
