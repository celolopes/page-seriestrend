"use client";

import React, { createContext, useContext, ReactNode } from "react";

type Language = "pt-BR" | "en" | "es" | "zh";

interface LanguageContextType {
  language: Language;
  translations: Record<string, any>;
}

const defaultPtTranslations = {
  hero: {
    badge: "#1 REDE SOCIAL PARA SÉRIES",
    title: "Sua nova rede social de",
    titleHighlight: "Séries",
    subtitle:
      "Acompanhe suas séries, veja o que seus amigos estão assistindo, conquiste badges e compartilhe sua paixão com a comunidade.",
    ctaButton: "Começar Agora",
    statsUsers: "Membros",
    statsSeries: "Títulos",
    statsRatings: "Avaliação",
  },
  features: {
    title: "Por que entrar na",
    subtitle:
      "Funcionalidades sociais para quem leva maratonas de séries a sério.",
    items: [
      {
        title: "Feed de Amigos",
        description:
          "Veja em tempo real o que sua rede está assistindo, avaliando e adicionando à watchlist.",
      },
      {
        title: "Badges e Conquistas",
        description:
          "Ganhe medalhas exclusivas ao completar maratones, gêneros específicos ou marcos de episódios assistidos.",
      },
      {
        title: "Comparação de Perfis",
        description:
          "Compare suas estatísticas com amigos: minutos assistidos, séries em comum e rankings mensais.",
      },
      {
        title: "Sincronização Trakt",
        description:
          "Integração total com Trakt.tv para manter seu histórico, ratings e listas sempre atualizados e sociais.",
      },
      {
        title: "Reações e Inbox",
        description:
          "Reaja às atividades dos amigos e envie recomendações diretamente pela sua caixa de entrada no app.",
      },
      {
        title: "Tendências da Rede",
        description:
          "Descubra o que é popular não só no mundo, mas especificamente entre o seu círculo de amigos.",
      },
    ],
  },
  socialShowcase: {
    badge: "NOVIDADE",
    version: "Versão 4.0.0",
    title: "A Camada Social do",
    subtitle: "O SeriesTrend agora é uma comunidade.",
    description:
      "Conecte-se com amigos, compare estatísticas, ganhe badges por maratonas e veja o feed de atividades em tempo real.",
    traktBadge: "Sincronizado com Trakt.tv",
    supabaseBadge: "Real-time com Supabase",
    highlights: [
      "Feed de atividades dos seus amigos em tempo real.",
      "Sistema de Badges e conquistas por maratonas.",
      "Comparação direta de progresso entre perfis.",
    ],
    note:
      "Sincronize sua conta Trakt.tv para importar todo seu histórico e começar a interagir com a comunidade imediatamente.",
    screenshotLabels: [
      "Dashboard Social",
      "Feed de Actividades",
      "Badges e Conquistas",
      "Comparação de Amigos",
    ],
  },
  screenshots: {
    title: "Conheça a",
    subtitle:
      "Uma interface moderna e social para transformar sua experiência de assistir séries.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Explorar séries",
        title: "Explorar Séries",
        description: "Descubra novos títulos e o que está bombando no mundo.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Detalhes e reviews",
        title: "Detalhes e Reviews",
        description: "Veja notas, comentários da comunidade e onde assistir.",
      },
      {
        src: "/images/Screenshot-8.png",
        alt: "Dashboard Social",
        title: "Seu Perfil Social",
        description: "Gerencie seus amigos, seguidores e suas conquistas.",
      },
      {
        src: "/images/Screenshot-10.png",
        alt: "Badges",
        title: "Badges e Gamificação",
        description: "Ganhe badges exclusivas enquanto assiste suas séries.",
      },
      {
        src: "/images/Screenshot-11.png",
        alt: "Comparação",
        title: "Comparação de Amigos",
        description: "Veja quem assistiu mais episódios este mês.",
      },
    ],
    prev: "Anterior",
    next: "Próximo",
    pause: "Pausar",
    play: "Reproduzir",
    viewImage: (index: number) => `Ver imagem ${index + 1}`,
  },
  testimonials: {
    title: "O que diz a",
    subtitle:
      "Junte-se a milhares de fãs de séries que já fazem parte da nossa rede social.",
    ctaButton: "Criar minha conta",
    sectionId: "comunidade",
    list: [
      {
        name: "Ana Silva",
        role: "Maratonista",
        stars: 5,
        content:
          "Desde a atualização social, descobri séries incríveis pelas recomendações dos meus amigos. O feed é viciante!",
      },
      {
        name: "Rafael Oliveira",
        role: "Crítico Trakt",
        stars: 5,
        content:
          "A comparação de estatísticas com amigos é sensacional. Saber quantos episódios cada um viu cria uma competição saudável.",
      },
      {
        name: "Juliana Santos",
        role: "Influenciadora",
        stars: 4,
        content:
          "Os badges e o ranking mensal me dão um gás extra pra colocar as séries em dia. A gamificação está nota 10!",
      },
      {
        name: "Pedro Mendes",
        role: "Usuário Trakt",
        stars: 5,
        content:
          "Finalmente um tracker que também é rede social. Ver o que meus amigos veem e reagir em tempo real mudou tudo.",
      },
    ],
  },
  download: {
    titlePre: "Faça parte da",
    titlePost: "comunidade",
    subtitle:
      "Grátis para Android e iOS. Acompanhe séries, veja o que seus amigos assistem e conquiste badges.",
    googlePlay: "Baixar no Google Play",
    appStore: "Baixar na App Store",
    deviceRequirements: "iOS 12.0+ e Android 8.0+",
    freeWithInAppPurchases: "Download gratuito com recursos premium opcionais.",
    appFeatureTitle: "Tracking social para quem leva séries a sério",
    backToHome: "← Início",
    freeBadge: "v4.0 Social",
    features: [
      "Feed social de amigos",
      "Badges e gamificação",
      "Sincronização Trakt.tv",
      "Rankings e estatísticas",
      "Comparação entre amigos",
    ],
  },
  header: {
    nav: {
      features: "Recursos",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Comunidade",
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
      open: "Abrir",
      close: "Fechar",
    },
    subtitle: "Séries & Social",
  },
  footer: {
    subtitle: "Séries & Social",
    description:
      "A rede social para acompanhar séries, conectar com amigos e ganhar badges. Tracking social com sincronização Trakt.tv.",
    quickLinks: {
      features: "Recursos",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Comunidade",
      download: "Download",
    },
    titles: {
      quickLinks: "Links Rápidos",
      legal: "Legal",
      contact: "Contato",
    },
    legal: {
      terms: "Termos",
      privacy: "Privacidade",
      cookies: "Cookies",
      licenses: "Licenças",
    },
    contact: {
      email: "Email",
      form: "Contato",
    },
    copyright: (year: number) => `© ${year} SeriesTrend Social. Todos os direitos reservados.`,
  },
};

