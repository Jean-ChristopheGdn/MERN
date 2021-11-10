// app.js

process.env.NODE_ENV = "development"
var express = require('express');
var server = express();
server.listen(4242, function() {
    console.log("Node server running on port 4242!", process.env.NODE_ENV)
});