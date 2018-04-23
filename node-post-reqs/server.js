//Fill in vars here
var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;

  if (request.method === 'POST') {
    if(path ==='/hifive'){
      fs.readFile('/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-hiring-assessments/node-post-reqs/assets/hifive.jpg', function(err, data){
        if(err) {
          console.log(err);
        } else {
          response.end(data);
        }
      })
    }
    if(path ==='/lowfive'){
      fs.readFile('/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-hiring-assessments/node-post-reqs/assets/lowfive.jpg', function(err, data){
        if(err) {
          console.log(err);
        } else {
          response.end(data);
        }
      })
    }
  } else if (request.method === 'GET') {
    if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/index.html', function(err, data){
        if(err) console.log(err);
        response.end(data);
      });
    }
  } else {
    response.end(404);
  }

}).listen(8080, '127.0.0.1');

console.log('Listening...');
