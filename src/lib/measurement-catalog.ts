import type { MeasurementSpec } from "./measurement-types.ts";

/**
 * Explicit FPB-MS catalogue. Specifications are stored as canonical data; no runtime
 * parsing, keyword inference, ladder heuristic, or legacy-definition migration occurs here.
 */
const MEASUREMENT_SPECS = [
  {
    "id": "ai-millennium-problems",
    "title": "Millennium Prize Problems Solved",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many of the seven Clay Millennium Prize Problems have been solved primarily by AI?",
    "construct": "Count a problem only when AI supplies the essential solution and it receives recognition equivalent to genuine resolution. Human prompting, checking, and formalization are allowed; an essential human novel lemma or decisive proof step disqualifies primary-AI attribution. A historical human solution does not count. Each of the seven named Clay problems is counted independently when AI supplies a qualifying solution, including an independently qualifying solution to a problem previously solved by a human. All seven levels therefore measure the same count.",
    "rationale": "This capability indicator represents the field's progress in millennium prize problems solved under a reproducible boundary.",
    "variable": "Millennium Prize Problems Solved result",
    "unit": "problems",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count a problem only when AI supplies the essential solution and it receives recognition equivalent to genuine resolution.",
        "A historical human solution does not count.",
        "All seven levels therefore measure the same count."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a problem only when AI supplies the essential solution and it receives recognition equivalent to genuine resolution. Human prompting, checking, and formalization are allowed; an essential human novel lemma or decisive proof step disqualifies primary-AI attribution. A historical human solution does not count. Each of the seven named Clay problems is counted independently when AI supplies a qualifying solution, including an independently qualifying solution to a problem previously solved by a human. All seven levels therefore measure the same count.",
      "metadataPending": false
    }
  },
  {
    "id": "ai-exclusively-professors",
    "title": "AI-Professors-Only Universities",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many recognized colleges and universities worldwide are “AI professors only,” meaning ordinary academic instruction and academic assessment are performed entirely by AI/AI-controlled systems rather than human instructors?",
    "construct": "Count a currently recognized degree-granting institution only when AI systems perform all ordinary academic instruction and assessment. Human administration, maintenance, and safeguarding are allowed, but routine human teaching or grading excludes the institution; pilots, individual courses, tutoring tools, and announced plans do not count.",
    "rationale": "This capability indicator represents the field's progress in ai-professors-only universities under a reproducible boundary.",
    "variable": "AI-Professors-Only Universities result",
    "unit": "universities",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count a currently recognized degree-granting institution only when AI systems perform all ordinary academic instruction and assessment."
      ],
      "exclusionCriteria": [
        "Human administration, maintenance, and safeguarding are allowed, but routine human teaching or grading excludes the institution; pilots, individual courses, tutoring tools, and announced plans do not count."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a currently recognized degree-granting institution only when AI systems perform all ordinary academic instruction and assessment. Human administration, maintenance, and safeguarding are allowed, but routine human teaching or grading excludes the institution; pilots, individual courses, tutoring tools, and announced plans do not count.",
      "metadataPending": false
    }
  },
  {
    "id": "ai-led-companies",
    "title": "AI-Managed Top Companies",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many companies among the 100 largest publicly traded companies worldwide by market capitalization are AI-managed as of the research cutoff?",
    "construct": "At the cutoff, rank publicly traded companies by equity market capitalization in one compatible worldwide snapshot and inspect the top 100; private-company valuations are excluded. Count a company only when an AI system holds primary ordinary executive decision authority; AI advice, automation, an AI title without authority, or human veto over routine management does not qualify. Count each company once.",
    "rationale": "This adoption indicator represents the field's progress in ai-managed top companies under a reproducible boundary.",
    "variable": "AI-Managed Top Companies result",
    "unit": "companies",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count each company once."
      ],
      "exclusionCriteria": [
        "Count a company only when an AI system holds primary ordinary executive decision authority; AI advice, automation, an AI title without authority, or human veto over routine management does not qualify."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "At the cutoff, rank publicly traded companies by equity market capitalization in one compatible worldwide snapshot and inspect the top 100; private-company valuations are excluded. Count a company only when an AI system holds primary ordinary executive decision authority; AI advice, automation, an AI title without authority, or human veto over routine management does not qualify. Count each company once.",
      "metadataPending": false
    }
  },
  {
    "id": "ai-led-countries-1",
    "title": "Countries Primarily Led by AI",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the current number of countries primarily led by AI?",
    "construct": "Count a sovereign state in the 195-state scope only when an AI system exercises primary ordinary national executive authority at the cutoff. Advisory systems, automated services, symbolic appointments, and governments whose human officials retain decisive authority are excluded.",
    "rationale": "This policy indicator represents the field's progress in countries primarily led by ai under a reproducible boundary.",
    "variable": "Countries Primarily Led by AI result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a sovereign state in the 195-state scope only when an AI system exercises primary ordinary national executive authority at the cutoff."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a sovereign state in the 195-state scope only when an AI system exercises primary ordinary national executive authority at the cutoff. Advisory systems, automated services, symbolic appointments, and governments whose human officials retain decisive authority are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "robotics-1",
    "title": "Customer-Delivered Humanoid General-Purpose Robots",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many qualifying general-purpose-platform humanoid robots have been delivered to external end customers worldwide as of the research cutoff?",
    "construct": "Count each physical humanoid once after delivery to an external customer when its platform is designed or sold as multi-purpose or general-purpose. Exclude vendor-internal R&D and demo inventory, undelivered production, orders and preorders, fixed single-task machines, wheeled dual-arm and non-humanoid platforms. This is cumulative delivery, not installed-active population.",
    "rationale": "This adoption indicator represents the field's progress in deployed humanoid general-purpose robots under a reproducible boundary.",
    "variable": "Deployed Humanoid General-Purpose Robots result",
    "unit": "robots",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count currently active, physically deployed humanoid robots able to perform multiple materially different useful tasks.",
        "Laboratory prototypes, single-purpose machines, inactive units, duplicate reports of the same fleet, and teleoperated demonstrations are excluded; estimates must disclose fleet-count uncertainty."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "deployed",
        "active",
        "humanoid"
      ]
    },
    "protocol": {
      "updateCadence": "monthly",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count each physical humanoid once after delivery to an external customer when its platform is designed or sold as multi-purpose or general-purpose. Exclude vendor-internal R&D and demo inventory, undelivered production, orders and preorders, fixed single-task machines, wheeled dual-arm and non-humanoid platforms. This is cumulative delivery, not installed-active population.",
      "metadataPending": false
    }
  },
  {
    "id": "robotics-2",
    "title": "Household Humanoid Robot Share",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the global share of households with a general-purpose humanoid robot assigned for routine household use or qualifying regular household access?",
    "construct": "Denominator: all households worldwide at the cutoff. Count a household once when a qualifying general-purpose humanoid robot is physically resident there and routinely available to that household for useful household tasks. Paid or contracted early-access deployments may qualify. Manufacturer-controlled R&D placements whose principal purpose is testing or data collection do not qualify. Hotel, workplace, public/shared robots, occasional rentals, and one-time access are excluded.",
    "rationale": "This adoption indicator represents the field's progress in household humanoid robot share under a reproducible boundary.",
    "variable": "Household Humanoid Robot Share result",
    "unit": "%",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "ratio": {
      "numeratorDefinition": "Entities or activity satisfying the condition in: What is the global share of households with a general-purpose humanoid robot assigned for routine household use or qualifying regular household access?",
      "denominatorDefinition": "all households worldwide at the research cutoff",
      "period": "reporting period used by both numerator and denominator",
      "geography": "worldwide",
      "aggregationRule": "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.",
      "compatibilityRule": "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a household once when a qualifying general-purpose humanoid robot is physically resident there and routinely available to that household for useful household tasks."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "humanoid"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Denominator: all households worldwide at the cutoff. Count a household once when a qualifying general-purpose humanoid robot is physically resident there and routinely available to that household for useful household tasks. Paid or contracted early-access deployments may qualify. Manufacturer-controlled R&D placements whose principal purpose is testing or data collection do not qualify. Hotel, workplace, public/shared robots, occasional rentals, and one-time access are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "robotics-police-countries",
    "title": "Countries with Independent Humanoid Robot Police",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries currently have humanoid robots performing ordinary independent police or security duty under the project’s strict independent-authority definition?",
    "construct": "Count a sovereign country only when a humanoid robot performs ordinary operational police or security duty with lawful independent detention authority and no human approval per detention. Demos, research pilots, patrol, information, surveillance, telepresence, bomb disposal, and human-decided detention do not count.",
    "rationale": "This policy indicator represents the field's progress in countries with independent humanoid robot police under a reproducible boundary.",
    "variable": "Countries with Independent Humanoid Robot Police result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a sovereign country only when a humanoid robot performs ordinary operational police or security duty with lawful independent detention authority and no human approval per detention."
      ],
      "exclusionCriteria": [
        "Demos, research pilots, patrol, information, surveillance, telepresence, bomb disposal, and human-decided detention do not count."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "operational",
        "humanoid",
        "ordinary-use",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a sovereign country only when a humanoid robot performs ordinary operational police or security duty with lawful independent detention authority and no human approval per detention. Demos, research pilots, patrol, information, surveillance, telepresence, bomb disposal, and human-decided detention do not count.",
      "metadataPending": false
    }
  },
  {
    "id": "robotics-3",
    "title": "Fully Autonomous Major Surgery Share",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the global share of major surgeries performed fully autonomously by robots?",
    "construct": "Numerator: qualifying major surgical procedures completed end-to-end by a robot without a human performing or approving operative steps. Denominator: all qualifying major surgical procedures worldwide during the same compatible period. Supervised autonomy, isolated autonomous subtasks, simulations, and animal or cadaver trials are excluded.",
    "rationale": "This adoption indicator represents the field's progress in fully autonomous major surgery share under a reproducible boundary.",
    "variable": "Fully Autonomous Major Surgery Share result",
    "unit": "%",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "ratio": {
      "numeratorDefinition": "qualifying major surgical procedures completed end-to-end by a robot without a human performing or approving operative steps",
      "denominatorDefinition": "all qualifying major surgical procedures worldwide during the compatible measurement period",
      "period": "reporting period used by both numerator and denominator",
      "geography": "worldwide",
      "aggregationRule": "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.",
      "compatibilityRule": "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis."
    },
    "qualification": {
      "inclusionCriteria": [
        "Apply every affirmative condition in the operational definition."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "autonomous"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Numerator: qualifying major surgical procedures completed end-to-end by a robot without a human performing or approving operative steps. Denominator: all qualifying major surgical procedures worldwide during the same compatible period. Supervised autonomy, isolated autonomous subtasks, simulations, and animal or cadaver trials are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "self-driving-car-2",
    "title": "Countries Allowing Ordinary Driverless L4/L5",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many of the project's 195 sovereign states have at least one city where an SAE Level 4 or Level 5 driverless public service is authorized and actually operating outside a trial as of the research cutoff?",
    "construct": "Count a country once when at least one city permits ordinary public driverless SAE Level 4 or Level 5 service beyond testing or a time-limited trial. Safety-driver operations, closed courses, test permits, and availability announced but not operating are excluded; geofenced L4 qualifies only here.",
    "rationale": "This policy indicator represents the field's progress in countries allowing ordinary driverless l4/l5 under a reproducible boundary.",
    "variable": "Countries Allowing Ordinary Driverless L4/L5 result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country once when at least one city permits ordinary public driverless SAE Level 4 or Level 5 service beyond testing or a time-limited trial."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country once when at least one city permits ordinary public driverless SAE Level 4 or Level 5 service beyond testing or a time-limited trial. Safety-driver operations, closed courses, test permits, and availability announced but not operating are excluded; geofenced L4 qualifies only here.",
      "metadataPending": false
    }
  },
  {
    "id": "self-driving-car-3",
    "title": "Countries Allowing Nationwide Level 5",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "In how many countries are Level 5 self-driving cars legally allowed throughout the country’s entire public-road territory?",
    "construct": "Count a country only when ordinary SAE Level 5 operation is lawful throughout its complete public-road territory. Geofenced, route-limited, weather-limited, or other Level 4 permissions do not count, nor do testing statutes without an ordinary-use authorization.",
    "rationale": "This policy indicator represents the field's progress in countries allowing nationwide level 5 under a reproducible boundary.",
    "variable": "Countries Allowing Nationwide Level 5 result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country only when ordinary SAE Level 5 operation is lawful throughout its complete public-road territory."
      ],
      "exclusionCriteria": [
        "Geofenced, route-limited, weather-limited, or other Level 4 permissions do not count, nor do testing statutes without an ordinary-use authorization."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country only when ordinary SAE Level 5 operation is lawful throughout its complete public-road territory. Geofenced, route-limited, weather-limited, or other Level 4 permissions do not count, nor do testing statutes without an ordinary-use authorization.",
      "metadataPending": false
    }
  },
  {
    "id": "self-driving-car-1",
    "title": "Countries Prohibiting Ordinary Manual Driving",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries have simultaneously abolished ordinary human public-road driving, restricted newly sold ordinary road vehicles to autonomous operation with no conventional manual mode, and criminalized unauthorized manual driving of legacy vehicles?",
    "construct": "Count a country only when all three conditions apply nationally: ordinary manual public-road driving is abolished, new ordinary road vehicles may not provide a conventional manual mode, and unauthorized manual operation of legacy vehicles is criminalized. Proposals and local restrictions are excluded.",
    "rationale": "This policy indicator represents the field's progress in countries prohibiting ordinary manual driving under a reproducible boundary.",
    "variable": "Countries Prohibiting Ordinary Manual Driving result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country only when all three conditions apply nationally: ordinary manual public-road driving is abolished, new ordinary road vehicles may not provide a conventional manual mode, and unauthorized manual operation of legacy vehicles is criminalized."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "autonomous",
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country only when all three conditions apply nationally: ordinary manual public-road driving is abolished, new ordinary road vehicles may not provide a conventional manual mode, and unauthorized manual operation of legacy vehicles is criminalized. Proposals and local restrictions are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "self-driving-car-4",
    "title": "Operational SAE Level 5 Cars",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many SAE Level 5 self-driving cars are currently in ordinary operational use worldwide?",
    "construct": "Count currently deployed vehicles in ordinary use only when they actually satisfy SAE Level 5 under all roadway and environmental conditions a human driver could manage. Geofenced Level 4 robotaxis, test fleets, prototypes, and vehicles requiring a fallback driver are excluded.",
    "rationale": "This adoption indicator represents the field's progress in operational sae level 5 cars under a reproducible boundary.",
    "variable": "Operational SAE Level 5 Cars result",
    "unit": "vehicles",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count currently deployed vehicles in ordinary use only when they actually satisfy SAE Level 5 under all roadway and environmental conditions a human driver could manage."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "operational",
        "deployed",
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count currently deployed vehicles in ordinary use only when they actually satisfy SAE Level 5 under all roadway and environmental conditions a human driver could manage. Geofenced Level 4 robotaxis, test fleets, prototypes, and vehicles requiring a fallback driver are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "lev-1",
    "title": "World Life Expectancy at Birth",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the current world life expectancy at birth, both sexes combined?",
    "construct": "Use the latest authoritative worldwide period life-expectancy-at-birth estimate available by the cutoff, both sexes combined. Preserve its data year and model uncertainty; do not mix national series, healthy life expectancy, cohort expectancy, or projections from incompatible releases.",
    "rationale": "This outcome indicator represents the field's progress in world life expectancy at birth under a reproducible boundary.",
    "variable": "World Life Expectancy at Birth result",
    "unit": "years",
    "isLowerBetter": false,
    "indicatorType": "outcome",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Use the latest authoritative worldwide period life-expectancy-at-birth estimate available by the cutoff, both sexes combined."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Use the latest authoritative worldwide period life-expectancy-at-birth estimate available by the cutoff, both sexes combined. Preserve its data year and model uncertainty; do not mix national series, healthy life expectancy, cohort expectancy, or projections from incompatible releases.",
      "metadataPending": false
    }
  },
  {
    "id": "lev-2",
    "title": "Highest National Life Expectancy at Birth",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the current life expectancy at birth of the country with the highest value in the same authoritative dataset and data year?",
    "construct": "Within one authoritative dataset and one data year, select the sovereign country with the highest both-sexes life expectancy at birth. Do not combine national agencies or years, and do not substitute territories unless the source ranks them in the project country scope.",
    "rationale": "This outcome indicator represents the field's progress in highest national life expectancy at birth under a reproducible boundary.",
    "variable": "Highest National Life Expectancy at Birth result",
    "unit": "years",
    "isLowerBetter": false,
    "indicatorType": "outcome",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Within one authoritative dataset and one data year, select the sovereign country with the highest both-sexes life expectancy at birth."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Within one authoritative dataset and one data year, select the sovereign country with the highest both-sexes life expectancy at birth. Do not combine national agencies or years, and do not substitute territories unless the source ranks them in the project country scope.",
      "metadataPending": false
    }
  },
  {
    "id": "lev-3",
    "title": "Oldest Verified Living Human",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How old is the oldest verified living human in the world as of the research cutoff?",
    "construct": "At the cutoff, use an age-validated living-person list and count the age of its oldest person still known alive. This is a current observation, not the all-time longevity record; unvalidated claims and people deceased before the cutoff are excluded.",
    "rationale": "This outcome indicator represents the field's progress in oldest verified living human under a reproducible boundary.",
    "variable": "Oldest Verified Living Human result",
    "unit": "years",
    "isLowerBetter": false,
    "indicatorType": "outcome",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "At the cutoff, use an age-validated living-person list and count the age of its oldest person still known alive.",
        "This is a current observation, not the all-time longevity record; unvalidated claims and people deceased before the cutoff are excluded."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "At the cutoff, use an age-validated living-person list and count the age of its oldest person still known alive. This is a current observation, not the all-time longevity record; unvalidated claims and people deceased before the cutoff are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "lev-4",
    "title": "GRG-Validated Living Supercentenarians",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the number of GRG-validated living supercentenarians at the cutoff?",
    "construct": "Count the living entries marked validated on the Gerontology Research Group list at the cutoff, once per person. This is the exact list count, not a minimum estimate of the true worldwide supercentenarian population; pending and unvalidated cases are excluded.",
    "rationale": "This outcome indicator represents the field's progress in grg-validated living supercentenarians under a reproducible boundary.",
    "variable": "GRG-Validated Living Supercentenarians result",
    "unit": "people",
    "isLowerBetter": false,
    "indicatorType": "outcome",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count the living entries marked validated on the Gerontology Research Group list at the cutoff, once per person.",
        "This is the exact list count, not a minimum estimate of the true worldwide supercentenarian population; pending and unvalidated cases are excluded."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count the living entries marked validated on the Gerontology Research Group list at the cutoff, once per person. This is the exact list count, not a minimum estimate of the true worldwide supercentenarian population; pending and unvalidated cases are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "space-1",
    "title": "Humans Simultaneously Above the Kármán Line",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum simultaneous human population above the 100 km FAI Kármán line ever achieved?",
    "construct": "Record the largest number of living humans simultaneously above the FAI 100 km Kármán line. Count each person once during overlapping intervals; announced crews, sub-100-km flights, and people before launch or after descent are excluded.",
    "rationale": "This adoption indicator represents the field's progress in humans simultaneously above the kármán line under a reproducible boundary.",
    "variable": "Humans Simultaneously Above the Kármán Line result",
    "unit": "humans",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the largest number of living humans simultaneously above the FAI 100 km Kármán line.",
        "Count each person once during overlapping intervals; announced crews, sub-100-km flights, and people before launch or after descent are excluded."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the largest number of living humans simultaneously above the FAI 100 km Kármán line. Count each person once during overlapping intervals; announced crews, sub-100-km flights, and people before launch or after descent are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "space-moon-pop",
    "title": "Humans Simultaneously on the Moon",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum simultaneous human population on or beneath the Moon’s surface ever achieved?",
    "construct": "Record the greatest number of living humans simultaneously on or beneath the lunar surface. People only in lunar orbit, en route, or represented robotically do not count.",
    "rationale": "This adoption indicator represents the field's progress in humans simultaneously on the moon under a reproducible boundary.",
    "variable": "Humans Simultaneously on the Moon result",
    "unit": "humans",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the greatest number of living humans simultaneously on or beneath the lunar surface."
      ],
      "exclusionCriteria": [
        "People only in lunar orbit, en route, or represented robotically do not count."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the greatest number of living humans simultaneously on or beneath the lunar surface. People only in lunar orbit, en route, or represented robotically do not count.",
      "metadataPending": false
    }
  },
  {
    "id": "space-mars-pop",
    "title": "Humans Simultaneously on Mars",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum simultaneous human population on or beneath Mars’s surface ever achieved?",
    "construct": "Record the greatest number of living humans simultaneously on or beneath Mars. Orbiters, robotic missions, simulations, and announced crews do not count.",
    "rationale": "This adoption indicator represents the field's progress in humans simultaneously on mars under a reproducible boundary.",
    "variable": "Humans Simultaneously on Mars result",
    "unit": "humans",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the greatest number of living humans simultaneously on or beneath Mars."
      ],
      "exclusionCriteria": [
        "Orbiters, robotic missions, simulations, and announced crews do not count."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the greatest number of living humans simultaneously on or beneath Mars. Orbiters, robotic missions, simulations, and announced crews do not count.",
      "metadataPending": false
    }
  },
  {
    "id": "space-2",
    "title": "Useful Payload Delivered to LEO",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum net useful payload mass actually delivered to LEO in one launch, ever achieved, in metric tonnes?",
    "construct": "Record actual net mission-useful mass inserted into qualifying LEO by one completed launch, not advertised launcher capacity. A reusable spacecraft or orbiter counts when it is itself the mission-useful object delivered and operated in orbit; propellant and stages discarded before orbit do not.",
    "rationale": "This capability indicator represents the field's progress in useful payload delivered to leo under a reproducible boundary.",
    "variable": "Useful Payload Delivered to LEO result",
    "unit": "metric tonnes",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record actual net mission-useful mass inserted into qualifying LEO by one completed launch, not advertised launcher capacity."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record actual net mission-useful mass inserted into qualifying LEO by one completed launch, not advertised launcher capacity. A reusable spacecraft or orbiter counts when it is itself the mission-useful object delivered and operated in orbit; propellant and stages discarded before orbit do not.",
      "metadataPending": false
    }
  },
  {
    "id": "qc-gate-model-physical-qubits",
    "title": "Universal Gate-Model Physical Qubits",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum number of physical qubits in an operational universal gate-model quantum computer?",
    "construct": "Record the largest single operational programmable universal gate-model system. Physical qubits must be installed and usable in demonstrated operation; coherent modules may count together. Annealers, analogue-only simulators, announcements, non-operational fabricated devices, and logical qubits counted again as physical qubits are excluded.",
    "rationale": "This capability indicator represents the field's progress in universal gate-model physical qubits under a reproducible boundary.",
    "variable": "Universal Gate-Model Physical Qubits result",
    "unit": "physical qubits",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the largest single operational programmable universal gate-model system.",
        "Physical qubits must be installed and usable in demonstrated operation; coherent modules may count together."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "operational"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the largest single operational programmable universal gate-model system. Physical qubits must be installed and usable in demonstrated operation; coherent modules may count together. Annealers, analogue-only simulators, announcements, non-operational fabricated devices, and logical qubits counted again as physical qubits are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "qc-system-two-qubit-fidelity",
    "title": "Processor-Wide Two-Qubit Gate Fidelity",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the best processor-wide average two-qubit gate fidelity experimentally demonstrated under a defensible processor-wide methodology?",
    "construct": "Use an experimentally measured processor-wide average for normal-operation two-qubit gates on a programmable universal gate-model processor with at least 50 physical qubits. A best pair, cherry-picked gate, simulation, or undisclosed averaging method does not qualify; the 50-qubit floor is a project convention.",
    "rationale": "This capability indicator represents the field's progress in processor-wide two-qubit gate fidelity under a reproducible boundary.",
    "variable": "Processor-Wide Two-Qubit Gate Fidelity result",
    "unit": "%",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "ratio": {
      "numeratorDefinition": "Entities or activity satisfying the condition in: What is the best processor-wide average two-qubit gate fidelity experimentally demonstrated under a defensible processor-wide methodology?",
      "denominatorDefinition": "Processor-wide average over the defensibly documented two-qubit gate set",
      "period": "reporting period used by both numerator and denominator",
      "geography": "same geography for numerator and denominator",
      "aggregationRule": "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.",
      "compatibilityRule": "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis."
    },
    "qualification": {
      "inclusionCriteria": [
        "Use an experimentally measured processor-wide average for normal-operation two-qubit gates on a programmable universal gate-model processor with at least 50 physical qubits."
      ],
      "exclusionCriteria": [
        "A best pair, cherry-picked gate, simulation, or undisclosed averaging method does not qualify; the 50-qubit floor is a project convention."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Use an experimentally measured processor-wide average for normal-operation two-qubit gates on a programmable universal gate-model processor with at least 50 physical qubits. A best pair, cherry-picked gate, simulation, or undisclosed averaging method does not qualify; the 50-qubit floor is a project convention.",
      "metadataPending": false
    }
  },
  {
    "id": "qc-3",
    "title": "Quantum Volume",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the highest Quantum Volume experimentally demonstrated under the actual Quantum Volume protocol?",
    "construct": "Record the highest Quantum Volume actually demonstrated under the published Quantum Volume protocol. Use the achieved value, not an extrapolation from qubit count, a roadmap target, or another benchmark renamed as Quantum Volume.",
    "rationale": "This capability indicator represents the field's progress in quantum volume under a reproducible boundary.",
    "variable": "Quantum Volume result",
    "unit": "Quantum Volume",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the highest Quantum Volume actually demonstrated under the published Quantum Volume protocol.",
        "Use the achieved value, not an extrapolation from qubit count, a roadmap target, or another benchmark renamed as Quantum Volume."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the highest Quantum Volume actually demonstrated under the published Quantum Volume protocol. Use the achieved value, not an extrapolation from qubit count, a roadmap target, or another benchmark renamed as Quantum Volume.",
      "metadataPending": false
    }
  },
  {
    "id": "qc-4",
    "title": "Hardware-Aware CLOPS_h",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the highest hardware-aware CLOPS_h experimentally demonstrated in a quantum processor?",
    "construct": "Record the highest experimentally demonstrated hardware-aware CLOPS_h value. The benchmark must include the hardware execution component specified by CLOPS_h; ordinary CLOPS, theoretical throughput, simulator results, and roadmap projections are distinct and excluded.",
    "rationale": "This capability indicator represents the field's progress in hardware-aware clops_h under a reproducible boundary.",
    "variable": "Hardware-Aware CLOPS_h result",
    "unit": "CLOPS_h",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the highest experimentally demonstrated hardware-aware CLOPS_h value."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the highest experimentally demonstrated hardware-aware CLOPS_h value. The benchmark must include the hardware execution component specified by CLOPS_h; ordinary CLOPS, theoretical throughput, simulator results, and roadmap projections are distinct and excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "superconductor-1",
    "title": "Room-Temperature Superconductivity Pressure",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the lowest critical pressure at which credible superconductivity has been demonstrated at room temperature (Tc >= 293 K)?",
    "construct": "Seek the lowest pressure with credible, independently supportable superconductivity at Tc ≥ 293 K. Retracted, unreproduced, or non-superconducting-transition claims are excluded. If no qualifying result survives review, report NO VERIFIED RESULT rather than a numeric pressure.",
    "rationale": "This capability indicator represents the field's progress in room-temperature superconductivity pressure under a reproducible boundary.",
    "variable": "Room-Temperature Superconductivity Pressure result",
    "unit": "GPa",
    "isLowerBetter": true,
    "indicatorType": "capability",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Seek the lowest pressure with credible, independently supportable superconductivity at Tc ≥ 293 K."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Seek the lowest pressure with credible, independently supportable superconductivity at Tc ≥ 293 K. Retracted, unreproduced, or non-superconducting-transition claims are excluded. If no qualifying result survives review, report NO VERIFIED RESULT rather than a numeric pressure.",
      "metadataPending": false
    }
  },
  {
    "id": "superconductor-je-20k-20t",
    "title": "Commercial REBCO Engineering Current Density",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum engineering current density of commercial REBCO wire at 20 K and 20 T under the standardized current-production metric now used by the project?",
    "construct": "Use commercial production-scale REBCO/YBCO coated conductor at 20 K and 20 T with B parallel to c (perpendicular to tape face). Engineering current density is transport critical current divided by the entire conductor cross-section; laboratory microfilms and incompatible field orientations are excluded.",
    "rationale": "This capability indicator represents the field's progress in commercial rebco engineering current density under a reproducible boundary.",
    "variable": "Commercial REBCO Engineering Current Density result",
    "unit": "A/mm²",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Use commercial production-scale REBCO/YBCO coated conductor at 20 K and 20 T with B parallel to c (perpendicular to tape face)."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Use commercial production-scale REBCO/YBCO coated conductor at 20 K and 20 T with B parallel to c (perpendicular to tape face). Engineering current density is transport critical current divided by the entire conductor cross-section; laboratory microfilms and incompatible field orientations are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "superconductor-3",
    "title": "Continuous Superconducting DC Field",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the highest continuous DC or steady magnetic field ever achieved using a superconducting magnet or superconducting insert?",
    "construct": "Record the highest continuous DC total hybrid field from a system containing a superconducting magnet or insert. The evidence package must report the superconducting and non-superconducting component contributions and must not attribute the total hybrid field to the superconducting component alone.",
    "rationale": "This capability indicator represents the field's progress in continuous superconducting dc field under a reproducible boundary.",
    "variable": "Continuous Superconducting DC Field result",
    "unit": "tesla",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the highest continuous DC total hybrid field from a system containing a superconducting magnet or insert."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the highest continuous DC total hybrid field from a system containing a superconducting magnet or insert. The evidence package must report the superconducting and non-superconducting component contributions and must not attribute the total hybrid field to the superconducting component alone.",
      "metadataPending": false
    }
  },
  {
    "id": "superconductor-commercial-piece-length",
    "title": "Commercial 2G HTS Tape Piece Length",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum published continuous piece length of commercial production-scale 2G HTS tape under the project’s standardized commercial-piece-length definition?",
    "construct": "Measure the maximum length in a manufacturer-published commercial specification for one continuous splice-free production-scale REBCO/2G HTS tape piece. A published offered range up to 1,000 m is the measurement object and supports 1.0 km; laboratory one-offs, aggregate reel totals, and joined pieces are excluded.",
    "rationale": "This capability indicator represents the field's progress in commercial 2g hts tape piece length under a reproducible boundary.",
    "variable": "Commercial 2G HTS Tape Piece Length result",
    "unit": "km",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Measure the maximum length in a manufacturer-published commercial specification for one continuous splice-free production-scale REBCO/2G HTS tape piece."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Measure the maximum length in a manufacturer-published commercial specification for one continuous splice-free production-scale REBCO/2G HTS tape piece. A published offered range up to 1,000 m is the measurement object and supports 1.0 km; laboratory one-offs, aggregate reel totals, and joined pieces are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "bci-1",
    "title": "People Ever Implanted with Qualifying BCIs",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many people worldwide have ever received a qualifying chronic internal neural-reading BCI implant as of the research cutoff?",
    "construct": "Count cumulative unique recipients after a qualifying chronic internal implant that reads neural signals. Later explant or death does not erase the historical implantation. Exclude temporary intraoperative or recording sessions, stimulation-only implants, non-invasive EEG, peripheral-only interfaces, enrollment targets, and duplicate cohort reports. Public reporting is not an exhaustive worldwide registry, so the result is a lower bound.",
    "rationale": "This adoption indicator represents the field's progress in living people with qualifying bcis under a reproducible boundary.",
    "variable": "Living People with Qualifying BCIs result",
    "unit": "people",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count each living person once only when evidence supports a currently retained, fully internal chronic invasive or semi-invasive implant that reads neural signals."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "brain-computer-interface"
      ]
    },
    "protocol": {
      "updateCadence": "monthly",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count cumulative unique recipients after a qualifying chronic internal implant that reads neural signals. Later explant or death does not erase the historical implantation. Exclude temporary intraoperative or recording sessions, stimulation-only implants, non-invasive EEG, peripheral-only interfaces, enrollment targets, and duplicate cohort reports. Public reporting is not an exhaustive worldwide registry, so the result is a lower bound.",
      "metadataPending": false
    }
  },
  {
    "id": "bci-2",
    "title": "Countries Authorizing Industry BCI Trials",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many of the project's 195 sovereign states have granted formal regulatory authorization for an industry-sponsored human clinical trial of a BCI meeting this specification as of the research cutoff?",
    "construct": "Count a country once when its regulator or authorized ethics/trial system has approved an industry-sponsored human trial of a chronic internal neural-reading BCI. Registrations without authorization, academic-only work, stimulation-only devices, non-invasive systems, and enrollment targets are excluded.",
    "rationale": "This policy indicator represents the field's progress in countries authorizing industry bci trials under a reproducible boundary.",
    "variable": "Countries Authorizing Industry BCI Trials result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country once when its regulator or authorized ethics/trial system has approved an industry-sponsored human trial of a chronic internal neural-reading BCI."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "brain-computer-interface",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country once when its regulator or authorized ethics/trial system has approved an industry-sponsored human trial of a chronic internal neural-reading BCI. Registrations without authorization, academic-only work, stimulation-only devices, non-invasive systems, and enrollment targets are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "bci-3",
    "title": "Countries with Ordinary Medical BCI Authorization",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many of the project's 195 sovereign states have granted ordinary non-experimental medical authorization for a BCI meeting this specification as of the research cutoff?",
    "construct": "Count a country once only when a qualifying chronic internal neural-reading BCI has ordinary medical authorization outside a clinical trial. Trial permission, compassionate use, stimulation-only implants, and non-invasive systems do not count.",
    "rationale": "This policy indicator represents the field's progress in countries with ordinary medical bci authorization under a reproducible boundary.",
    "variable": "Countries with Ordinary Medical BCI Authorization result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country once only when a qualifying chronic internal neural-reading BCI has ordinary medical authorization outside a clinical trial."
      ],
      "exclusionCriteria": [
        "Trial permission, compassionate use, stimulation-only implants, and non-invasive systems do not count."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "brain-computer-interface",
        "ordinary-use",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country once only when a qualifying chronic internal neural-reading BCI has ordinary medical authorization outside a clinical trial. Trial permission, compassionate use, stimulation-only implants, and non-invasive systems do not count.",
      "metadataPending": false
    }
  },
  {
    "id": "bci-4",
    "title": "Countries Allowing Elective Healthy-Human BCIs",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries affirmatively allow next-generation cortex-reading chronic BCIs to be implanted electively in healthy humans for voluntary non-medical purposes?",
    "construct": "Count a country only when law affirmatively permits elective implantation in healthy people of a chronic internal cortex-reading BCI for voluntary non-medical use. Medical trials, therapeutic approvals, regulatory silence, and non-invasive consumer EEG are excluded.",
    "rationale": "This policy indicator represents the field's progress in countries allowing elective healthy-human bcis under a reproducible boundary.",
    "variable": "Countries Allowing Elective Healthy-Human BCIs result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country only when law affirmatively permits elective implantation in healthy people of a chronic internal cortex-reading BCI for voluntary non-medical use."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "brain-computer-interface"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country only when law affirmatively permits elective implantation in healthy people of a chronic internal cortex-reading BCI for voluntary non-medical use. Medical trials, therapeutic approvals, regulatory silence, and non-invasive consumer EEG are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "mind-upload-price-1",
    "title": "Commercial Mind-Upload Price",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the current average commercial price for a qualifying mind upload of one adult individual?",
    "construct": "A qualifying product must create a functional personal emulation derived from one specific adult human brain. Chatbots, voice clones, persona models, connectomes, and generic brain simulations do not qualify. Average actual commercial transaction prices worldwide; if no qualifying market exists, report N/A rather than zero.",
    "rationale": "This market indicator represents the field's progress in commercial mind-upload price under a reproducible boundary.",
    "variable": "Commercial Mind-Upload Price result",
    "unit": "dollars",
    "isLowerBetter": true,
    "indicatorType": "market",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Apply every affirmative condition in the operational definition."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "A qualifying product must create a functional personal emulation derived from one specific adult human brain. Chatbots, voice clones, persona models, connectomes, and generic brain simulations do not qualify. Average actual commercial transaction prices worldwide; if no qualifying market exists, report N/A rather than zero.",
      "metadataPending": false
    }
  },
  {
    "id": "mind-upload-adoption-1",
    "title": "Uploaded Individuals",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many distinct human individuals currently have qualifying mind uploads stored or operational in durable digital environments?",
    "construct": "Count original human individuals with a durable functional personal emulation derived from their specific brain. Chatbots, voice clones, persona bots, connectomes alone, and generic simulations are excluded; multiple copies or forks of one person count that original person once.",
    "rationale": "This adoption indicator represents the field's progress in uploaded individuals under a reproducible boundary.",
    "variable": "Uploaded Individuals result",
    "unit": "people",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count original human individuals with a durable functional personal emulation derived from their specific brain.",
        "Chatbots, voice clones, persona bots, connectomes alone, and generic simulations are excluded; multiple copies or forks of one person count that original person once."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "operational"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count original human individuals with a durable functional personal emulation derived from their specific brain. Chatbots, voice clones, persona bots, connectomes alone, and generic simulations are excluded; multiple copies or forks of one person count that original person once.",
      "metadataPending": false
    }
  },
  {
    "id": "mind-upload-adoption-2",
    "title": "Countries Legally Allowing Mind Uploads",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries affirmatively legally allow citizens to undergo a real qualifying mind-upload procedure?",
    "construct": "Count a country only when its law affirmatively permits a real procedure producing a qualifying functional personal emulation from a specific human brain. Rules for data, avatars, AI replicas, or connectome research alone do not qualify.",
    "rationale": "This policy indicator represents the field's progress in countries legally allowing mind uploads under a reproducible boundary.",
    "variable": "Countries Legally Allowing Mind Uploads result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country only when its law affirmatively permits a real procedure producing a qualifying functional personal emulation from a specific human brain."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country only when its law affirmatively permits a real procedure producing a qualifying functional personal emulation from a specific human brain. Rules for data, avatars, AI replicas, or connectome research alone do not qualify.",
      "metadataPending": false
    }
  },
  {
    "id": "mind-upload-1",
    "title": "Largest Published Connectome",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the world’s largest connectome ever mapped, measured by the number of individually represented neurons in the published synaptic graph?",
    "construct": "Record the published synaptic graph containing the greatest number of individually represented neurons. Count neurons, not synapses or image volume; require a released scientific dataset or paper and avoid double-counting fragments. A connectome alone is not a mind upload.",
    "rationale": "This capability indicator represents the field's progress in largest published connectome under a reproducible boundary.",
    "variable": "Largest Published Connectome result",
    "unit": "neurons",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the published synaptic graph containing the greatest number of individually represented neurons.",
        "Count neurons, not synapses or image volume; require a released scientific dataset or paper and avoid double-counting fragments."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the published synaptic graph containing the greatest number of individually represented neurons. Count neurons, not synapses or image volume; require a released scientific dataset or paper and avoid double-counting fragments. A connectome alone is not a mind upload.",
      "metadataPending": false
    }
  },
  {
    "id": "vr-5",
    "title": "Worldwide Qualifying VR DAU Record",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the highest defensible worldwide 24-hour unique-user DAU ever achieved in qualifying VR?",
    "construct": "Record the highest defensible worldwide 24-hour unique-user count for immersive VR use. Deduplicate people across applications and devices where evidence permits; exclude flat-screen-only users, registrations, monthly actives, concurrent peaks, and incompatible estimates presented as exact DAU.",
    "rationale": "This adoption indicator represents the field's progress in worldwide qualifying vr dau record under a reproducible boundary.",
    "variable": "Worldwide Qualifying VR DAU Record result",
    "unit": "users",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the highest defensible worldwide 24-hour unique-user count for immersive VR use."
      ],
      "exclusionCriteria": [
        "Deduplicate people across applications and devices where evidence permits; exclude flat-screen-only users, registrations, monthly actives, concurrent peaks, and incompatible estimates presented as exact DAU."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "active"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the highest defensible worldwide 24-hour unique-user count for immersive VR use. Deduplicate people across applications and devices where evidence permits; exclude flat-screen-only users, registrations, monthly actives, concurrent peaks, and incompatible estimates presented as exact DAU.",
      "metadataPending": false
    }
  },
  {
    "id": "vr-commercial-ppd",
    "title": "Shipping VR Headset Central Pixel Density",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum native central pixel density in a shipping VR headset with at least 100 degrees horizontal field of view, under the current standardized display metric?",
    "construct": "Use native central optical/display pixels per degree in a commercially shipping immersive VR headset whose same shipping configuration provides at least 100° horizontal FOV. Supersampled render resolution, prototypes, demos, announced products, and a PPD figure from a narrower configuration are excluded.",
    "rationale": "This capability indicator represents the field's progress in shipping vr headset central pixel density under a reproducible boundary.",
    "variable": "Shipping VR Headset Central Pixel Density result",
    "unit": "PPD",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Use native central optical/display pixels per degree in a commercially shipping immersive VR headset whose same shipping configuration provides at least 100° horizontal FOV."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Use native central optical/display pixels per degree in a commercially shipping immersive VR headset whose same shipping configuration provides at least 100° horizontal FOV. Supersampled render resolution, prototypes, demos, announced products, and a PPD figure from a narrower configuration are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "vr-4",
    "title": "Perfectly Replicated Senses in VR",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the record number of the seven specified sensory modalities simultaneously elicited through direct artificial brain or central-nervous-system stimulation in one documented immersive session as of the research cutoff?",
    "construct": "Count a modality only when direct artificial brain or CNS stimulation simultaneously elicits vision, hearing, smell, taste, touch, balance, or proprioception and a documented participant-response or neurophysiological test confirms the intended percept. Peripheral displays or haptics and untested or partial cues do not qualify; seven is a project convention, not a biological taxonomy claim.",
    "rationale": "This capability indicator represents the field's progress in perfectly replicated senses in vr under a reproducible boundary.",
    "variable": "Perfectly Replicated Senses in VR result",
    "unit": "senses",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count a modality only when direct artificial brain or CNS stimulation simultaneously elicits vision, hearing, smell, taste, touch, balance, or proprioception and a documented participant-response or neurophysiological test confirms the intended percept."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a modality only when direct artificial brain or CNS stimulation simultaneously elicits vision, hearing, smell, taste, touch, balance, or proprioception and a documented participant-response or neurophysiological test confirms the intended percept. Peripheral displays or haptics and untested or partial cues do not qualify; seven is a project convention, not a biological taxonomy claim.",
      "metadataPending": false
    }
  },
  {
    "id": "vr-shared-world-concurrency",
    "title": "Interactive VR World Concurrency",
    "definitionVersion": "1.1.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the maximum officially supported number of users in one mutually interactive VR world or session under the current standardized shared-world-concurrency metric?",
    "construct": "Record normal officially supported capacity in one coherent mutually interactive immersive-VR world or session. A distributed backend is allowed, but separate instances, mirrors, non-interacting zones, flat-screen-only participation, staff-only manual overrides, system accounts, event overrides, and stress tests are excluded; normal reserved creator and world-author access counts when it adds to simultaneous capacity.",
    "rationale": "This capability indicator represents the field's progress in interactive vr world concurrency under a reproducible boundary.",
    "variable": "Interactive VR World Concurrency result",
    "unit": "users",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record normal officially supported capacity in one coherent mutually interactive immersive-VR world or session.",
        "A distributed backend is allowed, but separate instances, mirrors, non-interacting zones, flat-screen-only participation, staff-only manual overrides, system accounts, event overrides, and stress tests are excluded; normal reserved creator and world-author access counts when it adds to simultaneous capacity."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "logarithmic",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record normal officially supported capacity in one coherent mutually interactive immersive-VR world or session. A distributed backend is allowed, but separate instances, mirrors, non-interacting zones, flat-screen-only participation, staff-only manual overrides, system accounts, event overrides, and stress tests are excluded; normal reserved creator and world-author access counts when it adds to simultaneous capacity.",
      "metadataPending": false
    }
  },
  {
    "id": "cultured-meat-1",
    "title": "Cultivated-Meat Global Sales Share",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the current global cultivated-meat market share relative to the complete meat industry, using annual global sales value as the canonical basis?",
    "construct": "Cultivated meat is edible animal tissue grown from animal cells or tissue outside a living animal. Numerator: compatible annual worldwide cultivated-meat sales value. Denominator: global meat-industry sales value during the same annual period and compatible product scope. Trials, tastings, forecasts, and mismatched market estimates are excluded.",
    "rationale": "This market indicator represents the field's progress in cultivated-meat global sales share under a reproducible boundary.",
    "variable": "Cultivated-Meat Global Sales Share result",
    "unit": "%",
    "isLowerBetter": false,
    "indicatorType": "market",
    "temporalType": "current",
    "scope": {},
    "ratio": {
      "numeratorDefinition": "compatible annual worldwide cultivated-meat sales value",
      "denominatorDefinition": "global meat-industry sales value during the same annual period and compatible product scope",
      "period": "reporting period used by both numerator and denominator",
      "geography": "worldwide",
      "aggregationRule": "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.",
      "compatibilityRule": "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis."
    },
    "qualification": {
      "inclusionCriteria": [
        "Apply every affirmative condition in the operational definition."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Cultivated meat is edible animal tissue grown from animal cells or tissue outside a living animal. Numerator: compatible annual worldwide cultivated-meat sales value. Denominator: global meat-industry sales value during the same annual period and compatible product scope. Trials, tastings, forecasts, and mismatched market estimates are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "cultured-meat-3",
    "title": "Countries Permitting Cultivated Pet Meat",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries legally permit commercial cultivated meat for pet consumption?",
    "construct": "Count a country once when an operative national authorization permits commercial pet-food consumption of meat grown from animal cells or tissue outside a living animal. Trials, research, applications, feed ingredients not permitted for pet consumption, and announced future sales are excluded.",
    "rationale": "This policy indicator represents the field's progress in countries permitting cultivated pet meat under a reproducible boundary.",
    "variable": "Countries Permitting Cultivated Pet Meat result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country once when an operative national authorization permits commercial pet-food consumption of meat grown from animal cells or tissue outside a living animal."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country once when an operative national authorization permits commercial pet-food consumption of meat grown from animal cells or tissue outside a living animal. Trials, research, applications, feed ingredients not permitted for pet consumption, and announced future sales are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "cultured-meat-2",
    "title": "Countries Permitting Cultivated Human Food",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries legally permit commercial cultivated meat for human consumption?",
    "construct": "Count a country once when an operative authorization permits commercial human consumption of meat grown from animal cells or tissue outside a living animal. Product authorization is distinct from trials, tastings, applications, and announced launches; separately sovereign countries under a joint food code count separately.",
    "rationale": "This policy indicator represents the field's progress in countries permitting cultivated human food under a reproducible boundary.",
    "variable": "Countries Permitting Cultivated Human Food result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country once when an operative authorization permits commercial human consumption of meat grown from animal cells or tissue outside a living animal.",
        "Product authorization is distinct from trials, tastings, applications, and announced launches; separately sovereign countries under a joint food code count separately."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial",
        "sovereign-country"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country once when an operative authorization permits commercial human consumption of meat grown from animal cells or tissue outside a living animal. Product authorization is distinct from trials, tastings, applications, and announced launches; separately sovereign countries under a joint food code count separately.",
      "metadataPending": false
    }
  },
  {
    "id": "cultured-meat-4",
    "title": "Countries Prohibiting Slaughter-Derived Meat",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many countries nationally prohibit ordinary slaughter-derived meat consumption or sale for both humans and pets such that only non-slaughter alternatives are allowed?",
    "construct": "Count a country only when national law prohibits ordinary slaughter-derived meat sale or consumption for both humans and pets, leaving non-slaughter alternatives. Local bans, species-specific restrictions, welfare rules, and future targets do not qualify.",
    "rationale": "This policy indicator represents the field's progress in countries prohibiting slaughter-derived meat under a reproducible boundary.",
    "variable": "Countries Prohibiting Slaughter-Derived Meat result",
    "unit": "countries",
    "isLowerBetter": false,
    "indicatorType": "policy",
    "temporalType": "current",
    "scope": {
      "geographic": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
    },
    "qualification": {
      "inclusionCriteria": [
        "Count a country only when national law prohibits ordinary slaughter-derived meat sale or consumption for both humans and pets, leaving non-slaughter alternatives."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "ordinary-use"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count a country only when national law prohibits ordinary slaughter-derived meat sale or consumption for both humans and pets, leaving non-slaughter alternatives. Local bans, species-specific restrictions, welfare rules, and future targets do not qualify.",
      "metadataPending": false
    }
  },
  {
    "id": "fusion-1",
    "title": "Grid-Connected Commercial Fusion Plants",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "How many commercial nuclear fusion power plants are currently connected to the grid worldwide?",
    "construct": "Count an operating commercial fusion power plant only when it is connected to an electricity grid and supplies electricity as a plant, rather than a research experiment. Announcements, construction projects, scientific-Q demonstrations, and fission plants are excluded.",
    "rationale": "This capability indicator represents the field's progress in grid-connected commercial fusion plants under a reproducible boundary.",
    "variable": "Grid-Connected Commercial Fusion Plants result",
    "unit": "plants",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "current",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Count an operating commercial fusion power plant only when it is connected to an electricity grid and supplies electricity as a plant, rather than a research experiment."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Count an operating commercial fusion power plant only when it is connected to an electricity grid and supplies electricity as a plant, rather than a research experiment. Announcements, construction projects, scientific-Q demonstrations, and fission plants are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "fusion-2",
    "title": "Commercial Fusion Electricity Share",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What share of global electricity is generated by commercial fusion power plants?",
    "construct": "Numerator: actual electricity generated by grid-connected commercial fusion plants. Denominator: global electricity generation during the same reporting period. Scientific Q, target gain, gross thermal output, planned capacity, and non-grid experiments are excluded.",
    "rationale": "This adoption indicator represents the field's progress in commercial fusion electricity share under a reproducible boundary.",
    "variable": "Commercial Fusion Electricity Share result",
    "unit": "%",
    "isLowerBetter": false,
    "indicatorType": "adoption",
    "temporalType": "current",
    "scope": {},
    "ratio": {
      "numeratorDefinition": "actual electricity generated by grid-connected commercial fusion plants",
      "denominatorDefinition": "global electricity generation during the same reporting period",
      "period": "reporting period used by both numerator and denominator",
      "geography": "worldwide",
      "aggregationRule": "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.",
      "compatibilityRule": "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis."
    },
    "qualification": {
      "inclusionCriteria": [
        "Apply every affirmative condition in the operational definition."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": [
        "commercial"
      ]
    },
    "protocol": {
      "updateCadence": "annual",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "saturation",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Numerator: actual electricity generated by grid-connected commercial fusion plants. Denominator: global electricity generation during the same reporting period. Scientific Q, target gain, gross thermal output, planned capacity, and non-grid experiments are excluded.",
      "metadataPending": false
    }
  },
  {
    "id": "fusion-3",
    "title": "Sustained Magnetic-Confinement Plasma Gain",
    "definitionVersion": "2.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the longest continuous interval ever achieved in a magnetic-confinement fusion device while maintaining plasma fusion gain Q_plasma > 1?",
    "construct": "Record the longest continuous interval in a magnetic-confinement fusion device maintaining Q_plasma > 1, where Q_plasma is fusion power divided by externally injected plasma-heating power. Exclude NIF target gain, laser energy delivered to target, wall-plug or engineering breakeven, projections, and isolated instantaneous ratios.",
    "rationale": "This capability indicator represents the field's progress in sustained scientific fusion gain under a reproducible boundary.",
    "variable": "Sustained Scientific Fusion Gain result",
    "unit": "hours",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record the longest continuous interval maintaining scientific fusion gain Q > 1 under one consistently documented system boundary."
      ],
      "exclusionCriteria": [
        "Exclude candidates that fail any stated condition."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record the longest continuous interval in a magnetic-confinement fusion device maintaining Q_plasma > 1, where Q_plasma is fusion power divided by externally injected plasma-heating power. Exclude NIF target gain, laser energy delivered to target, wall-plug or engineering breakeven, projections, and isolated instantaneous ratios.",
      "metadataPending": false
    }
  },
  {
    "id": "fusion-4",
    "title": "Net Electrical Fusion Export",
    "definitionVersion": "1.0.0",
    "effectiveFrom": "2026-08-16",
    "state": "active",
    "question": "What is the highest actual net electrical output ever exported by a fusion plant or fusion-electricity demonstration, in MW_e?",
    "construct": "Record actual net plant-level electrical power exported outside a fusion facility in MW_e after internal loads. Scientific or target Q, fusion heat, gross generator output, and projections do not count; no positive net electrical export is a genuine numeric zero.",
    "rationale": "This capability indicator represents the field's progress in net electrical fusion export under a reproducible boundary.",
    "variable": "Net Electrical Fusion Export result",
    "unit": "MW_e",
    "isLowerBetter": false,
    "indicatorType": "capability",
    "temporalType": "record",
    "scope": {},
    "qualification": {
      "inclusionCriteria": [
        "Record actual net plant-level electrical power exported outside a fusion facility in MW_e after internal loads."
      ],
      "exclusionCriteria": [
        "Scientific or target Q, fusion heat, gross generator output, and projections do not count; no positive net electrical export is a genuine numeric zero."
      ],
      "boundaryRules": [
        "Apply the specification as written at the research cutoff; do not substitute a related construct."
      ],
      "glossaryReferences": []
    },
    "protocol": {
      "updateCadence": "event-driven",
      "preferredSourceTypes": [
        "official",
        "peer-reviewed",
        "filing",
        "technical",
        "journalism",
        "estimate"
      ],
      "researchProcedure": "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.",
      "zeroRule": "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.",
      "unknownRule": "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.",
      "sourceConflictRule": "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values."
    },
    "ladder": {
      "pattern": "custom",
      "rationale": "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.",
      "firstMilestoneRationale": "L1 is the first scale at which the measured capability or adoption is materially observable.",
      "endpointRationale": "L7 represents the project's intended mature or frontier endpoint for this same variable.",
      "intermediateRationale": "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct."
    },
    "legacy": {
      "operationalDefinition": "Record actual net plant-level electrical power exported outside a fusion facility in MW_e after internal loads. Scientific or target Q, fusion heat, gross generator output, and projections do not count; no positive net electrical export is a genuine numeric zero.",
      "metadataPending": false
    }
  }
] satisfies readonly MeasurementSpec[];

export const MEASUREMENT_CATALOG: Readonly<Record<string, MeasurementSpec>> = Object.freeze(
  Object.fromEntries(MEASUREMENT_SPECS.map((spec) => [spec.id, spec])),
);
