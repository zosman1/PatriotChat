const app = require('http').createServer(handler)
const io = require('socket.io').listen(app)
const fs = require('fs')

app.listen(3030,() => console.log('listening on *:3030'));

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

io.sockets.on('connection', (socket) => {

  socket.on('add-user', (data) => addUser(data, socket));
  socket.on('private-message', (message) => privateMessage(message, socket));
  socket.on('disconnect', (data) => disconnect(data, socket));

});

function addUser(data, socket){
  clients[data.netid] = {
    "socket": socket.id
  };
}

function privateMessage(message, socket){
  console.log("Sending: " + message.text);
  console.warn(clients);
  console.warn(message.destinations);
  message.destinations.forEach((client) => {
    //for each user id do something... 
    console.warn(client);
    
  });
  if (clients[message.destination]){
    io.sockets.connected[clients[message.destination].socket].emit("add-message", message);
  } else {
    // console.log("User does not exist: " + user.netid);
  }
}

//Removing the socket on disconnect
function disconnect(data, socket){
  for(var name in clients) {
    if(clients[name].socket === socket.id) {
      delete clients[name];
      break;
    }
  }	
}