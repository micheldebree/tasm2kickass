#!/usr/bin/env node
/* jshint esversion: 6 */
const cli = require('commander'),
    fs = require('fs'),
    tasm2kickass = require('./TasmToKickAss.js');

cli.version('0.0.0')
    .usage('[infile]')
    .parse(process.argv);

const inFile = cli.args[0];

function convertToStdout(data) {
    process.stdout.write(tasm2kickass.convert(data));
}

// no input file supplied -> read from stdin
if (inFile === undefined) {

    var data = "",
        stdin = process.openStdin();

    stdin.on('data', function(chunk) {
        data += chunk;
    });

    stdin.on('end', function() {
        convertToStdout(data);
    });

}
// read from supplied input file
else {
    fs.readFile(inFile, "utf8", function (error, data) {
        convertToStdout(data);
    });
}


