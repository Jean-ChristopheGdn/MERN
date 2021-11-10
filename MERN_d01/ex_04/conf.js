process.env.NODE_ENV = "development"
var express = require('express');
var server = express();

server.get('/name/:name', function(request, response) {

    let name = request.params.name;
    response.render('index.ejs', { name: name });
});
server.get('/name/*', function(req, res) {
    let name = "unknown";
    res.render('index.ejs', { name: name });
});

server.listen(4242);