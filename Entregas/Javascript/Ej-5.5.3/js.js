var cambioTag = function () {
	var desordenado = document.getElementsByTagName('ul')[0];
	var ordenado = document.createElement('ol');
	ordenado.innerHTML = desordenado.innerHTML;
	
	desordenado.parentNode.replaceChild(ordenado,desordenado);
}