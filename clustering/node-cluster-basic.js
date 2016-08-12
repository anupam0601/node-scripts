// Clustering basic example with cluster module

var cluster = require('cluster');  
var http    = require('http');  
var os      = require('os');

var numCPUs = os.cpus().length;

if (cluster.isMaster) {  
  // Master:
  // Let's fork as many workers as you have CPU cores

  for (var i = 0; i < numCPUs; ++i) {
  	console.log("forking workers")
    cluster.fork();
  }
} else {
  // Worker:
  // Let's spawn a HTTP server
  // (Workers can share any TCP connection.
  //  In this case its a HTTP server)

  http.createServer(function(req, res) {
    res.writeHead(200);
    // Sends the pid of the worker that is serving the request
    res.end('process ' + process.pid + ' says hello!'); 
  }).listen(8080,function(){
    console.log('Process ' + process.pid + ' is listening to all incoming requests')
  });
}