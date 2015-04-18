var http = require('http');

var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to my Node Node.js research lab\n');
};

var server = http.createServer(handleRequest);

server.listen(3001, 'localhost');