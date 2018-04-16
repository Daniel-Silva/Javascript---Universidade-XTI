/* Criando uma seleção de poltronas */
window.onload = function(){
	carregarIMG();
}

var Poltronas = new Array (false, true, false, true, true, true, false, true, false);

function carregarIMG(){
	var imagens = document.getElementsByTagName('img');

	for (var i = 0; i < imagens.length; i++) {
		if(Poltronas[i]){
	 		imagens[i].src = "img/img_vazias.png";
	 	}else{
	 		imagens[i].src = "img/img_selecionadas.png";
	 	}
	 }
}

function selecionarImagem(){
	var imagens = document.getElementsByTagName('img');

	for (var i = 0; i < imagens.length; i++) {
		if(Poltronas[i]){
			imagens[i].src = "img/img_disponiveis.png";

			var aceitar = confirm ("Aceita esta posição?");
			if(aceitar){
				break;
			}else{
				imagens[i].src = "img/img_vazias.png";
			}
			
			
		}
	}
}

function selecionarDouble(){
	var imagens = document.getElementsByTagName('img');

	for (var i = 0; i < imagens.length; i++) {
		if(Poltronas[i] && Poltronas[i+1]){
			imagens[i].src = "img/img_disponiveis.png";
			imagens[i+1].src = "img/img_disponiveis.png";

			var aceitar = confirm ("Aceita estas posições?");
			if(aceitar){
				break;
			}else{
				imagens[i].src = "img/img_vazias.png";
				imagens[i+1].src = "img/img_vazias.png";
			}
			
			
		}
	}
}