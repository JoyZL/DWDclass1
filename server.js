//create a variable, node has a commend line for var - "requre"
var http = require('http');

//create a function to save a value for creating server, function(request, respond)
var server = http.createServer(function(req,res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end ('<h1>Hello World</h1>');
});

server.listen(3000, 'localhost');