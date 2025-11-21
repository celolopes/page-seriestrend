"use client";

import React, { createContext, useContext, ReactNode } from "react";

type Language = "pt-BR" | "en" | "es" | "zh";

interface LanguageContextType {
  language: Language;
  translations: Record<string, any>;
}

const defaultPtTranslations = {
  hero: {
    title: "Descubra o que está em",
    titleHighlight: "Alta Agora",
    subtitle:
      "O aplicativo essencial para acompanhar as séries mais assistidas, receber recomendações personalizadas e nunca mais perder um episódio.",
    ctaButton: "Baixar Agora",
    statsUsers: "Usuários",
    statsSeries: "Séries",
    statsRatings: "Avaliação",
  },
  features: {
    title: "Por que escolher o",
    subtitle:
      "Funcionalidades pensadas para melhorar sua experiência de acompanhar séries.",
    items: [
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
    ],
  },
  screenshots: {
    title: "Conheça o",
    subtitle:
      "Veja como é fácil e intuitivo acompanhar as tendências de séries com nosso aplicativo.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Lista de séries em tendência",
        title: "Lista de Tendências",
        description:
          "Veja as séries mais populares do momento, organizadas por relevância.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Detalhes da série",
        title: "Detalhes da Série",
        description:
          "Acesse informações detalhadas sobre cada série, incluindo avaliações e estatísticas.",
      },
      {
        src: "/images/screenshot-2.png",
        alt: "Busca de séries e sugestões",
        title: "Busca de Séries e Sugestões",
        description:
          "Encontre séries rapidamente com a busca inteligente e receba sugestões personalizadas das séries em tendência.",
      },
      {
        src: "/images/screenshot-4.png",
        alt: "Lista personalizada de séries",
        title: "Lista Personalizada",
        description:
          "Organize suas séries favoritas em listas personalizadas para acompanhar seu progresso.",
      },
      {
        src: "/images/screenshot-5.png",
        alt: "Curiosidades sobre a série",
        title: "Curiosidades com IA",
        description:
          "Veja curiosidades sobre a série, incluindo curiosidades sobre os personagens, bastidores e o elenco através da IA.",
      },
    ],
    prev: "Imagem anterior",
    next: "Próxima imagem",
    pause: "Pausar",
    play: "Reproduzir",
    viewImage: (index: number) => `Ver imagem ${index + 1}`,
  },
  testimonials: {
    title: "O que dizem sobre o",
    subtitle:
      "Junte-se a milhares de usuários satisfeitos que transformaram a maneira de assistir séries.",
    ctaButton: "Experimente Agora",
    sectionId: "depoimentos",
    list: [
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
    ],
  },
  download: {
    titlePre: "Baixe o",
    titlePost: "agora",
    subtitle:
      "Disponível para Android e iOS. Baixe agora e comece a acompanhar as tendências das suas séries favoritas.",
    googlePlay: "Disponível no Google Play",
    appStore: "Baixe na App Store",
    deviceRequirements: "Disponível para iOS 12.0+ e Android 8.0+",
    freeWithInAppPurchases:
      "Disponível para download gratuito com compras no aplicativo opcionais.",
    appFeatureTitle: "Tudo que você precisa saber sobre suas séries",
    backToHome: "← Voltar para a página inicial",
    freeBadge: "Gratuito",
    features: [
      "Rankings diários e semanais",
      "Estatísticas detalhadas de popularidade",
      "Notificações de tendências",
      "Lançamentos de episódios",
      "Integração com suas plataformas favoritas",
    ],
  },
  header: {
    nav: {
      features: "Recursos",
      screenshots: "Prints",
      testimonials: "Depoimentos",
      download: "Download",
    },
    language: {
      pt: "PT",
      en: "EN",
      es: "ES",
      zh: "ZH",
      separator: "/",
    },
    menu: {
      open: "Abrir menu",
      close: "Fechar menu",
    },
    subtitle: "Séries em Alta",
  },
  footer: {
    subtitle: "Séries em Alta",
    description:
      "O aplicativo essencial para acompanhar as tendências de séries mais assistidas na semana e no dia.",
    quickLinks: {
      features: "Recursos",
      screenshots: "Prints",
      testimonials: "Depoimentos",
      download: "Download",
    },
    titles: {
      quickLinks: "Links Rápidos",
      legal: "Legal",
      contact: "Contato",
    },
    legal: {
      terms: "Termos de Uso",
      privacy: "Política de Privacidade",
      cookies: "Cookies",
      licenses: "Licenças",
    },
    contact: {
      email: "Email",
      form: "Formulário de Contato",
    },
    copyright: (year: number) =>
      `© ${year} SeriesTrend. Todos os direitos reservados.`,
  },
};

