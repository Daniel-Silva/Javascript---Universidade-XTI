/* Utilizamos o objeto Array para
	armazenar uma coleção de dados */

var Familia = new Array ("Daniel", "Flavia", "Matheus");

alert(Familia.join(" ")); 

	/* Array Multidimensional */

var Pessoas = new Array ();

Pessoas[0] = new Array ("Pai", "Masculino");
Pessoas[1] = new Array ("Mãe", "Feminina");
Pessoas[2] = new Array ("Filho", "Masculino");

alert(Pessoas[0].join(" "));

	/* Array Multidimensinal de forma literária */

var Familia = [

	["Daniel", "Pai", "Masculino"],
	["Flavia", "Mãe", "Feminina"],
	["Matheus", "Filho", "Masculino"],
]

alert(Familia[0].join(" "));
alert(Familia[1].join(" "));
alert(Familia[2].join(" "));

	/* Array Associativa */

var Pessoa = {
	nome: "Daniel",
	idade: "29",
	cidade: "Suzano",
	estado: "São Paulo"
}

alert(Pessoa.nome);

	/* Funções avançadas Array */

var Frutas = [
	"Maracujá",
	"Manga",
	"Açaí",
	"Cupuaçú",
	"Morango",
	"Abacaxí"
]

alert(Frutas.join("  ")); 

function todos (elem, ind, obj){
	return (typeof elem == "string"); // Verifica se todos os elementos são iguais
}

alert(Frutas.every(todos));

function haNumber (elem, ind, obj){
	return (typeof elem == "number"); // Verifica se pelo menus um dos elementos é o verificado
}

alert(Frutas.some(haNumber));

function filtrar (elem, ind, obj){
	return (elem.indexOf("xí") > 0); // Filtra o Array de acordo com o solicitado
}

alert(Frutas.filter(filtrar));

function alterar (elem, ind, obj){
	return (elem = elem.toUpperCase()); // Altera todos os elementos do Array
}

alert(Frutas.map(alterar).join("  "));