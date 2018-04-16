/* Alterando um valor boolean do tipo primitivo
	para um valor Boolean do tipo objeto */

	var b = true; // valor boolean do tipo primitivo
	alert(typeof(b)); // Me retorna o tipo de dado boolean


	var b = new Boolean(true); // Convertendo o tipo de dado de boolean (primitivo) para Boolean (Objeto)
	alert(typeof(b));