const defaultEnTranslations = {
  hero: {
    title: "Discover What's",
    titleHighlight: "Trending Now",
    subtitle:
      "The essential app to track the most watched series, get personalized recommendations, and never miss an episode again.",
    ctaButton: "Download Now",
    statsUsers: "Users",
    statsSeries: "Series",
    statsRatings: "Rating",
  },
  features: {
    title: "Why Choose",
    subtitle:
      "Features designed to improve your series tracking experience.",
    items: [
      {
        title: "Track Trends",
        description:
          "See which series are trending right now, with daily and weekly rankings updated in real-time.",
      },
      {
        title: "AI Trivia",
        description:
          "Access trivia about your favorite series through AI, bringing behind-the-scenes info and exclusive details.",
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
        title: "Calendar",
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
    title: "Meet",
    subtitle:
      "See how easy and intuitive it is to track series trends with our app.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Trending series list",
        title: "Trending List",
        description:
          "See the most popular series at the moment, organized by relevance.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Series details",
        title: "Series Details",
        description:
          "Access detailed information about each series, including ratings and statistics.",
      },
      {
        src: "/images/screenshot-2.png",
        alt: "Series search and suggestions",
        title: "Search & Suggestions",
        description:
          "Find series quickly with smart search and get personalized suggestions of trending series.",
      },
      {
        src: "/images/screenshot-4.png",
        alt: "Custom series list",
        title: "Custom List",
        description:
          "Organize your favorite series in custom lists to track your progress.",
      },
      {
        src: "/images/screenshot-5.png",
        alt: "Series trivia",
        title: "AI Trivia",
        description:
          "See fun facts about the series, including character trivia, behind the scenes and cast information through AI.",
      },
    ],
    prev: "Previous image",
    next: "Next image",
    pause: "Pause",
    play: "Play",
    viewImage: (index: number) => `View image ${index + 1}`,
  },
  testimonials: {
    title: "What people say about",
    subtitle:
      "Join thousands of satisfied users who have transformed the way they watch series.",
    ctaButton: "Try It Now",
    sectionId: "testimonials",
    list: [
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
    ],
  },
  download: {
    titlePre: "Download",
    titlePost: "Now",
    subtitle:
      "Available for Android and iOS. Download now and start tracking your favorite series trends.",
    googlePlay: "Get it on Google Play",
    appStore: "Download on App Store",
    deviceRequirements: "Available for iOS 12.0+ and Android 8.0+",
    freeWithInAppPurchases:
      "Available as a free download with optional in-app purchases.",
    appFeatureTitle: "Everything you need to know about your series",
    backToHome: "← Back to home page",
    freeBadge: "Free",
    features: [
      "Daily and weekly rankings",
      "Detailed popularity statistics",
      "Trend notifications",
      "Episode releases",
      "Integration with your favorite platforms",
    ],
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
      separator: "/",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    subtitle: "Trending Series",
  },
  footer: {
    subtitle: "Trending Series",
    description:
      "The essential app to track the most watched series trends of the week and day.",
    quickLinks: {
      features: "Features",
      screenshots: "Screenshots",
      testimonials: "Testimonials",
      download: "Download",
    },
    titles: {
      quickLinks: "Quick Links",
      legal: "Legal",
      contact: "Contact",
    },
    legal: {
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      licenses: "Licenses",
    },
    contact: {
      email: "Email",
      form: "Contact Form",
    },
    copyright: (year: number) =>
      `© ${year} SeriesTrend. All rights reserved.`,
  },
};

