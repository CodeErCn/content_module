var http = require('http');
var fs = require('fs');
var mylib = require('./mylib')(fs);

//creating a server
server = http.createServer(function (request, response){
  mylib.viewPage(request, response);
});
server.listen(8000);
console.log("Running in localhost at port 8000");