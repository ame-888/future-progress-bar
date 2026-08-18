import type { Aspect, Horseman, HorsemanId } from "@/lib/types";

const definitions: Record<HorsemanId, { name: string; sigil: string; title: string; accent: string; description: string; aspects: [string,string,string,string][] }> = {
  death: { name:"DEATH", sigil:"☠", title:"THE OLDEST ENEMY", accent:"#88d8ff", description:"Humanity's struggle against mortality itself — decay, damage, dying, death, and the limits of the biological mind.", aspects:[
    ["aging","AGING","DON'T DETERIORATE","Defeating biological deterioration caused by time."],["regeneration","REGENERATION","REPAIR WHAT BREAKS","Repairing or replacing damaged parts of the human organism."],["resuscitation","RESUSCITATION","REVERSE DYING","Reversing very recent clinical death and the immediate dying process."],["revival","REVIVAL","REVERSE DEATH","Restoring a person after prolonged death or preservation."],["mind-upload","MIND UPLOAD","OUTGROW MORTALITY","Allowing a mind to continue beyond dependence on one biological brain."]]},
  pestilence: { name:"PESTILENCE", sigil:"✣", title:"THE LIVING CORRUPTION", accent:"#a9ff52", description:"Pathological and external damage to the living human organism — invasive, mutating, and relentless.", aspects:[
    ["infection","INFECTION","THE INVADER","Viruses, bacteria, fungi, parasites, and other pathogens."],["cancer","CANCER","THE REBELLION","Malignant cellular growth."],["genetic-disease","GENETIC DISEASE","THE FLAWED CODE","Disease caused primarily by inherited or congenital genetic defects."],["dysfunction","DYSFUNCTION","THE FAILING MACHINE","Acquired pathological malfunction of the body's or mind's own systems."],["injury","INJURY","THE HOSTILE WORLD","External physical or chemical harm."]]},
  famine: { name:"FAMINE", sigil:"◒", title:"THE ENGINE OF SCARCITY", accent:"#ffc04d", description:"Material scarcity and the struggle for the physical resources necessary for a good life.", aspects:[
    ["food","FOOD","NOURISHMENT","Reliable access to sufficient, safe, healthy, affordable nutrition."],["water","WATER","THE FIRST NEED","Safe water and sanitation."],["shelter","SHELTER","REFUGE","Safe, adequate, comfortable, and affordable housing."],["energy","ENERGY","POWER IN ABUNDANCE","Abundant, reliable, affordable, and sustainable usable energy."],["leisure","LEISURE","TIME LIBERATED","Freedom from compulsory labor required merely to survive."]]},
  war: { name:"WAR", sigil:"⚔", title:"THE SELF-HEALING ENEMY", accent:"#ff573d", description:"Violence, coercion, domination, and destructive conflict between human beings. When humanity regresses, War regenerates.", aspects:[
    ["tyranny","TYRANNY","THE IRON CROWN","Autocracy, political repression, arbitrary power, and the denial of rights."],["warfare","WARFARE","THE BURNING FRONT","Interstate war, civil war, insurgency, and organized armed conflict."],["lawlessness","LAWLESSNESS","THE BROKEN ORDER","Organized crime, homicide, terror, and breakdowns of public security."],["abuse","ABUSE","VIOLENCE WITHIN","Private and relational forms of coercion and harm."],["discrimination","DISCRIMINATION","THE DIVIDING LINE","Systematic deprivation of safety, rights, or opportunity because of identity."]]}
};

const demoScores = [22,34,46,18,10, 42,54,38,50,58, 62,70,44,66,52, 36,48,40,32,56];
let cursor = 0;
const makeAspect = (horseman: HorsemanId, item: [string,string,string,string]): Aspect => {
  const score = demoScores[cursor++];
  return { id:item[0], horseman, name:item[1], subtitle:item[2], description:item[3], score, scoreStatus:"placeholder", methodologyVersion:"demo-0.0",
    formula:{ expression:null, explanation:"The deterministic formula has not been designed. This panel demonstrates the future audit interface only.", variables:[{id:"demo-input",label:"Example input slot",rawValue:null,normalizedValue:null,weight:null,contribution:null,status:"placeholder"}], status:"placeholder" },
    sources:[{id:"source-slot",title:"Source slot reserved",organization:"No source assigned",notes:"Placeholder record — not scientific evidence.",status:"placeholder"}],
    historicalScores:[1986,1996,2006,2016,2026].map((year, index)=>({year,score:Math.max(0,score-24+index*6),status:"placeholder",methodologyVersion:"demo-0.0"})),
    milestones:["OPENING PHASE","MID PHASE","FINAL PHASE"].map((phase,index)=>({id:`phase-${index+1}`,phase,title:"Threshold to be scientifically defined",status:"placeholder"})),
    technologies:["Weapon mapping in development"], lastUpdated:null };
};

export const horsemen: Horseman[] = (Object.keys(definitions) as HorsemanId[]).map((id) => { const d=definitions[id]; return {id,name:d.name,sigil:d.sigil,title:d.title,accent:d.accent,description:d.description,aspects:d.aspects.map((a)=>makeAspect(id,a))}; });
export const getHorseman = (id:string) => horsemen.find((h)=>h.id===id);
export const getAspect = (horseman:string,id:string) => getHorseman(horseman)?.aspects.find((a)=>a.id===id);

