var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var X = parseInt(valores.shift());
var Y = parseFloat(valores.shift());

var consumoMedio = (X / Y).toFixed(3);

console.log(consumoMedio + " km/l")