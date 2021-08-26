const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http');


const server = http.createServer(app);
server.listen(8080, function() {
  console.log((new Date()) + ' Server is listening on port 8080');
});

app.use(express.static(__dirname));
app.get('/', function(req, res) {
console.log('app.get slash');
const file = fs.readFileSync('index1.html', {encoding: 'utf8'});
res.send(file);
});