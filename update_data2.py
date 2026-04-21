import re

with open("src/components/progress-table-data.ts", "r") as f:
    lines = f.readlines()

new_lines = []
i = 0
last_updated_map = {} # Store last updated dates to add to measurement later? Or we just add it to history? No, Measurement needs lastUpdated.

# Actually, the best way to handle this in Python is to read backwards or keep track of the current Measurement object.
# A simpler way: we just find "Last Updated on" and grab the date, replace the line, and inject `lastUpdated: "YYYY-MM-DD",` at the beginning of the `history: [` block or `levels: [` block.

import sys

with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

# Fix types
text = text.replace("export type SubDomainData = {\n  id: string;", "export type SubDomainData = {\n  id: string;\n  northStar?: { title: string; lastUpdated: string };")
text = text.replace("export type Measurement = {\n  id: string;", "export type Measurement = {\n  id: string;\n  lastUpdated?: string;")

month_map = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
}

# Add northStars to subdomains
north_stars = {
    "longevity": ('"Maximum Human Lifespan"', '"2026-04-21"'),
    "ai": ('"Maximum AI capability"', '"2026-04-19"'),
    "space-exploration": ('"Maximum Commercial Efficiency to LEO"', '"2026-04-21"'),
    "quantum-computing": ('"Maximum Physical Qubit Count in a Single System"', '"2026-04-20"'),
    "superconductor": ('"Maximum Critical Temperature (Tc) of a Superconductor at Ambient Pressure"', '"2026-04-21"'),
    "bci": ('"Maximum Bandwidth of a Brain-Computer Interface"', '"2026-04-19"'),
    "mind-upload": ('"Maximum whole brain emulation"', '"2026-04-19"'),
    "vr": ('"Maximum immersion in a Virtual Reality"', '"2026-04-19"'),
    "cultured-meat": ('"Maximum commercial viability of Cultured Meat"', '"2026-04-19"'),
    "nuclear-fusion": ('"Maximum net energy gain of a Nuclear Fusion Reactor (Q factor)"', '"2026-04-20"')
}

for sub_id, (title, date) in north_stars.items():
    pattern = r'(id:\s*"' + sub_id + r'",\n\s*name:\s*"[^"]+",)'
    replacement = r'\1\n          northStar: { title: ' + title + r', lastUpdated: ' + date + r' },'
    text = re.sub(pattern, replacement, text, count=1)


# Process measurements
# We'll regex search for Measurement objects by id, title, and then inject lastUpdated.
# But "Last Updated on" strings are scattered.
# Let's find all occurrences of "Last Updated on Month Day, Year" inside details arrays.
matches = re.finditer(r'("Last Updated on ([A-Za-z]+) (\d+)(?:st|nd|rd|th), (\d+)")', text)
for match in matches:
    full_str = match.group(1)
    month = match.group(2)
    day = match.group(3)
    year = match.group(4)
    date_str = f"{year}-{month_map[month]}-{int(day):02d}"

    # We want to remove this string from the array and add `lastUpdated: "YYYY-MM-DD"` to the measurement
    # But it's easier to just do a python script that parses the TS block by block.

print("Fixing types and subdomains done. Now need to process measurements.")
with open("src/components/progress-table-data.ts", "w") as f:
    f.write(text)
