var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile("home.html",function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);
console.log("Server started on localhost:8000");

http.createServer(function(req, res){
    fs.readFile("createEvent.html",function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8001);

http.createServer(function(req, res){
    fs.readFile("createUser.html",function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8002);
