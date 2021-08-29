
var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);
server.listen(3000, function() {
  console.log((new Date()) + ' Server is listening on port 3000');
});

app.use(express.static(__dirname));
app.get('/', function(req, res) {
 console.log('app.get slash');
 var file = fs.readFileSync('index1.html', {encoding: 'utf8'});
 res.send(file);
});