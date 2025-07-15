"use client";

import React, { createContext, useContext, ReactNode } from "react";

type Language = "pt-BR" | "en" | "es" | "zh";

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
  header: {
    nav: {
      features: "Features",
      screenshots: "Screenshots",
      testimonials: "Testimonials",
      download: "Download",
    },
    language: {
      pt: "PT",
      en: "EN",
      es: "ES",
      zh: "ZH",
      separator: "|",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
  },
  footer: {
    description:
      "The essential app to track the most watched TV series trends of the week and day.",
    quickLinks: {
      features: "Features",
      screenshots: "Screenshots",
      testimonials: "Testimonials",
      download: "Download",
    },
    legal: {
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      licenses: "Licenses",
    },
    contact: {
      email: "Email:",
      form: "Contact form",
    },
    copyright: (year: number) => `© ${year} SeriesTrend. All rights reserved.`,
  },
};

const defaultEsTranslations = {
  hero: {
    title: "Sigue lo que es tendencia en el mundo de las series",
    subtitle:
      "Descarga la app esencial para estar al día con las series más vistas de la semana y el día",
    ctaButton: "Descargar ahora",
    statsUsers: "Usuarios activos",
    statsSeries: "Series monitoreadas",
    statsRatings: "Valoraciones de usuarios",
  },
  features: {
    title: "¿Qué ofrece SeriesTrend?",
    subtitle:
      "Descubre todas las herramientas y funciones que transformarán la forma en que sigues tus series favoritas.",
    items: [
      {
        title: "Sigue las tendencias",
        description:
          "Consulta qué series son tendencia en el momento, con rankings diarios y semanales actualizados en tiempo real.",
      },
      {
        title: "Información de series con IA",
        description:
          "Accede a curiosidades sobre tus series favoritas gracias a la IA, con información exclusiva y detalles de temporadas y episodios.",
      },
      {
        title: "Notificaciones",
        description:
          "Recibe alertas cuando tus series favoritas entren en tendencia o estrenen nuevos episodios.",
      },
      {
        title: "Búsqueda avanzada",
        description:
          "Encuentra series rápidamente por título, género, plataforma o popularidad con filtros específicos.",
      },
      {
        title: "Calendario de estrenos",
        description:
          "Mantente al día con las fechas de estreno de los próximos episodios de tus series favoritas.",
      },
      {
        title: "Listas personalizadas",
        description:
          "Crea y organiza listas personalizadas con las series que ves, has visto o planeas ver.",
      },
    ],
  },
  screenshots: {
    title: "Mira SeriesTrend en acción",
    subtitle: "Descubre la interfaz intuitiva y elegante de nuestra app",
    list: [
      {
        src: "/images/screenshot-1.png",
        title: "Lista de tendencias",
        description:
          "Consulta las series más populares del momento, organizadas por relevancia.",
        alt: "Lista de series en tendencia",
      },
      {
        src: "/images/screenshot-3.png",
        title: "Detalles de la serie",
        description:
          "Accede a información detallada sobre cada serie, incluidas valoraciones y estadísticas.",
        alt: "Detalles de la serie",
      },
      {
        src: "/images/screenshot-2.png",
        title: "Búsqueda y sugerencias",
        description:
          "Encuentra series rápidamente con la búsqueda inteligente y recibe sugerencias personalizadas de las series en tendencia.",
        alt: "Búsqueda de series y sugerencias",
      },
      {
        src: "/images/screenshot-4.png",
        title: "Lista personalizada",
        description:
          "Organiza tus series favoritas en listas personalizadas para seguir tu progreso.",
        alt: "Lista personalizada de series",
      },
      {
        src: "/images/screenshot-5.png",
        title: "Curiosidades de la serie",
        description:
          "Consulta curiosidades sobre la serie, incluidos datos sobre personajes, bastidores y elenco gracias a la IA.",
        alt: "Curiosidades sobre la serie",
      },
    ],
    prev: "Imagen anterior",
    next: "Siguiente imagen",
    pause: "Pausar",
    play: "Reproducir",
    viewImage: (index: number) => `Ver imagen ${index + 1}`,
  },
  testimonials: {
    title: "Lo que dicen nuestros usuarios",
    subtitle:
      "Descubre por qué más de 10.000 personas ya confían en SeriesTrend para seguir sus series favoritas.",
    ctaButton: "Pruébalo ahora",
    sectionId: "testimonios",
    list: [
      {
        name: "Ana García",
        role: "Cinéfila",
        stars: 5,
        content:
          "SeriesTrend ha revolucionado la forma en que sigo mis series. ¡Puedo estar al tanto de todas las tendencias de forma rápida e intuitiva! ¡Muy recomendable!",
      },
      {
        name: "Roberto López",
        role: "Crítico de Series",
        stars: 5,
        content:
          "Como crítico, valoro los datos precisos sobre lo que está en tendencia. SeriesTrend me da exactamente eso, con una interfaz limpia y eficiente.",
      },
      {
        name: "Julia Fernández",
        role: "Influencer Digital",
        stars: 4,
        content:
          "Uso SeriesTrend a diario para mantenerme actualizada sobre lo que está de moda. ¡El análisis de tendencias es perfecto para recomendar contenido a mis seguidores!",
      },
      {
        name: "Pedro Martínez",
        role: "Entusiasta del Streaming",
        stars: 5,
        content:
          "Por fin una app que me ayuda a decidir qué ver basado en datos reales, no solo en algoritmos de recomendación. ¡Simplemente esencial!",
      },
    ],
  },
  download: {
    title: "Descargar ahora",
    subtitle: "Disponible para iOS y Android",
    googlePlay: "Consíguelo en Google Play",
    appStore: "Descargar en App Store",
    deviceRequirements: "Disponible para iOS 12.0+ y Android 8.0+",
    freeWithInAppPurchases:
      "Disponible como descarga gratuita con compras dentro de la app opcionales.",
    appFeatureTitle: "Todo lo que necesitas saber sobre tus series",
    backToHome: "← Volver a la página principal",
    features: [
      "Rankings diarios y semanales",
      "Estadísticas detalladas de popularidad",
      "Notificaciones de tendencias",
      "Lanzamientos de episodios",
      "Integración con tus plataformas favoritas",
    ],
  },
  header: {
    nav: {
      features: "Características",
      screenshots: "Capturas",
      testimonials: "Testimonios",
      download: "Descargar",
    },
    language: {
      pt: "PT",
      en: "EN",
      es: "ES",
      zh: "ZH",
      separator: "|",
    },
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
  },
  footer: {
    description:
      "La app esencial para seguir las tendencias de series más vistas de la semana y el día.",
    quickLinks: {
      features: "Características",
      screenshots: "Capturas",
      testimonials: "Testimonios",
      download: "Descargar",
    },
    legal: {
      terms: "Términos de Uso",
      privacy: "Política de Privacidad",
      cookies: "Cookies",
      licenses: "Licencias",
    },
    contact: {
      email: "Correo electrónico:",
      form: "Formulario de contacto",
    },
    copyright: (year: number) =>
      `© ${year} SeriesTrend. Todos los derechos reservados.`,
  },
};

