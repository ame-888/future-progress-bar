import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgressTable } from "@/components/progress-table";
import { AdSenseScript } from "@/components/adsense";
import { EDITORIAL_BRIEFS } from "@/lib/editorial-content";
import { PROGRESS_SLUGS, SITE_URL, SLUG_TO_DOMAIN_ID } from "@/lib/site";

export function generateStaticParams() { return PROGRESS_SLUGS.map(slug => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/progress/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!PROGRESS_SLUGS.includes(slug as (typeof PROGRESS_SLUGS)[number])) return {};
  const brief = EDITORIAL_BRIEFS[SLUG_TO_DOMAIN_ID[slug as keyof typeof SLUG_TO_DOMAIN_ID]];
  const url = `/progress/${slug}`;
  return { title: `${brief.title} progress`, description: brief.dek, alternates: { canonical: url }, openGraph: { title: `${brief.title} progress`, description: brief.dek, url } };
}

export default async function ProgressPage({ params }: PageProps<"/progress/[slug]">) {
  const { slug } = await params;
  if (!PROGRESS_SLUGS.includes(slug as (typeof PROGRESS_SLUGS)[number])) notFound();
  const id = SLUG_TO_DOMAIN_ID[slug as keyof typeof SLUG_TO_DOMAIN_ID];
  const brief = EDITORIAL_BRIEFS[id];
  const structuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Progress", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: brief.title, item: `${SITE_URL}/progress/${slug}` },
  ] };
  return <main className="app-shell relative flex-1 w-full"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ProgressTable initialSubdomainId={id} /><AdSenseScript /></main>;
}
