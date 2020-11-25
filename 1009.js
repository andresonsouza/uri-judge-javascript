var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var nomeVendedor = valores.shift();
var salarioFixo = parseFloat(valores.shift());
var totalDeVendasEmDinheiro = parseFloat(valores.shift());

var comissao = totalDeVendasEmDinheiro * 0.15;
var salarioComComissao = (salarioFixo + comissao).toFixed(2);


console.log("TOTAL = R$ " + salarioComComissao);