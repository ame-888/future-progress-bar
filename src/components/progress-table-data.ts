export type MeasurementHistory = {
  value: number;
  note?: string;
  details?: string[];
};

export type MeasurementLevel = {
  level: number;
  goal: number;
  label?: string; // Optional custom string to display for the goal (e.g., "1 Week", "1 Month")
  realityYear?: number;
  aiPredictions?: { name: string; year: number }[];
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

function getEthelAgeString() {
  const birthDate = new Date(1909, 7, 21); // August 21, 1909
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (today < lastBirthday) {
    years--;
    lastBirthday = new Date(today.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());
  }

  const diffDays = Math.floor((today.getTime() - lastBirthday.getTime()) / (1000 * 60 * 60 * 24));
  return `Ethel Caterham (alive): ${years} years and ${diffDays} days`;
}

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
        title: "Number of People with Chronic, Next-Gen, Cortex reading BCI",
        currentValue: 91,
        baseValue: 0,
        unit: "people",
        levels: [
          { level: 1, goal: 500, aiPredictions: [{ name: "Grok 4.20", year: 2026 }, { name: "Claude 4.6 Sonnet", year: 2027 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2028 }] },
          { level: 2, goal: 10000, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "Claude 4.6 Sonnet", year: 2030 }, { name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }] },
          { level: 3, goal: 100000, aiPredictions: [{ name: "Grok 4.20", year: 2029 }, { name: "Claude 4.6 Sonnet", year: 2034 }, { name: "Gemini 3.1 Pro Preview", year: 2036 }, { name: "GPT-5.4 Thinking Mini", year: 2049 }] },
          { level: 4, goal: 1000000, aiPredictions: [{ name: "Grok 4.20", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2042 }, { name: "GPT-5.4 Thinking Mini", year: 2061 }] },
          { level: 5, goal: 10000000, aiPredictions: [{ name: "Grok 4.20", year: 2037 }, { name: "Claude 4.6 Sonnet", year: 2043 }, { name: "Gemini 3.1 Pro Preview", year: 2048 }, { name: "GPT-5.4 Thinking Mini", year: 2076 }] },
          { level: 6, goal: 100000000, aiPredictions: [{ name: "Grok 4.20", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2050 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }, { name: "GPT-5.4 Thinking Mini", year: 2094 }] },
          { level: 7, goal: 1000000000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2058 }, { name: "Grok 4.20", year: 2060 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2125 }] },
        ],
        history: [{
          value: 91,
          details: [
            "Blackrock Neurotech (USA): around 50 users (estimated).",
            "Neuralink (USA): 21",
            "Synchron (USA / Australia): 10",
            "Clinatec / CEA / Onward Medical (France / Switzerland): 7",
            "Tsinghua University / Neuracle Technology (China): 3"
          ]
        }],
      },
      {
        id: "bci-2",
        title: "Number of Countries Testing Next-Gen BCIs in Humans",
        currentValue: 6,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 12, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2028 }, { name: "Claude 4.6 Sonnet", year: 2029 }, { name: "Grok 4.20", year: 2029 }] },
          { level: 2, goal: 25, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2033 }, { name: "Grok 4.20", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2033 }] },
          { level: 3, goal: 50, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2039 }, { name: "Grok 4.20", year: 2040 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }] },
          { level: 4, goal: 100, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2047 }, { name: "Claude 4.6 Sonnet", year: 2048 }, { name: "Grok 4.20", year: 2050 }, { name: "Gemini 3.1 Pro Preview", year: 2052 }] },
          { level: 5, goal: 150, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2056 }, { name: "GPT-5.4 Thinking Mini", year: 2059 }, { name: "Grok 4.20", year: 2065 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }] },
          { level: 6, goal: 180, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2063 }, { name: "GPT-5.4 Thinking Mini", year: 2067 }, { name: "Gemini 3.1 Pro Preview", year: 2078 }, { name: "Grok 4.20", year: 2080 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2070 }, { name: "GPT-5.4 Thinking Mini", year: 2074 }, { name: "Gemini 3.1 Pro Preview", year: 2090 }, { name: "Grok 4.20", year: 2100 }] },
        ],
        history: [{
          value: 6,
          details: [
            "USA (2004)",
            "Australia (2019)",
            "Canada (2024)",
            "China (2025)",
            "UAE (2025)",
            "UK (2025)"
          ]
        }],
      },
      {
        id: "bci-3",
        title: "Number of Countries Allowing Chronic, Next-Gen, Cortex reading BCI for Medical Use",
        currentValue: 1,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 3, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "Claude 4.6 Sonnet", year: 2027 }, { name: "Gemini 3.1 Pro Preview", year: 2029 }, { name: "GPT-5.4 Thinking Mini", year: 2029 }] },
          { level: 2, goal: 10, aiPredictions: [{ name: "Grok 4.20", year: 2030 }, { name: "Claude 4.6 Sonnet", year: 2031 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }, { name: "GPT-5.4 Thinking Mini", year: 2035 }] },
          { level: 3, goal: 30, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "Grok 4.20", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "GPT-5.4 Thinking Mini", year: 2044 }] },
          { level: 4, goal: 75, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2036 }, { name: "Grok 4.20", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2044 }, { name: "GPT-5.4 Thinking Mini", year: 2058 }] },
          { level: 5, goal: 120, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2042 }, { name: "Grok 4.20", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2051 }, { name: "GPT-5.4 Thinking Mini", year: 2074 }] },
          { level: 6, goal: 170, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2050 }, { name: "Grok 4.20", year: 2052 }, { name: "Claude 4.6 Sonnet", year: 2060 }, { name: "GPT-5.4 Thinking Mini", year: 2092 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "Grok 4.20", year: 2060 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "Claude 4.6 Sonnet", year: 2072 }, { name: "GPT-5.4 Thinking Mini", year: 2125 }] },
        ],
        history: [{ value: 1, details: ["China (2026)"] }],
      },
      {
        id: "bci-4",
        title: "Number of Countries Allowing Chronic, Next-Gen, Cortex reading BCI for Elective/Free Use",
        currentValue: 0,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 1, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2028 }, { name: "Claude 4.6 Sonnet", year: 2029 }, { name: "Grok 4.20", year: 2032 }, { name: "Gemini 3.1 Pro Preview", year: 2035 }] },
          { level: 2, goal: 5, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2034 }, { name: "GPT-5.4 Thinking Mini", year: 2034 }, { name: "Grok 4.20", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2042 }] },
          { level: 3, goal: 15, aiPredictions: [{ name: "Grok 4.20", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2040 }, { name: "GPT-5.4 Thinking Mini", year: 2042 }, { name: "Gemini 3.1 Pro Preview", year: 2048 }] },
          { level: 4, goal: 40, aiPredictions: [{ name: "Grok 4.20", year: 2042 }, { name: "Claude 4.6 Sonnet", year: 2047 }, { name: "GPT-5.4 Thinking Mini", year: 2050 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }] },
          { level: 5, goal: 80, aiPredictions: [{ name: "Grok 4.20", year: 2047 }, { name: "Claude 4.6 Sonnet", year: 2055 }, { name: "GPT-5.4 Thinking Mini", year: 2059 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }] },
          { level: 6, goal: 140, aiPredictions: [{ name: "Grok 4.20", year: 2053 }, { name: "Claude 4.6 Sonnet", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2069 }, { name: "Gemini 3.1 Pro Preview", year: 2080 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "Grok 4.20", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2080 }, { name: "Claude 4.6 Sonnet", year: 2085 }, { name: "Gemini 3.1 Pro Preview", year: 2105 }] },
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
          { level: 1, goal: 0.1, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2032 }, { name: "GPT-5.4 Thinking Mini", year: 2031 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "Grok 4.20", year: 2027 }] },
          { level: 2, goal: 1, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2038 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }, { name: "Grok 4.20", year: 2035 }] },
          { level: 3, goal: 5, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2045 }, { name: "GPT-5.4 Thinking Mini", year: 2047 }, { name: "Gemini 3.1 Pro Preview", year: 2034 }, { name: "Grok 4.20", year: 2041 }] },
          { level: 4, goal: 15, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2053 }, { name: "GPT-5.4 Thinking Mini", year: 2058 }, { name: "Gemini 3.1 Pro Preview", year: 2037 }, { name: "Grok 4.20", year: 2045 }] },
          { level: 5, goal: 30, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2061 }, { name: "GPT-5.4 Thinking Mini", year: 2070 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }, { name: "Grok 4.20", year: 2047 }] },
          { level: 6, goal: 50, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2071 }, { name: "GPT-5.4 Thinking Mini", year: 2085 }, { name: "Gemini 3.1 Pro Preview", year: 2046 }, { name: "Grok 4.20", year: 2049 }] },
          { level: 7, goal: 100, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2105 }, { name: "GPT-5.4 Thinking Mini", year: 2150 }, { name: "Gemini 3.1 Pro Preview", year: 2095 }, { name: "Grok 4.20", year: 2052 }] },
        ],
        history: [{ value: 0.001 }],
      },
      {
        id: "cultured-meat-2",
        title: "Countries allowing sale to humans",
        currentValue: 5,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 10, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2028 }, { name: "Grok 4.20", year: 2028 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2029 }] },
          { level: 2, goal: 25, aiPredictions: [{ name: "Grok 4.20", year: 2030 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }, { name: "Claude 4.6 Sonnet", year: 2032 }, { name: "GPT-5.4 Thinking Mini", year: 2035 }] },
          { level: 3, goal: 50, aiPredictions: [{ name: "Grok 4.20", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2036 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "GPT-5.4 Thinking Mini", year: 2042 }] },
          { level: 4, goal: 100, aiPredictions: [{ name: "Grok 4.20", year: 2042 }, { name: "Gemini 3.1 Pro Preview", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2046 }, { name: "GPT-5.4 Thinking Mini", year: 2051 }] },
          { level: 5, goal: 150, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2055 }, { name: "Claude 4.6 Sonnet", year: 2058 }, { name: "Grok 4.20", year: 2058 }, { name: "GPT-5.4 Thinking Mini", year: 2059 }] },
          { level: 6, goal: 180, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2064 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "Claude 4.6 Sonnet", year: 2072 }, { name: "Grok 4.20", year: 2075 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2070 }, { name: "Gemini 3.1 Pro Preview", year: 2080 }, { name: "Claude 4.6 Sonnet", year: 2095 }, { name: "Grok 4.20", year: 2095 }] },
        ],
        history: [
          {
            value: 5,
            details: [
              "Singapore (2020)",
              "USA (2023)",
              "Israel (2024)",
              "Australia (2025)",
              "New Zealand (2025)"
            ]
          },
        ],
      },
      {
        id: "cultured-meat-3",
        title: "Countries allowing sale to pets",
        currentValue: 29,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 40, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "Grok 4.20", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2037 }] },
          { level: 2, goal: 60, aiPredictions: [{ name: "Grok 4.20", year: 2030 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }, { name: "GPT-5.4 Thinking Mini", year: 2039 }, { name: "Claude 4.6 Sonnet", year: 2043 }] },
          { level: 3, goal: 80, aiPredictions: [{ name: "Grok 4.20", year: 2032 }, { name: "Gemini 3.1 Pro Preview", year: 2034 }, { name: "GPT-5.4 Thinking Mini", year: 2043 }, { name: "Claude 4.6 Sonnet", year: 2050 }] },
          { level: 4, goal: 110, aiPredictions: [{ name: "Grok 4.20", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2038 }, { name: "GPT-5.4 Thinking Mini", year: 2049 }, { name: "Claude 4.6 Sonnet", year: 2058 }] },
          { level: 5, goal: 140, aiPredictions: [{ name: "Grok 4.20", year: 2040 }, { name: "Gemini 3.1 Pro Preview", year: 2044 }, { name: "GPT-5.4 Thinking Mini", year: 2055 }, { name: "Claude 4.6 Sonnet", year: 2067 }] },
          { level: 6, goal: 170, aiPredictions: [{ name: "Grok 4.20", year: 2045 }, { name: "Gemini 3.1 Pro Preview", year: 2051 }, { name: "GPT-5.4 Thinking Mini", year: 2062 }, { name: "Claude 4.6 Sonnet", year: 2078 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "Grok 4.20", year: 2055 }, { name: "Gemini 3.1 Pro Preview", year: 2062 }, { name: "GPT-5.4 Thinking Mini", year: 2074 }, { name: "Claude 4.6 Sonnet", year: 2094 }] },
        ],
        history: [
          {
            value: 29,
            details: [
              "EU, except Italy. A total of 26 countries (2023)",
              "UK (2024)",
              "Singapore (2025)",
              "Australia (2026)"
            ]
          }
        ],
      },
      {
        id: "cultured-meat-4",
        title: "Countries where non-cultivated meat is banned",
        currentValue: 0,
        baseValue: 0,
        unit: "countries",
        levels: [
          { level: 1, goal: 1, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2026 }, { name: "Claude 4.6 Sonnet", year: 2051 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }, { name: "Grok 4.20", year: 2060 }] },
          { level: 2, goal: 5, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2063 }, { name: "Gemini 3.1 Pro Preview", year: 2070 }, { name: "Grok 4.20", year: 2085 }] },
          { level: 3, goal: 15, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2054 }, { name: "Claude 4.6 Sonnet", year: 2079 }, { name: "Gemini 3.1 Pro Preview", year: 2085 }, { name: "Grok 4.20", year: 2110 }] },
          { level: 4, goal: 30, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2072 }, { name: "Claude 4.6 Sonnet", year: 2092 }, { name: "Gemini 3.1 Pro Preview", year: 2100 }, { name: "Grok 4.20", year: 2140 }] },
          { level: 5, goal: 75, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2110 }, { name: "Claude 4.6 Sonnet", year: 2118 }, { name: "Gemini 3.1 Pro Preview", year: 2130 }, { name: "Grok 4.20", year: 2175 }] },
          { level: 6, goal: 130, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2151 }, { name: "GPT-5.4 Thinking Mini", year: 2155 }, { name: "Gemini 3.1 Pro Preview", year: 2160 }, { name: "Grok 4.20", year: 2210 }] },
          { level: 7, goal: 195, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2200 }, { name: "Claude 4.6 Sonnet", year: 2210 }, { name: "GPT-5.4 Thinking Mini", year: 2210 }, { name: "Grok 4.20", year: 2250 }] },
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
          { level: 1, goal: 80, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2044 }, { name: "Grok 4.20", year: 2068 }, { name: "Gemini 3.1 Pro Preview", year: 2073 }, { name: "GPT-5.4 Thinking Mini", year: 2082 }] },
          { level: 2, goal: 90, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2090 }, { name: "Grok 4.20", year: 2105 }, { name: "Gemini 3.1 Pro Preview", year: 2115 }, { name: "GPT-5.4 Thinking Mini", year: 2168 }] },
          { level: 3, goal: 100, aiPredictions: [{ name: "Grok 4.20", year: 2135 }, { name: "Claude 4.6 Sonnet", year: 2160 }, { name: "Gemini 3.1 Pro Preview", year: 2160 }, { name: "GPT-5.4 Thinking Mini", year: 2258 }] },
          { level: 4, goal: 120, aiPredictions: [{ name: "Grok 4.20", year: 2185 }, { name: "Gemini 3.1 Pro Preview", year: 2220 }, { name: "Claude 4.6 Sonnet", year: 2260 }, { name: "GPT-5.4 Thinking Mini", year: 2428 }] },
          { level: 5, goal: 150, aiPredictions: [{ name: "Grok 4.20", year: 2260 }, { name: "Gemini 3.1 Pro Preview", year: 2300 }, { name: "Claude 4.6 Sonnet", year: 2380 }, { name: "GPT-5.4 Thinking Mini", year: 2708 }] },
          { level: 6, goal: 200, aiPredictions: [{ name: "Grok 4.20", year: 2450 }, { name: "Gemini 3.1 Pro Preview", year: 2450 }, { name: "Claude 4.6 Sonnet", year: 2600 }, { name: "GPT-5.4 Thinking Mini", year: 3208 }] },
          { level: 7, goal: 500, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2900 }, { name: "Grok 4.20", year: 2950 }, { name: "Claude 4.6 Sonnet", year: 4500 }, { name: "GPT-5.4 Thinking Mini", year: 6208 }] },
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
          { level: 1, goal: 90, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "Grok 4.20", year: 2038 }, { name: "GPT-5.4 Thinking Mini", year: 2039 }] },
          { level: 2, goal: 100, aiPredictions: [{ name: "Grok 4.20", year: 2055 }, { name: "Claude 4.6 Sonnet", year: 2072 }, { name: "GPT-5.4 Thinking Mini", year: 2079 }, { name: "Gemini 3.1 Pro Preview", year: 2085 }] },
          { level: 3, goal: 120, aiPredictions: [{ name: "Grok 4.20", year: 2078 }, { name: "Claude 4.6 Sonnet", year: 2108 }, { name: "Gemini 3.1 Pro Preview", year: 2130 }, { name: "GPT-5.4 Thinking Mini", year: 2159 }] },
          { level: 4, goal: 150, aiPredictions: [{ name: "Grok 4.20", year: 2105 }, { name: "Claude 4.6 Sonnet", year: 2155 }, { name: "Gemini 3.1 Pro Preview", year: 2175 }, { name: "GPT-5.4 Thinking Mini", year: 2279 }] },
          { level: 5, goal: 200, aiPredictions: [{ name: "Grok 4.20", year: 2145 }, { name: "Claude 4.6 Sonnet", year: 2218 }, { name: "Gemini 3.1 Pro Preview", year: 2225 }, { name: "GPT-5.4 Thinking Mini", year: 2479 }] },
          { level: 6, goal: 500, aiPredictions: [{ name: "Grok 4.20", year: 2270 }, { name: "Claude 4.6 Sonnet", year: 2390 }, { name: "Gemini 3.1 Pro Preview", year: 2400 }, { name: "GPT-5.4 Thinking Mini", year: 2679 }] },
          { level: 7, goal: 1000, aiPredictions: [{ name: "Grok 4.20", year: 2480 }, { name: "Claude 4.6 Sonnet", year: 2620 }, { name: "Gemini 3.1 Pro Preview", year: 2800 }, { name: "GPT-5.4 Thinking Mini", year: 5679 }] },
        ],
        history: [
          {
            value: 86.73,
            details: ["Monaco"]
          }
        ],
      },
      {
        id: "lev-3",
        title: "Oldest verified human",
        currentValue: 122.45, // 122 years and 164 days
        baseValue: 120,
        unit: "years",
        levels: [
          { level: 1, goal: 125, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2037 }, { name: "Grok 4.20", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2060 }, { name: "GPT-5.4 Thinking Mini", year: 2087 }] },
          { level: 2, goal: 130, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2050 }, { name: "Grok 4.20", year: 2058 }, { name: "Claude 4.6 Sonnet", year: 2115 }, { name: "GPT-5.4 Thinking Mini", year: 2164 }] },
          { level: 3, goal: 140, aiPredictions: [{ name: "Grok 4.20", year: 2075 }, { name: "Gemini 3.1 Pro Preview", year: 2110 }, { name: "Claude 4.6 Sonnet", year: 2240 }, { name: "GPT-5.4 Thinking Mini", year: 2318 }] },
          { level: 4, goal: 150, aiPredictions: [{ name: "Grok 4.20", year: 2095 }, { name: "Gemini 3.1 Pro Preview", year: 2120 }, { name: "Claude 4.6 Sonnet", year: 2380 }, { name: "GPT-5.4 Thinking Mini", year: 2560 }] },
          { level: 5, goal: 200, aiPredictions: [{ name: "Grok 4.20", year: 2150 }, { name: "Gemini 3.1 Pro Preview", year: 2170 }, { name: "Claude 4.6 Sonnet", year: 2600 }, { name: "GPT-5.4 Thinking Mini", year: 4200 }] },
          { level: 6, goal: 500, aiPredictions: [{ name: "Grok 4.20", year: 2280 }, { name: "Gemini 3.1 Pro Preview", year: 2470 }, { name: "Claude 4.6 Sonnet", year: 4000 }, { name: "GPT-5.4 Thinking Mini", year: 13000 }] },
          { level: 7, goal: 1000, aiPredictions: [{ name: "Grok 4.20", year: 2450 }, { name: "Gemini 3.1 Pro Preview", year: 2970 }, { name: "Claude 4.6 Sonnet", year: 8500 }, { name: "GPT-5.4 Thinking Mini", year: 30000 }] },
        ],
        history: [
          {
            value: 122.45,
            details: [
              "Jeanne Calment (deceased): 122 years and 164 days",
              getEthelAgeString()
            ]
          }
        ],
      },
      {
        id: "lev-4",
        title: "Number of supercentenarians alive",
        currentValue: 217,
        baseValue: 200,
        unit: "people",
        levels: [
          { level: 1, goal: 300, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "GPT-5.4 Thinking Mini", year: 2031 }, { name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2050 }] },
          { level: 2, goal: 3000, aiPredictions: [{ name: "Grok 4.20", year: 2050 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }, { name: "GPT-5.4 Thinking Mini", year: 2064 }, { name: "Claude 4.6 Sonnet", year: 2075 }] },
          { level: 3, goal: 30000, aiPredictions: [{ name: "Grok 4.20", year: 2070 }, { name: "Gemini 3.1 Pro Preview", year: 2080 }, { name: "GPT-5.4 Thinking Mini", year: 2097 }, { name: "Claude 4.6 Sonnet", year: 2110 }] },
          { level: 4, goal: 300000, aiPredictions: [{ name: "Grok 4.20", year: 2090 }, { name: "Gemini 3.1 Pro Preview", year: 2105 }, { name: "GPT-5.4 Thinking Mini", year: 2130 }, { name: "Claude 4.6 Sonnet", year: 2160 }] },
          { level: 5, goal: 3000000, aiPredictions: [{ name: "Grok 4.20", year: 2120 }, { name: "Gemini 3.1 Pro Preview", year: 2122 }, { name: "GPT-5.4 Thinking Mini", year: 2163 }, { name: "Claude 4.6 Sonnet", year: 2230 }] },
          { level: 6, goal: 30000000, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2140 }, { name: "Grok 4.20", year: 2150 }, { name: "GPT-5.4 Thinking Mini", year: 2197 }, { name: "Claude 4.6 Sonnet", year: 2320 }] },
          { level: 7, goal: 300000000, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2165 }, { name: "Grok 4.20", year: 2180 }, { name: "GPT-5.4 Thinking Mini", year: 2230 }, { name: "Claude 4.6 Sonnet", year: 2500 }] },
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
          { level: 1, goal: 1, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2032 }, { name: "Grok 4.20", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }] },
          { level: 2, goal: 5, aiPredictions: [{ name: "Grok 4.20", year: 2036 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2042 }, { name: "Gemini 3.1 Pro Preview", year: 2047 }] },
          { level: 3, goal: 20, aiPredictions: [{ name: "Grok 4.20", year: 2042 }, { name: "GPT-5.4 Thinking Mini", year: 2044 }, { name: "Claude 4.6 Sonnet", year: 2047 }, { name: "Gemini 3.1 Pro Preview", year: 2054 }] },
          { level: 4, goal: 100, aiPredictions: [{ name: "Grok 4.20", year: 2050 }, { name: "GPT-5.4 Thinking Mini", year: 2051 }, { name: "Claude 4.6 Sonnet", year: 2053 }, { name: "Gemini 3.1 Pro Preview", year: 2062 }] },
          { level: 5, goal: 500, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2059 }, { name: "Claude 4.6 Sonnet", year: 2060 }, { name: "Grok 4.20", year: 2062 }, { name: "Gemini 3.1 Pro Preview", year: 2075 }] },
          { level: 6, goal: 2500, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2068 }, { name: "GPT-5.4 Thinking Mini", year: 2068 }, { name: "Grok 4.20", year: 2078 }, { name: "Gemini 3.1 Pro Preview", year: 2090 }] },
          { level: 7, goal: 10000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2077 }, { name: "GPT-5.4 Thinking Mini", year: 2078 }, { name: "Grok 4.20", year: 2095 }, { name: "Gemini 3.1 Pro Preview", year: 2115 }] },
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
          { level: 1, goal: 0.1, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2048 }] },
          { level: 2, goal: 1, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2058 }] },
          { level: 3, goal: 5, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2067 }] },
          { level: 4, goal: 10, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2074 }] },
          { level: 5, goal: 25, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2083 }] },
          { level: 6, goal: 40, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2092 }] },
          { level: 7, goal: 75, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2110 }] },
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
          { level: 1, goal: 1, label: "1 Hour", aiPredictions: [{ name: "Grok 4.20", year: 2030 }, { name: "Claude 4.6 Sonnet", year: 2033 }] },
          { level: 2, goal: 24, label: "24 Hours", aiPredictions: [{ name: "Grok 4.20", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2037 }] },
          { level: 3, goal: 168, label: "1 Week", aiPredictions: [{ name: "Grok 4.20", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2042 }] },
          { level: 4, goal: 730, label: "1 Month", aiPredictions: [{ name: "Grok 4.20", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2047 }] },
          { level: 5, goal: 8760, label: "1 Year", aiPredictions: [{ name: "Grok 4.20", year: 2050 }, { name: "Claude 4.6 Sonnet", year: 2055 }] },
          { level: 6, goal: 43800, label: "5 Years", aiPredictions: [{ name: "Grok 4.20", year: 2060 }, { name: "Claude 4.6 Sonnet", year: 2067 }] },
          { level: 7, goal: 438000, label: "50 Years", aiPredictions: [{ name: "Grok 4.20", year: 2080 }, { name: "Claude 4.6 Sonnet", year: 2110 }] },
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
          { level: 1, goal: 10, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2035 }] },
          { level: 2, goal: 50, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2038 }] },
          { level: 3, goal: 200, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2043 }] },
          { level: 4, goal: 500, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2048 }] },
          { level: 5, goal: 1000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2053 }] },
          { level: 6, goal: 2500, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2060 }] },
          { level: 7, goal: 5000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2068 }] },
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
          { level: 1, goal: 10000, aiPredictions: [{ name: "Grok 4.20", year: 2026 }, { name: "Claude 4.6 Sonnet", year: 2027 }, { name: "Gemini 3.1 Pro Preview", year: 2027 }, { name: "GPT-5.4 Thinking Mini", year: 2030 }] },
          { level: 2, goal: 50000, aiPredictions: [{ name: "Grok 4.20", year: 2028 }, { name: "Claude 4.6 Sonnet", year: 2029 }, { name: "Gemini 3.1 Pro Preview", year: 2030 }, { name: "GPT-5.4 Thinking Mini", year: 2032 }] },
          { level: 3, goal: 100000, aiPredictions: [{ name: "Grok 4.20", year: 2029 }, { name: "Claude 4.6 Sonnet", year: 2031 }, { name: "Gemini 3.1 Pro Preview", year: 2033 }, { name: "GPT-5.4 Thinking Mini", year: 2033 }] },
          { level: 4, goal: 500000, aiPredictions: [{ name: "Grok 4.20", year: 2031 }, { name: "Claude 4.6 Sonnet", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2036 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }] },
          { level: 5, goal: 1000000, aiPredictions: [{ name: "Grok 4.20", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2039 }, { name: "GPT-5.4 Thinking Mini", year: 2041 }] },
          { level: 6, goal: 10000000, aiPredictions: [{ name: "Grok 4.20", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2039 }, { name: "Gemini 3.1 Pro Preview", year: 2048 }, { name: "GPT-5.4 Thinking Mini", year: 2050 }] },
          { level: 7, goal: 1000000000, aiPredictions: [{ name: "Grok 4.20", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2047 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2065 }] },
        ],
        history: [
          {
            value: 6100,
            details: ["An Endres Lab team at the Caltech, led by Professor Manuel Endres (2025)"]
          }
        ],
      },
      {
        id: "qc-2",
        title: "Two-Qubit Gate Fidelity",
        currentValue: 99.99,
        baseValue: 99.9,
        unit: "%",
        levels: [
          { level: 1, goal: 99.999 },
          { level: 2, goal: 99.9999 },
          { level: 3, goal: 99.99999 },
          { level: 4, goal: 99.999999 },
          { level: 5, goal: 99.9999999 },
          { level: 6, goal: 99.99999999 },
          { level: 7, goal: 99.999999999 },
        ],
        history: [{ value: 99.99 }],
      },
      {
        id: "qc-3",
        title: "Quantum Volume",
        currentValue: 33554432,
        baseValue: 16777216, // 2^24
        unit: "",
        levels: [
          { level: 1, goal: 1073741824, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2026 }, { name: "Claude 4.6 Sonnet", year: 2027 }, { name: "Grok 4.20", year: 2027 }, { name: "GPT-5.4 Thinking Mini", year: 2028 }] }, // 2^30
          { level: 2, goal: 1099511627776, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "Grok 4.20", year: 2029 }, { name: "Claude 4.6 Sonnet", year: 2030 }, { name: "GPT-5.4 Thinking Mini", year: 2033 }] }, // 2^40
          { level: 3, goal: 1125899906842624, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2030 }, { name: "Grok 4.20", year: 2031 }, { name: "Claude 4.6 Sonnet", year: 2033 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }] }, // 2^50
          { level: 4, goal: 18446744073709551616, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "Grok 4.20", year: 2033 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "GPT-5.4 Thinking Mini", year: 2045 }] }, // 2^64
          { level: 5, goal: 37778931862957161709568, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2033 }, { name: "Grok 4.20", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2041 }, { name: "GPT-5.4 Thinking Mini", year: 2050 }] }, // 2^75
          { level: 6, goal: 38685626227668133590597632, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2034 }, { name: "Grok 4.20", year: 2037 }, { name: "Claude 4.6 Sonnet", year: 2044 }, { name: "GPT-5.4 Thinking Mini", year: 2055 }] }, // 2^85
          { level: 7, goal: 1267650600228229401496703205376, aiPredictions: [{ name: "Gemini 3.1 Pro Preview", year: 2035 }, { name: "Grok 4.20", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2050 }, { name: "GPT-5.4 Thinking Mini", year: 2063 }] }, // 2^100
        ],
        history: [
          {
            value: 33554432,
            details: [
              "The company Quantinuum on its System Model H2 (2025)"
            ]
          }
        ],
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
          { level: 1, goal: 30, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2028 }, { name: "Grok 4.20", year: 2031 }, { name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2035 }] },
          { level: 2, goal: 50, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2032 }, { name: "Grok 4.20", year: 2036 }, { name: "Gemini 3.1 Pro Preview", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2040 }] },
          { level: 3, goal: 100, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2040 }, { name: "Grok 4.20", year: 2040 }, { name: "Gemini 3.1 Pro Preview", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2048 }] },
          { level: 4, goal: 500, aiPredictions: [{ name: "Grok 4.20", year: 2050 }, { name: "Claude 4.6 Sonnet", year: 2063 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2068 }] },
          { level: 5, goal: 1000, aiPredictions: [{ name: "Grok 4.20", year: 2065 }, { name: "Claude 4.6 Sonnet", year: 2075 }, { name: "GPT-5.4 Thinking Mini", year: 2080 }, { name: "Gemini 3.1 Pro Preview", year: 2085 }] },
          { level: 6, goal: 10000, aiPredictions: [{ name: "Grok 4.20", year: 2085 }, { name: "Claude 4.6 Sonnet", year: 2100 }, { name: "Gemini 3.1 Pro Preview", year: 2130 }, { name: "GPT-5.4 Thinking Mini", year: 2145 }] },
          { level: 7, goal: 1000000, aiPredictions: [{ name: "Grok 4.20", year: 2100 }, { name: "Claude 4.6 Sonnet", year: 2165 }, { name: "Gemini 3.1 Pro Preview", year: 2250 }, { name: "GPT-5.4 Thinking Mini", year: 2280 }] },
        ],
        history: [
          {
            value: 20,
            details: ["Jan 26, 2024: 20 people (11 ISS, 3 Tiangong, 6 Suborbital)"]
          }
        ],
      },
      {
        id: "space-2",
        title: "Payload Mass to LEO (Single Launch)",
        currentValue: 95,
        baseValue: 0,
        unit: "metric tonnes",
        levels: [
          { level: 1, goal: 500, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2034 }, { name: "Claude 4.6 Sonnet", year: 2035 }, { name: "Grok 4.20", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2045 }] },
          { level: 2, goal: 1000, aiPredictions: [{ name: "GPT-5.4 Thinking Mini", year: 2041 }, { name: "Claude 4.6 Sonnet", year: 2042 }, { name: "Grok 4.20", year: 2045 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }] },
          { level: 3, goal: 5000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2054 }, { name: "GPT-5.4 Thinking Mini", year: 2058 }, { name: "Grok 4.20", year: 2065 }, { name: "Gemini 3.1 Pro Preview", year: 2110 }] },
          { level: 4, goal: 10000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2063 }, { name: "GPT-5.4 Thinking Mini", year: 2067 }, { name: "Grok 4.20", year: 2085 }, { name: "Gemini 3.1 Pro Preview", year: 2140 }] },
          { level: 5, goal: 50000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2079 }, { name: "GPT-5.4 Thinking Mini", year: 2092 }, { name: "Grok 4.20", year: 2115 }, { name: "Gemini 3.1 Pro Preview", year: 2200 }] },
          { level: 6, goal: 100000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2091 }, { name: "GPT-5.4 Thinking Mini", year: 2115 }, { name: "Grok 4.20", year: 2145 }, { name: "Gemini 3.1 Pro Preview", year: 2250 }] },
          { level: 7, goal: 1000000, aiPredictions: [{ name: "Claude 4.6 Sonnet", year: 2133 }, { name: "GPT-5.4 Thinking Mini", year: 2155 }, { name: "Grok 4.20", year: 2200 }, { name: "Gemini 3.1 Pro Preview", year: 2350 }] },
        ],
        history: [{ value: 95, details: ["NASA’s Space Launch System (SLS) Block 1 (2022)"] }],
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
        title: "Weight of the lightest standalone 6DOF VR headset commercially available",
        currentValue: 140,
        baseValue: 150,
        unit: "grams",
        isLowerBetter: true,
        levels: [
          { level: 1, goal: 130, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2028 }, { name: "Claude 4.6 Sonnet", year: 2030 }] },
          { level: 2, goal: 115, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "GPT-5.4 Thinking Mini", year: 2029 }, { name: "Gemini 3.1 Pro Preview", year: 2030 }, { name: "Claude 4.6 Sonnet", year: 2032 }] },
          { level: 3, goal: 100, aiPredictions: [{ name: "Grok 4.20", year: 2027 }, { name: "GPT-5.4 Thinking Mini", year: 2030 }, { name: "Gemini 3.1 Pro Preview", year: 2033 }, { name: "Claude 4.6 Sonnet", year: 2034 }] },
          { level: 4, goal: 75, aiPredictions: [{ name: "Grok 4.20", year: 2029 }, { name: "GPT-5.4 Thinking Mini", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2037 }, { name: "Claude 4.6 Sonnet", year: 2038 }] },
          { level: 5, goal: 50, aiPredictions: [{ name: "Grok 4.20", year: 2031 }, { name: "GPT-5.4 Thinking Mini", year: 2037 }, { name: "Gemini 3.1 Pro Preview", year: 2042 }, { name: "Claude 4.6 Sonnet", year: 2042 }] },
          { level: 6, goal: 25, aiPredictions: [{ name: "Grok 4.20", year: 2034 }, { name: "GPT-5.4 Thinking Mini", year: 2042 }, { name: "Gemini 3.1 Pro Preview", year: 2049 }, { name: "Claude 4.6 Sonnet", year: 2049 }] },
          { level: 7, goal: 15, aiPredictions: [{ name: "Grok 4.20", year: 2038 }, { name: "GPT-5.4 Thinking Mini", year: 2047 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }, { name: "Claude 4.6 Sonnet", year: 2056 }] },
        ],
        history: [
          {
            value: 140,
            details: ["Pimax Dream Air SE from Pimax (2025)"]
          }
        ]
      },
      {
        id: "vr-2",
        title: "Maximum Horizontal Field of View (FOV) in a consumer headset",
        currentValue: 160,
        baseValue: 150,
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
        history: [{ value: 160, details: ["Pimax 8KX (OBS: it had significant trade-offs such as edge distortion, lower effective peripheral resolution and higher GPU demands)"] }]
      },
      {
        id: "vr-3",
        title: "Longest continuous session in a Full-Dive environment",
        currentValue: 0,
        baseValue: 0,
        unit: "hours",
        levels: [
          { level: 1, goal: 5 / 3600, label: "5 seconds", aiPredictions: [{ name: "Grok 4.20", year: 2035 }, { name: "GPT-5.4 Thinking Mini", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2041 }] },
          { level: 2, goal: 5 / 60, label: "5 minutes", aiPredictions: [{ name: "Grok 4.20", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2043 }, { name: "GPT-5.4 Thinking Mini", year: 2045 }, { name: "Claude 4.6 Sonnet", year: 2048 }] },
          { level: 3, goal: 5, label: "5 hours", aiPredictions: [{ name: "Grok 4.20", year: 2042 }, { name: "Gemini 3.1 Pro Preview", year: 2050 }, { name: "GPT-5.4 Thinking Mini", year: 2055 }, { name: "Claude 4.6 Sonnet", year: 2057 }] },
          { level: 4, goal: 24, label: "1 day", aiPredictions: [{ name: "Grok 4.20", year: 2048 }, { name: "Gemini 3.1 Pro Preview", year: 2058 }, { name: "Claude 4.6 Sonnet", year: 2065 }, { name: "GPT-5.4 Thinking Mini", year: 2065 }] },
          { level: 5, goal: 120, label: "5 days", aiPredictions: [{ name: "Grok 4.20", year: 2055 }, { name: "Gemini 3.1 Pro Preview", year: 2068 }, { name: "Claude 4.6 Sonnet", year: 2073 }, { name: "GPT-5.4 Thinking Mini", year: 2078 }] },
          { level: 6, goal: 1200, label: "50 days", aiPredictions: [{ name: "Grok 4.20", year: 2065 }, { name: "Gemini 3.1 Pro Preview", year: 2085 }, { name: "Claude 4.6 Sonnet", year: 2085 }, { name: "GPT-5.4 Thinking Mini", year: 2095 }] },
          { level: 7, goal: 8760, label: "365 days", aiPredictions: [{ name: "Grok 4.20", year: 2075 }, { name: "Claude 4.6 Sonnet", year: 2099 }, { name: "Gemini 3.1 Pro Preview", year: 2110 }, { name: "GPT-5.4 Thinking Mini", year: 2125 }] },
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
          { level: 1, goal: 2, aiPredictions: [{ name: "Grok 4.20", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2038 }, { name: "Claude 4.6 Sonnet", year: 2047 }, { name: "GPT-5.4 Thinking Mini", year: 2056 }] },
          { level: 2, goal: 60, aiPredictions: [{ name: "Grok 4.20", year: 2036 }, { name: "Gemini 3.1 Pro Preview", year: 2042 }, { name: "Claude 4.6 Sonnet", year: 2051 }, { name: "GPT-5.4 Thinking Mini", year: 2060 }] },
          { level: 3, goal: 1800, label: "1.8K", aiPredictions: [{ name: "Grok 4.20", year: 2037 }, { name: "Gemini 3.1 Pro Preview", year: 2048 }, { name: "Claude 4.6 Sonnet", year: 2055 }, { name: "GPT-5.4 Thinking Mini", year: 2064 }] },
          { level: 4, goal: 54000, label: "54K", aiPredictions: [{ name: "Grok 4.20", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2054 }, { name: "Claude 4.6 Sonnet", year: 2060 }, { name: "GPT-5.4 Thinking Mini", year: 2069 }] },
          { level: 5, goal: 1600000, label: "1.6M", aiPredictions: [{ name: "Grok 4.20", year: 2040 }, { name: "Gemini 3.1 Pro Preview", year: 2059 }, { name: "Claude 4.6 Sonnet", year: 2066 }, { name: "GPT-5.4 Thinking Mini", year: 2075 }] },
          { level: 6, goal: 48000000, label: "48M", aiPredictions: [{ name: "Grok 4.20", year: 2043 }, { name: "Gemini 3.1 Pro Preview", year: 2065 }, { name: "Claude 4.6 Sonnet", year: 2073 }, { name: "GPT-5.4 Thinking Mini", year: 2084 }] },
          { level: 7, goal: 1440000000, label: "1.44B", aiPredictions: [{ name: "Grok 4.20", year: 2055 }, { name: "Gemini 3.1 Pro Preview", year: 2073 }, { name: "Claude 4.6 Sonnet", year: 2082 }, { name: "GPT-5.4 Thinking Mini", year: 2101 }] },
        ],
        history: [{ value: 0 }]
      }
    ]
  },
];
