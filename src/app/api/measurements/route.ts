import { ACTIVE_MEASUREMENTS, compactRecord } from "@/lib/transparency";
export const dynamic = "force-static";
export function GET() { return Response.json({ schemaVersion: "FPB-compact-registry-1.0", count: ACTIVE_MEASUREMENTS.length, measurements: ACTIVE_MEASUREMENTS.map(x => compactRecord(x.measurement)) }); }
