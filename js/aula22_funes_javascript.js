
// Função declarativa

function somar(){
	alert(2+2);
}

somar();

// Função Anônima

var somar2 = new Function("x", "y", "alert((x * y)+2)");

somar2(10, 15);

// Função Literal

var somar3 = function(x,y){
	alert(((x*y)+(y/x)-(x))+y);
}

somar3(2,2);