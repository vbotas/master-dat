var fotosAleatorias = function() {
	var foto1="http://files.proyectoclubes.com/oviedo/201610/662x372c_3020351916.10.30_ucam_oviedo_0505.jpg";
	var foto2="http://files.proyectoclubes.com/oviedo/201610/662x372c_3020364116.10.30_ucam_oviedo_0040.jpg";
	var foto3="http://files.proyectoclubes.com/oviedo/201610/662x372c_3020364016.10.30_ucam_oviedo_0087.jpg";
	var foto4="http://files.proyectoclubes.com/oviedo/201610/662x372c_3020363916.10.30_ucam_oviedo_0092.jpg";
	var foto5="http://files.proyectoclubes.com/oviedo/201610/662x372c_3020363816.10.30_ucam_oviedo_0136.jpg";
	
	var arrayFotos = [foto1, foto2, foto3, foto4, foto5];
	var verfoto = Math.floor(Math.random() * 5);
	var elemento = document.getElementById('fotos');
	
	/*elemento.innerHTML = arrayFotos[verfoto];*/
	elemento.innerHTML = '<img src="' + arrayFotos[verfoto] + '">';
}