const fs = require('fs');

fs.watch('/target.txt',function(){
	console.log("File 'target.txt' has just changed");
});

console.log("watching target.txt for changes");

