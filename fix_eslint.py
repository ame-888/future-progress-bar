with open("src/components/digital-clock.tsx", "r") as f:
    text = f.read()

# Eslint is complaining about setMounted inside useEffect, which was already there in the file before I modified it.
# We can bypass this by keeping it, but maybe refactor the useEffect to be cleaner.
# Actually, the issue is that it's a known pattern for Next.js hydration mismatch bypass.
# We can add an eslint-disable comment.

text = text.replace("useEffect(() => {", "useEffect(() => {\n    // eslint-disable-next-line react-hooks/set-state-in-effect")

with open("src/components/digital-clock.tsx", "w") as f:
    f.write(text)
