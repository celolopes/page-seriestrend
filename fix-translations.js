const fs = require('fs');
const file = 'd:/dev/page-seriestrend/page-seriestrend/src/context/LanguageContext.tsx';
let c = fs.readFileSync(file, 'utf8');

// ES testimonials
c = c.replace('SeriesTrend ha revolucionado la forma en que sigo mis series. \u00a1Puedo estar al tanto de todas las tendencias de forma r\u00e1pida e intuitiva! \u00a1Muy recomendable!', 'Desde la actualizaci\u00f3n social, descubr\u00ed series incre\u00edbles por las recomendaciones de mis amigos. \u00a1El feed de actividades es adictivo!');
c = c.replace('Como cr\u00edtico, valoro los datos precisos sobre lo que est\u00e1 en tendencia. SeriesTrend me da exactamente eso, con una interfaz limpia y eficiente.', 'La comparaci\u00f3n de estad\u00edsticas con amigos es genial. Saber cu\u00e1ntos episodios vio cada uno crea una competencia sana y divertida.');
c = c.replace('Uso SeriesTrend a diario para mantenerme actualizada sobre lo que est\u00e1 de moda. \u00a1El an\u00e1lisis de tendencias es perfecto para recomendar contenido a mis seguidores!', 'Los badges y el ranking mensual me dan una motivaci\u00f3n extra para seguir todo. \u00a1La gamificaci\u00f3n de SeriesTrend es perfecta para el engagement!');
c = c.replace('Por fin una app que me ayuda a decidir qu\u00e9 ver basado en datos reales, no solo en algoritmos de recomendaci\u00f3n. \u00a1Simplemente esencial!', 'Por fin un tracker que tambi\u00e9n es red social. Ver lo que mis amigos ven y reaccionar en tiempo real cambi\u00f3 completamente mi experiencia.');
c = c.replace('\u00danete a miles de usuarios satisfechos que han transformado la forma de ver series.', '\u00danete a miles de usuarios que transformaron la forma de ver series con la comunidad SeriesTrend.');

// ES download
c = c.replace('titlePost: "Ahora",\n    subtitle: "Disponible para Android e iOS. Descarga ahora y comienza a seguir las tendencias de tus series favoritas."', 'titlePost: "y conecta con tu red",\n    subtitle: "Gratis para Android e iOS. Sigue series, mira lo que tus amigos ven y gana badges."');
c = c.replace('appFeatureTitle: "Todo lo que necesitas saber sobre tus series"', 'appFeatureTitle: "Tracking social para quienes se toman las series en serio"');
c = c.replace('features: ["Rankings diarios y semanales", "Estad\u00edsticas detalladas de popularidad", "Notificaciones de tendencias", "Lanzamientos de episodios", "Integraci\u00f3n con tus plataformas favoritas"]', 'features: ["Feed social con actividad de amigos", "Badges, logros y ranking mensual", "Sincronizaci\u00f3n con Trakt.tv", "Rankings diarios y semanales", "Comparaci\u00f3n de estad\u00edsticas entre amigos"]');

// ES header
c = c.replace('features: "Caracter\u00edsticas",\n      screenshots: "Capturas",\n      testimonials: "Testimonios",\n      download: "Descargar",\n    },\n    language', 'features: "Caracter\u00edsticas",\n      social: "Social",\n      screenshots: "Capturas",\n      testimonials: "Testimonios",\n      download: "Descargar",\n    },\n    language');
c = c.replace('subtitle: "Series en Tendencia",\n  },\n  footer: {\n    subtitle: "Series en Tendencia",\n    description: "La aplicaci\u00f3n esencial para seguir las tendencias de series m\u00e1s vistas de la semana y el d\u00eda."', 'subtitle: "Series & Comunidad",\n  },\n  footer: {\n    subtitle: "Series & Comunidad",\n    description: "La app para seguir series, conectar con amigos y ganar badges. Tracking social con sincronizaci\u00f3n Trakt.tv."');
c = c.replace('features: "Caracter\u00edsticas",\n      screenshots: "Capturas",\n      testimonials: "Testimonios",\n      download: "Descargar",\n    },\n    titles: {\n      quickLinks: "Enlaces', 'features: "Caracter\u00edsticas",\n      social: "Social",\n      screenshots: "Capturas",\n      testimonials: "Testimonios",\n      download: "Descargar",\n    },\n    titles: {\n      quickLinks: "Enlaces');

