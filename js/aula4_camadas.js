function mudarImg (){
	var nome = prompt ("Qual seu nome?"); //Recebendo uma informação via prompt	

	alert("Seja muito bem vindo " + nome + "!");

	document.getElementById("logo").src = "img/click_on.png";
}