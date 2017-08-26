const app = require('http').createServer(handler)
const io = require('socket.io').listen(app)
const fs = require('fs')

app.listen(3030);

var clients = {};

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {

  socket.on('add-user', function(data){
    clients[data.netid] = {
      "socket": socket.id
    };
  });

  socket.on('private-message', function(message, user){
    console.log("Sending: " + message.text);
    console.warn(clients);
    if (clients[message.destination]){
      io.sockets.connected[clients[message.destination].socket].emit("add-message", message);
    } else {
      console.log("User does not exist: " + user.netid); 
    }
  });

  //Removing the socket on disconnect
  socket.on('disconnect', function() {
  	for(var name in clients) {
  		if(clients[name].socket === socket.id) {
  			delete clients[name];
  			break;
  		}
  	}	
  })

});

