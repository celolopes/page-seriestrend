"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  TrendingUp,
  Bell,
  Search,
  Calendar,
  Bookmark,
  NewspaperIcon,
} from "lucide-react";

const featureIcons = [
  <TrendingUp key="trending" className="h-8 w-8 text-primary" />,
  <NewspaperIcon key="newspaper" className="h-8 w-8 text-primary" />,
  <Bell key="bell" className="h-8 w-8 text-primary" />,
  <Search key="search" className="h-8 w-8 text-primary" />,
  <Calendar key="calendar" className="h-8 w-8 text-primary" />,
  <Bookmark key="bookmark" className="h-8 w-8 text-primary" />,
];

const defaultFeatures = [
  {
    title: "Acompanhe Tendências",
    description:
      "Veja quais séries estão bombando no momento, com rankings diários e semanais atualizados em tempo real.",
  },
  {
    title: "Curiosidades com IA",
    description:
      "Acesse curiosidades das suas séries favoritas através de IA, trazendo informações de bastidores e detalhes exclusivos.",
  },
  {
    title: "Notificações",
    description:
      "Receba alertas quando suas séries favoritas entrarem nas tendências ou lançarem novos episódios.",
  },
  {
    title: "Busca Avançada",
    description:
      "Encontre rapidamente séries por título, gênero, plataforma ou popularidade com filtros específicos.",
  },
  {
    title: "Calendário",
    description:
      "Mantenha-se atualizado com as datas de lançamento dos próximos episódios de suas séries favoritas.",
  },
  {
    title: "Listas Personalizadas",
    description:
      "Crie e organize listas personalizadas com as séries que você está assistindo, já assistiu ou planeja assistir.",
  },
];

const Features = () => {
  const { translations, language } = useLanguage();
  const t = translations.features;
  const features = t.items || defaultFeatures;
  const sectionId = "recursos";

  return (
    <section id={sectionId} className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
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
              "Descubra todas as ferramentas e recursos que vão transformar a maneira como você acompanha suas séries favoritas."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                {featureIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
