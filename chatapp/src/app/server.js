const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../chat-app/dist/chat-app/')));

// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../chat-app/dist/chat-app/index.html'))
});

// Sockets
console.log("Server socket initialised");
io.on('connection', (socket)=>{
    console.log('user connected');

    socket.on('add-message', (message)=>{
       io.emit('message', {type:'message', text: message});
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


// HTTP listener
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
module.exports = app;
