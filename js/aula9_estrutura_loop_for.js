/* for (var i = 0; i < 3; i++){...}
		1 - Inicialização
		2 - Teste
		3 - Ação
		4 - Atualização */

	var valor= window.prompt("Digite um valor")

	for(i=1;i<=10;i++){
		document.write(valor+"<font color='red'> x </font>"+i+"<font color='red'> = </font>"+(valor*i)+"<br>");
	}
