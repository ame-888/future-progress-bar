export interface SelfDrivingCarDataPoint {
  year: number;
  percentage: number;
}

export const SELF_DRIVING_CAR_DATA: SelfDrivingCarDataPoint[] = [];

for (let year = 2001; year <= 2026; year++) {
  SELF_DRIVING_CAR_DATA.push({
    year,
    percentage: 0,
  });
}
