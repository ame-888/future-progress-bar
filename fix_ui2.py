with open("src/components/progress-table.tsx", "r") as f:
    text = f.read()

# Make sure formatDateStr is not inside a string or badly placed
if "function formatDateStr" not in text:
    print("Function not found!")

# Let's add the function correctly at the top, just after the imports
date_formatter = """
export function formatDateStr(dateStr?: string) {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const getOrdinalSuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  return `${months[month]} ${day}${getOrdinalSuffix(day)}, ${year}`;
}
"""

import re
text = re.sub(r'import { MAIN_DOMAINS, MeasurementHistory } from "./progress-table-data";\nfunction formatDateStr[^}]+}\n};[^}]+}', f'import {{ MAIN_DOMAINS, MeasurementHistory }} from "./progress-table-data";\n{date_formatter}', text)

# if it wasn't replaced, replace it explicitly
if "export function formatDateStr" not in text:
    text = text.replace('import { MAIN_DOMAINS, MeasurementHistory } from "./progress-table-data";', f'import {{ MAIN_DOMAINS, MeasurementHistory }} from "./progress-table-data";\n{date_formatter}')


with open("src/components/progress-table.tsx", "w") as f:
    f.write(text)

with open("src/components/ai-graph.tsx", "r") as f:
    text2 = f.read()

# Fix AiGraph props
if "lastUpdated" not in text2[:300]:
    text2 = re.sub(r'export function AiGraph\(\)\s*{', r'export function AiGraph({ lastUpdated }: { lastUpdated?: string }) {', text2)

with open("src/components/ai-graph.tsx", "w") as f:
    f.write(text2)
