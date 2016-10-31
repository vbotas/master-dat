var suma = function (id1, id2) {
	var element = document.getElementById(id1);
	var numeros = element.innerHTML.split("+");
	
	var resultado = document.getElementById(id2);
	var operacion = ['=', parseInt(numeros[0]) + parseInt(numeros[1])];
	resultado.innerHTML = operacion[0] + parseInt(operacion[1]);
	
}

var numerosAleatorios = function (id1) {
	var element = document.getElementById(id1);
	var numero1 = Math.floor((Math.random() * 100) + 1);
	var numero2 = Math.floor((Math.random() * 100) + 1);
	element.innerHTML = numero1 + '+' + numero2;
	vaciaResultado();
}

function vaciaResultado () {
	var vaciar = document.getElementById('res');
	vaciar.innerHTML= '';
}