const fs = require('fs');
const file = 'd:/dev/page-seriestrend/page-seriestrend/src/context/LanguageContext.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// Remove the duplicate hero lines (lines 406-411 are leftover old ES hero)
// Find and remove the orphaned lines between the new hero closing and old features
const targetStr = '    subtitle: "La aplicaci\u00f3n esencial para seguir las series m\u00e1s vistas';
const idx = lines.findIndex(l => l.includes(targetStr));
if (idx > 0) {
  // Remove lines from idx to idx+5 (the orphaned old hero data)
  lines.splice(idx, 6);
  console.log('Removed orphaned ES hero lines at index', idx);
}

// Now replace ES features + comingSoon with new social content
const esFeaturesStart = lines.findIndex(l => l.includes('"Sigue Tendencias"'));
if (esFeaturesStart > 0) {
  // Find the features start line (title line)
  const featTitleIdx = lines.findIndex((l, i) => i > 395 && l.includes('"Por qu\u00e9 elegir"'));
  const comingSoonEnd = lines.findIndex((l, i) => i > featTitleIdx && l.trim() === '},') + 1;
  // Find where comingSoon block ends (next screenshots section)
  const screenshotsIdx = lines.findIndex((l, i) => i > featTitleIdx && l.includes('screenshots:'));

  const newContent = `  features: {
    title: "Por qu\u00e9 elegir",
    subtitle: "Tracking, comunidad y gamificaci\u00f3n en una sola app para quienes se toman las series en serio.",
    items: [
      { title: "Feed Social", description: "Mira lo que tus amigos est\u00e1n viendo, valorando y a\u00f1adiendo a su watchlist en un feed con actualizaciones en tiempo real." },
      { title: "Tracking Inteligente", description: "Marca episodios vistos, val\u00f3ralos, comenta y sigue tu progreso en cada temporada con sincronizaci\u00f3n autom\u00e1tica." },
      { title: "Reacciones y Compartir", description: "Reacciona a las actividades de amigos con emojis r\u00e1pidos y env\u00eda recomendaciones directamente por la bandeja de entrada." },
      { title: "Badges y Logros", description: "Consigue badges por hitos como series completas y episodios vistos. Compara tu ranking mensual con amigos." },
      { title: "Sincronizaci\u00f3n Trakt", description: "Conecta tu cuenta de Trakt.tv y sincroniza progreso, watchlist e historial. Datos de TMDB y TVmaze complementan todo." },
      { title: "Descubre Tendencias", description: "Rankings diarios y semanales muestran lo m\u00e1s popular. Mira lo que toda la comunidad est\u00e1 viendo ahora." },
    ],
  },
  socialShowcase: {
    badge: "NUEVO EN v4.0",
    version: "Versi\u00f3n 4.0.0",
    title: "Tu red de series, dentro de",
    subtitle: "Ahora puedes seguir lo que tus amigos ven, reaccionar, ganar badges y subir en el ranking \u2014 todo dentro de la app.",
    description: "Con integraci\u00f3n via Trakt.tv y Supabase, SeriesTrend te conecta con la comunidad que ve junta. Feed de actividades, bandeja de entrada, comparaci\u00f3n entre amigos y mucho m\u00e1s.",
    traktBadge: "Integraci\u00f3n con Trakt.tv",
    supabaseBadge: "Powered by Supabase",
    highlights: [
      "Feed con actividad de amigos, reacciones con emojis y timeline diaria de lo que la red est\u00e1 viendo.",
      "Compara estad\u00edsticas con amigos: episodios, series completas, minutos vistos y series en com\u00fan.",
      "Badges, logros y ranking mensual. Gamificaci\u00f3n que te motiva a ver e interactuar m\u00e1s."
    ],
    screenshotLabels: ["Dashboard Social", "Feed de Actividades", "Badges y Logros", "Comparaci\u00f3n de Amigos"],
    note: "Las funciones sociales utilizan tu cuenta de Trakt.tv para conexiones. Tu privacidad se preserva \u2014 t\u00fa controlas qui\u00e9n ve tu actividad.",
  },`;

  lines.splice(featTitleIdx - 1, screenshotsIdx - featTitleIdx + 1, newContent);
  console.log('Replaced ES features+comingSoon with social content');
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('ES features/social done');
