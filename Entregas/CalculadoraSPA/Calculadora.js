var pantalla = '';
var num1 = 00;
var operacion = 0;

var numero0 = function () {
	pulsa0();
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
	pulsa1();
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
	pulsa2();
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
	pulsa3();
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
	pulsa4();
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
	pulsa5();
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
	pulsa6();
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
	pulsa7();
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
	pulsa8();
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
	pulsa9();
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
	pulsaSumar();
	console.log(num1);
	operacion = 1;
	$('#pantalla').text('');
	pantalla = '';
};

var resta = function () {
	pulsaRestar();
	console.log(num1);
	operacion = 2;
	$('#pantalla').text('');
	pantalla = '';
};

var multiplica = function () {
	pulsaMultiplicar();
	console.log(num1);
	operacion = 3;
	$('#pantalla').text('');
	pantalla = '';
};

var divide = function () {
	pulsaDividir();
	console.log(num1);
	operacion = 4;
	$('#pantalla').text('');
	pantalla = '';
};

var signo = function () {
	pulsaSigno();
	console.log(num1);
	operacion = 5;
	$('#pantalla').text('');
	pantalla = '';
};

var borra = function () {
	pulsaBorrar();
	num1 = 00;
	num2 = 00;
	operacion = 0;
	pantalla = '';
	$('#pantalla').text('');
	console.log(num1);
	$('#pantalla').text('');
};

var igual = function () {
	pulsaIgual();
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


$(document).keydown(function(tecla){
    if (tecla.keyCode === 46 || tecla.keyCode === 96) { 
        numero0();
    }
    else if (tecla.keyCode === 49 || tecla.keyCode === 97) { 
        numero1();
    }
    else if (tecla.keyCode === 50 || tecla.keyCode === 98) { 
        numero2();
    }
    else if (tecla.keyCode === 51 || tecla.keyCode === 99) { 
        numero3();
    }
    else if (tecla.keyCode === 52 || tecla.keyCode === 100) { 
        numero4();
    }
    else if (tecla.keyCode === 53 || tecla.keyCode === 101) { 
        numero5();
    }
    else if (tecla.keyCode === 54 || tecla.keyCode === 102) { 
        numero6();
    }
    else if (tecla.keyCode === 55 || tecla.keyCode === 103) { 
        numero7();
    }
    else if (tecla.keyCode === 56 || tecla.keyCode === 104) { 
        numero8();
    }
    else if (tecla.keyCode === 57 || tecla.keyCode === 105) { 
        numero9();
    }
    else if (tecla.keyCode === 107) { 
        suma();
    }
    else if (tecla.keyCode === 109) { 
        resta();
    }
    else if (tecla.keyCode === 106) { 
        multiplica();
    }
    else if (tecla.keyCode === 111) { 
        divide();
    }
    else if (tecla.keyCode === 110) { 
        //Es el punto, pero hasta que no funcione, lo asignamos a esta funcion
        signo();
    }
    else if (tecla.keyCode === 8 || tecla.keyCode === 127) { 
        borra();
    }
    else if (tecla.keyCode === 10) { 
        igual();
    }
});

var pulsa0 = function () {
		$("#numero0").animate({width:"180px",height:"65px"},25);
		$("#numero0").animate({width:"190",height:"75px"},25);
}
var pulsa1 = function () {
		$("#numero1").animate({width:"65px",height:"65px"},25);
		$("#numero1").animate({width:"75px",height:"75px"},25);
}
var pulsa2 = function () {
		$("#numero2").animate({width:"65px",height:"65px"},25);
		$("#numero2").animate({width:"75px",height:"75px"},25);
}
var pulsa3 = function () {
		$("#numero3").animate({width:"65px",height:"65px"},25);
		$("#numero3").animate({width:"75px",height:"75px"},25);
}
var pulsa4 = function () {
		$("#numero4").animate({width:"65px",height:"65px"},25);
		$("#numero4").animate({width:"75px",height:"75px"},25);
}
var pulsa5 = function () {
		$("#numero5").animate({width:"65px",height:"65px"},25);
		$("#numero5").animate({width:"75px",height:"75px"},25);
}
var pulsa6 = function () {
		$("#numero6").animate({width:"65px",height:"65px"},25);
		$("#numero6").animate({width:"75px",height:"75px"},25);
}
var pulsa7 = function () {
		$("#numero7").animate({width:"65px",height:"65px"},25);
		$("#numero7").animate({width:"75px",height:"75px"},25);
}
var pulsa8 = function () {
		$("#numero8").animate({width:"65px",height:"65px"},25);
		$("#numero8").animate({width:"75px",height:"75px"},25);
}
var pulsa9 = function () {
		$("#numero9").animate({width:"65px",height:"65px"},25);
		$("#numero9").animate({width:"75px",height:"75px"},25);
}
var pulsaSumar = function () {
		$("#sumar").animate({width:"65px",height:"65px"},25);
		$("#sumar").animate({width:"75px",height:"75px"},25);
}
var pulsaRestar = function () {
		$("#restar").animate({width:"65px",height:"65px"},25);
		$("#restar").animate({width:"75px",height:"75px"},25);
}
var pulsaMultiplicar = function () {
		$("#multiplicar").animate({width:"65px",height:"65px"},25);
		$("#multiplicar").animate({width:"75px",height:"75px"},25);
}
var pulsaDividir = function () {
		$("#dividir").animate({width:"65px",height:"65px"},25);
		$("#dividir").animate({width:"75px",height:"75px"},25);
}
var pulsaSigno = function () {
		$("#signo").animate({width:"65px",height:"65px"},25);
		$("#signo").animate({width:"75px",height:"75px"},25);
}
var pulsaBorrar = function () {
		$("#borrar").animate({width:"65px",height:"65px"},25);
		$("#borrar").animate({width:"75px",height:"75px"},25);
}
var pulsaIgual = function () {
		$("#igual").animate({width:"180px",height:"65px"},25);
		$("#igual").animate({width:"190px",height:"75px"},25);
}


$(document).ready( function() {
	$('#pantalla').text('');
});