// ZH hero
c = c.replace('\u767c\u73fe\u73fe\u5728', '\u4f60\u7684\u5f71\u96c6\u3002\u4f60\u7684\u670b\u53cb\u3002');
c = c.replace('\u6d41\u884c\u4ec0\u9ebc', '\u76e1\u5728\u4e00\u500b App\u3002');
c = c.replace('\u8ffd\u8e64\u6700\u53d7\u6b61\u8fce\u5f71\u96c6\u3001\u7372\u53d6\u500b\u4eba\u5316\u63a8\u85a6\u4e14\u4e0d\u518d\u932f\u904e\u4efb\u4f55\u4e00\u96c6\u7684\u5fc5\u5099\u61c9\u7528\u7a0b\u5f0f\u3002', '\u8ffd\u8e64\u5f71\u96c6\u3001\u67e5\u770b\u670b\u53cb\u6b63\u5728\u770b\u4ec0\u9ebc\u3001\u53cd\u61c9\u3001\u5206\u4eab\u63a8\u85a6\u4e26\u7372\u5f97\u5fbd\u7ae0\u3002SeriesTrend \u5c07\u60a8\u9023\u63a5\u5230\u4e00\u8d77\u8ffd\u5287\u7684\u793e\u7fa4\u3002');
c = c.replace('\u7acb\u5373\u4e0b\u8f09",\n    statsUsers', '\u514d\u8cbb\u4e0b\u8f09",\n    statsUsers');

