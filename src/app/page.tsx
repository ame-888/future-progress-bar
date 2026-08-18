import { BossCard, PlaceholderTag, ProgressBar, formatScore } from "@/components/ui";
import { horsemen } from "@/data/world";
import { calculateHorsemanScore, calculateHumanityScore } from "@/lib/scoring";
import Link from "next/link";

export default function Home(){const humanity=calculateHumanityScore(horsemen.map((h)=>calculateHorsemanScore(h.aspects)));return <main>
  <section className="hero"><div className="hero-grid"/><div className="hero-copy"><p className="kicker">FUTURE PROGRESS BAR // HUMAN RESISTANCE INDEX</p><h1><span>HUMANITY</span><em>VS.</em> THE FOUR<br/>HORSEMEN</h1><p className="lede">For all of history, humanity has lived under four ancient enemies.<br/><b>Death. Pestilence. Famine. War.</b><br/>We are fighting back.</p></div>
  <div className="humanity-panel"><div className="eyebrow">GLOBAL BATTLE STATUS</div><div className="humanity-score"><span>HUMANITY</span><strong>{formatScore(humanity.score)}</strong><small>/ 100</small></div><ProgressBar score={humanity.score}/><div className="panel-foot"><PlaceholderTag/><span>20 ASPECTS · 4 BOSSES · 1 SPECIES</span></div></div><a href="#encounters" className="scroll">SCROLL TO ENGAGE ↓</a></section>
  <section id="encounters" className="section encounters"><header className="section-head"><div><span className="eyebrow">THE ANCIENT ENEMIES</span><h2>FOUR BOSS ENCOUNTERS</h2></div><p>Every score shown is demo data. The formulas are not yet defined; the architecture is ready for public, reproducible calculations.</p></header><div className="boss-grid">{horsemen.map((h)=><BossCard key={h.id} horseman={h}/>)}</div></section>
  <section className="manifesto"><div><span className="eyebrow">OUR WEAPONS</span><h2>SCIENCE IS THE<br/>DAMAGE ENGINE.</h2></div><p>Vaccines, clean energy, automation, medicine, institutions, and knowledge are not domains. They are weapons. The scoreboard will never hide its rules.</p><Link className="button" href="/methodology">AUDIT THE SYSTEM →</Link></section>
  <section className="battle-tease"><span className="pulse"/><div><span className="eyebrow">BATTLE LOG // NO VERIFIED EVENTS YET</span><h2>THE ARCHIVE AWAITS REAL DATA.</h2></div><Link href="/battle-log">OPEN BATTLE LOG →</Link></section>
  </main>}
