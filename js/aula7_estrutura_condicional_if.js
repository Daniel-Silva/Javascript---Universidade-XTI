/*
Abaixo verificamos se a variável contem
um número par ou impar.
*/

var idade = 11;

if ((idade % 2) == 0){
	alert ("Este número é par!");
}
else{
	alert ("Este número é impar!");
}

/*
Abaixo verificamos as faixas etárias
de acordo com o valor da variável
*/

var idade = prompt("Qual sua idade?");

if (idade <= 11){
	alert ("Você é uma criança")
}
else if (idade > 11 && idade <= 16) {
	alert ("Você é um pré-adolescente");
}
else if (idade > 16 && idade <= 21) {
	alert ("Você é um adolescente");
}
else if (idade > 21 && idade < 60){
	alert ("Você é um adulto")
}
else {
	alert("Você está na melhor idade")
}

/*
Abaixo verificamos as notas de 
aprovação ou reprovação de um aluno
*/

var nota = prompt("Qual sua nota?");

if (nota >= 6) {
	alert("Eba! Você foi aprovado.");
}
else {
	alert("Que pena, você foi reporovado!");
	if (nota == 5) {
		alert("Opa! Você ficou de recuperação.");
	}
}