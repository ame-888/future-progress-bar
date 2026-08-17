import type { DefinitionHistoryEntry, EvidenceReference, Forecast, MeasurementObservation, MeasurementSpec, MilestoneThreshold, NorthStarDefinition, ObservationHistoryEntry, ResultStatus } from "../lib/measurement-types.ts";
import { MEASUREMENT_CATALOG } from "../lib/measurement-catalog.ts";
import { MEASUREMENT_EVIDENCE } from "../lib/measurement-evidence.ts";
import { NORTH_STARS } from "../lib/north-stars.ts";
import { DOMAIN_STRUCTURE } from "../data/domains.ts";
import { MEASUREMENT_OBSERVATIONS } from "../data/measurement-results.ts";
import { MEASUREMENT_LEVELS } from "../data/measurement-levels.ts";
import { MEASUREMENT_FORECASTS } from "../data/measurement-forecasts.ts";
import { MEASUREMENT_HISTORY } from "../data/measurement-history.ts";
import { researchAuditFor } from "../lib/research-audits.ts";

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
const FINAL_REVISIONS:Partial<Record<string,readonly [ResultStatus,number|undefined,string]>>={
  "robotics-1":["estimate",1500,"Definition changed from installed-active population to cumulative external-customer deliveries; series break."],
  "superconductor-je-20k-20t":["estimate",1400,"Unsupported approximate production record replaced by a documented commercial specification floor."],
  "bci-1":["lower-bound",81,"Definition changed from living retained implants to cumulative recipients; eight cohorts reconcile to 95; series break."],
  "bci-3":["lower-bound",1,"Systematic approval audit established China as the exact sole qualifying state at the cutoff."],
  "mind-upload-1":["verified",166691,"FlyWire Codex MCNS v0.9 record corrected to 166,694 neurons."],
  "vr-5":["estimate",5000000,"Estimate withdrawn because no reproducible worldwide 24-hour unique immersive-VR user model exists."],
  "fusion-3":["unknown",undefined,"Definition fixed to magnetic-confinement Q_plasma; ITER's exhaustive historical statement establishes zero; series break."],
};

function canonicalObservation(measurementId: string, raw: LegacyObservation, evidence: EvidenceReference[]): MeasurementObservation {
  const entityNames: Partial<Record<string, readonly (readonly [string, number])[]>> = {
    "cultured-meat-2": [["Singapore", 0], ["United States", 1], ["Australia", 2], ["New Zealand", 2], ["Israel", 3]],
    "cultured-meat-3": [["United Kingdom", 0]],
    "bci-3": [["China", 0]],
  };
  const qualifyingEntities = entityNames[measurementId]?.map(([name, evidenceIndex]) => ({ key: name.toLowerCase().replaceAll(" ", "-"), name, jurisdiction: name, qualificationSummary: "Operative market authorization documented by the observation evidence package.", evidenceIds: evidence[evidenceIndex] ? [evidence[evidenceIndex].id] : [] }));
  const evidenceException = evidence.length || researchAuditFor(measurementId) ? undefined : { kind: "legacy-incomplete" as const, explanation: "The August 2026 audit records the reviewed result, but its underlying source ledger was not retained. FPB-MS forbids inventing provenance; this observation remains explicitly incomplete pending re-research." };
  const bciCounts = [["neuralink","Neuralink / Telepathy",21,0],["neo","Neuracle / NEO",37,1],["beinao","Beinao No.1",16,1],["synchron","Synchron / Stentrode",10,2],["onward","ONWARD / WIMAGINE ARC-BCI",5,3],["cortec","CorTec Brain Interchange",3,4],["paradromics","Paradromics Connexus",1,5],["neuroxess","NeuroXess three-full",2,6]] as const;
  const qualifyingCohorts = measurementId === "bci-1" ? bciCounts.map(([key,name,count,evidenceIndex])=>({key,name,count,qualificationSummary:"Documented cumulative unique recipients with a chronic internal neural-reading implant; later explant or death does not erase implantation.",evidenceIds:evidence[evidenceIndex]?[evidence[evidenceIndex].id]:[]})) : undefined;
  const methodNotes:Partial<Record<string,string>>={"robotics-1":"The value is a worldwide lower bound established by one manufacturer's customer deliveries, not an exhaustive worldwide total.","superconductor-je-20k-20t":"Manufacturer material establishes a commercial specification floor; confidential production conductors across all manufacturers were not exhaustively censused.","bci-1":"Eight non-overlapping public program cohorts sum to 95 cumulative recipients; this is a lower bound because no exhaustive worldwide registry exists.","vr-5":"No compatible authoritative worldwide 24-hour unique-person immersive-VR DAU dataset or reproducible estimation model exists.","fusion-3":"ITER's historical statement supplies the exhaustive basis for zero under the magnetic-confinement Q_plasma definition."};
  const common = { measurementId, researchCutoff: raw.researchCutoff, observationDate: raw.observationDate, dataPeriod: raw.dataPeriod, displayValue: raw.displayValue, evidence, evidenceException, qualifyingEntities, qualifyingCohorts, methodNote:methodNotes[measurementId], baseValue: raw.baseValue, achievements: raw.achievements };
  if (raw.valueStatus === "unknown" || raw.valueStatus === "not-applicable" || raw.valueStatus === "no-verified-result") return { ...common, valueStatus: raw.valueStatus };
  if (raw.currentValue === undefined) throw new Error(`${measurementId} has numeric status without a value`);
  const methodNote = methodNotes[measurementId] ?? (raw.valueStatus === "estimate" ? "Approximation retained from the documented August 2026 audit method; use its stated range where available and do not treat it as an exact census." : undefined);
  return { ...common, valueStatus: raw.valueStatus, value: raw.currentValue, methodNote, zeroBasis: raw.valueStatus === "zero" ? "The August 10 and August 16 documented research audits screened the defined worldwide candidate class and found no qualifying case. This is the sufficiently exhaustive documented-research basis; it must be reassessed at every cutoff." : undefined };
}

