import type { ReactNode } from "react";
import { PageHeader } from "./ui";

export function EditorialPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main className="editorial-page flex-1"><PageHeader eyebrow={eyebrow} title={title} intro={intro} /><div className="editorial-body">{children}</div></main>;
}
