$(document).ready(function(){

	$(".c24").click(function get_titulos1(){

		// Se obtiene el contenido y el tamaño
		var titulo1=$(".c24").text();
		var size=titulo1.length;
		var array = [];

		recorrer(titulo1,size);

		function recorrer(titulo,size){

			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
			var pos1=0,pos2=0;
			var cont=0;
			var frase,ultimaFrase;

			for(var i=0;i<titulo.length;i++){

				for(var j=0; j<letras.length; j++){			

					if(letras[j]==titulo.charAt(i)){
						
						if(cont>0){

							pos2=pos1;
							pos1=i;
							frase = titulo.substring(pos2, pos1);
							array.push(frase);
							
						}				
						
						cont++;

					}

				}
				
			}

			ultimaFrase = titulo.substring(pos2, size);
			array.push(ultimaFrase);
			mostrarArray();

		}

		function mostrarArray(){

			for (i=0;i<array.length;i++){ 

				alert("Titulo1: "+array[i]);
				
			}

		}

	});

	$(".c37").click(function get_titulos3(){

		// Se obtiene el contenido y el tamaño
		titulo3=$(".c37").text();
		var size=titulo3.length;
		var array = [];

		recorrer(titulo3,size);

		function recorrer(titulo,size){

			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
			var pos1=0,pos2=0;
			var cont=0;
			var frase,ultimaFrase;

			for(var i=0;i<titulo.length;i++){

				for(var j=0; j<letras.length; j++){			

					if(letras[j]==titulo.charAt(i)){
						
						if(cont>0){

							pos2=pos1;
							pos1=i;
							frase = titulo.substring(pos2, pos1);
							array.push(frase);
							
						}				
						
						cont++;

					}

				}
				
			}

			ultimaFrase = titulo.substring(pos2, size);
			array.push(ultimaFrase);
			mostrarArray();

		}

		function mostrarArray(){

			for (i=0;i<array.length;i++){ 

				alert("Titulo3: "+array[i]);
				
			}

		}
		
	});

});