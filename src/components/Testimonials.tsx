"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

const Testimonials = () => {
  const { translations, language } = useLanguage();
  const t = translations.testimonials;
  const testimonials = t.list || testimonialsPt;
  const sectionId =
    t.sectionId || (language === "en" ? "testimonials" : "depoimentos");

  return (
    <section id={sectionId} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

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
              "Veja por que mais de 10.000 pessoas já confiam no SeriesTrend para acompanhar suas séries favoritas."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl relative group hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
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
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
