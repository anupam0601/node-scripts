// To read a file completely

// Importing fs [file system] module
const fs = require('fs');

fs.readFile('target.txt', function(err,data){
	if (err){
		throw err;
	}
	
	// toString to convert the data to string and output the content after reading
	console.log(data.toString());
});