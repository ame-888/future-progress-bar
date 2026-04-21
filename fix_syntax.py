with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

text = text.replace("history: [{ value: 1, details: [\"China (2026)\", ] }]", "history: [{ value: 1, details: [\"China (2026)\"] }]")

with open("src/components/progress-table-data.ts", "w") as f:
    f.write(text)
