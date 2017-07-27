var http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(request, response) {
  // response.setHeader("Access-Control-Allow-Origin", '*');


  if (request.url.slice(0, 6) === '/data/') {
    setTimeout(() => {
      file.serve(request, response);
    }, 100);
  } else {
    request.url = '/public' + request.url;
    file.serve(request, response);
  }
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');
