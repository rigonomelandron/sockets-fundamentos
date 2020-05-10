const express = require('express');
const socketIO = require('socket.io');//npm i socket.io --save este hace falta instalarlo
const http = require('http');// este no hace falta instalarlo porque es nativo de npm
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);

require('./sockets/socket');