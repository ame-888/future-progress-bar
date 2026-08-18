import type { Aspect, HistoricalScore, ScoreValue } from "./types";

const round = (value: number) => Math.round(value * 100) / 100;

export function mean(values: ScoreValue[]): ScoreValue {
  if (values.some((value) => value.status === "unknown" || value.score === null)) return { score: null, status: "unknown" };
  const applicable = values.filter((value) => value.status !== "not_applicable");
  if (!applicable.length) return { score: null, status: "not_applicable" };
  const score = round(applicable.reduce((sum, value) => sum + (value.score ?? 0), 0) / applicable.length);
  return { score, status: applicable.some((value) => value.status === "placeholder") ? "placeholder" : "known" };
}

export const calculateHorsemanScore = (aspects: Pick<Aspect, "score" | "scoreStatus">[]) =>
  mean(aspects.map(({ score, scoreStatus: status }) => ({ score, status })));

export const calculateHumanityScore = (horsemen: ScoreValue[]) => mean(horsemen);

export function calculateBossHP(progress: ScoreValue): ScoreValue {
  return progress.score === null ? { score: null, status: progress.status } : { score: round(100 - progress.score), status: progress.status };
}

export function calculateHistoricalScores(series: HistoricalScore[][]): HistoricalScore[] {
  const years = [...new Set(series.flatMap((points) => points.map(({ year }) => year)))].sort();
  return years.map((year) => {
    const points = series.map((items) => items.find((point) => point.year === year) ?? { score: null, status: "unknown" as const });
    const result = mean(points);
    return { year, ...result, methodologyVersion: points.map((p) => "methodologyVersion" in p ? p.methodologyVersion : "missing").join(" + ") };
  });
}

