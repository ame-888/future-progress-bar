import { EditorialPage } from "@/components/editorial-page";
export const RESEARCH_PROMPT="Audit every active Future Progress Bar value using the current public FPB update manifest. Check each canonical question against up-to-date evidence and return only proposed observation/evidence changes in the FPB update-proposal format. Do not change definitions or thresholds unless you identify a methodology conflict. Do not infer ZERO from absence. Preserve UNKNOWN, LOWER BOUND, and ESTIMATE semantics.";
export default function UpdateGuide(){return <EditorialPage eyebrow="Maintainer update packet" title="Audit and update guide" intro="One research request → one structured proposal → one reviewed implementation request."><section><h2>Research pass</h2><ol><li>Download <a href="/api/update-manifest">the current update manifest</a>.</li><li>Research newer qualifying evidence after each metric’s cutoff and according to its own cadence and protocol.</li><li>Return proposals only; do not edit definitions while updating observations.</li></ol><pre><code>{RESEARCH_PROMPT}</code></pre></section><section><h2>Update-proposal 1.0 format</h2><pre><code>{`{
  "schemaVersion": "FPB-update-proposal-1.0",
  "snapshotId": "manifest snapshot being audited",
  "proposals": [{
    "measurementId": "stable ID", "oldValue": null, "oldStatus": "verified",
    "proposedValue": null, "proposedStatus": "unknown", "changed": false,
    "confidence": "high|medium|low", "reason": "...",
    "observationDate": null, "dataPeriod": null,
    "sources": [{"url":"...","title":"...","organization":"...","sourceType":"official","publicationDate":null,"accessedDate":"YYYY-MM-DD","supports":"..."}],
    "qualifyingEntitiesAdded": [], "qualifyingEntitiesRemoved": [],
    "definitionIssue": null, "scoreImpact": 0
  }]
}`}</code></pre></section><section><h2>Implementation pass</h2><p>Give the reviewed proposal to Codex:</p><blockquote>Apply this approved FPB observation update proposal to the canonical dataset. Preserve FPB-MS semantics, append observation history, advance snapshot metadata, update evidence, run validation/tests/build, and report score impact.</blockquote><p>Codex must validate IDs, allowed statuses, numeric/status compatibility, evidence IDs and entity links, history append-only behavior, snapshot advancement, and derived scoring before writing. Arbitrary JSON is never blindly ingested.</p></section></EditorialPage>}
