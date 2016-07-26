// Capturing Data from an EventEmitter

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
	let
	ls = spawn('ls', ['-lh', filename]),
	output = '';

	// Listens for data being received from child process stdout -- child process streams are the event emitter
	ls.stdout.on('data', function(chunk){
		output += chunk.toString();
	});

	// Event for closing the child process after all data has been flushed from the stream and printed
	ls.on('close', function(){
		let parts = output.split(/\s+/);
		console.dir([parts[0], parts[4], parts[8]]);
	});
});

console.log("Now watching " + filename + " for changes...");