const defaultZhTranslations = {
  hero: {
    title: "追蹤影集世界的熱門趨勢",
    subtitle: "下載必備應用程式，隨時掌握每週和每日最受歡迎的影集",
    ctaButton: "立即下載",
    statsUsers: "活躍用戶",
    statsSeries: "監控影集",
    statsRatings: "用戶評分",
  },
  features: {
    title: "SeriesTrend 提供什麼",
    subtitle: "探索所有工具和功能，徹底改變你追劇的方式。",
    items: [
      {
        title: "追蹤趨勢",
        description: "即時查看目前熱門影集，提供每日和每週排行榜。",
      },
      {
        title: "AI 影集洞察",
        description: "透過 AI 獲取你最愛影集的幕後花絮、季節和集數細節。",
      },
      {
        title: "通知提醒",
        description: "當你最愛的影集進入趨勢榜或有新集數時即時通知。",
      },
      {
        title: "進階搜尋",
        description: "可依標題、類型、平台或人氣快速搜尋影集。",
      },
      {
        title: "上映日曆",
        description: "隨時掌握你最愛影集的最新集數上映日期。",
      },
      {
        title: "自訂清單",
        description: "建立並管理你正在追、已看過或計劃觀看的影集清單。",
      },
    ],
  },
  screenshots: {
    title: "看看 SeriesTrend 的實際操作",
    subtitle: "體驗我們應用程式直觀且優雅的介面",
    list: [
      {
        src: "/images/screenshot-1.png",
        title: "趨勢清單",
        description: "查看目前最受歡迎的影集，依相關性排序。",
        alt: "熱門影集清單",
      },
      {
        src: "/images/screenshot-3.png",
        title: "影集詳情",
        description: "存取每部影集的詳細資訊，包括評分和統計數據。",
        alt: "影集詳情",
      },
      {
        src: "/images/screenshot-2.png",
        title: "搜尋與建議",
        description: "透過智慧搜尋快速找到影集，並獲得個人化推薦。",
        alt: "影集搜尋與建議",
      },
      {
        src: "/images/screenshot-4.png",
        title: "自訂清單",
        description: "將你最愛的影集整理到自訂清單，方便追蹤進度。",
        alt: "自訂影集清單",
      },
      {
        src: "/images/screenshot-5.png",
        title: "影集趣聞",
        description: "查看影集趣聞，包括角色、幕後花絮和演員資訊（AI 支援）。",
        alt: "影集趣聞",
      },
    ],
    prev: "上一張圖片",
    next: "下一張圖片",
    pause: "暫停",
    play: "播放",
    viewImage: (index: number) => `檢視圖片 ${index + 1}`,
  },
  testimonials: {
    title: "用戶怎麼說",
    subtitle: "超過 10,000 人信賴 SeriesTrend 追蹤他們最愛的影集。",
    ctaButton: "立即體驗",
    sectionId: "用戶評價",
    list: [
      {
        name: "王小明",
        role: "影集愛好者",
        stars: 5,
        content:
          "SeriesTrend 徹底改變了我追劇的方式，能快速直觀地掌握所有趨勢，強烈推薦！",
      },
      {
        name: "李美麗",
        role: "評論家",
        stars: 5,
        content:
          "作為評論家，我很重視趨勢數據的準確性。SeriesTrend 提供了乾淨高效的介面和精確的數據。",
      },
      {
        name: "陳大華",
        role: "數位影響者",
        stars: 4,
        content:
          "我每天都用 SeriesTrend 來掌握熱門影集，趨勢分析很適合推薦內容給粉絲！",
      },
      {
        name: "林志強",
        role: "串流愛好者",
        stars: 5,
        content:
          "終於有一款根據真實數據推薦影集的 App，不只是演算法推薦，真的很實用！",
      },
    ],
  },
  download: {
    title: "立即下載",
    subtitle: "iOS 與 Android 皆可用",
    googlePlay: "前往 Google Play 下載",
    appStore: "在 App Store 下載",
    deviceRequirements: "適用於 iOS 12.0+ 及 Android 8.0+",
    freeWithInAppPurchases: "免費下載，內含應用程式內購選項。",
    appFeatureTitle: "影集資訊一手掌握",
    backToHome: "← 返回主頁",
    features: [
      "每日與每週排行榜",
      "詳細人氣統計",
      "趨勢通知",
      "集數發布提醒",
      "整合你最愛的平台",
    ],
  },
  header: {
    nav: {
      features: "功能特色",
      screenshots: "截圖",
      testimonials: "用戶評價",
      download: "下載",
    },
    language: {
      pt: "PT",
      en: "EN",
      es: "ES",
      zh: "ZH",
      separator: "|",
    },
    menu: {
      open: "開啟選單",
      close: "關閉選單",
    },
  },
  footer: {
    description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式。",
    quickLinks: {
      features: "功能特色",
      screenshots: "截圖",
      testimonials: "用戶評價",
      download: "下載",
    },
    legal: {
      terms: "使用條款",
      privacy: "隱私政策",
      cookies: "Cookies",
      licenses: "授權",
    },
    contact: {
      email: "電子郵件：",
      form: "聯絡表單",
    },
    copyright: (year: number) => `© ${year} SeriesTrend. 保留所有權利。`,
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
  let translations;
  if (language === "en") {
    translations = { ...defaultEnTranslations, ...customTranslations };
  } else if (language === "es") {
    translations = { ...defaultEsTranslations, ...customTranslations };
  } else if (language === "zh") {
    translations = { ...defaultZhTranslations, ...customTranslations };
  } else {
    translations = { ...defaultPtTranslations, ...customTranslations };
  }

  return (
    <LanguageContext.Provider value={{ language, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
