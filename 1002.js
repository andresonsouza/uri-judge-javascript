const { log } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var raio = parseFloat(valores.shift());

var area = (3.14159 * Math.pow(raio, 2)).toFixed(4);

console.log("A=" + area);