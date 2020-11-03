var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var behavior = require('./framework/behaviors');
// var (handler) = require('./folder/file_name');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  // insert code here
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
