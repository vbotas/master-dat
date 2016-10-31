var funcion = function () {
	texto = document.getElementById('campo1');
	p = document.getElementById('escritor');
	texto.addEventListener('input', texto_escrito);
}

texto_escrito = function (e) {
	p.innerHTML = texto.value;
}