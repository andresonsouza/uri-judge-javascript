var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var pesoA = 2;
var pesoB = 3;
var pesoC = 5;
var somaDosPesos = 10;
var casasDecimais = 1;

var media = (((A * pesoA) + (B * pesoB) + (C * pesoC)) / somaDosPesos).toFixed(casasDecimais);

console.log("MEDIA = " + media);