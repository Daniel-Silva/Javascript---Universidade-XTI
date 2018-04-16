/* Avalindo se há um padrão para pesquisa */

var regex = new RegExp("Daniel");

var string = "Daniel";

alert(regex.test(string));

// Criando expressão regular na sintax literal

var regex = /daniel/i; // O modificador i ignora os caracteres maiusculos e minusculos

var string = "Daniel";

alert(regex.test(string));

// Função exec

alert(/doce/i.exec("Qual é o Doce mais doce que o doce?")); // Me retorna a primeira referência dentro de uma expressão

// Função match

var srt = "Qual é o Doce mais doce que o doce?";

alert(srt.match(/doce/ig).join("  ")); // Me retorna todas as referências pesquisadas dentro de uma expressão

/* METACARACTERES */

