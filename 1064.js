var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var D = parseFloat(valores.shift());
var E = parseFloat(valores.shift());
var F = parseFloat(valores.shift());

var numeros = [A, B, C, D, E, F]
var positivos = [];
var novoIndice = 0;

function selecionarPositivos(item, indice) {
    if (numeros[indice] > 0 & numeros[indice] !== 0) {
        positivos[novoIndice] = numeros[indice];
        novoIndice++;
    }
}
numeros.forEach(selecionarPositivos);

console.log(somarValores(numeros));
console.log(positivos.length + " valores positivos");

// FINALIZAR