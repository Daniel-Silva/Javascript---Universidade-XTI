var n = new String ("Olá Mundo!");

document.writeln(n.length +"<br/>");//length me retorna o tamanho da string
document.writeln(n.charAt (2) +"<br/>");// charAt me retorna o valor na posição selecionada em ()
document.writeln(n.charCodeAt (2) +"<br/>");// charCodeAt me retorna o valor unicode na posição selecionada em ()
document.writeln(n.concat (" Daniel Silva") +"<br/>"); //concat concatena strings
document.writeln(String.fromCharCode(365, 366, 367) +"<br/>");// fromCharCode converte um unicode em string (obs. sempre utilizar String.fromCharCode)
document.writeln(n.indexOf ("Mundo") +"<br/>");// indexOf me retorna a posição da primeira ocorrência de uma determinada string
document.writeln(n.lastIndexOf ("!") +"<br/>"); // lastIndexOf me retorna a ultima ocorrência de uma string


