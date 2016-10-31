var presionaUno = function () {
	var numeroUno = document.getElementById('resultado');
	numeroUno.innerHTML = '1';
}

var presionaCero = function () {
	var numeroCero = document.getElementById('resultado');
	numeroCero.innerHTML = '0';
}

var sumaNumeros = function () {
	var numero1 = document.getElementById('resultado');
	num1 = numero1.innerHTML;
	numer1 = parseInt(num1);
	numero1.innerHTML="";
}

var igual = function() {
	var numero2 = document.getElementById('resultado');
	num2 = numero2.innerHTML;
	numer2 = parseInt(num2);
	var resultado = parseInt(numer1 + numer2);
	numero2.innerHTML = resultado;
}