"use client";

import React, { createContext, useContext, ReactNode } from "react";

type Language = "pt-BR" | "en";

interface LanguageContextType {
  language: Language;
  translations: Record<string, any>;
}

const defaultPtTranslations = {
  hero: {
    title: "Acompanhe o que está em Alta no Mundo das Séries",
    subtitle:
      "Baixe o aplicativo essencial para acompanhar as séries mais assistidas da semana e do dia",
    ctaButton: "Baixe Agora",
    statsUsers: "Usuários Ativos",
    statsSeries: "Séries Monitoradas",
    statsRatings: "Avaliações de Usuários",
  },
  features: {
    title: "O que o SeriesTrend oferece",
    subtitle:
      "Descubra todas as ferramentas e recursos que vão transformar a maneira como você acompanha suas séries favoritas.",
  },
  screenshots: {
    title: "Veja o SeriesTrend em Ação",
    subtitle: "Conheça a interface intuitiva e elegante do nosso aplicativo",
  },
  testimonials: {
    title: "O que nossos usuários dizem",
    subtitle:
      "Veja por que mais de 10.000 pessoas já confiam no SeriesTrend para acompanhar suas séries favoritas.",
  },
  download: {
    title: "Baixe Agora",
    subtitle: "Disponível para iOS e Android",
    googlePlay: "Disponível no Google Play",
    appStore: "Baixe na App Store",
  },
};

const defaultEnTranslations = {
  hero: {
    title: "Track What's Trending in the Series World",
    subtitle:
      "Download the essential app to keep up with the most watched series of the week and day",
    ctaButton: "Download Now",
    statsUsers: "Active Users",
    statsSeries: "Series Monitored",
    statsRatings: "User Ratings",
  },
  features: {
    title: "What SeriesTrend Offers",
    subtitle:
      "Discover all the tools and features that will transform the way you follow your favorite series.",
    items: [
      {
        title: "Track Trends",
        description:
          "See which series are trending at the moment, with daily and weekly rankings updated in real time.",
      },
      {
        title: "Series Insights through AI",
        description:
          "Access curiosities about your favorite series through AI, bringing behind-the-scenes information and details about seasons and episodes.",
      },
      {
        title: "Notifications",
        description:
          "Receive alerts when your favorite series enter the trends or release new episodes.",
      },
      {
        title: "Advanced Search",
        description:
          "Quickly find series by title, genre, platform, or popularity with specific filters.",
      },
      {
        title: "Release Calendar",
        description:
          "Stay updated with release dates for upcoming episodes of your favorite series.",
      },
      {
        title: "Custom Lists",
        description:
          "Create and organize custom lists with series you're watching, have watched, or plan to watch.",
      },
    ],
  },
  screenshots: {
    title: "See SeriesTrend in Action",
    subtitle: "Discover the intuitive and elegant interface of our app",
  },
  testimonials: {
    title: "What our users say",
    subtitle:
      "See why over 10,000 people already trust SeriesTrend to track their favorite series.",
  },
  download: {
    title: "Download Now",
    subtitle: "Available for iOS and Android",
    googlePlay: "Get it on Google Play",
    appStore: "Download on App Store",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "pt-BR",
  translations: defaultPtTranslations,
});

interface LanguageProviderProps {
  language?: Language;
  customTranslations?: Record<string, any>;
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  language = "pt-BR",
  customTranslations = {},
  children,
}) => {
  const translations =
    language === "en"
      ? { ...defaultEnTranslations, ...customTranslations }
      : { ...defaultPtTranslations, ...customTranslations };

  return (
    <LanguageContext.Provider value={{ language, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