function canonicalLevel(raw: LegacyLevel, lower: boolean): MilestoneThreshold {
  const rationale = `L${raw.level} is the reviewed checkpoint for the measurement's single canonical variable.`;
  if (raw.achievementKey) return { level: raw.level, kind: "condition", conditionKey: raw.achievementKey, goal: raw.goal, label: raw.label ?? raw.achievementKey, realityYear: raw.realityYear, rationale };
  return { level: raw.level, kind: "numeric", goal: raw.goal, operator: lower ? "<=" : ">=", label: raw.label, realityYear: raw.realityYear, rationale };
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
    const forecasts: Forecast[] = rawLevels.flatMap((level) => (forecastSet?.[level.level] ?? []).map((item) => ({ measurementId: id, level: level.level, modelName: item.name, modelVersionId: null, predictedYear: item.year, capturedAt: null, protocolVersion: null, provenanceStatus: "legacy-incomplete" })));
    const prior=FINAL_REVISIONS[id]; const observationHistory: ObservationHistoryEntry[] = prior?[{measurementId:id,researchCutoff:"2026-08-10",valueStatus:prior[0],value:prior[1],evidenceIds:[],note:"Superseded observation retained for audit history."},{measurementId:id,researchCutoff:rawObservation.researchCutoff,valueStatus:rawObservation.valueStatus,value:rawObservation.currentValue,evidenceIds:evidence.map(item=>item.id),reasonForRevision:prior[2]}]:history.map((entry) => ({ measurementId: id, researchCutoff: rawObservation.researchCutoff, valueStatus: rawObservation.valueStatus, value: entry.value, evidenceIds: evidence.map((item) => item.id), note: entry.note, details: entry.details }));
    const denominator = spec.ratio ? { description: spec.ratio.denominatorDefinition, value: spec.ratio.denominatorValue, period: spec.ratio.period, geography: spec.ratio.geography } : undefined;
    return { ...spec, definition: spec.legacy.operationalDefinition, geographicScope: spec.scope.geographic, denominator, researchCutoff: observation.researchCutoff, observationDate: observation.observationDate, dataPeriod: observation.dataPeriod, currentValue: "value" in observation ? observation.value : undefined, valueStatus: observation.valueStatus, displayValue: observation.displayValue, baseValue: observation.baseValue, achievements: observation.achievements, evidence, observation,
      levels: rawLevels.map((raw) => { const level = canonicalLevel(raw, spec.isLowerBetter); const predictions = forecastSet?.[raw.level]; return { ...level, aiPredictions: predictions ? predictions.map((item) => ({ ...item })) : undefined }; }),
      forecasts, history: history.map((entry) => ({ ...entry, details: entry.details ? [...entry.details] : undefined })), observationHistory,
      definitionHistory: [{ measurementId: id, definitionVersion: spec.definitionVersion, effectiveFrom: spec.effectiveFrom, changedFields: ["question", "construct", "rationale", "qualification", "protocol", "ladder"], reason: "Applied FPB-MS 1.0 semantic specification.", migrationNote: spec.definitionVersion === "2.0.0" ? "Material Phase 2 clarification; see migration audit." : "Initial FPB-MS definition; legacy observations are not back-cast.", comparabilityBreak: ["ai-millennium-problems", "ai-led-companies", "vr-4", "robotics-1", "bci-1", "fusion-3"].includes(id) }],
    };
  }),
})) }));
