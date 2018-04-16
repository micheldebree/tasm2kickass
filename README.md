# Tasm2Kickass

## Prerequisites

This runs a Docker image to do the conversion. The only prerequisite is [Docker](https://www.docker.com). You don't even have to clone or download this repository.

## Usage

This takes as input the c64 binary of the original Turbo Assembler source code file. Not the exported SEQ file.

    docker run -v "$PWD":/workspace micheldebree/tasm2kickass <input file>

If no input file is specified, input is read from stdin.

### Obtain input from a Commodore 64 disk image

If you have a ```.d64```, you can extract the files stored on it with the ```c1541``` tool that comes with [Vice](http://vice-emu.sourceforge.net) like so:

    c1541 -attach <input.d64> 8 -extract

## Acknowledgements

This solution uses two steps to produce the output:

- Runs the [TMPview](http://style64.org/release/tmpview-v1.3.1-style) tool on the input to produce TMPx assmbler code.
- Runs an adaptation of the javascript found on [http://tasmtokickass.insoft.se](http://tasmtokickass.insoft.se) to convert the code to Kick Assembler code.
