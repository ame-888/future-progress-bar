export type MeasurementHistory = {
  value?: number;
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
  lastUpdated?: string;
  researchCutoff: string;
  observationDate?: string;
  dataPeriod?: string;
  geographicScope?: string;
  denominator?: { description: string; value?: number; period?: string; geography?: string };
  evidence: import("@/lib/measurement-types").EvidenceReference[];

  title: string;
  question: string;
  definition: string;
  currentValue?: number;
  /** Epistemic state of the current result; non-numeric states never complete levels. */
  valueStatus?: "zero" | "verified" | "estimate" | "lower-bound" | "unknown" | "not-applicable" | "no-verified-result";
  /** Concise value override retaining qualifiers and intentional rounding. */
  displayValue?: string;
  baseValue?: number; // Starting value before level 1
  unit: string;
  isLowerBetter?: boolean; // If true, reaching a lower value means progress
  temporalType?: "record" | "current";
  indicatorType?: "capability" | "adoption" | "policy" | "market" | "outcome" | "proxy";
  methodNote?: string;
  levels: MeasurementLevel[];
  history: MeasurementHistory[];
};

export type SubDomainData = {
  id: string;
  northStar?: import("@/lib/measurement-types").NorthStarDefinition;
  name: string;
  description?: string;
  measurements: Measurement[];
};

export type MainDomainData = {
  id: string;
  name: string;
  subdomains: SubDomainData[];
};

