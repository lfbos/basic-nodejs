var servidor = require('http');

function arrancaServidor(requiere, respuesta) {
	respuesta.writeHead(200, {"Content-Type": "text/html"});
	respuesta.write("<h1>El servidor esta funciona correctamente</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8888);