const defaultEnTranslations = {
  hero: {
    badge: "#1 SOCIAL NETWORK FOR SERIES",
    title: "Your new social network for",
    titleHighlight: "Series",
    subtitle:
      "Track your series, see what your friends are watching, earn badges and share your passion with the community.",
    ctaButton: "Get Started Now",
    statsUsers: "Members",
    statsSeries: "Titles",
    statsRatings: "Rating",
  },
  features: {
    title: "Why join",
    subtitle:
      "Social features for those who take series marathons seriously.",
    items: [
      {
        title: "Friends Feed",
        description:
          "See in real-time what your network is watching, rating and adding to their watchlist.",
      },
      {
        title: "Badges and Achievements",
        description:
          "Earn exclusive medals by completing marathons, specific genres or episode milestones.",
      },
      {
        title: "Profile Comparison",
        description:
          "Compare your statistics with friends: minutes watched, common series and monthly rankings.",
      },
      {
        title: "Trakt Sync",
        description:
          "Full integration with Trakt.tv to keep your history, ratings and lists always updated and social.",
      },
      {
        title: "Reactions and Inbox",
        description:
          "React to friends' activities and send recommendations directly through your in-app inbox.",
      },
      {
        title: "Network Trends",
        description:
          "Discover what's popular not just in the world, but specifically within your circle of friends.",
      },
    ],
  },
  socialShowcase: {
    badge: "NEW",
    version: "Version 4.0.0",
    title: "The Social Layer of",
    subtitle: "SeriesTrend is now a community.",
    description:
      "Connect with friends, compare stats, earn badges for marathons and see the activity feed in real-time.",
    traktBadge: "Synced with Trakt.tv",
    supabaseBadge: "Real-time with Supabase",
    highlights: [
      "Real-time activity feed from your friends.",
      "Badges and achievement system for marathons.",
      "Direct progress comparison between profiles.",
    ],
    note:
      "Sync your Trakt.tv account to import all your history and start interacting with the community immediately.",
    screenshotLabels: [
      "Social Dashboard",
      "Activity Feed",
      "Badges and Achievements",
      "Friend Comparison",
    ],
  },
  screenshots: {
    title: "Meet the",
    subtitle:
      "A modern and social interface to transform your series watching experience.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Explore series",
        title: "Explore Series",
        description: "Discover new titles and what's trending globally.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Details and reviews",
        title: "Details and Reviews",
        description: "Check ratings, community comments and where to watch.",
      },
      {
        src: "/images/Screenshot-8.png",
        alt: "Social Dashboard",
        title: "Your Social Profile",
        description: "Manage your friends, followers and achievements.",
      },
      {
        src: "/images/Screenshot-10.png",
        alt: "Badges",
        title: "Badges and Gamification",
        description: "Earn exclusive badges while watching your series.",
      },
      {
        src: "/images/Screenshot-11.png",
        alt: "Comparison",
        title: "Friend Comparison",
        description: "See who watched more episodes this month.",
      },
    ],
    prev: "Previous",
    next: "Next",
    pause: "Pause",
    play: "Play",
    viewImage: (index: number) => `View image ${index + 1}`,
  },
  testimonials: {
    title: "What the",
    subtitle:
      "Join thousands of series fans who are already part of our social network.",
    ctaButton: "Create my account",
    sectionId: "community",
    list: [
      {
        name: "Ana Silva",
        role: "Marathonist",
        stars: 5,
        content:
          "Since the social update, I've discovered amazing series through my friends' recommendations. The feed is addictive!",
      },
      {
        name: "Rafael Oliveira",
        role: "Trakt Critic",
        stars: 5,
        content:
          "Comparing stats with friends is awesome. Knowing how many episodes each one watched creates a healthy competition.",
      },
      {
        name: "Juliana Santos",
        role: "Influencer",
        stars: 4,
        content:
          "The badges and monthly ranking give me an extra boost to catch up on series. Gamification is 10/10!",
      },
      {
        name: "Pedro Mendes",
        role: "Trakt User",
        stars: 5,
        content:
          "Finally a tracker that's also a social network. Seeing what my friends see and reacting in real-time changed everything.",
      },
    ],
  },
  download: {
    titlePre: "Be part of the",
    titlePost: "community",
    subtitle:
      "Free for Android and iOS. Track series, see what your friends watch and earn badges.",
    googlePlay: "Get it on Google Play",
    appStore: "Download on App Store",
    deviceRequirements: "iOS 12.0+ and Android 8.0+",
    freeWithInAppPurchases: "Free download with optional premium features.",
    appFeatureTitle: "Social tracking for series lovers",
    backToHome: "← Home",
    freeBadge: "v4.0 Social",
    features: [
      "Friends social feed",
      "Badges and gamification",
      "Trakt.tv synchronization",
      "Rankings and statistics",
      "Friend comparison",
    ],
  },
  header: {
    nav: {
      features: "Features",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Community",
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
      open: "Open",
      close: "Close",
    },
    subtitle: "Series & Social",
  },
  footer: {
    subtitle: "Series & Social",
    description:
      "The social network for tracking series, connecting with friends and earning badges. Social tracking with Trakt.tv sync.",
    quickLinks: {
      features: "Features",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Community",
      download: "Download",
    },
    titles: {
      quickLinks: "Quick Links",
      legal: "Legal",
      contact: "Contact",
    },
    legal: {
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
      licenses: "Licenses",
    },
    contact: {
      email: "Email",
      form: "Contact",
    },
    copyright: (year: number) => `© ${year} SeriesTrend Social. All rights reserved.`,
  },
};

