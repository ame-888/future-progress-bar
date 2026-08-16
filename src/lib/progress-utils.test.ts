import test from "node:test";
import assert from "node:assert/strict";
import { MAIN_DOMAINS, type Measurement } from "../components/progress-table-data.ts";
import { DATASET_SNAPSHOT } from "../data/dataset-snapshot.ts";
import type { MeasurementLevel } from "../components/progress-table-data.ts";
import { RETIRED_MEASUREMENTS } from "../components/retired-measurements.ts";
import { canObservationCompleteThreshold, getCatalogueCounts, getGlobalProgress, hasNumericObservation } from "./progress-utils.ts";
import { inspectCatalogue, validateCatalogue } from "./catalog-validation.ts";

const sample = (valueStatus: Measurement["valueStatus"], currentValue?: number, isLowerBetter = false) => ({ valueStatus, currentValue, isLowerBetter });
const numeric = (goal: number): MeasurementLevel => ({ level: 1, kind: "numeric", goal, operator: ">=" });
const condition = (conditionKey: string): MeasurementLevel => ({ level: 1, kind: "condition", conditionKey, goal: 7, label: "condition" });

test("canonical catalogue composes without unsafe casts and is structurally valid", () => {
  assert.deepEqual(validateCatalogue(), []);
  assert.equal(MAIN_DOMAINS[0].subdomains[0].measurements[0].observation.measurementId, "ai-millennium-problems");
});
test("snapshot metadata drives every current observation", () => {
  assert.equal(DATASET_SNAPSHOT.researchCutoff, "2026-08-16");
  assert.ok(MAIN_DOMAINS.every((d) => d.subdomains.every((s) => s.measurements.every((m) => m.researchCutoff === DATASET_SNAPSHOT.researchCutoff))));
});
test("global score and denominator are independently derived rather than fixed at zero", () => {
  assert.deepEqual(getCatalogueCounts(MAIN_DOMAINS), { domains: 5, subdomains: 12, measurements: 48, milestones: 336, northStars: 12 });
  const progress = getGlobalProgress(MAIN_DOMAINS);
  assert.equal(progress.possible, 336);
  assert.ok(progress.achieved >= 0 && progress.achieved <= progress.possible);
  assert.ok(!inspectCatalogue().errors.some((error) => /must be 0/.test(error)));
});
test("all numeric epistemic states are modeled and score appropriately", () => {
  assert.equal(hasNumericObservation(sample("verified", 4)), true);
  assert.equal(hasNumericObservation(sample("estimate", 4)), true);
  assert.equal(hasNumericObservation(sample("lower-bound", 4)), true);
  assert.equal(hasNumericObservation(sample("zero", 0)), true);
  assert.equal(canObservationCompleteThreshold(sample("verified", 5), numeric(4)), true);
  assert.equal(canObservationCompleteThreshold(sample("estimate", 5), numeric(4)), true);
});
test("UNKNOWN, N/A, and NO VERIFIED RESULT remain genuinely nonnumeric", () => {
  for (const status of ["unknown", "not-applicable", "no-verified-result"] as const) {
    const observation = sample(status);
    assert.equal(hasNumericObservation(observation), false);
    assert.equal(canObservationCompleteThreshold(observation, numeric(0)), false);
  }
});
test("higher/lower direction and lower-bound safety are preserved", () => {
  assert.equal(canObservationCompleteThreshold(sample("verified", 5), numeric(4)), true);
  assert.equal(canObservationCompleteThreshold(sample("verified", 2, true), numeric(3)), true);
  assert.equal(canObservationCompleteThreshold(sample("lower-bound", 5), numeric(4)), true);
  assert.equal(canObservationCompleteThreshold(sample("lower-bound", 2, true), numeric(3)), false);
});
test("condition milestones never use their legacy numeric fallback", () => {
  assert.equal(canObservationCompleteThreshold({ ...sample("verified", 99), achievements: {} }, condition("newProblem")), false);
  assert.equal(canObservationCompleteThreshold({ ...sample("unknown"), achievements: { newProblem: true } }, condition("newProblem")), true);
  assert.equal(canObservationCompleteThreshold({ ...sample("verified", 99), achievements: { newProblem: true } }, condition("")), false);
});
test("retired IDs cannot appear as active targets", () => {
  const active = new Set(MAIN_DOMAINS.flatMap((d) => d.subdomains.flatMap((s) => s.measurements.map((m) => m.id))));
  assert.ok(RETIRED_MEASUREMENTS.every((item) => !active.has(item.id)));
});
