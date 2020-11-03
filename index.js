var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var json = require('./framework/json');
var storage = require('./framework/memory');

// global variables
storage.store("dictionary",{})
storage.store("array",{})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.emit('game','you are now connected.');
  
  socket.on('event', function(data) {
    let init = storage.retrieve("dictionary", {});
    let behavior_output = json.modify_dictionary_key(init,"test",data);
    storage.store("dictionary", behavior_output[0]);
    socket.emit('output', behavior_output[0]);
  });
            
  socket.on('event2', function(data) {
    let init = storage.retrieve("dictionary", {});
    let behavior_output = json.delete_dictionary_key(init,"test");
    storage.store("dictionary", behavior_output[0]);
    socket.emit('output', behavior_output[0]);
  });
  
  socket.on('event3', function(data) {
    let init = storage.retrieve("dictionary", {});
    let behavior_output = json.get_dictionary_key(init,"test","none");
    storage.store("dictionary", behavior_output[0]);
    socket.emit('output', behavior_output[0]);
  });
  
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
