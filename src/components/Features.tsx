import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users,
  Award,
  BarChart3,
  RefreshCcw,
  Mail,
  Zap
} from "lucide-react";

const featureIcons = [
  <Users key="users" className="h-8 w-8 text-primary" />,
  <Award key="award" className="h-8 w-8 text-primary" />,
  <BarChart3 key="stats" className="h-8 w-8 text-primary" />,
  <RefreshCcw key="trakt" className="h-8 w-8 text-primary" />,
  <Mail key="mail" className="h-8 w-8 text-primary" />,
  <Zap key="trends" className="h-8 w-8 text-primary" />,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Features = () => {
  const { translations, language } = useLanguage();
  const t = translations.features;
  const features = t.items || [];
  const sectionId = language === "en" ? "features" : "recursos";

  return (
    <section id={sectionId} className="py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wider uppercase"
          >
            {language === "en" ? "Features" : "Funcionalidades"}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">SeriesTrend</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-primary/40 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {featureIcons[index]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
