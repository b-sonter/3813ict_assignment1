const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../dist/chatapp/')));


require('./routes.js')(app, path);
require('./socket.js')(app, io);
require('./listen.js')(http);
require('./routes/auth.js')(app,fs);
require('./routes/register.js')(app,fs);
