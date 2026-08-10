import Link from "next/link";
import { MAIN_DOMAINS, type Measurement } from "./progress-table-data";
import { DOMAIN_ID_TO_SLUG } from "@/lib/site";
import { getCompletedLevelCount, hasNumericObservation, LEVEL_NAMES } from "@/lib/progress-utils";
import { EDITORIAL_BRIEFS } from "@/lib/editorial-content";
import { AiGraph } from "./ai-graph";
import { RoboticsGraph } from "./robotics-graph";
import { SelfDrivingCarGraph } from "./self-driving-car-graph";
import { LevProgressGraph } from "./lev-progress-graph";
import { SpaceExplorationGraph } from "./space-exploration-graph";
import { QuantumComputingGraph } from "./quantum-computing-graph";
import { SuperconductorGraph } from "./superconductor-graph";
import { BciGraph } from "./bci-graph";
import { MindUploadGraph } from "./mind-upload-graph";
import { VrGraph } from "./vr-graph";
import { CulturedMeatGraph } from "./cultured-meat-graph";
import { NuclearFusionGraph } from "./nuclear-fusion-graph";
import { FictionalFuture } from "./fictional-future";

const graphs: Record<string, React.ComponentType> = { ai: AiGraph, robotics: RoboticsGraph, "self-driving-car": SelfDrivingCarGraph, lev: LevProgressGraph, "space-exploration": SpaceExplorationGraph, "quantum-computing": QuantumComputingGraph, superconductor: SuperconductorGraph, bci: BciGraph, "mind-upload": MindUploadGraph, vr: VrGraph, "cultured-meat": CulturedMeatGraph, "nuclear-fusion": NuclearFusionGraph };
const STATUS_LABELS = { zero: "VERIFIED ZERO", verified: "VERIFIED", estimate: "ESTIMATE", "lower-bound": "LOWER BOUND", unknown: "UNKNOWN", "not-applicable": "N/A", "no-verified-result": "NO VERIFIED RESULT" } as const;
const statusLabel = (m: Measurement) => STATUS_LABELS[m.valueStatus ?? "verified"];
const formatValue = (m: Measurement) => m.displayValue ?? (hasNumericObservation(m) ? `${m.currentValue?.toLocaleString()} ${m.unit}` : statusLabel(m));
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
export const formatDateStr = (date?: string) => date ? formatDate(date) : undefined;

function MeasurementCard({ measurement }: { measurement: Measurement }) {
  const achieved = getCompletedLevelCount(measurement);
  const next = measurement.levels[achieved];
  const forecastCount = next?.aiPredictions?.length ?? 0;
  const value = formatValue(measurement);
  const result = value.toUpperCase() === statusLabel(measurement) ? value : `${value} · ${statusLabel(measurement)}`;
  const isUnscored = !hasNumericObservation(measurement);
  const levelText = isUnscored
    ? `UNSCORED · ${statusLabel(measurement)}`
    : measurement.valueStatus === "lower-bound"
      ? `Verified floor: ${LEVEL_NAMES[achieved]} · L${achieved}`
      : `${LEVEL_NAMES[achieved]} · L${achieved}`;
  return <article className="measurement-card" id={measurement.id}>
    <header><p className="atlas-kicker">Measurement {measurement.id}</p><h3>{measurement.title}</h3><p className="research-question"><strong>Research question</strong> {measurement.question}</p></header>
    <div className="measurement-result"><div><small>Observed current result</small><strong>{result}</strong><p>{measurement.dataPeriod ? `Data period: ${measurement.dataPeriod}` : `Checked ${formatDate(measurement.researchCutoff)}`}</p></div><div><small>{isUnscored ? "Scoring state" : measurement.valueStatus === "lower-bound" ? "Proven level" : "Current level"}</small><strong>{levelText}</strong><p>{next ? `Next: L${next.level} ${LEVEL_NAMES[next.level]} — ${next.label ?? `${next.goal.toLocaleString()} ${measurement.unit}`}` : "All seven scored levels reached"}</p></div></div>
    <ol className="milestone-track" aria-label={`${achieved} of 7 milestones reached`}>{measurement.levels.map(level => <li className={level.level <= achieved ? "is-reached" : level.level === achieved + 1 ? "is-next" : ""} key={level.level}><span>L{level.level}</span><small>{LEVEL_NAMES[level.level]}</small></li>)}</ol>
    <div className="disclosures">
      <details><summary>Definition &amp; method</summary><p>{measurement.definition}</p><dl><div><dt>Temporal type</dt><dd>{measurement.temporalType}</dd></div><div><dt>Indicator</dt><dd>{measurement.indicatorType}</dd></div><div><dt>Unit</dt><dd>{measurement.unit}</dd></div></dl></details>
      <details><summary>Evidence {measurement.evidence.length ? `(${measurement.evidence.length})` : ""}</summary>{measurement.evidence.length ? measurement.evidence.map(source => <article key={source.url}><a href={source.url}>{source.organization ? `${source.organization}: ` : ""}{source.title}</a><p>{source.supports ?? "Supports the recorded current result."}</p><small>{source.sourceType.replaceAll("-", " ")} source{source.publicationDate ? ` · published ${source.publicationDate}` : " · publication date not recorded"} · accessed {source.accessedDate}</small></article>) : <p>Structured evidence metadata is incomplete for this result. No source has been fabricated.</p>}</details>
      <details><summary>Full milestone ladder</summary><ol className="full-ladder">{measurement.levels.map(level => <li key={level.level}><strong>L{level.level} {LEVEL_NAMES[level.level]}</strong><span>{level.label ?? `${level.goal.toLocaleString()} ${measurement.unit}`}{level.realityYear ? ` · reached ${level.realityYear}` : ""}</span></li>)}</ol></details>
      <details><summary>History</summary>{measurement.history.length ? measurement.history.map((entry, i) => <p key={i}>{entry.note ?? entry.details?.join(" ") ?? (entry.value === undefined ? "No value recorded" : `${entry.value} ${measurement.unit}`)}</p>) : <p>No historical series is recorded.</p>}</details>
      <Link className="forecast-link" href={`/forecasts?measurement=${measurement.id}`}>Forecasts{forecastCount ? `: ${forecastCount} models at next level` : ""} →</Link>
    </div>
  </article>;
}

