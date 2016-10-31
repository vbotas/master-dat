$(document).ready(function() {
	$('.enlace').css('background-color', '#FF4000');
	$('.enlace').css('color', 'white');
	$('.enlace').hover(encima,fuera);
	
	function encima() {
		$(this).css('color','green');
	}
	
	function fuera () {
		$(this).css('color','white');
	}
});