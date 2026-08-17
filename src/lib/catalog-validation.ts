import { MAIN_DOMAINS } from "../components/progress-table-data.ts";
import { RETIRED_MEASUREMENTS } from "../components/retired-measurements.ts";
import { DATASET_SNAPSHOT } from "../data/dataset-snapshot.ts";
import { MEASUREMENT_CATALOG } from "./measurement-catalog.ts";
import { getCatalogueCounts, getGlobalProgress } from "./progress-utils.ts";
import { FPB_GLOSSARY } from "./fpb-measurement-standard.ts";
import { RESEARCH_AUDITS, researchAuditFor } from "./research-audits.ts";
import { PROGRESS_SLUGS, SLUG_TO_DOMAIN_ID } from "./site.ts";

export type CatalogueValidation = { errors: string[]; warnings: string[] };

export function inspectCatalogue(): CatalogueValidation {
  const errors: string[] = [], warnings: string[] = [];
  const counts = getCatalogueCounts(MAIN_DOMAINS);
  if (counts.domains !== 5) errors.push(`Expected 5 domains, found ${counts.domains}`);
  if (counts.subdomains !== 12) errors.push(`Expected 12 subdomains, found ${counts.subdomains}`);
  if (counts.measurements !== 48) errors.push(`Expected 48 measurements, found ${counts.measurements}`);
  if (counts.milestones !== 336) errors.push(`Expected 336 scored milestones, found ${counts.milestones}`);
  const ids = new Set<string>(), retiredIds = new Set(RETIRED_MEASUREMENTS.map((item) => item.id));
  for (const domain of MAIN_DOMAINS) for (const subdomain of domain.subdomains) for (const measurement of subdomain.measurements) {
    if (ids.has(measurement.id)) errors.push(`Duplicate active ID ${measurement.id}`); ids.add(measurement.id);
    if (retiredIds.has(measurement.id)) errors.push(`Retired ID ${measurement.id} is active`);
    if (!MEASUREMENT_CATALOG[measurement.id]) errors.push(`${measurement.id} does not resolve to a specification`);
    if (!measurement.title || !measurement.question || !measurement.construct || !measurement.variable || !measurement.unit || !/^\d+\.\d+\.\d+$/.test(measurement.definitionVersion) || !measurement.effectiveFrom || !measurement.rationale) errors.push(`${measurement.id} lacks required FPB-MS specification fields`);
    if (!measurement.qualification.inclusionCriteria.length || !measurement.qualification.exclusionCriteria.length || !measurement.qualification.boundaryRules.length || measurement.qualification.glossaryReferences.some((key) => !(key in FPB_GLOSSARY))) errors.push(`${measurement.id} has invalid qualification or glossary metadata`);
    if (!measurement.protocol.researchProcedure || !measurement.protocol.zeroRule || !measurement.protocol.unknownRule || !measurement.protocol.sourceConflictRule || !measurement.protocol.preferredSourceTypes.length) errors.push(`${measurement.id} lacks a complete research protocol`);
    if (!measurement.ladder.rationale || !measurement.ladder.firstMilestoneRationale || !measurement.ladder.endpointRationale || !measurement.ladder.intermediateRationale) errors.push(`${measurement.id} lacks milestone design rationale`);
    if (measurement.ratio && (!measurement.ratio.numeratorDefinition || !measurement.ratio.denominatorDefinition || !measurement.ratio.geography || !measurement.ratio.period || !measurement.ratio.aggregationRule || !measurement.ratio.compatibilityRule)) errors.push(`${measurement.id} has incomplete share metadata`);
    if (!measurement.observation.measurementId || !measurement.researchCutoff || !measurement.valueStatus || !measurement.displayValue && measurement.currentValue === undefined) errors.push(`${measurement.id} lacks required observation fields`);
    if (measurement.researchCutoff !== DATASET_SNAPSHOT.researchCutoff) errors.push(`${measurement.id} has a noncanonical research cutoff`);
    if (measurement.levels.length !== 7 || measurement.levels.some((level, index) => level.level !== index + 1)) errors.push(`${measurement.id} must store levels 1–7 only`);
    const numeric = measurement.levels.filter((level) => level.kind === "numeric");
    for (let i = 1; i < numeric.length; i++) if (measurement.isLowerBetter ? numeric[i].goal >= numeric[i - 1].goal : numeric[i].goal <= numeric[i - 1].goal) errors.push(`${measurement.id} has a non-monotonic numeric threshold ladder`);
    for (const level of measurement.levels) {
      if (level.kind === "condition" && (!level.conditionKey.trim() || "operator" in level)) errors.push(`${measurement.id} condition level ${level.level} is invalid`);
      if (level.kind === "numeric" && !Number.isFinite(level.goal)) errors.push(`${measurement.id} level ${level.level} has an invalid numeric goal`);
    }
    const numericStatus = ["zero", "verified", "estimate", "lower-bound"].includes(measurement.valueStatus);
    if (numericStatus && !Number.isFinite(measurement.currentValue)) errors.push(`${measurement.id} numeric status lacks a finite value`);
    if (!numericStatus && measurement.currentValue !== undefined) errors.push(`${measurement.id} has contradictory nonnumeric status and numeric value`);
    if (measurement.valueStatus === "zero" && (!measurement.observation.zeroBasis || measurement.currentValue !== 0)) errors.push(`${measurement.id} ZERO must be intentional numeric zero`);
    if (measurement.valueStatus === "lower-bound" && !/^(≥|>|at least)/i.test(measurement.displayValue ?? "")) errors.push(`${measurement.id} LOWER BOUND display lacks a qualifier`);
    const evidenceIds = new Set(measurement.evidence.map((item) => item.id));
    if (evidenceIds.size !== measurement.evidence.length || measurement.evidence.some((item) => !item.id || !item.supports)) errors.push(`${measurement.id} has invalid evidence references`);
    if (measurement.observation.evidence.some((item) => !evidenceIds.has(item.id))) errors.push(`${measurement.id} observation evidence does not resolve`);
    const entities = measurement.observation.qualifyingEntities ?? [];
    if (new Set(entities.map((entity) => entity.key)).size !== entities.length || entities.some((entity) => !entity.key || !entity.name || !entity.qualificationSummary || entity.evidenceIds.some((id) => !evidenceIds.has(id)))) errors.push(`${measurement.id} has invalid or duplicate qualifying entities`);
    if (measurement.valueStatus === "verified" && entities.length && measurement.currentValue !== entities.length) errors.push(`${measurement.id} VERIFIED count does not reconcile with qualifying entities`);
    if (measurement.valueStatus === "lower-bound" && entities.length && entities.length < (measurement.currentValue ?? 0)) errors.push(`${measurement.id} LOWER BOUND entity list is below its evidenced minimum`);
    if (measurement.observationHistory.some((item) => item.measurementId !== measurement.id || item.evidenceIds.some((evidenceId) => !evidenceIds.has(evidenceId)))) errors.push(`${measurement.id} has unresolved history references`);
    if (measurement.forecasts.some((item) => item.measurementId !== measurement.id || !measurement.levels.some((level) => level.level === item.level))) errors.push(`${measurement.id} has an invalid forecast reference`);
    if (!measurement.evidence.length && !researchAuditFor(measurement.id) && !measurement.observation.evidenceException) errors.push(`${measurement.id}: evidence or an explicit permitted exception is required`);
    if (!measurement.evidence.length && !researchAuditFor(measurement.id)) warnings.push(`${measurement.id}: legacy evidence package remains incomplete and requires re-research`);
    if (measurement.valueStatus === "estimate" && !measurement.observation.methodNote) errors.push(`${measurement.id}: ESTIMATE lacks methodology`);
    if (measurement.levels.some((level) => !level.rationale)) errors.push(`${measurement.id}: milestone rationale missing`);
    if (measurement.definitionHistory.some((entry, index, all) => index > 0 && entry.effectiveFrom < all[index - 1].effectiveFrom)) errors.push(`${measurement.id}: definition history is not chronological`);
    if (measurement.forecasts.some((forecast) => forecast.provenanceStatus === "complete" ? !forecast.capturedAt || !forecast.protocolVersion || !forecast.modelVersionId : forecast.provenanceStatus !== "legacy-incomplete")) errors.push(`${measurement.id}: invalid forecast provenance`);
  }
  for (const audit of RESEARCH_AUDITS) { if (!ids.has(audit.measurementId)) errors.push(`${audit.id} has unresolved measurement`); if (audit.researchCutoff !== DATASET_SNAPSHOT.researchCutoff) errors.push(`${audit.id} has wrong cutoff`); }
  const bci=MAIN_DOMAINS.flatMap(d=>d.subdomains.flatMap(s=>s.measurements)).find(m=>m.id==="bci-1"); if((bci?.observation.qualifyingCohorts?.reduce((n,c)=>n+c.count,0)??0)!==95) errors.push("bci-1 cohort arithmetic must equal 95");
  if (PROGRESS_SLUGS.length !== counts.subdomains || Object.values(SLUG_TO_DOMAIN_ID).some((id) => !MAIN_DOMAINS.some((d) => d.subdomains.some((s) => s.id === id)))) errors.push("Public progress routes do not match active subdomains");
  for (const subdomain of MAIN_DOMAINS.flatMap((domain) => domain.subdomains)) if (!subdomain.northStar?.title || !subdomain.northStar.question || !subdomain.northStar.construct || !subdomain.northStar.variable || !subdomain.northStar.methodology || !subdomain.northStar.unit || !subdomain.northStar.definitionVersion || !subdomain.northStar.evidenceRequirements.length || !subdomain.northStar.knownLimitations.length || !subdomain.northStar.series.provenance) errors.push(`${subdomain.id} lacks exact North Star metadata`);
  const progress = getGlobalProgress(MAIN_DOMAINS);
  const independentlyDerived = MAIN_DOMAINS.flatMap((d) => d.subdomains.flatMap((s) => s.measurements)).flatMap((m) => m.levels.map((level) => ({ m, level }))).filter(({ m, level }) => level.kind === "condition" ? m.achievements?.[level.conditionKey] === true : ["zero", "verified", "estimate", "lower-bound"].includes(m.valueStatus) && !(m.valueStatus === "lower-bound" && m.isLowerBetter) && (m.isLowerBetter ? m.currentValue! <= level.goal : m.currentValue! >= level.goal)).length;
  if (progress.possible !== 336 || progress.achieved < 0 || progress.achieved > progress.possible || progress.achieved !== independentlyDerived) errors.push(`Derived score is inconsistent: ${progress.achieved} / ${progress.possible}`);
  return { errors, warnings };
}

export function validateCatalogue(): string[] { return inspectCatalogue().errors; }
export function assertValidCatalogue() { const errors = validateCatalogue(); if (errors.length) throw new Error(`Invalid measurement catalogue:\n${errors.join("\n")}`); }
