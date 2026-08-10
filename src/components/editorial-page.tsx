import type { ReactNode } from "react";

export function EditorialPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main className="editorial-page flex-1"><header><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="editorial-lede">{intro}</p></header><div className="editorial-body">{children}</div></main>;
}
