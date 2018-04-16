function calculaValorTotal(){
    var qtdeItens = document.forms['formulario_vendas']['qtde'].value;
    var valorTotal = (qtdeItens * 109).toFixed(2);
    document.forms['formulario_vendas']['vtotal'].value = valorTotal;
}

window.onload = function(){
    document.forms['formulario_vendas']['qtde'].onblur = calculaValorTotal;
}
