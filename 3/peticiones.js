function inicio() {
	console.log("Has entrado en la página de inicio");
	return "Inicia";	
}

function pagina1() {
	console.log("Has entrado en la página número 1");
	return "Página 1";	
}

function pagina2() {
	console.log("Has entrado en la página número 2");
	return "Página 2";	
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
