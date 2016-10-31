var suma = function (id1, id2) {
	var element = document.getElementById(id1);
	var numeros = element.innerHTML.split("+");
	
	var resultado = document.getElementById(id2);
	var operacion = ['=', parseInt(numeros[0]) + parseInt(numeros[1])];
	resultado.innerHTML = operacion[0] + parseInt(operacion[1]);
}