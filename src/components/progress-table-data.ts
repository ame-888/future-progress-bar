import type { DefinitionHistoryEntry, EvidenceReference, Forecast, MeasurementObservation, MeasurementSpec, MilestoneThreshold, NorthStarDefinition, ObservationHistoryEntry, ResultStatus } from "../lib/measurement-types.ts";
import { MEASUREMENT_CATALOG } from "../lib/measurement-catalog.ts";
import { MEASUREMENT_EVIDENCE } from "../lib/measurement-evidence.ts";
import { NORTH_STARS } from "../lib/north-stars.ts";
import { DOMAIN_STRUCTURE } from "../data/domains.ts";
import { MEASUREMENT_OBSERVATIONS } from "../data/measurement-results.ts";
import { MEASUREMENT_LEVELS } from "../data/measurement-levels.ts";
import { MEASUREMENT_FORECASTS } from "../data/measurement-forecasts.ts";
import { MEASUREMENT_HISTORY } from "../data/measurement-history.ts";

export type MeasurementHistory = { value?: number; note?: string; details?: string[] };
export type MeasurementLevel = MilestoneThreshold & { aiPredictions?: { name: string; year: number }[] };
export type Measurement = MeasurementSpec & {
  definition: string; geographicScope?: string; denominator?: { description: string; value?: number; period?: string; geography?: string };
  researchCutoff: string; observationDate?: string; dataPeriod?: string; currentValue?: number; valueStatus: ResultStatus; displayValue?: string; baseValue?: number | null; achievements?: Readonly<Record<string, boolean>>;
  evidence: EvidenceReference[]; observation: MeasurementObservation; levels: MeasurementLevel[]; forecasts: Forecast[]; history: MeasurementHistory[]; observationHistory: ObservationHistoryEntry[]; definitionHistory: DefinitionHistoryEntry[];
};
export type SubDomainData = { id: string; northStar?: NorthStarDefinition; name: string; description?: string; measurements: Measurement[] };
export type MainDomainData = { id: string; name: string; subdomains: SubDomainData[] };

type LegacyObservation = { researchCutoff: string; observationDate?: string; dataPeriod?: string; currentValue?: number; valueStatus: ResultStatus; displayValue?: string; baseValue?: number | null; achievements?: Readonly<Record<string, boolean>> };
type LegacyLevel = { level: number; goal: number; achievementKey?: string; label?: string; realityYear?: number };
type LegacyHistory = { value?: number; note?: string; details?: readonly string[] };
type LegacyPrediction = { name: string; year: number };

function canonicalObservation(measurementId: string, raw: LegacyObservation, evidence: EvidenceReference[]): MeasurementObservation {
  const common = { measurementId, researchCutoff: raw.researchCutoff, observationDate: raw.observationDate, dataPeriod: raw.dataPeriod, displayValue: raw.displayValue, evidence, baseValue: raw.baseValue, achievements: raw.achievements };
  if (raw.valueStatus === "unknown" || raw.valueStatus === "not-applicable" || raw.valueStatus === "no-verified-result") return { ...common, valueStatus: raw.valueStatus };
  if (raw.currentValue === undefined) throw new Error(`${measurementId} has numeric status without a value`);
  return { ...common, valueStatus: raw.valueStatus, value: raw.currentValue, zeroBasis: raw.valueStatus === "zero" ? "Legacy audited zero; formal rule pending Phase 2." : undefined };
}

function canonicalLevel(raw: LegacyLevel, lower: boolean): MilestoneThreshold {
  if (raw.achievementKey) return { level: raw.level, kind: "condition", conditionKey: raw.achievementKey, goal: raw.goal, label: raw.label ?? raw.achievementKey, realityYear: raw.realityYear, rationale: null };
  return { level: raw.level, kind: "numeric", goal: raw.goal, operator: lower ? "<=" : ">=", label: raw.label, realityYear: raw.realityYear, rationale: null };
}

/** Strict compatibility composition. Canonical objects remain separate and the UI receives a proven shape without casts. */
export const MAIN_DOMAINS: MainDomainData[] = DOMAIN_STRUCTURE.map((domain) => ({ id: domain.id, name: domain.name, subdomains: domain.subdomains.map((subdomain) => ({
  id: subdomain.id, name: subdomain.name, description: subdomain.description, northStar: NORTH_STARS[subdomain.id],
  measurements: subdomain.measurementIds.map((id): Measurement => {
    const spec = MEASUREMENT_CATALOG[id];
    const rawObservation: LegacyObservation | undefined = MEASUREMENT_OBSERVATIONS[id];
    const rawLevels: readonly LegacyLevel[] | undefined = MEASUREMENT_LEVELS[id];
    if (!spec || !rawObservation || !rawLevels) throw new Error(`Incomplete measurement composition: ${id}`);
    const evidence = [...(MEASUREMENT_EVIDENCE[id] ?? [])];
    const observation = canonicalObservation(id, rawObservation, evidence);
    const forecastSet: Partial<Record<number, readonly LegacyPrediction[]>> | undefined = MEASUREMENT_FORECASTS[id];
    const history: readonly LegacyHistory[] = MEASUREMENT_HISTORY[id] ?? [];
    const forecasts: Forecast[] = rawLevels.flatMap((level) => (forecastSet?.[level.level] ?? []).map((item) => ({ measurementId: id, level: level.level, forecaster: item.name, year: item.year })));
    const observationHistory: ObservationHistoryEntry[] = history.map((entry) => ({ measurementId: id, researchCutoff: rawObservation.researchCutoff, valueStatus: rawObservation.valueStatus, value: entry.value, evidenceIds: evidence.map((item) => item.id), note: entry.note, details: entry.details }));
    const denominator = spec.ratio ? { description: spec.ratio.denominatorDefinition, value: spec.ratio.denominatorValue, period: spec.ratio.period, geography: spec.ratio.geography } : undefined;
    return { ...spec, definition: spec.legacy.operationalDefinition, geographicScope: spec.scope.geographic, denominator, researchCutoff: observation.researchCutoff, observationDate: observation.observationDate, dataPeriod: observation.dataPeriod, currentValue: "value" in observation ? observation.value : undefined, valueStatus: observation.valueStatus, displayValue: observation.displayValue, baseValue: observation.baseValue, achievements: observation.achievements, evidence, observation,
      levels: rawLevels.map((raw) => { const level = canonicalLevel(raw, spec.isLowerBetter); const predictions = forecastSet?.[raw.level]; return { ...level, aiPredictions: predictions ? predictions.map((item) => ({ ...item })) : undefined }; }),
      forecasts, history: history.map((entry) => ({ ...entry, details: entry.details ? [...entry.details] : undefined })), observationHistory, definitionHistory: [],
    };
  }),
})) }));
