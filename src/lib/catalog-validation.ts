import { MAIN_DOMAINS } from "../components/progress-table-data.ts";
import { RETIRED_MEASUREMENTS } from "../components/retired-measurements.ts";
import { DATASET_SNAPSHOT } from "../data/dataset-snapshot.ts";
import { MEASUREMENT_CATALOG } from "./measurement-catalog.ts";
import { getCatalogueCounts, getGlobalProgress } from "./progress-utils.ts";
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
    if (!measurement.title || !measurement.question || !measurement.construct || !measurement.variable || !measurement.unit || !measurement.definitionVersion || !measurement.effectiveFrom) errors.push(`${measurement.id} lacks required specification fields`);
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
    if (measurement.valueStatus === "zero" && measurement.currentValue !== 0) errors.push(`${measurement.id} ZERO must be intentional numeric zero`);
    if (measurement.valueStatus === "lower-bound" && !/^(≥|>|at least)/i.test(measurement.displayValue ?? "")) errors.push(`${measurement.id} LOWER BOUND display lacks a qualifier`);
    const evidenceIds = new Set(measurement.evidence.map((item) => item.id));
    if (evidenceIds.size !== measurement.evidence.length || measurement.evidence.some((item) => !item.id || !item.supports)) errors.push(`${measurement.id} has invalid evidence references`);
    if (measurement.observation.evidence.some((item) => !evidenceIds.has(item.id))) errors.push(`${measurement.id} observation evidence does not resolve`);
    if (measurement.observationHistory.some((item) => item.measurementId !== measurement.id || item.evidenceIds.some((evidenceId) => !evidenceIds.has(evidenceId)))) errors.push(`${measurement.id} has unresolved history references`);
    if (measurement.forecasts.some((item) => item.measurementId !== measurement.id || !measurement.levels.some((level) => level.level === item.level))) errors.push(`${measurement.id} has an invalid forecast reference`);
    if (!measurement.evidence.length) warnings.push(`${measurement.id}: evidence ledger pending`);
    if (measurement.rationale === null || measurement.protocol.researchProcedure === null) warnings.push(`${measurement.id}: rationale/protocol migration pending`);
  }
  if (PROGRESS_SLUGS.length !== counts.subdomains || Object.values(SLUG_TO_DOMAIN_ID).some((id) => !MAIN_DOMAINS.some((d) => d.subdomains.some((s) => s.id === id)))) errors.push("Public progress routes do not match active subdomains");
  for (const subdomain of MAIN_DOMAINS.flatMap((domain) => domain.subdomains)) if (!subdomain.northStar?.title || !subdomain.northStar.question || !subdomain.northStar.methodology || !subdomain.northStar.unit) errors.push(`${subdomain.id} lacks exact North Star metadata`);
  const progress = getGlobalProgress(MAIN_DOMAINS);
  const independentlyDerived = MAIN_DOMAINS.flatMap((d) => d.subdomains.flatMap((s) => s.measurements)).flatMap((m) => m.levels.map((level) => ({ m, level }))).filter(({ m, level }) => level.kind === "condition" ? m.achievements?.[level.conditionKey] === true : ["zero", "verified", "estimate", "lower-bound"].includes(m.valueStatus) && !(m.valueStatus === "lower-bound" && m.isLowerBetter) && (m.isLowerBetter ? m.currentValue! <= level.goal : m.currentValue! >= level.goal)).length;
  if (progress.possible !== 336 || progress.achieved < 0 || progress.achieved > progress.possible || progress.achieved !== independentlyDerived) errors.push(`Derived score is inconsistent: ${progress.achieved} / ${progress.possible}`);
  return { errors, warnings };
}

export function validateCatalogue(): string[] { return inspectCatalogue().errors; }
export function assertValidCatalogue() { const errors = validateCatalogue(); if (errors.length) throw new Error(`Invalid measurement catalogue:\n${errors.join("\n")}`); }
