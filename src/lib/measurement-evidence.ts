import type { EvidenceReference } from "./measurement-types.ts";
import { DATASET_SNAPSHOT } from "../data/dataset-snapshot.ts";

const checked = DATASET_SNAPSHOT.researchCutoff;
const evidenceId = (url: string) => `source-${url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase()}`;
const ref = (title: string, organization: string, url: string, sourceType: EvidenceReference["sourceType"], supports: string, publicationDate?: string): EvidenceReference => ({ id: evidenceId(url), title, organization, url, sourceType, supports, publicationDate, accessedDate: checked });

/** Production evidence ledger for the August 16, 2026 observation snapshot. */
export const MEASUREMENT_EVIDENCE: Record<string, EvidenceReference[]> = {
  "lev-1": [ref("World Population Prospects 2024", "United Nations, Department of Economic and Social Affairs, Population Division", "https://population.un.org/wpp/Download/Standard/MostUsed/", "official", "The 2026 world estimate for life expectancy at birth, both sexes combined, is 73.768 years.")],
  "lev-3": [ref("Oldest person living", "Guinness World Records", "https://www.guinnessworldrecords.com/world-records/67479-oldest-person-living", "official", "Ethel Caterham, born 21 August 1909, remained the verified oldest living person and was 116 years, 360 days old at the cutoff.")],
  "lev-4": [ref("World Supercentenarian Rankings List", "Gerontology Research Group", "https://www.grg-supercentenarians.org/world-supercentenarian-rankings-list/", "official", "The 203 living validated entries at the cutoff are an exact GRG list count, not a census estimate of the world's true living supercentenarian population.")],
  "qc-4": [ref("IBM Quantum system performance", "IBM Quantum", "https://quantum.cloud.ibm.com/services/resources", "technical", "IBM's published system metrics report approximately 340K hardware-aware CLOPS_h for a Heron system.")],
  "self-driving-car-2": [ref("Autonomous Vehicle Deployment Program", "California Public Utilities Commission", "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/autonomous-vehicle-programs", "official", "Ordinary paid driverless passenger service is authorized in parts of the United States."), ref("Beijing opens autonomous driving service area", "Beijing Municipal Government", "https://english.beijing.gov.cn/latest/news/202503/t20250304_4023444.html", "official", "China permits public autonomous-driving services in a defined city area.")],
  "bci-1": [
    ref("Patient Registry", "Neuralink", "https://neuralink.com/patient-registry/", "official", "Defines Neuralink's implanted-human program; the cutoff cohort audit counts completed implants rather than registry enrollment."),
    ref("ClinicalTrials.gov study records", "U.S. National Library of Medicine", "https://clinicaltrials.gov/search?term=brain-computer%20interface", "official", "Trial records were used to distinguish implanted cohorts from enrollment targets and temporary electrode studies."),
    ref("Brain-computer interface research", "Chinese Academy of Sciences", "https://english.cas.cn/newsroom/research_news/life/", "official", "Institutional reporting was reviewed chronologically for completed NEO and Beinao No.1 implants; the audit uses 32 and 16 rather than later targets or incompatible headline totals."),
  ],
  "bci-2": [ref("Clinical trials database", "U.S. National Library of Medicine", "https://clinicaltrials.gov/", "official", "Country and trial records were checked against formal registered human studies; the public cross-country total remains a lower bound.")],
  "cultured-meat-3": [ref("Cell-cultivated products for animal feed", "UK Food Standards Agency", "https://www.food.gov.uk/news-alerts/news/cell-cultivated-products-approved-for-use-in-animal-feed", "official", "The United Kingdom authorized a cultivated product for use in pet food.")],
  "cultured-meat-2": [
    ref("Safety assessment of cultivated chicken", "Singapore Food Agency", "https://www.sfa.gov.sg/food-information/risk-at-a-glance/safety-of-alternative-protein", "official", "Singapore permits an assessed cultivated-meat product for human consumption."),
    ref("Human Food Made with Cultured Animal Cells", "U.S. Food and Drug Administration", "https://www.fda.gov/food/food-ingredients-packaging/human-food-made-cultured-animal-cells", "official", "The United States completed federal pre-market consultations for cultivated chicken products."),
    ref("Approval report A1269", "Food Standards Australia New Zealand", "https://www.foodstandards.gov.au/food-standards-code/applications/A1269-Cultured-Quail", "official", "The Australia/New Zealand joint food code authorized cultivated quail, establishing separate operative permission in both countries."),
    ref("World's first regulatory approval for cultivated beef", "Israel Ministry of Health", "https://www.gov.il/en/pages/press_17012024", "official", "Israel authorized a cultivated-beef product for human consumption."),
  ],
};
