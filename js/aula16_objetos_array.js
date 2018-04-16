/* Utilizamos o objeto Array para
	armazenar uma coleção de dados */

	var Familia = new Array ("Daniel", "Flávia", "Matheus", "Daniel");

	Familia[0] = "Pai";

	alert(Familia.length);// length me retorna a quantidade de elementos no Array
	alert(Familia.indexOf("Flávia"));// indexOf me retorna o indice de um elemento num Array
	alert(Familia.lastIndexOf("Daniel"))// lastIndexOf me retorna a ultima ocorrência de um determinado elemento

	for (var i = 0; i < Familia.length; i++){
		alert(Familia[i]);
	}

		/* funções de ordenação */

	alert(Familia.reverse());// reverse inverte a ordem dos nossos elementos Array
	alert(Familia.sort());// ordena os nossos elementos do Array em ordem alfabética

		/* funções de corte e emenda */

	alert(Familia.join("|")); // é um método utilizado para alterar o separador padrão da linguagem
	alert(Familia.concat("Pai", "Mãe", "Filho"));// Ela concatena no Array outros elementos Array

	var Frutas = new Array ("Cupuaçu", "Açai", "Morango", "Abacaxi", "Manga");

	alert(Frutas.slice(3));// a função slice retorna um subArray do Array (recortar um pedaço do Array)
	alert(Frutas.splice(2,2, "Banana", "Limão", "Maracujá"));// Serve para remover e adicionar no lugar outros elementos
	alert(Frutas);

		/* funções Fila */

	var Pessoas = new Array ("Daniel", "Josiel", "Jackson", "Henrique");

	alert(Pessoas.push("Rafael")); // adiciona elementos no final do Array
	alert(Pessoas);

	alert(Pessoas.shift());// remove o primeiro elemento do Array
	alert(Pessoas);

	alert(Pessoas.pop());// remove o ultimo elemento da fila
	alert(Pessoas);

	alert(Pessoas.unshift("Furão"));// adiciona um elemento no inicio da fila
	alert(Pessoas);

