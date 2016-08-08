'use strict'; 
const
	fs = require('fs'), net = require('net'),
	filename = process.argv[2],
	server = net.createServer(function(connection) {
		
		// reporting : telnet connection would write once it's connected
		console.log('Subscriber connected.'); // in node console
		
		connection.write("Now watching '" + filename + "' for changes...\n"); // in telnet console

		// watcher setup : TCP nodejs server watching
		let watcher = fs.watch(filename, function() { 
			connection.write("File '" + filename + "' changed: " + Date.now() + "\n");
		 });

		// cleanup 
		connection.on('close', function() { 
			console.log('Subscriber disconnected.');
			watcher.close(); 
		});
	});


	if (!filename){
		throw Error('No Target filename was specified.');
	}

	// TCP socket listening on port 5432
	server.listen(5432, function(){
		console.log('listening for subscribers');
	});