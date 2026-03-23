export type MeasurementHistory = {
  date: string;
  value: number;
  note?: string;
};

export type MeasurementLevel = {
  level: number;
  goal: number;
};

export type Measurement = {
  id: string;
  title: string;
  currentValue: number;
  unit: string;
  levels: MeasurementLevel[];
  history: MeasurementHistory[];
};

export type DomainData = {
  id: string;
  name: string;
  measurements: Measurement[];
};

export const DOMAINS: DomainData[] = [
  { id: "ai", name: "AI", measurements: [] },
  { id: "bci", name: "BCI", measurements: [] },
  { id: "cultured-meat", name: "CULTURED MEAT", measurements: [] },
  {
    id: "lev",
    name: "LEV",
    measurements: [
      {
        id: "lev-1",
        title: "Average lifespan in the world",
        currentValue: 73.8,
        unit: "years",
        levels: [
          { level: 1, goal: 75 },
          { level: 2, goal: 80 },
          { level: 3, goal: 90 },
          { level: 4, goal: 100 },
        ],
        history: [],
      },
      {
        id: "lev-2",
        title: "Average lifespan in the number 1 country (Monaco)",
        currentValue: 86.73,
        unit: "years",
        levels: [
          { level: 1, goal: 90 },
          { level: 2, goal: 100 },
          { level: 3, goal: 110 },
          { level: 4, goal: 120 },
        ],
        history: [],
      },
      {
        id: "lev-3",
        title: "Oldest verified human (Jeanne Calment)",
        currentValue: 122.45, // 122 years and 164 days
        unit: "years",
        levels: [
          { level: 1, goal: 125 },
          { level: 2, goal: 130 },
          { level: 3, goal: 140 },
          { level: 4, goal: 150 },
        ],
        history: [],
      },
      {
        id: "lev-4",
        title: "Number of supercentenarians alive",
        currentValue: 217,
        unit: "people",
        levels: [
          { level: 1, goal: 300 },
          { level: 2, goal: 500 },
          { level: 3, goal: 1000 },
          { level: 4, goal: 5000 },
        ],
        history: [],
      },
    ],
  },
  { id: "nuclear-fusion", name: "NUCLEAR FUSION", measurements: [] },
  { id: "robotics", name: "ROBOTICS", measurements: [] },
  { id: "self-driving-car", name: "SELF-DRIVING CAR", measurements: [] },
  { id: "space-exploration", name: "SPACE EXPLORATION", measurements: [] },
  { id: "superconductor", name: "SUPERCONDUCTOR", measurements: [] },
  { id: "vr", name: "VR", measurements: [] },
];
