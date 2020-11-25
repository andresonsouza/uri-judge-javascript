// var input = require('fs').readFileSync('stdin', 'utf8');

// var valores = input.split("\n");

// var linha1 = valores.shift().split(" ");
// var linha2 = valores.shift().split(" ");

// var codigoDeUmaPeca1 = linha1.shift();
// var numeroDePecas1 = linha1.shift();
// var valorUnitarioPeca1 = linha1.shift();
// var valorTotal1 = numeroDePecas1 * valorUnitarioPeca1;

// var codigoDeUmaPeca2 = linha2.shift();
// var numeroDePecas2 = linha2.shift();
// var valorUnitarioPeca2 = linha2.shift();
// var valorTotal2 = numeroDePecas2 * valorUnitarioPeca2;

// var valorAPagar = (valorTotal1 + valorTotal2).toFixed(2);

// console.log("VALOR A PAGAR: R$ "+ valorAPagar);




var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n");

var [codigoDeUmaPeca1, numeroDePecas1, valorUnitarioPeca1] = valores.shift().split(" ");
var [codigoDeUmaPeca2, numeroDePecas2, valorUnitarioPeca2] = valores.shift().split(" ");

var valorTotal1 = numeroDePecas1 * valorUnitarioPeca1;
var valorTotal2 = numeroDePecas2 * valorUnitarioPeca2;

var valorAPagar = (valorTotal1 + valorTotal2).toFixed(2);

console.log("VALOR A PAGAR: R$ " + valorAPagar);
