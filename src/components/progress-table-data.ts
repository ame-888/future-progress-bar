import type { EvidenceReference, NorthStarDefinition, ResultStatus } from "../lib/measurement-types.ts";
import { MEASUREMENT_CATALOG } from "../lib/measurement-catalog.ts";
import { MEASUREMENT_EVIDENCE } from "../lib/measurement-evidence.ts";
import { NORTH_STARS } from "../lib/north-stars.ts";
import { DOMAIN_STRUCTURE } from "../data/domains.ts";
import { MEASUREMENT_OBSERVATIONS } from "../data/measurement-results.ts";
import { MEASUREMENT_LEVELS } from "../data/measurement-levels.ts";
import { MEASUREMENT_FORECASTS } from "../data/measurement-forecasts.ts";
import { MEASUREMENT_HISTORY } from "../data/measurement-history.ts";

export type MeasurementHistory = { value?: number; note?: string; details?: string[] };
export type MeasurementLevel = { level: number; goal: number; achievementKey?: string; label?: string; realityYear?: number; aiPredictions?: { name: string; year: number }[] };
export type Measurement = { id: string; researchCutoff: string; observationDate?: string; dataPeriod?: string; geographicScope?: string; denominator?: { description: string; value?: number; period?: string; geography?: string }; evidence: EvidenceReference[]; title: string; question: string; definition: string; currentValue?: number; valueStatus?: ResultStatus; displayValue?: string; baseValue?: number; unit: string; isLowerBetter?: boolean; temporalType?: "record" | "current"; indicatorType?: "capability" | "adoption" | "policy" | "market" | "outcome" | "proxy"; achievements?: Record<string, boolean>; levels: MeasurementLevel[]; history: MeasurementHistory[] };
export type SubDomainData = { id: string; northStar?: NorthStarDefinition; name: string; description?: string; measurements: Measurement[] };
export type MainDomainData = { id: string; name: string; subdomains: SubDomainData[] };

type Observation = { researchCutoff: string; observationDate?: string; dataPeriod?: string; currentValue?: number; valueStatus?: ResultStatus; displayValue?: string; baseValue?: number; achievements?: Record<string, boolean> };

/** UI composition only: stable definitions + dated observations + levels + forecasts + history + evidence. */
export const MAIN_DOMAINS: MainDomainData[] = DOMAIN_STRUCTURE.map((domain) => ({
  id: domain.id,
  name: domain.name,
  subdomains: domain.subdomains.map((subdomain) => ({
    id: subdomain.id,
    name: subdomain.name,
    description: subdomain.description,
    northStar: NORTH_STARS[subdomain.id],
    measurements: subdomain.measurementIds.map((id) => {
      const definition = MEASUREMENT_CATALOG[id];
      const observation = MEASUREMENT_OBSERVATIONS[id] as Observation | undefined;
      const bareLevels = MEASUREMENT_LEVELS[id];
      if (!definition || !observation || !bareLevels) throw new Error(`Incomplete measurement composition: ${id}`);
      const forecasts = MEASUREMENT_FORECASTS[id] as Partial<Record<number, readonly { name: string; year: number }[]>> | undefined;
      return {
        ...definition,
        ...observation,
        evidence: MEASUREMENT_EVIDENCE[id] ?? [],
        levels: bareLevels.map((level) => ({ ...level, aiPredictions: forecasts?.[level.level] ? [...forecasts[level.level]!] : undefined })),
        history: (MEASUREMENT_HISTORY[id] ?? []).map((entry) => ({ ...entry, details: entry.details ? [...entry.details] : undefined })),
      } as unknown as Measurement;
    }),
  })),
}));
