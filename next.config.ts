import type { NextConfig } from "next";
import { assertValidCatalogue } from "./src/lib/catalog-validation.ts";

assertValidCatalogue();

const nextConfig: NextConfig = {
  async redirects() {
    const tabs: Record<string, string> = { ai: "ai", robotics: "robotics", "self-driving-car": "self-driving", lev: "longevity", "space-exploration": "space", "quantum-computing": "quantum-computing", superconductor: "superconductors", bci: "bci", "mind-upload": "mind-uploading", vr: "vr", "cultured-meat": "cultivated-meat", "nuclear-fusion": "fusion" };
    return Object.entries(tabs).map(([tab, slug]) => ({ source: "/", has: [{ type: "query" as const, key: "tab", value: tab }], destination: `/progress/${slug}`, permanent: true }));
  },
};
export default nextConfig;
