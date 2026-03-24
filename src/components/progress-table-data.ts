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
  baseValue?: number; // Starting value before level 1
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
  {
    id: "cultured-meat",
    name: "CULTURED MEAT",
    measurements: [
      {
        id: "cultured-meat-1",
        title: "Global Market Share of Meat Consumed",
        currentValue: 0.001,
        baseValue: 0,
        unit: "%",
        levels: [
          { level: 1, goal: 0.1 },
          { level: 2, goal: 1 },
          { level: 3, goal: 5 },
          { level: 4, goal: 15 },
          { level: 5, goal: 30 },
          { level: 6, goal: 50 },
          { level: 7, goal: 100 },
        ],
        history: [{ date: "MARCH - 2026", value: 0.001 }],
      },
      {
        id: "cultured-meat-2",
        title: "Countries allowing sale to humans",
        currentValue: 4,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 10 },
          { level: 2, goal: 25 },
          { level: 3, goal: 50 },
          { level: 4, goal: 100 },
          { level: 5, goal: 150 },
          { level: 6, goal: 180 },
          { level: 7, goal: 195 },
        ],
        history: [
          {
            date: "MARCH - 2026",
            value: 4,
            note: "USA, Israel, Australia and Singapore",
          },
        ],
      },
      {
        id: "cultured-meat-3",
        title: "Countries allowing sale to pets",
        currentValue: 28,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 40 },
          { level: 2, goal: 60 },
          { level: 3, goal: 80 },
          { level: 4, goal: 110 },
          { level: 5, goal: 140 },
          { level: 6, goal: 170 },
          { level: 7, goal: 195 },
        ],
        history: [{ date: "MARCH - 2026", value: 28 }],
      },
      {
        id: "cultured-meat-4",
        title: "Countries where non-cultivated meat is banned",
        currentValue: 0,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 1 },
          { level: 2, goal: 5 },
          { level: 3, goal: 15 },
          { level: 4, goal: 30 },
          { level: 5, goal: 75 },
          { level: 6, goal: 130 },
          { level: 7, goal: 195 },
        ],
        history: [{ date: "MARCH - 2026", value: 0 }],
      },
    ],
  },
  {
    id: "lev",
    name: "LEV",
    measurements: [
      {
        id: "lev-1",
        title: "Average lifespan in the world",
        currentValue: 73.8,
        baseValue: 70,
        unit: "years",
        levels: [
          { level: 1, goal: 80 },
          { level: 2, goal: 90 },
          { level: 3, goal: 100 },
          { level: 4, goal: 120 },
          { level: 5, goal: 150 },
          { level: 6, goal: 200 },
          { level: 7, goal: 500 },
        ],
        history: [
          { date: "MARCH - 2026", value: 73.8 }
        ],
      },
      {
        id: "lev-2",
        title: "Average lifespan in the number 1 country",
        currentValue: 86.73,
        baseValue: 80,
        unit: "years",
        levels: [
          { level: 1, goal: 90 },
          { level: 2, goal: 100 },
          { level: 3, goal: 120 },
          { level: 4, goal: 150 },
          { level: 5, goal: 200 },
          { level: 6, goal: 500 },
          { level: 7, goal: 1000 },
        ],
        history: [
          { date: "MARCH - 2026", value: 86.73 }
        ],
      },
      {
        id: "lev-3",
        title: "Oldest verified human",
        currentValue: 122.45, // 122 years and 164 days
        baseValue: 120,
        unit: "years",
        levels: [
          { level: 1, goal: 125 },
          { level: 2, goal: 130 },
          { level: 3, goal: 140 },
          { level: 4, goal: 150 },
          { level: 5, goal: 200 },
          { level: 6, goal: 500 },
          { level: 7, goal: 1000 },
        ],
        history: [
          { date: "MARCH - 2026", value: 122.45 }
        ],
      },
      {
        id: "lev-4",
        title: "Number of supercentenarians alive",
        currentValue: 217,
        baseValue: 200,
        unit: "people",
        levels: [
          { level: 1, goal: 300 },
          { level: 2, goal: 3000 },
          { level: 3, goal: 30000 },
          { level: 4, goal: 300000 },
          { level: 5, goal: 3000000 },
          { level: 6, goal: 30000000 },
          { level: 7, goal: 300000000 },
        ],
        history: [
          { date: "MARCH - 2026", value: 217 }
        ],
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
