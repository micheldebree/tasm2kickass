#!/bin/sh
tmpview "$1" | node /tasm2kickass/index.js > "$1.asm"
