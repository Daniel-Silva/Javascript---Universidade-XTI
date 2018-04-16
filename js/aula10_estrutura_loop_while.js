/* Estrutura de Loop while */

alert("Vamos calcular sua média :D");

var soma_notas=0;
var i=1;

		while (i<=4){		
	 		nota = window.prompt("Digite a "+i+" nota");
	  		soma_notas = soma_notas + parseFloat (nota);
			i++;
		}

var media= soma_notas/4;

		document.write("Sua média foi "+media+"<br>");
		
		if(media>=6){
			document.write("Parabéns, você foi aprovado :D");
		}
		else if(media>=5){
			document.write("Opa, você ficou pra exames :|");
		}
		else {
			document.write("Lamento, você foi reprovado :(");
		}


/* Estrutura de Loop do while */

var i = 0;

do {
	... // "faça essa ação..."
}

while (teste); // "...enquanto essa condição for verdadeira"