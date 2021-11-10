process.env.NODE_ENV = "development"
var express = require('express');
var server = express();
server.get('/:name', function(request, response) {
    response.sendfile('./index.html');
});
server.listen(4242);