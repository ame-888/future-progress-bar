import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/editorial-page";
import { MAIN_DOMAINS } from "@/components/progress-table-data";
import { DOMAIN_ID_TO_SLUG } from "@/lib/site";

export const metadata: Metadata = { title: "Sources & data", description: "The evidence hierarchy, structured source ledger and measurement catalogue behind Future Progress Bar.", alternates: { canonical: "/sources" } };

export default function SourcesPage() {
  return <EditorialPage eyebrow="Data notes" title="Sources, evidence and coverage" intro="Evidence is stored with the observation it supports. Missing references remain explicit rather than being replaced with invented citations.">
    <section><h2>Evidence hierarchy</h2><ol><li>Regulators, national statistics agencies, standards bodies, treaty organizations, official record bodies and official trial registries.</li><li>Peer-reviewed original research and major scientific consortia.</li><li>Audited filings and official technical or company documentation.</li><li>Strong journalism pointing to identifiable primary evidence.</li><li>Transparent estimates when stronger evidence does not exist.</li></ol><p>Retracted claims cannot establish a record, and incompatible definitions are not averaged merely because sources disagree.</p></section>
    <section><h2>Structured source ledger</h2><p>Each observation can record source title, organization or author, URL, publication date, access date, source type and the supported claim. Research cutoff, observation date and data period are separate fields. An empty evidence list means the stored result still awaits a source-ledger audit; it does not mean a citation was inferred.</p></section>
    <section><h2>Active measurement catalogue</h2><p>This catalogue is generated from the same canonical definitions and observation metadata as the dashboard.</p><div className="source-catalogue">{MAIN_DOMAINS.map(domain => <section key={domain.id}><h3>{domain.name}</h3>{domain.subdomains.map(sub => <div key={sub.id}><h4><Link href={`/progress/${DOMAIN_ID_TO_SLUG[sub.id]}`}>{sub.name}</Link></h4><ul>{sub.measurements.map(m => <li key={m.id}><strong>{m.title}</strong><span>{m.question}</span><small>{m.valueStatus?.replaceAll("-", " ") ?? "verified"} · research cutoff {m.researchCutoff} · {m.evidence.length ? `${m.evidence.length} evidence reference(s)` : "source ledger pending"}</small>{m.evidence.map(source => <small key={source.url}><a href={source.url}>{source.title}</a> — {source.organization ?? "author not recorded"}, accessed {source.accessedDate}</small>)}</li>)}</ul></div>)}</section>)}</div></section>
    <section><h2>Using the data responsibly</h2><p>Read a result with its question, definition, unit, status, cutoff and threshold. UNKNOWN, N/A and NO VERIFIED RESULT are nonnumeric and never mean zero. Cross-field milestone comparisons are narrative comparisons within this project, not scientific equivalences. See the <Link href="/methodology">methodology</Link>.</p></section>
  </EditorialPage>;
}
