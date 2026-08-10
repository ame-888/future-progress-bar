export type AiGraphDataPoint = {
  year: number;
  cost: number;
  note: string;
  fp32Gflops: number;
  priceUsd: number;
  gflopsPerDollar: number;
};

/** Human-equivalent brain cost: 10^7 / dense peak FP32 GFLOP/s/$. */
export const aiGraphData: AiGraphDataPoint[] = [
  { year: 2001, cost: 176786000, note: "AMD Athlon 1.4 GHz", fp32Gflops: 5.60, priceUsd: 99, gflopsPerDollar: 0.0566 },
  { year: 2002, cost: 123077000, note: "AMD Duron 1.3 GHz", fp32Gflops: 5.20, priceUsd: 64, gflopsPerDollar: 0.0813 },
  { year: 2003, cost: 81250000, note: "AMD Duron 1.2 GHz", fp32Gflops: 4.80, priceUsd: 39, gflopsPerDollar: 0.123 },
  { year: 2004, cost: 71875000, note: "Intel Celeron D 320", fp32Gflops: 9.60, priceUsd: 69, gflopsPerDollar: 0.139 },
  { year: 2005, cost: 36303000, note: "Nvidia GeForce 7800 GTX", fp32Gflops: 165, priceUsd: 599, gflopsPerDollar: 0.275 },
  { year: 2006, cost: 11554800, note: "Nvidia GeForce 8800 GTX", fp32Gflops: 518.4, priceUsd: 599, gflopsPerDollar: 0.865 },
  { year: 2007, cost: 4187140, note: "AMD Radeon HD 3850", fp32Gflops: 427.5, priceUsd: 179, gflopsPerDollar: 2.39 },
  { year: 2008, cost: 1645830, note: "AMD Radeon HD 4670", fp32Gflops: 480, priceUsd: 79, gflopsPerDollar: 6.08 },
  { year: 2009, cost: 1135420, note: "AMD Radeon HD 4770", fp32Gflops: 960, priceUsd: 109, gflopsPerDollar: 8.81 },
  { year: 2010, cost: 1135420, note: "Radeon HD 4770, still available", fp32Gflops: 960, priceUsd: 109, gflopsPerDollar: 8.81 },
  { year: 2011, cost: 937500, note: "AMD Radeon HD 6930", fp32Gflops: 1920, priceUsd: 180, gflopsPerDollar: 10.7 },
  { year: 2012, cost: 901442, note: "AMD Radeon HD 7870 XT", fp32Gflops: 2995.2, priceUsd: 270, gflopsPerDollar: 11.1 },
  { year: 2013, cost: 705154, note: "AMD Radeon R7 260X", fp32Gflops: 1971.2, priceUsd: 139, gflopsPerDollar: 14.2 },
  { year: 2014, cost: 705154, note: "Radeon R7 260X, still available", fp32Gflops: 1971.2, priceUsd: 139, gflopsPerDollar: 14.2 },
  { year: 2015, cost: 572415, note: "AMD Radeon R9 380", fp32Gflops: 3476.5, priceUsd: 199, gflopsPerDollar: 17.5 },
  { year: 2016, cost: 341104, note: "AMD Radeon RX 480", fp32Gflops: 5834, priceUsd: 199, gflopsPerDollar: 29.3 },
  { year: 2017, cost: 322267, note: "AMD Radeon RX 580", fp32Gflops: 6175, priceUsd: 199, gflopsPerDollar: 31.0 },
  { year: 2018, cost: 322267, note: "Radeon RX 580, still available", fp32Gflops: 6175, priceUsd: 199, gflopsPerDollar: 31.0 },
  { year: 2019, cost: 322267, note: "Radeon RX 580, still available", fp32Gflops: 6175, priceUsd: 199, gflopsPerDollar: 31.0 },
  { year: 2020, cost: 234816, note: "Nvidia GeForce RTX 3080", fp32Gflops: 29768, priceUsd: 699, gflopsPerDollar: 42.6 },
  { year: 2021, cost: 234816, note: "GeForce RTX 3080, still available", fp32Gflops: 29768, priceUsd: 699, gflopsPerDollar: 42.6 },
  { year: 2022, cost: 162598, note: "AMD Radeon RX 7900 XTX", fp32Gflops: 61440, priceUsd: 999, gflopsPerDollar: 61.5 },
  { year: 2023, cost: 123678, note: "AMD Radeon RX 7600", fp32Gflops: 21750, priceUsd: 269, gflopsPerDollar: 80.9 },
  { year: 2024, cost: 119400, note: "AMD Radeon RX 7900 GRE", fp32Gflops: 45980, priceUsd: 549, gflopsPerDollar: 83.8 },
  { year: 2025, cost: 116615, note: "AMD Radeon RX 9060 XT", fp32Gflops: 25640, priceUsd: 299, gflopsPerDollar: 85.8 },
  { year: 2026, cost: 116615, note: "AMD Radeon RX 9060 XT", fp32Gflops: 25640, priceUsd: 299, gflopsPerDollar: 85.8 },
];
