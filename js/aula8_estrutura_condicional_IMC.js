function calcularIMC (){
	var formulario = document.getElementById ("form_imc");

	var kilos = +form_imc.kilos.value; //Recebe o valor do input kilos
	var metros = +form_imc.metros.value; //Recebe o valor do input metros
    var centimetros = +form_imc.centimetros.value; //Recebe o valor do input centimetros
    
    var altura = (metros * 100 + centimetros) / 100;
    
	var imc = kilos / (altura * altura);

	form_imc.imc.value = imc.toFixed(2);

	if (imc <= 20){
		form_imc.table_imc.value = "Abaixo do peso";
	}
	else if (imc > 20 && imc <= 25){
		form_imc.table_imc.value = "Peso ideal";
	}
	else if (imc > 25 && imc <= 30){
		form_imc.table_imc.value = "Sobrepeso";
	}
	else if (imc > 30 && imc <= 35){
		form_imc.table_imc.value = "Obesidade moderada";
	}
	else if (imc > 35 && imc <= 40){
		form_imc.table_imc.value = "Obesidade severa";
	}
	else if (imc > 40 && imc <= 50){
		form_imc.table_imc.value = "Obesidade mórbida";
	}
	else {
		form_imc.table_imc.value = "Superobesidade";
	}
}



