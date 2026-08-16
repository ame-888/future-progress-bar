import { ACTIVE_MEASUREMENTS, findMeasurement, fullRecord } from "@/lib/transparency";
export const dynamic = "force-static";
export function generateStaticParams() { return ACTIVE_MEASUREMENTS.map(x => ({ id: x.measurement.id })); }
export async function GET(_: Request, { params }: { params: Promise<{id: string}> }) { const measurement = findMeasurement((await params).id); return measurement ? Response.json(fullRecord(measurement)) : Response.json({ error: "Measurement not found" }, { status: 404 }); }
