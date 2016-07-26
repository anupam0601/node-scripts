// Spawning a Child Process

"use strict";

const
fs = require('fs'),
spawn = require('child_process').spawn,
filename = process.argv[2];

if (!filename) {
	throw Error("A file to watch must be specified!");
}

// Spawning ls -lh filename to get details of the file like permissions and all
fs.watch(filename, function() {
	let ls = spawn('ls', ['-lh', filename]);
	ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");