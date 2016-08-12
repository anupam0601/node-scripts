// Clustering with pm2- below program will be run through pm2

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  // Sending the response and pid of the node process that is serving the req
  res.end('Hello Http ' + process.pid);
});
server.listen(8080, function(){
	console.log('Process ' + process.pid + ' is listening to all incoming requests');
});