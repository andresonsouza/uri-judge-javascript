var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var entrada = parseInt(valores.shift());

var tempoNecessario = entrada * 2;

console.log(tempoNecessario + " minutos")