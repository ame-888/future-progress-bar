export type LevLifespanDataPoint = {
  year: number;
  globalAverage: number;
  lifespanGain: number;
  note?: string;
};

export const LEV_LIFESPAN_DATA: LevLifespanDataPoint[] = [
  { year: 2000, globalAverage: 67.650, lifespanGain: 0.339 },
  { year: 2001, globalAverage: 67.944, lifespanGain: 0.294 },
  { year: 2002, globalAverage: 68.231, lifespanGain: 0.287 },
  { year: 2003, globalAverage: 68.515, lifespanGain: 0.284 },
  { year: 2004, globalAverage: 68.770, lifespanGain: 0.255 },
  { year: 2005, globalAverage: 69.111, lifespanGain: 0.341 },
  { year: 2006, globalAverage: 69.468, lifespanGain: 0.357 },
  { year: 2007, globalAverage: 69.804, lifespanGain: 0.336 },
  { year: 2008, globalAverage: 70.003, lifespanGain: 0.199 },
  { year: 2009, globalAverage: 70.380, lifespanGain: 0.377 },
  { year: 2010, globalAverage: 70.682, lifespanGain: 0.302 },
  { year: 2011, globalAverage: 70.968, lifespanGain: 0.286 },
  { year: 2012, globalAverage: 71.264, lifespanGain: 0.296 },
  { year: 2013, globalAverage: 71.533, lifespanGain: 0.269 },
  { year: 2014, globalAverage: 71.775, lifespanGain: 0.242 },
  { year: 2015, globalAverage: 71.965, lifespanGain: 0.190 },
  { year: 2016, globalAverage: 72.185, lifespanGain: 0.220 },
  { year: 2017, globalAverage: 72.365, lifespanGain: 0.180 },
  { year: 2018, globalAverage: 72.643, lifespanGain: 0.278 },
  { year: 2019, globalAverage: 72.869, lifespanGain: 0.226 },
  { year: 2020, globalAverage: 72.182, lifespanGain: -0.687, note: "COVID-19 impact" },
  { year: 2021, globalAverage: 71.215, lifespanGain: -0.967, note: "COVID-19 impact" },
  { year: 2022, globalAverage: 72.968, lifespanGain: 1.753, note: "1.753 increase in 2022 doesn't count to LEV as it was just a rebound" },
  { year: 2023, globalAverage: 73.329, lifespanGain: 0.361 },
  { year: 2024, globalAverage: 73.330, lifespanGain: 0.001, note: "UN Estimate" },
  { year: 2025, globalAverage: 73.490, lifespanGain: 0.160, note: "UN Estimate" },
];
