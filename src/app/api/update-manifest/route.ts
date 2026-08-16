import { updateManifest } from "@/lib/transparency";
export const dynamic = "force-static";
export function GET() { return Response.json(updateManifest()); }