export function ProgressTable({ initialSubdomainId }: { initialSubdomainId?: string }) {
  const pair = MAIN_DOMAINS.flatMap(domain => domain.subdomains.map(subdomain => ({ domain, subdomain }))).find(x => x.subdomain.id === initialSubdomainId) ?? { domain: MAIN_DOMAINS[0], subdomain: MAIN_DOMAINS[0].subdomains[0] };
  const { domain, subdomain } = pair; const brief = EDITORIAL_BRIEFS[subdomain.id]; const Graph = graphs[subdomain.id];
  return <div className="progress-detail" style={{ "--domain-accent": domain.id === "automation" ? "#ff5f6d" : domain.id === "hardware" ? "#f6c85f" : domain.id === "neuro" ? "#55b8ff" : domain.id === "sustainability" ? "#4dd9a7" : "#b58cff" } as React.CSSProperties}>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Overview</Link><span>/</span><Link href="/#fields">{domain.name}</Link><span>/</span><span aria-current="page">{subdomain.name}</span></nav>
    <header className="field-header"><p className="atlas-kicker">Where are we now? · {domain.name}</p><h1>{subdomain.name}</h1><p>{brief?.dek ?? subdomain.description}</p><div className="field-summary"><strong>{subdomain.measurements.reduce((n, m) => n + getCompletedLevelCount(m), 0)} / 28</strong><span>scored milestones reached across four active measurements</span></div></header>
    <details className="field-switcher"><summary>Switch field</summary>{MAIN_DOMAINS.map(d => <div key={d.id}><strong>{d.name}</strong>{d.subdomains.map(s => <Link aria-current={s.id === subdomain.id ? "page" : undefined} key={s.id} href={`/progress/${DOMAIN_ID_TO_SLUG[s.id]}`}>{s.name}</Link>)}</div>)}</details>
    {subdomain.northStar && <section className="north-star-panel"><div><p className="atlas-kicker">Contextual North Star — not part of the 336 scored milestones</p><h2>{subdomain.northStar.title}</h2><p>{subdomain.northStar.question}</p><small>{subdomain.northStar.methodology} · Data cutoff {formatDate(subdomain.northStar.researchCutoff)}</small></div>{Graph && <div className="north-star-chart"><Graph /></div>}</section>}
    <section className="measurements-section" aria-labelledby="measurements-heading"><div className="section-heading"><p className="atlas-kicker">Observed evidence</p><h2 id="measurements-heading">Four active measurements</h2><p>Current results lead. Methods, evidence, ladders and history open only when requested.</p></div><div className="measurement-grid">{subdomain.measurements.map(m => <MeasurementCard measurement={m} key={m.id} />)}</div></section>
    <details className="about-field"><summary>About this field</summary><p>{subdomain.description}</p></details>
    <details className="speculative-horizon"><summary>Speculative horizon</summary><p>This atmospheric material is not observed data, is not part of scoring, and is not a forecast unless explicitly sourced as one.</p><FictionalFuture domainId={subdomain.id} /></details>
  </div>;
}
