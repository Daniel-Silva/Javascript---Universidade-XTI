function mudarImg (){

	var nome = prompt ("Qual seu nome?"); //Recebendo uma informação via prompt	
	alert("Seja muito bem vindo " + nome + "!");


	var idade = 12;
	var x = (12 >= 18) ? "Eba! Você é maior de idade." : "Ops! Você ainda não é maior de idade.";
	alert(x);
	
	
	Pessoa = {
		nome : "Daniel Silva"
	}

	alert("nome" in Pessoa); // in verifica se a característica nome existe em Pessoa
	alert("email" in Pessoa); // in veficia se a característica email existe em Pessoa

	var idade = new Number(31);
	alert(idade instanceof Number);

	alert (this.document.title); //Neste exemplo this representa o window que estou dentro

	alert (typeof("Daniel"));

	document.getElementById("logo").src = "img/click_on.png";
}