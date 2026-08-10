import { permanentRedirect } from "next/navigation";

export default function RetiredMetricsPage() {
  permanentRedirect("/archive");
}
