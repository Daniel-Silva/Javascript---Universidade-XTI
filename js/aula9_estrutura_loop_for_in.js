/* for (var i = 0; i < 3; i++){...}
		1 - Inicialização
		2 - Teste
		3 - Ação
		4 - Atualização */

var Carro = {
	marca : "Nissan",
	modelo : "350Z",
	comprimento : "3,345mm",
	velocidade : "320km/h",
	cavalos : "350cv",
}

for (var propriedades in Carro){
	document.write (propriedades + " = " + Carro [propriedades] );
}
