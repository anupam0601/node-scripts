// To write to a file and reading it 

const fs = require('fs');

fs.writeFile('target.txt', 'oh yeah lets go', function(err){
	// body
	if (err){
		throw error
	}

	fs.readFile('target.txt', function(err,data){
	// toString to convert the data to string and output the content after reading
		console.log(data.toString());
	});
});