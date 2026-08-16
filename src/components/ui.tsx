import type { ReactNode } from "react";

export const STATUS_LABELS: Record<string, string> = { verified: "Verified", estimate: "Estimate", "lower-bound": "Lower bound", zero: "Verified zero", unknown: "Unknown", "not-applicable": "N/A", "no-verified-result": "No verified result" };

export function StatusBadge({ status }: { status: string }) {
  const icon = status === "verified" || status === "zero" ? "✓" : status === "estimate" ? "≈" : status === "lower-bound" ? "≥" : status === "not-applicable" ? "—" : "?";
  return <span className={`badge badge--status badge--${status}`}><span aria-hidden="true">{icon}</span>{STATUS_LABELS[status] ?? status}</span>;
}
export function FreshnessBadge({ state }: { state: string }) { return <span className={`badge badge--${state}`}><span aria-hidden="true">{state === "fresh" ? "●" : "◷"}</span>{state}</span>; }
export function EvidenceBadge({ count }: { count: number }) { return <span className={`badge ${count ? "badge--evidence" : "badge--muted"}`}><span aria-hidden="true">▤</span>{count} {count === 1 ? "source" : "sources"}</span>; }
export function DefinitionVersionBadge({ version }: { version: string }) { return <span className="badge badge--muted">Definition v{version}</span>; }
export function PageHeader({ eyebrow, title, intro, meta, children }: { eyebrow: string; title: string; intro: string; meta?: ReactNode; children?: ReactNode }) { return <header className="page-header"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-header__lede">{intro}</p>{meta && <div className="page-header__meta">{meta}</div>}{children}</header>; }
export function SectionHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) { return <header className="section-header">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</header>; }
export function EmptyState({ title = "No results", children }: { title?: string; children?: ReactNode }) { return <div className="empty-state"><span aria-hidden="true">◎</span><h2>{title}</h2>{children}</div>; }
export function DisclosurePanel({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) { return <details className="disclosure-panel" open={open}><summary>{title}<span aria-hidden="true">＋</span></summary><div>{children}</div></details>; }
export function StatCard({ label, value, detail }: { label: string; value: ReactNode; detail?: string }) { return <article className="stat-card"><small>{label}</small><strong>{value}</strong>{detail && <p>{detail}</p>}</article>; }
