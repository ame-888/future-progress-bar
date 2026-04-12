const fs = require('fs');

const content = fs.readFileSync('src/components/progress-table-data.ts', 'utf8');
const lines = content.split('\n');

function checkSorted(predictionsStr) {
    if (!predictionsStr) return true;
    const matches = [...predictionsStr.matchAll(/year:\s*(\d+)/g)];
    const years = matches.map(m => parseInt(m[1], 10));

    for (let i = 0; i < years.length - 1; i++) {
        if (years[i] > years[i + 1]) {
            return false;
        }
    }
    return true;
}

let allSorted = true;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('aiPredictions: [')) {
        if (!checkSorted(line)) {
            console.log(`Unsorted predictions at line ${i + 1}: ${line}`);
            allSorted = false;
        }
    }
}

if (allSorted) {
    console.log("All predictions are sorted chronologically by year.");
}
