const express = require('../express')
const http = express.http;
const io = require('socket.io')(http);
const listener = require('../../src/listener')

io.on('connection', function(socket) {
   listener(socket)
});
 