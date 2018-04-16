window.onload = function(){
	/*
	window.alert("Olá Mundo!");
	confirm("Deseja continuar?");
	prompt("Qual seu nome?");
	open("tabela_moveis.html", "Teste", "width=690,heght=590,toobar=no,location=no");
	*/
	var plugins = navigator.plugins;
	var p = "";
	for (var i = 0; i < plugins.length; i++){
		p += plugins[i].name + "\n";
	}
	alert(p);
}


