export interface SpaceExplorationDataPoint {
  year: number;
  grams_per_dollar: number;
  cost_per_kg: number;
  event: string;
  priceUsd: number;
  leoPayloadKg: number;
}

/** Dedicated-launch LEO efficiency using matched price and payload configurations. */
export const SPACE_EXPLORATION_DATA: SpaceExplorationDataPoint[] = [
  { year: 2000, grams_per_dollar: 0.321538, cost_per_kg: 3110.05, event: "Proton-K", priceUsd: 65000000, leoPayloadKg: 20900 },
  { year: 2001, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2002, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2003, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2004, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2005, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2006, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2007, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2008, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2009, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2010, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2011, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2012, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2013, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2014, grams_per_dollar: 0.323077, cost_per_kg: 3095.24, event: "Proton-M/Briz-M", priceUsd: 65000000, leoPayloadKg: 21000 },
  { year: 2015, grams_per_dollar: 0.372549, cost_per_kg: 2684.21, event: "Falcon 9 Full Thrust", priceUsd: 61200000, leoPayloadKg: 22800 },
  { year: 2016, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2017, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2018, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2019, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2020, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2021, grams_per_dollar: 0.367742, cost_per_kg: 2719.30, event: "Falcon 9 Full Thrust", priceUsd: 62000000, leoPayloadKg: 22800 },
  { year: 2022, grams_per_dollar: 0.340299, cost_per_kg: 2938.60, event: "Falcon 9 Full Thrust", priceUsd: 67000000, leoPayloadKg: 22800 },
  { year: 2023, grams_per_dollar: 0.425333, cost_per_kg: 2351.10, event: "Falcon Heavy, fully expendable", priceUsd: 150000000, leoPayloadKg: 63800 },
  { year: 2024, grams_per_dollar: 0.425333, cost_per_kg: 2351.10, event: "Falcon Heavy, fully expendable", priceUsd: 150000000, leoPayloadKg: 63800 },
  { year: 2025, grams_per_dollar: 0.425333, cost_per_kg: 2351.10, event: "Falcon Heavy, fully expendable", priceUsd: 150000000, leoPayloadKg: 63800 },
  { year: 2026, grams_per_dollar: 0.425333, cost_per_kg: 2351.10, event: "Falcon Heavy, fully expendable", priceUsd: 150000000, leoPayloadKg: 63800 },
];

export const ECONOMIC_TIPPING_POINT = 10; // 0.01 kg/$
export const STARSHIP_GOAL = 100; // 0.1 kg/$
