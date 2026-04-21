with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

# Fix types by doing string replacements on common regex leftovers
text = text.replace('details: ["Optimized rare-earth barium copper oxide (REBCO / (RE)BCO) thin films, specifically in (Y,Gd)BCO films incorporating self-assembled BaHfO₃ nanorod artificial pinning centers (APCs) (self-field, 4.2 K). OBS: Scientifically, the claim is currently highly disputed and largely considered to be the result of a calculation error.", ]', 'details: ["Optimized rare-earth barium copper oxide (REBCO / (RE)BCO) thin films, specifically in (Y,Gd)BCO films incorporating self-assembled BaHfO₃ nanorod artificial pinning centers (APCs) (self-field, 4.2 K). OBS: Scientifically, the claim is currently highly disputed and largely considered to be the result of a calculation error."]')

text = text.replace('history: [{ value: 95, details: ["NASA’s Space Launch System (SLS) Block 1 (2022)", ] }]', 'history: [{ value: 95, details: ["NASA’s Space Launch System (SLS) Block 1 (2022)"] }]')

text = text.replace('details: ["Monaco (2026 - UN Projection)", ]', 'details: ["Monaco (2026 - UN Projection)"]')

text = text.replace('details: ["May 25, 2023 and January 26, 2024", ]', 'details: ["May 25, 2023 and January 26, 2024"]')
text = text.replace('details: ["This occurred again and again during each of the six successful Apollo lunar landing missions (Apollo 11, 12, 14, 15, 16, and 17) between 1969 and 1972.", ]', 'details: ["This occurred again and again during each of the six successful Apollo lunar landing missions (Apollo 11, 12, 14, 15, 16, and 17) between 1969 and 1972."]')

text = text.replace('details: ["Little Big Coil Number 9 (LBC9)", ]', 'details: ["Little Big Coil Number 9 (LBC9)"]')
text = text.replace('details: ["This record comes from Fujikura Ltd. (Japan), which has demonstrated uniform critical current (Ic) and n-value across >1,400 m lengths of 4 mm-wide artificial-pinning (APC/FESC-type) REBCO tape in recent production-scale runs (measured via reel-to-reel methods every ~4.7 m).", ]', 'details: ["This record comes from Fujikura Ltd. (Japan), which has demonstrated uniform critical current (Ic) and n-value across >1,400 m lengths of 4 mm-wide artificial-pinning (APC/FESC-type) REBCO tape in recent production-scale runs (measured via reel-to-reel methods every ~4.7 m)."]')

text = text.replace('history: [{ value: 8000000, details: ["An estimate, since official numbers are hard to find", ] }]', 'history: [{ value: 8000000, details: ["An estimate, since official numbers are hard to find"] }]')

text = text.replace('history: [{ value: 168, details: ["In February 2019, Jak Wilmot (co-founder of Disrupt VR) set the widely recognized record by spending 168 continuous hours (exactly 7 days) living, sleeping, and working inside a VR headset", ] }]', 'history: [{ value: 168, details: ["In February 2019, Jak Wilmot (co-founder of Disrupt VR) set the widely recognized record by spending 168 continuous hours (exactly 7 days) living, sleeping, and working inside a VR headset"] }]')

text = text.replace('history: [{ value: 0, details: ["Only touch and vision have been partially achieved thus far. Taste, smell, hearing, proprioception and balance have not.", ] }]', 'history: [{ value: 0, details: ["Only touch and vision have been partially achieved thus far. Taste, smell, hearing, proprioception and balance have not."] }]')

text = text.replace('history: [{ value: 100000, details: ["This is the highest number officially claimed as of 2026 by RP1 (a metaverse/spatial internet platform with full VR support via WebXR, 6DOF tracking, spatial audio, and full-fidelity avatars).", ] }]', 'history: [{ value: 100000, details: ["This is the highest number officially claimed as of 2026 by RP1 (a metaverse/spatial internet platform with full VR support via WebXR, 6DOF tracking, spatial audio, and full-fidelity avatars)."] }]')

with open("src/components/progress-table-data.ts", "w") as f:
    f.write(text)
