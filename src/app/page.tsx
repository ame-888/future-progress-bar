import Link from "next/link";
import { MainProgressBar } from "@/components/main-progress-bar";
import { MAIN_DOMAINS } from "@/components/progress-table-data";
import { getCompletedLevelCount } from "@/lib/progress-utils";
import { DOMAIN_ID_TO_SLUG, SITE_URL } from "@/lib/site";
import { AdSenseScript } from "@/components/adsense";

export default function Home() {
  const websiteData = { "@context": "https://schema.org", "@type": "WebSite", name: "Future Progress Bar", url: SITE_URL, description: "A living atlas of 48 measurements across humanity’s technological frontier." };
  return <main className="overview-page app-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData).replace(/</g, "\\u003c") }} />
    <section className="overview-hero"><p className="atlas-kicker">A living civilization atlas</p><h1>Where are we now?</h1><p>Future Progress Bar tracks 48 concrete research questions across 12 fields. It separates observed evidence from forecasts—and measured progress from the speculative horizon.</p><div><Link className="primary-cta" href="#fields">Explore all fields</Link><Link href="/research">Read the research specification</Link></div></section>
    <MainProgressBar />
    <section className="layer-guide" aria-labelledby="layer-heading"><div><p className="atlas-kicker">How to read this project</p><h2 id="layer-heading">Four layers, no blurred boundaries</h2></div><ol><li><strong>Where are we now?</strong><span>Observed results and scored milestones.</span></li><li><strong>How do we measure it?</strong><span>Questions, definitions and evidence.</span></li><li><strong>What happens next?</strong><span>AI and personal forecasts.</span></li><li><strong>Speculative horizon</strong><span>Atmosphere beyond measured reality.</span></li></ol></section>
    <section id="fields" className="field-atlas"><div className="section-heading"><p className="atlas-kicker">The complete atlas</p><h2>12 fields across five domains</h2><p>Each field contains exactly four active measurements and 28 possible scored milestones.</p></div>{MAIN_DOMAINS.map(domain => <section className={`domain-group domain-${domain.id}`} key={domain.id}><header><h3>{domain.name}</h3><span>{domain.subdomains.length} fields</span></header><div>{domain.subdomains.map(sub => { const achieved = sub.measurements.reduce((sum, m) => sum + getCompletedLevelCount(m), 0); return <Link className="field-card" href={`/progress/${DOMAIN_ID_TO_SLUG[sub.id]}`} key={sub.id}><span className="field-card__arrow" aria-hidden="true">↗</span><h4>{sub.name}</h4><p>{sub.description}</p><strong>{achieved} / 28 milestones</strong><div className="mini-progress" aria-label={`${achieved} of 28 milestones reached`}><i style={{ width: `${achieved / 28 * 100}%` }} /></div><small>Open four measurements</small></Link>; })}</div></section>)}</section>
    <section className="next-steps"><div><p className="atlas-kicker">Go deeper</p><h2>Follow the evidence—or look ahead</h2></div><Link href="/research"><strong>Research specification</strong><span>All 48 canonical questions and definitions →</span></Link><Link href="/forecasts"><strong>Forecast desk</strong><span>Model scenarios and your predictions →</span></Link><Link href="/sources"><strong>Evidence ledger</strong><span>Sources supporting current results →</span></Link></section>
    <AdSenseScript />
  </main>;
}