const RAW_MAIN_DOMAINS = [
  {
    id: "automation",
    name: "AUTOMATION",
    subdomains: [
      {
        id: "ai",
        name: "AI",
        northStar: {
          title: "10 PFLOP/s Dense FP32 Hardware Cost",
          lastUpdated: "2026-08-10",
        },
        description:
          "Stands for Artificial Intelligence, focusing on creating systems capable of human-level or superhuman reasoning, creativity, and problem-solving.",
        measurements: [
          {
            id: "ai-millennium-problems",
            title: "Millennium Prize Problems Solved",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "problems",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                label: "Solves 1 problem",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2027 },
                  { name: "Claude 4.6 Sonnet", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "GPT-5.4 Thinking Mini", year: 2033 },
                ],
              },
              {
                level: 2,
                goal: 2,
                label: "Solves 2 problems",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2029 },
                  { name: "Claude 4.6 Sonnet", year: 2034 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2036 },
                ],
              },
              {
                level: 3,
                goal: 3,
                label: "Solves 3 problems",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2036 },
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2039 },
                ],
              },
              {
                level: 4,
                goal: 4,
                label: "Solves 4 problems",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                ],
              },
              {
                level: 5,
                goal: 5,
                label: "Solves 5 problems",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Gemini 3.1 Pro Preview", year: 2043 },
                  { name: "GPT-5.4 Thinking Mini", year: 2045 },
                ],
              },
              {
                level: 6,
                goal: 6,
                label: "Solves all 6 problems",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                ],
              },
              {
                level: 7,
                goal: 7,
                label:
                  "Able to create a brand new Millenium Prize level problem",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                  { name: "GPT-5.4 Thinking Mini", year: 2060 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 7 = 0%. One problem was solved historically, but not primarily by AI."] }],
          },
          {
            id: "ai-exclusively-professors",
            title:
              "Universities around the world with exclusively AI professors",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "universities",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Gemini 3.1 Pro", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2041 },
                ],
              },
              {
                level: 2,
                goal: 7,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2031 },
                  { name: "Grok 4.20", year: 2034 },
                  { name: "Gemini 3.1 Pro", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                ],
              },
              {
                level: 3,
                goal: 30,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2034 },
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Gemini 3.1 Pro", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                ],
              },
              {
                level: 4,
                goal: 150,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Grok 4.20", year: 2041 },
                  { name: "Gemini 3.1 Pro", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                ],
              },
              {
                level: 5,
                goal: 750,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Grok 4.20", year: 2046 },
                  { name: "Gemini 3.1 Pro", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2080 },
                ],
              },
              {
                level: 6,
                goal: 3333,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2046 },
                  { name: "Grok 4.20", year: 2051 },
                  { name: "Gemini 3.1 Pro", year: 2090 },
                  { name: "GPT-5.4 Thinking Mini", year: 2094 },
                ],
              },
              {
                level: 7,
                goal: 20000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2115 },
                  { name: "Gemini 3.1 Pro", year: 2120 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 universities."] }],
          },
          {
            id: "ai-led-companies",
            title:
              "Number of companies primarily managed by AI among the top 100",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "companies",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Gemini 3.1 Pro", year: 2039 },
                ],
              },
              {
                level: 2,
                goal: 3,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro", year: 2043 },
                  { name: "GPT-5.4 Thinking Mini", year: 2044 },
                ],
              },
              {
                level: 3,
                goal: 8,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Gemini 3.1 Pro", year: 2046 },
                  { name: "GPT-5.4 Thinking Mini", year: 2051 },
                ],
              },
              {
                level: 4,
                goal: 15,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro", year: 2049 },
                  { name: "GPT-5.4 Thinking Mini", year: 2057 },
                ],
              },
              {
                level: 5,
                goal: 33,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Gemini 3.1 Pro", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2065 },
                ],
              },
              {
                level: 6,
                goal: 66,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2043 },
                  { name: "Claude 4.6 Sonnet", year: 2053 },
                  { name: "Gemini 3.1 Pro", year: 2062 },
                  { name: "GPT-5.4 Thinking Mini", year: 2074 },
                ],
              },
              {
                level: 7,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2047 },
                  { name: "Claude 4.6 Sonnet", year: 2060 },
                  { name: "Gemini 3.1 Pro", year: 2075 },
                  { name: "GPT-5.4 Thinking Mini", year: 2083 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 100 = 0%."] }],
          },
          {
            id: "ai-led-countries-1",
            title: "Number of Countries primarily led by AI",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Grok 4.20", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2057 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                ],
              },
              {
                level: 3,
                goal: 15,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2057 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                  { name: "Grok 4.20", year: 2070 },
                  { name: "Gemini 3.1 Pro Preview", year: 2072 },
                ],
              },
              {
                level: 4,
                goal: 30,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "GPT-5.4 Thinking Mini", year: 2080 },
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                ],
              },
              {
                level: 5,
                goal: 75,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2071 },
                  { name: "GPT-5.4 Thinking Mini", year: 2096 },
                  { name: "Grok 4.20", year: 2105 },
                  { name: "Gemini 3.1 Pro Preview", year: 2105 },
                ],
              },
              {
                level: 6,
                goal: 130,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2079 },
                  { name: "GPT-5.4 Thinking Mini", year: 2112 },
                  { name: "Gemini 3.1 Pro Preview", year: 2130 },
                  { name: "Grok 4.20", year: 2135 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2091 },
                  { name: "GPT-5.4 Thinking Mini", year: 2140 },
                  { name: "Grok 4.20", year: 2170 },
                  { name: "Gemini 3.1 Pro Preview", year: 2180 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 195 = 0%."] }],
          },
        ],
      },
      {
        id: "robotics",
        northStar: {
          title: "Taxels (Tactile Pixels) per 5-Fingered Robotic Hand",
          lastUpdated: "2026-04-21",
        },
        name: "ROBOTICS",
        description:
          "The engineering of machines capable of carrying out complex physical tasks autonomously or semi-autonomously in unstructured environments.",
        measurements: [
          {
            id: "robotics-1",
            title: "Number of Humanoid General-purpose Robots deployed",
            currentValue: 1500,
            valueStatus: "estimate",
            baseValue: 0,
            unit: "robots",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 30000,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2026 },
                  { name: "Grok 4.20", year: 2026 },
                  { name: "Gemini 3.1 Pro Preview", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2027 },
                ],
              },
              {
                level: 2,
                goal: 300000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "Gemini 3.1 Pro Preview", year: 2029 },
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "GPT-5.4 Thinking Mini", year: 2030 },
                ],
              },
              {
                level: 3,
                goal: 3000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2034 },
                ],
              },
              {
                level: 4,
                goal: 30000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                  { name: "Grok 4.20", year: 2036 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                ],
              },
              {
                level: 5,
                goal: 300000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2047 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                ],
              },
              {
                level: 6,
                goal: 3000000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2058 },
                  { name: "Grok 4.20", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2062 },
                ],
              },
              {
                level: 7,
                goal: 30000000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                  { name: "Grok 4.20", year: 2075 },
                  { name: "GPT-5.4 Thinking Mini", year: 2090 },
                ],
              },
            ],
            history: [{ value: 1500, details: ["Estimate: 1,500 deployed qualifying general-purpose humanoids; plausible range 1,000–3,000. Excludes announced production totals."] }],
          },
          {
            id: "robotics-2",
            title:
              "Global Share of Households with a General-Purpose Humanoid Robot Assigned for Routine Household Use",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "%",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                  { name: "Grok 4.20", year: 2033 },
                  { name: "GPT-5.4 Thinking Mini", year: 2034 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                ],
              },
              {
                level: 2,
                goal: 3,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                  { name: "Grok 4.20", year: 2036 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2043 },
                ],
              },
              {
                level: 3,
                goal: 7,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "Grok 4.20", year: 2039 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                ],
              },
              {
                level: 4,
                goal: 15,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Grok 4.20", year: 2042 },
                  { name: "GPT-5.4 Thinking Mini", year: 2047 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                ],
              },
              {
                level: 5,
                goal: 30,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2046 },
                  { name: "Gemini 3.1 Pro Preview", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2055 },
                ],
              },
              {
                level: 6,
                goal: 50,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "Gemini 3.1 Pro Preview", year: 2059 },
                  { name: "GPT-5.4 Thinking Mini", year: 2063 },
                ],
              },
              {
                level: 7,
                goal: 75,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "Claude 4.6 Sonnet", year: 2059 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2075 },
                ],
              },
            ],
            methodNote: "Denominator: all households worldwide. A household counts once when at least one qualifying humanoid general-purpose robot is normally resident at or assigned to it for routine household use. Hotel/service robots, community or shared public robots, occasional rentals, one-time access, and workplace encounters are excluded.",
            history: [{ value: 0, details: ["0%; no qualifying household adoption identified at the 2026-08-10 cutoff."] }],
          },
          {
            id: "robotics-police-countries",
            title: "Countries with Humanoid Robots in Ordinary Independent Police or Security Duty",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            methodNote: "Count a sovereign country only when a general-purpose humanoid robot performs ordinary operational police/security service with lawful independent authority to detain without human approval of each detention. Surveillance, information, telepresence, bomb-disposal, traffic-direction, demonstration, research-pilot, non-detaining patrol, and human-decided detention systems are excluded.",
            levels: [
              { level: 1, goal: 1 },
              { level: 2, goal: 3 },
              { level: 3, goal: 10 },
              { level: 4, goal: 30 },
              { level: 5, goal: 75 },
              { level: 6, goal: 150 },
              { level: 7, goal: 195 }
            ],
            history: [{ value: 0, details: ["No qualifying country exists under the strict independent-authority definition at the 2026-08-10 research cutoff."] }],
          },
          {
            id: "robotics-3",
            title: "Global Share of Fully Autonomous Robotic Surgeries",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "%",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 0.01,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2033 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Grok 4.20", year: 2039 },
                ],
              },
              {
                level: 2,
                goal: 0.1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "Grok 4.20", year: 2044 },
                  { name: "GPT-5.4 Thinking Mini", year: 2046 },
                ],
              },
              {
                level: 3,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "Grok 4.20", year: 2052 },
                  { name: "GPT-5.4 Thinking Mini", year: 2057 },
                ],
              },
              {
                level: 4,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                ],
              },
              {
                level: 5,
                goal: 33,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2055 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2084 },
                  { name: "Grok 4.20", year: 2085 },
                ],
              },
              {
                level: 6,
                goal: 66,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                  { name: "GPT-5.4 Thinking Mini", year: 2096 },
                  { name: "Grok 4.20", year: 2105 },
                ],
              },
              {
                level: 7,
                goal: 99,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2078 },
                  { name: "GPT-5.4 Thinking Mini", year: 2120 },
                  { name: "Gemini 3.1 Pro Preview", year: 2125 },
                  { name: "Grok 4.20", year: 2135 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0%; denominator ≈300 million major surgeries/year."] }],
          },
        ],
      },
      {
        id: "self-driving-car",
        northStar: {
          title:
            "Global Share of distance traveled by Self-Driving Vehicles (LVL 4 and LVL 5)",
          lastUpdated: "2026-04-21",
        },
        name: "SELF-DRIVING CAR",
        description:
          "Vehicles equipped with sensors and AI that can navigate and operate safely without human intervention across all driving conditions.",
        measurements: [
          {
            id: "self-driving-car-2",
            title:
              "Number of Countries where Self-Driving Cars are partially allowed",
            currentValue: 4,
            valueStatus: "verified",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2026 },
                  { name: "GPT-5.4 Thinking Mini", year: 2026 },
                  { name: "Grok 4.20", year: 2026 },
                  { name: "Gemini 3.1 Pro Preview", year: 2027 },
                ],
              },
              {
                level: 2,
                goal: 15,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "GPT-5.4 Thinking Mini", year: 2029 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                ],
              },
              {
                level: 3,
                goal: 30,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                ],
              },
              {
                level: 4,
                goal: 60,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "GPT-5.4 Thinking Mini", year: 2036 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                ],
              },
              {
                level: 5,
                goal: 100,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2040 },
                  { name: "Grok 4.20", year: 2042 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                ],
              },
              {
                level: 6,
                goal: 140,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2044 },
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2052 },
                  { name: "Claude 4.6 Sonnet", year: 2065 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                ],
              },
            ],
            history: [{ value: 4, details: ["Verified ordinary driverless L4/L5 service in at least one city: United States, China, United Arab Emirates, and Japan (2.05% of 195). This includes L4, not universal L5."] }],
          },
          {
            id: "self-driving-car-3",
            title:
              "Number of Countries where Self-Driving Cars are fully allowed",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 5,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "Gemini 3.1 Pro Preview", year: 2029 },
                  { name: "GPT-5.4 Thinking Mini", year: 2031 },
                ],
              },
              {
                level: 2,
                goal: 15,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                ],
              },
              {
                level: 3,
                goal: 30,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2039 },
                  { name: "GPT-5.4 Thinking Mini", year: 2046 },
                ],
              },
              {
                level: 4,
                goal: 60,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2057 },
                ],
              },
              {
                level: 5,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2049 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                  { name: "GPT-5.4 Thinking Mini", year: 2069 },
                ],
              },
              {
                level: 6,
                goal: 140,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2057 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2083 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "Claude 4.6 Sonnet", year: 2071 },
                  { name: "Gemini 3.1 Pro Preview", year: 2075 },
                  { name: "GPT-5.4 Thinking Mini", year: 2106 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 195 = 0%."] }],
          },
          {
            id: "self-driving-car-1",
            title: "Countries where human driving is banned",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2039 },
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "Grok 4.20", year: 2055 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                  { name: "Grok 4.20", year: 2060 },
                ],
              },
              {
                level: 3,
                goal: 15,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                  { name: "Grok 4.20", year: 2068 },
                  { name: "Gemini 3.1 Pro Preview", year: 2075 },
                ],
              },
              {
                level: 4,
                goal: 30,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "GPT-5.4 Thinking Mini", year: 2067 },
                  { name: "Grok 4.20", year: 2075 },
                  { name: "Gemini 3.1 Pro Preview", year: 2090 },
                ],
              },
              {
                level: 5,
                goal: 75,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2080 },
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Gemini 3.1 Pro Preview", year: 2115 },
                ],
              },
              {
                level: 6,
                goal: 130,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2081 },
                  { name: "GPT-5.4 Thinking Mini", year: 2092 },
                  { name: "Grok 4.20", year: 2095 },
                  { name: "Gemini 3.1 Pro Preview", year: 2140 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2098 },
                  { name: "GPT-5.4 Thinking Mini", year: 2110 },
                  { name: "Grok 4.20", year: 2115 },
                  { name: "Gemini 3.1 Pro Preview", year: 2175 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 countries."] }],
          },
          {
            id: "self-driving-car-4",
            title: "Number of Level 5 Autonomy Vehicles deployed worldwide",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "vehicles",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 15,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                ],
              },
              {
                level: 2,
                goal: 300,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                  { name: "GPT-5.4 Thinking Mini", year: 2036 },
                ],
              },
              {
                level: 3,
                goal: 6000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2041 },
                ],
              },
              {
                level: 4,
                goal: 120000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2040 },
                  { name: "Gemini 3.1 Pro Preview", year: 2041 },
                  { name: "GPT-5.4 Thinking Mini", year: 2047 },
                ],
              },
              {
                level: 5,
                goal: 2400000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2043 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2054 },
                ],
              },
              {
                level: 6,
                goal: 48000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2044 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "GPT-5.4 Thinking Mini", year: 2063 },
                ],
              },
              {
                level: 7,
                goal: 960000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2052 },
                  { name: "Claude 4.6 Sonnet", year: 2057 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2078 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 active ordinary-use Level 5 cars."] }],
          },
        ],
      },
    ],
  },
  {
    id: "civilization",
    name: "CIVILIZATION",
    subdomains: [
      {
        id: "lev",
        name: "LEV",
        northStar: {
          title: "Annual Increase in Lifespan & Healthspan",
          lastUpdated: "2026-04-21",
        },
        description:
          "Stands for Longevity Escape Velocity, the point at which life expectancy increases longer than the time that is passing, effectively meaning humans can theoretically live indefinitely.",
        measurements: [
          {
            id: "lev-1",
            title: "Average lifespan in the world",
            currentValue: 73.66,
            valueStatus: "estimate",
            displayValue: "73.7",
            baseValue: 70,
            unit: "years",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "outcome",
            levels: [
              {
                level: 1,
                goal: 80,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Grok 4.20", year: 2068 },
                  { name: "Gemini 3.1 Pro Preview", year: 2073 },
                  { name: "GPT-5.4 Thinking Mini", year: 2082 },
                ],
              },
              {
                level: 2,
                goal: 90,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2090 },
                  { name: "Grok 4.20", year: 2105 },
                  { name: "Gemini 3.1 Pro Preview", year: 2115 },
                  { name: "GPT-5.4 Thinking Mini", year: 2168 },
                ],
              },
              {
                level: 3,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2135 },
                  { name: "Claude 4.6 Sonnet", year: 2160 },
                  { name: "Gemini 3.1 Pro Preview", year: 2160 },
                  { name: "GPT-5.4 Thinking Mini", year: 2258 },
                ],
              },
              {
                level: 4,
                goal: 120,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2185 },
                  { name: "Gemini 3.1 Pro Preview", year: 2220 },
                  { name: "Claude 4.6 Sonnet", year: 2260 },
                  { name: "GPT-5.4 Thinking Mini", year: 2428 },
                ],
              },
              {
                level: 5,
                goal: 150,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2260 },
                  { name: "Gemini 3.1 Pro Preview", year: 2300 },
                  { name: "Claude 4.6 Sonnet", year: 2380 },
                  { name: "GPT-5.4 Thinking Mini", year: 2708 },
                ],
              },
              {
                level: 6,
                goal: 200,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2450 },
                  { name: "Gemini 3.1 Pro Preview", year: 2450 },
                  { name: "Claude 4.6 Sonnet", year: 2600 },
                  { name: "GPT-5.4 Thinking Mini", year: 3208 },
                ],
              },
              {
                level: 7,
                goal: 500,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2900 },
                  { name: "Grok 4.20", year: 2950 },
                  { name: "Claude 4.6 Sonnet", year: 4500 },
                  { name: "GPT-5.4 Thinking Mini", year: 6208 },
                ],
              },
            ],
            history: [{ value: 73.66, details: ["Model estimate for 2026; displayed as 73.7 years."] }],
          },
          {
            id: "lev-2",
            title: "Top 1 average lifespan in the world",
            currentValue: 86.73,
            valueStatus: "estimate",
            displayValue: "86.7",
            baseValue: 80,
            unit: "years",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "outcome",
            levels: [
              {
                level: 1,
                goal: 90,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Grok 4.20", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2039 },
                ],
              },
              {
                level: 2,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "Claude 4.6 Sonnet", year: 2072 },
                  { name: "GPT-5.4 Thinking Mini", year: 2079 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                ],
              },
              {
                level: 3,
                goal: 120,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2078 },
                  { name: "Claude 4.6 Sonnet", year: 2108 },
                  { name: "Gemini 3.1 Pro Preview", year: 2130 },
                  { name: "GPT-5.4 Thinking Mini", year: 2159 },
                ],
              },
              {
                level: 4,
                goal: 150,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2105 },
                  { name: "Claude 4.6 Sonnet", year: 2155 },
                  { name: "Gemini 3.1 Pro Preview", year: 2175 },
                  { name: "GPT-5.4 Thinking Mini", year: 2279 },
                ],
              },
              {
                level: 5,
                goal: 200,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2145 },
                  { name: "Claude 4.6 Sonnet", year: 2218 },
                  { name: "Gemini 3.1 Pro Preview", year: 2225 },
                  { name: "GPT-5.4 Thinking Mini", year: 2479 },
                ],
              },
              {
                level: 6,
                goal: 500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2270 },
                  { name: "Claude 4.6 Sonnet", year: 2390 },
                  { name: "Gemini 3.1 Pro Preview", year: 2400 },
                  { name: "GPT-5.4 Thinking Mini", year: 2679 },
                ],
              },
              {
                level: 7,
                goal: 1000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2480 },
                  { name: "Claude 4.6 Sonnet", year: 2620 },
                  { name: "Gemini 3.1 Pro Preview", year: 2800 },
                  { name: "GPT-5.4 Thinking Mini", year: 5679 },
                ],
              },
            ],
            history: [{ value: 86.73, details: ["Monaco; 2026 model estimate, displayed as 86.7 years."] }],
          },
          {
            id: "lev-3",
            title: "Oldest Verified Human Ever",
            currentValue: 122.45,
            valueStatus: "verified",
            displayValue: "122 years, 164 days",
            baseValue: 120,
            unit: "years",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "outcome",
            levels: [
              {
                level: 1,
                goal: 125,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2087 },
                ],
              },
              {
                level: 2,
                goal: 130,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "Grok 4.20", year: 2058 },
                  { name: "Claude 4.6 Sonnet", year: 2115 },
                  { name: "GPT-5.4 Thinking Mini", year: 2164 },
                ],
              },
              {
                level: 3,
                goal: 140,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2075 },
                  { name: "Gemini 3.1 Pro Preview", year: 2110 },
                  { name: "Claude 4.6 Sonnet", year: 2240 },
                  { name: "GPT-5.4 Thinking Mini", year: 2318 },
                ],
              },
              {
                level: 4,
                goal: 150,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2095 },
                  { name: "Gemini 3.1 Pro Preview", year: 2120 },
                  { name: "Claude 4.6 Sonnet", year: 2380 },
                  { name: "GPT-5.4 Thinking Mini", year: 2560 },
                ],
              },
              {
                level: 5,
                goal: 200,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2150 },
                  { name: "Gemini 3.1 Pro Preview", year: 2170 },
                  { name: "Claude 4.6 Sonnet", year: 2600 },
                  { name: "GPT-5.4 Thinking Mini", year: 4200 },
                ],
              },
              {
                level: 6,
                goal: 500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2280 },
                  { name: "Gemini 3.1 Pro Preview", year: 2470 },
                  { name: "Claude 4.6 Sonnet", year: 4000 },
                  { name: "GPT-5.4 Thinking Mini", year: 13000 },
                ],
              },
              {
                level: 7,
                goal: 1000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2450 },
                  { name: "Gemini 3.1 Pro Preview", year: 2970 },
                  { name: "Claude 4.6 Sonnet", year: 8500 },
                  { name: "GPT-5.4 Thinking Mini", year: 30000 },
                ],
              },
            ],
            history: [{ value: 122.45, details: ["Jeanne Louise Calment of France; died 1997-08-04; verified all-time human longevity record of 122 years, 164 days."] }],
          },
          {
            id: "lev-4",
            title: "Verified Minimum Living Supercentenarians Worldwide",
            currentValue: 206,
            valueStatus: "lower-bound",
            displayValue: "≥206",
            baseValue: 200,
            unit: "people",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "outcome",
            levels: [
              {
                level: 1,
                goal: 300,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2027 },
                  { name: "GPT-5.4 Thinking Mini", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2050 },
                ],
              },
              {
                level: 2,
                goal: 3000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2064 },
                  { name: "Claude 4.6 Sonnet", year: 2075 },
                ],
              },
              {
                level: 3,
                goal: 30000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2070 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                  { name: "GPT-5.4 Thinking Mini", year: 2097 },
                  { name: "Claude 4.6 Sonnet", year: 2110 },
                ],
              },
              {
                level: 4,
                goal: 300000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2090 },
                  { name: "Gemini 3.1 Pro Preview", year: 2105 },
                  { name: "GPT-5.4 Thinking Mini", year: 2130 },
                  { name: "Claude 4.6 Sonnet", year: 2160 },
                ],
              },
              {
                level: 5,
                goal: 3000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2120 },
                  { name: "Gemini 3.1 Pro Preview", year: 2122 },
                  { name: "GPT-5.4 Thinking Mini", year: 2163 },
                  { name: "Claude 4.6 Sonnet", year: 2230 },
                ],
              },
              {
                level: 6,
                goal: 30000000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2140 },
                  { name: "Grok 4.20", year: 2150 },
                  { name: "GPT-5.4 Thinking Mini", year: 2197 },
                  { name: "Claude 4.6 Sonnet", year: 2320 },
                ],
              },
              {
                level: 7,
                goal: 300000000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2165 },
                  { name: "Grok 4.20", year: 2180 },
                  { name: "GPT-5.4 Thinking Mini", year: 2230 },
                  { name: "Claude 4.6 Sonnet", year: 2500 },
                ],
              },
            ],
            history: [{ value: 206, details: ["206 GRG-validated living cases at the 2026-08-10 cutoff; this is a verified minimum, not necessarily a complete census of all living supercentenarians."] }],
          },
        ],
      },
      {
        id: "space-exploration",
        name: "SPACE EXPLORATION",
        northStar: {
          title: "Maximum Commercial Efficiency to LEO",
          lastUpdated: "2026-08-10",
        },
        description:
          "The physical exploration of outer space, aiming to establish permanent human presence beyond Earth and utilize extraterrestrial resources.",
        measurements: [
          {
            id: "space-1",
            title: "Maximum Simultaneous Human Population in Space",
            currentValue: 19,
            valueStatus: "verified",
            baseValue: 0,
            unit: "humans",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 30,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                ],
              },
              {
                level: 2,
                goal: 50,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Grok 4.20", year: 2036 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2040 },
                ],
              },
              {
                level: 3,
                goal: 100,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2040 },
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                ],
              },
              {
                level: 4,
                goal: 500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                ],
              },
              {
                level: 5,
                goal: 1000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Claude 4.6 Sonnet", year: 2075 },
                  { name: "GPT-5.4 Thinking Mini", year: 2080 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                ],
              },
              {
                level: 6,
                goal: 10000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Claude 4.6 Sonnet", year: 2100 },
                  { name: "Gemini 3.1 Pro Preview", year: 2130 },
                  { name: "GPT-5.4 Thinking Mini", year: 2145 },
                ],
              },
              {
                level: 7,
                goal: 1000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2100 },
                  { name: "Claude 4.6 Sonnet", year: 2165 },
                  { name: "Gemini 3.1 Pro Preview", year: 2250 },
                  { name: "GPT-5.4 Thinking Mini", year: 2280 },
                ],
              },
            ],
            history: [{ value: 19, details: ["Record set 2024-09-12; humans simultaneously above 100 km altitude."] }],
          },
          {
            id: "space-moon-pop",
            title: "Maximum Simultaneous Human Population on the Moon",
            currentValue: 2,
            valueStatus: "verified",
            baseValue: 0,
            unit: "humans",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 4,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                ],
              },
              {
                level: 2,
                goal: 30,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2036 },
                  { name: "GPT-5.4 Thinking Mini", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                ],
              },
              {
                level: 3,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                ],
              },
              {
                level: 4,
                goal: 500,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2095 },
                ],
              },
              {
                level: 5,
                goal: 1000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "GPT-5.4 Thinking Mini", year: 2075 },
                  { name: "Grok 4.20", year: 2080 },
                  { name: "Gemini 3.1 Pro Preview", year: 2115 },
                ],
              },
              {
                level: 6,
                goal: 10000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2076 },
                  { name: "Grok 4.20", year: 2100 },
                  { name: "GPT-5.4 Thinking Mini", year: 2120 },
                  { name: "Gemini 3.1 Pro Preview", year: 2175 },
                ],
              },
              {
                level: 7,
                goal: 1000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2145 },
                  { name: "Grok 4.20", year: 2200 },
                  { name: "GPT-5.4 Thinking Mini", year: 2300 },
                  { name: "Gemini 3.1 Pro Preview", year: 2350 },
                ],
              },
            ],
            history: [{ value: 2, details: ["Verified record: 2 humans."] }],
          },
          {
            id: "space-mars-pop",
            title: "Maximum Simultaneous Human Population on Mars",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "humans",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 4,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2031 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2042 },
                ],
              },
              {
                level: 2,
                goal: 30,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2036 },
                  { name: "GPT-5.4 Thinking Mini", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2056 },
                ],
              },
              {
                level: 3,
                goal: 100,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2040 },
                  { name: "Grok 4.20", year: 2042 },
                  { name: "GPT-5.4 Thinking Mini", year: 2052 },
                  { name: "Gemini 3.1 Pro Preview", year: 2071 },
                ],
              },
              {
                level: 4,
                goal: 500,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2045 },
                  { name: "Grok 4.20", year: 2050 },
                  { name: "GPT-5.4 Thinking Mini", year: 2061 },
                  { name: "Gemini 3.1 Pro Preview", year: 2088 },
                ],
              },
              {
                level: 5,
                goal: 1000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Grok 4.20", year: 2058 },
                  { name: "GPT-5.4 Thinking Mini", year: 2067 },
                  { name: "Gemini 3.1 Pro Preview", year: 2103 },
                ],
              },
              {
                level: 6,
                goal: 10000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2057 },
                  { name: "Grok 4.20", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2089 },
                  { name: "Gemini 3.1 Pro Preview", year: 2150 },
                ],
              },
              {
                level: 7,
                goal: 1000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2073 },
                  { name: "Grok 4.20", year: 2095 },
                  { name: "GPT-5.4 Thinking Mini", year: 2175 },
                  { name: "Gemini 3.1 Pro Preview", year: 2300 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 humans."] }],
          },
          {
            id: "space-2",
            title: "Net Useful Payload Mass to LEO (Single Launch)",
            currentValue: 79.4,
            valueStatus: "verified",
            baseValue: 0,
            unit: "metric tonnes",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 500,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2034 },
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                ],
              },
              {
                level: 2,
                goal: 1000,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2041 },
                  { name: "Claude 4.6 Sonnet", year: 2042 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                ],
              },
              {
                level: 3,
                goal: 5000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2110 },
                ],
              },
              {
                level: 4,
                goal: 10000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "GPT-5.4 Thinking Mini", year: 2067 },
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Gemini 3.1 Pro Preview", year: 2140 },
                ],
              },
              {
                level: 5,
                goal: 50000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2079 },
                  { name: "GPT-5.4 Thinking Mini", year: 2092 },
                  { name: "Grok 4.20", year: 2115 },
                  { name: "Gemini 3.1 Pro Preview", year: 2200 },
                ],
              },
              {
                level: 6,
                goal: 100000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2091 },
                  { name: "GPT-5.4 Thinking Mini", year: 2115 },
                  { name: "Grok 4.20", year: 2145 },
                  { name: "Gemini 3.1 Pro Preview", year: 2250 },
                ],
              },
              {
                level: 7,
                goal: 1000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2133 },
                  { name: "GPT-5.4 Thinking Mini", year: 2155 },
                  { name: "Grok 4.20", year: 2200 },
                  { name: "Gemini 3.1 Pro Preview", year: 2350 },
                ],
              },
            ],
            history: [{ value: 79.4, details: ["Buran orbiter, 1988-11-15; approximately 251 × 263 km orbit. Actual flown useful payload, not Energia design capability."] }],
            lastUpdated: "2026-08-10",
          },
        ],
      },
    ],
  },
  {
    id: "hardware",
    name: "HARDWARE",
    subdomains: [
      {
        id: "quantum-computing",
        name: "QUANTUM COMPUTING",
        northStar: {
          title: "Maximum Encoded Logical Qubits Used in a Programmable Quantum Computation",
          lastUpdated: "2026-04-21",
        },
        description:
          "A new paradigm of computation utilizing quantum mechanics to solve problems exponentially faster than classical computers, opening doors to advanced materials, chemistry, and cryptography.",
        measurements: [
          {
            id: "qc-gate-model-physical-qubits",
            title: "Maximum Physical Qubits in an Operational Universal Gate-Model Quantum Computer",
            currentValue: 1200,
            displayValue: ">1,200",
            valueStatus: "lower-bound",
            baseValue: 0,
            unit: "physical qubits",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "Largest single operational programmable universal gate-model system. Qubits must be present and usable; coherent modules may count together. Annealers, analogue-only simulators, future announcements, non-operational fabricated qubits, and logical qubits counted again as physical qubits are excluded.",
            levels: [
              { level: 1, goal: 10000 },
              { level: 2, goal: 50000 },
              { level: 3, goal: 100000 },
              { level: 4, goal: 500000 },
              { level: 5, goal: 1000000 },
              { level: 6, goal: 10000000 },
              { level: 7, goal: 1000000000 }
            ],
            history: [{ value: 1200, details: ["Atom Computing AC1000: a neutral-atom universal gate-based machine documented as having more than 1,200 physical qubits."] }],
          },
          {
            id: "qc-system-two-qubit-fidelity",
            title: "Best Processor-Wide Average Two-Qubit Gate Fidelity",
            currentValue: 99.921,
            valueStatus: "verified",
            baseValue: 99.9,
            unit: "%",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "Future Progress Bar requires a programmable universal gate-model processor with at least 50 physical qubits, experimental measurement of normal-operation two-qubit gates, a processor-wide average rather than a best pair, and sufficient benchmarking disclosure. The 50-qubit minimum is a project convention.",
            levels: [
              { level: 1, goal: 99.99 },
              { level: 2, goal: 99.999 },
              { level: 3, goal: 99.9999 },
              { level: 4, goal: 99.99999 },
              { level: 5, goal: 99.999999 },
              { level: 6, goal: 99.9999999 },
              { level: 7, goal: 99.99999999 }
            ],
            history: [{ value: 99.921, details: ["Quantinuum Helios: 98 trapped-ion qubits with average two-qubit infidelity of approximately 7.9 × 10^-4."] }],
          },
          {
            id: "qc-3",
            title: "Quantum Volume",
            currentValue: 33554432,
            valueStatus: "verified",
            baseValue: 16777216, // 2^24
            unit: "",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1073741824,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2027 },
                  { name: "Grok 4.20", year: 2027 },
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                ],
              }, // 2^30
              {
                level: 2,
                goal: 1099511627776,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "Grok 4.20", year: 2029 },
                  { name: "Claude 4.6 Sonnet", year: 2030 },
                  { name: "GPT-5.4 Thinking Mini", year: 2033 },
                ],
              }, // 2^40
              {
                level: 3,
                goal: 1125899906842624,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2030 },
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                ],
              }, // 2^50
              {
                level: 4,
                goal: 18446744073709551616,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2045 },
                ],
              }, // 2^64
              {
                level: 5,
                goal: 37778931862957161709568,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2033 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "GPT-5.4 Thinking Mini", year: 2050 },
                ],
              }, // 2^75
              {
                level: 6,
                goal: 38685626227668133590597632,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "GPT-5.4 Thinking Mini", year: 2055 },
                ],
              }, // 2^85
              {
                level: 7,
                goal: 1267650600228229401496703205376,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2050 },
                  { name: "GPT-5.4 Thinking Mini", year: 2063 },
                ],
              }, // 2^100
            ],
            history: [{ value: 33554432, details: ["Quantinuum H2; 2^25 Quantum Volume at width/depth 25 on 56 physical qubits; verified, vendor-measured."] }],
          },
          {
            id: "qc-4",
            title: "Maximum Circuit Layer Operations Per Second (CLOPS-h)",
            currentValue: 220000,
            valueStatus: "verified",
            baseValue: 200000,
            unit: "CLOPS",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 500000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2027 },
                  { name: "Grok 4.20", year: 2027 },
                  { name: "GPT-5.4 Thinking Mini", year: 2027 },
                ],
              },
              {
                level: 2,
                goal: 5000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2029 },
                  { name: "Claude 4.6 Sonnet", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2030 },
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                ],
              },
              {
                level: 3,
                goal: 50000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                ],
              },
              {
                level: 4,
                goal: 500000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2034 },
                  { name: "Claude 4.6 Sonnet", year: 2036 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2044 },
                ],
              },
              {
                level: 5,
                goal: 5000000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2040 },
                  { name: "Gemini 3.1 Pro Preview", year: 2043 },
                  { name: "GPT-5.4 Thinking Mini", year: 2050 },
                ],
              },
              {
                level: 6,
                goal: 50000000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2041 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro Preview", year: 2048 },
                  { name: "GPT-5.4 Thinking Mini", year: 2057 },
                ],
              },
              {
                level: 7,
                goal: 5000000000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2046 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "Gemini 3.1 Pro Preview", year: 2058 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                ],
              },
            ],
            history: [{ value: 220000, details: ["IBM Eagle r3 (127 physical qubits); M=100, K=10, S=100, D=7; verified, vendor-measured."] }],
          },
        ],
      },
      {
        id: "superconductor",
        name: "SUPERCONDUCTOR",
        northStar: {
          title:
            "Maximum Critical Temperature (Tc) of a Superconductor at Ambient Pressure",
          lastUpdated: "2026-04-21",
        },
        description:
          "Materials that conduct electricity with zero resistance. We are specifically tracking the race toward room-temperature, ambient-pressure superconductors.",
        measurements: [
          {
            id: "superconductor-1",
            title: "Lowest critical pressure at room temperature",
            currentValue: undefined,
            valueStatus: "no-verified-result",
            displayValue: "NO VERIFIED RESULT",
            baseValue: 500,
            unit: "GPa",
            lastUpdated: "2026-08-10",
            isLowerBetter: true,
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 100,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2028 },
                  { name: "Grok 4.20", year: 2029 },
                  { name: "GPT-5.4 Thinking Mini", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                ],
              },
              {
                level: 2,
                goal: 20,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2037 },
                ],
              },
              {
                level: 3,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Grok 4.20", year: 2043 },
                  { name: "Gemini 3.1 Pro Preview", year: 2044 },
                  { name: "GPT-5.4 Thinking Mini", year: 2045 },
                ],
              },
              {
                level: 4,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2051 },
                  { name: "Grok 4.20", year: 2052 },
                  { name: "GPT-5.4 Thinking Mini", year: 2055 },
                ],
              },
              {
                level: 5,
                goal: 0.101325,
                label: "1000 atm",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "Gemini 3.1 Pro Preview", year: 2059 },
                  { name: "Grok 4.20", year: 2061 },
                  { name: "GPT-5.4 Thinking Mini", year: 2064 },
                ],
              },
              {
                level: 6,
                goal: 0.00506625,
                label: "50 atm",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "Gemini 3.1 Pro Preview", year: 2068 },
                  { name: "Grok 4.20", year: 2068 },
                  { name: "GPT-5.4 Thinking Mini", year: 2075 },
                ],
              },
              {
                level: 7,
                goal: 0.000101325,
                label: "1 atm",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2071 },
                  { name: "Grok 4.20", year: 2075 },
                  { name: "Gemini 3.1 Pro Preview", year: 2077 },
                  { name: "GPT-5.4 Thinking Mini", year: 2095 },
                ],
              },
            ],
            history: [{ value: undefined, details: ["No verified qualifying Tc ≥293 K result. The supplied ambient-pressure record is 151 K, 142 K below 293 K."] }],
          },
          {
            id: "superconductor-je-20k-20t",
            title: "Maximum Engineering Current Density of Commercial REBCO Wire at 20 K, 20 T",
            currentValue: 1400,
            displayValue: "≈1,400",
            valueStatus: "estimate",
            baseValue: 0,
            unit: "A/mm²",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "Commercial production-scale REBCO/YBCO coated conductor at 20 K and 20 T, with B || c (perpendicular to the tape face), using transport critical current divided by the entire conductor cross-section. Non-scalable laboratory microfilms are excluded.",
            levels: [
              { level: 1, goal: 1500 },
              { level: 2, goal: 2000 },
              { level: 3, goal: 3000 },
              { level: 4, goal: 5000 },
              { level: 5, goal: 10000 },
              { level: 6, goal: 20000 },
              { level: 7, goal: 50000 }
            ],
            history: [{ value: 1400, details: ["Commercial YBCO/REBCO production wire; approximately 1,400 A/mm² under the standardized 20 K, 20 T, B || c condition in published production-wire data."] }],
          },
          {
            id: "superconductor-3",
            title: "Continuous Magnetic Field Strength",
            currentValue: 48.7,
            valueStatus: "verified",
            baseValue: 20,
            unit: "Tesla",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 75,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2033 },
                  { name: "Grok 4.20", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2059 },
                ],
              },
              {
                level: 2,
                goal: 150,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "GPT-5.4 Thinking Mini", year: 2046 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2089 },
                ],
              },
              {
                level: 3,
                goal: 500,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2072 },
                  { name: "Grok 4.20", year: 2110 },
                  { name: "Gemini 3.1 Pro Preview", year: 2143 },
                ],
              },
              {
                level: 4,
                goal: 2000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2068 },
                  { name: "GPT-5.4 Thinking Mini", year: 2125 },
                  { name: "Grok 4.20", year: 2175 },
                  { name: "Gemini 3.1 Pro Preview", year: 2204 },
                ],
              },
              {
                level: 5,
                goal: 10000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2085 },
                  { name: "GPT-5.4 Thinking Mini", year: 2210 },
                  { name: "Grok 4.20", year: 2240 },
                  { name: "Gemini 3.1 Pro Preview", year: 2275 },
                ],
              },
              {
                level: 6,
                goal: 100000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2112 },
                  { name: "Grok 4.20", year: 2320 },
                  { name: "GPT-5.4 Thinking Mini", year: 2350 },
                  { name: "Gemini 3.1 Pro Preview", year: 2377 },
                ],
              },
              {
                level: 7,
                goal: 1000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2160 },
                  { name: "Grok 4.20", year: 2450 },
                  { name: "Gemini 3.1 Pro Preview", year: 2478 },
                  { name: "GPT-5.4 Thinking Mini", year: 2550 },
                ],
              },
            ],
            history: [{ value: 48.7, details: ["48.7 T total: 17.6 T REBCO superconducting insert plus 31.1 T resistive outsert."] }],
          },
          {
            id: "superconductor-commercial-piece-length",
            title: "Maximum Published Continuous Piece Length of Commercial Production-Scale 2G HTS Tape",
            currentValue: 1,
            displayValue: "1.0 km",
            valueStatus: "verified",
            baseValue: 0,
            unit: "km",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "A commercially offered production-scale REBCO/2G HTS conductor must be one continuous splice-free piece whose qualifying length is published by the manufacturer; use a no-Ic-dropout or equivalent specification where provided. Laboratory one-offs are excluded.",
            levels: [
              { level: 1, goal: 2 },
              { level: 2, goal: 5 },
              { level: 3, goal: 10 },
              { level: 4, goal: 25 },
              { level: 5, goal: 50 },
              { level: 6, goal: 100 },
              { level: 7, goal: 500 }
            ],
            history: [{ value: 1, details: ["Shanghai Superconductor publishes a 100–1000 m single-piece specification without Ic dropout for commercial 2G HTS tape."] }],
          },
        ],
      },
    ],
  },
  {
    id: "neuro",
    name: "NEURO",
    subdomains: [
      {
        id: "bci",
        name: "BCI",
        northStar: {
          title: "Maximum Bandwidth of a Brain-Computer Interface",
          lastUpdated: "2026-04-19",
        },
        description:
          "Stands for Brain-Machine Interface, a piece of tech that directly communicates with the human brain, capable of receiving signals, sending them, or sometimes both.",
        measurements: [
          {
            id: "bci-1",
            title:
              "Number of People with Chronic, Next-Gen, Cortex reading BCI",
            currentValue: 100,
            valueStatus: "lower-bound",
            displayValue: "≥100",
            baseValue: 0,
            unit: "people",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2027 },
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                ],
              },
              {
                level: 2,
                goal: 10000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2027 },
                  { name: "Claude 4.6 Sonnet", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                ],
              },
              {
                level: 3,
                goal: 100000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2029 },
                  { name: "Claude 4.6 Sonnet", year: 2034 },
                  { name: "Gemini 3.1 Pro Preview", year: 2036 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                ],
              },
              {
                level: 4,
                goal: 1000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2042 },
                  { name: "GPT-5.4 Thinking Mini", year: 2061 },
                ],
              },
              {
                level: 5,
                goal: 10000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Claude 4.6 Sonnet", year: 2043 },
                  { name: "Gemini 3.1 Pro Preview", year: 2048 },
                  { name: "GPT-5.4 Thinking Mini", year: 2076 },
                ],
              },
              {
                level: 6,
                goal: 100000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2094 },
                ],
              },
              {
                level: 7,
                goal: 1000000000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2058 },
                  { name: "Grok 4.20", year: 2060 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2125 },
                ],
              },
            ],
            history: [{ value: 100, details: ["Lower bound; exact total unknown. Neuralink 21, NEO 37, Beinao-1 30, ONWARD/WIMAGINE 7, Paradromics 1, NeuroXess 1, NeuraCom 3."] }],
          },
          {
            id: "bci-2",
            title: "Number of Countries Testing Next-Gen BCIs in Humans",
            currentValue: 8,
            valueStatus: "verified",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 12,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "Grok 4.20", year: 2029 },
                ],
              },
              {
                level: 2,
                goal: 25,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2033 },
                ],
              },
              {
                level: 3,
                goal: 50,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                ],
              },
              {
                level: 4,
                goal: 100,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2047 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                ],
              },
              {
                level: 5,
                goal: 150,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2056 },
                  { name: "GPT-5.4 Thinking Mini", year: 2059 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                ],
              },
              {
                level: 6,
                goal: 180,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "GPT-5.4 Thinking Mini", year: 2067 },
                  { name: "Gemini 3.1 Pro Preview", year: 2078 },
                  { name: "Grok 4.20", year: 2080 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2074 },
                  { name: "Gemini 3.1 Pro Preview", year: 2090 },
                  { name: "Grok 4.20", year: 2100 },
                ],
              },
            ],
            history: [{ value: 8, details: ["Verified public list: United States, Australia, Canada, United Kingdom, United Arab Emirates, China, Netherlands, Switzerland (4.10% of 195)."] }],
          },
          {
            id: "bci-3",
            title:
              "Number of Countries Allowing Chronic, Next-Gen, Cortex reading BCI for Medical Use",
            currentValue: 1,
            valueStatus: "verified",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 3,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2027 },
                  { name: "Claude 4.6 Sonnet", year: 2027 },
                  { name: "Gemini 3.1 Pro Preview", year: 2029 },
                  { name: "GPT-5.4 Thinking Mini", year: 2029 },
                ],
              },
              {
                level: 2,
                goal: 10,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2031 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "GPT-5.4 Thinking Mini", year: 2035 },
                ],
              },
              {
                level: 3,
                goal: 30,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2032 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2044 },
                ],
              },
              {
                level: 4,
                goal: 75,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2036 },
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                ],
              },
              {
                level: 5,
                goal: 120,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2042 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "GPT-5.4 Thinking Mini", year: 2074 },
                ],
              },
              {
                level: 6,
                goal: 170,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "Grok 4.20", year: 2052 },
                  { name: "Claude 4.6 Sonnet", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2092 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2060 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "Claude 4.6 Sonnet", year: 2072 },
                  { name: "GPT-5.4 Thinking Mini", year: 2125 },
                ],
              },
            ],
            history: [{ value: 1, details: ["China (0.513% of 195); NEO received market authorization in March 2026 for a defined medical indication."] }],
          },
          {
            id: "bci-4",
            title:
              "Number of Countries Allowing Chronic, Next-Gen, Cortex reading BCI for Elective/Free Use",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                  { name: "Claude 4.6 Sonnet", year: 2029 },
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2034 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Gemini 3.1 Pro Preview", year: 2042 },
                ],
              },
              {
                level: 3,
                goal: 15,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2040 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2048 },
                ],
              },
              {
                level: 4,
                goal: 40,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2042 },
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "GPT-5.4 Thinking Mini", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                ],
              },
              {
                level: 5,
                goal: 80,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2047 },
                  { name: "Claude 4.6 Sonnet", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2059 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                ],
              },
              {
                level: 6,
                goal: 140,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2053 },
                  { name: "Claude 4.6 Sonnet", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2069 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2080 },
                  { name: "Claude 4.6 Sonnet", year: 2085 },
                  { name: "Gemini 3.1 Pro Preview", year: 2105 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 195 = 0%."] }],
          },
        ],
      },
      {
        id: "mind-upload",
        name: "MIND UPLOAD",
        northStar: {
          title: "Maximum whole brain emulation",
          lastUpdated: "2026-04-19",
        },
        description:
          "A tech that's being developed by mapping the brain, in order to one day simulate it.",
        measurements: [
          {
            id: "mind-upload-price-1",
            title: "Average Price to upload an adult human mind",
            currentValue: undefined,
            valueStatus: "not-applicable",
            displayValue: "N/A",
            baseValue: Infinity,
            unit: "dollars",
            lastUpdated: "2026-08-10",
            isLowerBetter: true,
            temporalType: "current",
            indicatorType: "market",
            levels: [
              {
                level: 1,
                goal: 1000000000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2074 },
                  { name: "GPT-5.4 Thinking Mini", year: 2095 },
                ],
              },
              {
                level: 2,
                goal: 1000000000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2058 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Claude 4.6 Sonnet", year: 2088 },
                  { name: "GPT-5.4 Thinking Mini", year: 2115 },
                ],
              },
              {
                level: 3,
                goal: 10000000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2064 },
                  { name: "Grok 4.20", year: 2075 },
                  { name: "Claude 4.6 Sonnet", year: 2099 },
                  { name: "GPT-5.4 Thinking Mini", year: 2135 },
                ],
              },
              {
                level: 4,
                goal: 1000000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2068 },
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Claude 4.6 Sonnet", year: 2107 },
                  { name: "GPT-5.4 Thinking Mini", year: 2145 },
                ],
              },
              {
                level: 5,
                goal: 100000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2072 },
                  { name: "Grok 4.20", year: 2095 },
                  { name: "Claude 4.6 Sonnet", year: 2114 },
                  { name: "GPT-5.4 Thinking Mini", year: 2155 },
                ],
              },
              {
                level: 6,
                goal: 10000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2076 },
                  { name: "Grok 4.20", year: 2105 },
                  { name: "Claude 4.6 Sonnet", year: 2121 },
                  { name: "GPT-5.4 Thinking Mini", year: 2165 },
                ],
              },
              {
                level: 7,
                goal: 1000,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                  { name: "Grok 4.20", year: 2120 },
                  { name: "Claude 4.6 Sonnet", year: 2127 },
                  { name: "GPT-5.4 Thinking Mini", year: 2175 },
                ],
              },
            ],
            history: [{ value: undefined, details: ["No commercial mind-upload market exists."] }],
          },
          {
            id: "mind-upload-adoption-1",
            title: "Number of Minds Uploaded so far",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "minds",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "GPT-5.4 Thinking Mini", year: 2087 },
                ],
              },
              {
                level: 2,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                  { name: "Claude 4.6 Sonnet", year: 2072 },
                  { name: "GPT-5.4 Thinking Mini", year: 2098 },
                ],
              },
              {
                level: 3,
                goal: 10000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                  { name: "Claude 4.6 Sonnet", year: 2081 },
                  { name: "GPT-5.4 Thinking Mini", year: 2108 },
                ],
              },
              {
                level: 4,
                goal: 1000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                  { name: "Claude 4.6 Sonnet", year: 2093 },
                  { name: "GPT-5.4 Thinking Mini", year: 2118 },
                ],
              },
              {
                level: 5,
                goal: 10000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2075 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                  { name: "Claude 4.6 Sonnet", year: 2101 },
                  { name: "GPT-5.4 Thinking Mini", year: 2127 },
                ],
              },
              {
                level: 6,
                goal: 100000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Gemini 3.1 Pro Preview", year: 2090 },
                  { name: "Claude 4.6 Sonnet", year: 2114 },
                  { name: "GPT-5.4 Thinking Mini", year: 2140 },
                ],
              },
              {
                level: 7,
                goal: 1000000000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2100 },
                  { name: "Gemini 3.1 Pro Preview", year: 2100 },
                  { name: "Claude 4.6 Sonnet", year: 2134 },
                  { name: "GPT-5.4 Thinking Mini", year: 2160 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 uploaded individuals."] }],
          },
          {
            id: "mind-upload-adoption-2",
            title: "Number of countries that allow Mind Upload",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2085 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2069 },
                  { name: "Gemini 3.1 Pro Preview", year: 2072 },
                  { name: "Grok 4.20", year: 2075 },
                  { name: "GPT-5.4 Thinking Mini", year: 2095 },
                ],
              },
              {
                level: 3,
                goal: 15,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2078 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                  { name: "Grok 4.20", year: 2085 },
                  { name: "GPT-5.4 Thinking Mini", year: 2105 },
                ],
              },
              {
                level: 4,
                goal: 30,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2086 },
                  { name: "Grok 4.20", year: 2095 },
                  { name: "Gemini 3.1 Pro Preview", year: 2095 },
                  { name: "GPT-5.4 Thinking Mini", year: 2120 },
                ],
              },
              {
                level: 5,
                goal: 75,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2097 },
                  { name: "Grok 4.20", year: 2110 },
                  { name: "Gemini 3.1 Pro Preview", year: 2125 },
                  { name: "GPT-5.4 Thinking Mini", year: 2150 },
                ],
              },
              {
                level: 6,
                goal: 130,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2109 },
                  { name: "Grok 4.20", year: 2135 },
                  { name: "Gemini 3.1 Pro Preview", year: 2160 },
                  { name: "GPT-5.4 Thinking Mini", year: 2190 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2128 },
                  { name: "Grok 4.20", year: 2160 },
                  { name: "Gemini 3.1 Pro Preview", year: 2210 },
                  { name: "GPT-5.4 Thinking Mini", year: 2240 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 / 195 = 0%."] }],
          },
          {
            id: "mind-upload-1",
            title: "World Largest Connectome",
            currentValue: 166691,
            valueStatus: "verified",
            baseValue: 0,
            unit: "neurons",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 71000000,
                label: "71 million (a mouse)",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2034 },
                  { name: "Grok 4.20", year: 2034 },
                  { name: "Gemini 3.1 Pro Preview", year: 2035 },
                ],
              },
              {
                level: 2,
                goal: 200000000,
                label: "200 million (a brown rat)",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2036 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2041 },
                ],
              },
              {
                level: 3,
                goal: 500000000,
                label: "500 million (an octopus)",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Grok 4.20", year: 2039 },
                  { name: "Gemini 3.1 Pro Preview", year: 2039 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                ],
              },
              {
                level: 4,
                goal: 6300000000,
                label: "6.3 billion (Rhesus Macaque)",
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro Preview", year: 2044 },
                  { name: "Grok 4.20", year: 2048 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                ],
              },
              {
                level: 5,
                goal: 14000000000,
                label: "14 billion (baboon)",
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2046 },
                  { name: "Grok 4.20", year: 2051 },
                  { name: "GPT-5.4 Thinking Mini", year: 2065 },
                ],
              },
              {
                level: 6,
                goal: 33000000000,
                label: "33 billion (western gorilla)",
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2047 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "Grok 4.20", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2074 },
                ],
              },
              {
                level: 7,
                goal: 86000000000,
                label: "86 billion (human)",
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2049 },
                  { name: "Claude 4.6 Sonnet", year: 2056 },
                  { name: "Grok 4.20", year: 2065 },
                  { name: "GPT-5.4 Thinking Mini", year: 2088 },
                ],
              },
            ],
            history: [{ value: 166691, details: ["Verified preprint: adult male Drosophila melanogaster brain + ventral nerve cord, excluding retina and full peripheral body; ≈312,000,000 synapses. Near-whole CNS, not a complete whole-organism nervous system."] }],
          },
        ],
      },
      {
        id: "vr",
        name: "VR",
        northStar: {
          title: "Maximum immersion in a Virtual Reality",
          lastUpdated: "2026-04-19",
        },
        description:
          "Stands for Virtual Reality, immersive digital environments. We focus on true 'Full Dive' VR capabilities involving direct neural stimulation.",
        measurements: [
          {
            id: "vr-5",
            title:
              "Global Daily Active Users (DAU) in Virtual Reality (Any Hardware)",
            currentValue: 5000000,
            valueStatus: "estimate",
            displayValue: "≈5.0 million",
            baseValue: 0,
            unit: "users",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 15000000,
                label: "15M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2028 },
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "Grok 4.20", year: 2029 },
                ],
              },
              {
                level: 2,
                goal: 30000000,
                label: "30M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2028 },
                  { name: "Claude 4.6 Sonnet", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "Grok 4.20", year: 2032 },
                ],
              },
              {
                level: 3,
                goal: 60000000,
                label: "60M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "Grok 4.20", year: 2035 },
                ],
              },
              {
                level: 4,
                goal: 100000000,
                label: "100M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2036 },
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "Grok 4.20", year: 2039 },
                ],
              },
              {
                level: 5,
                goal: 200000000,
                label: "200M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2036 },
                  { name: "Claude 4.6 Sonnet", year: 2039 },
                  { name: "Gemini 3.1 Pro Preview", year: 2041 },
                  { name: "Grok 4.20", year: 2043 },
                ],
              },
              {
                level: 6,
                goal: 500000000,
                label: "500M",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2043 },
                  { name: "Claude 4.6 Sonnet", year: 2044 },
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                  { name: "Grok 4.20", year: 2050 },
                ],
              },
              {
                level: 7,
                goal: 1000000000,
                label: "1B",
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2050 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                  { name: "Grok 4.20", year: 2060 },
                ],
              },
            ],
            history: [{ value: 5000000, details: ["Estimate ≈5.0 million unique DAU; plausible range 3,000,000–8,000,000 after assumed cross-platform overlap."] }],
          },
          {
            id: "vr-commercial-ppd",
            title: "Maximum Native Central Pixel Density in a Shipping VR Headset (≥100° Horizontal FOV)",
            currentValue: 57,
            valueStatus: "verified",
            baseValue: 0,
            unit: "PPD",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "Use native central optical/display PPD in a commercially shipping immersive VR headset whose same shipping configuration has at least 100° horizontal FOV. Supersampled render resolution, prototypes, demos, and announced products are excluded.",
            levels: [
              { level: 1, goal: 60 },
              { level: 2, goal: 70 },
              { level: 3, goal: 80 },
              { level: 4, goal: 90 },
              { level: 5, goal: 100 },
              { level: 6, goal: 110 },
              { level: 7, goal: 120 }
            ],
            history: [{ value: 57, details: ["Pimax Crystal Super 57-PPD optical configuration: 3840 × 3840 pixels per eye, approximately 106° horizontal FOV, and commercially shipping."] }],
          },
          {
            id: "vr-4",
            title:
              "Number of Senses fully replicated (simultaneously) by brain stimulation",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "senses",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                  { name: "GPT-5.4 Thinking Mini", year: 2050 },
                ],
              },
              {
                level: 2,
                goal: 2,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Grok 4.20", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2050 },
                  { name: "GPT-5.4 Thinking Mini", year: 2060 },
                ],
              },
              {
                level: 3,
                goal: 3,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2041 },
                  { name: "Grok 4.20", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2054 },
                  { name: "GPT-5.4 Thinking Mini", year: 2072 },
                ],
              },
              {
                level: 4,
                goal: 4,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2045 },
                  { name: "Grok 4.20", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2057 },
                  { name: "GPT-5.4 Thinking Mini", year: 2086 },
                ],
              },
              {
                level: 5,
                goal: 5,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2049 },
                  { name: "Grok 4.20", year: 2053 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2105 },
                ],
              },
              {
                level: 6,
                goal: 6,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2055 },
                  { name: "Grok 4.20", year: 2061 },
                  { name: "Gemini 3.1 Pro Preview", year: 2063 },
                  { name: "GPT-5.4 Thinking Mini", year: 2135 },
                ],
              },
              {
                level: 7,
                goal: 7,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "Grok 4.20", year: 2070 },
                  { name: "GPT-5.4 Thinking Mini", year: 2180 },
                ],
              },
            ],
            methodNote: "Vision, hearing, smell, taste, touch, balance and proprioception are the seven senses selected by Future Progress Bar for this metric. This is a project convention, not a claim that biology has exactly seven uniquely canonical senses.",
            history: [{ value: 0, details: ["0 / 7 project-selected senses = 0%."] }],
          },
          {
            id: "vr-shared-world-concurrency",
            title: "Maximum Officially Supported Users in One Mutually Interactive VR World/Session",
            currentValue: 82,
            valueStatus: "verified",
            baseValue: 0,
            unit: "users",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            methodNote: "Count normal officially supported capacity in one coherent, mutually interactive VR world/session. Distributed or sharded internals are allowed, but separate copies, mirrors, non-interacting zones, and unsupported one-time stress tests are excluded.",
            levels: [
              { level: 1, goal: 100 },
              { level: 2, goal: 250 },
              { level: 3, goal: 1000 },
              { level: 4, goal: 10000 },
              { level: 5, goal: 100000 },
              { level: 6, goal: 1000000 },
              { level: 7, goal: 100000000 }
            ],
            history: [{ value: 82, details: ["VRChat documents an ordinary configured capacity of 80 users plus reserved owner slots, yielding an effective maximum of 82."] }],
          },
        ],
      },
    ],
  },
  {
    id: "sustainability",
    name: "SUSTAINABILITY",
    subdomains: [
      {
        id: "cultured-meat",
        name: "CULTURED MEAT",
        northStar: {
          title: "Maximum commercial viability of Cultured Meat",
          lastUpdated: "2026-04-19",
        },
        description:
          "Real meat produced by cultivating animal cells directly, eliminating the need to raise and slaughter animals while significantly reducing environmental impact.",
        measurements: [
          {
            id: "cultured-meat-1",
            title: "Global Market Share of Meat Consumed",
            currentValue: undefined,
            valueStatus: "unknown",
            displayValue: "UNKNOWN",
            baseValue: 0,
            unit: "%",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "market",
            levels: [
              {
                level: 1,
                goal: 0.1,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2027 },
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                ],
              },
              {
                level: 2,
                goal: 1,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                ],
              },
              {
                level: 3,
                goal: 5,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "Grok 4.20", year: 2041 },
                  { name: "Claude 4.6 Sonnet", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2047 },
                ],
              },
              {
                level: 4,
                goal: 15,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2037 },
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2053 },
                  { name: "GPT-5.4 Thinking Mini", year: 2058 },
                ],
              },
              {
                level: 5,
                goal: 30,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                  { name: "Grok 4.20", year: 2047 },
                  { name: "Claude 4.6 Sonnet", year: 2061 },
                  { name: "GPT-5.4 Thinking Mini", year: 2070 },
                ],
              },
              {
                level: 6,
                goal: 50,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2046 },
                  { name: "Grok 4.20", year: 2049 },
                  { name: "Claude 4.6 Sonnet", year: 2071 },
                  { name: "GPT-5.4 Thinking Mini", year: 2085 },
                ],
              },
              {
                level: 7,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2052 },
                  { name: "Gemini 3.1 Pro Preview", year: 2095 },
                  { name: "Claude 4.6 Sonnet", year: 2105 },
                  { name: "GPT-5.4 Thinking Mini", year: 2150 },
                ],
              },
            ],
            history: [{ value: undefined, details: ["Unknown; the noncanonical 0.00238% proxy compares incompatible market-estimate datasets and is not the measurement value."] }],
          },
          {
            id: "cultured-meat-3",
            title:
              "Countries that have approved or legally permitted cultivated meat for pet consumption",
            currentValue: 1,
            valueStatus: "verified",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 40,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "Grok 4.20", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                ],
              },
              {
                level: 2,
                goal: 60,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "GPT-5.4 Thinking Mini", year: 2039 },
                  { name: "Claude 4.6 Sonnet", year: 2043 },
                ],
              },
              {
                level: 3,
                goal: 80,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "GPT-5.4 Thinking Mini", year: 2043 },
                  { name: "Claude 4.6 Sonnet", year: 2050 },
                ],
              },
              {
                level: 4,
                goal: 110,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                  { name: "Claude 4.6 Sonnet", year: 2058 },
                ],
              },
              {
                level: 5,
                goal: 140,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Gemini 3.1 Pro Preview", year: 2044 },
                  { name: "GPT-5.4 Thinking Mini", year: 2055 },
                  { name: "Claude 4.6 Sonnet", year: 2067 },
                ],
              },
              {
                level: 6,
                goal: 170,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Gemini 3.1 Pro Preview", year: 2051 },
                  { name: "GPT-5.4 Thinking Mini", year: 2062 },
                  { name: "Claude 4.6 Sonnet", year: 2078 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "Gemini 3.1 Pro Preview", year: 2062 },
                  { name: "GPT-5.4 Thinking Mini", year: 2074 },
                  { name: "Claude 4.6 Sonnet", year: 2094 },
                ],
              },
            ],
            history: [{ value: 1, details: ["United Kingdom (0.513% of 195)."] }],
          },
          {
            id: "cultured-meat-2",
            title:
              "Countries that have approved or legally permitted cultivated meat for human consumption",
            currentValue: 3,
            valueStatus: "verified",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 10,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2028 },
                  { name: "Grok 4.20", year: 2028 },
                  { name: "Gemini 3.1 Pro Preview", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2029 },
                ],
              },
              {
                level: 2,
                goal: 25,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2031 },
                  { name: "Claude 4.6 Sonnet", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2035 },
                ],
              },
              {
                level: 3,
                goal: 50,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2036 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                ],
              },
              {
                level: 4,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2046 },
                  { name: "GPT-5.4 Thinking Mini", year: 2051 },
                ],
              },
              {
                level: 5,
                goal: 150,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                  { name: "Claude 4.6 Sonnet", year: 2058 },
                  { name: "Grok 4.20", year: 2058 },
                  { name: "GPT-5.4 Thinking Mini", year: 2059 },
                ],
              },
              {
                level: 6,
                goal: 180,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2064 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                  { name: "Claude 4.6 Sonnet", year: 2072 },
                  { name: "Grok 4.20", year: 2075 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2070 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                  { name: "Claude 4.6 Sonnet", year: 2095 },
                  { name: "Grok 4.20", year: 2095 },
                ],
              },
            ],
            history: [{ value: 3, details: ["Singapore, United States, and Australia (1.54% of 195)."] }],
          },
          {
            id: "cultured-meat-4",
            title: "Countries where non-cultivated meat is banned",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "countries",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "policy",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2026 },
                  { name: "Claude 4.6 Sonnet", year: 2051 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                  { name: "Grok 4.20", year: 2060 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2063 },
                  { name: "Gemini 3.1 Pro Preview", year: 2070 },
                  { name: "Grok 4.20", year: 2085 },
                ],
              },
              {
                level: 3,
                goal: 15,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2054 },
                  { name: "Claude 4.6 Sonnet", year: 2079 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                  { name: "Grok 4.20", year: 2110 },
                ],
              },
              {
                level: 4,
                goal: 30,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2072 },
                  { name: "Claude 4.6 Sonnet", year: 2092 },
                  { name: "Gemini 3.1 Pro Preview", year: 2100 },
                  { name: "Grok 4.20", year: 2140 },
                ],
              },
              {
                level: 5,
                goal: 75,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2110 },
                  { name: "Claude 4.6 Sonnet", year: 2118 },
                  { name: "Gemini 3.1 Pro Preview", year: 2130 },
                  { name: "Grok 4.20", year: 2175 },
                ],
              },
              {
                level: 6,
                goal: 130,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2151 },
                  { name: "GPT-5.4 Thinking Mini", year: 2155 },
                  { name: "Gemini 3.1 Pro Preview", year: 2160 },
                  { name: "Grok 4.20", year: 2210 },
                ],
              },
              {
                level: 7,
                goal: 195,
                aiPredictions: [
                  { name: "Gemini 3.1 Pro Preview", year: 2200 },
                  { name: "Claude 4.6 Sonnet", year: 2210 },
                  { name: "GPT-5.4 Thinking Mini", year: 2210 },
                  { name: "Grok 4.20", year: 2250 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 countries."] }],
          },
        ],
      },
      {
        id: "nuclear-fusion",
        name: "NUCLEAR FUSION",
        northStar: {
          title:
            "Maximum net energy gain of a Nuclear Fusion Reactor (Q factor)",
          lastUpdated: "2026-04-20",
        },
        description:
          "The process that powers the sun, merging atomic nuclei to release massive amounts of clean, boundless energy. We track the race to make it a practical power source on Earth.",
        measurements: [
          {
            id: "fusion-1",
            title: "Number of commercial fusion power plants on the grid",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "plants",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2032 },
                  { name: "Grok 4.20", year: 2032 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                ],
              },
              {
                level: 2,
                goal: 5,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2036 },
                  { name: "GPT-5.4 Thinking Mini", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2047 },
                ],
              },
              {
                level: 3,
                goal: 20,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2042 },
                  { name: "GPT-5.4 Thinking Mini", year: 2044 },
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "Gemini 3.1 Pro Preview", year: 2054 },
                ],
              },
              {
                level: 4,
                goal: 100,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "GPT-5.4 Thinking Mini", year: 2051 },
                  { name: "Claude 4.6 Sonnet", year: 2053 },
                  { name: "Gemini 3.1 Pro Preview", year: 2062 },
                ],
              },
              {
                level: 5,
                goal: 500,
                aiPredictions: [
                  { name: "GPT-5.4 Thinking Mini", year: 2059 },
                  { name: "Claude 4.6 Sonnet", year: 2060 },
                  { name: "Grok 4.20", year: 2062 },
                  { name: "Gemini 3.1 Pro Preview", year: 2075 },
                ],
              },
              {
                level: 6,
                goal: 2500,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2068 },
                  { name: "GPT-5.4 Thinking Mini", year: 2068 },
                  { name: "Grok 4.20", year: 2078 },
                  { name: "Gemini 3.1 Pro Preview", year: 2090 },
                ],
              },
              {
                level: 7,
                goal: 10000,
                aiPredictions: [
                  { name: "Claude 4.6 Sonnet", year: 2077 },
                  { name: "GPT-5.4 Thinking Mini", year: 2078 },
                  { name: "Grok 4.20", year: 2095 },
                  { name: "Gemini 3.1 Pro Preview", year: 2115 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 commercial plants exporting electricity to a grid."] }],
          },
          {
            id: "fusion-2",
            title: "Global share of electricity generated by fusion",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "%",
            lastUpdated: "2026-08-10",
            temporalType: "current",
            indicatorType: "adoption",
            levels: [
              {
                level: 1,
                goal: 0.1,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2032 },
                  { name: "GPT-5.4 Thinking Mini", year: 2039 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                ],
              },
              {
                level: 2,
                goal: 1,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2037 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                  { name: "Claude 4.6 Sonnet", year: 2058 },
                  { name: "Gemini 3.1 Pro Preview", year: 2068 },
                ],
              },
              {
                level: 3,
                goal: 5,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "GPT-5.4 Thinking Mini", year: 2061 },
                  { name: "Claude 4.6 Sonnet", year: 2067 },
                  { name: "Gemini 3.1 Pro Preview", year: 2082 },
                ],
              },
              {
                level: 4,
                goal: 10,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2055 },
                  { name: "GPT-5.4 Thinking Mini", year: 2070 },
                  { name: "Claude 4.6 Sonnet", year: 2074 },
                  { name: "Gemini 3.1 Pro Preview", year: 2092 },
                ],
              },
              {
                level: 5,
                goal: 25,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2070 },
                  { name: "Claude 4.6 Sonnet", year: 2083 },
                  { name: "GPT-5.4 Thinking Mini", year: 2097 },
                  { name: "Gemini 3.1 Pro Preview", year: 2115 },
                ],
              },
              {
                level: 6,
                goal: 40,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2085 },
                  { name: "Claude 4.6 Sonnet", year: 2092 },
                  { name: "GPT-5.4 Thinking Mini", year: 2118 },
                  { name: "Gemini 3.1 Pro Preview", year: 2140 },
                ],
              },
              {
                level: 7,
                goal: 75,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2108 },
                  { name: "Claude 4.6 Sonnet", year: 2110 },
                  { name: "GPT-5.4 Thinking Mini", year: 2165 },
                  { name: "Gemini 3.1 Pro Preview", year: 2190 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0% of world electricity."] }],
          },
          {
            id: "fusion-3",
            title: "Longest continuous operation of a net-positive reactor",
            currentValue: undefined,
            valueStatus: "unknown",
            displayValue: "UNKNOWN",
            baseValue: 0,
            unit: "hours",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 1,
                label: "1 Hour",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "Claude 4.6 Sonnet", year: 2033 },
                  { name: "Gemini 3.1 Pro Preview", year: 2040 },
                  { name: "GPT-5.4 Thinking Mini", year: 2042 },
                ],
              },
              {
                level: 2,
                goal: 24,
                label: "24 Hours",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2035 },
                  { name: "Claude 4.6 Sonnet", year: 2037 },
                  { name: "Gemini 3.1 Pro Preview", year: 2043 },
                  { name: "GPT-5.4 Thinking Mini", year: 2048 },
                ],
              },
              {
                level: 3,
                goal: 168,
                label: "1 Week",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2040 },
                  { name: "Claude 4.6 Sonnet", year: 2042 },
                  { name: "Gemini 3.1 Pro Preview", year: 2047 },
                  { name: "GPT-5.4 Thinking Mini", year: 2055 },
                ],
              },
              {
                level: 4,
                goal: 730,
                label: "1 Month",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2045 },
                  { name: "Claude 4.6 Sonnet", year: 2047 },
                  { name: "Gemini 3.1 Pro Preview", year: 2052 },
                  { name: "GPT-5.4 Thinking Mini", year: 2061 },
                ],
              },
              {
                level: 5,
                goal: 8760,
                label: "1 Year",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2050 },
                  { name: "Claude 4.6 Sonnet", year: 2055 },
                  { name: "Gemini 3.1 Pro Preview", year: 2060 },
                  { name: "GPT-5.4 Thinking Mini", year: 2072 },
                ],
              },
              {
                level: 6,
                goal: 43800,
                label: "5 Years",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2060 },
                  { name: "Claude 4.6 Sonnet", year: 2067 },
                  { name: "Gemini 3.1 Pro Preview", year: 2085 },
                  { name: "GPT-5.4 Thinking Mini", year: 2090 },
                ],
              },
              {
                level: 7,
                goal: 438000,
                label: "50 Years",
                aiPredictions: [
                  { name: "Grok 4.20", year: 2080 },
                  { name: "Claude 4.6 Sonnet", year: 2110 },
                  { name: "GPT-5.4 Thinking Mini", year: 2145 },
                  { name: "Gemini 3.1 Pro Preview", year: 2150 },
                ],
              },
            ],
            history: [{ value: undefined, details: ["Unknown. The April 2025 NIF shot yielded 8.6 MJ from 2.08 MJ (shot-integrated Qtarget ≈4.13), but its ≈100 ps burn does not verify Q>1 continuously at every instant."] }],
          },
          {
            id: "fusion-4",
            title: "Maximum net electrical output of a single fusion plant",
            currentValue: 0,
            valueStatus: "zero",
            baseValue: 0,
            unit: "MWe",
            lastUpdated: "2026-08-10",
            temporalType: "record",
            indicatorType: "capability",
            levels: [
              {
                level: 1,
                goal: 10,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2029 },
                  { name: "Gemini 3.1 Pro Preview", year: 2034 },
                  { name: "Claude 4.6 Sonnet", year: 2035 },
                ],
              },
              {
                level: 2,
                goal: 50,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2028 },
                  { name: "GPT-5.4 Thinking Mini", year: 2030 },
                  { name: "Gemini 3.1 Pro Preview", year: 2038 },
                  { name: "Claude 4.6 Sonnet", year: 2038 },
                ],
              },
              {
                level: 3,
                goal: 200,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "GPT-5.4 Thinking Mini", year: 2033 },
                  { name: "Claude 4.6 Sonnet", year: 2043 },
                  { name: "Gemini 3.1 Pro Preview", year: 2045 },
                ],
              },
              {
                level: 4,
                goal: 500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2030 },
                  { name: "GPT-5.4 Thinking Mini", year: 2036 },
                  { name: "Claude 4.6 Sonnet", year: 2048 },
                  { name: "Gemini 3.1 Pro Preview", year: 2055 },
                ],
              },
              {
                level: 5,
                goal: 1000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2038 },
                  { name: "GPT-5.4 Thinking Mini", year: 2041 },
                  { name: "Claude 4.6 Sonnet", year: 2053 },
                  { name: "Gemini 3.1 Pro Preview", year: 2065 },
                ],
              },
              {
                level: 6,
                goal: 2500,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2048 },
                  { name: "GPT-5.4 Thinking Mini", year: 2049 },
                  { name: "Claude 4.6 Sonnet", year: 2060 },
                  { name: "Gemini 3.1 Pro Preview", year: 2080 },
                ],
              },
              {
                level: 7,
                goal: 5000,
                aiPredictions: [
                  { name: "Grok 4.20", year: 2058 },
                  { name: "GPT-5.4 Thinking Mini", year: 2060 },
                  { name: "Claude 4.6 Sonnet", year: 2068 },
                  { name: "Gemini 3.1 Pro Preview", year: 2100 },
                ],
              },
            ],
            history: [{ value: 0, details: ["0 MWe net electrical fusion export."] }],
          },
        ],
      },
    ],
  },
] as unknown as MainDomainData[];

import { MEASUREMENT_CATALOG } from "../lib/measurement-catalog.ts";
import { NORTH_STARS } from "../lib/north-stars.ts";

/** UI-ready composition of stable definitions with the independently updateable observations and thresholds. */
export const MAIN_DOMAINS: MainDomainData[] = RAW_MAIN_DOMAINS.map((domain) => ({
  ...domain,
  subdomains: domain.subdomains.map((subdomain) => ({
    ...subdomain,
    northStar: NORTH_STARS[subdomain.id],
    measurements: subdomain.measurements.map((record) => {
      const definition = MEASUREMENT_CATALOG[record.id];
      if (!definition) throw new Error(`Missing canonical measurement definition: ${record.id}`);
      return { ...definition, ...record, question: definition.question, definition: definition.definition, geographicScope: definition.geographicScope, denominator: definition.denominator, researchCutoff: record.lastUpdated ?? "2026-08-10", evidence: record.evidence ?? [] };
    }),
  })),
}));
