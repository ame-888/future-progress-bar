import type { MainDomainData, Measurement, MeasurementLevel } from "../components/progress-table-data.ts";

export const SCORED_LEVELS = [1, 2, 3, 4, 5, 6, 7] as const;
export const LEVEL_NAMES = ["Stone", "Iron", "Copper", "Bronze", "Silver", "Gold", "Platinum", "Antimatter"] as const;
const numericStatuses = new Set(["zero", "verified", "estimate", "lower-bound"]);

export function hasNumericObservation(measurement: Pick<Measurement, "currentValue" | "valueStatus">): boolean {
  return numericStatuses.has(measurement.valueStatus ?? "verified") && typeof measurement.currentValue === "number" && Number.isFinite(measurement.currentValue);
}

export function canObservationCompleteThreshold(measurement: Pick<Measurement, "currentValue" | "valueStatus" | "isLowerBetter" | "achievements">, threshold: Pick<MeasurementLevel, "goal" | "achievementKey">): boolean {
  if (threshold.achievementKey) return measurement.achievements?.[threshold.achievementKey] === true;
  if (!hasNumericObservation(measurement)) return false;
  if (measurement.valueStatus === "lower-bound" && measurement.isLowerBetter) return false;
  return measurement.isLowerBetter ? measurement.currentValue! <= threshold.goal : measurement.currentValue! >= threshold.goal;
}

export function getCompletedLevelCount(measurement: Measurement): number {
  return measurement.levels.filter((level) => canObservationCompleteThreshold(measurement, level)).length;
}

export function getMeasurementProgress(measurement: Measurement) {
  return { achieved: getCompletedLevelCount(measurement), possible: measurement.levels.length };
}

export function getGlobalProgress(domains: MainDomainData[]) {
  const measurements = domains.flatMap((domain) => domain.subdomains.flatMap((subdomain) => subdomain.measurements));
  return measurements.reduce((total, measurement) => {
    const progress = getMeasurementProgress(measurement);
    return { achieved: total.achieved + progress.achieved, possible: total.possible + progress.possible };
  }, { achieved: 0, possible: 0 });
}

export function getCatalogueCounts(domains: MainDomainData[]) {
  const subdomains = domains.flatMap((domain) => domain.subdomains);
  const measurements = subdomains.flatMap((subdomain) => subdomain.measurements);
  return { domains: domains.length, subdomains: subdomains.length, measurements: measurements.length, milestones: measurements.reduce((sum, item) => sum + item.levels.length, 0), northStars: subdomains.filter((item) => item.northStar).length };
}
