var sorteio;
var megasena = new Array();

function sortearMegasena(){

	var resultado = document.getElementById('form_control')
	var sorteio ;
	var megasena = new Array ();

	var i = 0;

	while (i < 6 ){
	  sorteio = Math.round(Math.random()*59)+1;
	  
	  if (megasena.indexOf(sorteio) < 0) {
	    megasena.push(sorteio);
	    i++;
	  }
	}

	form_control.result_sort.value = megasena.join("  ");
}
