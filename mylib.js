
module.exports = function(fs) {
  return{
    viewPage:function(request, response) {
      console.log('Request', request.url);
      if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
          if(contents) {
              response.writeHead(200);
              response.write(contents); 
              response.end(); 
          } else {
            response.writeHead(404);
            response.end();
          }
        });
      } else if(request.url === '/dojo.html'){
        fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
          if(contents) {
            response.writeHead(200);
            response.write(contents); 
            response.end(); 
          } else {
            response.writeHead(404);
            response.end();
          }
        });
      } else if(request.url === '/stylesheet/style.css'){
        fs.readFile('stylesheet/style.css', function (errors, contents){
          if(contents) {
            response.writeHead(200, {'content-type':'text/css'});
            response.write(contents); 
            response.end(); 
          } else {
            response.writeHead(404);
            response.end();
          }
        });
      } else {
        response.writeHead(404);
        response.end('File not found!!!');
      }
    }
  }   
}