// ZH features + comingSoon -> socialShowcase
const zhFeatIdx = c.indexOf('title: "\u70ba\u4ec0\u9ebc\u9078\u64c7"');
const zhScreenshotsIdx = c.indexOf('title: "\u8a8d\u8b58"');
if (zhFeatIdx > 0 && zhScreenshotsIdx > 0) {
  const blockStart = c.lastIndexOf('features:', zhFeatIdx);
  const blockEnd = c.lastIndexOf('\n', zhScreenshotsIdx);
  const newBlock = `features: {
    title: "\u70ba\u4ec0\u9ebc\u9078\u64c7",
    subtitle: "\u8ffd\u8e64\u3001\u793e\u7fa4\u548c\u904a\u6232\u5316\u96c6\u65bc\u4e00\u8eab\uff0c\u5c08\u70ba\u8a8d\u771f\u8ffd\u5287\u7684\u4eba\u6253\u9020\u3002",
    items: [
      { title: "\u793e\u7fa4\u52d5\u614b", description: "\u67e5\u770b\u670b\u53cb\u6b63\u5728\u89c0\u770b\u3001\u8a55\u50f9\u548c\u52a0\u5165\u5f85\u770b\u6e05\u55ae\u7684\u5167\u5bb9\uff0c\u5373\u6642\u66f4\u65b0\u7684\u6d3b\u52d5\u52d5\u614b\u3002" },
      { title: "\u667a\u6167\u8ffd\u8e64", description: "\u6a19\u8a18\u5df2\u89c0\u770b\u96c6\u6578\u3001\u8a55\u5206\u3001\u8a55\u8ad6\u4e26\u8ffd\u8e64\u6bcf\u5b63\u9032\u5ea6\uff0c\u81ea\u52d5\u540c\u6b65\u3002" },
      { title: "\u53cd\u61c9\u8207\u5206\u4eab", description: "\u7528\u5feb\u901f\u8868\u60c5\u7b26\u865f\u5c0d\u670b\u53cb\u7684\u6d3b\u52d5\u505a\u51fa\u53cd\u61c9\uff0c\u4e26\u900f\u904e\u61c9\u7528\u7a0b\u5f0f\u4fe1\u7bb1\u767c\u9001\u63a8\u85a6\u3002" },
      { title: "\u5fbd\u7ae0\u8207\u6210\u5c31", description: "\u901a\u904e\u5b8c\u6210\u5f71\u96c6\u548c\u89c0\u770b\u96c6\u6578\u7b49\u91cc\u7a0b\u7891\u7372\u5f97\u5fbd\u7ae0\u3002\u8207\u670b\u53cb\u6bd4\u8f03\u6708\u5ea6\u6392\u540d\u3002" },
      { title: "Trakt \u540c\u6b65", description: "\u9023\u63a5 Trakt.tv \u5e33\u865f\u4e26\u540c\u6b65\u9032\u5ea6\u3001\u5f85\u770b\u6e05\u55ae\u548c\u6b77\u53f2\u3002TMDB \u548c TVmaze \u6578\u64da\u88dc\u5145\u4e00\u5207\u3002" },
      { title: "\u767c\u73fe\u8da8\u52e2", description: "\u6bcf\u65e5\u548c\u6bcf\u9031\u6392\u884c\u699c\u5c55\u793a\u71b1\u9580\u5167\u5bb9\u3002\u67e5\u770b\u6574\u500b\u793e\u7fa4\u6b63\u5728\u89c0\u770b\u4ec0\u9ebc\u3002" },
    ],
  },
  socialShowcase: {
    badge: "v4.0 \u65b0\u529f\u80fd",
    version: "4.0.0 \u7248\u672c",
    title: "\u60a8\u7684\u5f71\u96c6\u793e\u7fa4\uff0c\u5c31\u5728",
    subtitle: "\u73fe\u5728\u60a8\u53ef\u4ee5\u8ffd\u8e64\u670b\u53cb\u5728\u770b\u4ec0\u9ebc\u3001\u505a\u51fa\u53cd\u61c9\u3001\u7372\u5f97\u5fbd\u7ae0\u4e26\u653b\u4e0a\u6392\u884c\u699c \u2014 \u5168\u90e8\u5728\u61c9\u7528\u7a0b\u5f0f\u5167\u3002",
    description: "\u900f\u904e Trakt.tv \u548c Supabase \u6574\u5408\uff0cSeriesTrend \u5c07\u60a8\u9023\u63a5\u5230\u4e00\u8d77\u8ffd\u5287\u7684\u793e\u7fa4\u3002\u6d3b\u52d5\u52d5\u614b\u3001\u4fe1\u7bb1\u3001\u670b\u53cb\u6bd4\u8f03\u7b49\u66f4\u591a\u529f\u80fd\u3002",
    traktBadge: "Trakt.tv \u6574\u5408",
    supabaseBadge: "Powered by Supabase",
    highlights: [
      "\u670b\u53cb\u6d3b\u52d5\u52d5\u614b\u3001\u8868\u60c5\u7b26\u865f\u53cd\u61c9\u548c\u6bcf\u65e5\u6642\u9593\u7dda\uff0c\u5c55\u793a\u60a8\u7684\u7db2\u7d61\u6b63\u5728\u89c0\u770b\u7684\u5167\u5bb9\u3002",
      "\u8207\u670b\u53cb\u6bd4\u8f03\u7d71\u8a08\u6578\u64da\uff1a\u96c6\u6578\u3001\u5b8c\u6210\u5f71\u96c6\u3001\u89c0\u770b\u5206\u9418\u6578\u548c\u5171\u540c\u5f71\u96c6\u3002",
      "\u5fbd\u7ae0\u3001\u6210\u5c31\u548c\u6708\u5ea6\u6392\u540d\u3002\u904a\u6232\u5316\u6fc0\u52f5\u60a8\u66f4\u591a\u89c0\u770b\u548c\u4e92\u52d5\u3002"
    ],
    screenshotLabels: ["\u793e\u7fa4\u5100\u8868\u677f", "\u6d3b\u52d5\u52d5\u614b", "\u5fbd\u7ae0\u8207\u6210\u5c31", "\u670b\u53cb\u6bd4\u8f03"],
    note: "\u793e\u7fa4\u529f\u80fd\u4f7f\u7528\u60a8\u7684 Trakt.tv \u5e33\u865f\u9032\u884c\u9023\u63a5\u3002\u60a8\u7684\u96b1\u79c1\u5f97\u5230\u4fdd\u8b77 \u2014 \u60a8\u63a7\u5236\u8ab0\u80fd\u770b\u5230\u60a8\u7684\u6d3b\u52d5\u3002",
  },
  `;
  // Find the exact start of "  features: {" before zhFeatIdx
  const linesBefore = c.substring(0, blockStart).split('\n');
  const linesAfter = c.substring(blockEnd);
  c = c.substring(0, blockStart) + newBlock + linesAfter;
}

