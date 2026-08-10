import { ChartBarIcon, CpuChipIcon, FolderOpenIcon, GlobeAltIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline";

const concepts = [
  { icon: GlobeAltIcon, title: "Main Domains", text: "Five strategic systems group the forces shaping humanity: automation, civilization, hardware, neurotechnology, and sustainability." },
  { icon: FolderOpenIcon, title: "Subdomains", text: "Twelve focused frontiers—from AI and longevity to fusion and space—form the working taxonomy." },
  { icon: ChartBarIcon, title: "Measurements", text: "Quantitative, sourced metrics record the latest real-world value and its history." },
  { icon: SparklesIcon, title: "Levels", text: "Eight material eras turn thresholds into a common progression language, from Stone to Antimatter." },
  { icon: StarIcon, title: "North Stars", text: "Exceptional destination metrics mark transformative outcomes beyond incremental progress." },
  { icon: CpuChipIcon, title: "Predictions", text: "AI model forecasts and your own locally saved estimates map when future thresholds may arrive." },
];

export function GamificationExplanation() {
  return (
    <section className="how-it-works" aria-labelledby="how-heading">
      <div className="how-it-works__intro">
        <p className="eyebrow">System architecture</p>
        <h2 id="how-heading">How to read the map</h2>
        <p>One consistent hierarchy turns very different technologies into a legible view of civilization-scale progress.</p>
      </div>
      <div className="concept-grid">
        {concepts.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="concept-item">
            <span className="concept-item__number">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
