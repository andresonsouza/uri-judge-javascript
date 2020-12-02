var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var tempo = parseInt(valores.shift());
var velocidade = parseInt(valores.shift());

const consumeMedio = 12;

var consumoFinal = (velocidade / consumeMedio * tempo).toFixed(3);

console.log(consumoFinal);