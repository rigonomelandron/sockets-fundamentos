var socket = io();
// on es para escuchar un suceso
socket.on('connect', function () { // conexion al servidor

    console.log('conectado al servidor');
});

socket.on('disconnect', function () {// si el usuario se desconecta

    console.log('Perdimos conexion con el servidor');
});

// emit es para enviar informacion al servidor

socket.emit('enviarMensaje', {
    usuario: 'Francisco',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta server: ', resp);

});
// escuchar informacion del servidor
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);

});