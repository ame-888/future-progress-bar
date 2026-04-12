import re

with open("src/components/progress-table-data.ts", "r") as f:
    content = f.read()

def replace_with_regex(pattern, replacement, text):
    return re.sub(pattern, replacement, text)

# 1. Countries where human driving is banned
# Find block for this measurement
start_idx = content.find('title: "Countries where human driving is banned"')
end_idx = content.find('title: "Number of Countries where Self-Driving Cars are partially allowed"')

if start_idx != -1 and end_idx != -1:
    block = content[start_idx:end_idx]
    block = block.replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2041 }, { name: "Gemini 3.1 Pro Preview", year: 2050 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2039 }, { name: "Claude 4.6 Sonnet", year: 2041 }, { name: "Gemini 3.1 Pro Preview", year: 2050 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2047 }, { name: "Gemini 3.1 Pro Preview", year: 2060 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2047 }, { name: "GPT-5.4 Thinking Mini", year: 2048 }, { name: "Gemini 3.1 Pro Preview", year: 2060 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2054 }, { name: "Gemini 3.1 Pro Preview", year: 2075 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2054 }, { name: "GPT-5.4 Thinking Mini", year: 2058 }, { name: "Gemini 3.1 Pro Preview", year: 2075 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2061 }, { name: "Gemini 3.1 Pro Preview", year: 2090 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2061 }, { name: "GPT-5.4 Thinking Mini", year: 2067 }, { name: "Gemini 3.1 Pro Preview", year: 2090 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2070 }, { name: "Gemini 3.1 Pro Preview", year: 2115 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2070 }, { name: "GPT-5.4 Thinking Mini", year: 2080 }, { name: "Gemini 3.1 Pro Preview", year: 2115 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2081 }, { name: "Gemini 3.1 Pro Preview", year: 2140 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2081 }, { name: "GPT-5.4 Thinking Mini", year: 2092 }, { name: "Gemini 3.1 Pro Preview", year: 2140 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2098 }, { name: "Gemini 3.1 Pro Preview", year: 2175 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2098 }, { name: "GPT-5.4 Thinking Mini", year: 2110 }, { name: "Gemini 3.1 Pro Preview", year: 2175 }]'
    )
    content = content[:start_idx] + block + content[end_idx:]


# 2. Number of Countries where Self-Driving Cars are partially allowed
start_idx2 = content.find('title: "Number of Countries where Self-Driving Cars are partially allowed"')
end_idx2 = content.find('title: "Quantum Volume (QV)"') # or whatever is next

if start_idx2 != -1:
    block = content[start_idx2:end_idx2] if end_idx2 != -1 else content[start_idx2:]
    block = block.replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2026 }, { name: "Gemini 3.1 Pro Preview", year: 2027 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2026 }, { name: "GPT-5.4 Thinking Mini", year: 2026 }, { name: "Gemini 3.1 Pro Preview", year: 2027 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2029 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }]',
        '[{ name: "Claude 4.6 Sonnet", year: 2029 }, { name: "GPT-5.4 Thinking Mini", year: 2029 }, { name: "Gemini 3.1 Pro Preview", year: 2031 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2035 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2032 }, { name: "Claude 4.6 Sonnet", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2035 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2036 }, { name: "Claude 4.6 Sonnet", year: 2038 }, { name: "Gemini 3.1 Pro Preview", year: 2040 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2044 }, { name: "Gemini 3.1 Pro Preview", year: 2046 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2040 }, { name: "Claude 4.6 Sonnet", year: 2044 }, { name: "Gemini 3.1 Pro Preview", year: 2046 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2051 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2044 }, { name: "Claude 4.6 Sonnet", year: 2051 }, { name: "Gemini 3.1 Pro Preview", year: 2055 }]'
    ).replace(
        '[{ name: "Claude 4.6 Sonnet", year: 2065 }, { name: "Gemini 3.1 Pro Preview", year: 2070 }]',
        '[{ name: "GPT-5.4 Thinking Mini", year: 2052 }, { name: "Claude 4.6 Sonnet", year: 2065 }, { name: "Gemini 3.1 Pro Preview", year: 2070 }]'
    )
    if end_idx2 != -1:
        content = content[:start_idx2] + block + content[end_idx2:]
    else:
        content = content[:start_idx2] + block


