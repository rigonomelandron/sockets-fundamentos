const { io } = require('../server')



io.on('connection', (client) => {// client tiene toda la informacion de la computadora que se conectó

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario deconectado');
    });

    // escuchar el mensaje del cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
       /* if (data.usuario) {

            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Todo salio mal'
            });


        }*/

    });

});