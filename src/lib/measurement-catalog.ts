import type { LegacyMeasurementDefinition, MeasurementSpec } from "./measurement-types.ts";

/** Stable operational definitions. Observations, ladders, forecasts, and history are composed separately. */
const definitions: LegacyMeasurementDefinition[] = [
  {
    "id": "ai-millennium-problems",
    "title": "Millennium Prize Problems Solved",
    "question": "How many of the seven Clay Millennium Prize Problems have been solved primarily by AI?",
    "definition": "Count a problem only when AI supplies the essential solution and it receives recognition equivalent to genuine resolution. Human prompting, checking, and formalization are allowed; an essential human novel lemma or decisive proof step disqualifies primary-AI attribution. A historical human solution does not count. Each of the seven named Clay problems is counted independently when AI supplies a qualifying solution, including an independently qualifying solution to a problem previously solved by a human. All seven levels therefore measure the same count.",
    "temporalType": "current",
    "indicatorType": "capability",
    "unit": "problems",
    "isLowerBetter": false
  },
  {
    "id": "ai-exclusively-professors",
    "title": "AI-Professors-Only Universities",
    "question": "How many recognized colleges and universities worldwide are “AI professors only,” meaning ordinary academic instruction and academic assessment are performed entirely by AI/AI-controlled systems rather than human instructors?",
    "definition": "Count a currently recognized degree-granting institution only when AI systems perform all ordinary academic instruction and assessment. Human administration, maintenance, and safeguarding are allowed, but routine human teaching or grading excludes the institution; pilots, individual courses, tutoring tools, and announced plans do not count.",
    "temporalType": "current",
    "indicatorType": "capability",
    "unit": "universities",
    "isLowerBetter": false
  },
  {
    "id": "ai-led-companies",
    "title": "AI-Managed Top Companies",
    "question": "How many companies among the 100 largest publicly traded companies worldwide by market capitalization are AI-managed as of the research cutoff?",
    "definition": "At the cutoff, rank publicly traded companies by equity market capitalization in one compatible worldwide snapshot and inspect the top 100; private-company valuations are excluded. Count a company only when an AI system holds primary ordinary executive decision authority; AI advice, automation, an AI title without authority, or human veto over routine management does not qualify. Count each company once.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "companies",
    "isLowerBetter": false
  },
  {
    "id": "ai-led-countries-1",
    "title": "Countries Primarily Led by AI",
    "question": "What is the current number of countries primarily led by AI?",
    "definition": "Count a sovereign state in the 195-state scope only when an AI system exercises primary ordinary national executive authority at the cutoff. Advisory systems, automated services, symbolic appointments, and governments whose human officials retain decisive authority are excluded.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "robotics-1",
    "title": "Deployed Humanoid General-Purpose Robots",
    "question": "How many humanoid, general-purpose robots are currently deployed worldwide?",
    "definition": "Count currently active, physically deployed humanoid robots able to perform multiple materially different useful tasks. Laboratory prototypes, single-purpose machines, inactive units, duplicate reports of the same fleet, and teleoperated demonstrations are excluded; estimates must disclose fleet-count uncertainty.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "robots",
    "isLowerBetter": false
  },
  {
    "id": "robotics-2",
    "title": "Household Humanoid Robot Share",
    "question": "What is the global share of households with a general-purpose humanoid robot assigned for routine household use or qualifying regular household access?",
    "definition": "Denominator: all households worldwide at the cutoff. Count a household once when a qualifying general-purpose humanoid robot is physically resident there and routinely available to that household for useful household tasks. Paid or contracted early-access deployments may qualify. Manufacturer-controlled R&D placements whose principal purpose is testing or data collection do not qualify. Hotel, workplace, public/shared robots, occasional rentals, and one-time access are excluded.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "%",
    "isLowerBetter": false,
    "denominator": {
      "description": "all households worldwide at the research cutoff",
      "geography": "worldwide"
    }
  },
  {
    "id": "robotics-police-countries",
    "title": "Countries with Independent Humanoid Robot Police",
    "question": "How many countries currently have humanoid robots performing ordinary independent police or security duty under the project’s strict independent-authority definition?",
    "definition": "Count a sovereign country only when a humanoid robot performs ordinary operational police or security duty with lawful independent detention authority and no human approval per detention. Demos, research pilots, patrol, information, surveillance, telepresence, bomb disposal, and human-decided detention do not count.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "robotics-3",
    "title": "Fully Autonomous Major Surgery Share",
    "question": "What is the global share of major surgeries performed fully autonomously by robots?",
    "definition": "Numerator: qualifying major surgical procedures completed end-to-end by a robot without a human performing or approving operative steps. Denominator: all qualifying major surgical procedures worldwide during the same compatible period. Supervised autonomy, isolated autonomous subtasks, simulations, and animal or cadaver trials are excluded.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "%",
    "isLowerBetter": false,
    "denominator": {
      "description": "all qualifying major surgical procedures worldwide during the compatible measurement period",
      "geography": "worldwide"
    }
  },
  {
    "id": "self-driving-car-2",
    "title": "Countries Allowing Ordinary Driverless L4/L5",
    "question": "How many of the project's 195 sovereign states have at least one city where an SAE Level 4 or Level 5 driverless public service is authorized and actually operating outside a trial as of the research cutoff?",
    "definition": "Count a country once when at least one city permits ordinary public driverless SAE Level 4 or Level 5 service beyond testing or a time-limited trial. Safety-driver operations, closed courses, test permits, and availability announced but not operating are excluded; geofenced L4 qualifies only here.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "self-driving-car-3",
    "title": "Countries Allowing Nationwide Level 5",
    "question": "In how many countries are Level 5 self-driving cars legally allowed throughout the country’s entire public-road territory?",
    "definition": "Count a country only when ordinary SAE Level 5 operation is lawful throughout its complete public-road territory. Geofenced, route-limited, weather-limited, or other Level 4 permissions do not count, nor do testing statutes without an ordinary-use authorization.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "self-driving-car-1",
    "title": "Countries Prohibiting Ordinary Manual Driving",
    "question": "How many countries have simultaneously abolished ordinary human public-road driving, restricted newly sold ordinary road vehicles to autonomous operation with no conventional manual mode, and criminalized unauthorized manual driving of legacy vehicles?",
    "definition": "Count a country only when all three conditions apply nationally: ordinary manual public-road driving is abolished, new ordinary road vehicles may not provide a conventional manual mode, and unauthorized manual operation of legacy vehicles is criminalized. Proposals and local restrictions are excluded.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "self-driving-car-4",
    "title": "Operational SAE Level 5 Cars",
    "question": "How many SAE Level 5 self-driving cars are currently in ordinary operational use worldwide?",
    "definition": "Count currently deployed vehicles in ordinary use only when they actually satisfy SAE Level 5 under all roadway and environmental conditions a human driver could manage. Geofenced Level 4 robotaxis, test fleets, prototypes, and vehicles requiring a fallback driver are excluded.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "vehicles",
    "isLowerBetter": false
  },
  {
    "id": "lev-1",
    "title": "World Life Expectancy at Birth",
    "question": "What is the current world life expectancy at birth, both sexes combined?",
    "definition": "Use the latest authoritative worldwide period life-expectancy-at-birth estimate available by the cutoff, both sexes combined. Preserve its data year and model uncertainty; do not mix national series, healthy life expectancy, cohort expectancy, or projections from incompatible releases.",
    "temporalType": "current",
    "indicatorType": "outcome",
    "unit": "years",
    "isLowerBetter": false
  },
  {
    "id": "lev-2",
    "title": "Highest National Life Expectancy at Birth",
    "question": "What is the current life expectancy at birth of the country with the highest value in the same authoritative dataset and data year?",
    "definition": "Within one authoritative dataset and one data year, select the sovereign country with the highest both-sexes life expectancy at birth. Do not combine national agencies or years, and do not substitute territories unless the source ranks them in the project country scope.",
    "temporalType": "current",
    "indicatorType": "outcome",
    "unit": "years",
    "isLowerBetter": false
  },
  {
    "id": "lev-3",
    "title": "Oldest Verified Living Human",
    "question": "How old is the oldest verified living human in the world as of the research cutoff?",
    "definition": "At the cutoff, use an age-validated living-person list and count the age of its oldest person still known alive. This is a current observation, not the all-time longevity record; unvalidated claims and people deceased before the cutoff are excluded.",
    "temporalType": "current",
    "indicatorType": "outcome",
    "unit": "years",
    "isLowerBetter": false
  },
  {
    "id": "lev-4",
    "title": "GRG-Validated Living Supercentenarians",
    "question": "What is the number of GRG-validated living supercentenarians at the cutoff?",
    "definition": "Count the living entries marked validated on the Gerontology Research Group list at the cutoff, once per person. This is the exact list count, not a minimum estimate of the true worldwide supercentenarian population; pending and unvalidated cases are excluded.",
    "temporalType": "current",
    "indicatorType": "outcome",
    "unit": "people",
    "isLowerBetter": false
  },
  {
    "id": "space-1",
    "title": "Humans Simultaneously Above the Kármán Line",
    "question": "What is the maximum simultaneous human population above the 100 km FAI Kármán line ever achieved?",
    "definition": "Record the largest number of living humans simultaneously above the FAI 100 km Kármán line. Count each person once during overlapping intervals; announced crews, sub-100-km flights, and people before launch or after descent are excluded.",
    "temporalType": "record",
    "indicatorType": "adoption",
    "unit": "humans",
    "isLowerBetter": false
  },
  {
    "id": "space-moon-pop",
    "title": "Humans Simultaneously on the Moon",
    "question": "What is the maximum simultaneous human population on or beneath the Moon’s surface ever achieved?",
    "definition": "Record the greatest number of living humans simultaneously on or beneath the lunar surface. People only in lunar orbit, en route, or represented robotically do not count.",
    "temporalType": "record",
    "indicatorType": "adoption",
    "unit": "humans",
    "isLowerBetter": false
  },
  {
    "id": "space-mars-pop",
    "title": "Humans Simultaneously on Mars",
    "question": "What is the maximum simultaneous human population on or beneath Mars’s surface ever achieved?",
    "definition": "Record the greatest number of living humans simultaneously on or beneath Mars. Orbiters, robotic missions, simulations, and announced crews do not count.",
    "temporalType": "record",
    "indicatorType": "adoption",
    "unit": "humans",
    "isLowerBetter": false
  },
  {
    "id": "space-2",
    "title": "Useful Payload Delivered to LEO",
    "question": "What is the maximum net useful payload mass actually delivered to LEO in one launch, ever achieved, in metric tonnes?",
    "definition": "Record actual net mission-useful mass inserted into qualifying LEO by one completed launch, not advertised launcher capacity. A reusable spacecraft or orbiter counts when it is itself the mission-useful object delivered and operated in orbit; propellant and stages discarded before orbit do not.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "metric tonnes",
    "isLowerBetter": false
  },
  {
    "id": "qc-gate-model-physical-qubits",
    "title": "Universal Gate-Model Physical Qubits",
    "question": "What is the maximum number of physical qubits in an operational universal gate-model quantum computer?",
    "definition": "Record the largest single operational programmable universal gate-model system. Physical qubits must be installed and usable in demonstrated operation; coherent modules may count together. Annealers, analogue-only simulators, announcements, non-operational fabricated devices, and logical qubits counted again as physical qubits are excluded.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "physical qubits",
    "isLowerBetter": false
  },
  {
    "id": "qc-system-two-qubit-fidelity",
    "title": "Processor-Wide Two-Qubit Gate Fidelity",
    "question": "What is the best processor-wide average two-qubit gate fidelity experimentally demonstrated under a defensible processor-wide methodology?",
    "definition": "Use an experimentally measured processor-wide average for normal-operation two-qubit gates on a programmable universal gate-model processor with at least 50 physical qubits. A best pair, cherry-picked gate, simulation, or undisclosed averaging method does not qualify; the 50-qubit floor is a project convention.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "%",
    "isLowerBetter": false,
    "denominator": {
      "description": "Processor-wide average over the defensibly documented two-qubit gate set"
    }
  },
  {
    "id": "qc-3",
    "title": "Quantum Volume",
    "question": "What is the highest Quantum Volume experimentally demonstrated under the actual Quantum Volume protocol?",
    "definition": "Record the highest Quantum Volume actually demonstrated under the published Quantum Volume protocol. Use the achieved value, not an extrapolation from qubit count, a roadmap target, or another benchmark renamed as Quantum Volume.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "Quantum Volume",
    "isLowerBetter": false
  },
  {
    "id": "qc-4",
    "title": "Hardware-Aware CLOPS_h",
    "question": "What is the highest hardware-aware CLOPS_h experimentally demonstrated in a quantum processor?",
    "definition": "Record the highest experimentally demonstrated hardware-aware CLOPS_h value. The benchmark must include the hardware execution component specified by CLOPS_h; ordinary CLOPS, theoretical throughput, simulator results, and roadmap projections are distinct and excluded.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "CLOPS_h",
    "isLowerBetter": false
  },
  {
    "id": "superconductor-1",
    "title": "Room-Temperature Superconductivity Pressure",
    "question": "What is the lowest critical pressure at which credible superconductivity has been demonstrated at room temperature (Tc >= 293 K)?",
    "definition": "Seek the lowest pressure with credible, independently supportable superconductivity at Tc ≥ 293 K. Retracted, unreproduced, or non-superconducting-transition claims are excluded. If no qualifying result survives review, report NO VERIFIED RESULT rather than a numeric pressure.",
    "temporalType": "current",
    "indicatorType": "capability",
    "unit": "GPa",
    "isLowerBetter": true
  },
  {
    "id": "superconductor-je-20k-20t",
    "title": "Commercial REBCO Engineering Current Density",
    "question": "What is the maximum engineering current density of commercial REBCO wire at 20 K and 20 T under the standardized current-production metric now used by the project?",
    "definition": "Use commercial production-scale REBCO/YBCO coated conductor at 20 K and 20 T with B parallel to c (perpendicular to tape face). Engineering current density is transport critical current divided by the entire conductor cross-section; laboratory microfilms and incompatible field orientations are excluded.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "A/mm²",
    "isLowerBetter": false
  },
  {
    "id": "superconductor-3",
    "title": "Continuous Superconducting DC Field",
    "question": "What is the highest continuous DC or steady magnetic field ever achieved using a superconducting magnet or superconducting insert?",
    "definition": "Record the highest continuous DC total hybrid field from a system containing a superconducting magnet or insert. The evidence package must report the superconducting and non-superconducting component contributions and must not attribute the total hybrid field to the superconducting component alone.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "tesla",
    "isLowerBetter": false
  },
  {
    "id": "superconductor-commercial-piece-length",
    "title": "Commercial 2G HTS Tape Piece Length",
    "question": "What is the maximum published continuous piece length of commercial production-scale 2G HTS tape under the project’s standardized commercial-piece-length definition?",
    "definition": "Measure the maximum length in a manufacturer-published commercial specification for one continuous splice-free production-scale REBCO/2G HTS tape piece. A published offered range up to 1,000 m is the measurement object and supports 1.0 km; laboratory one-offs, aggregate reel totals, and joined pieces are excluded.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "km",
    "isLowerBetter": false
  },
  {
    "id": "bci-1",
    "title": "Living People with Qualifying BCIs",
    "question": "How many living humans are currently implanted with qualifying fully internal chronic invasive or semi-invasive BCIs?",
    "definition": "Count each living person once only when evidence supports a currently retained, fully internal chronic invasive or semi-invasive implant that reads neural signals. Temporary intraoperative electrodes, stimulation-only devices, non-invasive EEG, enrollment targets, explanted implants, deceased participants, and duplicate cohort reports are excluded. Public reporting is incomplete, so the result is a defensible lower bound.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "people",
    "isLowerBetter": false
  },
  {
    "id": "bci-2",
    "title": "Countries Authorizing Industry BCI Trials",
    "question": "How many of the project's 195 sovereign states have granted formal regulatory authorization for an industry-sponsored human clinical trial of a BCI meeting this specification as of the research cutoff?",
    "definition": "Count a country once when its regulator or authorized ethics/trial system has approved an industry-sponsored human trial of a chronic internal neural-reading BCI. Registrations without authorization, academic-only work, stimulation-only devices, non-invasive systems, and enrollment targets are excluded.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "bci-3",
    "title": "Countries with Ordinary Medical BCI Authorization",
    "question": "How many of the project's 195 sovereign states have granted ordinary non-experimental medical authorization for a BCI meeting this specification as of the research cutoff?",
    "definition": "Count a country once only when a qualifying chronic internal neural-reading BCI has ordinary medical authorization outside a clinical trial. Trial permission, compassionate use, stimulation-only implants, and non-invasive systems do not count.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "bci-4",
    "title": "Countries Allowing Elective Healthy-Human BCIs",
    "question": "How many countries affirmatively allow next-generation cortex-reading chronic BCIs to be implanted electively in healthy humans for voluntary non-medical purposes?",
    "definition": "Count a country only when law affirmatively permits elective implantation in healthy people of a chronic internal cortex-reading BCI for voluntary non-medical use. Medical trials, therapeutic approvals, regulatory silence, and non-invasive consumer EEG are excluded.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "mind-upload-price-1",
    "title": "Commercial Mind-Upload Price",
    "question": "What is the current average commercial price for a qualifying mind upload of one adult individual?",
    "definition": "A qualifying product must create a functional personal emulation derived from one specific adult human brain. Chatbots, voice clones, persona models, connectomes, and generic brain simulations do not qualify. Average actual commercial transaction prices worldwide; if no qualifying market exists, report N/A rather than zero.",
    "temporalType": "current",
    "indicatorType": "market",
    "unit": "dollars",
    "isLowerBetter": true
  },
  {
    "id": "mind-upload-adoption-1",
    "title": "Uploaded Individuals",
    "question": "How many distinct human individuals currently have qualifying mind uploads stored or operational in durable digital environments?",
    "definition": "Count original human individuals with a durable functional personal emulation derived from their specific brain. Chatbots, voice clones, persona bots, connectomes alone, and generic simulations are excluded; multiple copies or forks of one person count that original person once.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "people",
    "isLowerBetter": false
  },
  {
    "id": "mind-upload-adoption-2",
    "title": "Countries Legally Allowing Mind Uploads",
    "question": "How many countries affirmatively legally allow citizens to undergo a real qualifying mind-upload procedure?",
    "definition": "Count a country only when its law affirmatively permits a real procedure producing a qualifying functional personal emulation from a specific human brain. Rules for data, avatars, AI replicas, or connectome research alone do not qualify.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "mind-upload-1",
    "title": "Largest Published Connectome",
    "question": "What is the world’s largest connectome ever mapped, measured by the number of individually represented neurons in the published synaptic graph?",
    "definition": "Record the published synaptic graph containing the greatest number of individually represented neurons. Count neurons, not synapses or image volume; require a released scientific dataset or paper and avoid double-counting fragments. A connectome alone is not a mind upload.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "neurons",
    "isLowerBetter": false
  },
  {
    "id": "vr-5",
    "title": "Worldwide Qualifying VR DAU Record",
    "question": "What is the highest defensible worldwide 24-hour unique-user DAU ever achieved in qualifying VR?",
    "definition": "Record the highest defensible worldwide 24-hour unique-user count for immersive VR use. Deduplicate people across applications and devices where evidence permits; exclude flat-screen-only users, registrations, monthly actives, concurrent peaks, and incompatible estimates presented as exact DAU.",
    "temporalType": "record",
    "indicatorType": "adoption",
    "unit": "users",
    "isLowerBetter": false
  },
  {
    "id": "vr-commercial-ppd",
    "title": "Shipping VR Headset Central Pixel Density",
    "question": "What is the maximum native central pixel density in a shipping VR headset with at least 100 degrees horizontal field of view, under the current standardized display metric?",
    "definition": "Use native central optical/display pixels per degree in a commercially shipping immersive VR headset whose same shipping configuration provides at least 100° horizontal FOV. Supersampled render resolution, prototypes, demos, announced products, and a PPD figure from a narrower configuration are excluded.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "PPD",
    "isLowerBetter": false
  },
  {
    "id": "vr-4",
    "title": "Perfectly Replicated Senses in VR",
    "question": "What is the record number of the seven specified sensory modalities simultaneously elicited through direct artificial brain or central-nervous-system stimulation in one documented immersive session as of the research cutoff?",
    "definition": "Count a modality only when direct artificial brain or CNS stimulation simultaneously elicits vision, hearing, smell, taste, touch, balance, or proprioception and a documented participant-response or neurophysiological test confirms the intended percept. Peripheral displays or haptics and untested or partial cues do not qualify; seven is a project convention, not a biological taxonomy claim.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "senses",
    "isLowerBetter": false
  },
  {
    "id": "vr-shared-world-concurrency",
    "title": "Interactive VR World Concurrency",
    "question": "What is the maximum officially supported number of users in one mutually interactive VR world or session under the current standardized shared-world-concurrency metric?",
    "definition": "Record normal officially supported capacity in one coherent mutually interactive immersive-VR world or session. A distributed backend is allowed, but separate instances, mirrors, non-interacting zones, flat-screen-only participation, and unsupported stress tests are excluded; reserved slots count only if they add to normal simultaneous capacity.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "users",
    "isLowerBetter": false
  },
  {
    "id": "cultured-meat-1",
    "title": "Cultivated-Meat Global Sales Share",
    "question": "What is the current global cultivated-meat market share relative to the complete meat industry, using annual global sales value as the canonical basis?",
    "definition": "Cultivated meat is edible animal tissue grown from animal cells or tissue outside a living animal. Numerator: compatible annual worldwide cultivated-meat sales value. Denominator: global meat-industry sales value during the same annual period and compatible product scope. Trials, tastings, forecasts, and mismatched market estimates are excluded.",
    "temporalType": "current",
    "indicatorType": "market",
    "unit": "%",
    "isLowerBetter": false,
    "denominator": {
      "description": "global meat-industry sales value during the same annual period and compatible product scope",
      "geography": "worldwide"
    }
  },
  {
    "id": "cultured-meat-3",
    "title": "Countries Permitting Cultivated Pet Meat",
    "question": "How many countries legally permit commercial cultivated meat for pet consumption?",
    "definition": "Count a country once when an operative national authorization permits commercial pet-food consumption of meat grown from animal cells or tissue outside a living animal. Trials, research, applications, feed ingredients not permitted for pet consumption, and announced future sales are excluded.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "cultured-meat-2",
    "title": "Countries Permitting Cultivated Human Food",
    "question": "How many countries legally permit commercial cultivated meat for human consumption?",
    "definition": "Count a country once when an operative authorization permits commercial human consumption of meat grown from animal cells or tissue outside a living animal. Product authorization is distinct from trials, tastings, applications, and announced launches; separately sovereign countries under a joint food code count separately.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "cultured-meat-4",
    "title": "Countries Prohibiting Slaughter-Derived Meat",
    "question": "How many countries nationally prohibit ordinary slaughter-derived meat consumption or sale for both humans and pets such that only non-slaughter alternatives are allowed?",
    "definition": "Count a country only when national law prohibits ordinary slaughter-derived meat sale or consumption for both humans and pets, leaving non-slaughter alternatives. Local bans, species-specific restrictions, welfare rules, and future targets do not qualify.",
    "temporalType": "current",
    "indicatorType": "policy",
    "unit": "countries",
    "isLowerBetter": false,
    "geographicScope": "195 sovereign states: 193 UN members, Holy See, and State of Palestine; separately governed jurisdictions may be reported separately."
  },
  {
    "id": "fusion-1",
    "title": "Grid-Connected Commercial Fusion Plants",
    "question": "How many commercial nuclear fusion power plants are currently connected to the grid worldwide?",
    "definition": "Count an operating commercial fusion power plant only when it is connected to an electricity grid and supplies electricity as a plant, rather than a research experiment. Announcements, construction projects, scientific-Q demonstrations, and fission plants are excluded.",
    "temporalType": "current",
    "indicatorType": "capability",
    "unit": "plants",
    "isLowerBetter": false
  },
  {
    "id": "fusion-2",
    "title": "Commercial Fusion Electricity Share",
    "question": "What share of global electricity is generated by commercial fusion power plants?",
    "definition": "Numerator: actual electricity generated by grid-connected commercial fusion plants. Denominator: global electricity generation during the same reporting period. Scientific Q, target gain, gross thermal output, planned capacity, and non-grid experiments are excluded.",
    "temporalType": "current",
    "indicatorType": "adoption",
    "unit": "%",
    "isLowerBetter": false,
    "denominator": {
      "description": "global electricity generation during the same reporting period",
      "geography": "worldwide"
    }
  },
  {
    "id": "fusion-3",
    "title": "Sustained Scientific Fusion Gain",
    "question": "What is the longest continuous operation ever achieved while maintaining scientific fusion gain Q > 1 under a consistent boundary?",
    "definition": "Record the longest continuous interval maintaining scientific fusion gain Q > 1 under one consistently documented system boundary. Target gain and plasma gain must not be mixed, and scientific Q > 1 is distinct from plant net electricity or wall-plug gain.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "hours",
    "isLowerBetter": false
  },
  {
    "id": "fusion-4",
    "title": "Net Electrical Fusion Export",
    "question": "What is the highest actual net electrical output ever exported by a fusion plant or fusion-electricity demonstration, in MW_e?",
    "definition": "Record actual net plant-level electrical power exported outside a fusion facility in MW_e after internal loads. Scientific or target Q, fusion heat, gross generator output, and projections do not count; no positive net electrical export is a genuine numeric zero.",
    "temporalType": "record",
    "indicatorType": "capability",
    "unit": "MW_e",
    "isLowerBetter": false
  }
];

