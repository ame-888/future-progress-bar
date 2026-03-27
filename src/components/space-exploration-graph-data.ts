export interface SpaceExplorationDataPoint {
  year: number;
  grams_per_dollar: number;
  cost_per_kg: number;
  event: string;
}

export const SPACE_EXPLORATION_DATA: SpaceExplorationDataPoint[] = [
  { year: 2000, grams_per_dollar: 0.10, cost_per_kg: 10000, event: "" },
  { year: 2001, grams_per_dollar: 0.10, cost_per_kg: 10000, event: "" },
  { year: 2002, grams_per_dollar: 0.10, cost_per_kg: 10000, event: "" },
  { year: 2003, grams_per_dollar: 0.10, cost_per_kg: 10000, event: "" },
  { year: 2004, grams_per_dollar: 0.11, cost_per_kg: 9500, event: "" },
  { year: 2005, grams_per_dollar: 0.11, cost_per_kg: 9500, event: "" },
  { year: 2006, grams_per_dollar: 0.11, cost_per_kg: 9000, event: "" },
  { year: 2007, grams_per_dollar: 0.11, cost_per_kg: 9000, event: "" },
  { year: 2008, grams_per_dollar: 0.12, cost_per_kg: 8500, event: "" },
  { year: 2009, grams_per_dollar: 0.12, cost_per_kg: 8500, event: "" },
  { year: 2010, grams_per_dollar: 0.19, cost_per_kg: 5190, event: "Falcon 9 v1.0 debuts" },
  { year: 2011, grams_per_dollar: 0.19, cost_per_kg: 5190, event: "" },
  { year: 2012, grams_per_dollar: 0.19, cost_per_kg: 5190, event: "" },
  { year: 2013, grams_per_dollar: 0.23, cost_per_kg: 4310, event: "Falcon 9 v1.1 upgrades capacity" },
  { year: 2014, grams_per_dollar: 0.23, cost_per_kg: 4310, event: "" },
  { year: 2015, grams_per_dollar: 0.23, cost_per_kg: 4310, event: "" },
  { year: 2016, grams_per_dollar: 0.37, cost_per_kg: 2720, event: "Falcon 9 Full Thrust pushes prices down further" },
  { year: 2017, grams_per_dollar: 0.37, cost_per_kg: 2720, event: "SpaceX proves first-stage reusability is viable" },
  { year: 2018, grams_per_dollar: 0.71, cost_per_kg: 1410, event: "Heavy Lift & Reusability Era: Falcon Heavy debuts" },
  { year: 2019, grams_per_dollar: 0.71, cost_per_kg: 1410, event: "" },
  { year: 2020, grams_per_dollar: 0.71, cost_per_kg: 1410, event: "" },
  { year: 2021, grams_per_dollar: 0.71, cost_per_kg: 1410, event: "" },
  { year: 2022, grams_per_dollar: 0.66, cost_per_kg: 1520, event: "SpaceX raises commercial prices slightly to account for global inflation" },
  { year: 2023, grams_per_dollar: 0.66, cost_per_kg: 1520, event: "" },
  { year: 2024, grams_per_dollar: 0.66, cost_per_kg: 1520, event: "" },
  { year: 2025, grams_per_dollar: 0.66, cost_per_kg: 1520, event: "" },
  { year: 2026, grams_per_dollar: 0.66, cost_per_kg: 1520, event: "Falcon Heavy remains the commercial retail benchmark. However, internally, SpaceX's Starship is flying Starlink payloads for a fraction of this cost, though a finalized external retail price for Starship has yet to replace the broader market benchmark" },
];

export const ECONOMIC_TIPPING_POINT = 10; // 0.01 kg/$
export const STARSHIP_GOAL = 100; // 0.1 kg/$
