#!/bin/bash

TEST_FILES="./tests/testFiles"
OUTPUT_FILES="./tests/testOutput"
ERROR_FILES="./tests/errorOutput"
EXPECTED_FILES="./tests/expectedFiles"

GREEN='\033[0;32m'
RED='\033[0;31m'
CLEAR='\033[0m'

for script in "$TEST_FILES"/*.mjs; do
    script_name=$(basename "$script" .mjs)

    node "$script" > "$OUTPUT_FILES/$script_name.txt" 2> "$ERROR_FILES/$script_name.txt"

    # Compare with expected output if available
    expected_file="$EXPECTED_FILES/$script_name.txt"
    if diff "$OUTPUT_FILES/$script_name.txt" "$expected_file" > "$ERROR_FILES/${script_name}DiffErr.txt"; then
        printf "$script_name: ${GREEN}OK! ${CLEAR}Output matches expected!\n"
        rm -f "$OUTPUT_FILES/$script_name.txt"
        rm -f "$ERROR_FILES/$script_name.txt"
        rm -f "$ERROR_FILES/${script_name}DiffErr.txt"
    else
        printf "$script_name: ${RED}FAILED! ${CLEAR}Output differs from expected!\n"
    fi
done