# 3. Two-Qubit Gate Fidelity - Physical Qubits
start_idx3 = content.find('title: "Two-Qubit Gate Fidelity - Physical Qubits"')
end_idx3 = content.find('title: "Number of Physical Qubits"')
if start_idx3 != -1:
    block = content[start_idx3:end_idx3] if end_idx3 != -1 else content[start_idx3:]
    block = block.replace(
        '[{ name: "Grok 4.20", year: 2027 }, { name: "Claude 4.6 Sonnet", year: 2028 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }]',
        '[{ name: "Grok 4.20", year: 2027 }, { name: "Claude 4.6 Sonnet", year: 2028 }, { name: "Gemini 3.1 Pro Preview", year: 2028 }, { name: "GPT-5.4 Thinking Mini", year: 2031 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2029 }, { name: "Claude 4.6 Sonnet", year: 2032 }, { name: "Gemini 3.1 Pro Preview", year: 2032 }]',
        '[{ name: "Grok 4.20", year: 2029 }, { name: "Claude 4.6 Sonnet", year: 2032 }, { name: "Gemini 3.1 Pro Preview", year: 2032 }, { name: "GPT-5.4 Thinking Mini", year: 2037 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2031 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "Gemini 3.1 Pro Preview", year: 2037 }]',
        '[{ name: "Grok 4.20", year: 2031 }, { name: "Claude 4.6 Sonnet", year: 2037 }, { name: "Gemini 3.1 Pro Preview", year: 2037 }, { name: "GPT-5.4 Thinking Mini", year: 2044 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2033 }, { name: "Claude 4.6 Sonnet", year: 2044 }, { name: "Gemini 3.1 Pro Preview", year: 2043 }]',
        '[{ name: "Grok 4.20", year: 2033 }, { name: "Gemini 3.1 Pro Preview", year: 2043 }, { name: "Claude 4.6 Sonnet", year: 2044 }, { name: "GPT-5.4 Thinking Mini", year: 2051 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2035 }, { name: "Claude 4.6 Sonnet", year: 2052 }, { name: "Gemini 3.1 Pro Preview", year: 2050 }]',
        '[{ name: "Grok 4.20", year: 2035 }, { name: "Gemini 3.1 Pro Preview", year: 2050 }, { name: "Claude 4.6 Sonnet", year: 2052 }, { name: "GPT-5.4 Thinking Mini", year: 2059 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2037 }, { name: "Claude 4.6 Sonnet", year: 2062 }, { name: "Gemini 3.1 Pro Preview", year: 2058 }]',
        '[{ name: "Grok 4.20", year: 2037 }, { name: "Gemini 3.1 Pro Preview", year: 2058 }, { name: "Claude 4.6 Sonnet", year: 2062 }, { name: "GPT-5.4 Thinking Mini", year: 2068 }]'
    ).replace(
        '[{ name: "Grok 4.20", year: 2039 }, { name: "Claude 4.6 Sonnet", year: 2075 }, { name: "Gemini 3.1 Pro Preview", year: 2067 }]',
        '[{ name: "Grok 4.20", year: 2039 }, { name: "Gemini 3.1 Pro Preview", year: 2067 }, { name: "Claude 4.6 Sonnet", year: 2075 }, { name: "GPT-5.4 Thinking Mini", year: 2078 }]'
    )
    if end_idx3 != -1:
        content = content[:start_idx3] + block + content[end_idx3:]
    else:
        content = content[:start_idx3] + block

with open("src/components/progress-table-data.ts", "w") as f:
    f.write(content)