// ZH testimonials
c = c.replace('SeriesTrend \u5fb9\u5e95\u6539\u8b8a\u4e86\u6211\u8ffd\u5287\u7684\u65b9\u5f0f\u3002\u6211\u53ef\u4ee5\u5feb\u901f\u76f4\u89c0\u5730\u638c\u63e1\u6240\u6709\u8da8\u52e2\u3002\u5f37\u70c8\u63a8\u85a6\uff01', '\u81ea\u5f9e\u793e\u7fa4\u66f4\u65b0\u5f8c\uff0c\u6211\u900f\u904e\u670b\u53cb\u7684\u63a8\u85a6\u767c\u73fe\u4e86\u8a31\u591a\u7cbe\u5f69\u7684\u5f71\u96c6\u3002\u6d3b\u52d5\u52d5\u614b\u8b93\u4eba\u6b32\u7f77\u4e0d\u80fd\uff01');
c = c.replace('\u4f5c\u70ba\u8a55\u8ad6\u5bb6\uff0c\u6211\u5f88\u91cd\u8996\u8da8\u52e2\u6578\u64da\u7684\u6e96\u78ba\u6027\u3002SeriesTrend \u63d0\u4f9b\u4e86\u4e7e\u6de8\u9ad8\u6548\u7684\u4ecb\u9762\u548c\u7cbe\u78ba\u7684\u6578\u64da\u3002', '\u8207\u670b\u53cb\u7684\u7d71\u8a08\u6bd4\u8f03\u592a\u68d2\u4e86\u3002\u77e5\u9053\u6bcf\u500b\u4eba\u770b\u4e86\u591a\u5c11\u96c6\uff0c\u5275\u9020\u4e86\u4e00\u7a2e\u5065\u5eb7\u6709\u8da3\u7684\u7af6\u722d\u3002');
c = c.replace('\u6211\u6bcf\u5929\u90fd\u7528 SeriesTrend \u4f86\u638c\u63e1\u71b1\u9580\u5f71\u96c6\u3002\u8da8\u52e2\u5206\u6790\u975e\u5e38\u9069\u5408\u63a8\u85a6\u5167\u5bb9\u7d66\u6211\u7684\u7c89\u7d72\uff01', '\u5fbd\u7ae0\u548c\u6708\u5ea6\u6392\u540d\u7d66\u4e86\u6211\u984d\u5916\u7684\u52d5\u529b\u3002SeriesTrend \u7684\u904a\u6232\u5316\u975e\u5e38\u9069\u5408\u63d0\u9ad8\u53c3\u8207\u5ea6\uff01');
c = c.replace('\u7d42\u65bc\u6709\u4e00\u6b3e\u6839\u64da\u771f\u5be6\u6578\u64da\u63a8\u85a6\u5f71\u96c6\u7684 App\uff0c\u4e0d\u53ea\u662f\u6f14\u7b97\u6cd5\u63a8\u85a6\u3002\u7c21\u76f4\u662f\u5fc5\u5099\uff01', '\u7d42\u65bc\u6709\u4e00\u500b\u540c\u6642\u662f\u793e\u4ea4\u7db2\u7d61\u7684\u8ffd\u8e64\u5668\u3002\u770b\u5230\u670b\u53cb\u5728\u770b\u4ec0\u9ebc\u4e26\u5373\u6642\u53cd\u61c9\uff0c\u5fb9\u5e95\u6539\u8b8a\u4e86\u6211\u7684\u9ad4\u9a57\u3002');
c = c.replace('\u52a0\u5165\u6210\u5343\u4e0a\u842c\u6eff\u610f\u7528\u6236\u7684\u884c\u5217\uff0c\u6539\u8b8a\u4ed6\u5011\u89c0\u770b\u5f71\u96c6\u7684\u65b9\u5f0f\u3002', '\u52a0\u5165\u6210\u5343\u4e0a\u842c\u7684\u7528\u6236\uff0c\u900f\u904e SeriesTrend \u793e\u7fa4\u6539\u8b8a\u8ffd\u5287\u65b9\u5f0f\u3002');

