const fs = require('fs');

// process.argv is used to pass command line argument
filename = process.argv[2];

if (!filename){
	throw Error("There is no file to watch. please provide a valid file...");
}


fs.watch(filename, function(){
	console.log("There is change in " + filename);

});

console.log("Watching " + filename + "For changes");

