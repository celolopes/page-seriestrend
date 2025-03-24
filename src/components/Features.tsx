"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart,
  Bell,
  Search,
  Calendar,
  Bookmark,
  NewspaperIcon,
} from "lucide-react";

// Animação para os cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.5,
    },
  }),
};

const features = [
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Acompanhe Tendências",
    description:
      "Veja quais séries estão bombando no momento, com rankings diários e semanais atualizados em tempo real.",
  },
  {
    icon: <NewspaperIcon className="h-10 w-10 text-accent" />,
    title: "Curiosidades de Séries através de IA",
    description:
      "Acesse curiosidades das suas séries favoritas através de IA, trazendo informações de bastidores e detalhes sobre temporadas e episódios que foram e estão sendo exibidos no momento.",
  },
  {
    icon: <Bell className="h-10 w-10 text-accent" />,
    title: "Notificações",
    description:
      "Receba alertas quando suas séries favoritas entrarem nas tendências ou lançarem novos episódios.",
  },
  {
    icon: <Search className="h-10 w-10 text-accent" />,
    title: "Busca Avançada",
    description:
      "Encontre rapidamente séries por título, gênero, plataforma ou popularidade com filtros específicos.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-accent" />,
    title: "Calendário de Lançamentos",
    description:
      "Mantenha-se atualizado com as datas de lançamento dos próximos episódios de suas séries favoritas.",
  },
  {
    icon: <Bookmark className="h-10 w-10 text-accent" />,
    title: "Listas Personalizadas",
    description:
      "Crie e organize listas personalizadas com as séries que você está assistindo, já assistiu ou planeja assistir.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-20 bg-app-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que o Series<span className="text-accent">Trend</span> oferece
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra todas as ferramentas e recursos que vão transformar a
            maneira como você acompanha suas séries favoritas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
