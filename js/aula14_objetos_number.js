/* Alterando um valor number do tipo primitivo
	para um valor Number do tipo objeto */

	var n = 120.35;// Valor number do tipo primirivo

	alert(typeof(n));// Me retorna o tipo de dado number

	var n = new Number (120.35);// Valor Number do tipo objeto

	alert(typeof(n));// Me retorna o tipo de dado objeto

	var x = new Number (121.361269);

	alert(Number.MAX_VALUE); //MAX_VALUE me retorna o maior numero em Javascript (notação cientifica)

	alert(Number.MIN_VALUE); //MIN_VALUE me retorna o maior numero em Javascript (notação cientifica)

	alert(Number.NEGATIVE_INFINITY); //NEGATIVE_INFINITY me retorna "-infinity"

	alert(Number.POSITIVE_INFINITY); //POSITIVE_INFINITY me retorna "infinity"

	alert(x.toFixed(2)); //toFixed limita o numero de casas decimais

	alert(x.toPrecision(4)); //toPrecision limita o numero total à ser apresentado

	alert(x.toExponential()); //toExponential converte este numero em formato de notação cientifica

	