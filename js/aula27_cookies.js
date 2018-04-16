onload = function(){

		var btn = document.querySelector('.btn_control');
			btn.addEventListener('click', function(){
		
				// Obter a referência para a tabela
				var formulario = document.getElementById ('form_control');
				
				// Variáveis que recebem o valor de input
				var moveis = form_control.movel.value;
			    var ambiente = form_control.comodos.value;
			    var valorR = +form_control.valor.value;
			    var obs = form_control.observacao.value;

			    // Validando o formulário
			    

			    // Onde será criado o meu elemento
			    var meuElementoTbody = document.getElementById('tbody_control');

			    for (j = 0; j < 1; j++){
			    	// Criando o elemento tr
			    	var meuTr = document.createElement('tr');

			    	for (i = 0; i < 4; i++){

			    		// Criando o elemento td
			    		var cell = document.createElement('td');

			    		if (i < 1){
			    			var cellText = document.createTextNode(moveis);
			    			cell.appendChild(cellText);
    						meuTr.appendChild(cell);
			    		}else if (i < 2) {
			    			var cellText = document.createTextNode(ambiente);
			    			cell.appendChild(cellText);
    						meuTr.appendChild(cell);
			    		}else if (i < 3) {
			    			var cellText = document.createTextNode(valorR);
			    			cell.appendChild(cellText);
    						meuTr.appendChild(cell);
			    		}else if (i < 4) {
			    			var cellText = document.createTextNode(obs);
			    			cell.appendChild(cellText);
    						meuTr.appendChild(cell);
    						break;
			    		}
								
	               		
			    	}

			    	tbody_control.appendChild(meuTr);			    	
			    }
		});
}
