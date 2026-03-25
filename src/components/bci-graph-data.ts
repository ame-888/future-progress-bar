export type BciDataPoint = {
  year: number;
  channels: number;
  system: string;
};

export const BCI_DATA: BciDataPoint[] = [
  { year: 2004, channels: 96, system: "Utah Array" },
  { year: 2017, channels: 384, system: "Neuropixels 1.0" },
  { year: 2019, channels: 3072, system: "Neuralink N1 Prototype" },
  { year: 2020, channels: 10000, system: "Neuropixels 2.0 dense array configurations" },
  { year: 2021, channels: 65536, system: "Paradromics Argo System" },
  { year: 2024, channels: 65536, system: "Paradromics Argo System" },
  { year: 2025, channels: 65536, system: "Paradromics Argo System" },
];
