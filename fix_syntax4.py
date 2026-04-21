with open("src/components/progress-table-data.ts", "r") as f:
    text = f.read()

# I still need to do Step 2 of the plan which is to replace Payload Mass to LEO with Net Useful Payload Mass to LEO.
# It seems this plan step says Refactor Data Model so I can just do Step 2 now or next, but it modifies the same file.
# The user wants:
# - change the name to "Net Useful Payload Mass to LEO (Single Launch)"
# - change the current value to 77 metric tonnes
# - replace the history details with "This record was achieved by the Skylab space station, launched by NASA on May 14, 1973, aboard a modified two-stage Saturn V rocket"
# - add a last updated on april 21st, 2026
