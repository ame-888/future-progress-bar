export type HorsemanId = "death" | "pestilence" | "famine" | "war";
export type ScoreStatus = "known" | "unknown" | "placeholder" | "not_applicable";

export interface ScoreValue { score: number | null; status: ScoreStatus }
export interface Source { id: string; title: string; organization: string; url?: string; publicationDate?: string; dataYear?: number; accessedAt?: string; notes?: string; status: "placeholder" | "verified" }
export interface FormulaVariable { id: string; label: string; rawValue: number | null; normalizedValue: number | null; weight: number | null; contribution: number | null; sourceId?: string; status: ScoreStatus }
export interface HistoricalScore extends ScoreValue { year: number; methodologyVersion: string }
export interface Milestone { id: string; phase: string; title: string; status: "placeholder" | "verified" }
export interface Aspect {
  id: string; horseman: HorsemanId; name: string; subtitle: string; description: string;
  score: number | null; scoreStatus: ScoreStatus; methodologyVersion: string;
  formula: { expression: string | null; explanation: string; variables: FormulaVariable[]; status: "placeholder" | "verified" };
  sources: Source[]; historicalScores: HistoricalScore[]; milestones: Milestone[]; technologies: string[]; lastUpdated: string | null;
}
export interface Horseman { id: HorsemanId; name: string; sigil: string; title: string; description: string; accent: string; aspects: Aspect[] }

