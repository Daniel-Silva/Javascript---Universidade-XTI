function calcularIMC (){
	var formulario = document.getElementById ("form_imc");

	var kilos = +form_imc.kilos.value; //Recebe o valor do input kilos
	var metros = +form_imc.metros.value; //Recebe o valor do input metros
    var centimetros = +form_imc.centimetros.value; //Recebe o valor do input centimetros
    
    var altura = (metros * 100 + centimetros) / 100;
    
	var imc = kilos / (altura * altura);

	form_imc.imc.value = imc.toFixed(2);

}