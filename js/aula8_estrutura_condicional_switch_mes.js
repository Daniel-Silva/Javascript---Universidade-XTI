
/* var sexo = prompt("Qual seu sexo?");

switch (sexo){
	case "Masculino":
		alert ("Seja bem-vindo!");
		break;
	case "Feminino":
		alert ("Seja bem-vinda!");
		break;
	default:
		alert ("Não identificamos seu sexo!");
} */


function verificarMes (){
	var formulario = document.getElementById ('form_mes');
	var diaMes = form_mes.date_number.value;

	switch (diaMes){
		case "1": form_mes.date_text.value = "Janeiro"; 
		break;
		case "2": form_mes.date_text.value = "Fevereiro"; 
		break;
		case "3": form_mes.date_text.value = "Março"; 
		break;
		case "4": form_mes.date_text.value = "Abril"; 
		break;
		case "5": form_mes.date_text.value = "Maio"; 
		break;
		case "6": form_mes.date_text.value = "Junho"; 
		break;
		case "7": form_mes.date_text.value = "Julho"; 
		break;
		case "8": form_mes.date_text.value = "Agosto"; 
		break;
		case "9": form_mes.date_text.value = "Setembro"; 
		break;
		case "10": form_mes.date_text.value = "Outubro"; 
		break;
		case "11": form_mes.date_text.value = "Novembro"; 
		break;
		case "12": form_mes.date_text.value = "Dezembro"; 
		break;
		default:
			form_mes.date_text.value = "Valor indefinido"
	}
}
