var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var pesoA = 3.5;
var pesoB = 7.5;
var somaDosPesos = 11;
var casasDecimais = 5;

var media = (((A * pesoA) + (B * pesoB)) / somaDosPesos).toFixed(casasDecimais);

console.log("MEDIA = " + media);