function migrateLegacyDefinition(definition: LegacyMeasurementDefinition): MeasurementSpec {
  const materialChanges = new Set(["ai-millennium-problems", "ai-led-companies", "self-driving-car-2", "bci-2", "bci-3", "vr-4", "space-2", "superconductor-3"]);
  const sentences = definition.definition.split(/(?<=[.!?])\s+/).filter(Boolean);
  const exclusionCriteria = sentences.filter((sentence) => /\b(exclude|do not count|does not qualify|insufficient)\b/i.test(sentence));
  const inclusionCriteria = sentences.filter((sentence) => /\b(count|use|record|measure|select|seek)\b/i.test(sentence) && !exclusionCriteria.includes(sentence));
  const glossaryReferences = Object.entries({ commercial: "commercial", operational: "operational", deployed: "deployed", active: "active", autonomous: "autonomous", humanoid: "humanoid", "brain-computer-interface": "BCI", "ordinary-use": "ordinary", "sovereign-country": "sovereign" }).filter(([, term]) => new RegExp(`\\b${term}`, "i").test(`${definition.question} ${definition.definition}`)).map(([key]) => key);
  const isShare = definition.unit === "%" && Boolean(definition.denominator);
  const numerator = definition.definition.match(/Numerator:\s*([^.]*)/i)?.[1] ?? (isShare ? `Entities or activity satisfying the condition in: ${definition.question}` : "");
  const pattern = definition.unit === "%" || definition.geographicScope ? "saturation" : /robots|users|qubits|neurons|CLOPS|universities/i.test(definition.unit) ? "logarithmic" : "custom";
  return {
    id: definition.id, title: definition.title, definitionVersion: materialChanges.has(definition.id) ? "2.0.0" : "1.0.0", effectiveFrom: "2026-08-16", state: "active",
    question: definition.question, construct: definition.definition, rationale: `This ${definition.indicatorType} indicator represents the field's progress in ${definition.title.toLowerCase()} under a reproducible boundary.`, variable: `${definition.title} result`, unit: definition.unit,
    isLowerBetter: definition.isLowerBetter, indicatorType: definition.indicatorType, temporalType: definition.temporalType,
    scope: { geographic: definition.geographicScope },
    ratio: definition.denominator ? { numeratorDefinition: numerator, denominatorDefinition: definition.denominator.description, denominatorValue: definition.denominator.value, period: definition.denominator.period ?? "reporting period used by both numerator and denominator", geography: definition.denominator.geography ?? "same geography for numerator and denominator", aggregationRule: "Divide the compatible numerator by the compatible denominator, multiply by 100, and do not average unlike subperiod percentages.", compatibilityRule: "Numerator and denominator MUST use the same geography, period, population, product scope, and unit basis." } : undefined,
    qualification: { inclusionCriteria: inclusionCriteria.length ? inclusionCriteria : ["Apply every affirmative condition in the operational definition."], exclusionCriteria: exclusionCriteria.length ? exclusionCriteria : ["Exclude candidates that fail any stated condition."], boundaryRules: ["Apply the specification as written at the research cutoff; do not substitute a related construct."], glossaryReferences },
    protocol: { updateCadence: definition.temporalType === "record" ? "event-driven" : "annual", preferredSourceTypes: ["official", "peer-reviewed", "filing", "technical", "journalism", "estimate"], researchProcedure: "Search the preferred evidence hierarchy, screen each candidate against every inclusion, exclusion, scope, and boundary rule, resolve conflicts, and record the reproducible scalar plus provenance at the cutoff.", zeroRule: "Report ZERO only with a logical impossibility, an authoritative exhaustive source, or documented sufficiently exhaustive negative research; otherwise use UNKNOWN or NO VERIFIED RESULT.", unknownRule: "Report UNKNOWN when compatible evidence cannot support a defensible numeric answer; do not coerce missing evidence to zero.", sourceConflictRule: "Prefer the source highest in the evidence hierarchy that measures the exact construct; prefer later valid observations at equal authority, document disagreements, and never average incompatible values." },
    ladder: { pattern, rationale: "The seven thresholds preserve the reviewed legacy progression while keeping one variable throughout.", firstMilestoneRationale: "L1 is the first scale at which the measured capability or adoption is materially observable.", endpointRationale: "L7 represents the project's intended mature or frontier endpoint for this same variable.", intermediateRationale: "L2–L6 provide increasing checkpoints between first significance and the endpoint without changing construct." },
    legacy: { operationalDefinition: definition.definition, metadataPending: false },
  };
}

export const MEASUREMENT_CATALOG: Readonly<Record<string, MeasurementSpec>> = Object.fromEntries(definitions.map((definition) => [definition.id, migrateLegacyDefinition(definition)]));
