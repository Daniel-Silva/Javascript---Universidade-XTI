window.onload = function(){
	document.getElementById("logo").onclick = ligar;
	setInterval(apresentarHoras, 1000);
}

function ligar (){
	document.getElementById("logo").src = "img/lampada_acesa.png";
	setTimeout("desligar()", 3000);
}

function desligar(){
	document.getElementById("logo").src = "img/lampada_apagada.png";
}

function apresentarHoras(){
	var agora = new Date();
	var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
	document.getElementById("horas").innerHTML = horas;	
}