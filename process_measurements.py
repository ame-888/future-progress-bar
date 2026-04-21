import re

with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

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

date_pattern = re.compile(r'"Last Updated on ([A-Za-z]+) (\d+)(?:st|nd|rd|th), (\d+)"')

# We'll split the text by measurements.
# Measurements start with `{` followed by `id: "..."` and end with `},` or `}`.
# This is tricky with simple regex. Let's just do it line by line.

lines = text.split('\n')
new_lines = []

current_measurement_idx = -1
measurement_brace_level = 0
in_measurement = False

i = 0
while i < len(lines):
    line = lines[i]

    # We are looking for the 'details: [... "Last Updated on ..."]'
    # and we want to move that date to the measurement level.
    # Since measurements are formatted somewhat consistently, let's track the last `id: "..."` line that is a measurement.
    # Actually, if we just find a "Last Updated" line, we can inject `lastUpdated: "YYYY-MM-DD",` right after the previous `unit:` or `title:` line!

    # Wait, some "Last Updated" are combined like: `details: ["Monaco (2026 - UN Projection)", "Last Updated on April 21st, 2026"]`

    match = date_pattern.search(line)
    if match:
        month = match.group(1)
        day = match.group(2)
        year = match.group(3)
        date_str = f"{year}-{month_map[month]}-{int(day):02d}"

        # Remove the string from the line
        # If it's `details: ["Last Updated..."]` -> `details: []` (or we can just remove `details: []` entirely if empty)
        # If it's `... , "Last Updated..."` -> remove the `, "Last Updated..."`

        new_line = line
        new_line = re.sub(r',\s*"Last Updated on [^"]+"', '', new_line)
        new_line = re.sub(r'"Last Updated on [^"]+",\s*', '', new_line)
        new_line = re.sub(r'"Last Updated on [^"]+"', '', new_line)

        # if new_line ends up with `details: []`, we can keep it or let it be.
        if "details: []" in new_line or "details: [ ]" in new_line:
             new_line = new_line.replace("details: []", "")
             new_line = new_line.replace("details: [ ]", "")
             new_line = new_line.strip()
             if new_line.endswith(','):
                 new_line = new_line[:-1] # Remove trailing comma if any
             if new_line == "":
                 pass # we'll just not add it, wait, we need to be careful not to break JSON

        # Let's handle the specific cases safely:
        if '"Last Updated on' in line:
             line_clean = line.replace(match.group(0), "")
             # clean up empty details
             line_clean = line_clean.replace("details: []", "")
             line_clean = line_clean.replace("details: [ ]", "")
             # clean up hanging commas
             line_clean = line_clean.replace("[,", "[")
             line_clean = line_clean.replace(",]", "]")
             line_clean = line_clean.replace(", ,", ",")

             # If line becomes just a comma or empty spaces, maybe don't append it
             # But it might be `{ value: 0, details: [] }` which becomes `{ value: 0,  }`
             line_clean = line_clean.replace(",  }", " }").replace(", }", " }")
             if line_clean.strip() == "}" or line_clean.strip() == "},":
                 pass # keep it

             # Instead of regex magic, let's just find the `title:` line backwards and inject `lastUpdated`
             # Go back and find the nearest `unit:` or `title:`
             j = len(new_lines) - 1
             inserted = False
             while j >= 0:
                 if "unit:" in new_lines[j] or "title:" in new_lines[j] or "id: " in new_lines[j]:
                     # Found measurement prop
                     # Check if it already has lastUpdated
                     if "lastUpdated:" not in new_lines[j+1]:
                         indent = " " * (len(new_lines[j]) - len(new_lines[j].lstrip()))
                         new_lines.insert(j+1, f"{indent}lastUpdated: \"{date_str}\",")
                         inserted = True
                     break
                 j -= 1

             if not inserted:
                 print(f"Warning: could not inject lastUpdated for {date_str}")

             # Fix the current line
             line_to_add = line
             line_to_add = line_to_add.replace(match.group(0), "").replace("details: []", "").replace("details: [ ]", "").replace("[,", "[").replace(",]", "]").replace(", ,", ",").replace(",  }", " }").replace(", }", " }")
             if "history: [{ value: Infinity,  }]" in line_to_add:
                 line_to_add = line_to_add.replace("history: [{ value: Infinity,  }]", "history: [{ value: Infinity }]")
             if "history: [{ value: 0,  }]" in line_to_add:
                 line_to_add = line_to_add.replace("history: [{ value: 0,  }]", "history: [{ value: 0 }]")
             if "history: [{ value: 1,  }]" in line_to_add:
                 line_to_add = line_to_add.replace("history: [{ value: 1,  }]", "history: [{ value: 1 }]")
             if "details: [" in line_to_add and line_to_add.strip().endswith("details: ["):
                  # It was a multiline details array
                  pass

             new_lines.append(line_to_add)
    else:
        new_lines.append(line)

    i += 1

with open("src/components/progress-table-data.ts", "w") as f:
    f.write('\n'.join(new_lines))