const defaultEsTranslations = {
  hero: {
    badge: "#1 RED SOCIAL PARA SERIES",
    title: "Tu nueva red social de",
    titleHighlight: "Series",
    subtitle:
      "Sigue tus series, mira lo que tus amigos están viendo, gana badges y comparte tu pasión con la comunidad.",
    ctaButton: "Empezar Ahora",
    statsUsers: "Miembros",
    statsSeries: "Títulos",
    statsRatings: "Valoración",
  },
  features: {
    title: "Por qué unirse a",
    subtitle:
      "Funciones sociales para quienes se toman en serio los maratones de series.",
    items: [
      {
        title: "Feed de Amigos",
        description:
          "Mira en tiempo real lo que tu red está viendo, calificando y agregando a su lista.",
      },
      {
        title: "Badges y Logros",
        description:
          "Gana medallas exclusivas al completar maratones, géneros específicos o hitos de episodios.",
      },
      {
        title: "Comparación de Perfiles",
        description:
          "Compara tus estadísticas con amigos: minutos vistos, series en común y rankings mensuales.",
      },
      {
        title: "Sincronización Trakt",
        description:
          "Integración total con Trakt.tv para mantener tu historial, ratings y listas siempre actualizados.",
      },
      {
        title: "Reacciones e Inbox",
        description:
          "Reacciona a las actividades de tus amigos y envía recomendaciones directamente por el chat del app.",
      },
      {
        title: "Tendencias de Red",
        description:
          "Descubre lo que es popular no solo en el mundo, sino específicamente en tu círculo de amigos.",
      },
    ],
  },
  socialShowcase: {
    badge: "NOVEDAD",
    version: "Versión 4.0.0",
    title: "La Capa Social de",
    subtitle: "SeriesTrend ahora es una comunidad.",
    description:
      "Conéctate con amigos, compara estadísticas, gana badges y mira el feed de actividades en tiempo real.",
    traktBadge: "Sincronizado con Trakt.tv",
    supabaseBadge: "Real-time con Supabase",
    highlights: [
      "Feed de actividades de tus amigos en tiempo real.",
      "Sistema de Badges y logros por maratones.",
      "Comparación directa de progreso entre perfiles.",
    ],
    note:
      "Sincroniza tu cuenta Trakt.tv para importar todo tu historial y comenzar a interactuar con la comunidad.",
    screenshotLabels: [
      "Dashboard Social",
      "Feed de Actividades",
      "Badges y Logros",
      "Comparación de Amigos",
    ],
  },
  screenshots: {
    title: "Conoce la",
    subtitle:
      "Una interfaz moderna y social para transformar tu experiencia al ver series.",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "Explorar series",
        title: "Explorar Series",
        description: "Descubre nuevos títulos y lo que es tendencia en el mundo.",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "Detalles y reviews",
        title: "Detalles y Reviews",
        description: "Mira notas, comentarios de la comunidad y dónde ver.",
      },
      {
        src: "/images/Screenshot-8.png",
        alt: "Dashboard Social",
        title: "Tu Perfil Social",
        description: "Gestiona tus amigos, seguidores y tus logros.",
      },
      {
        src: "/images/Screenshot-10.png",
        alt: "Badges",
        title: "Badges y Gamificación",
        description: "Gana badges exclusivas mientras ves tus series.",
      },
      {
        src: "/images/Screenshot-11.png",
        alt: "Comparación",
        title: "Comparación de Amigos",
        description: "Mira quién vio más episodios este mes.",
      },
    ],
    prev: "Anterior",
    next: "Siguiente",
    pause: "Pausar",
    play: "Reproducir",
    viewImage: (index: number) => `Ver imagen ${index + 1}`,
  },
  testimonials: {
    title: "Qué dice la",
    subtitle:
      "Únete a miles de fans de series que ya forman parte de nuestra red social.",
    ctaButton: "Crear mi cuenta",
    sectionId: "comunidad",
    list: [
      {
        name: "Ana Silva",
        role: "Maratonista",
        stars: 5,
        content:
          "Desde la actualización social, descubrí series increíbles por las recomendaciones de mis amigos. ¡El feed es adictivo!",
      },
      {
        name: "Rafael Oliveira",
        role: "Crítico Trakt",
        stars: 5,
        content:
          "Comparar estadísticas con amigos es genial. Saber cuántos episodios vio cada uno crea una competencia sana.",
      },
      {
        name: "Juliana Santos",
        role: "Influencer",
        stars: 4,
        content:
          "Los badges e el ranking mensual me dan un impulso extra. ¡La gamificación es de 10!",
      },
      {
        name: "Pedro Mendes",
        role: "Usuario Trakt",
        stars: 5,
        content:
          "Finalmente un tracker que también es red social. Ver lo que mis amigos ven cambió todo.",
      },
    ],
  },
  download: {
    titlePre: "Sé parte de la",
    titlePost: "comunidad",
    subtitle:
      "Gratis para Android e iOS. Sigue series, mira lo que tus amigos ven y gana badges.",
    googlePlay: "Descargar en Google Play",
    appStore: "Descargar en App Store",
    deviceRequirements: "iOS 12.0+ e Android 8.0+",
    freeWithInAppPurchases: "Descarga gratuita con recursos premium opcionales.",
    appFeatureTitle: "Tracking social para amantes de las series",
    backToHome: "← Inicio",
    freeBadge: "v4.0 Social",
    features: [
      "Feed social de amigos",
      "Badges y gamificación",
      "Sincronización Trakt.tv",
      "Rankings y estadísticas",
      "Comparación entre amigos",
    ],
  },
  header: {
    nav: {
      features: "Recursos",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Comunidad",
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
      open: "Abrir",
      close: "Cerrar",
    },
    subtitle: "Series & Social",
  },
  footer: {
    subtitle: "Series & Social",
    description:
      "La red social para seguir series, conectar con amigos y ganar badges. Tracking social con sincronización Trakt.tv.",
    quickLinks: {
      features: "Recursos",
      social: "Social",
      screenshots: "Prints",
      testimonials: "Comunidad",
      download: "Download",
    },
    titles: {
      quickLinks: "Links Rápidos",
      legal: "Legal",
      contact: "Contacto",
    },
    legal: {
      terms: "Términos",
      privacy: "Privacidad",
      cookies: "Cookies",
      licenses: "Licencias",
    },
    contact: {
      email: "Email",
      form: "Contacto",
    },
    copyright: (year: number) => `© ${year} SeriesTrend Social. Todos los derechos reservados.`,
  },
};

