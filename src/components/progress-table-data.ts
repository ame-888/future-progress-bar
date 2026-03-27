export type MeasurementHistory = {
  value: number;
  note?: string;
};

export type MeasurementLevel = {
  level: number;
  goal: number;
  label?: string; // Optional custom string to display for the goal (e.g., "1 Week", "1 Month")
};

export type Measurement = {
  id: string;
  title: string;
  currentValue: number;
  baseValue?: number; // Starting value before level 1
  unit: string;
  isLowerBetter?: boolean; // If true, reaching a lower value means progress
  levels: MeasurementLevel[];
  history: MeasurementHistory[];
};

export type DomainData = {
  id: string;
  name: string;
  description?: string;
  measurements: Measurement[];
};

export const DOMAINS: DomainData[] = [
  {
    id: "ai",
    name: "AI",
    description: "Stands for Artificial Intelligence, focusing on creating systems capable of human-level or superhuman reasoning, creativity, and problem-solving.",
    measurements: []
  },
  {
    id: "bci",
    name: "BCI",
    description: "Stands for Brain-Machine Interface, a piece of tech that directly communicates with the human brain, capable of receiving signals, sending them, or sometimes both.",
    measurements: [
      {
        id: "bci-1",
        title: "Number of People with a Next-Gen BCI",
        currentValue: 85,
        baseValue: 0,
        unit: "people",
        levels: [
          { level: 1, goal: 500 },
          { level: 2, goal: 10000 },
          { level: 3, goal: 100000 },
          { level: 4, goal: 1000000 },
          { level: 5, goal: 10000000 },
          { level: 6, goal: 100000000 },
          { level: 7, goal: 1000000000 },
        ],
        history: [{ value: 85 }],
      },
      {
        id: "bci-2",
        title: "Number of Countries Testing Next-Gen BCIs in Humans",
        currentValue: 8,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 12 },
          { level: 2, goal: 25 },
          { level: 3, goal: 50 },
          { level: 4, goal: 100 },
          { level: 5, goal: 150 },
          { level: 6, goal: 180 },
          { level: 7, goal: 195 },
        ],
        history: [{ value: 8 }],
      },
      {
        id: "bci-3",
        title: "Number of Countries Allowing Next-Gen BCI for Medical Use",
        currentValue: 1,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 3 },
          { level: 2, goal: 10 },
          { level: 3, goal: 30 },
          { level: 4, goal: 75 },
          { level: 5, goal: 120 },
          { level: 6, goal: 170 },
          { level: 7, goal: 195 },
        ],
        history: [{ value: 1 }],
      },
      {
        id: "bci-4",
        title: "Number of Countries Allowing BCI for Elective/Free Use",
        currentValue: 0,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 1 },
          { level: 2, goal: 5 },
          { level: 3, goal: 15 },
          { level: 4, goal: 40 },
          { level: 5, goal: 80 },
          { level: 6, goal: 140 },
          { level: 7, goal: 195 },
        ],
        history: [{ value: 0 }],
      },
    ]
  },
  {
    id: "cultured-meat",
    name: "CULTURED MEAT",
    description: "Real meat produced by cultivating animal cells directly, eliminating the need to raise and slaughter animals while significantly reducing environmental impact.",
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
        history: [{ value: 0.001 }],
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
        history: [{ value: 28 }],
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
        history: [{ value: 0 }],
      },
    ],
  },
  {
    id: "lev",
    name: "LEV",
    description: "Stands for Longevity Escape Velocity, the point at which life expectancy increases longer than the time that is passing, effectively meaning humans can theoretically live indefinitely.",
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
          { value: 73.8 }
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
          { value: 86.73 }
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
          { value: 122.45 }
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
          { value: 217 }
        ],
      },
    ],
  },
  {
    id: "nuclear-fusion",
    name: "NUCLEAR FUSION",
    description: "The process that powers the sun, merging atomic nuclei to release massive amounts of clean, boundless energy. We track the race to make it a practical power source on Earth.",
    measurements: [
      {
        id: "fusion-1",
        title: "Number of commercial fusion power plants on the grid",
        currentValue: 0,
        baseValue: 0,
        unit: "plants",
        levels: [
          { level: 1, goal: 1 },
          { level: 2, goal: 5 },
          { level: 3, goal: 20 },
          { level: 4, goal: 100 },
          { level: 5, goal: 500 },
          { level: 6, goal: 2500 },
          { level: 7, goal: 10000 },
        ],
        history: [{ value: 0 }],
      },
      {
        id: "fusion-2",
        title: "Global share of electricity generated by fusion",
        currentValue: 0,
        baseValue: 0,
        unit: "%",
        levels: [
          { level: 1, goal: 0.1 },
          { level: 2, goal: 1 },
          { level: 3, goal: 5 },
          { level: 4, goal: 10 },
          { level: 5, goal: 25 },
          { level: 6, goal: 40 },
          { level: 7, goal: 75 },
        ],
        history: [{ value: 0 }],
      },
      {
        id: "fusion-3",
        title: "Longest continuous operation of a net-positive reactor",
        currentValue: 0,
        baseValue: 0,
        unit: "hours",
        levels: [
          { level: 1, goal: 1, label: "1 Hour" },
          { level: 2, goal: 24, label: "24 Hours" },
          { level: 3, goal: 168, label: "1 Week" },
          { level: 4, goal: 730, label: "1 Month" },
          { level: 5, goal: 8760, label: "1 Year" },
          { level: 6, goal: 43800, label: "5 Years" },
          { level: 7, goal: 438000, label: "50 Years" },
        ],
        history: [{ value: 0 }],
      },
      {
        id: "fusion-4",
        title: "Maximum net electrical output of a single fusion plant",
        currentValue: 0,
        baseValue: 0,
        unit: "MWe",
        levels: [
          { level: 1, goal: 10 },
          { level: 2, goal: 50 },
          { level: 3, goal: 200 },
          { level: 4, goal: 500 },
          { level: 5, goal: 1000 },
          { level: 6, goal: 2500 },
          { level: 7, goal: 5000 },
        ],
        history: [{ value: 0 }],
      },
    ],
  },
  {
    id: "quantum-computing",
    name: "QUANTUM COMPUTING",
    description: "A new paradigm of computation utilizing quantum mechanics to solve problems exponentially faster than classical computers, opening doors to advanced materials, chemistry, and cryptography.",
    measurements: [
      {
        id: "qc-1",
        title: "Physical Qubit Count",
        currentValue: 6100,
        baseValue: 0,
        unit: "qubits",
        levels: [
          { level: 1, goal: 10000 },
          { level: 2, goal: 50000 },
          { level: 3, goal: 100000 },
          { level: 4, goal: 500000 },
          { level: 5, goal: 1000000 },
          { level: 6, goal: 10000000 },
          { level: 7, goal: 1000000000 },
        ],
        history: [{ value: 6100 }],
      },
    ]
  },
  {
    id: "robotics",
    name: "ROBOTICS",
    description: "The engineering of machines capable of carrying out complex physical tasks autonomously or semi-autonomously in unstructured environments.",
    measurements: []
  },
  {
    id: "self-driving-car",
    name: "SELF-DRIVING CAR",
    description: "Vehicles equipped with sensors and AI that can navigate and operate safely without human intervention across all driving conditions.",
    measurements: []
  },
  {
    id: "space-exploration",
    name: "SPACE EXPLORATION",
    description: "The physical exploration of outer space, aiming to establish permanent human presence beyond Earth and utilize extraterrestrial resources.",
    measurements: [
      {
        id: "space-1",
        title: "Maximum Simultaneous Human Population in Space",
        currentValue: 20,
        baseValue: 0,
        unit: "humans",
        levels: [
          { level: 1, goal: 30 },
          { level: 2, goal: 50 },
          { level: 3, goal: 100 },
          { level: 4, goal: 500 },
          { level: 5, goal: 1000 },
          { level: 6, goal: 10000 },
          { level: 7, goal: 1000000 },
        ],
        history: [{ value: 20 }],
      },
      {
        id: "space-2",
        title: "Payload Mass to LEO (Single Launch)",
        currentValue: 150,
        baseValue: 0,
        unit: "metric tonnes",
        levels: [
          { level: 1, goal: 500 },
          { level: 2, goal: 1000 },
          { level: 3, goal: 5000 },
          { level: 4, goal: 10000 },
          { level: 5, goal: 50000 },
          { level: 6, goal: 100000 },
          { level: 7, goal: 1000000 },
        ],
        history: [{ value: 150 }],
      },
    ]
  },
  {
    id: "superconductor",
    name: "SUPERCONDUCTOR",
    description: "Materials that conduct electricity with zero resistance. We are specifically tracking the race toward room-temperature, ambient-pressure superconductors.",
    measurements: []
  },
  {
    id: "vr",
    name: "VR",
    description: "Stands for Virtual Reality, immersive digital environments. We focus on true 'Full Dive' VR capabilities involving direct neural stimulation.",
    measurements: [
      {
        id: "vr-1",
        title: "Weight of the lightest standalone 6DOF VR headset",
        currentValue: 140,
        baseValue: 140,
        unit: "grams",
        isLowerBetter: true,
        levels: [
          { level: 1, goal: 130 },
          { level: 2, goal: 115 },
          { level: 3, goal: 100 },
          { level: 4, goal: 75 },
          { level: 5, goal: 50 },
          { level: 6, goal: 25 },
          { level: 7, goal: 15 },
        ],
        history: [{ value: 140 }]
      },
      {
        id: "vr-2",
        title: "Maximum Horizontal Field of View (FOV) in a consumer headset",
        currentValue: 160,
        baseValue: 160,
        unit: "degrees",
        levels: [
          { level: 1, goal: 167 },
          { level: 2, goal: 175 },
          { level: 3, goal: 182 },
          { level: 4, goal: 190 },
          { level: 5, goal: 200 },
          { level: 6, goal: 210 },
          { level: 7, goal: 220 },
        ],
        history: [{ value: 160 }]
      },
      {
        id: "vr-3",
        title: "Longest continuous session in a Full-Dive environment",
        currentValue: 0,
        baseValue: 0,
        unit: "hours",
        levels: [
          { level: 1, goal: 5 / 3600, label: "5 seconds" },
          { level: 2, goal: 5 / 60, label: "5 minutes" },
          { level: 3, goal: 5, label: "5 hours" },
          { level: 4, goal: 24, label: "1 day" },
          { level: 5, goal: 120, label: "5 days" },
          { level: 6, goal: 1200, label: "50 days" },
          { level: 7, goal: 8760, label: "365 days" },
        ],
        history: [{ value: 0 }]
      },
      {
        id: "vr-4",
        title: "Global Daily Active Users (DAU) in Full-Dive VR",
        currentValue: 0,
        baseValue: 0,
        unit: "users",
        levels: [
          { level: 1, goal: 2 },
          { level: 2, goal: 60 },
          { level: 3, goal: 1800, label: "1.8K" },
          { level: 4, goal: 54000, label: "54K" },
          { level: 5, goal: 1600000, label: "1.6M" },
          { level: 6, goal: 48000000, label: "48M" },
          { level: 7, goal: 1440000000, label: "1.44B" },
        ],
        history: [{ value: 0 }]
      }
    ]
  },
];
