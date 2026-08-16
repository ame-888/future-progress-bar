import type { IndicatorType, ResultStatus, SourceType, TemporalType } from "./measurement-types.ts";

export const FPB_MEASUREMENT_STANDARD = {
  id: "FPB-MS",
  version: "1.0",
  effectiveFrom: "2026-08-16",
  temporalTypes: {
    current: "The value valid at the research cutoff.",
    period: "The value aggregated over the explicitly stored reporting interval.",
    record: "The best qualifying result achieved on or before the research cutoff.",
  } satisfies Record<TemporalType, string>,
  epistemicStates: {
    verified: "The result is directly supported under the specification.",
    estimate: "A numeric approximation produced by a documented method.",
    "lower-bound": "At least the stored amount is evidenced; exhaustiveness is not established.",
    zero: "A genuine numeric zero supported by a logical, authoritative exhaustive, or documented exhaustive basis.",
    unknown: "No defensible numerical answer is currently available.",
    "not-applicable": "The quantity currently has no meaningful applicable value.",
    "no-verified-result": "Candidates may exist, but none satisfies the verification criterion.",
  } satisfies Record<ResultStatus, string>,
  indicatorTypes: ["capability", "adoption", "policy", "market", "outcome", "proxy"] satisfies IndicatorType[],
  evidenceHierarchy: ["official", "peer-reviewed", "filing", "technical", "journalism", "estimate"] satisfies SourceType[],
  countryScope: "195 sovereign states: 193 UN members, the Holy See, and the State of Palestine.",
} as const;

export const FPB_GLOSSARY = {
  current: "Valid at the stored research cutoff, rather than the publication date.",
  period: "Aggregated only within the stated start and end of one compatible reporting interval.",
  record: "Best qualifying historical result achieved by the research cutoff.",
  commercial: "Offered in an ordinary paid market under any required operative authorization; an announcement or research supply is insufficient.",
  operational: "Actually functioning in the stated role, not merely announced, installed, or tested.",
  deployed: "Placed in the stated real-world setting and available for its specified use.",
  active: "Not retired, scrapped, permanently deactivated, explanted, or deceased, as applicable.",
  "ordinary-use": "Use offered outside a research-only, demonstration, or time-limited trial protocol.",
  "general-purpose": "Able to complete multiple materially different useful tasks rather than one fixed task family.",
  autonomous: "Performs the specified task without a human executing its constituent decisions.",
  "fully-autonomous": "Completes the entire defined task without human execution or approval of operative steps.",
  qualifying: "Satisfies every metric-specific inclusion and boundary rule and no exclusion rule.",
  "sovereign-country": FPB_MEASUREMENT_STANDARD.countryScope,
  authorization: "An operative permission issued by the competent authority for the exact stated activity.",
  trial: "Research conducted under a study, test, pilot, or time-limited experimental protocol.",
  "market-authorization": "Operative permission to sell or supply the specified product for the specified use.",
  "ai-managed": "AI holds primary routine executive decision authority; advice or a symbolic title is insufficient.",
  "ai-led": "AI exercises primary ordinary executive authority while humans do not retain routine decisive control.",
  humanoid: "A mobile embodied robot with a humanlike torso and limb arrangement relevant to human environments.",
  "brain-computer-interface": "A system that measures or stimulates neural activity to exchange information directly with a computing system.",
  "mind-upload": "A durable digital implementation claimed to preserve an identified person's function and continuity under the metric's tests.",
  "shipping-product": "A product available for ordinary purchase and delivery in the stated market at the cutoff.",
  "independent-operation": "Operation without case-by-case human permission or remote control for the measured act.",
} as const;
export type GlossaryKey = keyof typeof FPB_GLOSSARY;
