import { AspectRow, PlaceholderTag, ProgressBar, ScorePair } from "@/components/ui";
import { getHorseman, horsemen } from "@/data/world";
import { calculateHorsemanScore } from "@/lib/scoring";
import { notFound } from "next/navigation";
export function generateStaticParams(){return horsemen.map(({id:horseman})=>({horseman}))}
export default async function HorsemanPage({params}:{params:Promise<{horseman:string}>}){const {horseman:id}=await params;const horseman=getHorseman(id);if(!horseman)notFound();const result=calculateHorsemanScore(horseman.aspects);return <main className={`horseman-page ${horseman.id}`} style={{"--accent":horseman.accent} as React.CSSProperties}>
  <section className="boss-hero"><div className="boss-aura"/><div className="boss-portrait" aria-hidden="true"><span>{horseman.sigil}</span></div><div className="boss-hero-copy"><div className="eyebrow">HORSEMAN // BOSS ENCOUNTER</div><h1>{horseman.name}</h1><h2>{horseman.title}</h2><p>{horseman.description}</p><PlaceholderTag/><ScorePair score={result.score}/><ProgressBar score={result.score}/></div></section>
  <section className="section aspect-list"><header className="section-head"><div><span className="eyebrow">ATTACK SURFACES // FIVE ASPECTS</span><h2>WHERE HUMANITY STRIKES</h2></div><p>The boss score is derived directly from the unweighted arithmetic mean of these five aspects.</p></header>{horseman.aspects.map(a=><AspectRow key={a.id} aspect={a}/>)}</section>
  <section className="formula-banner"><span>DERIVED SCORE RULE</span><code>{horseman.name} = ({horseman.aspects.map(a=>a.name).join(" + ")}) ÷ 5</code><small>NO HIDDEN WEIGHTS · NO MANUAL OVERRIDES · PLACEHOLDER INPUTS</small></section>
 </main>}

