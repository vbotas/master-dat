var vaciaBody = function () {
	var p = document.getElementsByTagName('body');
	p[0].innerHTML = '';
};

var vaciaPorEtiqueta = function (etiqueta) {
	var p = document.getElementsByTagName(etiqueta);
	p[0].innerHTML = '';
};