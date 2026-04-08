"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Link2, Search, Users } from "lucide-react";

const defaultContent = {
  badge: "EM BREVE",
  version: "Versão 4.0.0",
  title: "Rede Social do",
  subtitle:
    "A próxima grande atualização do app adiciona uma camada social para aproximar fãs de séries dentro da comunidade SeriesTrend.",
  description:
    "Com integração social via Trakt.tv, você poderá identificar amigos, acompanhar perfis da comunidade e descobrir quem também usa o SeriesTrend.",
  traktBadge: "Integração com Trakt.tv",
  previewLabel: "Preview da nova tela social",
  highlights: [
    "Perfil social com seguidores, seguindo e amigos.",
    "Comunidade conectada à sua conta Trakt.tv.",
    "Descoberta de perfis e amizades dentro do app.",
  ],
  note:
    "Alguns recursos sociais dependem da autenticação com Trakt.tv e ainda poderão ser refinados até o lançamento oficial da versão 4.0.",
  profileTitle: "Rede Social",
  profileSubtitle: "Conecte-se com outros fãs de séries",
  profileName: "Marcelo Lopes",
  profileHandle: "@EuMarceloCae",
  profileLocation: "Florianópolis, Santa Catarina",
  profileSince: "agosto de 2025",
  statsFollowers: "Seguidores",
  statsFollowing: "Seguindo",
  statsFriends: "Amigos",
  friendsTitle: "Amigos no SeriesTrend",
  friendName: "Folincontro Eventos",
  friendHandle: "@Folincontro",
  communityTitle: "Membros da Comunidade",
  emptyTitle: "Nenhum perfil da comunidade apareceu ainda",
  emptyDescription:
    "Atualize a comunidade para carregar novos perfis e descobrir quem também usa o SeriesTrend.",
  refreshLabel: "Atualizar agora",
  tabs: {
    series: "Séries",
    search: "Busca",
    trends: "Tendências",
    watchlist: "Minha Lista",
    social: "Social",
    settings: "Ajustes",
  },
};

const sectionIds = {
  "pt-BR": "em-breve",
  en: "coming-soon",
  es: "proximamente",
  zh: "coming-soon",
} as const;

const ComingSoon = () => {
  const { translations, language } = useLanguage();
  const t = translations.comingSoon || defaultContent;
  const sectionId = sectionIds[language] || "em-breve";

  const highlightIcons = [Users, Link2, Search];

  return (
    <section id={sectionId} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,0,0.16),transparent_35%),radial-gradient(circle_at_80%_65%,rgba(100,100,255,0.12),transparent_28%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold tracking-[0.18em] uppercase">
                {t.badge}
              </span>
              <span className="px-4 py-1.5 rounded-full glass text-sm text-white/80">
                {t.version}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              {t.title} <span className="text-gradient">SeriesTrend</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              {t.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                {t.traktBadge}
              </span>
              <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                {t.previewLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {t.highlights.map((highlight: string, index: number) => {
                const Icon = highlightIcons[index] || Users;

                return (
                  <motion.div
                    key={highlight}
                    className="glass-card rounded-2xl p-5 h-full"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {highlight}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="glass rounded-2xl p-5 border border-white/8 max-w-2xl">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {t.note}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-8 bg-primary/20 blur-[120px] rounded-full" />

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent rounded-[3rem] scale-95 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/screenshot-7.png"
                  alt={t.previewLabel}
                  width={334}
                  height={746}
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="w-full h-auto rounded-[1.5rem] border border-white/6"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <span className="glass rounded-full px-4 py-2 text-sm text-white/85 border border-white/8">
                  {t.previewLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
