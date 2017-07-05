#!/usr/bin/env node
/* jshint esversion: 6 */
const cli = require('commander'),
    fs = require('fs'),
    tasm2kickass = require('./TasmToKickAss.js');

cli.version('0.0.0')
    .usage('<infile> <outfile>')
    .parse(process.argv);

const inFile = cli.args[0],
    outFile = cli.args[1];

if (inFile === undefined) {
    console.error('Input file missing.');
    cli.help();
}

if (outFile === undefined) {
    console.error('Output file missing.');
    cli.help();
}

fs.readFile(inFile, "utf8", function (error, data) {
    console.log(ConvertTasmToKickass(data));
});

