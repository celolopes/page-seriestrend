"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Animação para os cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * custom,
      duration: 0.4,
    },
  }),
};

const testimonialsPt = [
  {
    name: "Ana Silva",
    role: "Cinéfila",
    stars: 5,
    content:
      "O SeriesTrend revolucionou a maneira como acompanho minhas séries. Consigo ficar por dentro de todas as tendências de forma rápida e intuitiva. Super recomendo!",
  },
  {
    name: "Rafael Oliveira",
    role: "Crítico de Séries",
    stars: 5,
    content:
      "Como crítico, valorizo dados precisos sobre o que está em alta. O SeriesTrend me dá exatamente isso, com uma interface limpa e eficiente.",
  },
  {
    name: "Juliana Santos",
    role: "Influenciadora Digital",
    stars: 4,
    content:
      "Uso o SeriesTrend diariamente para me manter atualizada sobre o que está bombando. A análise de tendências é perfeita para recomendar conteúdo aos meus seguidores!",
  },
  {
    name: "Pedro Mendes",
    role: "Entusiasta de Streaming",
    stars: 5,
    content:
      "Finalmente um app que me ajuda a decidir o que assistir baseado em dados reais, não apenas em algoritmos de recomendação. Simplesmente essencial!",
  },
];

const testimonialsEn = [
  {
    name: "Anna Smith",
    role: "Movie Enthusiast",
    stars: 5,
    content:
      "SeriesTrend has revolutionized the way I keep track of my series. I can stay on top of all trends quickly and intuitively. Highly recommended!",
  },
  {
    name: "Robert Johnson",
    role: "Series Critic",
    stars: 5,
    content:
      "As a critic, I value accurate data on what's trending. SeriesTrend gives me exactly that, with a clean and efficient interface.",
  },
  {
    name: "Julie Sanders",
    role: "Digital Influencer",
    stars: 4,
    content:
      "I use SeriesTrend daily to stay updated on what's hot. The trend analysis is perfect for recommending content to my followers!",
  },
  {
    name: "Peter Miller",
    role: "Streaming Enthusiast",
    stars: 5,
    content:
      "Finally an app that helps me decide what to watch based on real data, not just recommendation algorithms. Simply essential!",
  },
];

const Testimonials = () => {
  const { translations, language } = useLanguage();
  const t = translations.testimonials;

  // Usa depoimentos do contexto para todos os idiomas
  const testimonials = t.list || testimonialsPt;
  const ctaButtonText =
    t.ctaButton || (language === "en" ? "Try It Now" : "Experimente Agora");
  const sectionId =
    t.sectionId || (language === "en" ? "testimonials" : "depoimentos");

  return (
    <section id={sectionId} className="py-20 bg-app-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title || "O que nossos"}{" "}
            {language === "en" ? (
              <span className="text-accent">users</span>
            ) : (
              <span className="text-accent">usuários</span>
            )}{" "}
            {language === "en" ? "say" : "dizem"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t.subtitle ||
              "Veja por que mais de 10.000 pessoas já confiam no SeriesTrend para acompanhar suas séries favoritas."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              className="bg-app-dark p-6 rounded-xl border border-gray-800"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.stars
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#download"
              className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white px-6 py-3 rounded-lg font-semibold text-lg inline-block"
            >
              {ctaButtonText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
