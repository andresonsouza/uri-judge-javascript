var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var D = parseFloat(valores.shift());
var E = parseFloat(valores.shift());
var F = parseFloat(valores.shift());

var numeros = [A, B, C, D, E, F];

const numerosPositivos = numero => numero > 0 & numero !== 0;
const itensValidos = numeros.filter(numerosPositivos);

var total = 0;
for (let i = 0; i < itensValidos.length; i++) {
    total += itensValidos[i];
}

console.log(itensValidos.length + " valores positivos");
console.log((total / itensValidos.length).toFixed(1));