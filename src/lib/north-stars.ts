import type { NorthStarDefinition } from "./measurement-types.ts";

const cutoff = "2026-08-10";
const make = (id: string, title: string, question: string, unit: string, methodology: string): NorthStarDefinition => ({ id, title, question, unit, methodology, lastUpdated: cutoff, series: { sourceModule: `src/components/${id}-graph-data.ts`, frequency: "annual" } });

export const NORTH_STARS: Record<string, NorthStarDefinition> = {
  ai: make("ai", "10 PFLOP/s Dense FP32 Hardware Cost", "What did enough commercially available hardware to sustain 10^16 dense FP32 FLOP/s cost in each year?", "2026 USD", "Raw purchase-cost proxy. The 10^16 FLOP/s target is a conventional project reference, not a scientifically established equivalence between FLOPs and human cognition."),
  robotics: make("robotics", "Robotics long-run context", "How has the cost and availability of capable general-purpose robotic hardware changed?", "indexed series", "Uses the documented historical series as context; it contributes no scored milestone."),
  "self-driving-car": make("self-driving-car", "Autonomous-driving long-run context", "How has documented autonomous operation changed over time?", "series-specific", "Annual results belong to the year actually achieved and are not back-cast."),
  lev: make("lev", "Longevity long-run context", "How have population longevity outcomes changed over time?", "years", "Uses the definitions and year attached to each historical series point."),
  "space-exploration": make("space-exploration", "Space exploration long-run context", "How has humanity’s demonstrated reach and presence beyond Earth changed?", "series-specific", "Counts achieved events, not plans or theoretical capacity."),
  "quantum-computing": make("quantum-computing", "Quantum-computing long-run context", "How has defensibly benchmarked quantum-computing performance changed?", "series-specific", "Architectures and benchmark definitions are kept explicit rather than averaged."),
  superconductor: make("superconductor", "Superconductivity long-run context", "How has the verified frontier of superconducting operating conditions changed?", "series-specific", "Retracted claims are excluded and unlike temperature, pressure, geometry and field definitions are not merged."),
  bci: make("bci", "BCI long-run context", "How has usable information transfer through qualifying BCIs changed?", "series-specific", "Distinguishes chronic implanted reading interfaces from non-invasive and stimulation-only systems."),
  "mind-upload": make("mind-upload", "Neural mapping long-run context", "How has the scale of published nervous-system mapping and emulation changed?", "neurons / series-specific", "A connectome or simulation is not treated as a mind upload or evidence of personal continuity."),
  vr: make("vr", "VR long-run context", "How has qualifying immersive VR capability changed?", "series-specific", "Ordinary flat-screen virtual worlds are excluded."),
  "cultured-meat": make("cultured-meat", "Cultivated-meat long-run context", "How have demonstrated cultivated-meat cost and scalable output changed?", "series-specific", "Uses achieved commercial or technical results in their actual year, not announced capacity."),
  "nuclear-fusion": make("nuclear-fusion", "Fusion long-run context", "How have fusion gain and sustained high-performance operation changed?", "series-specific", "Scientific Q, target gain, plant electricity and net exported electricity remain distinct boundaries."),
};
