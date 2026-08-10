import type { EvidenceReference } from "./measurement-types.ts";

const checked = "2026-08-10";
const ref = (title: string, organization: string, url: string, sourceType: EvidenceReference["sourceType"], supports: string, publicationDate?: string): EvidenceReference => ({ title, organization, url, sourceType, supports, publicationDate, accessedDate: checked });

/** Primary references for observations changed in the 2026-08-10 integrity audit. */
export const AUDIT_EVIDENCE: Record<string, EvidenceReference[]> = {
  "lev-3": [ref("Oldest person living", "Guinness World Records", "https://www.guinnessworldrecords.com/world-records/67479-oldest-person-living", "official", "Ethel Caterham is the verified oldest living person and was born 21 August 1909.")],
  "lev-4": [ref("World Supercentenarian Rankings List", "Gerontology Research Group", "https://www.grg-supercentenarians.org/world-supercentenarian-rankings-list/", "official", "The cutoff count is the number of living validated entries on the GRG list, not a census estimate.")],
  "qc-4": [ref("IBM Quantum system performance", "IBM Quantum", "https://quantum.cloud.ibm.com/services/resources", "technical", "IBM's published system metrics report approximately 340K hardware-aware CLOPS_h for a Heron system.")],
  "self-driving-car-2": [ref("Autonomous Vehicle Deployment Program", "California Public Utilities Commission", "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/autonomous-vehicle-programs", "official", "Ordinary paid driverless passenger service is authorized in parts of the United States."), ref("Beijing opens autonomous driving service area", "Beijing Municipal Government", "https://english.beijing.gov.cn/latest/news/202503/t20250304_4023444.html", "official", "China permits public autonomous-driving services in a defined city area.")],
  "bci-2": [ref("Clinical trials database", "U.S. National Library of Medicine", "https://clinicaltrials.gov/", "official", "Country and trial records were checked against formal registered human studies; the public cross-country total remains a lower bound.")],
  "cultured-meat-3": [ref("Cell-cultivated products for animal feed", "UK Food Standards Agency", "https://www.food.gov.uk/news-alerts/news/cell-cultivated-products-approved-for-use-in-animal-feed", "official", "The United Kingdom authorized a cultivated product for use in pet food.")],
  "cultured-meat-2": [
    ref("Safety assessment of cultivated chicken", "Singapore Food Agency", "https://www.sfa.gov.sg/food-information/risk-at-a-glance/safety-of-alternative-protein", "official", "Singapore permits an assessed cultivated-meat product for human consumption."),
    ref("Human Food Made with Cultured Animal Cells", "U.S. Food and Drug Administration", "https://www.fda.gov/food/food-ingredients-packaging/human-food-made-cultured-animal-cells", "official", "The United States completed federal pre-market consultations for cultivated chicken products."),
    ref("Approval report A1269", "Food Standards Australia New Zealand", "https://www.foodstandards.gov.au/food-standards-code/applications/A1269-Cultured-Quail", "official", "The Australia/New Zealand joint food code authorized cultivated quail, establishing separate operative permission in both countries."),
    ref("World's first regulatory approval for cultivated beef", "Israel Ministry of Health", "https://www.gov.il/en/pages/press_17012024", "official", "Israel authorized a cultivated-beef product for human consumption."),
  ],
};
