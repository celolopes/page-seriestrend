// API Route para retornar métricas do site SeriesTrend
// Substitua os valores simulados por integrações reais conforme necessário
import { NextResponse } from "next/server";

export async function GET() {
  // Simulação de dados - substitua por integrações reais (Google Analytics, Play Store, etc)
  const data = {
    activeUsers: 50000, // Exemplo: buscar do Google Analytics
    monitoredSeries: 1000, // Exemplo: buscar do seu banco de dados
    userRating: 4.8, // Exemplo: buscar da Google Play Store
  };

  return NextResponse.json(data);
}
