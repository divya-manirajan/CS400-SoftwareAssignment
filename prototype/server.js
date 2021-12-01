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
    fs.readFile("eventForm.html",function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8001);
console.log("Event form running on 8001");

http.createServer(function(req, res){
    fs.readFile("createUser.html" ,function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8002);
console.log("User form running on 8002");

http.createServer(function(req, res){
    fs.readFile("about.html" ,function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8003);
console.log("About form running on 8003");

