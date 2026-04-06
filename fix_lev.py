with open('src/components/lev-progress-graph.tsx', 'r') as f:
    content = f.read()

content = content.replace('import React, { useState } from "react";', 'import React, { useState } from "react";\nimport { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";')

with open('src/components/lev-progress-graph.tsx', 'w') as f:
    f.write(content)
