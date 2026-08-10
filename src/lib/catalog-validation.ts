import { MAIN_DOMAINS } from "../components/progress-table-data.ts";
import { RETIRED_MEASUREMENTS } from "../components/retired-measurements.ts";
import { getCatalogueCounts } from "./progress-utils.ts";
import { PROGRESS_SLUGS, SLUG_TO_DOMAIN_ID } from "./site.ts";

export function validateCatalogue(): string[] {
  const errors: string[] = [];
  const counts = getCatalogueCounts(MAIN_DOMAINS);
  if (counts.domains !== 5) errors.push(`Expected 5 domains, found ${counts.domains}`);
  if (counts.subdomains !== 12) errors.push(`Expected 12 subdomains, found ${counts.subdomains}`);
  if (counts.measurements !== 48) errors.push(`Expected 48 measurements, found ${counts.measurements}`);
  if (counts.milestones !== 336) errors.push(`Expected 336 scored milestones, found ${counts.milestones}`);
  const ids = new Set<string>();
  const auditChangedIds = new Set(["lev-3", "lev-4", "qc-4", "self-driving-car-2", "bci-2", "cultured-meat-2", "cultured-meat-3"]);
  for (const domain of MAIN_DOMAINS) for (const subdomain of domain.subdomains) {
    if (subdomain.measurements.length !== 4) errors.push(`${subdomain.id} does not have four active measurements`);
    for (const measurement of subdomain.measurements) {
      if (ids.has(measurement.id)) errors.push(`Duplicate active ID ${measurement.id}`); ids.add(measurement.id);
      if (!measurement.question.trim().endsWith("?")) errors.push(`${measurement.id} lacks a full question`);
      if (!measurement.definition.trim()) errors.push(`${measurement.id} lacks a definition`);
      if (measurement.levels.length !== 7 || measurement.levels.some((level, index) => level.level !== index + 1)) errors.push(`${measurement.id} must store levels 1–7 only`);
      const numericLevels = measurement.levels.filter((level) => !level.achievementKey);
      const goals = numericLevels.map((level) => level.goal);
      for (let index = 1; index < goals.length; index++) {
        if (measurement.isLowerBetter ? goals[index] >= goals[index - 1] : goals[index] <= goals[index - 1]) errors.push(`${measurement.id} has a non-monotonic numeric threshold ladder`);
      }
      for (const level of measurement.levels.filter((item) => item.achievementKey)) {
        const achievementKey = level.achievementKey;
        if (!achievementKey?.trim()) errors.push(`${measurement.id} has an empty special-condition key`);
        else if (measurement.achievements?.[achievementKey] !== true && canCompleteNumerically(measurement.currentValue, level.goal, measurement.isLowerBetter)) errors.push(`${measurement.id} special level ${level.level} could be accidentally numerically achieved`);
      }
      if (["unknown", "not-applicable", "no-verified-result"].includes(measurement.valueStatus ?? "") && measurement.currentValue !== undefined) errors.push(`${measurement.id} has contradictory nonnumeric status and numeric value`);
      if (measurement.valueStatus === "zero" && measurement.currentValue !== 0) errors.push(`${measurement.id} ZERO must be intentional numeric zero`);
      if (measurement.valueStatus === "lower-bound" && !/^(≥|>|at least)/i.test(measurement.displayValue ?? "")) errors.push(`${measurement.id} LOWER BOUND display lacks a qualifier`);
      if (auditChangedIds.has(measurement.id) && measurement.evidence.length === 0) errors.push(`${measurement.id} changed in the audit but has no structured evidence`);
      if (measurement.researchCutoff !== "2026-08-10") errors.push(`${measurement.id} has a noncanonical research cutoff`);
      if ((measurement.unit.includes("%") || measurement.title.toLowerCase().includes("share")) && !measurement.denominator) errors.push(`${measurement.id} share lacks denominator metadata`);
    }
  }
  for (const retired of RETIRED_MEASUREMENTS) if (ids.has(retired.id)) errors.push(`Retired ID ${retired.id} is active`);
  if (PROGRESS_SLUGS.length !== counts.subdomains || Object.values(SLUG_TO_DOMAIN_ID).some((id) => !MAIN_DOMAINS.some((d) => d.subdomains.some((s) => s.id === id)))) errors.push("Public progress routes do not match active subdomains");
  return errors;
}

function canCompleteNumerically(value: number | undefined, goal: number, lower = false) {
  return typeof value === "number" && (lower ? value <= goal : value >= goal);
}

export function assertValidCatalogue() { const errors = validateCatalogue(); if (errors.length) throw new Error(`Invalid measurement catalogue:\n${errors.join("\n")}`); }
