"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroScroll() {
  const { translations } = useLanguage();
  const t = translations.hero;

  return (
    <div className="flex flex-col overflow-hidden bg-black pt-20">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                #1 App para Amantes de Séries
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              {t.title} <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                {t.titleHighlight}
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto text-center">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#download"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
              >
                {t.ctaButton}
              </a>
              <a
                href="#features"
                className="px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-colors"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        }
      >
        <Image
          src="/images/Screenshot-10.png"
          alt="SeriesTrend Social Profile"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
