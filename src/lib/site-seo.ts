import type { Metadata } from "next";

export const SITE_ORIGIN = "https://page-seriestrend.vercel.app";

const locales = ["pt-BR", "en", "es", "zh-Hant"] as const;
type Locale = (typeof locales)[number];

const routes = {
  home: { "pt-BR": "/", en: "/en", es: "/es", "zh-Hant": "/zh" },
  contact: {
    "pt-BR": "/contato", en: "/en/contact", es: "/es/contact", "zh-Hant": "/zh/contact",
  },
  privacy: {
    "pt-BR": "/privacy-policy", en: "/en/privacy-policy", es: "/es/privacy-policy", "zh-Hant": "/zh/privacy-policy",
  },
  terms: {
    "pt-BR": "/terms", en: "/en/terms", es: "/es/terms", "zh-Hant": "/zh/terms",
  },
} as const satisfies Record<string, Record<Locale, string>>;

type Page = keyof typeof routes;
const absolute = (pathname: string) => new URL(pathname, SITE_ORIGIN).href;

export function pageAlternates(page: Page, locale: Locale): NonNullable<Metadata["alternates"]> {
  const paths = routes[page];
  return {
    canonical: absolute(paths[locale]),
    languages: {
      "pt-BR": absolute(paths["pt-BR"]),
      en: absolute(paths.en),
      es: absolute(paths.es),
      "zh-Hant": absolute(paths["zh-Hant"]),
      "x-default": absolute(paths["pt-BR"]),
    },
  };
}

export const indexablePageUrls = Object.values(routes).flatMap((paths) =>
  locales.map((locale) => absolute(paths[locale])),
);
