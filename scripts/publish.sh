#!/bin/bash
cd ../packages || exit
dirs="*/"
echo $dirs

for dir in ${dirs}; do
    cd "${dir}" || exit
    npm publish
    cd ../
done