const defaultZhTranslations = {
  hero: {
    badge: "#1 影集社群應用",
    title: "您的全新影集",
    titleHighlight: "社群網路",
    subtitle:
      "追蹤您的影集，查看朋友正在觀看什麼，贏取徽章並與社群分享您的熱情。",
    ctaButton: "立即開始",
    statsUsers: "成員",
    statsSeries: "作品",
    statsRatings: "評分",
  },
  features: {
    title: "為什麼加入",
    subtitle: "專為認真追劇的您設計的社群功能。",
    items: [
      {
        title: "好友動態",
        description: "即時查看您的好友正在觀看、評價或收藏哪些影集。",
      },
      {
        title: "徽章與成就",
        description: "完成馬拉松觀看、特定類型或集數里程碑來贏取獨家徽章。",
      },
      {
        title: "個人檔案比較",
        description: "與朋友比較統計數據：觀看時數、共同影集和每月排名。",
      },
      {
        title: "Trakt 同步",
        description: "與 Trakt.tv 深度整合，保持您的觀看歷史、評分和清單同步。",
      },
      {
        title: "反應與收件匣",
        description: "對朋友的動態做出反應，並直接透過應用程式內收件匣發送推薦。",
      },
      {
        title: "網路趨勢",
        description: "發現不僅是全球流行，更是您朋友圈內最受歡迎的影集。",
      },
    ],
  },
  socialShowcase: {
    badge: "新品",
    version: "版本 4.0.0",
    title: "社群層級來自",
    subtitle: "SeriesTrend 現在是一個社群。",
    description: "與朋友建立聯繫，比較數據，贏取馬拉松徽章並即時查看動態。",
    traktBadge: "與 Trakt.tv 同步",
    supabaseBadge: "Supabase 即時驅動",
    highlights: [
      "來自好友的即時動態消息。",
      "馬拉松觀看的徽章與成就系統。",
      "檔案之間的直接進度比較。",
    ],
    note: "同步您的 Trakt.tv 帳戶以匯入所有歷史紀錄並立即開始與社群互動。",
    screenshotLabels: ["社群儀表板", "動態消息", "徽章與成就", "好友比較"],
  },
  screenshots: {
    title: "遇見",
    subtitle: "一個現代化的社群介面，改變您的觀影體驗。",
    list: [
      {
        src: "/images/screenshot-1.png",
        alt: "探索影集",
        title: "探索影集",
        description: "發現新作品和全球流行趨勢。",
      },
      {
        src: "/images/screenshot-3.png",
        alt: "詳情與評論",
        title: "詳情與評論",
        description: "查看評分、社群評論和觀看平台。",
      },
      {
        src: "/images/Screenshot-8.png",
        alt: "社群儀表板",
        title: "您的社群檔案",
        description: "管理您的好友、追蹤者和成就。",
      },
      {
        src: "/images/Screenshot-10.png",
        alt: "徽章",
        title: "徽章與遊戲化",
        description: "在觀看影集的同時贏取獨家徽章。",
      },
      {
        src: "/images/Screenshot-11.png",
        alt: "比較",
        title: "好友比較",
        description: "查看本月誰觀看了更多集數。",
      },
    ],
    prev: "上一個",
    next: "下一個",
    pause: "暫停",
    play: "播放",
    viewImage: (index: number) => `查看圖片 ${index + 1}`,
  },
  testimonials: {
    title: "社群",
    subtitle: "加入成千上萬已經是我們社群網絡一部分的影迷。",
    ctaButton: "建立我的帳戶",
    sectionId: "community",
    list: [
      {
        name: "Ana Silva",
        role: "馬拉松觀看者",
        stars: 5,
        content: "自從社群更新後，我透過朋友的推薦發現了超棒的影集。動態消息讓人上癮！",
      },
      {
        name: "Rafael Oliveira",
        role: "Trakt 評論員",
        stars: 5,
        content: "與朋友比較統計數據太棒了。知道每個人看了多少集會產生良性的競爭。",
      },
      {
        name: "Juliana Santos",
        role: "影響者",
        stars: 4,
        content: "徽章和每月排名激勵我趕上進度。遊戲化做得太好了！",
      },
      {
        name: "Pedro Mendes",
        role: "Trakt 用戶",
        stars: 5,
        content: "終於有一個也是社群網絡的追蹤器了。即時看到朋友在看什麼改變了一切。",
      },
    ],
  },
  download: {
    titlePre: "成為",
    titlePost: "社群的一部分",
    subtitle: "Android 和 iOS 免費使用。追蹤影集，查看朋友看什麼並贏取徽章。",
    googlePlay: "在 Google Play 下載",
    appStore: "在 App Store 下載",
    deviceRequirements: "iOS 12.0+ 和 Android 8.0+",
    freeWithInAppPurchases: "免費下載，可選購高級功能。",
    appFeatureTitle: "為影迷準備的社群追蹤",
    backToHome: "← 首頁",
    freeBadge: "v4.0 社群",
    features: [
      "好友社群動態",
      "徽章與遊戲化",
      "Trakt.tv 同步",
      "排名與統計",
      "好友比較",
    ],
  },
  header: {
    nav: {
      features: "功能",
      social: "社群",
      screenshots: "截圖",
      testimonials: "社群",
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
      open: "開啟",
      close: "關閉",
    },
    subtitle: "影集與社群",
  },
  footer: {
    subtitle: "影集與社群",
    description: "追蹤影集、與朋友聯繫並贏取徽章的社群網絡。透過 Trakt.tv 同步進行社群追蹤。",
    quickLinks: {
      features: "功能",
      social: "社群",
      screenshots: "截圖",
      testimonials: "社群",
      download: "下載",
    },
    titles: {
      quickLinks: "快速連結",
      legal: "法律",
      contact: "聯絡",
    },
    legal: {
      terms: "條款",
      privacy: "隱私",
      cookies: "Cookie",
      licenses: "授權",
    },
    contact: {
      email: "電子郵件",
      form: "聯絡",
    },
    copyright: (year: number) => `© ${year} SeriesTrend Social. 版權所有。`,
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
