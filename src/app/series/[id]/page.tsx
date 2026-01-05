import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// --- Constants & Types ---

const TMDB_READ_ACCESS_TOKEN = process.env.TMDB_READ_ACCESS_TOKEN;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface SeriesData {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
}

// --- Data Fetching ---

async function getSeriesData(id: string): Promise<SeriesData | null> {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, {
      headers: {
        Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch series data: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching series data:", error);
    return null;
  }
}

// --- Metadata Generation ---

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const data = await getSeriesData(params.id);

  if (!data) {
    return {
      title: "Series Trend",
      description: "Acompanhe suas séries favoritas.",
    };
  }

  const imageUrl = data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : "/images/og-image.jpg"; // Fallback if you have one, or just omit

  return {
    title: `${data.name} - Series Trend`,
    description: data.overview || `Confira ${data.name} no Series Trend!`,
    openGraph: {
      title: data.name,
      description: data.overview || `Confira ${data.name} no Series Trend!`,
      images: [
        {
          url: imageUrl,
          width: 600,
          height: 900, // Poster aspect ratio approximation
          alt: data.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.name,
      description: data.overview || `Confira ${data.name} no Series Trend!`,
      images: [imageUrl],
    },
  };
}

// --- Client Component Logic (Inline for simplicity in App Router pages) ---

import DeepLinkRedirect from "./components/DeepLinkRedirect"; // We will create this small client component to handle the redirect logic cleanly

export default async function SeriesDeepLinkPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const data = await getSeriesData(params.id);

  if (!data) {
    // Basic 404 handling or redirect to home
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Série não encontrada</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  const backdropUrl = data.backdrop_path ? `${IMAGE_BASE_URL}${data.backdrop_path}` : null;

  const posterUrl = data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 flex flex-col items-center justify-center text-white">
      {/* Client Side Redirect Logic */}
      <DeepLinkRedirect seriesId={params.id} />

      {/* Background Image with Blur */}
      {backdropUrl && (
        <div className="absolute inset-0 z-0">
          <Image src={backdropUrl} alt="Background" fill className="object-cover opacity-30 blur-xl scale-110" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-md p-6 mx-4">
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
          {/* Poster */}
          <div className="relative w-48 h-72 mb-6 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            {posterUrl ? (
              <Image src={posterUrl} alt={`Poster ${data.name}`} fill className="object-cover" priority />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Sem Imagem</span>
              </div>
            )}
          </div>

          {/* Title & Info */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-tight">{data.name}</h1>

          <div className="flex items-center gap-2 mb-4 text-sm text-gray-300">
            <span>{new Date(data.first_air_date).getFullYear()}</span>
            <span>•</span>
            <span className="flex items-center text-yellow-500">★ {data.vote_average.toFixed(1)}</span>
          </div>

          <p className="text-center text-gray-200 text-sm mb-8 line-clamp-3 leading-relaxed">{data.overview || "Sem sinopse disponível."}</p>

          {/* Primary Action */}
          <Link
            href={`seriestrend://series/${params.id}`}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20 mb-6"
          >
            <span>Abrir no App</span>
            {/* External Link Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>

          {/* Store Buttons (Visual Only placeholders as requested, or pointing to stores) */}
          <div className="grid grid-cols-2 gap-3 w-full opacity-80">
            {/* App Store Placeholder */}
            <button className="flex flex-col items-center justify-center bg-black/40 hover:bg-black/60 p-3 rounded-xl transition-colors border border-white/5">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Download on the</span>
              <span className="font-semibold">App Store</span>
            </button>

            {/* Play Store Placeholder */}
            <button className="flex flex-col items-center justify-center bg-black/40 hover:bg-black/60 p-3 rounded-xl transition-colors border border-white/5">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            Ir para o site oficial
          </Link>
        </div>
      </div>
    </div>
  );
}
