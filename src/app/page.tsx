import { ProgressTable } from "@/components/progress-table";
import { GamificationExplanation } from "@/components/gamification-explanation";
import { SITE_URL } from "@/lib/site";
import { AdSenseScript } from "@/components/adsense";

export default function Home() {
  const websiteData = { "@context": "https://schema.org", "@type": "WebSite", name: "Future Progress Bar", url: SITE_URL, description: "An interactive atlas of humanity's technological future." };
  return (
    <main className="app-shell relative flex-1 w-full transition-colors duration-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ProgressTable />
        <GamificationExplanation />
      </div>
      <AdSenseScript />
    </main>
  );
}
