#!/bin/bash

if ! command -v jsdoc &> /dev/null
then
    echo "JSDoc is not installed."
    exit 1
fi

jsdoc -c jsdoc.json

echo "Documentation generated in the ./docs directory."