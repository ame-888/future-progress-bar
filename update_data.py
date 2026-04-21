import re

with open("src/components/progress-table-data.ts", "r") as f:
    content = f.read()

# 1. Update SubDomainData type
content = content.replace("export type SubDomainData = {", "export type SubDomainData = {\n  northStar?: { title: string; lastUpdated: string };")

# 2. Update Measurement type
content = content.replace("export type Measurement = {", "export type Measurement = {\n  lastUpdated?: string;")

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

# 3. Add lastUpdated to all measurements that have it in details and remove the string
def replacer(match):
    full_match = match.group(0)
    month = match.group(1)
    day = match.group(2)
    year = match.group(3)

    date_str = f"{year}-{month_map[month]}-{int(day):02d}"

    # We replace the specific Last Updated string with nothing, or handle the array logic better.
    # Actually, it might be easier to parse the objects. Since it's TS, it's hard. We can just use regex carefully.
    return date_str

# Python script to parse the file, find "Last Updated on [Month] [Day][st|nd|rd|th], [Year]" and move it.
