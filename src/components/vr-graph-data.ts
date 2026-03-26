export type VrDataPoint = {
  year: number;
  channels: number;
  system: string;
};

export const VR_DATA: VrDataPoint[] = [
  { year: 2000, channels: 68, system: "Early visual cortical implants (e.g., Dobelle Eye)" },
  { year: 2013, channels: 100, system: "Standard penetrating arrays limit" },
  { year: 2020, channels: 1024, system: "Chen et al. visual cortex projection" },
  { year: 2023, channels: 16000, system: "Science Eye optogenetic array" },
  { year: 2024, channels: 16000, system: "Current absolute engineering limit" },
  { year: 2025, channels: 16000, system: "Current absolute engineering limit" },
  { year: 2026, channels: 16000, system: "Current absolute engineering limit" },
];