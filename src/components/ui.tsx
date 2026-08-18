import Link from "next/link";
import type { Aspect, Horseman } from "@/lib/types";
import { calculateBossHP, calculateHorsemanScore } from "@/lib/scoring";

export const formatScore=(score:number|null)=>score===null?"—":score.toFixed(2);
export function PlaceholderTag(){return <span className="placeholder-tag">DEVELOPMENT PLACEHOLDER</span>}
export function ProgressBar({score,label="Humanity damage dealt"}:{score:number|null;label?:string}){return <div className="bar" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={score??undefined}><i style={{width:`${score??0}%`}} /></div>}
export function ScorePair({score}:{score:number|null}){const value={score,status:"placeholder" as const};const hp=calculateBossHP(value);return <div className="score-pair"><div><small>PROGRESS</small><strong>{formatScore(score)}</strong></div><div><small>HP REMAINING</small><strong>{formatScore(hp.score)}</strong></div></div>}
export function BossCard({horseman}:{horseman:Horseman}){const result=calculateHorsemanScore(horseman.aspects);return <article className={`boss-card ${horseman.id}`} style={{"--accent":horseman.accent} as React.CSSProperties}><div className="boss-art" aria-hidden="true"><span>{horseman.sigil}</span></div><div className="boss-content"><div className="eyebrow">BOSS ENCOUNTER // 0{["death","pestilence","famine","war"].indexOf(horseman.id)+1}</div><h2>{horseman.name}</h2><p className="boss-title">{horseman.title}</p><ScorePair score={result.score}/><ProgressBar score={result.score} label={`${horseman.name} progress`}/><PlaceholderTag/><Link className="button" href={`/${horseman.id}`}>ENTER ENCOUNTER <span>→</span></Link></div></article>}
export function AspectRow({aspect}:{aspect:Aspect}){return <Link className="aspect-row" href={`/${aspect.horseman}/${aspect.id}`}><span><b>{aspect.name}</b><small>{aspect.subtitle}</small></span><span className="aspect-score">{formatScore(aspect.score)}</span><span aria-hidden="true">→</span></Link>}

