var pantalla = '';
var num1 = 00;
var operacion = 0;

var numero0 = function () {
	var contenido0 = $('#numero0').text();
	console.log(contenido0);
	pantalla = pantalla + '0';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero1 = function () {
	var contenido1 = $('#numero1').text();
	console.log(contenido1);
	pantalla = pantalla + '1';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero2 = function () {
	var contenido2 = $('#numero2').text();
	console.log(contenido2);
	pantalla = pantalla + '2';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero3 = function () {
	var contenido3 = $('#numero3').text();
	console.log(contenido3);
	pantalla = pantalla + '3';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero4 = function () {
	var contenido4 = $('#numero4').text();
	console.log(contenido4);
	pantalla = pantalla + '4';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero5 = function () {
	var contenido5 = $('#numero5').text();
	console.log(contenido5);
	pantalla = pantalla + '5';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero6 = function () {
	var contenido6 = $('#numero6').text();
	console.log(contenido6);
	pantalla = pantalla + '6';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero7 = function () {
	var contenido7 = $('#numero7').text();
	console.log(contenido7);
	pantalla = pantalla + '7';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero8 = function () {
	var contenido8 = $('#numero8').text();
	console.log(contenido8);
	pantalla = pantalla + '8';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var numero9 = function () {
	var contenido9 = $('#numero9').text();
	console.log(contenido9);
	pantalla = pantalla + '9';
	$('#pantalla').text(pantalla);
	if (operacion===0) {
		num1=parseInt(pantalla);
		console.log('El num1 es ' + num1);
	}
	else {
		num2 = parseInt(pantalla);
		console.log('El num2 es ' + num2);
	}
};

var suma = function () {
	console.log(num1);
	operacion = 1;
	$('#pantalla').text('');
	pantalla = '';
};

var resta = function () {
	console.log(num1);
	operacion = 2;
	$('#pantalla').text('');
	pantalla = '';
};

var multiplica = function () {
	console.log(num1);
	operacion = 3;
	$('#pantalla').text('');
	pantalla = '';
};

var divide = function () {
	console.log(num1);
	operacion = 4;
	$('#pantalla').text('');
	pantalla = '';
};

var signo = function () {
	console.log(num1);
	operacion = 5;
	$('#pantalla').text('');
	pantalla = '';
};

var borra = function () {
	num1 = 00;
	num2 = 00;
	operacion = 0;
	pantalla = '';
	$('#pantalla').text('');
	console.log(num1);
	$('#pantalla').text('');
};

var igual = function () {
	switch (operacion) {
		case 1:
			result = parseFloat(num1) + parseFloat(num2);
			$('#pantalla').text(result);
			break;
		case 2:
			result = parseFloat(num1) - parseFloat(num2);
			$('#pantalla').text(result);
			break;
		case 3:
			result = parseFloat(num1) * parseFloat(num2);
			$('#pantalla').text(result);
			break;
		case 4:
			result = parseFloat(num1) / parseFloat(num2);
			$('#pantalla').text(result);
			break;
		case 5:
			result = -num1;
			$('#pantalla').text(result);
			break;
	}
};


$(document).ready( function() {
	$('#pantalla').text('');
});