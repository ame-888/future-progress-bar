import test from "node:test";
import assert from "node:assert/strict";
import { MAIN_DOMAINS, type Measurement } from "../components/progress-table-data.ts";
import { RETIRED_MEASUREMENTS } from "../components/retired-measurements.ts";
import { canObservationCompleteThreshold, getCatalogueCounts, getGlobalProgress, hasNumericObservation } from "./progress-utils.ts";
import { validateCatalogue } from "./catalog-validation.ts";

const sample = (valueStatus: Measurement["valueStatus"], currentValue?: number, isLowerBetter = false) => ({ valueStatus, currentValue, isLowerBetter });

test("canonical catalogue is structurally valid", () => assert.deepEqual(validateCatalogue(), []));
test("Stone is baseline and denominator is derived as 336", () => {
  assert.deepEqual(getCatalogueCounts(MAIN_DOMAINS), { domains: 5, subdomains: 12, measurements: 48, milestones: 336, northStars: 12 });
  assert.equal(getGlobalProgress(MAIN_DOMAINS).possible, 336);
  assert.equal(getGlobalProgress(MAIN_DOMAINS).achieved, 0);
  assert.ok(MAIN_DOMAINS.every((d) => d.subdomains.every((s) => s.measurements.every((m) => m.levels.every((l) => l.level >= 1)))));
});
test("nonnumeric epistemic states cannot score or masquerade as zero", () => {
  for (const status of ["unknown", "not-applicable", "no-verified-result"] as const) {
    const observation = sample(status);
    assert.equal(hasNumericObservation(observation), false);
    assert.equal(canObservationCompleteThreshold(observation, { goal: 0 }), false);
  }
  assert.equal(hasNumericObservation(sample("zero", 0)), true);
});
test("estimates score while retaining their classification", () => {
  const observation = sample("estimate", 5);
  assert.equal(observation.valueStatus, "estimate");
  assert.equal(canObservationCompleteThreshold(observation, { goal: 4 }), true);
});
test("lower bounds score higher-is-better but not lower-is-better thresholds", () => {
  assert.equal(canObservationCompleteThreshold(sample("lower-bound", 5), { goal: 4 }), true);
  assert.equal(canObservationCompleteThreshold(sample("lower-bound", 2, true), { goal: 3 }), false);
});
test("retired IDs cannot appear as active forecast targets", () => {
  const active = new Set(MAIN_DOMAINS.flatMap((d) => d.subdomains.flatMap((s) => s.measurements.map((m) => m.id))));
  assert.ok(RETIRED_MEASUREMENTS.every((item) => !active.has(item.id)));
});
test("special-condition milestones never fall back to numeric scoring", () => {
  const threshold = { goal: 7, achievementKey: "newProblem" };
  assert.equal(canObservationCompleteThreshold({ ...sample("verified", 99), achievements: {} }, threshold), false);
  assert.equal(canObservationCompleteThreshold({ ...sample("verified", 6), achievements: { newProblem: true } }, threshold), true);
});
