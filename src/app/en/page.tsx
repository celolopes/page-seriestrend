import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

// Importando componentes
import Header from "@/components/en/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/en/Footer";

// Provider de idioma
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SeriesTrend - Track What's Trending",
  description:
    "The essential app to track the most watched TV series trends of the week and day",
};

// Textos traduzidos para inglês
const translations = {
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
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights />
      <LanguageProvider language="en">
        <Header />
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
        <Download />
        <Footer />
      </LanguageProvider>
    </main>
  );
}
