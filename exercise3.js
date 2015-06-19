$(document).ready(function(){

		$(".c38").click(function get_titulos1(){

		// Se obtiene el contenido y el tamaño
		var titulo1=$(".c38").text();
		var size=titulo1.length;

		var array = [];

		recorrer(titulo1,size);

		function recorrer(titulo,size){

			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
			var pos1=0,pos2=0;
			var frase,ultimaFrase;

			for(var i=0;i<titulo.length;i++){

				for(var j=0; j<letras.length; j++){			

					if(letras[j]==titulo.charAt(i)){						
						
						pos2=pos1;
						pos1=i;
						frase = titulo.substring(pos2, pos1);

						//Si la frase es nula, no añadira al array
						if(frase !== ''){

							array.push(frase);

						}			
						
					}

				}
				
			}

			ultimaFrase = titulo.substring(pos1, size);
			array.push(ultimaFrase);
			mostrarArray();
		}

		function mostrarArray(){

			for (i=0;i<array.length;i++){ 

				alert("Titulo1: "+array[i]);
				
			}

		}

	});

	$(".c22").click(function get_titulos2(){

		// Se obtiene el contenido y el tamaño
		var titulo2=$(".c22").text();
		var size=titulo2.length;

		var array = [];

		recorrer(titulo2,size);

		function recorrer(titulo,size){

			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
			var pos1=0,pos2=0;
			var frase,ultimaFrase;

			for(var i=0;i<titulo.length;i++){

				for(var j=0; j<letras.length; j++){			

					if(letras[j]==titulo.charAt(i)){						
						
						pos2=pos1;
						pos1=i;
						frase = titulo.substring(pos2, pos1);

						//Si la frase es nula, no añadira al array
						if(frase !== ''){

							array.push(frase);

						}			
						
					}

				}
				
			}

			ultimaFrase = titulo.substring(pos1, size);
			array.push(ultimaFrase);
			mostrarArray();
		}

		function mostrarArray(){

			for (i=0;i<array.length;i++){ 

				alert("Titulo2: "+array[i]);
				
			}

		}

	});


	$(".c1").click(function get_titulos3(){

		// Se obtiene el contenido y el tamaño
		var titulo3=$(".c1").text();
		var size=titulo3.length;

		//alert(titulo3);
		var array = [];

		recorrer(titulo3,size);

		function recorrer(titulo,size){

			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
			var pos1=0,pos2=0;
			var frase,ultimaFrase;

			for(var i=0;i<titulo.length;i++){

				for(var j=0; j<letras.length; j++){			

					if(letras[j]==titulo.charAt(i)){						
						
						pos2=pos1;
						pos1=i;
						frase = titulo.substring(pos2, pos1);

						//Si la frase es nula, no añadira al array
						if(frase !== ''){

							array.push(frase);

						}			
						
					}

				}
				
			}

			ultimaFrase = titulo.substring(pos1, size);
			array.push(ultimaFrase);
			mostrarArray();
		}

		function mostrarArray(){

			for (i=0;i<array.length;i++){ 

				if(i%2==0){ // Si la posicion i es par

					alert("Titulo3: "+array[i]);
					
				}
				
			}

		}
		

	});

});