jQuery(document).ready(function() {
    // do something here
    $("#orderedlist").find("li").each(function(i) {
     $(this).append( " Enlace " + i );
   });
   
   
   $("#orderedlist2 > li").hover(encima,fuera);
   $("#orderedlist2 > li:last > ul > li").hover(encima,fuera);
   function encima () {
	   $(this).append("Añado texto");
   }
   function fuera () {
	   $(this).append("Texto distinto añadido");
   }
	
	
	
	$('dd').hover(cambio1,cambio2);
	function cambio1 () {
		$(this).css('color','green');
	}
	function cambio2 () {
		$(this).css('color','black');
	}
	
});