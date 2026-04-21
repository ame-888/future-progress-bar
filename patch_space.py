import re

with open('src/components/progress-table-data.ts', 'r') as f:
    content = f.read()

content = re.sub(
    r'(id:\s*"space-1",\s*title:\s*"Maximum Simultaneous Human Population in Space",[\s\S]*?history:\s*\[\s*\{\s*value:\s*20,\s*details:\s*\[)("Jan 26, 2024: 20 people \(11 ISS, 3 Tiangong, 6 Suborbital\)")(\]\s*\}\s*\])',
    r'\1"May 25, 2023 and January 26, 2024", "Last Updated on April, 21st, 2026"\3',
    content,
    flags=re.MULTILINE
)

with open('src/components/progress-table-data.ts', 'w') as f:
    f.write(content)