const defaultEsTranslations = {
  hero: {
    title: "Descubre lo que es",
    titleHighlight: "Tendencia Ahora",
    subtitle:
      "La aplicación esencial para seguir las series más vistas, recibir recomendaciones personalizadas y no perderte nunca un episodio.",
    ctaButton: "Descargar Ahora",
    statsUsers: "Usuarios",
    statsSeries: "Series",
    statsRatings: "Valoración",
  },
  features: {
    title: "Por qué elegir",
    subtitle:
      "Funcionalidades diseñadas para mejorar tu experiencia de seguimiento de series.",
    items: [
      {
        title: "Sigue Tendencias",
        description:
          "Mira qué series están de moda en este momento, con rankings diarios y semanales actualizados en tiempo real.",
      },
      {
        title: "Curiosidades con IA",
        description:
          "Accede a curiosidades de tus series favoritas a través de IA, con información detrás de cámaras y detalles exclusivos.",
      },
      {
        title: "Notificaciones",
        description:
          "Recibe alertas cuando tus series favoritas entren en tendencias o lancen nuevos episodios.",
      },
      {
        title: "Búsqueda Avanzada",
        description:
          "Encuentra rápidamente series por título, género, plataforma o popularidad con filtros específicos.",
      },
      {
        title: "Calendario",
        description:
          "Mantente actualizado con las fechas de lanzamiento de los próximos episodios de tus series favoritas.",
      },
      {
        title: "Listas Personalizadas",
        description:
          "Crea y organiza listas personalizadas con las series que estás viendo, ya viste o planeas ver.",
      },
    ],
  },
  screenshots: {
    title: "Conoce",
    subtitle:
      "Mira lo fácil e intuitivo que es seguir las tendencias de series con nuestra aplicación.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Lista de series en tendencia",
        title: "Lista de Tendencias",
        description:
          "Consulta las series más populares del momento, organizadas por relevancia.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Detalles de la serie",
        title: "Detalles de la Serie",
        description:
          "Accede a información detallada sobre cada serie, incluyendo valoraciones y estadísticas.",
      },
      {
        src: "/images/screenshot-2.png",
        alt: "Búsqueda de series y sugerencias",
        title: "Búsqueda y Sugerencias",
        description:
          "Encuentra series rápidamente con la búsqueda inteligente y recibe sugerencias personalizadas.",
      },
      {
        src: "/images/screenshot-4.png",
        alt: "Lista personalizada de series",
        title: "Lista Personalizada",
        description:
          "Organiza tus series favoritas en listas personalizadas para seguir tu progreso.",
      },
      {
        src: "/images/screenshot-5.png",
        alt: "Curiosidades sobre la serie",
        title: "Curiosidades con IA",
        description:
          "Mira curiosidades sobre la serie, incluyendo datos sobre personajes, detrás de cámaras y elenco a través de IA.",
      },
    ],
    prev: "Imagen anterior",
    next: "Siguiente imagen",
    pause: "Pausar",
    play: "Reproducir",
    viewImage: (index: number) => `Ver imagen ${index + 1}`,
  },
  testimonials: {
    title: "Lo que dicen sobre",
    subtitle:
      "Únete a miles de usuarios satisfechos que han transformado la forma de ver series.",
    ctaButton: "Pruébalo Ahora",
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
    titlePre: "Descarga",
    titlePost: "Ahora",
    subtitle:
      "Disponible para Android e iOS. Descarga ahora y comienza a seguir las tendencias de tus series favoritas.",
    googlePlay: "Disponible en Google Play",
    appStore: "Descargar en App Store",
    deviceRequirements: "Disponible para iOS 12.0+ y Android 8.0+",
    freeWithInAppPurchases:
      "Disponible para descarga gratuita con compras opcionales en la aplicación.",
    appFeatureTitle: "Todo lo que necesitas saber sobre tus series",
    backToHome: "← Volver a la página de inicio",
    freeBadge: "Gratis",
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
      separator: "/",
    },
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    subtitle: "Series en Tendencia",
  },
  footer: {
    subtitle: "Series en Tendencia",
    description:
      "La aplicación esencial para seguir las tendencias de series más vistas de la semana y el día.",
    quickLinks: {
      features: "Características",
      screenshots: "Capturas",
      testimonials: "Testimonios",
      download: "Descargar",
    },
    titles: {
      quickLinks: "Enlaces Rápidos",
      legal: "Legal",
      contact: "Contacto",
    },
    legal: {
      terms: "Términos de Uso",
      privacy: "Política de Privacidad",
      cookies: "Cookies",
      licenses: "Licencias",
    },
    contact: {
      email: "Email",
      form: "Formulario de Contacto",
    },
    copyright: (year: number) =>
      `© ${year} SeriesTrend. Todos los derechos reservados.`,
  },
};