// ZH download
c = c.replace('titlePost: "",\n    subtitle: "\u9069\u7528\u65bc Android \u548c iOS\u3002\u7acb\u5373\u4e0b\u8f09\u4e26\u958b\u59cb\u8ffd\u8e64\u60a8\u6700\u611b\u5f71\u96c6\u7684\u8da8\u52e2\u3002"', 'titlePost: "\u4e26\u9023\u63a5\u60a8\u7684\u793e\u7fa4",\n    subtitle: "\u514d\u8cbb\u9069\u7528\u65bc Android \u548c iOS\u3002\u8ffd\u8e64\u5f71\u96c6\u3001\u67e5\u770b\u670b\u53cb\u89c0\u770b\u4e26\u7372\u5f97\u5fbd\u7ae0\u3002"');
c = c.replace('\u95dc\u65bc\u60a8\u5f71\u96c6\u7684\u4e00\u5207\u9808\u77e5', '\u70ba\u8a8d\u771f\u8ffd\u5287\u7684\u4eba\u6253\u9020\u7684\u793e\u4ea4\u8ffd\u8e64');
c = c.replace('features: ["\u6bcf\u65e5\u548c\u6bcf\u9031\u6392\u884c\u699c", "\u8a73\u7d30\u4eba\u6c23\u7d71\u8a08", "\u8da8\u52e2\u901a\u77e5", "\u96c6\u6578\u767c\u5e03", "\u6574\u5408\u60a8\u6700\u611b\u7684\u5e73\u53f0"]', 'features: ["\u670b\u53cb\u6d3b\u52d5\u793e\u7fa4\u52d5\u614b", "\u5fbd\u7ae0\u3001\u6210\u5c31\u548c\u6708\u5ea6\u6392\u540d", "Trakt.tv \u540c\u6b65", "\u6bcf\u65e5\u548c\u6bcf\u9031\u6392\u884c\u699c", "\u670b\u53cb\u9593\u7d71\u8a08\u6bd4\u8f03"]');

// ZH header
c = c.replace('features: "\u529f\u80fd",\n      screenshots: "\u622a\u5716",\n      testimonials: "\u8a55\u50f9",\n      download: "\u4e0b\u8f09",\n    },\n    language: {\n      pt: "PT",\n      en: "EN",\n      es: "ES",\n      zh: "ZH",\n      separator: "/",\n    },\n    menu: {\n      open: "\u958b\u555f\u9078\u55ae",\n      close: "\u95dc\u9589\u9078\u55ae",\n    },\n    subtitle: "\u71b1\u9580\u5f71\u96c6"', 'features: "\u529f\u80fd",\n      social: "\u793e\u7fa4",\n      screenshots: "\u622a\u5716",\n      testimonials: "\u8a55\u50f9",\n      download: "\u4e0b\u8f09",\n    },\n    language: {\n      pt: "PT",\n      en: "EN",\n      es: "ES",\n      zh: "ZH",\n      separator: "/",\n    },\n    menu: {\n      open: "\u958b\u555f\u9078\u55ae",\n      close: "\u95dc\u9589\u9078\u55ae",\n    },\n    subtitle: "\u5f71\u96c6 & \u793e\u7fa4"');

// ZH footer
c = c.replace('subtitle: "\u71b1\u9580\u5f71\u96c6",\n    description: "\u8ffd\u8e64\u6bcf\u9031\u548c\u6bcf\u65e5\u6700\u53d7\u6b61\u8fce\u5f71\u96c6\u8da8\u52e2\u7684\u5fc5\u5099\u61c9\u7528\u7a0b\u5f0f\u3002"', 'subtitle: "\u5f71\u96c6 & \u793e\u7fa4",\n    description: "\u8ffd\u8e64\u5f71\u96c6\u3001\u9023\u63a5\u670b\u53cb\u4e26\u7372\u5f97\u5fbd\u7ae0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002\u900f\u904e Trakt.tv \u540c\u6b65\u7684\u793e\u4ea4\u8ffd\u8e64\u3002"');
c = c.replace('features: "\u529f\u80fd",\n      screenshots: "\u622a\u5716",\n      testimonials: "\u8a55\u50f9",\n      download: "\u4e0b\u8f09",\n    },\n    titles: {\n      quickLinks: "\u5feb\u901f\u9023\u7d50"', 'features: "\u529f\u80fd",\n      social: "\u793e\u7fa4",\n      screenshots: "\u622a\u5716",\n      testimonials: "\u8a55\u50f9",\n      download: "\u4e0b\u8f09",\n    },\n    titles: {\n      quickLinks: "\u5feb\u901f\u9023\u7d50"');

fs.writeFileSync(file, c, 'utf8');
console.log('All ES/ZH translations updated!');
