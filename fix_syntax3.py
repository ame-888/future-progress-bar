with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

# Fix the specific syntax errors caused by empty array elements
text = text.replace('details: [\n                    ,\n                    "Only about 2k of those are active in industrial and commercial roles. The other 17k are exclusively being used for research and testing contexts"\n                  ]', 'details: [\n                    "Only about 2k of those are active in industrial and commercial roles. The other 17k are exclusively being used for research and testing contexts"\n                  ]')

text = text.replace('details: [\n                    ,\n                    "The number is not exactly zero, but it\'s still insignificant"\n                  ]', 'details: [\n                    "The number is not exactly zero, but it\'s still insignificant"\n                  ]')

with open("src/components/progress-table-data.ts", "w") as f:
    f.write(text)