const defaultZhTranslations = {
  hero: {
    title: "發現現在",
    titleHighlight: "流行什麼",
    subtitle:
      "追蹤最受歡迎影集、獲取個人化推薦且不再錯過任何一集的必備應用程式。",
    ctaButton: "立即下載",
    statsUsers: "用戶",
    statsSeries: "影集",
    statsRatings: "評分",
  },
  features: {
    title: "為什麼選擇",
    subtitle: "專為改善您追劇體驗而設計的功能。",
    items: [
      {
        title: "追蹤趨勢",
        description: "查看目前熱門影集，提供每日和每週即時更新的排行榜。",
      },
      {
        title: "AI 趣聞",
        description:
          "透過 AI 獲取您最愛影集的趣聞，帶來幕後資訊和獨家細節。",
      },
      {
        title: "通知",
        description: "當您最愛的影集進入趨勢榜或發布新集數時接收提醒。",
      },
      {
        title: "進階搜尋",
        description: "透過特定篩選器，依標題、類型、平台或人氣快速搜尋影集。",
      },
      {
        title: "日曆",
        description: "隨時掌握您最愛影集下一集的發布日期。",
      },
      {
        title: "自訂清單",
        description: "建立並整理您正在觀看、已觀看或計劃觀看的影集清單。",
      },
    ],
  },
  screenshots: {
    title: "認識",
    subtitle: "看看使用我們的應用程式追蹤影集趨勢是多麼簡單直觀。",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "熱門影集清單",
        title: "趨勢清單",
        description: "查看目前最受歡迎的影集，依相關性排序。",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "影集詳情",
        title: "影集詳情",
        description: "存取每部影集的詳細資訊，包括評分和統計數據。",
      },
      {
        src: "/images/screenshot-2.png",
        alt: "影集搜尋與建議",
        title: "搜尋與建議",
        description: "透過智慧搜尋快速找到影集，並獲得個人化建議。",
      },
      {
        src: "/images/screenshot-4.png",
        alt: "自訂影集清單",
        title: "自訂清單",
        description: "將您最愛的影集整理到自訂清單，方便追蹤進度。",
      },
      {
        src: "/images/screenshot-5.png",
        alt: "影集趣聞",
        title: "AI 趣聞",
        description:
          "查看影集趣聞，包括角色、幕後花絮和演員資訊（透過 AI）。",
      },
    ],
    prev: "上一張圖片",
    next: "下一張圖片",
    pause: "暫停",
    play: "播放",
    viewImage: (index: number) => `檢視圖片 ${index + 1}`,
  },
  testimonials: {
    title: "大家怎麼說",
    subtitle: "加入成千上萬滿意用戶的行列，改變他們觀看影集的方式。",
    ctaButton: "立即體驗",
    sectionId: "用戶評價",
    list: [
      {
        name: "王小明",
        role: "影迷",
        stars: 5,
        content:
          "SeriesTrend 徹底改變了我追劇的方式。我可以快速直觀地掌握所有趨勢。強烈推薦！",
      },
      {
        name: "李美麗",
        role: "影評人",
        stars: 5,
        content:
          "作為評論家，我很重視趨勢數據的準確性。SeriesTrend 提供了乾淨高效的介面和精確的數據。",
      },
      {
        name: "陳大華",
        role: "數位影響者",
        stars: 4,
        content:
          "我每天都用 SeriesTrend 來掌握熱門影集。趨勢分析非常適合推薦內容給我的粉絲！",
      },
      {
        name: "林志強",
        role: "串流愛好者",
        stars: 5,
        content:
          "終於有一款根據真實數據推薦影集的 App，不只是演算法推薦。簡直是必備！",
      },
    ],
  },
  download: {
    titlePre: "立即下載",
    titlePost: "",
    subtitle: "適用於 Android 和 iOS。立即下載並開始追蹤您最愛影集的趨勢。",
    googlePlay: "在 Google Play 下載",
    appStore: "在 App Store 下載",
    deviceRequirements: "適用於 iOS 12.0+ 和 Android 8.0+",
    freeWithInAppPurchases: "免費下載，提供應用程式內購選項。",
    appFeatureTitle: "關於您影集的一切須知",
    backToHome: "← 返回首頁",
    freeBadge: "免費",
    features: [
      "每日和每週排行榜",
      "詳細人氣統計",
      "趨勢通知",
      "集數發布",
      "整合您最愛的平台",
    ],
  },
  header: {
    nav: {
      features: "功能",
      screenshots: "截圖",
      testimonials: "評價",
      download: "下載",
    },
    language: {
      pt: "PT",
      en: "EN",
      es: "ES",
      zh: "ZH",
      separator: "/",
    },
    menu: {
      open: "開啟選單",
      close: "關閉選單",
    },
    subtitle: "熱門影集",
  },
  footer: {
    subtitle: "熱門影集",
    description: "追蹤每週和每日最受歡迎影集趨勢的必備應用程式。",
    quickLinks: {
      features: "功能",
      screenshots: "截圖",
      testimonials: "評價",
      download: "下載",
    },
    titles: {
      quickLinks: "快速連結",
      legal: "法律資訊",
      contact: "聯絡我們",
    },
    legal: {
      terms: "使用條款",
      privacy: "隱私政策",
      cookies: "Cookies",
      licenses: "授權",
    },
    contact: {
      email: "電子郵件",
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
