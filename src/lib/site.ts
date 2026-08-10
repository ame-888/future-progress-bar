export const SITE_URL = "https://future-progress-bar.vercel.app";

export const PROGRESS_SLUGS = [
  "ai", "robotics", "self-driving", "longevity", "space", "quantum-computing",
  "superconductors", "bci", "mind-uploading", "vr", "cultivated-meat", "fusion",
] as const;

export const SLUG_TO_DOMAIN_ID: Record<(typeof PROGRESS_SLUGS)[number], string> = {
  ai: "ai", robotics: "robotics", "self-driving": "self-driving-car", longevity: "lev",
  space: "space-exploration", "quantum-computing": "quantum-computing",
  superconductors: "superconductor", bci: "bci", "mind-uploading": "mind-upload",
  vr: "vr", "cultivated-meat": "cultured-meat", fusion: "nuclear-fusion",
};

export const DOMAIN_ID_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_DOMAIN_ID).map(([slug, id]) => [id, slug]),
) as Record<string, string>;

export const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
export const adsenseEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" && /^ca-pub-\d+$/.test(adsenseClient ?? "");
