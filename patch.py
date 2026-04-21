import re

with open('src/components/progress-table-data.ts', 'r') as f:
    content = f.read()

# lev-2: Average lifespan
content = re.sub(
    r'(id:\s*"lev-2",\s*title:\s*"Average lifespan in the number 1 country",[\s\S]*?history:\s*\[\s*\{\s*value:\s*86\.73,\s*details:\s*\[)("Monaco")(\]\s*\}\s*\])',
    r'\1"Monaco (2026 - UN Projection)", "Last Updated on April, 21st, 2026"\3',
    content,
    flags=re.MULTILINE
)

# space-pop: Population in Space
content = re.sub(
    r'(id:\s*"space-pop",\s*title:\s*"Maximum Simultaneous Human Population in Space",[\s\S]*?history:\s*\[\s*\{\s*value:\s*20,\s*details:\s*\[)("Jan 26, 2024: 20 people \(11 ISS, 3 Tiangong, 6 Suborbital\)")(\]\s*\}\s*\])',
    r'\1"May 25, 2023 and January 26, 2024", "Last Updated on April, 21st, 2026"\3',
    content,
    flags=re.MULTILINE
)

# space-moon-pop: Population on Moon
content = re.sub(
    r'(id:\s*"space-moon-pop",\s*title:\s*"Maximum Simultaneous Human Population on the Moon",[\s\S]*?history:\s*\[\s*\{\s*value:\s*2,\s*details:\s*\[)("This occurred again and again during each of the six successful Apollo lunar landing missions \(Apollo 11, 12, 14, 15, 16, and 17\) between 1969 and 1972\.")(\]\s*\}\s*\])',
    r'\1\2, "Last Updated on April, 21st, 2026"\3',
    content,
    flags=re.MULTILINE
)

# space-mars-pop: Population on Mars
content = re.sub(
    r'(id:\s*"space-mars-pop",\s*title:\s*"Maximum Simultaneous Human Population on Mars",[\s\S]*?history:\s*)(\[])',
    r'\1[\n                {\n                  value: 0,\n                  details: ["Last Updated on April, 21st, 2026"]\n                }\n              ]',
    content,
    flags=re.MULTILINE
)

with open('src/components/progress-table-data.ts', 'w') as f:
    f.write(content)
